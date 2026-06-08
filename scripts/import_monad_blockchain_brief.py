"""Import data/monads/monad_blockchain_brief.md into src/chatMonadBlockchain.ts (chat-only)."""
from __future__ import annotations

from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
SRC_MD = REPO / "data" / "monads" / "monad_blockchain_brief.md"
OUT_TS = REPO / "src" / "chatMonadBlockchain.ts"


def ts_escape_for_raw(text: str) -> str:
    return text.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${}")


def emit_ts(text: str) -> str:
    body = ts_escape_for_raw(text)
    return f"""/**
 * Monad-Blockchain Hintergrund + Abgrenzung Monads AG – nur Chatbot.
 * Aktualisieren: python scripts/import_monad_blockchain_brief.py
 */

const MONAD_BLOCKCHAIN_TEXT = String.raw`{body}`;

export function getChatMonadBlockchainKnowledge(): string {{
  if (!MONAD_BLOCKCHAIN_TEXT.trim()) return "";
  return [
    "MONAD-BLOCKCHAIN & MONADS-ABGRENZUNG (nur bei Nachfrage):",
    "Monads (mit s) = Bewerbungsempfaenger monads.ch. Monad (ohne s) = Layer-1-Blockchain.",
    "Bei Verwechslung: klar und freundlich unterscheiden. Keine Behauptung, Monads sei ein Crypto-Unternehmen.",
    "",
    MONAD_BLOCKCHAIN_TEXT,
  ].join("\\n\\n");
}}
"""


def main() -> None:
    if not SRC_MD.exists():
        raise FileNotFoundError(SRC_MD)
    text = SRC_MD.read_text(encoding="utf-8").strip()
    OUT_TS.write_text(emit_ts(text), encoding="utf-8")
    print(f"OK: {len(text)} Zeichen -> {OUT_TS.relative_to(REPO)}")


if __name__ == "__main__":
    main()
