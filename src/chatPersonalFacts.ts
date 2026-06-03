/**
 * Ergänzende persönliche Angaben – nur für den Chatbot (System-Prompt).
 * Werden nicht in der App-Oberfläche angezeigt.
 */
export const ChatPersonalFacts = {
  verfuegbarkeitNeueStelle: "01.12.2026",
  geburtsort: "St. Gallen",
  grundschulen: [
    "Primarschule Hadwig, St. Gallen",
    "Sekundarschule KKSS (Flade), St. Gallen",
  ],
  eigenesAuto: false,
  mobilitaet: "Nein, ich bin mit dem ÖV unterwegs.",
} as const;

export function getChatPersonalFactsKnowledge(): string {
  return [
    "ERGÄNZENDE PERSÖNLICHE ANGABEN (nur für Chat-Antworten, autoritativ):",
    `- Frühestmöglicher Antritt einer neuen Stelle / Verfügbarkeit: ab ${ChatPersonalFacts.verfuegbarkeitNeueStelle}`,
    `- Geburtsort: ${ChatPersonalFacts.geburtsort} (Geburtsdatum: 10. Januar 1966)`,
    `- Besuchte Grundschulen / frühe Schulbildung: ${ChatPersonalFacts.grundschulen.join("; ")}`,
    `- Eigenes Auto: ${ChatPersonalFacts.eigenesAuto ? "Ja" : "Nein"} – ${ChatPersonalFacts.mobilitaet}`,
  ].join("\n");
}
