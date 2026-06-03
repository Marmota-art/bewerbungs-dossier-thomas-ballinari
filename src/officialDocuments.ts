/** Offizielle Kern-PDFs – Pfade unter public/documents/ (siehe scripts/generate_knowledge_base.py) */
export const OfficialPdfDocuments = {
  lebenslauf: {
    path: "/documents/lebenslauf.pdf",
    title: "Lebenslauf KI Specialist V2.3",
    fileName: "Thomas_Ballinari_Lebenslauf_KI_Specialist_V2.3.pdf",
  },
  zertifikate: {
    path: "/documents/zertifikate-ausbildung.pdf",
    title: "Zertifikate & Ausbildung",
    fileName: "Thomas_Ballinari_Zertifikate_Ausbildung.pdf",
  },
  arbeitszeugnisse: {
    path: "/documents/arbeitszeugnisse.pdf",
    title: "Arbeitszeugnisse (Original-Sammlung)",
    fileName: "Thomas_Ballinari_Arbeitszeugnisse_Professionell.pdf",
  },
} as const;
