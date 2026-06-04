"""Import Eidg. KI-Spezialist folder into src/chatKiSpecialistKnowledge.ts (chat-only)."""
from __future__ import annotations

import argparse
import re
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path

import fitz

REPO = Path(__file__).resolve().parents[1]
OUT_TS = REPO / "src" / "chatKiSpecialistKnowledge.ts"
DEFAULT_ROOT = Path(r"c:\Users\loewe\OneDrive\Desktop\Eidg. KI-Spezialist")

SKIP_DIRS = {
    ".obsidian",
    "node_modules",
    "__pycache__",
    "DISPO_THOMAS_files",
    "Business Cases",
}
SKIP_EXT = {
    ".css",
    ".js",
    ".json",
    ".svg",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".ico",
    ".woff",
    ".woff2",
    ".map",
    ".canvas",
    ".herunterladen",
    ".zip",
    ".mp4",
    ".m4a",
    ".exe",
    ".pptx",
    ".xlsx",
    ".ods",
    ".ipynb",
    ".pod",
    ".protondoc",
    ".html",
}
INCLUDE_EXT = {".md", ".txt", ".pdf", ".docx"}

TOTAL_BUDGET = 380_000
MAX_PER_FILE = 14_000
MAX_PDF_PAGES = 40

PRIORITY_KEYWORDS = [
    ("CLAUDECODE", 100),
    ("KIWI", 90),
    ("Prüfung", 85),
    ("Pruefung", 85),
    ("Lehrgang", 80),
    ("AIBS", 75),
    ("Praxisprojekt", 70),
    ("RAG", 65),
    ("SECI", 65),
    ("KMMM", 65),
    ("Strategie", 60),
    ("Geschaeft", 55),
    ("Geschäft", 55),
    ("Loesung", 50),
    ("Lösung", 50),
    ("Innovatek", 50),
    ("SmartGastro", 55),
    ("Fachausweis", 70),
    ("Modul", 45),
    ("Handlungsfeld", 60),
]


def path_priority(rel: str) -> int:
    score = 0
    upper = rel.upper()
    for kw, pts in PRIORITY_KEYWORDS:
        if kw.upper() in upper:
            score = max(score, pts)
    if rel.lower().endswith(".md"):
        score += 25
    return score


def ts_escape(text: str) -> str:
    return text.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def clean_text(text: str) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = re.sub(r"\n{4,}", "\n\n\n", text)
    return text.strip()


def extract_pdf(path: Path, limit: int) -> str:
    doc = fitz.open(path)
    parts: list[str] = []
    pages = min(doc.page_count, MAX_PDF_PAGES)
    for i in range(pages):
        parts.append(doc[i].get_text())
        if sum(len(p) for p in parts) >= limit:
            break
    doc.close()
    return clean_text("".join(parts))[:limit]


def extract_docx(path: Path, limit: int) -> str:
    try:
        with zipfile.ZipFile(path) as zf:
            xml = zf.read("word/document.xml")
        root = ET.fromstring(xml)
        ns = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
        texts = [el.text for el in root.iter(f"{ns}t") if el.text]
        return clean_text(" ".join(texts))[:limit]
    except Exception:
        return ""


def extract_file(path: Path, root: Path) -> str:
    limit = MAX_PER_FILE
    ext = path.suffix.lower()
    if ext in {".md", ".txt"}:
        return clean_text(path.read_text(encoding="utf-8", errors="ignore"))[:limit]
    if ext == ".pdf":
        return extract_pdf(path, limit)
    if ext == ".docx":
        return extract_docx(path, limit)
    return ""


def collect_files(root: Path) -> list[Path]:
    seen_names: dict[str, Path] = {}
    items: list[tuple[int, Path]] = []

    for path in root.rglob("*"):
        if not path.is_file():
            continue
        ext = path.suffix.lower()
        if ext not in INCLUDE_EXT:
            continue
        if any(part in SKIP_DIRS for part in path.parts):
            continue
        if path.name.startswith("."):
            continue

        rel = str(path.relative_to(root))
        prio = path_priority(rel)

        # Prefer CLAUDECODE / shorter paths on duplicate filenames
        existing = seen_names.get(path.name.lower())
        if existing:
            ex_rel = str(existing.relative_to(root))
            if prio > path_priority(ex_rel):
                seen_names[path.name.lower()] = path
            continue
        seen_names[path.name.lower()] = path
        items.append((prio, path))

    # Rebuild unique list
    unique = list(seen_names.values())
    unique.sort(key=lambda p: (-path_priority(str(p.relative_to(root))), str(p).lower()))
    return unique


def emit_ts(sections: list[tuple[str, str]], meta: dict) -> str:
    parts = [
        "/**",
        " * Eidg. KI-Spezialist – Lehrgangswissen nur fuer den Chatbot.",
        " * Nicht in der App-Oberflaeche sichtbar.",
        " *",
        f" * Quelle: {meta['root']}",
        f" * Dateien importiert: {meta['files']} | Zeichen: {meta['chars']}",
        " * Aktualisieren: python scripts/import_ki_specialist_folder.py",
        " */",
        "",
        "const KI_SPECIALIST_SECTIONS: { title: string; body: string }[] = [",
    ]

    for title, body in sections:
        parts.append(f"  {{ title: `{ts_escape(title)}`, body: `{ts_escape(body)}` }},")

    parts.extend(
        [
            "];",
            "",
            "export function getChatKiSpecialistKnowledge(): string {",
            "  if (!KI_SPECIALIST_SECTIONS.length) return \"\";",
            "  return [",
            '    "EIDG. KI-SPEZIALIST / AI BUSINESS SPECIALIST (Lehrgangswissen, Chatbot-Hintergrund):",',
            '    "Bei Fragen zu Ausbildung, Modulen, Handlungsfeldern, RAG, SECI, KMMM, Praxisprojekten, Pruefung und Fachbegriffen zuerst hier suchen.",',
            '    "Antworte in Ich-Form als Thomas Ballinari, Schweizer Schreibweise (ss statt ß).",',
            '    "",',
            '    ...KI_SPECIALIST_SECTIONS.map((s) => `### ${s.title}\\n${s.body}`),',
            '  ].join("\\n\\n");',
            "}",
            "",
        ]
    )
    return "\n".join(parts)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("root", nargs="?", help="Ordner Eidg. KI-Spezialist")
    args = parser.parse_args()

    root = Path(args.root) if args.root else DEFAULT_ROOT
    if not root.exists():
        raise FileNotFoundError(root)

    files = collect_files(root)
    sections: list[tuple[str, str]] = []
    used = 0
    imported = 0

    for path in files:
        if used >= TOTAL_BUDGET:
            break
        rel = str(path.relative_to(root))
        remaining = TOTAL_BUDGET - used
        text = extract_file(path, root)
        if len(text) < 80:
            continue
        if len(text) > remaining:
            text = text[:remaining] + "\n\n[... gekuerzt ...]"
        title = rel.replace("\\", "/")
        sections.append((title, text))
        used += len(text)
        imported += 1

    OUT_TS.write_text(
        emit_ts(sections, {"root": str(root), "files": imported, "chars": used}),
        encoding="utf-8",
    )
    print(f"OK: {imported} Dateien, {used} Zeichen -> {OUT_TS.relative_to(REPO)}")


if __name__ == "__main__":
    main()
