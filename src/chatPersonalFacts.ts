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
  /** Ehrliche Selbsteinschätzung für HR-Fragen (Schwächen / Entwicklungsfelder) */
  schwaechen: [
    "Tunnelblick: Ich sehe manchmal zu stark nur meine Lösung und wäge Alternativen nicht genug ab.",
    "Selbstreflexion kommt bei mir nicht sofort, eher zu spät.",
    "Ich lerne oft eher durch schmerzvolle Erfahrungen als durch intelligentes Durchdenken.",
  ],
  schwaechenReife:
    "Ich bin inzwischen gereift und kann mich bei meinen Schwachpunkten bewusst abholen. Ich arbeite aktiv daran, früher zu reflektieren und Optionen offen zu halten.",
} as const;

export function getChatPersonalFactsKnowledge(): string {
  return [
    "ERGÄNZENDE PERSÖNLICHE ANGABEN (nur für Chat-Antworten, autoritativ):",
    `- Frühestmöglicher Antritt einer neuen Stelle / Verfügbarkeit: ab ${ChatPersonalFacts.verfuegbarkeitNeueStelle}`,
    `- Geburtsort: ${ChatPersonalFacts.geburtsort} (Geburtsdatum: 10. Januar 1966)`,
    `- Besuchte Grundschulen / frühe Schulbildung: ${ChatPersonalFacts.grundschulen.join("; ")}`,
    `- Eigenes Auto: ${ChatPersonalFacts.eigenesAuto ? "Ja" : "Nein"} – ${ChatPersonalFacts.mobilitaet}`,
    "",
    "SCHWÄCHEN / ENTWICKLUNGSFELDER (bei Fragen wie «Wo sind deine Schwächen?», «Schwachstellen?» – ehrlich, in Ich-Form, autoritativ):",
    ...ChatPersonalFacts.schwaechen.map((s) => `- ${s}`),
    `- ${ChatPersonalFacts.schwaechenReife}`,
  ].join("\n");
}
