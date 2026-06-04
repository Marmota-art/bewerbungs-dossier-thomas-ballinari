"""Bundle data/zodiac/*.md and zodiac_faq.json into src/chatZodiacKnowledge.ts (chat-only)."""
from __future__ import annotations

import json
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
ZODIAC_DIR = REPO / "data" / "zodiac"
OUT_TS = REPO / "src" / "chatZodiacKnowledge.ts"

PROFILE = ZODIAC_DIR / "zodiac_profile.md"
TRANSITS = ZODIAC_DIR / "zodiac_transits_2026.md"
FAQ = ZODIAC_DIR / "zodiac_faq.json"


def ts_escape_for_raw(text: str) -> str:
    return text.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def format_faq(entries: list) -> str:
    lines = ["FRAGE-ANTWORT-REFERENZ (Zodiak-FAQ):"]
    for item in entries:
        q = " | ".join(item.get("questions", [])[:3])
        lines.append(f"- [{item.get('id', 'faq')}] Fragen: {q}")
        lines.append(f"  Antwort (Ich-Form): {item.get('answer', '').strip()}")
    return "\n".join(lines)


def build_body() -> str:
    parts: list[str] = []
    if PROFILE.exists():
        parts.append("=== GEBURTSHOROSKOP & GRUNDPROFIL ===\n")
        parts.append(PROFILE.read_text(encoding="utf-8").strip())
    if TRANSITS.exists():
        parts.append("\n\n=== TRANSITE & SCHWERPUNKTE 2026 ===\n")
        parts.append(TRANSITS.read_text(encoding="utf-8").strip())
    if FAQ.exists():
        data = json.loads(FAQ.read_text(encoding="utf-8"))
        parts.append("\n\n" + format_faq(data))
    return "\n\n".join(parts).strip()


def emit_ts(text: str) -> str:
    body = ts_escape_for_raw(text)
    return f"""/**
 * Zodiak-Wissensdatenbank – nur fuer den Chatbot (System-Prompt).
 * Nicht in der App-Oberflaeche sichtbar.
 *
 * Quellen: data/zodiac/zodiac_profile.md, zodiac_transits_2026.md, zodiac_faq.json
 * Aktualisieren: python scripts/import_zodiac_knowledge.py
 */

const ZODIAC_KNOWLEDGE_TEXT = String.raw`{body}`;

export function getChatZodiacKnowledge(): string {{
  if (!ZODIAC_KNOWLEDGE_TEXT.trim()) return "";
  return [
    "ZODIAK-WISSENSDATENBANK (Chatbot, persoenliche Interessen & Reflexionsmodelle):",
    "Astrologie ist fuer Thomas kein wissenschaftlicher Beweis, sondern Denkrahmen und Interesse.",
    "Bei Fragen zu Horoskop, Sternzeichen, Transiten, Pluto, Uranus, Saturn, MC, Spiritualitaet:",
    "1) Geburtshoroskop (Steinbock-Sonne, Wassermann-Aszendent) nutzen.",
    "2) Saturn-in-Fische und Pluto-Uranus-Konjunktion einbeziehen.",
    "3) Bezug zu SmartGastro.ai, KI und Innovation herstellen.",
    "4) FAQ-Antworten als Vorlage, aber immer in Ich-Form und natuerlich formulieren.",
    "",
    ZODIAC_KNOWLEDGE_TEXT,
  ].join("\\n\\n");
}}
"""


def main() -> None:
    for path in (PROFILE, TRANSITS, FAQ):
        if not path.exists():
            raise FileNotFoundError(f"Fehlt: {path}")

    text = build_body()
    OUT_TS.write_text(emit_ts(text), encoding="utf-8")
    print(f"OK: {len(text)} Zeichen -> {OUT_TS.relative_to(REPO)}")


if __name__ == "__main__":
    main()
