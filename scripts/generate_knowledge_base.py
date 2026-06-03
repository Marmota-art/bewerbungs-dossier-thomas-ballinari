"""Generate src/knowledgeBase.ts from official PDF sources."""
from __future__ import annotations

import shutil
from pathlib import Path

import fitz

REPO = Path(__file__).resolve().parents[1]
ROOT = Path(r"C:\Users\loewe\OneDrive\Desktop\Bewerbungsunterlagen\2026")

PDFS = {
    "lebenslauf": ROOT / "Thomas_Ballinari_Lebenslauf_KI_Specialist_V2.3.pdf",
    "zertifikate": ROOT / "Thomas_Ballinari_Zertifikate_Ausbildung.pdf",
    "arbeitszeugnisse": ROOT / "Thomas_Ballinari_Arbeitszeugnisse_Professionell.pdf",
}


def extract(path: Path) -> str:
    doc = fitz.open(path)
    return "".join(page.get_text() for page in doc).strip()


def main() -> None:
    texts = {key: extract(path) for key, path in PDFS.items()}

    docs_dir = REPO / "public" / "documents"
    docs_dir.mkdir(parents=True, exist_ok=True)
    shutil.copy2(PDFS["lebenslauf"], docs_dir / "lebenslauf.pdf")
    shutil.copy2(PDFS["zertifikate"], docs_dir / "zertifikate-ausbildung.pdf")
    shutil.copy2(PDFS["arbeitszeugnisse"], docs_dir / "arbeitszeugnisse.pdf")

    out = REPO / "src" / "knowledgeBase.ts"
    chunks = [
        "/** Auto-generated from official PDFs – run: python scripts/generate_knowledge_base.py */",
        "",
        "export const DocumentDownloads = {",
        '  lebenslauf: "/documents/lebenslauf.pdf",',
        '  zertifikate: "/documents/zertifikate-ausbildung.pdf",',
        '  arbeitszeugnisse: "/documents/arbeitszeugnisse.pdf",',
        "} as const;",
        "",
    ]

    const_names = {
        "lebenslauf": "LEBENSLAUF_TEXT",
        "zertifikate": "ZERTIFIKATE_TEXT",
        "arbeitszeugnisse": "ARBEITSZEUGNISSE_TEXT",
    }

    for key, const in const_names.items():
        chunks.append(f"const {const} = String.raw`{texts[key]}`;")
        chunks.append("")

    chunks.extend(
        [
            "export function getFullDocumentKnowledge(): string {",
            "  return [",
            '    "=== OFFIZIELLER LEBENSLAUF (PDF V2.3) ===",',
            "    LEBENSLAUF_TEXT,",
            '    "=== OFFIZIELLE ZERTIFIKATE UND AUSBILDUNG (PDF) ===",',
            "    ZERTIFIKATE_TEXT,",
            '    "=== OFFIZIELLE ARBEITSZEUGNISSE (PDF) ===",',
            "    ARBEITSZEUGNISSE_TEXT,",
            '  ].join("\\n\\n");',
            "}",
        ]
    )

    out.write_text("\n".join(chunks), encoding="utf-8")
    print("OK", out, sum(len(t) for t in texts.values()), "chars")


if __name__ == "__main__":
    main()
