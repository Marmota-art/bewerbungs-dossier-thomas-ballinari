/**
 * Monads-AG Hintergrundwissen (Blockchain-Abgrenzung, Nullwerte, …) – nur Chatbot.
 * Aktualisieren: python scripts/import_monads_knowledge.py
 */

const MONADS_KNOWLEDGE_TEXT = String.raw`# Monad (Blockchain) – Hintergrundwissen für den Chatbot

## Wichtige Abgrenzung

- **Monads** (mit «s») = Monads AG, monads.ch – SAP & Enterprise Intelligence, «Complexity into Clarity». Das ist das Unternehmen, bei dem Thomas sich für die AI-Domain bewirbt.
- **Monad** (ohne «s») = separate Layer-1-Blockchain im Web3-Ökosystem. Kein Arbeitgeber, kein Tochterunternehmen von Monads AG – nur bei Nachfrage thematisieren.

---

## Was ist Monad? (Kurzfassung nach cvj.ch, Nov. 2025)

Monad ist eine **Layer-1-Blockchain**, die zwei zentrale Web3-Probleme adressieren will:

1. **Mangelnde Skalierbarkeit** bei hoher Netzwerkauslastung
2. **Ineffiziente Ausführung** von Smart Contracts

### Technischer Kern

- **Vollständig EVM-äquivalent** (nicht nur «kompatibel»): Ethereum-Smart-Contracts laufen ohne Code-Anpassung oder Neukompilierung auf Monad – gleicher Bytecode wie auf Ethereum.
- **Pipelining & parallele Ausführung**: Statt strikt sequenzieller Verarbeitung werden Schritte über mehrere Phasen verteilt (wie ein Produktionsband) → deutlich höherer Durchsatz (Projektziel: Tausende Transaktionen pro Sekunde).
- **Kurze Blockzeit**: ca. eine Sekunde; Finalität möglichst innerhalb eines Slots.
- **Dezentralisierungsanspruch**: Betrieb auch mit vergleichsweise moderater Hardware, nicht nur Rechenzentren.

### Ökosystem & Zugang

- Bestehende Ethereum-Tools (MetaMask, Hardhat, Foundry) sollen nativ funktionieren.
- Für DeFi und grosse On-Chain-Apps: Migration ohne komplettes Re-Deployment, mit niedrigeren Gebühren und schnelleren Bestätigungen.

### Launch (Stand Artikel 25.11.2025)

- **MON-Token** und **Mainnet** am 24. November 2025 live.
- **TVL** (Total Value Locked) zum Start: rund 74 Mio. USD (DeFiLlama) – gegenüber Solana/Avalanche noch klein, typisch für frühen Mainnet-Start.
- **24h-Transaktionsgebühren**: gut 109'000 USD; **DEX-Volumen**: rund 73 Mio. USD.

### Vergleich Ethereum

Ethereum bleibt Marktführer, stösst bei hoher Last an Grenzen (Gas, Skalierung). Monad positioniert sich als schnellere Alternative mit gleichem Entwickler-Ökosystem durch EVM-Äquivalenz.

---

## Bezug zu Thomas / Monads-Bewerbung

Thomas bewirbt sich bei **Monads AG** (Enterprise AI, SAP, Integration) – nicht bei der Monad-Blockchain.

Falls im Gespräch **Monad vs. Monads** verwechselt werden: freundlich klären.

Falls Kunden von Monads über **Blockchain, DeFi, EVM-Migration oder Skalierung** sprechen: Thomas kann Monad technisch einordnen (Business-first: Nutzen, Risiko, Migrationsaufwand, ROI) – analog zu «Complexity into Clarity».

---

# Monads AG – Umgang mit Nullwerten (Recherche & fachliche Einordnung)

## Recherche-Ergebnis (öffentlich)

Auf **monads.ch** gibt es **kein eigenes Whitepaper** zum Thema «Nullwerte». Monads AG positioniert sich als SAP- und Integrationsberatung («Complexity into Clarity», Enterprise Intelligence, End-to-End-Integration). Der Firmenname ist ein **Anagramm von «Nomads»** (flexibles, vernetztes Arbeiten) – **nicht** die funktionale Programmier-Kategorie «Monad».

Fachlich lässt sich der Umgang mit Nullwerten bei Monads-Projekten aus **SAP-Standards**, **Integrations-Best-Practices** und der **Business-first-DNA** von Monads ableiten.

---

## Kernproblem in Enterprise-Integration

In SAP- und Schnittstellen-Projekten sind **drei Zustände** zu unterscheiden – sie werden oft verwechselt:

| Zustand | Bedeutung | Typische Folge bei falscher Behandlung |
|---------|-----------|----------------------------------------|
| **Feld fehlt** | XML/JSON-Tag ist nicht im Payload | Bestehender SAP-Wert wird fälschlich gelöscht |
| **Feld leer / initial** | Tag vorhanden, Wert ist leer (\`""\`, 0, initial) | Feld soll bewusst geleert werden |
| **SQL NULL** | Kein Wert in der Datenbankspalte | Joins schlagen fehl; Aggregationen verfälschen |

**Wichtig:** \`NULL\` ist **nicht** dasselbe wie ein **leerer String**. Ein leerer String ist ein Wert der Länge 0; NULL bedeutet «unbekannt / nicht gesetzt».

---

## Wie Monads-typische SAP-Integrationen Nullwerte handhaben

### 1. Explizite Semantik statt implizites Raten (Complexity → Clarity)

Monads arbeitet **business-first**: Jede Schnittstelle braucht eine **Mapping-Spezifikation**, die pro Feld festlegt:

- Pflichtfeld / optional / nullable
- Verhalten bei **fehlendem** Tag vs. **leerem** Tag vs. **NULL**
- Ob SAP-Bestand **erhalten**, **überschrieben** oder **gelöscht** wird

Das entspricht «Radical Transparency» im Projektmanagement: keine stillschweigenden Annahmen.

### 2. Extended XML Handling (ABAP Proxy / Web Services)

SAP löst das «fehlt vs. leer»-Problem mit **Extended XML Handling**:

- Aktivierung: \`set_extended_xml_handling( abap_true )\` am Payload-Protokoll
- Steuerung über **CONTROLLER-Tabelle** (\`PRXCTRLTAB\`) mit Werten aus Type Pool \`SAI\`:
  - \`sai_ctrl_none\` → Feld war **nicht** in der Nachricht → oft: **nichts ändern** in SAP
  - \`sai_ctrl_initial\` → Feld war da, aber **initial/leer** → Feld **bewusst leeren**
  - \`sai_ctrl_nil\` → explizites \`xsi:nil\` → semantisch «kein Wert»

**Monads-Praxis:** Middleware (PI/CPI) darf fehlende Tags **nicht** automatisch als leere Tags einfügen – sonst ist die Unterscheidung unmöglich.

### 3. COALESCE / IFNULL bei Joins und Abfragen

Bei **Outer Joins** und HANA-SQL entstehen NULL-Werte. Joins über Spalten, die NULL auf der einen und \`''\` auf der anderen Seite haben, liefern **keine Treffer**.

**Lösung:** \`COALESCE(spalte, '')\` in Join-Bedingungen oder SELECT-Listen – erstes Nicht-NULL-Argument wird verwendet.

In ABAP SQL: \`IS NULL\`, \`COALESCE()\` (siehe SAP ABAP Keyword Documentation).

### 4. Partial Updates & Replikation (Datenverlust vermeiden)

Wenn Drittsysteme **nur geänderte Felder** senden, interpretiert SAP fehlende Felder manchmal als «leer» und **überschreibt** gepflegte Stammdaten.

**Best Practice (SAP Community):**

- Inbound-**BAdI** oder Custom-Logik: nur Felder aktualisieren, die **explizit** im Payload stehen
- \`cl_abap_struct_utilities=>filled_components\` prüft, welche SAP-Felder bereits befüllt sind
- Fehlende Payload-Felder → **Bestand beibehalten**, nicht NULL drüberbügeln

### 5. Enterprise Intelligence & AI (Monads AI-Domain)

Bei KI- und Analytics-Projekten gilt zusätzlich:

- **NULL ≠ 0** in KPIs, Forecasts und Dashboards (sonst verzerrte ROI-Modelle)
- Fehlende Werte als **Datenqualitäts-Problem** sichtbar machen, nicht still ersetzen
- RAG/LLM: fehlende Quellen als Lücke benennen – analog zu Regel «keine erfundenen Fakten» im Chatbot

---

## Zusammenfassung: Monads-Muster für Nullwerte

1. **Unterscheiden:** fehlt / leer / NULL – nie vermischen  
2. **Dokumentieren:** Mapping-Spec pro Schnittstelle (Clarity)  
3. **SAP-Technik:** Extended XML Handling, COALESCE, IS NULL  
4. **Schützen:** Partial Updates ohne Datenverlust (BAdI, filled_components)  
5. **Business-first:** Semantik vor Code – Entscheidung am Kundennutzen, nicht am Default des Systems  

---

## Formulierung für Thomas (Ich-Form, Bewerbung)

«Bei Monads geht es mir um Klarheit bei Daten: Was bedeutet ein leeres Feld wirklich? In SAP-Integrationen unterscheide ich fehlende Tags, Initialwerte und NULL. Mit Extended XML Handling, COALESCE und sauberen Partial-Update-Regeln verhindern wir, dass Schnittstellen still Bestandsdaten löschen. Genau das passt zu Complexity into Clarity – und zu Enterprise Intelligence, wo Daten erst dann zählen, wenn sie belastbar sind.»`;

export function getChatMonadBlockchainKnowledge(): string {
  if (!MONADS_KNOWLEDGE_TEXT.trim()) return "";
  return [
    "MONADS-AG KONTEXT (nur bei Nachfrage):",
    "Monads (mit s) = Bewerbungsempfaenger monads.ch. Monad (ohne s) = Layer-1-Blockchain.",
    "Nullwerte: drei Zustaende unterscheiden (fehlt / leer / SQL NULL). SAP: Extended XML, COALESCE, Partial Updates.",
    "",
    MONADS_KNOWLEDGE_TEXT,
  ].join("\n\n");
}
