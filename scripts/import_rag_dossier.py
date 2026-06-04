"""Import RAG Bewerbungsdossier PDF into src/chatRagDossier.ts (chat-only)."""
from __future__ import annotations

import argparse
import shutil
from pathlib import Path

import fitz

REPO = Path(__file__).resolve().parents[1]
OUT_TS = REPO / "src" / "chatRagDossier.ts"
DEFAULT_PDF = Path(
    r"c:\Users\loewe\Proton Drive\thomas.ballinari\My files\Thomas Ballinari"
    r"\Thomas_Ballinari_RAG_Bewerbungsdossier_Chatbot.pdf"
)
BACKUP_ROOT = Path(r"C:\Users\loewe\OneDrive\Desktop\Bewerbungsunterlagen\2026")
BACKUP_NAME = "Thomas_Ballinari_RAG_Bewerbungsdossier_Chatbot.pdf"


def extract(path: Path) -> str:
    doc = fitz.open(path)
    return "".join(page.get_text() for page in doc).strip()


def ts_escape_for_raw(text: str) -> str:
    return text.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def emit_ts(text: str) -> str:
    body = ts_escape_for_raw(text)
    return f"""/**
 * RAG-Bewerbungsdossier – nur fuer den Chatbot (System-Prompt).
 * Nicht in der App-Oberflaeche sichtbar.
 *
 * Quelle: Thomas_Ballinari_RAG_Bewerbungsdossier_Chatbot.pdf
 * Aktualisieren: python scripts/import_rag_dossier.py
 */

const RAG_DOSSIER_TEXT = String.raw`{body}`;

export function getChatRagDossierKnowledge(): string {{
  if (!RAG_DOSSIER_TEXT.trim()) return "";
  return [
    "RAG-BEWERBUNGSDOSSIER (Chatbot-Wissensbasis, autoritativ fuer Interview- und Bewerbungsfragen):",
    "Nutze diesen Abschnitt mit hoher Prioritaet fuer Motivation, Staerken, Schwaechen, Rollenfit, Gespraechsantworten und Formulierungen in Ich-Form.",
    "Widersprueche: zuerst RAG-Dossier, dann Lebenslauf/Zertifikate-PDFs, dann JSON-Daten.",
    "",
    RAG_DOSSIER_TEXT,
  ].join("\\n\\n");
}}
"""


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf", nargs="?", help="Pfad zur RAG-PDF")
    args = parser.parse_args()

    src = Path(args.pdf) if args.pdf else DEFAULT_PDF
    if not src.exists():
        raise FileNotFoundError(f"PDF nicht gefunden: {src}")

    text = extract(src)
    OUT_TS.write_text(emit_ts(text), encoding="utf-8")

    backup = BACKUP_ROOT / BACKUP_NAME
    backup.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, backup)

    docs = REPO / "public" / "documents" / "rag-bewerbungsdossier-chatbot.pdf"
    docs.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, docs)

    print(f"OK: {len(text)} Zeichen -> {OUT_TS.relative_to(REPO)}")
    print(f"Backup: {backup}")


if __name__ == "__main__":
    main()
