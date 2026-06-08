"""Bundle all data/monads/*.md into src/chatMonadBlockchain.ts (chat-only)."""
from __future__ import annotations

from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
MONADS_DIR = REPO / "data" / "monads"
OUT_TS = REPO / "src" / "chatMonadBlockchain.ts"

ORDER = (
    "monad_blockchain_brief.md",
    "nullwerte_handling.md",
)


def ts_escape_for_raw(text: str) -> str:
    return text.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${}")


def build_body() -> str:
    parts: list[str] = []
    ordered = [MONADS_DIR / name for name in ORDER if (MONADS_DIR / name).exists()]
    for path in MONADS_DIR.glob("*.md"):
        if path not in ordered:
            ordered.append(path)
    for path in ordered:
        parts.append(path.read_text(encoding="utf-8").strip())
    return "\n\n---\n\n".join(parts).strip()


def emit_ts(text: str) -> str:
    body = ts_escape_for_raw(text)
    return f"""/**
 * Monads-AG Hintergrundwissen (Blockchain-Abgrenzung, Nullwerte, …) – nur Chatbot.
 * Aktualisieren: python scripts/import_monads_knowledge.py
 */

const MONADS_KNOWLEDGE_TEXT = String.raw`{body}`;

export function getChatMonadBlockchainKnowledge(): string {{
  if (!MONADS_KNOWLEDGE_TEXT.trim()) return "";
  return [
    "MONADS-AG KONTEXT (nur bei Nachfrage):",
    "Monads (mit s) = Bewerbungsempfaenger monads.ch. Monad (ohne s) = Layer-1-Blockchain.",
    "Nullwerte: drei Zustaende unterscheiden (fehlt / leer / SQL NULL). SAP: Extended XML, COALESCE, Partial Updates.",
    "",
    MONADS_KNOWLEDGE_TEXT,
  ].join("\\n\\n");
}}
"""


def main() -> None:
    if not MONADS_DIR.exists():
        raise FileNotFoundError(MONADS_DIR)
    text = build_body()
    OUT_TS.write_text(emit_ts(text), encoding="utf-8")
    print(f"OK: {len(text)} Zeichen, {len(list(MONADS_DIR.glob('*.md')))} Dateien -> {OUT_TS.relative_to(REPO)}")


if __name__ == "__main__":
    main()
