"""Import persoenliche Wissensdatenbank PDF into src/chatPersonalKnowledge.ts (chat-only)."""
from __future__ import annotations

import argparse
import shutil
from pathlib import Path

import fitz

REPO = Path(__file__).resolve().parents[1]
OUT_TS = REPO / "src" / "chatPersonalKnowledge.ts"
DEFAULT_PDF = (
    Path(r"C:\Users\loewe\OneDrive\Desktop\Bewerbungsunterlagen\2026")
    / "Thomas Ballinari – Persönliche Wissensdatenbank.pdf"
)
BACKUP_ROOT = Path(r"C:\Users\loewe\OneDrive\Desktop\Bewerbungsunterlagen\2026")
DOC_NAME = "persoenliche-wissensdatenbank-chatbot.pdf"


def extract(path: Path) -> str:
    doc = fitz.open(path)
    return "".join(page.get_text() for page in doc).strip()


def ts_escape_for_raw(text: str) -> str:
    return text.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def emit_ts(text: str) -> str:
    body = ts_escape_for_raw(text)
    return f"""/**
 * Persoenliche Wissensdatenbank – nur fuer den Chatbot (System-Prompt).
 * Nicht in der App-Oberflaeche sichtbar.
 *
 * Quelle: Thomas Ballinari – Persoenliche Wissensdatenbank.pdf
 * Aktualisieren: python scripts/import_personal_knowledge.py
 */

const PERSONAL_KNOWLEDGE_TEXT = String.raw`{body}`;

export function getChatPersonalKnowledgeBase(): string {{
  if (!PERSONAL_KNOWLEDGE_TEXT.trim()) return "";
  return [
    "PERSOENLICHE WISSENSDATENBANK (Chatbot, autoritativ fuer Identitaet, Werte, Motivation, persoenliche Fakten):",
    "Nutze bei Fragen zu Person, Hintergrund, Staerken, Arbeitsweise und Selbstdarstellung.",
    "Ergänzt das RAG-Bewerbungsdossier; bei Widerspruechen: RAG-Dossier fuer Interview-Antworten, diese Datenbank fuer persoenliche/kulturelle Passung.",
    "",
    PERSONAL_KNOWLEDGE_TEXT,
  ].join("\\n\\n");
}}
"""


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf", nargs="?", help="Pfad zur PDF")
    args = parser.parse_args()

    src = Path(args.pdf) if args.pdf else DEFAULT_PDF
    if not src.exists():
        raise FileNotFoundError(f"PDF nicht gefunden: {src}")

    text = extract(src)
    OUT_TS.write_text(emit_ts(text), encoding="utf-8")

    try:
        shutil.copy2(src, BACKUP_ROOT / src.name)
    except OSError as err:
        print(f"Hinweis: Backup uebersprungen ({err})")

    docs = REPO / "public" / "documents" / DOC_NAME
    docs.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, docs)

    print(f"OK: {len(text)} Zeichen -> {OUT_TS.relative_to(REPO)}")


if __name__ == "__main__":
    main()
