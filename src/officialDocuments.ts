/** Offizielle Kern-PDFs – Pfade unter public/documents/ (siehe scripts/generate_knowledge_base.py) */
export const OfficialPdfDocuments = {
  lebenslauf: {
    path: "/documents/lebenslauf.pdf",
    title: "Lebenslauf KI Specialist V2.3",
    fileName: "Thomas_Ballinari_Lebenslauf_KI_Specialist_V2.3.pdf",
  },
  zertifikate: {
    path: "/documents/zertifikate-ausbildung.pdf",
    title: "Zertifikate & Ausbildung V2",
    fileName: "Zertifikate_V2.pdf",
  },
  arbeitszeugnisse: {
    path: "/documents/arbeitszeugnisse.pdf",
    title: "Arbeitszeugnisse V2 (Original-Sammlung)",
    fileName: "Thomas_Ballinari_Zeugnisse_V2_LinkedTOC.pdf",
  },
} as const;
