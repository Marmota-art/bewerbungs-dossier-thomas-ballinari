/**
 * Massgebender Stand des Praxisprojekts SmartGastro.ai (Praxisprojekt V3, Abgabe 30. September 2026).
 * Dieser Abschnitt hat Vorrang vor älteren Zahlen in anderen Wissensbausteinen.
 */
export function getChatPraxisprojektV3Knowledge(): string {
  return `
=== SMARTGASTRO.AI PRAXISPROJEKT – MASSGEBENDER STAND (Praxisprojekt V3, Abgabe 30. September 2026) ===
Bei Widersprüchen zu älteren Angaben (z. B. Prototyp V3.3, ROI 152 %, Break-even 7 Monate, Onboarding CHF 7'500, MAPE unter 15 % nach 3 Monaten, Abgabe 22. August 2026) gilt IMMER dieser Abschnitt.

Rahmen
- Praxisprojekt zum eidg. Fachausweis AI Business Specialist, Auftraggeber: Fotios Kleidaras (Pächter und Küchenchef), Restaurant Löwenburg, Lienz. Abgabetermin: 30. September 2026.
- Ziel: fünf Use Cases bewerten und den besten bis zum Prototyp führen. Kein Rollout auf weitere Betriebe.
- Prototyp V3.5 im Pilotbetrieb seit Mai 2026: Regelbasis mit gelernten Delta-Korrekturen (3'242 Korrekturwerte, Stand 24.09.2026). XGBoost ist die Zielarchitektur, noch nicht im Einsatz. LightGBM und LSTM sind nicht umgesetzt.

Use Cases (gewichteter Nutzwert): UC01 Nachfrageprognose 4.55 (Platz 1), UC02 Bestelloptimierung 4.15, UC03 Personaleinsatzplanung 3.85, UC04 Anomalie-Erkennung 3.20, UC05 Tagesmenü-Optimierung 2.90. Gewichte: Datenverfügbarkeit 30 %, Wirtschaftlichkeit 20 %, strategische Passung 20 %, Machbarkeit 15 %, Akzeptanz 15 %.

Ausgangslage Löwenburg: Food Waste CHF 1'000 bis 2'000 pro Monat, Planung 45 Min. pro Tag, 12 Out-of-Stock pro Monat, Stresslevel im Team 7 von 10 (Ziele: Food Waste minus 50 %, 15 Min., 3 pro Monat, 4 von 10). Zuletzt gemessen: Stress 4.9 (Mai 2026). Jahresumsatz CHF 800'000, Wareneinsatz CHF 264'000 (33 %).

Business Case (Annahmen, nicht als Einsparung gemessen)
- Nutzen pro Jahr CHF 18'750: Food Waste halbiert 9'000, Menü-Optimierung 3'750, Zeitersparnis 2'875, Überstunden-/Stressreduktion 3'125.
- Kosten Jahr 1 CHF 12'300: Einrichtung/Datenbereinigung 6'000, Lizenz 400 pro Monat = 4'800, Onboarding 1'500. Wartung erst ab Jahr 2.
- Netto Jahr 1: plus CHF 6'450. Netto-ROI 52 %, Break-even 6.5 Monate, über drei Jahre 146 %.
- Ausstieg nach dem Quartalsreview kostet CHF 8'700. Danach ist die Lizenz monatlich kündbar.

Prognosegüte (ehrlich ausgewiesen)
- Walk-Forward-Backtest August 2026 (17 Betriebstage, 106 Speisenartikel): MAPE 43.2 % gegen 81.4 % der naiven Baseline (gleicher Wochentag der Vorwoche), also etwa halber Fehler. Je Artikel gewichtet (WMAPE) 63.0 %, Verzerrung minus 18.5 %.
- Das ist ein Backtest, kein Live-MAPE. Das Ziel unter 15 % gilt für die Top-10-Gerichte und ist an zwei volle Saisonzyklen und den Wechsel auf Gradient Boosting geknüpft. Eine Genauigkeit von unter 15 % ist NICHT erreicht und darf nicht behauptet werden.
- Datenlage: 801 Verkaufstage seit 02/2023, davon 698 mit Kassenzeilen. Davon sind erst 53 sauber, 339 doppelt gezählt und 306 ohne Uhrzeit. Die Bereinigung ist der erste Schritt der Roadmap zu Gradient Boosting (Entscheid frühestens 05/2028).
- Tagesmenü wurde im POS überschrieben. Täglicher Import seit September 2026, Anlässe erst seit 25.08.2026.

Risiken: Beschaffung eigener Hardware ist eingetreten (Januar bis April 2026, die On-Premise-Variante scheiterte an gefälschter Hardware). Lehre: Hardware nur über einen geprüften Lieferanten. Ticketabruf seit 11.09.2026 über das WaiterOne Back-Office (der API-Schlüssel wurde nicht erteilt, die REST API v2 wurde vom Entwickler als machbar bestätigt).

Teamumfrage Stresslevel (anonym, monatlich, Skala 1 bis 10): Februar 2026 6.75, März 5.6, April keine Befragung (Betriebsunterbruch), Mai 4.9 (N=9). Der Wert minus 30 % bezieht sich auf die gerundete Baseline 7, gegenüber 6.75 sind es rund minus 27 %.

Datenschutz (Datenschutzkonzept Version 1.3 vom 22. September 2026): Grundlage ist das Schweizer DSG und die DSV. Die Datenbank liegt in Zürich (Supabase auf AWS, Region eu-central-2), Backend und Oberfläche laufen in Frankfurt. Die KI (Google Gemini) erhält keine Personendaten, nur Ortschaften, Zeiträume, Artikelnamen, Mengen und Preise. KI-Vorschläge werden erst nach Freigabe durch eine Person übernommen. Gästedaten (Reservationen) werden nach 30 Tagen automatisch gelöscht. Die Demo-Instanz enthält ausschliesslich erzeugte Beispielwerte und keine Personendaten.

Demo: Die Online-Demo arbeitet mit angenommenen Zahlen (fiktiver Beispieltag), nicht mit echten Betriebsdaten. Das Forecast-System läuft im Betrieb seit 1. Mai 2026.
`;
}
