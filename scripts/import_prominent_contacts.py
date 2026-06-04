"""Bundle data/prominent/* into src/chatProminentContacts.ts (chat-only)."""
from __future__ import annotations

import json
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
DATA_DIR = REPO / "data" / "prominent"
OUT_TS = REPO / "src" / "chatProminentContacts.ts"

CONTACTS_MD = DATA_DIR / "prominent_contacts.md"
FAQ_JSON = DATA_DIR / "prominent_faq.json"


def ts_escape_for_raw(text: str) -> str:
    return text.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${}")


def format_faq(entries: list) -> str:
    lines = ["FRAGE-ANTWORT-REFERENZ (Prominente/VIP):"]
    for item in entries:
        q = " | ".join(item.get("questions", [])[:4])
        lines.append(f"- [{item.get('id', 'faq')}] Fragen: {q}")
        lines.append(f"  Antwort (Ich-Form): {item.get('answer', '').strip()}")
    return "\n".join(lines)


def build_body() -> str:
    parts: list[str] = []
    if CONTACTS_MD.exists():
        parts.append(CONTACTS_MD.read_text(encoding="utf-8").strip())
    if FAQ_JSON.exists():
        data = json.loads(FAQ_JSON.read_text(encoding="utf-8"))
        parts.append("\n\n" + format_faq(data))
    return "\n\n".join(parts).strip()


def emit_ts(text: str) -> str:
    body = ts_escape_for_raw(text)
    return f"""/**
 * Prominente & VIP-Kontakte – nur fuer den Chatbot (System-Prompt).
 * Nicht in der App-Oberflaeche sichtbar.
 *
 * Quellen: data/prominent/prominent_contacts.md, prominent_faq.json
 * Aktualisieren: python scripts/import_prominent_contacts.py
 */

const PROMINENT_CONTACTS_TEXT = String.raw`{body}`;

export function getChatProminentContactsKnowledge(): string {{
  if (!PROMINENT_CONTACTS_TEXT.trim()) return "";
  return [
    "PROMINENTE & VIP-KONTAKTE (Chatbot, nur bei expliziter Nachfrage):",
    "Persoenliche Begegnungen und Freundschaften – respektvoll, in Ich-Form, ohne Prahlerei.",
    "Niemals von sich aus in Bewerbungsantworten erwähnen.",
    "Nur Personen aus dieser Liste nennen; nichts erfinden.",
    "",
    PROMINENT_CONTACTS_TEXT,
  ].join("\\n\\n");
}}
"""


def main() -> None:
    if not CONTACTS_MD.exists():
        raise FileNotFoundError(f"Fehlt: {CONTACTS_MD}")

    text = build_body()
    OUT_TS.write_text(emit_ts(text), encoding="utf-8")
    print(f"OK: {len(text)} Zeichen -> {OUT_TS.relative_to(REPO)}")


if __name__ == "__main__":
    main()
