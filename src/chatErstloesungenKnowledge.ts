/** Wissen zur Seite «Erstlösungen» (Amagoo AG). Erstideen auf Basis öffentlicher Informationen. */
export function getChatErstloesungenKnowledge(): string {
  return `
=== ERSTLÖSUNGEN ZU DEN HAUPTAUFGABEN (Seite «Erstlösungen» in der Bewerbungsapp, Amagoo AG) ===
Einordnung: Das sind Erstideen für ein Gespräch, nur auf Basis öffentlich zugänglicher Informationen. Interne Abläufe und Systeme von Amagoo sind nicht bekannt. Alle Beispieldaten sind erfunden. Zielwerte werden erst nach einer Ausgangsmessung gesetzt. Reihenfolge und Bewertung der Einsatzfelder sind eine Erstschätzung und müssten mit Amagoo geprüft werden. Nichts davon ist eine bereits umgesetzte Lösung.

Einsatzfelder für erste Piloten
1. Artwork-Prüfung: automatische Prüfung der Druckdaten gegen das freigegebene Artwork, Meldung nur bei kritischen Abweichungen. Hinweis: Esko bewirbt ein eigenes KI-Prüfwerkzeug (Comply). Amagoo ist exklusiver Esko-Vertriebspartner. Deshalb nicht selbst bauen, sondern Comply und GlobalVision als Vergleichsmassstab nehmen.
2. Daten aus Kundenbriefings lesen: Eine KI füllt die Pflichtfelder und markiert Fehlendes, ein Mensch prüft vor der Auftragsanlage. Erfolgsmass im Pilot: Feldgenauigkeit bei mindestens 90 % der Pflichtfelder. Erster Schritt: Test mit 20 echten, anonymisierten Briefings.
3. Service-Desk-Triage: Anfragen vorsortieren, kategorisieren, Antwortvorschlag. Die Antwort sendet immer ein Mensch.
4. Quickwin: freigegebene allgemeine KI-Assistenz mit klaren Datenregeln.

Soll-Prozess «Briefing bis freigegebene Druckdaten»: 1 Briefing per Mail/Portal (automatisch Ticket in Jira), 2 KI extrahiert Pflichtfelder, Kontrolle 1 (Mensch prüft/ergänzt, sonst Rückfrage an den Kunden), 3 Auftrag anlegen und Job in der Automation Engine starten, 4 Prepress erstellt Druckdaten (regelbasiert), 5 automatische Prüfung gegen das Freigabe-Artwork, Kontrolle 2 (Mensch entscheidet bei kritischen Fehlern, sonst zurück zu 4), 6 Freigabe im Kundenportal mit automatischem Status, 7 Plattenauftrag, Fakturavorschlag und Kennzahlen. Das ERP wird nur über Schnittstellen angesprochen.

Briefing-Extraktion: Die Anweisung verlangt nur gültiges JSON mit Feldern wie kunde, artikel, verpackungstyp, format_mm, druckverfahren, sprachen, termin, anzahl_varianten und fehlende_angaben. Regel: Nichts erfinden. Beispiel (erfundenes Briefing «Müesli Beeren», Faltschachtel, Flexo, DE/FR/IT, 4 Sorten, bis 20. November): Kunde und Format fehlen, der Jahrgang des Termins ist angenommen. Das Ergebnis wurde nicht mit einem echten Modell erzeugt, es zeigt, was die Anweisung liefern soll.

KI-Ampel für die Richtlinie: Rot = vertrauliche Kundendaten (Artworks vor Launch, Markeninformationen, Rezepturen): nur freigegebene Tools mit Vertrag und Datenstandort Schweiz oder EU, nach Einzelfreigabe. Gelb = interne Daten: nur freigegebene Tools aus der Whitelist. Grün = öffentliche Daten: auch allgemeine Assistenten.

Kennzahlen (alle Ausgangswerte offen, «Baseline offen»): Durchlaufzeit Druckdaten, Erstfreigabequote, Korrekturschleifen pro Job, Automatisierungsgrad Standardschritte, Reaktionszeit Service Desk. Quellen: Jira, WebCenter, Automation Engine, Atlassian.
`;
}
