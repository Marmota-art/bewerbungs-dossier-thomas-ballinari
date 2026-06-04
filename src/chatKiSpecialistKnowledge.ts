/**
 * Eidg. KI-Spezialist – Lehrgangswissen nur fuer den Chatbot.
 * Nicht in der App-Oberflaeche sichtbar.
 *
 * Quelle: c:\Users\loewe\OneDrive\Desktop\Eidg. KI-Spezialist
 * Dateien importiert: 46 | Zeichen: 380020
 * Aktualisieren: python scripts/import_ki_specialist_folder.py
 */

const KI_SPECIALIST_SECTIONS: { title: string; body: string }[] = [
  { title: `CLAUDECODE/05-Lehrgang-AIBS/Kernprozesse-Probst.md`, body: `---
tags:
  - kiwi/modell
  - prüfungsrelevant
fach: KIWI.BA1A
dozent: Mike Krey
erstellt: 2026-05-06
---

# Kernprozesse nach Probst (Probst, Raub & Romhardt, 1997)

## Grundidee

Probst beschreibt Wissensmanagement als **integriertes Managementsystem** mit 8 Bausteinen: 6 operative Kernprozesse, die einen Kreislauf bilden, gerahmt von 2 strategischen Elementen.

---

## Das Modell im Überblick

\`\`\`
        ┌─────────────────────────────┐
        │      WISSENSZIELE           │  ← strategisch
        └──────────────┬──────────────┘
                       ↓
   ┌───────────────────────────────────────┐
   │  1. Wissensidentifikation             │
   │  2. Wissenserwerb                     │
   │  3. Wissensentwicklung                │  ← operativ
   │  4. Wissens(ver)teilung               │
   │  5. Wissensnutzung                    │
   │  6. Wissensbewahrung                  │
   └───────────────────────────────────────┘
                       ↓
        ┌─────────────────────────────┐
        │     WISSENSBEWERTUNG        │  ← strategisch
        └─────────────────────────────┘
                       ↓ (Feedback → Wissensziele)
\`\`\`

---

## Die 6 Kernprozesse im Detail

| # | Prozess | Kernfrage | Beispiel |
|---|---|---|---|
| 1 | **Wissensidentifikation** | Was wissen wir? Wo ist es? | Skill-Datenbank, Wissenslandkarte |
| 2 | **Wissenserwerb** | Was kaufen/holen wir von aussen? | Experten einkaufen, Lizenzen, Kooperationen |
| 3 | **Wissensentwicklung** | Was bauen wir intern neu auf? | F&E, Schulungen, Communities of Practice |
| 4 | **Wissens(ver)teilung** | Wer braucht was — und bekommt es? | Intranet, Wikis, Lessons Learned |
| 5 | **Wissensnutzung** | Setzen wir Wissen tatsächlich ein? | Entscheidungshilfen, Prozessintegration |
| 6 | **Wissensbewahrung** | Wie sichern wir Wissen vor Verlust? | Dokumentation, Nachfolgeplanung, Datenbanken |

---

## Die 2 strategischen Rahmenelemente

| Element | Funktion |
|---|---|
| **Wissensziele** | Geben Richtung vor — was soll die Organisation wissen und können? |
| **Wissensbewertung** | Messen, ob die Ziele erreicht wurden → Feedback für neue Ziele |

---

## Typische Prüfungsfalle

> Probst hat **8 Bausteine**, aber nur **6 Kernprozesse** (operative). Wissensziele und Wissensbewertung sind die strategischen Rahmenelemente — nicht Teil des operativen Kreislaufs.

---

## Relevanz für KI

| Kernprozess | KI-Unterstützung |
|---|---|
| Wissensidentifikation | Semantische Suche, Knowledge Graphs |
| Wissenserwerb | Web-Scraping, externe Datenquellen |
| Wissensentwicklung | Mustererkennung, Analyse grosser Datenmengen |
| Wissensverteilung | Chatbots, personalisierte Empfehlungen (RAG) |
| Wissensnutzung | Entscheidungsunterstützung, Copiloten |
| Wissensbewahrung | Automatische Dokumentation, Versionierung |

---

## Kernsatz für die Prüfung

> Das Probst-Modell strukturiert Wissensmanagement in 6 operative Kernprozesse (Identifikation, Erwerb, Entwicklung, Verteilung, Nutzung, Bewahrung), die durch strategische Wissensziele ausgerichtet und durch Wissensbewertung kontrolliert werden — ein geschlossener Managementkreislauf.

---

## Verwandte Themen

- [[SECI-Modell]]
- [[Wissenstreppe-North]]
- [[KMMM-Reifegrade]]
- [[RAG-Architektur]]
- [[Innovatek-Fallstudie]]` },
  { title: `CLAUDECODE/05-Lehrgang-AIBS/KMMM-Reifegrade.md`, body: `---
tags:
  - kiwi/modell
  - prüfungsrelevant
fach: KIWI.BA1A
dozent: Mike Krey
erstellt: 2026-05-06
---

# KMMM — Knowledge Management Maturity Model (Reifegrade 1–5)

## Grundidee

Das KMMM (basierend auf dem CMM aus der Softwareentwicklung) bewertet, **wie systematisch und reif** das Wissensmanagement einer Organisation ist — auf einer Skala von 1 (chaotisch) bis 5 (optimierend). Es zeigt, wo eine Organisation steht und was der nächste Entwicklungsschritt ist.

---

## Die 5 Reifegrade im Überblick

| Level | Name | Kernmerkmal |
|---|---|---|
| 1 | **Initial** | Chaotisch, reaktiv, personenabhängig |
| 2 | **Repeatable** | Erste Ansätze, aber nicht standardisiert |
| 3 | **Defined** | Prozesse definiert, dokumentiert, organisationsweit |
| 4 | **Managed** | Quantitativ gemessen und gesteuert |
| 5 | **Optimizing** | Kontinuierliche Verbesserung, lernende Organisation |

---

## Die 5 Reifegrade im Detail

### Level 1 — Initial
- Kein systematisches WM vorhanden
- Wissen liegt bei Einzelpersonen, geht beim Weggang verloren
- WM passiert zufällig, wenn überhaupt
- Risiko: Vollständige Wissensabhängigkeit von Schlüsselpersonen

### Level 2 — Repeatable
- Erste WM-Aktivitäten erkennbar (z.B. lokale Wikis, informelle Netzwerke)
- Noch nicht standardisiert — funktioniert in einzelnen Teams, nicht organisationsweit
- Erfolge sind personenabhängig und kaum reproduzierbar
- Risiko: Insellösungen, kein Transfer zwischen Abteilungen

### Level 3 — Defined
- WM-Prozesse sind definiert, dokumentiert und organisationsweit eingeführt
- Klare Rollen, Verantwortlichkeiten, Tools (z.B. zentrales Intranet, Lessons Learned)
- Wissen wird systematisch erfasst und geteilt
- Risiko: Prozesse vorhanden, aber Nutzung nicht gemessen

### Level 4 — Managed
- WM wird quantitativ gemessen (KPIs, Nutzungsraten, Qualitätsmetriken)
- Steuerung auf Basis von Daten, nicht Intuition
- Kontinuierliches Monitoring und Reporting
- Risiko: Fokus auf Messbarkeit kann Innovation hemmen

### Level 5 — Optimizing
- WM ist in die Unternehmenskultur integriert
- Kontinuierliche Verbesserung der WM-Prozesse selbst
- Organisation lernt systematisch aus Fehlern und Erfolgen
- Charakteristikum: Echte **lernende Organisation** (Senge)

---

## Visuell: Die Reifegradtreppe

\`\`\`
Level 5 │  Optimizing   ← Lernende Organisation, KI-gestützte WM
Level 4 │  Managed      ← KPIs, Steuerung, Messung
Level 3 │  Defined      ← Standardisierte Prozesse, Rollen, Tools
Level 2 │  Repeatable   ← Erste Ansätze, Insellösungen
Level 1 │  Initial      ← Chaos, Personenabhängigkeit
\`\`\`

---

## Relevanz für KI

| Reifegrad | KI-Beitrag |
|---|---|
| 1 → 2 | KI-Tools senken Einstiegshürde (z.B. einfache Chatbots) |
| 2 → 3 | RAG-Systeme helfen, Wissen zu zentralisieren und zu standardisieren |
| 3 → 4 | KI liefert Nutzungsanalysen, Qualitätsmetriken, Dashboards |
| 4 → 5 | KI erkennt Muster, schlägt Prozessverbesserungen vor, lernt mit |

---

## Kernsatz für die Prüfung

> Das KMMM bewertet die Reife des organisationalen Wissensmanagements in 5 Stufen — von chaotisch-reaktiv (Level 1) bis zur lernenden Organisation mit kontinuierlicher Verbesserung (Level 5). Es dient als Diagnose- und Entwicklungsinstrument, nicht als Zertifizierung.

---

## Verwandte Themen

- [[SECI-Modell]]
- [[Wissenstreppe-North]]
- [[Kernprozesse-Probst]]
- [[RAG-Architektur]]
- [[Innovatek-Fallstudie]]` },
  { title: `CLAUDECODE/05-Lehrgang-AIBS/RAG-Architektur.md`, body: `---
tags:
  - kiwi/modell
  - kiwi/ki
  - prüfungsrelevant
fach: KIWI.BA1A
dozent: Mike Krey
erstellt: 2026-05-06
---

# RAG-Architektur & KI im Wissensmanagement

## Grundidee

**RAG = Retrieval-Augmented Generation**

Ein LLM (Sprachmodell) weiss nur, was im Training enthalten war — kein aktuelles, kein internes, kein proprietäres Wissen. RAG löst dieses Problem: Es **retrievet** zur Laufzeit relevante Dokumente und **übergibt sie als Kontext** an das LLM, das dann eine fundierte Antwort generiert.

> RAG = richtiges Wissen zur richtigen Zeit + generative Sprachkompetenz

---

## Die Architektur — 5 Kernkomponenten

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    RAG-PIPELINE                         │
│                                                         │
│  [Dokumente]                                            │
│      ↓ Chunking + Embedding                             │
│  [Vektordatenbank]  ←── Indexierung (einmalig)          │
│                                                         │
│  [User-Query]                                           │
│      ↓ Embedding                                        │
│  [Retrieval] ──→ ähnlichste Chunks finden               │
│      ↓                                                  │
│  [Kontext + Query] ──→ [LLM] ──→ [Antwort + Quellen]   │
└─────────────────────────────────────────────────────────┘
\`\`\`

| Komponente | Funktion |
|---|---|
| **Dokumentenkorpus** | Wissensbasis (PDFs, Wikis, Handbücher, Datenbanken) |
| **Embedding-Modell** | Wandelt Text in Vektoren (mathematische Bedeutungsräume) um |
| **Vektordatenbank** | Speichert Vektoren, ermöglicht Ähnlichkeitssuche |
| **Retrieval-System** | Findet die relevantesten Textabschnitte (Chunks) zur Query |
| **LLM** | Generiert Antwort auf Basis von Query + retrieveten Chunks |

---

## Der RAG-Prozess — Schritt für Schritt

**Indexierungsphase (einmalig):**
1. Dokumente werden in Chunks (Abschnitte) aufgeteilt
2. Chunks werden in Vektoren umgewandelt (Embedding)
3. Vektoren werden in der Datenbank gespeichert

**Abfragephase (bei jeder Query):**
1. User stellt eine Frage
2. Frage wird ebenfalls in einen Vektor umgewandelt
3. Vektordatenbank sucht ähnlichste Chunks (semantische Suche)
4. Relevante Chunks + ursprüngliche Frage → an LLM übergeben
5. LLM generiert eine Antwort, verankert in den echten Dokumenten

---

## RAG vs. Fine-Tuning

| Kriterium | RAG | Fine-Tuning |
|---|---|---|
| Wissen aktualisieren | Einfach (neue Docs hinzufügen) | Aufwändig (Neutraining) |
| Kosten | Gering | Hoch |
| Quellenangaben | Möglich (Traceability) | Nicht möglich |
| Datenschutz | Intern bleibt intern | Modell enthält Wissen |
| Halluzinationen | Reduziert | Weiterhin möglich |

---

## RAG im Kontext der KM-Modelle

| Modell | Verbindung zu RAG |
|---|---|
| **Wissenstreppe (North)** | RAG operiert auf Ebene Information → unterstützt den Sprung zu Wissen |
| **Probst** | Unterstützt Wissensverteilung (4) und Wissensnutzung (5) direkt |
| **SECI** | Unterstützt Externalization (Tacit → Explizit) und Combination (Explizit + Explizit) |
| **KMMM** | Ermöglicht Sprung von Level 2 → 3 (Zentralisierung) und 3 → 4 (Messbarkeit) |

---

## Grenzen von RAG

- Qualität der Antwort hängt von **Qualität der Dokumente** ab (Garbage in, garbage out)
- Chunking-Strategie ist kritisch — falsch getrennte Chunks = verlorener Kontext
- Kein echtes Verstehen — RAG findet und formuliert, denkt aber nicht
- Tacites Wissen (SECI!) kann RAG nicht erfassen — nur explizit dokumentiertes

---

## Kernsatz für die Prüfung

> RAG verbindet eine semantische Suche über eine Vektordatenbank mit einem generativen Sprachmodell — so können Organisationen ihr explizites Wissen KI-gestützt nutzbar machen, ohne das Modell neu zu trainieren. RAG unterstützt v.a. Wissensverteilung und Wissensnutzung (Probst), operiert auf der Informations-/Wissensebene (North) und ergänzt Combination und Externalization (SECI).

---

## Verwandte Themen

- [[SECI-Modell]]
- [[Wissenstreppe-North]]
- [[Kernprozesse-Probst]]
- [[KMMM-Reifegrade]]
- [[Innovatek-Fallstudie]]` },
  { title: `CLAUDECODE/05-Lehrgang-AIBS/SECI-Modell.md`, body: `---
tags:
  - kiwi/modell
  - prüfungsrelevant
fach: KIWI.BA1A
dozent: Mike Krey
erstellt: 2026-05-06
---

# SECI-Modell (Nonaka & Takeuchi, 1995)

## Grundidee

Wissen existiert in zwei Formen:
- **Explizites Wissen** — dokumentierbar, übertragbar (Handbücher, Berichte, Daten)
- **Implizites / Tacites Wissen** — personengebunden, schwer verbalisierbar (Erfahrung, Intuition, Können)

Das SECI-Modell beschreibt, wie diese beiden Wissensformen in Organisationen **kontinuierlich ineinander umgewandelt** werden und dabei neues Wissen entsteht.

---

## Die vier Phasen

| Phase | Umwandlung | Kernmechanismus | Beispiel |
|---|---|---|---|
| **S**ocialization | Tacit → Tacit | Gemeinsame Erfahrung, Beobachtung, Imitation | Meister-Lehrling, Job Shadowing |
| **E**xternalization | Tacit → Explizit | Verbalisieren, Metaphern, Modelle | Erfahrungen als Leitfaden verschriftlichen |
| **C**ombination | Explizit → Explizit | Strukturieren, Verknüpfen, Synthetisieren | Berichte zusammenführen, Datenbanken aufbauen |
| **I**nternalization | Explizit → Tacit | Learning by Doing, Anwenden | Handbuch lesen und bis zur Routine üben |

---

## Die Wissensspirale

Das Modell ist **keine geschlossene Schleife**, sondern eine **aufsteigende Spirale**: Jeder Durchlauf erzeugt reicheres, tieferes Wissen — und skaliert von der Einzelperson über Teams zur gesamten Organisation.

\`\`\`
Individuum → Gruppe → Organisation → Interorganisational
      ↑______________ Spirale steigt auf ______________↑
\`\`\`

---

## Das Konzept "Ba"

**Ba** (japanisch: Ort/Raum) ist der **geteilte Kontext**, in dem Wissensumwandlung stattfindet — physisch, virtuell oder mental.

| Ba-Typ | Phase | Beschreibung |
|---|---|---|
| Originating Ba | Socialization | Face-to-face, Vertrauen aufbauen |
| Dialoguing Ba | Externalization | Dialog, Workshops |
| Systemising Ba | Combination | Online-Plattformen, Datenbanken |
| Exercising Ba | Internalization | Training, Praxis, Simulation |

---

## Kritik / Prüfungsrelevante Schwachstellen

- Modell stammt aus japanischem Kontext → kulturelle Übertragbarkeit begrenzt
- Tacites Wissen ist per Definition schwer messbar → Externalization bleibt oft unvollständig
- Spirale setzt **psychologische Sicherheit** und **Vertrauen** voraus (wird im Modell unterschätzt)

---

## Kernsatz für die Prüfung

> Das SECI-Modell erklärt organisationale Wissensentstehung als kontinuierliche Spirale zwischen implizitem und explizitem Wissen durch vier Umwandlungsprozesse (Sozialisation, Externalisierung, Kombination, Internalisierung), eingebettet in einen geteilten Kontext (Ba).

---

## Verwandte Themen

- [[Wissenstreppe-North]]
- [[Kernprozesse-Probst]]
- [[KMMM-Reifegrade]]
- [[RAG-Architektur]]
- [[Innovatek-Fallstudie]]` },
  { title: `CLAUDECODE/05-Lehrgang-AIBS/Wissenstreppe-North.md`, body: `---
tags:
  - kiwi/modell
  - prüfungsrelevant
fach: KIWI.BA1A
dozent: Mike Krey
erstellt: 2026-05-06
---

# Wissenstreppe nach North

## Grundidee

Klaus North beschreibt in seiner **wissensorientierten Unternehmensführung**, wie aus rohen Zeichen schrittweise Wettbewerbsfähigkeit entsteht — jede Stufe fügt etwas Entscheidendes hinzu.

---

## Die 8 Stufen

| Stufe | Was wird hinzugefügt | Ergebnis |
|---|---|---|
| **Zeichen** | — | Buchstaben, Zahlen, Symbole ohne Kontext |
| **Daten** | + Syntax / Ordnung | Strukturierte Zeichen (z.B. Tabelle) |
| **Information** | + Bedeutung / Kontext | Daten, die eine Frage beantworten |
| **Wissen** | + Vernetzung + Erfahrung | Verknüpfte Information, handlungsrelevant |
| **Können** | + Anwendungsfähigkeit | Wissen, das ich einsetzen kann |
| **Handeln** | + Wollen / Motivation | Können, das ich tatsächlich einsetze |
| **Kompetenz** | + Reflexion + Persönlichkeit | Handeln mit Urteilsvermögen |
| **Wettbewerbsfähigkeit** | + Einzigartigkeit | Kompetenz, die am Markt differenziert |

---

## Die entscheidende Grenze: Wissen vs. Information

> Daten und Information können gespeichert werden. **Wissen entsteht erst im menschlichen Kopf** — durch Vernetzung, Erfahrung und Interpretation.

Das ist die kritische Trennlinie im Modell — und direkt relevant für KI im WM.

---

## Relevanz für KI (Prüfungsrelevant!)

| Stufe | KI-Leistungsfähigkeit |
|---|---|
| Zeichen → Daten → Information | Stark — KI verarbeitet, strukturiert, sucht |
| Wissen | Teilweise — RAG unterstützt, ersetzt aber nicht |
| Können → Handeln → Kompetenz | Schwach — bleibt menschliche Domäne |
| Wettbewerbsfähigkeit | Nur durch Mensch + KI kombiniert erreichbar |

---

## Kritik

- Modell ist linear — reale Wissensarbeit verläuft oft zirkulär
- Grenzen zwischen Stufen sind fliessend, nicht immer trennscharf
- "Wettbewerbsfähigkeit" ist ein Unternehmenskonstrukt — für Individuen weniger passend

---

## Kernsatz für die Prüfung

> Die Wissenstreppe nach North zeigt, dass Wissen keine blosse Informationsansammlung ist, sondern durch Vernetzung und Erfahrung entsteht. Wettbewerbsfähigkeit setzt voraus, dass Wissen in Können, Handeln und Kompetenz überführt wird — ein Prozess, den KI unterstützen, aber nicht ersetzen kann.

---

## Verwandte Themen

- [[SECI-Modell]]
- [[Kernprozesse-Probst]]
- [[KMMM-Reifegrade]]
- [[RAG-Architektur]]
- [[Innovatek-Fallstudie]]` },
  { title: `CLAUDECODE/96-Praxisprojekte/Innovatek-Fallstudie.md`, body: `---
tags:
  - kiwi/fallstudie
  - prüfungsrelevant
fach: KIWI.BA1A
dozent: Mike Krey
erstellt: 2026-05-06
quelle: Innovatek_Fallstudie_WIMA.pdf
---

# Innovatek-Fallstudie — Prüfungsanalyse

## Das Unternehmen auf einen Blick

Die Innovatek Gruppe ist ein mittelständisches Technologie- und Dienstleistungsunternehmen, Sitz Deutschschweiz, gegründet 1987, 820 MA, CHF 157 Mio. Umsatz.

| Bereich | Branche | MA | Umsatz | Kernproblem |
|---|---|---|---|---|
| **ProTech AG** | Maschinenbau & Medizintechnik | 350 | CHF 82 Mio. | Implizites Expertenwissen geht mit Rentnern verloren |
| **GreenTech Solutions** | Smarte Gebäudesensorik | 220 | CHF 34 Mio. | Teams arbeiten parallel, ohne voneinander zu wissen |
| **DataCore Services** | IT & Datenmanagement | 250 | CHF 41 Mio. | Hohe Fluktuation, Wissen geht mit jedem Abgang verloren |

**Demografisches Risiko:** 31 % (254 Personen) gehen bis 2039 in Rente — darunter alle Schlüsselträger.

---

## Die 4 Schlüsselpersonen

| Person | Rolle | Problem |
|---|---|---|
| **Hans Meier** | Maschinenführer, 58 J., ProTech | 31 Jahre Erfahrung, geht 2027 in Rente — nirgendwo dokumentiert |
| **Sandra Huber** | IT-Projektleiterin, 41 J., DataCore | 2 Std./Tag mit Suchen, einzige mit Projektüberblick = Black Box |
| **Priya Nair** | Senior-Entwicklerin, 36 J., GreenTech | Einzige mit Algorithmus-Designwissen, hat Konkurrenzangebot |
| **Thomas Berger** | CTO Holding, 52 J. | Budget genehmigt, aber 3 Bereiche wollen 3 verschiedene Systeme |

---

## Analyse mit den KM-Modellen

### SECI-Modell

| Phase | Problem bei Innovatek | Lösung |
|---|---|---|
| **Socialization** | Schichtwissen bei ProTech nur mündlich | Tandem-Modell Hans Meier + Nachfolger, Job Shadowing |
| **Externalization** | Hans' Wissen nie dokumentiert, Priya's Designentscheide fehlen | Video-Dokumentation, Entscheidungs-Logs in Sprints |
| **Combination** | GreenTech: 2 Teams entwickeln denselben Algorithmus parallel | Zentrale Wissensdatenbank + RAG für Wissenssuche |
| **Internalization** | DataCore: 4–6 Monate Onboarding, kein strukturiertes Lernen | Strukturiertes Onboarding mit dokumentiertem Wissen + KI-Assistent |

> Kerndiagnose SECI: Innovatek steckt in der Socialization-Falle — Wissen bleibt tacit und verlässt das Unternehmen mit den Personen.

---

### Wissenstreppe (North)

\`\`\`
Wettbewerbsfähigkeit  ← Ziel, noch nicht erreicht
Kompetenz             ← Einzelpersonen ja, Organisation nein
Handeln               ← blockiert: Wissen nicht auffindbar
Wissen                ← fehlt organisational
Information           ← 67 % finden Infos NICHT ← Innovatek steckt hier
Daten                 ← 3 Wiki-Systeme, ungepflegt
Zeichen               ← vorhanden
\`\`\`

> Innovatek ist auf Daten-/Informationsebene blockiert. Ziel: Sprung zu Wissen und Können auf Organisationsebene.

---

### Probst — 6 Kernprozesse

| Prozess | Status bei Innovatek |
|---|---|
| **Wissensidentifikation** | Kein Überblick, welches Wissen kritisch ist |
| **Wissenserwerb** | Unkontrolliert: 3 Wiki-Systeme, kein Standard |
| **Wissensentwicklung** | GreenTech entwickelt doppelt (Parallelarbeit) |
| **Wissensverteilung** | 67 % finden Infos nicht, Sandra 2 Std./Tag Suche |
| **Wissensnutzung** | Wissen vorhanden, aber nicht zugänglich → bleibt ungenutzt |
| **Wissensbewahrung** | Unter 15 % des Wissens bei Austritt gesichert — Hans Meier-Risiko |

> Schwächster Prozess: Wissensbewahrung. Grösste Sofortmassnahme: Hans Meier-Programm vor 2027.

---

### KMMM — Reifegrad

| Bereich | Aktueller Reifegrad | Begründung |
|---|---|---|
| **ProTech** | Level 1 | Wissen in Köpfen, kaum dokumentiert, personenabhängig |
| **GreenTech** | Level 1–2 | Erste Ansätze (agile Sprints), aber nicht standardisiert, Parallelarbeit |
| **DataCore** | Level 2–3 | RAG-Pilot läuft, KI-affine Kultur, aber noch keine Governance |
| **Ziel (alle)** | Level 3–4 | Definierte Prozesse, dann messbare KPIs |

---

### RAG — Konkrete Anwendung

| Bereich | RAG-Einsatz | Besonderheit |
|---|---|---|
| **DataCore** | ✅ Pilot läuft: 20 Min. → 40 Sek. | Datenschutz-Hürde: Kundendaten |
| **GreenTech** | RAG-Wissensbasis für Sprint-Entscheide | Verhindert Parallelarbeit |
| **ProTech** | RAG für Maschinenwissen + Compliance | Rückverfolgbarkeit (ISO/MDR/FDA) |

---

## Kennzahlen: Ist vs. Ziel

| Kennzahl | Heute | Ziel mit KI-WM |
|---|---|---|
| Onboarding neue MA | 4–6 Monate | 6–8 Wochen |
| Infos «oft nicht finden» | 67 % | unter 20 % |
| Fehlerquote ProTech | +18 % | Ausgangsniveau |
| Gepflegte Wiki-Dokumente | < 30 % | > 85 % |
| Zeitaufwand Informationssuche | 1,8 Std./Tag | < 30 Min. |
| Wissen bei Austritt gesichert | < 15 % | > 80 % |
| KI-Tool-Nutzung | 12 % | > 70 % |

---

## Besonderheiten je Bereich (für Prüfungsfragen)

**ProTech:** Hochreguliert (ISO 13485, MDR, FDA) → jede Wissensänderung muss rückverfolgbar sein. 8 von 22 Schlüsselpersonen gehen bis 2028 in Rente.

**GreenTech:** Agile Sprints, Entscheide selten dokumentiert. 2023: zwei Teams entwickelten denselben Algorithmus parallel — unbemerkt.

**DataCore:** KI-affinste Kultur (38 % nutzen KI privat). RAG-Pilot 2024 erfolgreich. Grösste Hürde: Datenschutz bei Kundendaten.

---

## Kernsatz für die Prüfung

> Die Innovatek-Fallstudie zeigt ein typisches Level-1/2-Unternehmen (KMMM): Wissen ist vorhanden, aber personengebunden und nicht externalisiert (SECI). Die Organisation ist auf Informationsebene blockiert (North) und versagt bei Wissensbewahrung und -verteilung (Probst). Der RAG-Pilot bei DataCore zeigt den Weg — die Herausforderung ist Governance: ein System für drei verschiedene Kulturen.

---

## Verwandte Themen

- [[SECI-Modell]]
- [[Wissenstreppe-North]]
- [[Kernprozesse-Probst]]
- [[KMMM-Reifegrade]]
- [[RAG-Architektur]]` },
  { title: `CLAUDECODE/97-Prüfungsvorbereitung/Lernkarten-KIWI-BA1A.md`, body: `---
tags:
  - kiwi/lernkarten
  - prüfungsrelevant
fach: KIWI.BA1A
erstellt: 2026-05-06
---

# Lernkarten KIWI.BA1A

> Format: Obsidian Spaced Repetition Plugin (\`Question :: Answer\` / Mehrzeilig mit \`?\`)
> Quelle: [[SECI-Modell]], [[Wissenstreppe-North]], [[Kernprozesse-Probst]], [[KMMM-Reifegrade]], [[RAG-Architektur]], [[Innovatek-Fallstudie]]

---

## SECI-Modell

Was beschreibt das SECI-Modell?
?
Das SECI-Modell (Nonaka & Takeuchi, 1995) erklärt, wie Organisationen neues Wissen schaffen — durch eine kontinuierliche Spirale zwischen implizitem (tacitem) und explizitem Wissen über vier Umwandlungsprozesse.

---

Welche zwei Wissensarten unterscheidet das SECI-Modell?
?
**Explizites Wissen** — dokumentierbar, übertragbar (Handbücher, Daten)
**Implizites / Tacites Wissen** — personengebunden, schwer verbalisierbar (Erfahrung, Intuition)

---

Was bedeutet **Socialization** im SECI-Modell?
?
Tacit → Tacit: Wissenstransfer durch gemeinsame Erfahrung, Beobachtung und Imitation.
Beispiel: Meister-Lehrling, Job Shadowing.

---

Was bedeutet **Externalization** im SECI-Modell?
?
Tacit → Explizit: Implizites Wissen wird durch Metaphern, Modelle oder Sprache verschriftlicht.
Beispiel: Erfahrungsberichte, Leitfäden, Dokumentationen.

---

Was bedeutet **Combination** im SECI-Modell?
?
Explizit → Explizit: Bestehendes explizites Wissen wird verknüpft und neu strukturiert.
Beispiel: Berichte zusammenführen, Datenbanken aufbauen.

---

Was bedeutet **Internalization** im SECI-Modell?
?
Explizit → Tacit: Explizites Wissen wird durch Anwenden zur Routine verinnerlicht.
Beispiel: Handbuch lesen und üben, bis es zur zweiten Natur wird.

---

Was ist **Ba** im SECI-Modell?
?
Ba (japanisch: Ort/Raum) ist der geteilte Kontext — physisch, virtuell oder mental — in dem Wissensumwandlung stattfindet. Ohne Ba keine Wissensspirale.

---

Warum ist das SECI-Modell eine Spirale und kein Kreislauf?
?
Jeder Durchlauf erzeugt reicheres, tieferes Wissen. Die Spirale skaliert von der Einzelperson über Teams zur gesamten Organisation — Wissen wächst mit jedem Zyklus.

---

Nenne zwei Kritikpunkte am SECI-Modell.
?
1. Kulturelle Übertragbarkeit begrenzt (Ursprung: Japan)
2. Tacites Wissen ist schwer messbar → Externalization bleibt oft unvollständig
3. Spirale setzt psychologische Sicherheit und Vertrauen voraus (wird unterschätzt)

---

## Wissenstreppe nach North

Was beschreibt die Wissenstreppe nach North?
?
Die Wissenstreppe (Klaus North) zeigt, wie aus rohen Zeichen schrittweise Wettbewerbsfähigkeit entsteht — in 8 Stufen, wobei jede Stufe dem Vorherigen etwas Entscheidendes hinzufügt.

---

Nenne die 8 Stufen der Wissenstreppe nach North (in der richtigen Reihenfolge).
?
1. Zeichen
2. Daten (+ Syntax)
3. Information (+ Bedeutung)
4. Wissen (+ Vernetzung + Erfahrung)
5. Können (+ Anwendungsfähigkeit)
6. Handeln (+ Wollen / Motivation)
7. Kompetenz (+ Reflexion + Persönlichkeit)
8. Wettbewerbsfähigkeit (+ Einzigartigkeit)

---

Was ist der Unterschied zwischen **Information** und **Wissen** bei North?
?
Information = Daten mit Bedeutung (kann gespeichert werden).
Wissen = Information + Vernetzung + Erfahrung — entsteht **erst im menschlichen Kopf** durch Interpretation. Das ist die kritische Trennlinie im Modell.

---

Was fügt jede Stufe der Wissenstreppe konkret hinzu?
?
Zeichen → Daten: Syntax / Ordnung
Daten → Information: Bedeutung / Kontext
Information → Wissen: Vernetzung + Erfahrung
Wissen → Können: Anwendungsfähigkeit
Können → Handeln: Wollen / Motivation
Handeln → Kompetenz: Reflexion + Persönlichkeit
Kompetenz → Wettbewerbsfähigkeit: Einzigartigkeit

---

Wo auf der Wissenstreppe ist KI stark — und wo schwach?
?
**Stark:** Zeichen → Daten → Information (strukturieren, suchen, verarbeiten)
**Teilweise:** Wissen (RAG unterstützt, ersetzt nicht)
**Schwach:** Können, Handeln, Kompetenz — bleibt menschliche Domäne
**Nur kombiniert:** Wettbewerbsfähigkeit (Mensch + KI)

---

Nenne einen Kritikpunkt an der Wissenstreppe nach North.
?
Das Modell ist linear — reale Wissensarbeit verläuft oft zirkulär. Die Grenzen zwischen den Stufen sind fliessend und in der Praxis nicht immer trennscharf.

---

## Kernprozesse nach Probst

Was beschreibt das Probst-Modell?
?
Probst (Probst, Raub & Romhardt, 1997) beschreibt Wissensmanagement als integriertes Managementsystem mit 8 Bausteinen: 6 operative Kernprozesse (Kreislauf) + 2 strategische Rahmenelemente (Wissensziele & Wissensbewertung).

---

Wie viele Bausteine hat das Probst-Modell — und wie viele davon sind Kernprozesse?
?
**8 Bausteine** insgesamt:
- 6 operative **Kernprozesse** (Kreislauf)
- 2 strategische Rahmenelemente (Wissensziele + Wissensbewertung)
⚠️ Prüfungsfalle: Nicht alle 8 sind Kernprozesse!

---

Nenne die 6 Kernprozesse nach Probst in der richtigen Reihenfolge.
?
1. Wissensidentifikation
2. Wissenserwerb
3. Wissensentwicklung
4. Wissens(ver)teilung
5. Wissensnutzung
6. Wissensbewahrung

---

Was ist die Kernfrage der **Wissensidentifikation**?
?
„Was wissen wir — und wo ist dieses Wissen?"
Ziel: Transparenz über interne und externe Wissensbestände schaffen.
Beispiel: Wissenslandkarte, Skill-Datenbank.

---

Was unterscheidet **Wissenserwerb** von **Wissensentwicklung**?
?
**Wissenserwerb** = Wissen von **aussen** beschaffen (Experten einkaufen, Lizenzen, Kooperationen).
**Wissensentwicklung** = Wissen **intern** aufbauen (F&E, Schulungen, Communities of Practice).

---

Warum ist **Wissensnutzung** ein eigener Prozess — und nicht selbstverständlich?
?
Wissen wird oft gesammelt, aber nicht eingesetzt. Wissensnutzung stellt sicher, dass vorhandenes Wissen tatsächlich in Entscheidungen und Prozesse fliesst — das ist keine Selbstverständlichkeit in Organisationen.

---

Was sind die zwei strategischen Rahmenelemente bei Probst?
?
**Wissensziele:** Geben strategische Richtung vor — was soll die Organisation wissen und können?
**Wissensbewertung:** Misst, ob die Ziele erreicht wurden → liefert Feedback für neue Wissensziele.

---

Nenne für jeden Probst-Kernprozess eine KI-Anwendung.
?
1. Wissensidentifikation → Semantische Suche, Knowledge Graphs
2. Wissenserwerb → Web-Scraping, externe Datenquellen
3. Wissensentwicklung → Mustererkennung, Datenanalyse
4. Wissensverteilung → Chatbots, RAG-Systeme
5. Wissensnutzung → Copiloten, Entscheidungsunterstützung
6. Wissensbewahrung → Automatische Dokumentation, Versionierung

---

## KMMM — Reifegrade 1–5

Was ist das KMMM und wozu dient es?
?
Das Knowledge Management Maturity Model bewertet, wie systematisch und reif das Wissensmanagement einer Organisation ist — auf einer Skala von 1 bis 5. Es dient als **Diagnose- und Entwicklungsinstrument**, nicht als Zertifizierung.

---

Nenne die 5 KMMM-Reifegrade mit Namen und Kernmerkmal.
?
1. **Initial** — Chaotisch, reaktiv, personenabhängig
2. **Repeatable** — Erste Ansätze, aber nicht standardisiert
3. **Defined** — Prozesse definiert, dokumentiert, organisationsweit
4. **Managed** — Quantitativ gemessen und gesteuert
5. **Optimizing** — Kontinuierliche Verbesserung, lernende Organisation

---

Was charakterisiert eine Organisation auf KMMM Level 1?
?
Kein systematisches WM. Wissen liegt bei Einzelpersonen und geht beim Weggang verloren. WM passiert zufällig. Risiko: vollständige Abhängigkeit von Schlüsselpersonen.

---

Was ist der Unterschied zwischen Level 2 und Level 3?
?
**Level 2 (Repeatable):** Erste WM-Aktivitäten in einzelnen Teams — nicht standardisiert, kaum reproduzierbar, Insellösungen.
**Level 3 (Defined):** WM-Prozesse sind organisationsweit definiert, dokumentiert und eingeführt — mit klaren Rollen und Tools.

---

Was charakterisiert KMMM Level 5?
?
WM ist in die Unternehmenskultur integriert. Die Organisation verbessert ihre WM-Prozesse kontinuierlich und lernt systematisch aus Fehlern und Erfolgen. Entspricht dem Konzept der **lernenden Organisation** nach Senge.

---

Wie unterstützt KI den Übergang von Level 2 auf Level 3?
?
RAG-Systeme und zentrale Wissensplattformen helfen, verteiltes Wissen zu zentralisieren, zu standardisieren und organisationsweit verfügbar zu machen — der Schlüsselschritt von Insellösungen zu definierten Prozessen.

---

## RAG-Architektur

Wofür steht RAG und was ist die Grundidee?
?
**Retrieval-Augmented Generation**: Ein LLM wird zur Laufzeit mit relevantem, aktuellem Wissen aus einer eigenen Wissensbasis angereichert — ohne das Modell neu trainieren zu müssen.

---

Nenne die 5 Kernkomponenten einer RAG-Architektur.
?
1. **Dokumentenkorpus** — die Wissensbasis (PDFs, Wikis, etc.)
2. **Embedding-Modell** — wandelt Text in Vektoren um
3. **Vektordatenbank** — speichert Vektoren, ermöglicht Ähnlichkeitssuche
4. **Retrieval-System** — findet relevanteste Chunks zur Query
5. **LLM** — generiert Antwort aus Query + retrieveten Chunks

---

Erkläre den RAG-Prozess in 5 Schritten.
?
1. User stellt eine Frage
2. Frage wird in einen Vektor umgewandelt (Embedding)
3. Vektordatenbank sucht ähnlichste Dokument-Chunks
4. Relevante Chunks + Frage → an LLM übergeben
5. LLM generiert Antwort, verankert in echten Dokumenten

---

Was sind 3 Vorteile von RAG gegenüber Fine-Tuning?
?
1. **Aktualität** — Wissen einfach durch neue Dokumente erweiterbar
2. **Traceability** — Quellenangaben möglich
3. **Datenschutz** — internes Wissen bleibt intern, fliesst nicht ins Modell

---

Welche Grenzen hat RAG im Wissensmanagement?
?
- Garbage in, garbage out — Qualität hängt von Dokumentenqualität ab
- Tacites Wissen (SECI) kann nicht erfasst werden — nur Explizites
- Kein echtes Verstehen — RAG findet und formuliert, denkt nicht
- Schlechtes Chunking → verlorener Kontext → schlechte Antworten

---

Wie verbindet sich RAG mit den KM-Modellen?
?
- **North:** operiert auf Informationsebene, unterstützt Sprung zu Wissen
- **Probst:** stärkt Wissensverteilung (4) und Wissensnutzung (5)
- **SECI:** unterstützt Externalization und Combination
- **KMMM:** ermöglicht Sprung Level 2→3 (Zentralisierung) und 3→4 (Messbarkeit)

---

## Innovatek-Fallstudie

Nenne die drei Geschäftsbereiche der Innovatek Gruppe und ihr Kernproblem.
?
- **ProTech AG** (350 MA): Implizites Expertenwissen geht mit Rentnern verloren
- **GreenTech Solutions** (220 MA): Teams arbeiten parallel ohne voneinander zu wissen
- **DataCore Services** (250 MA): Hohe Fluktuation (14 %), Wissen geht mit jedem Abgang verloren

---

Was ist das demografische Risiko bei Innovatek?
?
31 % der Belegschaft (ca. 254 Personen) erreichen bis 2039 das Rentenalter — darunter die erfahrensten Konstrukteure, Projektleiter, IT-Architekten und Kundenberater. Ohne aktives WM ist dieser Wissensverlust nicht aufzufangen.

---

Welcher SECI-Prozess ist bei Innovatek am kritischsten — und warum?
?
**Externalization** — das meiste Wissen ist tacit und personengebunden (Hans Meier, Priya Nair). Es wird nie in explizite Form überführt. Wenn die Personen gehen, ist das Wissen weg.

---

Auf welchem KMMM-Reifegrad befinden sich die drei Bereiche?
?
- **ProTech:** Level 1 (Initial) — Wissen in Köpfen, nichts dokumentiert
- **GreenTech:** Level 1–2 — erste Ansätze, aber Parallelarbeit zeigt fehlende Standards
- **DataCore:** Level 2–3 — RAG-Pilot läuft, aber noch keine Governance

---

Welcher Probst-Prozess ist bei Innovatek am schwächsten?
?
**Wissensbewahrung** — unter 15 % des Wissens wird bei Austritt gesichert. Konkret: Hans Meier geht 2027 in Rente, sein Wissen ist nirgendwo dokumentiert.

---

Was zeigt der DataCore RAG-Pilot — und was ist die grösste Hürde?
?
**Erfolg:** Antwortzeit für interne IT-Doku von 20 Minuten auf 40 Sekunden reduziert.
**Hürde:** Datenschutz — Kundendaten dürfen nicht ohne weiteres ins KI-System einfliessen.

---

Was ist die zentrale Governance-Herausforderung für CTO Thomas Berger?
?
Drei Bereiche mit drei verschiedenen IT-Landschaften und Kulturen wollen je ein eigenes System — das droht im Wildwuchs zu enden. Thomas muss eine einheitliche WM-Architektur durchsetzen, die trotzdem bereichsspezifische Anforderungen (z.B. ISO/MDR bei ProTech, Datenschutz bei DataCore) berücksichtigt.

---` },
  { title: `CLAUDECODE/CLAUDE.md`, body: `# Wer ich bin
Ich studiere den Lehrgang AI Business Specialist Fachausweis (AIBS) bei ipso/FIFA, Abend-Online-Schule neben dem Beruf. Benutzername: loewe.

# Aktuelle Module
- Business Analyse (86% Anwesenheit)
- Evaluation von KI Lösungen (100%)
- KI Geschäftschancen (100%)
- KI Governance (100%)
- KI Lösungsentwicklung (100%)
- Projektmanagement (100%)
- Change Management bei der KI Integration (100%)
- Einführung und Optimierung von KI-Lösungen (100%)
- KI Wissensmanagement (100%) ← aktuell laufend, Dozent Mike Krey

# Vault-Struktur
- 00-Inbox: Session-Logs und schnelle Notizen
- 10 bis 94: Je ein Ordner pro Modul
- 99-Archiv: Abgeschlossenes Material
- 40-Templates: Wiederverwendbare Vorlagen

# Prüfungsrelevante Module (noch ausstehend)
- Prüfungstraining (0 Lektionen besucht)
- Simulationsprüfungen AIBS (0 Lektionen besucht)
- Vorbereitung Präsentation und Fachgespräch AIBS (0 Lektionen besucht)

# Regeln (immer befolgen)
- Beim Start: Lies CLAUDE.md und den neuesten Session-Log in 00-Inbox/ automatisch
- Am Ende JEDER Session: Session-Log als MD-Datei in 00-Inbox/ erstellen
- Dateiname: 00-Inbox/YYYY-MM-DD-session.md
- Sprache: Deutsch` },
  { title: `CLAUDECODE/Willkommen.md`, body: `# Wer ich bin Ich studiere den Lehrgang AI Business Specialist Fachausweis (AIBS) bei ipso/FIFA. Aktuelles Fach: KI Wissensmanagement (KIWI.BA1A), Dozent Mike Krey. Abend-Online-Schule, neben dem Beruf. # Vault-Struktur - 00-Inbox: Schnelle Notizen, Session-Logs - 10-Lehrgang-AIBS: Lernstoff, Zusammenfassungen, Modelle - 20-Prüfungsvorbereitung: Lernkarten, Übungsaufgaben, Musterlösungen - 30-Praxisprojekte: Gruppenübungen, Innovatek-Fallstudie - 40-Templates: Wiederverwendbare Vorlagen - 99-Archiv: Abgeschlossenes # Aktuelle Projekte - KIWI.BA1A: KI Wissensmanagement – Unit 1-4 laufen, Prüfung steht an - Obsidian-Setup: Persönliches WM-System aufbauen (Hausaufgabe) # Prüfungsstoff KI-WM (wichtig!) - SECI-Modell (Nonaka & Takeuchi) - Wissenstreppe nach North - Kernprozesse nach Probst (6 Prozesse) - KMMM Reifegrade (1-5) - WM4-Modell nach Müller - RAG-Architektur & KI im WM - Fallstudie Innovatek Gruppe (ProTech / GreenTech / DataCore) # Regeln (immer befolgen) - Beim Start: Lies CLAUDE.md und den neuesten Session-Log in 00-Inbox/ automatisch - Am Ende JEDER Session: Session-Log als MD-Datei in 00-Inbox/ erstellen - Dateiname: 00-Inbox/YYYY-MM-DD-session.md - Sprache: Deutsch` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/AIBS_BUANBewertungsrasterChallenge.pdf`, body: `AIBS BUAN Bewertungsraster Challenge 
Klasse AIBS.A.OL.1.136-OL-S2510-BUAN.BA1A, Dozent Joel Baumann 
 
1 
Daten 
 
Es bestehen folgende obligatorische Abgabetermine: 
Datum 
Zeit 
Ort 
Beschreibung 
14. März 2026 
Bis 23:59 
Online, Teams Assignment 
Abgabe Business Case Dokument 
- 
Abgabe in der Gruppe 
- 
Testatbedingung 
- 
Enthält die Resultate und Notizen zu den Aufgaben 
jeder Unit 
20. März 2026 
Bis 23:59 
Online, Teams Assignment 
Abgabe Powerpoint für Präsentation 
21. März 2026 
13:00-16:15 
ZH  701, Zürich Altstetten, 
Bernerstrasse Süd 167, 8048 Zürich 
Präsentationen 
- 
In den Gruppen 
- 
Vorstellung des Business Case 
 
 
 
 
 
AIBS_BUANBewertungsrasterChallenge.docx 
12.01.2026 
2/4
2 
Abgaben 
 
2.1 
Business Case Dokument 
 
Das Business-Case Dokument ist Testatpflicht, das heisst es ist Pflicht abzugeben, wird aber nicht inhaltlich bewertet. 
Es kann jedoch bei der Fragerunde im Anschluss an die Präsentation verwendet werden. 
 
Es werden jede Unit (ausser Unit 7 (Präsentation)) Aufgaben für den Business-Case in den Folien definiert. 
 
Struktur: 
 
Kapitelgliederung: 
 
1 Einleitung 
- 
Projektnamen, Namen Gruppenmitglieder, Rahmendaten und Beschreibung des gewählten Projekts/Firma 
 
2 Aufträge Units 
- 
Hier sollen in den folgenden Unterkapiteln die jeweiligen Resultate zu den Aufgaben an den Business Case aus den Folien festgehalten werden. 
 
2.1 Aufgaben für den Business Case aus Unit 1 
2.2 Aufgaben für den Business Case aus Unit 2 
2.3 Aufgaben für den Business Case aus Unit 3 
2.4 Aufgaben für den Business Case aus Unit 4 
2.5 Aufgaben für den Business Case aus Unit 5 
2.6 Aufgaben für den Business Case aus Unit 6 
 
 
 
 
AIBS_BUANBewertungsrasterChallenge.docx 
12.01.2026 
3/4
 
2.2 
Präsentation 
 
• 
Das Ziel der Präsentation ist es, den erarbeiteten Business Case in der Gruppe zu präsentieren. 
• 
Zeitdauer 15min 
• 
Fragerunde 5min 
• 
Das Business Case Dokument kann dabei für die Fragerunde verwendet werden. 
 
 
 
 
 
 
3 
Bewertungsraster Präsentation 
 
Bewertungsraster Challenge 
 
Team 
 
Mitglied 1 
Name 
 
Mitglied 2 
Name 
 
Mitglied 3 
Name 
 
Mitglied 4 
Name 
 
Mitglied 5 
Name 
 
 
 
 
 
 
AIBS_BUANBewertungsrasterChallenge.docx 
12.01.2026 
4/4
  
 
Erreichte 
Punkte 
Begründung 
Stichworte 
Beschreibung 
 
 
1 Inhalt (10 Punkte) 
0 
 
- sachlich richtig, hohe Argumentationsqualität 
- angemessene Schwerpunktsetzung; Keine nebensächliche Punkte 
- Alle Fragen beantwortet 
 
2 Struktur (10 Punkte) 
0 
 
- klar erkennbarer, zielgerichteter, roter Faden 
- gute Abstimmung innerhalb der Gruppe 
 
3 Rhetorik (10 Punkte) 
0 
 
- verständlich, sicher im Ausdruck  
- variiert, dynamisch, gute Pausentechnik, effektvoll, spannend, interessant 
 
4 
Visualisierung / 
Kreativität 
(10 Punkte) 
0 
 
- aussagekräftige, nicht überladene Folien 
- aussagekräftige Schaubilder 
- klare Bezeichnungen, übersichtliche Tabellen 
- besonders herausragende, kreative Ideen  
 
5 Time Management 
(10 Punkte) 
0 
 
.-Abgabe der Unterlagen pro angefangene Minute Verspätung -1 Punkt 
- Präsentation: 15 Minuten +/- 2 Minuten OK. Pro angefangene Minute über 17 und unter 13 
Minuten -1 Punkt 
 
Total Punkte 
0 
 
Note 
1` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/BUAN1.pdf`, body: `Business Analyse Unit 1
AI Business Specialist
2025 Joel Baumann
AIBS.A.OL.1.136-ML-S2510-BUAN.BA1A
AIBS.A.OL.1.136-OL-S2510-BUAN.BA1A
Wer bin ich?
• IT Support Spitex
• Informatiker FH
• KI Kurse
• Software Entwickler NoTies GmbH
−App Entwicklung
−Datenbankprojekte
−Daten Analyse
• Wohnhaft in Bremgarten im Aargau
2
Ablauf
Fachplan Klasse 1 (OL)
3
| 
3
1. Dez
5. Jan
14. Jan
Unit 1
Online
• Grundlagen
• Standards
• Perspektiven
• Vorgehen
Unit 2
Online
• Erhebungstechniken
• Fragetypen
• Frage- und 
Antwortformate
Unit 3
Online
• Problem-
identifikation
• Ist-Soll Vergleiche
• Change Strategie
Unit 4
Online
• Anforderungs-
management
• Digitale Werkzeuge
• Anforderungsarten
21. Jan
Praxisprojekt «Euer Startup»
…
…
Ablauf
Fachplan Klasse 1 (OL)
4
| 
4
28. Jan
7. Feb
Unit 5
Online
• Spezifikationstechniken
• Modellierungstechniken
• Verwaltungstechniken
Unit 6
701- Aula Altstetten
• Lösungsentwürfe
• Bewertung von 
Lösungsvarianten
• Business Canvas
Unit 7
701- Aula Altstetten
• Präsentation
21. März
Praxisprojekt «Euer Startup»
Ablauf
Fachplan Klasse 2 (ML)
5
| 
5
6.Dez
6. Dez
10. Dez
Unit 1
Raum 608
• Grundlagen
• Standards
• Perspektiven
• Vorgehen
Unit 2
Raum 608
• Erhebungstechniken
• Fragetypen
• Frage- und 
Antwortformate
Unit 3
Online
• Problem-
identifikation
• Ist-Soll Vergleiche
• Change Strategie
Unit 4
Online
• Anforderungs-
management
• Digitale Werkzeuge
• Anforderungsarten
12. Jan
Praxisprojekt «Euer Startup»
…
…
Ablauf
Fachplan Klasse 2 (ML)
6
| 
6
19. Jan
26. Jan
Unit 5
Online
• Spezifikationstechniken
• Modellierungstechniken
• Verwaltungstechniken
Unit 6
Online
• Lösungsentwürfe
• Bewertung von 
Lösungsvarianten
• Business Canvas
Unit 7
Raum 608
• Präsentation
• Abgabe Powerpoint
14. Feb
Praxisprojekt «Euer Startup»
Challenge 
Klasse 1 (OL)
7
• Unterrichtbegleitendes Projekt
• Gruppen 3-4 Pers. -> Teams
• Business Case Dokument Testat, Abgabe bis spätestens 14. März, bis 23:59Uhr
• Präsentation in Unit 7, 21. März
• Abgabe Powerpoint am Vortag, bis spätestens 23:59Uhr
• Verspätete Abgabe ergibt Punkteabzug
• Bewertungsraster auf Teams
Challenge 
Klasse 2 (ML)
8
• Unterrichtbegleitendes Projekt
• Gruppen 3-4 Pers. -> Teams
• Business Case Dokument Testat, Abgabe bis spätestens 7. Februar, 23:59Uhr
• Präsentation in Unit 7, 14. Februar
• Abgabe Powerpoint am Vortag, bis spätestens 23:59Uhr
• Verspätete Abgabe ergibt Punkteabzug
• Bewertungsraster auf Teams
Challenge: Business Case
Business Case Dokument
10
• Gruppenname
• Gruppenmitglieder
• Kapitel 1: Projekt- / Firmenbeschriebe
• Kapitel 2: Gruppenarbeiten
• Nicht auf Schönheit oder Formalität achten, Inhalt zählt
• Produkte der Projektarbeit hinterlegen (Texte, Skizzen, Grafiken, etc.)
Business Case Präsentation
11
• Das Ziel der Präsentation ist es, den erarbeiteten Business Case in der 
Gruppe zu präsentieren.
• Zeitdauer 15min
• Fragerunde 5min
• Das Business Case Dokument kann dabei für die Fragerunde verwendet 
werden.
Unterrichtsmaterialien
12
• Buch: Hanschke - Business Analyse – Einfach und Effektiv
• Miro: BUAN Miro
• Brian
Was ist Business Analyse?
Was macht ein Business Analyst?
Leseauftrag
Business Analyse – Einfach und Effektiv
14
• Kapitel 2-2.1 (S.7-14)
• 12min
15
16
Business Analyst vs Business Intelligence 
17
Business Analyst vs Business Intelligence
18
• BI: 
−Daten analysieren
−Was passiert im Unternehmen?
−IT Wissen, technische Fähigkeiten
• Business Analyst: 
−Problem, Prozesse, Anforderungen verstehen
−Änderung bewirken
−Kommunikative und Diplomatische Fähigkeiten
Was ist Business Analyse?
19
• BABOK (Business Analysis Body of Knowledge)
−IIBA (International Institute of Business Analysis)
• “Business analysis is the practice of enabling change in an organizational context, by 
defining needs and recommending solutions that deliver value to stakeholders.”
• “Business analysis involves understanding how organizations function to accomplish their 
purpose, and defining the capabilities an organization requires to provide products and 
services to external stakeholders.”
Business Analysis Core Concept Model (BACCM)
nach BABOK
20
21
22
23
24
25
26
Requirements Engineering
27
Requirements Engineering
28
• IREB (International Requirements Engineering Board)
• “Requirements Engineering (RE) is a systematic and disciplined approach to the 
specification and management of requirements in order to develop systems (software, 
hardware, or combined) that meet the expectations of the stakeholders.”
Business Analyse Perspektiven
29
Business Analyse Perspektiven
30
Agile Perspektive
31
Kommunikationsfähigkeiten: Analysten vermitteln die Vision und Bedürfnisse 
des Sponsors effektiv an das Team. Sie schaffen Alignment bei Prioritäten und 
erleichtern gemeinsame Entscheidungen über Lösungen.
Gelassenheit und Toleranz: Agile erfordert Selbstbeherrschung unter Druck 
und eine offene Haltung im Umgang mit anderen.
Flexibilität und Anpassungsfähigkeit: Agile Analysten unterstützen dort und 
dann, wo und wann es gerade gebraucht wird.
Umgang mit Veränderungen: Business Analysts bewerten schnell die 
Auswirkungen von Änderungen und klären, welchen echten Geschäftswert 
veränderte Anforderungen bringen. Sie priorisieren die Arbeit entsprechend neu.
Erkennung von Geschäftswert: BAs verstehen, wie Änderungen und Features 
der übergeordneten Business-Vision nutzen. Sie argumentieren überzeugend für 
wertvolle Anforderungen.
Kontinuierliche Verbesserung: Analysten überprüfen regelmäßig ihre 
Vorgehensweisen, um die Produktivität des Teams und die Qualität der 
Refinements zu steigern.
Business Intelligence Perspektive
32
Fachwissen über Geschäftsdaten: Business Analysts müssen 
die funktionale Nutzung, Terminologie, Regeln und komplexen 
Strukturen von Datenbeständen verstehen, um Rohdaten in 
standardisierte Formate zu überführen.
Prozessanalyse: Analysten bilden Prozesse ab, die BI-Systeme 
nutzen, und identifizieren die zugehörigen KPIs und Kennzahlen.
Entscheidungsmodellierung: Experten wenden statistische 
Methoden und Analysetechniken an, um datenbasierte 
Entscheidungen zu unterstützen.
Lösungslieferung: BAs stimmen die Anforderungen an 
Geschäftsinformationen mit den BI-Lieferobjekten wie 
Dashboards, Visualisierungen und Analysen ab und koordinieren 
deren Umsetzung.
IT-Perspektive
33
Lösungsrahmung: Spezialisten entwerfen den gesamten Lösungsumfang 
und die -ziele auf hohem Abstraktionsniveau, damit technische Teams diese 
weiter ausarbeiten können.
Anforderungsentwicklung: Sie erfassen kritische Details zu Funktionen, 
Daten, Schnittstellen, Compliance, Sicherheit und technischen 
Rahmenbedingungen, um die Entwicklung zu ermöglichen.
Stakeholder-Engagement: BAs beeinflussen Stakeholder und verhandeln 
Trade-offs zwischen Kosten und Geschäftsergebnissen bei ausgewogenen IT-
Lösungen.
Systemdenken: Sie analysieren die Auswirkungen downstream auf 
Prozesse, Nutzer und vernetzte Systeme.
Technische Kommunikation: Analysten vermitteln Anforderungen 
verständlich an technische Teams und stehen für laufende Klärungen zur 
Verfügung.
Architekturverständnis: Sie verstehen Abhängigkeiten zwischen 
bestehenden und neuen technischen Komponenten sowie deren 
Einschränkungen.
Lieferkoordination: BAs koordinieren Lösungen durch den gesamten 
Entwicklungslebenszyklus unter Einhaltung der vorgegebenen 
Rahmenbedingungen.
Architektur Perspektive
34
Umgang mit Ungewissheit: Auch bei strategischer Unsicherheit müssen 
BAs effektiv arbeiten können, obwohl viele Dinge noch unbekannt sind.
Systemdenken: Sie analysieren den größeren Unternehmenskontext und die 
Vernetzungen.
Konzeptualisierung: BAs übersetzen Strategie und Kontext in 
Lösungsdesigns und Komponenten.
Abstraktion: Analysten konzentrieren sich auf hochabstrakte Darstellungen 
und blenden unnötige Details aus.
Langfristorientierung: Experten müssen über mehrjährige Zeiträume 
planen, um die langfristige Strategie zu verwirklichen und gleichzeitig 
kurzfristige Ergebnisse zu liefern.
Szenarienplanung: Sie entwickeln verschiedene mögliche Zukunftsszenarien 
und Optionen, um Flexibilität zu gewährleisten.
Geschäftsprozessperspektive
35
Ursachenanalyse: Diese Spezialisten graben tiefer, um die eigentliche 
Quelle von Prozessproblemen zu verstehen – nicht nur die Symptome.
Kritisches Hinterfragen: Sie hinterfragen, warum Prozesse so ablaufen, wie 
sie ablaufen, und erkennen Verbesserungspotenziale.
Förderung von Innovation: BAs bringen Fachexperten dazu, effizientere 
und wirksamere Vorgehensweisen völlig neu zu denken.
Perspektiven verbinden: Sie wechseln flexibel zwischen interner und 
externer Prozess-Sicht, um das Verständnis zu vertiefen.
Kollaborationsfähigkeiten: Analysten verhandeln permanent zwischen 
Gruppen und lösen Konflikte.
Changemanagement: BAs begleiten Prozesstransformationen, die 
eingefahrene Arbeitsgewohnheiten verändern.
Stakeholder-Engagement: Sie kommunizieren Prozessänderungen über 
alle Hierarchieebenen hinweg.
Mediationsfähigkeiten: Analysten erkennen unterschiedliche Meinungen 
und Bedürfnisse der Stakeholder und bringen sie in kohärenten 
Prozessdesigns zusammen
Stakeholder / Anspruchsgruppen
Identifikation, Beschreibung, Analyse
36
Was ist ein Stakeholder?
37
Stakeholder
38
• Nach IIBA: «Personen oder Organisationen, die von den Aktivitäten eines Unternehmens 
betroffen sind oder davon beeinflusst werden»
Stakeholderliste / -matrix
39
Stakeholder-Map
40` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/BUAN2_v2.pdf`, body: `Business Analyse Unit 2
Erhebung Ist-Zustand und Bedürfnisse Soll-Zustand mit geeigneten Instrumenten
AI Business Specialist
2025 Joel Baumann
AIBS.A.OL.1.136-ML-S2510-BUAN.BA1A
AIBS.A.OL.1.136-OL-S2510-BUAN.BA1A
Ablauf
Fachplan Klasse 1 (OL)
2
| 
2
1. Dez
5. Jan
14. Jan
Unit 1
Online
• Grundlagen
• Standards
• Perspektiven
• Vorgehen
Unit 2
Online
• Erhebungstechniken
• Fragetypen
• Frage- und 
Antwortformate
Unit 3
Online
• Problem-
identifikation
• Ist-Soll Vergleiche
• Change Strategie
Unit 4
Online
• Anforderungs-
management
• Digitale Werkzeuge
• Anforderungsarten
21. Jan
Praxisprojekt «Euer Startup»
…
…
Ablauf
Fachplan Klasse 1 (OL)
3
| 
3
28. Jan
7. Feb
Unit 5
Online
• Spezifikationstechniken
• Modellierungstechniken
• Verwaltungstechniken
Unit 6
701- Aula Altstetten
• Lösungsentwürfe
• Bewertung von 
Lösungsvarianten
• Business Canvas
Unit 7
701- Aula Altstetten
• Präsentation
21. März
Praxisprojekt «Euer Startup»
Ablauf
Fachplan Klasse 2 (ML)
4
| 
4
6.Dez
6. Dez
10. Dez
Unit 1
Raum 608
• Grundlagen
• Standards
• Perspektiven
• Vorgehen
Unit 2
Raum 608
• Erhebungstechniken
• Fragetypen
• Frage- und 
Antwortformate
Unit 3
Online
• Problem-
identifikation
• Ist-Soll Vergleiche
• Change Strategie
Unit 4
Online
• Anforderungs-
management
• Digitale Werkzeuge
• Anforderungsarten
12. Jan
Praxisprojekt «Euer Startup»
…
…
Ablauf
Fachplan Klasse 2 (ML)
5
| 
5
19. Jan
26. Jan
Unit 5
Online
• Spezifikationstechniken
• Modellierungstechniken
• Verwaltungstechniken
Unit 6
Online
• Lösungsentwürfe
• Bewertung von 
Lösungsvarianten
• Business Canvas
Unit 7
Raum 608
• Präsentation
• Abgabe Powerpoint
14. Feb
Praxisprojekt «Euer Startup»
Erhebungstechniken?
Miro
7
Erhebungstechniken
8
• Interview
• Befragung
• Beobachtung
• Dokumentstudium
Interview
9
10
Interview Übung: Regenschirm
11
Interview
Warum mit Benutzern sprechen?
12
Dozent
«Denkt den Schirm neu!»
«Redet mit den Benutzern»
«Ihr werdet schon sehen…»
Benutzer
«Schirme..? hab mehrere.»
«Weil ich die immer wieder liegenlasse.»
Weil ich den irgendwo hinlege.
«Unter den Sitz im Zug…»
«Na, weil er nass ist…»
Design-Schüler
«Puh..was kann man da noch verbessern?»
«Was bringt denn das? Wir haben doch alle
selber Schirme…»
«Warum mehrere?»
«Wieso lassen Sie denn den Schirm liegen?»
«Aha..und wohin?»
«Und warum legen sie ihn dahin?»
Aha! Wenn er also nicht nass wäre, würden Sie ihn 
nicht liegenlassen…
Interview
Fragen stellen
13
• Offene vs. Geschlossene Fragen
 
“Wie sieht ein typischer Arbeitstag von Ihnen aus?”
 
“Welche der folgenden drei Funktionen benutzen Sie am häufigsten:
 
1) Emails schreiben, 2) Notizen verwalten 3) Termine managen”
• Suggestive Fragen vs Neutrale Fragen
 
“Finden Sie es denn nicht auch richtig, dass per Kreditkarte abgerechnet werden
 
kann?”
 
“Wie wichtig ist Ihnen die Bezahlung per Kreditkarte?”
14
Interview
Interviewpartner durch Zuhören zum Sprechen bringen
15
1.
Fragen
2. Zuhören
3. 3s Pause
4. Zuhören
5. 3s Pause
6. Zuhören
7. Führen mit Folgefrage
Etwa 75% des Textes gehört dem Interviewten, etwa 25% dem Fragestellenden
Interview
Nachhaken
16
Diskussion vertiefen durch Nachhaken mit z.B. einer der folgenden Fragen:
• Benutzen Sie diesen?
• Was finden Sie dazu?
• Haben Sie dazu einen bestimmten Grund?
• Ist das besonders wichtig?
• Ist das schlecht oder gut?
• Passiert so etwas täglich?
• Wie kam es dazu?
Interview 
Zusammenfassen
17
• Verständnis prüfen und Verschnaufpause einlegen
• In eigenen Worten zusammenfassen was gesagt wurde
 
• “Die Wohnung hatte schlecht isolierte Fenster und eine Kreuzung davor”
• “Du bist also ausgezogen, weil die Fenster schlecht gegen Schall isoliert
 
waren und Dich so der Verkehrslärm gestört hat?”
Interview
Zirkuläre Fragen
18
Interview
Skalenfragen
19
Abstufung: Erlauben Abstufungen zwischen Polen (z.B. von "sehr unzufrieden" bis "sehr zufrieden").
Gerade vs. Ungerade Skalen: Ungerade Skalen (z.B. 5-Punkte) bieten einen neutralen Mittelpunkt, gerade Skalen (z.B. 
4-Punkte) zwingen zu einer tendenziellen Entscheidung.
Anwendung: Messen Einstellungen, Zufriedenheit, Wichtigkeit oder Intensität von Meinungen.
Beispiele:
"Wie wichtig ist Ihnen [Merkmal]?" (z.B. auf einer Skala von 1-5).
"Ich trinke gerne Kaffee." (Skala: "Stimme überhaupt nicht zu" bis "Stimme voll und ganz zu").
Systemische Fragen: "Auf einer Skala von 1 (schlecht) bis 10 (perfekt), wo stehen Sie gerade?". 
Vorteile:
Differenzierung: Erfassen feiner abgestufte Meinungen als einfache Alternativfragen.
Objektivität: Machen subjektive Eindrücke messbar und vergleichbar.
Einfache Handhabung: Oft leichter zu beantworten, da keine strikte Entweder-Oder-Entscheidung nötig ist. 
Was erzählen interviewte Personen akkurat?
20
Was erzählen interviewte Personen nicht zuverlässig?
21
Interview
Was erzählen interviewte Personen akkurat?
22
• Ihre Aufgabe und wie sie diese im Allgemeinen tun
• Wie ein konkreter Fall im Prinzip gelöst werden muss
• Wie sie in einem Beispiel ungefähr vorgegangen sind
• Wie ihnen etwas gefällt, das sie kennen
• Dinge, die ihnen nicht gefallen
• Ob ihnen etwas besser gefällt als etwas, das sie kennen
Interview
Was erzählen interviewte Personen NICHT zuverlässig?
23
• Was sie tun würden, wenn …
• Was sie kaufen werden, wieviel etwas kosten darf
• Wie sie etwas im Detail tun
• Wie oft sie etwas tun und wann das zum letzten Mal war
• Wie gut sie etwas können
• Ob ihnen etwas gefällt dass sie nicht kennen
• Wie gerne sie etwas auf einer absoluten Skala tun
• Wie die Benutzerschnittstelle aussehen muss
• Welche Features notwendig sind
Interview
Was ist schlecht an folgenden Interviewfragen?
24
• „Welchen Teil der Aufgabe mögen Sie am wenigsten? Ich meine den, welchen Sie
   bis zuletzt aufschieben.“
• „Sind Sie dafür, dass dieser Fragebogen aufs Internet soll?“
• „Wie häufig benutzen Sie das Internet?“
• „Wenn Sie ein Mikrophon und einen Knopf zur Aufnahme hätten, würden Sie das
   nützlich finden?„
• „Wie genau soll das GUI aussehen, damit Sie gut damit arbeiten können?“
Interview
Was ist schlecht an folgenden Interviewfragen?
25
• „Welchen Teil der Aufgabe mögen Sie am wenigsten? Ich meine den, welchen Sie
   bis zuletzt aufschieben.“
Die Frage nimmt bereits an, dass es einen Teil gibt, den man nicht mag und dass man ihn 
aufschiebt. Wer das nicht tut, fühlt sich „falsch“ oder wird in eine Ecke gedrängt.
„Gibt es Teile der Aufgabe, die Sie weniger gern erledigen als andere? Wenn ja, welche und 
warum?“
• „Sind Sie dafür, dass dieser Fragebogen aufs Internet soll?“
„Dafür sein“ klingt moralisch positiv → fast niemand traut sich „Nein“ zu sagen. Zudem völlig 
unklar, was „aufs Internet soll“ genau bedeutet (öffentlich? intern? anonym?).
„Unter welchen Bedingungen würden Sie eine Online-Version dieses Fragebogens 
befürworten bzw. ablehnen?“
Interview
Was ist schlecht an folgenden Interviewfragen?
26
• „Wie häufig benutzen Sie das Internet?“
Für einen 20-Jährigen ist „täglich“ vielleicht 8 Stunden, für eine 70-Jährige 10 Minuten pro 
Woche. Ohne Antwortvorgabe oder Zeitrahmen sind die Antworten nicht vergleichbar.
„Wie viele Stunden pro Woche nutzen Sie das Internet privat und beruflich?“ oder 
vorgegebene Kategorien (mehrmals täglich – täglich – … – nie)
Interview
Was ist schlecht an folgenden Interviewfragen?
27
• „Wenn Sie ein Mikrophon und einen Knopf zur Aufnahme hätten, würden Sie das
   nützlich finden?„
Hypothetische Features werden fast immer überschätzt („Ja, klar, wäre doch cool“). Die 
meisten können sich die reale Nutzungssituation nicht vorstellen → Antworten haben sehr 
geringe Vorhersagekraft für tatsächliches Verhalten.
Besser: Echte Prototypen oder Screenshots zeigen und dann fragen: „Wie oft würden Sie 
diese Sprachaufnahme-Funktion tatsächlich nutzen?“ (Skala) + „Was genau würden Sie 
damit machen?“
Interview
Was ist schlecht an folgenden Interviewfragen?
28
• „Wie genau soll das GUI aussehen, damit Sie gut damit arbeiten können?“
Die meisten Anwender sind keine UI-Designer. Sie können keine präzisen 
Gestaltungsvorschläge machen („ähm… schön halt?“). Solche Fragen führen zu vagen oder 
unrealistischen Antworten.
Konkrete Alternativen oder Prototypen vorlegen: „Welche der drei Varianten A/B/C finden 
Sie am übersichtlichsten und warum?“ oder Card-Sorting / Klick-Prototyp-Test
Interview
Interview-Techniken
29
5-Why = Zum Kern der Motivation, des Verhaltens dringen
20:80 = Wir hören zu und fragen nur zum Verständnis oder Warum?
Mimik & Gestik = Spannungsfelder entdecken, Zwischen den Zeilen lesen
Offene Fragen = Den Partner zum Reden bringen
Konkret statt abstrakt = Persönliche Geschichten und wann zum letzten mal?
Spiegeln = Richtig verstanden? Zum Weitererzählen anregen…
Empathie = wohlfühlen, um Privates oder Ticks zu verraten
Kontext = Den Partner in konkrete Situation versetzen. Erst dann hat Antwort einen
Wert!
Interview 
Anwendung
30
Geeignet, wenn:
•
Tiefes Verständnis von Motiven, Bedürfnissen und Problemen benötigt wird
•
Der Ist-Zustand explorativ erhoben werden soll
•
Prozesse, Entscheidungsgründe und Hintergründe wichtig sind
•
Die Zielgruppe gut erreichbar und überschaubar ist
•
Es um neue oder wenig verstandene Themen geht
Nicht geeignet, wenn:
•
Statistisch repräsentative Aussagen nötig sind (kleine Sample Size)
•
Sehr viele Personen befragt werden müssen (Zeitaufwand)
•
Es um exakte Häufigkeiten, Zahlen oder Prognosen geht
•
Zeit- oder Kostenrahmen sehr eng sind
•
Nutzer über hypothetisches Verhalten („würde ich tun, wenn…“) befragt werden sollen
Befragung
31
Befragung
32
Befragung
Techniken
33
Standardisierte Befragungen: Diese verwenden einen festen Fragebogen, der identische Fragen in 
gleicher Reihenfolge enthält.
Halbstandardisierte Befragungen: Hierbei gibt es einen Leitfaden mit festen und offenen 
Fragenteilen.
Nicht-standardisierte Befragungen: Offen und flexibel, oft in explorativen Studien verwendet.
Befragung
Techniken
34
Standardisierte Befragungen: Diese verwenden einen festen Fragebogen, der identische Fragen in 
gleicher Reihenfolge enthält.
Halbstandardisierte Befragungen: Hierbei gibt es einen Leitfaden mit festen und offenen 
Fragenteilen.
Nicht-standardisierte Befragungen: Offen und flexibel, oft in explorativen Studien verwendet.
Vorteile und Nachteile?
Befragung
Vor- und Nachteile
35
• Je standardisierter, desto einfacher die Auswertung bei hoher Anzahl Befragter
• Je unstrukturierter, desto kreativer die Antworten
Fragebögen
Arten von Fragen
36
Format
Inhalt
Typischer Einsatz
Wichtigste Vor- & Nachteile
Einfachauswahl
☐ Nur eine Antwort möglich (z. B. 
Geschlecht: ☐ m ☐ w ☐ divers)
Klare Zuordnung, Filterfragen
Zwingt zur Entscheidung (auch wenn „keine 
Angabe“ fehlt)
Mehrfachauswahl
 Mehrere Antworten möglich („Welche 
Social-Media-Kanäle nutzen Sie?“)
Erhebung von Mehrfach-Nutzung
Summen können > 100 % sein → schwer 
vergleichbar
Rating / Likert-Skala
„Die Bedienung ist einfach“ → 1 = stimmt 
gar nicht … 5 = stimmt vollkommen
Meinungen, Einstellungen, Zufriedenheit
Sehr verbreitet, leicht auswertbar
Gerade vs. ungerade Skala
Ungerade = 5-stufig (hat Mitte „teils/teils“) 
Gerade = 4- oder 6-stufig (keine Mitte)
Ungerade: bei Ist-Zustand (Neutral möglich) 
Gerade: bei Priorisierung/Soll (zwingt zur 
Entscheidung)
Gerade Skala reduziert Mitteltendenz, erhöht 
aber Frustration
Rangordnung
„Bitte ordnen Sie die folgenden 6 
Weiterbildungsthemen nach Wichtigkeit: 1 = 
wichtigste, 6 = unwichtigste“
Prioritäten ermitteln
Sehr aufschlussreich, aber bei > 7 Items 
anstrengend
Matrixfrage
Tabelle: mehrere Items mit gleicher Skala 
darunter (z. B. 8 Funktionen bewerten von 
1–5)
Platz sparen, schnelle Vergleiche
Bei zu vielen Zeilen → „Straight-lining“ (alles 
gleiche Antwort)
Semantisches Differential
„Die neue Software ist: langsam ☐☐☐☐☐ 
schnell“ (meist 7-stufig)
Image, Gefühlsebene
Visuell ansprechend, aber etwas aufwändiger 
auszuwerten
Offene Textfrage
„Was wünschen Sie sich zusätzlich?“
Neue Ideen, Begründungen
Reichhaltige Daten, aber sehr aufwändige 
Auswertung
Fragebögen
Gütekriterien
37
Gütekriterium
Bedeutung?
Wie herausfinden?
Wie verbessern?
Validität
Misst der Fragebogen wirklich 
das, was er messen soll?
„Könnte jemand mit hohem 
Wert auch zufällig hoch 
scoren?“ „Deckt der Bogen alle 
wichtigen Aspekte ab?“
Experten-Review, Pretest mit 
Zielgruppe, klare Definition des 
Konstrukts
Reliabilität
Wiederholung unter gleichen 
Bedingungen → gleiche 
Ergebnisse?
„Wenn ich den Bogen in 2 
Wochen nochmal ausgefüllt 
bekomme, kommen dann 
ähnliche Werte raus?“
Standardisierte Formulierungen, 
ausreichende Anzahl Items, 
Test-Retest oder Cronbachs 
Alpha prüfen
Objektivität
Ergebnis unabhängig von der 
Person, die den Bogen 
auswertet?
„Könnten zwei Auswerter zu 
unterschiedlichen Ergebnissen 
kommen?“
Klare Anweisungen, 
geschlossene Antwortformate, 
automatisierte Auswertung (z. 
B. Online-Tool)
Befragung
Anwendung
38
Geeignet, wenn:
•
Meinungen, Einstellungen oder Zufriedenheit von vielen Personen erhoben werden sollen
•
Vergleichbarkeit und Auswertbarkeit wichtig sind
•
Hypothesen überprüft oder priorisiert werden sollen
•
Es um den Soll-Zustand (Wichtigkeit, Bewertung) geht
•
Wenig Zeit pro Teilnehmer zur Verfügung steht
Nicht geeignet, wenn:
•
Tiefe Einblicke in Kontext, Motivation oder Ursachen benötigt werden
•
Die Fragestellung komplex oder erklärungsbedürftig ist
•
Die Zielgruppe unterschiedliche Interpretationen von Fragen haben könnte
•
Neues Wissen exploriert werden soll (zu früh im Projekt)
Beobachtung
39
Beobachtung
40` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Buan3/BUAN_Fallstudie_B.pdf`, body: `Fallstudie B 
 
Ist zu Soll 
AIBS BUAN 
 
 
 
BUAN_Fallstudie_B.docx 
14.01.2026 
2/7 
Contents 
1 
Einleitung 
3 
2 
Ausgangslagen: 
3 
2.1 
Option 1: Einführung eines digitalen Schichtplanungssystems im Pflegeheim .................................. 3 
2.2 
Option 2: Mobile App für den öffentlichen Verkehr einer Stadt ....................................................... 4 
3 
Aufgabenstellung 
5 
4 
Ursachenanalyse (Ishikawa / Fischgrätendiagramm) 
5 
5 
Ableitung von Kundenanforderungen 
6 
5.1 
Kano-Modell ................................................................................................................................ 6 
 
 
 
 
BUAN_Fallstudie_B.docx 
14.01.2026 
3/7 
1 
Einleitung 
 
Diese Fallstudie im Business Analyse dient zur Vertiefung und Anwendung der im 
Unterricht behandelten Themen und zur Stärkung der Kompetenzen in diesem Bereich. Diese Fallstudie 
und die beschriebene Ausgangslage begleitet sie in diesem Fach in mehreren Teilaufgaben. 
 
• 
Im Folgenden werden Ihnen zwei verschiedene Firmen vorgestellt.  
• 
Wählen Sie davon in ihrer Gruppe eine der zwei Firmen für ihre Erhebungen. 
• 
Planen Sie angemessene Methodiken. 
• 
Reflektieren Sie. 
 
2 
Ausgangslagen: 
Im folgenden werden Ihnen zwei verschiedene Ausgangslagen presentiert.  
Wählen Sie als Gruppe eine davon um weiterzufahren. 
2.1 
Option 1: Einführung eines digitalen Schichtplanungssystems im Pflegeheim 
Das Pflegeheim Sonnenblick ist eine mittelgrosse, gemeinnützige Institution mit einem Standort und drei 
Pflegestationen. Insgesamt werden rund 120 Bewohner:innen betreut. Der Betrieb ist stark personalintensiv 
und auf einen reibungslosen Schichtbetrieb angewiesen. Insgesamt beschäftigt das Pflegeheim rund 95 
Mitarbeitende, davon etwa 55 Pflegefachpersonen (HF/FH), 25 Pflegeassistent:innen, ein kleines 
Nachtdienst-Team von rund 8 Personen sowie etwa 7 Mitarbeitende in Administration und Leitung. Die 
Schichtplanung erfolgt aktuell weitgehend manuell und ohne zentrales System. Pro Station werden Excel-
Listen geführt, welche von der Pflegedienstleitung beziehungsweise den Stationsleitungen monatlich gepflegt 
und anschliessend als PDF per E-Mail an die Mitarbeitenden verteilt werden. Änderungen, etwa aufgrund von 
Krankheitsausfällen oder Tauschanfragen, werden telefonisch, über WhatsApp oder in persönlichen 
Absprachen koordiniert. Eine jederzeit aktuelle und für alle verbindliche Version der Dienstplanung existiert 
nicht. 
 
In den letzten Monaten häufen sich organisatorische Probleme. Mitarbeitende erscheinen zu falschen Zeiten 
oder verpassen Schichten, kurzfristige Krankheitsausfälle verursachen hohen Koordinationsaufwand und 
Überstunden werden uneinheitlich oder verspätet dokumentiert. Zusätzlich entstehen Unklarheiten bei der 
Verteilung von Wochenend- und Feiertagsdiensten, was zu Konflikten im Team führt. Viele Mitarbeitende 
empfinden die Dienstplanung als unfair, intransparent und schlecht nachvollziehbar. Die Unzufriedenheit 
wirkt sich zunehmend auf das Betriebsklima aus und bindet wertvolle Zeit der Führungskräfte. 
 
Die Ausgangslage ist zudem kulturell sensibel. Das Durchschnittsalter der Mitarbeitenden liegt bei etwa 45 
Jahren, die digitalen Kompetenzen sind sehr unterschiedlich ausgeprägt und der Arbeitsalltag ist durch hohe 
physische und emotionale Belastung geprägt. Frühere IT-Einführungen, beispielsweise im Bereich der 
Zeiterfassung, wurden von vielen Mitarbeitenden als unzureichend kommuniziert und „von oben verordnet“ 
wahrgenommen. Entsprechend ist das Vertrauen in neue digitale Systeme gering. Die Geschäftsleitung 
erwägt dennoch die Einführung eines digitalen Schichtplanungssystems, ist sich aber bewusst, dass eine rein 
technische Lösung die bestehenden Probleme nicht automatisch lösen wird. 
 
Zentrale Fragestellung ist daher, warum die heutige Schichtplanung nicht zuverlässig funktioniert und welche 
Anforderungen aus Sicht der Mitarbeitenden tatsächlich relevant sind. 
 
BUAN_Fallstudie_B.docx 
14.01.2026 
4/7 
2.2 
Option 2: Mobile App für den öffentlichen Verkehr einer Stadt 
Die Stadt Rheinstadt ist eine mittelgrosse Schweizer Stadt mit rund 85’000 Einwohner:innen. Der öffentliche 
Verkehr wird durch einen städtischen Eigenbetrieb organisiert, der insgesamt etwa 320 Mitarbeitende 
beschäftigt. Davon entfallen rund 240 auf das Fahrpersonal, etwa 50 auf Betrieb und Disposition sowie 
jeweils kleinere Einheiten für IT und Digitalisierung sowie Marketing und Kommunikation. Das 
Verkehrsangebot umfasst sechs Buslinien und zwei Tramlinien und wird durch externe Mobilitätsangebote 
wie ein Bike-Sharing-System sowie zwei E-Scooter-Anbieter ergänzt. 
 
Vor rund einem Jahr hat die Stadt eine eigene mobile ÖV-App eingeführt. Ziel war es, den Zugang zum 
öffentlichen Verkehr zu vereinfachen, den Ticketverkauf zu digitalisieren und die Stadt als moderne, digitale 
Akteurin zu positionieren. Die App bietet aktuell eine Fahrplanabfrage, den Kauf von Tickets sowie 
Informationen zu Störungen und Betriebsänderungen. Trotz hoher Erwartungen und begleitender 
Kommunikation bleibt die Nutzung jedoch deutlich hinter den Prognosen zurück. Die Downloadzahlen sind 
niedrig, die durchschnittliche Bewertung in den App-Stores liegt bei etwa 2.8 Sternen und die Anzahl der 
Support-Anfragen ist seit der Einführung gestiegen. 
 
Die Rückmeldungen aus der Bevölkerung sind widersprüchlich und reichen von „zu kompliziert“ über 
„wichtige Informationen fehlen“ bis hin zu dem Hinweis, dass andere Apps denselben Zweck besser erfüllen 
würden. Viele Nutzer:innen geben an, die App nur im Notfall zu verwenden. Die Nutzerbasis ist sehr 
heterogen und reicht von täglichen Pendler:innen mit hohen Effizienzansprüchen über 
Gelegenheitsnutzer:innen und Tourist:innen bis hin zu älteren Personen und sehr technikaffinen 
Nutzer:innen. Gleichzeitig stehen den Nutzer:innen mit Apps wie der SBB-App, Google Maps oder 
spezialisierten Drittanbieter-ÖV-Apps leistungsfähige Alternativen zur Verfügung, zwischen denen ohne 
nennenswerte Wechselkosten gewechselt werden kann. 
 
Intern wird davon ausgegangen, dass die App technisch korrekt umgesetzt wurde, die tatsächlichen 
Bedürfnisse und Erwartungen der Nutzer:innen jedoch im Vorfeld nur unzureichend erhoben wurden. 
Zusätzlich besteht politischer Druck, sichtbare digitale Erfolge vorzuweisen, was eine kritische und 
ergebnisoffene Analyse erschwert. 
 
Zentrale Fragestellung ist, welche Faktoren zur Unzufriedenheit der Nutzer:innen führen und welche App-
Funktionen die wahrgenommene Qualität und Akzeptanz am stärksten beeinflussen. 
 
 
BUAN_Fallstudie_B.docx 
14.01.2026 
5/7 
3 
Aufgabenstellung 
 
T1: Problemdefinition 
 
• 
Beschreiben Sie das zentrale Hauptproblem des gewählten Projekts 
 
• 
Definieren Sie 2–3 klar abgegrenzte Teilprobleme 
 
• 
Formulieren Sie das Problem lösungsneutral 
4 
Ursachenanalyse (Ishikawa / Fischgrätendiagramm) 
 
Führen Sie eine Ursachenanalyse für eines der identifizierten Hauptprobleme durch. 
 
Verwenden Sie passende Kategorien des Unterrichts: 
 
4M-Methode (Basisvariante) 
 
1. Mensch: Fehlverhalten, mangelnde Erfahrung oder fehlende Motivation. 
2. Maschine: Defekte, falsche Einstellungen oder mangelnde Wartung. 
3. Material: Rohstoffmängel, falsche Spezifikationen oder Lieferantenprobleme. 
4. Methode: Fehlerhafte Arbeitsabläufe, unklare Anweisungen oder Prozessfehler.  
 
7M-Methode (Erweiterte Analyse) 
 
5. Mitwelt (Umwelt): Externe Einflüsse wie Temperatur, Lärm oder Marktschwankungen. 
6. Management: Strategische Fehlentscheidungen, mangelnde Führung oder Ressourcenplanung. 
7. Messbarkeit (Messung): Ungenaue Prüfmittel, falsche Kennzahlen oder Messfehler.  
 
8M-Methode 
 
8. Money (Geld): Budgetrestriktionen oder fehlende finanzielle Mittel für Optimierungen. 
• 
Alternativ: Maintenance (Wartung) oder Market (Markt), je nach Branchenfokus. 
 
Identifizieren Sie konkrete, plausible Ursachen 
 
Kennzeichnen Sie die aus Ihrer Sicht kritischsten Ursachen 
 
T2: Ergebnis 1: 
 
• 
Ein strukturiertes Ishikawa-Diagramm (z. B. Miro, PowerPoint, Skizze) 
 
BUAN_Fallstudie_B.docx 
14.01.2026 
6/7 
 
5 
Ableitung von Kundenanforderungen 
 
T3: Leiten Sie aus der Ursachenanalyse mindestens 8–12 Anforderungen ab (z. B. 
Funktionen, Eigenschaften, Rahmenbedingungen). 
 
• 
Formulieren Sie diese aus Sicht der Nutzer:innen.Beobachtung 
 
 
5.1 
Kano-Modell 
 
T3: Kano-Modell 
 
Ordnen Sie die abgeleiteten Anforderungen mithilfe des Kano-Modells ein: 
 
• 
Basismerkmale 
• 
Leistungsmerkmale 
• 
Begeisterungsmerkmale 
• 
(Optional: Indifferente / Rückweisungsmerkmale) 
 
 
 
Visualisieren Sie die Anforderungen auf dem Kano Modell nach Vorlage: 
 
BUAN_Fallstudie_B.docx 
14.01.2026 
7/7 
 
 
Ergebnis: 
 
Kano-Diagramm nach Vorlage 
 
 
 
6 
Bonusaufgabe: Risiken 
 
T4: Erstellen Sie eine Risikomatrix für mögliche Risiken 
- 
Geben Sie Beschreibung, Eintrittswahrscheinlichkeit, Auswirkungsgrad, Reaktions-
/Präventionsmassnahmen und Auswirkungsgrad Massnahmen an` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/BUAN3_v2.pdf`, body: `Business Analyse Unit 3
Vergleich Ist-Soll-Zustand und Strategiedefinition
AI Business Specialist
2025 Joel Baumann
AIBS.A.OL.1.136-ML-S2510-BUAN.BA1A
AIBS.A.OL.1.136-OL-S2510-BUAN.BA1A
Ablauf
Fachplan Klasse 1 (OL)
2
| 
2
1. Dez
5. Jan
14. Jan
Unit 1
Online
• Grundlagen
• Standards
• Perspektiven
• Vorgehen
Unit 2
Online
• Erhebungstechniken
• Fragetypen
• Frage- und 
Antwortformate
Unit 3
Online
• Problem-
identifikation
• Ist-Soll Vergleiche
• Change Strategie
Unit 4
Online
• Anforderungs-
management
• Digitale Werkzeuge
• Anforderungsarten
21. Jan
Praxisprojekt «Euer Startup»
…
…
Ablauf
Fachplan Klasse 1 (OL)
3
| 
3
28. Jan
7. Feb
Unit 5
Online
• Spezifikationstechniken
• Modellierungstechniken
• Verwaltungstechniken
Unit 6
701- Aula Altstetten
• Lösungsentwürfe
• Bewertung von 
Lösungsvarianten
• Business Canvas
Unit 7
701- Aula Altstetten
• Präsentation
21. März
Praxisprojekt «Euer Startup»
Ablauf
Fachplan Klasse 2 (ML)
4
| 
4
6.Dez
6. Dez
10. Dez
Unit 1
Raum 608
• Grundlagen
• Standards
• Perspektiven
• Vorgehen
Unit 2
Raum 608
• Erhebungstechniken
• Fragetypen
• Frage- und 
Antwortformate
Unit 3
Online
• Problem-
identifikation
• Ist-Soll Vergleiche
• Change Strategie
Unit 4
Online
• Anforderungs-
management
• Digitale Werkzeuge
• Anforderungsarten
12. Jan
Praxisprojekt «Euer Startup»
…
…
Ablauf
Fachplan Klasse 2 (ML)
5
| 
5
19. Jan
26. Jan
Unit 5
Online
• Spezifikationstechniken
• Modellierungstechniken
• Verwaltungstechniken
Unit 6
Online
• Lösungsentwürfe
• Bewertung von 
Lösungsvarianten
• Business Canvas
Unit 7
Raum 608
• Präsentation
• Abgabe Powerpoint
14. Feb
Praxisprojekt «Euer Startup»
Miro
6
Analyse Ist-Zustand
7
SWOT-Analyse
8
SWOT-Analyse
9
• Strengths
−Stärken
• Weaknesses
−Schwächen
• Opportunities
−Möglichkeiten
• Threats
−Risiken
SWOT-Analyse
zusammengefasst
10
• Stellt Stärken und Schwächen Chancen und Risiken gegenüber
• Positioniert die eigenen Aktivitäten im Wettbewerb
• V.a. für Startups nützlich, da Einfluss auf Erfolg gemessen werden kann
SWOT-Analyse
nach BABOK
11
Die SWOT-Analyse ist ein strategisches Planungsinstrument, das verwendet wird, um den 
Gesamtzustand einer Organisation sowohl intern als auch extern zu bewerten. Die Sprache in 
einer SWOT-Analyse ist kurz, präzise, realistisch und durch Belege gestützt.
SWOT-Analyse
nach BABOK
12
•
Zweck der SWOT-Analyse
•
Eine SWOT-Analyse dient dazu:
•
Den aktuellen Zustand einer Organisation zu bewerten
•
Erkenntnisse mit Stakeholdern zu teilen
•
Die besten Optionen zur Erreichung der Organisationsziele zu identifizieren
•
Mögliche Hindernisse für den Erfolg zu erkennen und Aktionspläne zu deren Überwindung zu entwickeln
•
Pläne während eines Projekts bei neuen Bedürfnissen anzupassen und neu zu definieren
•
Stärken zu identifizieren, die bei der Umsetzung neuer Strategien helfen
•
Kriterien für die Bewertung des Projekterfolgs zu entwickeln
•
Schwächen zu erkennen, die Projektziele gefährden könnten
•
Strategien zu entwickeln, um bestehende Bedrohungen zu bekämpfen
Die SWOT-Analyse kann auf jeder Ebene durchgeführt werden: vom gesamten Unternehmen über Abteilungen, Geschäftseinheiten, Projekte 
bis hin zu einzelnen Personen.
Warum SWOT Analyse?
13
SWOT-Analyse
Intern / Extern
14
• Strengths
−Stärken
• Weaknesses
−Schwächen
• Opportunities
−Möglichkeiten
• Threats
−Risiken
SWOT-Analyse
Intern / Extern
15
• Strengths
−Stärken
• Weaknesses
−Schwächen
• Opportunities
−Möglichkeiten
• Threats
−Risiken
-> Interne Faktoren änderbar, externe Faktoren reagierbar
SWOT-Analyse
Beispiel
17
SWOT-Analyse 
Schritte
18
1.
Stärken- Schwächenanalyse
2.
Ermittlung externer Chancen und Risiken
3.
Zusammenführen der Markt- und Unternehmensbetrachtung
SWOT-Analyse
1. Stärken- Schwächenanalyse
19
SWOT-Analyse
1. Stärken- Schwächenanalyse
20
Vorgehen:
1. Ziele und Umfang festlegen
2. Informationen sammeln
3. Identifizierung von Stärken und Schwächen
SWOT-Analyse
1. Stärken- Schwächenanalyse
24
Was wird verglichen?
•
Wettbewerber
•
Zeit
•
Erfolgsfaktoren
SWOT-Analyse
1. Stärken- Schwächenanalyse
25
Schwächen
• schwache Marktposition/Bekanntheit
• veraltete Produkte
• schwierige finanzielle Situation (hohe Kostenstruktur, fehlendes Kapital)
• gesättigter Markt
• fehlendes Fachpersonal
• veraltete Technologie/fehlende Technologie
SWOT-Analyse
1. Stärken- Schwächenanalyse
26
Stärken
• hohe Markenbekanntheit
• innovative Produkte
• hohe Kundenzufriedenheit
• effiziente Prozesse
SWOT-Analyse
1. Stärken- Schwächenanalyse
27
Aspekte, die allgemein Gegenstand einer Stärken-Schwächen-Analyse sein können, sind beispielsweise:
•
Finanzen
•
Marketing
•
Standort
•
Produktion
•
Technologie
•
Digitalisierungsgrad
•
Onlineauftritt
•
Markenbekanntheit
•
Kundenzufriedenheit
•
Mitarbeiterzufriedenheit
•
Logistik und Versand
•
Qualität
•
Führungsqualität
SWOT-Analyse
1. Stärken- Schwächenanalyse
28
Fragen bei einer persönlichen Analyse:
•
Welche Soft Skills besitze ich?
•
Welche Hard Skills habe ich?
•
Was begeistert mich?
•
Was motiviert mich?
•
Bin ich ein Teamplayer oder arbeite ich lieber alleine?
•
Welches Wissen besitze ich, das für andere wertvoll sein kann?
•
Wie habe ich meine Fähigkeiten bisher im Betrieb unter Beweis gestellt?
SWOT-Analyse
1. Stärken- Schwächenanalyse
29
Beispiel Supermarkt ABC
• Welche Produkte und Dienstleistungen werden angeboten? Welche bieten die 
Wettbewerber:innen an?
• Welche Preise bieten die Konkurrenz an?
• Welche Qualität bietet die Konkurrenz an?
• Welchen Kundenservice bieten die Wettbewerber*innen?
• Wie wirbt die Konkurrenz?
SWOT-Analyse
1. Stärken- Schwächenanalyse
30
Beispiel Supermarkt ABC
Stärken
•
Frische Produkte: Im Vergleich zur Konkurrenz bietet der Supermarkt XY eine größere Auswahl an frischen Produkten 
aus der Region an.
•
Günstige Preise: Die Preise im Supermarkt XY sind im Vergleich zur Konkurrenz wettbewerbsfähig. Dieser Punkt ist 
insbesondere von Vorteil, da der Standort des Supermarktes eher strukturschwach ist und hier viele Menschen mit 
niedrigen Einkommen wohnen, die besonders auf niedrige Preise achten müssen.
•
Freundliches Personal: Das Personal des Supermarktes XY wird als freundlich und hilfsbereit wahrgenommen.
•
Saubere und gepflegte Filiale: Die Filiale des Supermarktes XY ist im Vergleich zu einigen Wettbewerber*innen sehr 
sauber. Darüber hinaus ist das Licht in der Filiale ist sehr hell, was der Filiale eine einladende Atmosphäre verleiht.
•
Gute Lage: Die Filiale des Supermarktes XY liegt in einer guten Lage mit ausreichend Parkplätzen und Anbindung an 
den ÖPNV, was vor allem für die Kundschaft in der Nähe von Vorteil ist, die kein Auto haben.
SWOT-Analyse
1. Stärken- Schwächenanalyse
31
Beispiel Supermarkt ABC
Schwächen
•
Zu viel Bio-Sortiment: Das Sortiment des Supermarktes XY hat zu viele Bio-Produkte im Sortiment. Diese werden aber 
aufgrund der hohen Preise von der Kundschaft vor Ort nicht gekauft. Der Hauptkonkurrent in unmittelbarer Nähe setzt 
dagegen vor allem auf günstige Eigenprodukte.
•
Keine Online-Bestellmöglichkeit und kein Lieferservice: Der Supermarkt XY bietet im Vergleich zu einigen 
Mitbewerbern keinen Lieferservice an.
•
Keine Kundenkarte: Der Supermarkt XZ bietet seinen Kund*innen keine Rabatt- oder Kundenkarte an.
SWOT-Analyse
1. Stärken- Schwächenanalyse
32
Beispiel Supermarkt ABC
-> Eintragen in SWOT-Analyse
SWOT-Analyse
2. Chancen und Risiken ermitteln
33
Umwelt (Context) analysieren.
Trends und Veränderungen erkennen, um diese später zu nutzen (Change).
•
Politisch
•
Marktbezogen
•
Ökologisch
•
Sozial
•
Technologisch
SWOT-Analyse
2. Chancen und Risiken ermitteln
34
Umwelt (Context) analysieren.
Trends und Veränderungen erkennen, um diese später zu nutzen (Change).
•
Politisch durch geänderte gesetzliche Regelungen (Zölle, Einfuhrbestimmungen, Umweltstandard, 
Währungsveränderungen)
•
Marktbezogen durch den Austritt oder Eintritt von Wettbewerbern, der Veränderung der Marktgröße, der 
Weltmarktpreise oder der Kaufkraft
•
Ökologisch durch Naturkatastrophen wie Dürre oder Überschwemmungen
•
Sozial durch veränderte Bedürfnisse der Kunden, gesellschaftliche Entwicklungen, oder durch demographischen 
Wandel.
•
Technologisch durch neue technische Standards oder neue Herstellungsprozesse
SWOT-Analyse
3. Zusammenführen
36
SWOT-Analyse
3. Zusammenführen
TOWS – Analyse:
37
SWOT-Analyse
3. Zusammenführen
TOWS – Analyse:
38
SWOT-Analyse
3. Zusammenführen
TOWS – Analyse:
Beispiel Holz Sportgeräte AG:
43
?
SWOT-Analyse
3. Zusammenführen
TOWS – Analyse:
Beispiel Holz Sportgeräte AG:
44
SWOT-Analyse
Anwendung
45
Geeignet, wenn
•
Ein schneller Überblick über interne Fähigkeiten nötig ist
•
Strategische Standortbestimmung gefragt ist
Nicht geeignet, wenn
•
Detaillierte Ursachen oder Prozesse analysiert werden sollen
•
Objektive, messbare Ergebnisse erforderlich sind
Vorteile
•
Einfach und schnell durchführbar
•
Gut verständlich für Stakeholder
Nachteile
•
Stark subjektiv
•
Liefert keine konkreten Lösungsansätze
Prozessanalyse
47
Prozessanalyse
SIPOC
48
Nach BABOK:
Prozessanalyse
SIPOC
49
Nach BABOK:
SIPOC ist eine einfache, aber sehr wirksame Prozessanalyse-Methode, die ursprünglich aus 
der Six-Sigma-Methodik stammt und heute weit über Six Sigma hinaus in allen Bereichen der 
Prozessverbesserung (Lean, Prozessmanagement, Qualitätsmanagement usw.) eingesetzt 
wird.
Prozessanalyse
SIPOC
50
Zweck und Nutzen:
• Schneller Überblick 
• Klare Definition des Prozessumfangs
• Sichtbarmachen der Schnittstellen zu Lieferanten und Kunden
• Ideale Grundlage für detailliertere Analysen` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Buan4/BUAN4.pdf`, body: `Business Analyse Unit 4
Erhebung und Verwaltung von Anforderungen an das Veränderungsvorhaben
AI Business Specialist
2025 Joel Baumann
AIBS.A.OL.1.136-ML-S2510-BUAN.BA1A
AIBS.A.OL.1.136-OL-S2510-BUAN.BA1A
Ablauf
Fachplan Klasse 1 (OL)
2
| 
2
1. Dez
5. Jan
14. Jan
Unit 1
Online
• Grundlagen
• Standards
• Perspektiven
• Vorgehen
Unit 2
Online
• Erhebungstechniken
• Fragetypen
• Frage- und 
Antwortformate
Unit 3
Online
• Problem-
identifikation
• Ist-Soll Vergleiche
• Change Strategie
Unit 4
Online
• Anforderungs-
management
• Digitale Werkzeuge
• Anforderungsarten
21. Jan
Praxisprojekt «Euer Startup»
…
…
Ablauf
Fachplan Klasse 1 (OL)
3
| 
3
28. Jan
7. Feb
Unit 5
Online
• Spezifikationstechniken
• Modellierungstechniken
• Verwaltungstechniken
Unit 6
701- Aula Altstetten
• Lösungsentwürfe
• Bewertung von 
Lösungsvarianten
• Business Canvas
Unit 7
701- Aula Altstetten
• Präsentation
21. März
Praxisprojekt «Euer Startup»
Change Management / Change Strategie
«Veränderungsmanagement»
Change Strategie 
Definition Veränderungsmanagement
6
Unter Veränderungsmanagement (englisch change management, CM,
von englisch management) lassen sich alle Aufgaben, Maßnahmen und
Tätigkeiten zusammenfassen, die eine umfassende,
bereichsübergreifende und inhaltlich weitreichende Veränderung – zur
Umsetzung neuer Strategien,
Strukturen, Systeme, Prozesse oder Verhaltensweisen – in
einer Organisation bewirken sollen. Mit der Verfolgung von Änderungen
an Produkten befasst sich das Änderungswesen.
https://de.wikipedia.org/wiki/Veränderungsmanagement
Change Strategie
Change Management
7
Change Strategie 
Change
8
Change Strategie
Veränderungen erkennen
9
Änderungsauslöser?
Change Strategie
Veränderungen erkennen - extern
10
Change Strategie
Veränderungen erkennen
11
Change Strategie
Veränderungen erkennen - intern
12
Change Strategie
Veränderungen erkennen
13
14
Change Strategie
Einflüsse
15
• Veränderungsbereitschaft – Typische Einstellungen
Change Strategie
Einflüsse
16
• Veränderungsbereitschaft - Strategien
Change Strategie
Einflüsse
17
• Weitere Einflüsse:
−Einbettung und Abgleich mit Unternehmenszielen
−Beispiel: Die vorgeschlagenen Maßnahmen (Reorganisation) müssen mit Zielen wie 
Effizienzsteigerung und Kostendruck abgestimmt werden, um den "Nutzen" (z. B. schnellere 
Produktion) zu maximieren.
−Zeitraum
−Beispiel: Ein zu langer Zeitraum kann Motivation senken oder Chancen verpassen; ein zu kurzer 
erhöht Widerstände
Change Strategie
Einflüsse
18
• Weitere Einflüsse:
−Umsetzungskosten
−Beispiel: Hohe Umsetzungskosten können die Machbarkeit beeinträchtigen und müssen gegen 
Nutzen abgewogen werden.
−Nutzen
−Beispiel: Der erwartete Nutzen rechtfertigt die Veränderung und motiviert Stakeholder. 
−Opportunitätskosten
−Opportunitätskosten entstehen, wenn Ressourcen für Change gebunden sind und andere Projekte 
vernachlässigt werden. Die Strategie muss priorisieren, z. B. durch Abwägung von Kosten und 
Nutzen in der Maßnahmenplanung.
Anforderungsmanagement
«Requirements Engineering»
19
Anforderungsmanagement
20
Anforderungsmanagement
Warum Anforderungsmanagement?
21
Anforderungsmanagement
Warum Anforderungsmanagement?
22
• Strategie allein bewirkt keine Veränderung
• Anforderungen übersetzen Ziele in umsetzbare Inhalte
• Fehlende Anforderungen führen zu:
−Widerstand
−Missverständnissen
−Scope Creep
−gescheiterten Changes
Anforderungsmanagement
Anforderungen im Change-Kontext (Change Management)
23
• Veränderungen erzeugen laufend neue Anforderungen
• Unterschiedliche Stakeholder = unterschiedliche Erwartungen
• Anforderungen als:
−Kommunikationsinstrument
−Entscheidungsgrundlage
−Mittel zur Reduktion von Widerstand
Anforderungsmanagement
Definition Anforderung (BABOK)
24
• Eine Anforderung beschreibt:
−einen Bedarf
−ein Ziel
−eine Fähigkeit
−oder eine Einschränkung
• Quellen:
−Business
−Stakeholder
−Lösung
• Anforderungen sind veränderlich!
Anforderungsmanagement
Anforderungsebenen
25
• Business Requirements (Geschäftsanforderungen): 
−Warum wird das Projekt durchgeführt?
• User Requirements (Benutzeranforderungen): 
−Was können die Nutzer mit dem Produkt machen?
• Software Requirements (Lösungsanforderungen): 
−Was benötigen die Entwickler für die Entwicklung?
Anforderungsmanagement
Anforderungsebenen
26
Anforderungsmanagement
Anforderungsebenen
27
Ebene
Typische 
Bezeichnung
Abstraktionsgrad
Wer definiert 
primär?
Abgeleitet aus …
Beschreibung
Spitze
Business / 
Unternehmensziele
Sehr hoch
Geschäftsführung, 
Eigentümer
Strategie, Markt, 
Vision
Definiert den 
Warum-Zweck des 
ganzen Projekts
Mittlere Ebene
Stakeholder / 
Nutzer-
/Kundenanforderun
gen
Mittel
Fachbereiche, 
Endnutzer, Key-
User
Business 
Requirements
Muss den 
Geschäftszweck 
konkret umsetzen
Untere Ebene(n)
Solution / System- / 
Softwareanforderun
gen
Niedrig → sehr 
detailliert
IT/Entwicklung, 
Architekten
Stakeholder 
Requirements
Beschreibt wie 
genau etwas 
technisch realisiert 
wird
Anforderungsmanagement
Anforderungsebenen
28
Beispiele
• Betriebsanforderungen:
−„Reduktion der Durchlaufzeit um 20 %“
• Benutzeranforderungen:
−„Sachbearbeitende müssen Anträge in <5 Minuten erfassen können“
Anforderungsmanagement
Anforderungsebenen
29
Beispiele
• Lösungsanforderungen:
−Funktional
−
Was soll das System tun?
−Nichtfunktional
−Qualität der Lösung:
−
Performance
−
Sicherheit
−
Usability
−
Verfügbarkeit
Anforderungsmanagement
Lebenszyklus von Anforderungen:
30
• Analyse
• Dokumentation
• Beurteilung & Validierung
• Priorisierung
• Änderungsmanagement
• Umsetzungs- & Nachverfolgungsmanagement
Anforderungsmanagement
Lebenszyklus von Anforderungen:
31
• Analyse
32
Fallstudie C
33
Anforderungsmanagement
Lebenszyklus von Anforderungen:
34
• Analyse
• Dokumentation - ?
Anforderungsmanagement
Lebenszyklus von Anforderungen - Dokumentation
35
• Klar
• Eindeutig
• Verständlich
• Nachvollziehbar
• Einheitliche Struktur
-> Change-Management -> Transparenz reduziert Unsicherheit
Anforderungsmanagement
Lebenszyklus von Anforderungen:
36
Anforderungsmanagement
Lebenszyklus von Anforderungen:
37
Anforderungsmanagement
Lebenszyklus von Anforderungen:
38
Anforderungsmanagement
Lebenszyklus von Anforderungen - Dokumentation
39
• Digitale Werkzeuge
Anforderungsmanagement
Lebenszyklus von Anforderungen:
40
• Analyse
• Dokumentation
• Beurteilung & Validierung
Anforderungsmanagement
Lebenszyklus von Anforderungen:
41` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Buan4/BUAN_Fallstudie_D.pdf`, body: `Fallstudie D 
 
Anforderungsmanagement II 
AIBS BUAN 
 
 
 
BUAN_Fallstudie_D.docx 
21.01.2026 
2/5 
 
1 
Einleitung 
 
Diese Fallstudie im Business Analyse dient zur Vertiefung und Anwendung des im 
Unterricht gelernten Anforderungsmanagements 
2 
Ausgangslage: 
Sie haben nun als Business Analyst die relevanten Anforderungsinformationen gesammelt. 
Nun sollen sie strukturiert werden. 
 
 
 
 
 
BUAN_Fallstudie_D.docx 
21.01.2026 
3/5 
 
 
 
3 
Hintergrund: 
Sie verfügen unter anderem über folgende Requirements Engineering Kenntnisse: 
 
Dokumentation soll folgendes sein: 
 
• 
Klar 
• 
Eindeutig 
• 
Verständlich 
• 
Nachvollziehbar 
• 
Einheitliche Struktur 
 
Beispiele: 
 
 
 
BUAN_Fallstudie_D.docx 
21.01.2026 
4/5 
 
 
 
 
 
 
BUAN_Fallstudie_D.docx 
21.01.2026 
5/5 
4 
Aufgabenstellung 
 
T1: Requirements Dokumentation 
 
• 
Erstellen Sie eine Requirements-Tabelle, mit Kolonnen, welche Ihnen angemessen betreffend der 
Requirements scheinen. 
o 
Sie soll mindestens folgende Kolonnen erhalten: 
▪ 
ID, Beschreibung, Priorität, Quelle 
 
• 
Fügen Sie die Anforderungen ein 
 
• 
Priorisieren Sie die Anforderungen nach einer angemessenen Methode, soweit möglich anhand der 
Informationen.` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/BUAN5.pdf`, body: `Business Analyse Unit 5
Techniken der Anforderungsspezifikation und Modellierung
AI Business Specialist
2025 Joel Baumann
AIBS.A.OL.1.136-ML-S2510-BUAN.BA1A
AIBS.A.OL.1.136-OL-S2510-BUAN.BA1A
Ablauf
Fachplan Klasse 1 (OL)
2
| 
2
1. Dez
5. Jan
14. Jan
Unit 1
Online
• Grundlagen
• Standards
• Perspektiven
• Vorgehen
Unit 2
Online
• Erhebungstechniken
• Fragetypen
• Frage- und 
Antwortformate
Unit 3
Online
• Problem-
identifikation
• Ist-Soll Vergleiche
• Change Strategie
Unit 4
Online
• Anforderungs-
management
• Digitale Werkzeuge
• Anforderungsarten
21. Jan
Praxisprojekt «Euer Startup»
…
…
Ablauf
Fachplan Klasse 1 (OL)
3
| 
3
28. Jan
7. Feb
Unit 5
Online
• Spezifikationstechniken
• Modellierungstechniken
• Verwaltungstechniken
Unit 6
701- Aula Altstetten
• Lösungsentwürfe
• Bewertung von 
Lösungsvarianten
• Business Canvas
Unit 7
701- Aula Altstetten
• Präsentation
21. März
Praxisprojekt «Euer Startup»
Repetition Unit 4
Anforderungsebenen?
4
Repetition Unit 4
Anforderungsebenen?
5
• Unternehmensebene
• Stakeholder-Ebene / Benutzerebene
• Systemebene
Repetition Unit 4
Anforderungsebenen?
6
• Unternehmensebene
−Satzbau: "Das Ziel ist...", "Wir wollen [Marktanteil/Umsatz] erreichen", "Der Prozess soll 
[X Chf] einsparen."
−Regel: Fokus auf Wachstum, Kosten, Zeit.
−Beispiel: "Wir wollen die Bearbeitungszeit von Kundenanfragen um 30% senken."
• Stakeholder-Ebene
• Systemebene
Repetition Unit 4
Anforderungsebenen?
7
• Unternehmensebene
• Stakeholder-Ebene
−Satzbau: "Der/die [Rolle] möchte...", "Ich als [Nutzer] muss in der Lage sein...", "Wir 
benötigen eine Möglichkeit, um..."
−Regel: Fokus auf die Aufgaben der Stakeholder/Nutzer.
−Beispiel: "Der Buchhalter muss die Monatsabrechnungen ohne manuelle 
Datenübertragung erstellen können."
• Systemebene
Repetition Unit 4
Anforderungsebenen?
8
• Unternehmensebene
• Stakeholder-Ebene
• Systemebene
−Satzbau: "Das System muss...", "Die Schnittstelle soll...", "Die Datenbank muss [X] 
speichern."
−Regel: Fokus auf die Funktion der Lösung.
−Beispiel: "Das System muss dem Nutzer nach drei Fehlversuchen den Zugang für 10 
Minuten sperren.„
Repetition Unit 4
Anforderungsebenen?
9
• Unternehmensebene
• Stakeholder-Ebene
• Systemebene
−Was soll das System tun? -> Funktional (z. B. „Der Nutzer kann ein PDF exportieren“).
−Wie gut/schnell/sicher soll es das tun? -> Nicht-funktional / Qualität (z. B. „Der 
Export dauert weniger als 2 Sekunden“).
Repetition Unit 4
Anforderungsebenen?
10
Ebene
Formulierung
Fokus
Beispiel
Business
erreichen, 
optimieren, senken, 
steigern
Nutzen (ROI)
"Wir wollen die 
Kundenzufriedenheit durch 
schnellere Prozesse 
steigern."
Stakeholder
benötigen, können, 
wollen, möchte
Benutzer-Aufgabe
"Der Vertrieb möchte 
Kundenrabatte direkt am 
Tablet freigeben können."
System
MUSS, SOLL, KANN 
(aktiv formuliert)
Funktionalität
"Das System muss dem 
Administrator eine E-Mail 
senden, wenn der 
Lagerbestand unter 10 fällt."
Repetition Unit 4
Anforderungen definieren (Funktionale Anforderungen)
11
Repetition Unit 4
Anforderungen definieren (Funktionale Anforderungen)
12
/der Stakeholder
/das Unternehmen
Repetition Unit 4
Anforderungen definieren (Funktionale Anforderungen)
13
Miro: Requirements umschreiben
14
Klassische Projektplanung
15
Gantt / Wasserfall Planung
Klassische Vorgehensweise
16
Gantt / Wasserfall Planung
Klassische Vorgehensweise
17
Agile Projektplanung
18
Agile Projektplanung
19
Agile Projektplanung
20
Agile Projektplanung
21
Agile Projektplanung
Scrum
22
Agile Projektplanung
Vorteile
23
Use-Case
UC Diagramm
24
Use-Case
UC Diagramm
25
Use-Case
26
Use-Case
27
UML-Diagramm
28
UML-Diagramm
Beispiel:
Klassendiagramm
29
UML-Diagramm
Beispiel:
Sequenzdiagramm
30
Agile Projektplanung
Story Mapping
31
Was sagt uns KI?
32
Story Mapping
User Story
Story Mapping
User Story - Definition
• In der agilen Softwareentwicklung ist eine User Story eine informelle, in Alltagssprache 
verfasste Beschreibung eines Software-Features aus der Perspektive des Endanwenders. 
Sie dient als Kommunikationsmittel, um den Fokus auf den Nutzen für den Anwender zu 
legen, statt auf rein technische Details. 
Story Mapping
User Story
Story Mapping
User Story
Story Mapping
User Story
Story Mapping
User Story
• Persona einbeziehen!
Story Mapping
User Story
Story Mapping
User Story –
Acceptance 
Criterias` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/BUAN6.pdf`, body: `Business Analyse Unit 6
Entwicklung und Bewertung von Lösungsentwürfe für das Veränderungsvorhaben
AI Business Specialist
2025 Joel Baumann
AIBS.A.OL.1.136-ML-S2510-BUAN.BA1A
AIBS.A.OL.1.136-OL-S2510-BUAN.BA1A
Ablauf
Fachplan Klasse 1 (OL)
2
| 
2
1. Dez
5. Jan
14. Jan
Unit 1
Online
• Grundlagen
• Standards
• Perspektiven
• Vorgehen
Unit 2
Online
• Erhebungstechniken
• Fragetypen
• Frage- und 
Antwortformate
Unit 3
Online
• Problem-
identifikation
• Ist-Soll Vergleiche
• Change Strategie
Unit 4
Online
• Anforderungs-
management
• Digitale Werkzeuge
• Anforderungsarten
21. Jan
…
…
Ablauf
Fachplan Klasse 1 (OL)
3
| 
3
28. Jan
7. Feb
Unit 5
Online
• Spezifikationstechniken
• Modellierungstechniken
• Verwaltungstechniken
Unit 6
701- Aula Altstetten
• Lösungsentwürfe
• Bewertung von 
Lösungsvarianten
• Business Canvas
Unit 7
701- Aula Altstetten
• Präsentation
21. März
Repetition Unit 5
4
Repetition Unit 5
5
• Anforderungen definieren
• Agile Projektplanung
−SCRUM
• Story Mapping
−Theme, Epic, Story, Task
• Backlog
• Kanban Board
Story Mapping
User Story
Miro: Warm Up
miro board
7
Lösungsentwürfe beschreiben
8
Lösungsentwürfe beschreiben
Business Process Model and Notation (BPMN)
9
Lösungsentwürfe beschreiben
Business Process Model and Notation (BPMN)
10
Lösungsentwürfe beschreiben
Business Process Model and Notation (BPMN)
11
Lösungsentwürfe beschreiben
Datenmodelle
12
Lösungsentwürfe beschreiben
Datenmodelle
13
Lösungsentwürfe beschreiben
Datenmodelle
14
Lösungsentwürfe beschreiben
IT-Systemarchitektur
15
Lösungsentwürfe beschreiben
Storyboard
16
Lösungsentwürfe beschreiben
Storyboard
17
Lösungsentwürfe beschreiben
Storyboard
18
Lösungsentwürfe beschreiben
Storyboard
19
Lösungsentwürfe beschreiben
Storyboard
20
Lösungsentwürfe beschreiben
Storyboard
21
Praxisaufgabe:
• Storyboard That: Free Online Storyboard Creator
Wähle zwischen:
• Arzttermin online buchen
• Essen per App bestellen
• E-Scooter mieten
->3 Frames generieren -> in Miro einfügen -> Beschreibungen zu den Frames einfügen
Lösungsentwürfe beschreiben
Prototypen
22
Lösungsentwürfe beschreiben
Prototypen
23
Lösungsentwürfe beschreiben
Prototypen
24
Lösungsentwürfe beschreiben
Prototypen
25
Lösungsentwürfe beschreiben
Prototypen
26
Papierprototyp
Lösungsentwürfe beschreiben
Prototypen
27
Papierprototyp
Lösungsentwürfe beschreiben
Prototypen
28
Papierprototyp
Lösungsentwürfe beschreiben
Prototypen
29
Papierprototyp
Aufgabe:
Für gewählte Story des Storyboards Papierprototypen erstellen:
• Arzttermin online buchen
• Essen per App bestellen
• E-Scooter mieten
Lösungsentwürfe beschreiben
Prototypen
30
Mid-Fidelity
Lösungsentwürfe beschreiben
Prototypen
31
Mid-Fidelity
Lösungsentwürfe beschreiben
Prototypen
32
Mid-Fidelity
Lösungsentwürfe beschreiben
Prototypen
33
Mid-Fidelity / Wireframe
Beispiel
Lösungsentwürfe beschreiben
Prototypen
34
Mid-Fidelity / Wireframe
Beispiel
Lösungsentwürfe beschreiben
Prototypen
35
Mid-Fidelity / Wireframe
Beispiel
Lösungsentwürfe beschreiben
Prototypen
36
Mid-Fidelity / Wireframe
Beispiel
Lösungsentwürfe beschreiben
Prototypen
37
High-Fidelity Prototype
Lösungsentwürfe beschreiben
Prototypen
38
High-Fidelity Prototype
Lösungsentwürfe beschreiben
Prototypen
39
High-Fidelity Prototype
Lösungsentwürfe beschreiben
Prototypen
40
Web Tool für Low- und Mid-Fidelity:
balsamiq
Für High-Fidelity Prototypen:
Figma` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/BUAN_Fallstudie_A.pdf`, body: `Fallstudie A 
 
Erhebungstechniken 
 
AIBS BUAN 
 
 
 
BUAN_Fallstudie_A.docx 
05.01.2026 
2/5 
Contents 
1 
Einleitung 
3 
2 
Ausgangslagen: 
3 
2.1 
Option 1: Digitale Schulorganisation ............................................................................................. 3 
2.2 
Option 2: Kundenportal eines KMU ............................................................................................... 3 
3 
Gratulation, sie haben den Job! 
4 
4 
Vorgehen 
4 
4.1 
Auswahl ..................................................................................................................................... 4 
4.2 
Planung Erhebung ....................................................................................................................... 5 
 
 
 
 
BUAN_Fallstudie_A.docx 
05.01.2026 
3/5 
1 
Einleitung 
 
Diese Fallstudie im Business Analyse dient zur Vertiefung und Anwendung der im 
Unterricht behandelten Themen und zur Stärkung der Kompetenzen in diesem Bereich. Diese Fallstudie 
und die beschriebene Ausgangslage begleitet sie in diesem Fach in mehreren Teilaufgaben. 
 
• 
Im Folgenden werden Ihnen zwei verschiedene Firmen vorgestellt.  
• 
Wählen Sie davon in ihrer Gruppe eine der zwei Firmen für ihre Erhebungen. 
• 
Planen Sie angemessene Erhebungstechniken. 
• 
Reflektieren Sie. 
 
2 
Ausgangslagen: 
Im folgenden werden Ihnen zwei verschiedene Ausgangslagen presentiert.  
Wählen Sie als Gruppe eine davon um weiterzufahren. 
2.1 
Option 1: Digitale Schulorganisation 
Die Berufsfachschule Nordstadt ist eine mittelgrosse öffentliche Bildungsinstitution mit rund 900 Lernenden, 
80 Lehrpersonen und einer zentralen Administration. Über die letzten Jahre wurden digitale Werkzeuge 
schrittweise eingeführt, jedoch ohne übergreifende Strategie. Heute existiert eine historisch gewachsene IT-
Landschaft, bestehend aus einer Lernplattform, E-Mail-Systemen, Cloud-Speichern, Excel-Listen sowie 
privaten Messenger-Diensten. 
 
Die Situation wird von vielen Mitarbeitenden als belastend wahrgenommen. Informationen werden mehrfach 
abgelegt, Zuständigkeiten sind unklar und wichtige Mitteilungen erreichen die Anspruchsgruppen teilweise zu 
spät oder gar nicht. Besonders problematisch ist, dass Lehrpersonen, Administration und Schulleitung sehr 
unterschiedliche Arbeitsweisen entwickelt haben. 
 
Der zunehmende organisatorische Aufwand führt zu Frustration, Fehlern und Ineffizienzen. Die Schulleitung 
erkennt, dass ohne eine fundierte Analyse des Ist-Zustands keine tragfähige digitale Gesamtorganisation 
entwickelt werden kann. Ziel ist es daher, Transparenz über bestehende Abläufe, Bedürfnisse und 
tatsächliche Nutzung digitaler Mittel zu gewinnen. 
 
2.2 
Option 2: Kundenportal eines KMU 
Die ServiPlus AG ist ein Schweizer KMU mit rund 45 Mitarbeitenden und bietet Wartungs- und 
Serviceleistungen für technische Anlagen an. Das Unternehmen verfügt über eine treue, aber heterogene 
Kundschaft aus Gewerbe und Industrie. 
 
Der Kundenkontakt erfolgt hauptsächlich per Telefon und E-Mail. Rechnungen werden als PDF versendet, 
Terminvereinbarungen telefonisch koordiniert. In den letzten Jahren ist das Anfragevolumen stark gestiegen, 
was den Kundenservice zunehmend belastet. 
 
Die Geschäftsleitung vermutet, dass ein digitales Kundenportal Prozesse vereinfachen könnte. Gleichzeitig 
besteht Unsicherheit darüber, welche Funktionen Kunden tatsächlich benötigen und akzeptieren würden. 
Fehlentwicklungen sollen unbedingt vermieden werden, da die finanziellen Mittel begrenzt sind. 
 
 
 
BUAN_Fallstudie_A.docx 
05.01.2026 
4/5 
3 
Gratulation, sie haben den Job! 
Auf dem Flur im Büro hat man es bereits unter vorgehaltener Hand gesagt: Die Geschäftsleitung betraut sie 
mit der wichtigen strategischen Aufgabe, die Erhebungen für die Business Analyse durchzuführen. 
Entsprechend sind sie nicht überrascht, als sie ihre Vorgesetzte ins Büro bittet und ihnen den Auftrag 
unterbreitet: 
«Sie kenne ja die Lage, in welcher sich unser Unternehmen befindet. Von den Resultaten dieses Projekts 
hängt die Zukunft unseres Unternehmens ab. Wir brauchen schnellstmöglich Resultate! Legen sie gleich 
los.» 
Etwas später haben sie ihr Team für diese Aufgabe zusammengestellt. Im Austausch mit ihrem Team 
kommen sie zur Einsicht, dass die Auftragserteilung zu ungenau war und noch Fragen offen sind. 
 
T1: Formulieren sie zusammen mit ihrem Team die Fragen, welche sie noch zu klären haben, 
damit sie den Auftrag richtig ausführen können. 
 
T2: Formulieren sie zusammen mit ihrem Team mögliche Hauptziele der Erhebungen. 
 
4 
Vorgehen 
 
Die Geschäftsleitung konnte sich an den vorbereitenden Sitzungen nicht darüber einig werden, wie in der 
Business Analyse vorgegangen werden soll. 
 
Aus diesem Grund wurde ihr Team damit beauftragt, zu Handen der Geschäftsleitung einen 
Pitch vorzubereiten. Dies soll in maximal fünf Minuten Dauer und im Rahmen einer 
Präsentation das Vorgehen der Erhebungen darstellen. 
 
4.1 
Auswahl 
 
Im Unterricht haben Sie folgende Erhebungstechniken kennengelernt: 
 
• 
Interview 
• 
Befragung 
• 
Beobachtung 
• 
Dokumentstudium 
 
T3: Beschreiben Sie für jede der vier Erhebungstechniken jeweils, wieso sie geeignet oder 
ungeeignet für das gewählte Projekt sind. Wählen Sie, welche Erhebungstechniken der vier Sie 
verwenden wollen. 
 
 
 
 
 
 
 
BUAN_Fallstudie_A.docx 
05.01.2026 
5/5 
 
4.2 
Planung Erhebung 
 
T4: Planen Sie die Durchführungen der gewählten Erhebungen. Beantworten Sie dazu jenach 
Erhebungstechnik folgende Fragen: 
 
• 
Interview 
o 
Ziel der Erhebung? 
o 
Zielgruppe? 
o 
Vorgehen / Ablauf? 
o 
Beispielhafte Interviewfragen? 
o 
Erwartete Ergebnisse? 
 
• 
Befragung 
o 
Ziel der Erhebung? 
o 
Zielgruppen? 
o 
Vorgehen / Ablauf? 
o 
Beispielhafte Fragen? 
o 
Erwartete Ergebnisse? 
 
• 
Beobachtung 
o 
Ziel der Erhebung? 
o 
Form der Beobachtung? 
o 
Vorgehen / Ablauf? 
o 
Erwartete Ergebnisse? 
 
• 
Dokumentstudium 
o 
Ziel der Erhebung? 
o 
Vorhandene Dokumente? 
o 
Vorgehen / Ablauf? 
o 
Erwartete Ergebnisse? 
 
 
4.3 
Pitch 
 
T5: Präsentieren Sie Ihre Ergebnisse in der Gruppe in einem Pitch von maximal 5 Minuten` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/BUAN_Fallstudie_C.pdf`, body: `Fallstudie C 
 
Anforderungsmanagement 
AIBS BUAN 
 
 
 
BUAN_Fallstudie_C.docx 
21.01.2026 
2/8 
 
1 
Einleitung 
 
Diese Fallstudie im Business Analyse dient zur Vertiefung und Anwendung des im 
Unterricht gelernten Anforderungsmanagements 
2 
Ausgangslage: 
Sie arbeiten als Business Analyst bei der Netflix. Dort herrscht ein Problem und zwar, dass die mobile App 
nicht gut ankommt. 
Um Anforderungen zu erheben, stehen Ihnen folgende Dokumente zur Verfügung: 
• 
Ein Auszug der Google PlayStore Bewertungen (durch die IT zur Verfügung gestellt)(auf Teams 
abgelegt): netflix_reviews.xlsx 
• 
Die Transkripte von diversen internen Interviews (im Folgenden) 
• 
Die Auswertungen von diversen Fragebögen (im Folgenden) 
 
 
 
BUAN_Fallstudie_C.docx 
21.01.2026 
3/8 
 
2.1 
Interviews: 
Internes Interview-Transkript 1: Mit dem Product Manager (Fokus auf Business- und Stakeholder-Ebene) 
 
Interviewer: Hallo, Herr Müller, Sie sind Product Manager für die Netflix Mobile App. Vielen Dank, dass Sie 
sich Zeit nehmen. Wir sammeln interne Anforderungen für die nächste App-Iteration. Können Sie uns etwas 
zu den strategischen Zielen erzählen? 
 
Herr Müller (Product Manager): Gerne. Aus Business-Sicht ist unser Hauptziel, die Retention-Rate zu 
steigern. Wir wollen, dass Nutzer länger bei Netflix bleiben, indem wir personalisierte Empfehlungen 
verbessern. Zum Beispiel sollten wir eine Funktion integrieren, die basierend auf internen Nutzungsdaten 
(nicht nur Watch-History, sondern auch Abbruchraten) Inhalte priorisiert. Das geht über die App-Reviews 
hinaus – Nutzer erwähnen das selten, aber unsere Analytics zeigen, dass 20% der Abos wegen mangelnder 
Personalisierung gekündigt werden. 
 
Interviewer: Welche spezifischen Stakeholder-Anforderungen sehen Sie da? 
 
Herr Müller: Die Marketing-Abteilung fordert eine Integration mit Partnern wie Social-Media-Plattformen, 
um Cross-Promotions zu ermöglichen. Zum Beispiel: Wenn ein Nutzer einen Trailer teilt, sollte die App 
automatisch eine Promo-Code-Generierung anbieten. Intern haben wir auch Compliance-Anforderungen: Die 
App muss EU-Datenschutzrichtlinien (GDPR) strikt einhalten, inklusive automatisierter Löschfunktionen für 
Nutzerdaten nach Kündigung. Das ist nichts, was in App-Store-Reviews auftaucht, aber essenziell für unser 
Business. 
 
Interviewer: Gibt es noch technische Aspekte? 
 
Herr Müller: Ja, wir brauchen eine bessere Offline-Modus-Integration, die mit unserem Content-Delivery-
Netzwerk (CDN) synchronisiert. Das reduziert Server-Last und verbessert die globale Verfügbarkeit – ein 
internes Ziel, um Kosten zu senken. 
 
Interviewer: Vielen Dank für die Einblicke! 
 
Internes Interview-Transkript 2: Mit der UX-Designerin (Fokus auf Stakeholder- und System-Ebene) 
 
Interviewer: Guten Tag, Frau Schmidt, als UX-Designerin für die Netflix App, was sind Ihre internen 
Beobachtungen zu Nutzerbedürfnissen, die über externe Reviews hinausgehen? 
 
Frau Schmidt (UX-Designerin): Hallo! Intern haben wir festgestellt, dass die App für Enterprise-Nutzer (z.B. 
Firmen-Abos) nicht optimal ist. Stakeholder aus dem B2B-Bereich fordern eine Multi-User-Profile-Funktion 
mit Admin-Rechten, wo ein Account-Manager Profile für Mitarbeiter verwalten kann. Das deckt Themen wie 
Content-Restriktionen ab, z.B. altersgerechte Filter für Firmengeräte – das kommt in App-Store-Reviews 
nicht vor, weil das hauptsächlich Consumer-Nutzer sind. 
 
Interviewer: Wie wirkt sich das auf die App-Design aus? 
 
Frau Schmidt: Wir brauchen eine intuitive Oberfläche für schnelle Profil-Switches, mit biometrischer 
Authentifizierung (Face ID/Touch ID), die nahtlos mit unseren internen Sicherheitsprotokollen integriert ist. 
Außerdem: Barrierefreiheit ist ein internes Mandat – die App sollte VoiceOver-Support für Sehbehinderte 
 
BUAN_Fallstudie_C.docx 
21.01.2026 
4/8 
erweitern, inklusive automatisierter Untertitel-Generierung für alle Sprachen. Das basiert auf unseren 
Accessibility-Standards, nicht auf User-Feedback. 
 
Interviewer: Gibt es noch funktionale Anforderungen? 
 
Frau Schmidt: Ja, eine Integration mit Wearables wie Smartwatches für Benachrichtigungen über neue 
Episoden, synchronisiert mit dem internen Push-Service. Das verbessert die User-Engagement, aber 
erfordert System-Anforderungen an die API-Schnittstellen. 
 
Interviewer: Super, das hilft uns weiter. Danke! 
 
Internes Interview-Transkript 3: Mit dem Tech Lead (Fokus auf System- und Solution-Ebene) 
 
Interviewer: Hallo, Herr Nowak, als Tech Lead für die Backend-Integration der Netflix App, welche 
internen Anforderungen sehen Sie? 
 
Herr Nowak (Tech Lead): Servus! Aus technischer Sicht müssen wir die App mit unserem neuen 
Microservices-Architektur upgraden. Das bedeutet: Anforderungen an eine robuste API für Echtzeit-
Streaming, die Latenz unter 500ms hält, unabhängig von Netzwerkbedingungen. Interne Tests zeigen, dass 
aktuelle Reviews Buffering-Probleme melden, aber wir wissen intern, dass das an veralteten Codecs liegt – 
wir brauchen H.266-Support. 
 
Interviewer: Welche Stakeholder-Aspekte spielen da rein? 
 
Herr Nowak: Die Content-Team fordert eine automatisierte Metadaten-Sync, wo die App intern mit unserer 
DRM-System (Digital Rights Management) kommuniziert, um Lizenzabläufe zu prüfen. Das ist entscheidend 
für globale Rollouts und verhindert Piraterie – nichts, was Nutzer in Reviews thematisieren. 
 
Interviewer: Und auf System-Ebene? 
 
Herr Nowak: Wir benötigen eine Fehler-Logging-Funktion, die anonymisierte Crash-Reports an unser 
internes Monitoring-Tool sendet, inklusive Device-Spezifika. Zusätzlich: Eine A/B-Testing-Integration, wo die 
App dynamisch Features toggelt basierend auf User-Segmenten aus unserer Data-Warehouse. Das erfordert 
sichere Token-Authentifizierung und ist rein intern getrieben. 
 
Interviewer: Gibt es noch etwas zu Performance? 
 
Herr Nowak: Ja, Batterie-Optimierung: Die App sollte im Hintergrund-Modus Energie sparen, indem sie nur 
bei aktiven Sessions streamt – ein internes Ziel, um App-Store-Ratings indirekt zu boosten. 
 
Interviewer: Vielen Dank für die technischen Details! 
 
 
 
BUAN_Fallstudie_C.docx 
21.01.2026 
5/8 
 
2.2 
Fragebogen: 
 
Netflix-App Verbesserungs-Umfrage (Januar 2026) – Anonyme Antworten 
 
Teilnehmer-Rollen (fiktiv, aber realistisch): 
1. Senior Data Analyst (Content-Insights-Team)   
2. Customer Support Lead (EU-Region)   
3. Marketing Specialist (Retention-Kampagnen)   
4. QA Engineer (Mobile Testing)   
5. Content Licensing Manager   
 
Frage 1: Auf einer Skala von 1–5 (1 = sehr unzufrieden, 5 = sehr zufrieden) – Wie zufrieden bist du 
insgesamt mit der aktuellen Netflix-App-Nutzung als Mitarbeiter/in?   
1. 3   
2. 2   
3. 4   
4. 3   
5. 4   
 
Frage 2: Welche 3 Dinge nerven dich oder deine Kollegen / Teams am meisten an der aktuellen App? (offen)   
1. Die Empfehlungen werden immer noch zu sehr von globalen Trends dominiert – regionale / Nischen-
Inhalte verschwinden schnell.   
2. Viele Kunden beschweren sich über fehlende schnelle Suche nach Schauspielern / Regisseuren – muss 
man erst in die Details gehen.   
3. Die In-App-Werbung für kommende Titel ist zu aggressiv und unterbricht den Flow (besonders bei 
Autoplay).   
4. Crashs auf älteren Android-Geräten (Android 11/12) bei schnellem Vor-/Zurückspulen – reproduzierbar in 
30% der Testläufe.   
5. Die Download-Queue ist chaotisch: Keine intelligente Priorisierung oder Pausen-Funktion bei niedrigem 
Akku.   
 
Frage 3: Welche neuen oder verbesserten Funktionen wären für dich / dein Team ein echter Game-Changer? 
(offen, priorisiere mit Must / Should / Could)   
1. Must-have: Smarte Filter für Empfehlungen (z. B. „Nur Inhalte mit <90 min Laufzeit“, „Nur mit ≥95% 
Rotten Tomatoes“, „Nur deutsche Synchronisation“) – hilft bei internen Tests enorm.   
2. Should-have: Schnelle Actor/Director-Suche direkt in der Suchleiste + Vorschau-Clips (ähnlich IMDb).   
3. Could-have: „Family Mode“ mit zentraler Kindersicherung + separatem PIN für Erwachsenen-Profile.   
4. Must-have: Automatische Qualitätsanpassung + explizite „Low-Data-Modus“-Schalter (spart 
Datenvolumen bei Reisen).   
5. Should-have: Bessere Metadaten-Sync: App zeigt sofort, wenn ein Titel wegen Lizenzablauf verschwindet 
(verhindert Support-Tickets).   
 
Frage 4: Non-Functional – Bewerte folgende Aspekte (1–5, 5 = top)   
 
 
BUAN_Fallstudie_C.docx 
21.01.2026 
6/8 
Aspekt 
1 
(Analyst) 
2 
(Support) 
3 
(Marketing) 
4 
(QA) 
5 
(Licensing) Durchschnitt 
App-Startzeit 
4 
3 
4 
2 
4 
3.4 
Batterieverbrauch 
3 
2 
3 
2 
3 
2.6 
Stabilität / Crash-Rate 
3 
3 
4 
1 
4 
3.0 
Barrierefreiheit 
(VoiceOver etc.) 
4 
4 
3 
3 
4 
3.6 
Datenschutz-
Transparenz 
5 
4 
5 
4 
5 
4.6 
 
 
Frage 5: Gibt es interne / B2B / Compliance-Anforderungen, die in App-Store-Reviews fast nie auftauchen, 
aber wichtig sind? (offen)   
1. Automatische Anonymisierung von Viewing-Data für EU-Analytics (DSGVO-konform) – wir brauchen 
togglebare „Privacy Mode“ für interne Tests.   
2. Schnelle Account-Recovery nach Phishing-Versuchen – aktuell dauert die interne Freigabe zu lange.   
3. Integrierte Promo-Code-Generierung für Influencer-Kampagnen (Marketing braucht das direkt in der 
App).   
4. Erweiterte Logging für QA: App soll detaillierte (anonyme) Playback-Logs an Sentry senden, inkl. Codec-
Info und Buffer-Events.   
5. Automatische Benachrichtigung, wenn ein lizenzierter Titel in einem Land gesperrt wird – muss intern 
getriggert werden können.   
 
Frage 6: Wenn du nur eine Verbesserung in den nächsten 6 Monaten umsetzen könntest – welche wäre das 
und warum?   
1. Personalisierungs-Engine komplett regionalisieren – weil Retention in D/A/CH/AT dadurch um 12–18% 
steigen könnte (unsere internen Modelle zeigen das).   
2. Actor/Director-Suche verbessern – reduziert Support-Volumen um geschätzte 15%.   
3. Weniger intrusive Pre-Roll-Teaser – steigert NPS um mind. 8 Punkte (A/B-Tests laufen schon).   
4. Stabilität auf Android <13 fixen – aktuell 40% unserer internen Crash-Reports kommen daher.   
5. Lizenz-Status in Echtzeit sichtbar machen – verhindert Frust bei Nutzern und reduziert Kündigungen nach 
„Titel weg“.   
 
 
 
BUAN_Fallstudie_C.docx 
21.01.2026 
7/8 
 
 
3 
Hintergrund: 
Sie verfügen unter anderem über folgende Requirements Engineering Kenntnisse: 
 
• 
Eine Anforderung beschreibt: 
− 
einen Bedarf 
− 
ein Ziel 
− 
eine Fähigkeit 
− 
oder eine Einschränkung 
 
 
 
• 
Business Requirements (Geschäftsanforderungen):  
− 
Warum wird das Projekt durchgeführt? 
• 
User Requirements (Benutzeranforderungen):  
− 
Was können die Nutzer mit dem Produkt machen? 
• 
Software Requirements (Lösungsanforderungen):  
− 
Was benötigen die Entwickler für die Entwicklung? 
Beispiele 
• 
Betriebsanforderungen: 
− 
„Reduktion der Durchlaufzeit um 20 %“ 
• 
Benutzeranforderungen: 
− 
„Sachbearbeitende müssen Anträge in <5 Minuten erfassen können“ 
 
BUAN_Fallstudie_C.docx 
21.01.2026 
8/8 
• 
Lösungsanforderungen: 
− 
Funktional 
• 
Was soll das System tun? 
− 
Nichtfunktional 
− 
Qualität der Lösung: 
• 
Performance 
• 
Sicherheit 
• 
Usability 
• 
Verfügbarkeit 
 
 
4 
Aufgabenstellung 
 
T1: Requirements Erhebung 
 
• 
Copy-Pasten Sie Stellen Welche Ihnen zur Anforderungserhebung relevant scheinen und fügen Sie 
diese in ihr Miro ein. Notieren Sie auch die Quelle der Information. 
 
• 
Geben Sie den Stellen einen Titel 
 
• 
Ordnen Sie die Stellen nach Anforderungsebene` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Chatverlauf_Genspark_Challenge_BUAN.docx`, body: `Ich kann dir die Komplettlösung (Word-Struktur + fertige PPT-Gliederung + Textbausteine) erstellen. Bevor ich starte, kurz 3 Punkte: 1) Wie viele Personen seid ihr effektiv (nur Thomas Ballinari & Hüseyin Özdemir oder noch weitere)? 2) Ist die Abgabe für Klasse OL (Termine 14./20./21. März 2026) korrekt für euch? 3) Für BUAN3: Kannst du mir die ZIP nochmal bestätigen/neu hochladen oder sagen, was darin ist (bei mir kam beim Lesen „Content not  found “ zurück). BUAN3_v2.pdf 2.07 MB 1. Nur wir zwei, nur Thomas Ballinari & Hüseyin Özdemir. 2. 17.03.2026 3. BUAN3  hab  ich dir im Anhang hochgeladen. Werkzeug verwenden | Großes Dokument zusammenfassen Extrahiere alle Aufgaben/Anforderungen aus  BUAN Unit  3 (Ist-Soll Vergleich & Strategiedefinition) für das Praxisprojekt. Welche Artefakte müssen ins Business-Case Dokument (Kapitel/Unterkapitel)? Welche Methoden/Modelle werden erwartet? Liefere eine präzise Checkliste. Ansicht Werkzeug verwenden | Bilder verstehen https://www.genspark.ai/api/files/s/jIMAWMbr Ansicht Murmeltier: Was genau ist die BUAN-Praxisprojekt Challenge – und wie passt SmartGastro.ai dazu? Ihr müsst ein  unterrichtsbegleitendes Gruppenprojekt  (ihr seid zu zweit) als  Business Case Dokument (Word)  +  PowerPoint Präsentation  erstellen. Das  Word-Dokument ist  testatpflichtig  (muss abgegeben werden), die  Note entsteht aus der Präsentation  nach Bewertungsraster.  Source   Source 1) Harte Anforderungen ( Deliverables , Timing, Rahmen) Ihr müsst abgeben: Ein  Business Case Dokument  (Word/PDF), das die  Resultate/Notizen/Artefakte der Units (mind. 1–3, i.d.R. 1–6)  enthält. Es soll ausdrücklich  Inhalte/Artefakte  zeigen (Texte, Skizzen, Grafiken etc.).  Form/Schönheit ist nicht primär , Inhalt zählt.  Source Eine  PowerPoint  für die Abschluss Präsentation:  15 Minuten Präsentation + 5 Minuten Q&A .  Source Wichtig fürs Scoring: Zeitfenster ist knallhart:  15 Min ±2 Min  (13–17 ok), sonst  Punktabzug pro Minute .  Source Verspätete Abgabe:  -1 Punkt pro angefangene Minute  verspätet.  Source Zu euren Daten: Du sagst  Abgabe 17.03.2026  (statt 14.03. aus Raster). Ich richte die Lösung  auf  euer Datum  aus – aber plant intern so, dass ihr spätestens 1–2 Tage früher fertig seid, weil eine Minute zu spät brutal bestraft wird.  Source 2) Unit 1 Anforderungen → direkt auf SmartGastro.ai gemappt Was Unit 1 verlangt (muss ins Business Case Dokument) Ihr wählt ein Projekt/Firma (real oder fiktiv) und dokumentiert in: Kapitel 1:  Projekt-/Firmenbeschreibung Wahl begründen, Rahmendaten (Größe, Mitarbeitende), Organisationsform (agil/traditionell), aktuelle Aktivitäten.  Source Kapitel 2.1:  Stakeholder & Verantwortlichkeiten Stakeholderliste Stakeholder Map Personas Empathy   Map RACI Matrix   Source Wie SmartGastro.ai das perfekt erfüllt (Vorschlag) Für  Kapitel 1  nehmt ihr SmartGastro.ai als SaaS Startup: KI basierte Nachfrageprognose für Gastronomie zur  Reduktion Food  Waste , Stress und Fehlplanung. Das passt genau zur bestehenden Storyline eurer PPT („Küchenchaos → KI Perfektion“).  Source Für  Kapitel 2.1  könnt ihr Stakeholder sehr sauber aus eurem technischen Dokument ableiten: Primär: Restaurantbesitzer, Manager, Küchenchef Sekundär: POS Anbieter ( Waiterone  etc.), Datenprovider (Wetter/Event) Tertiär: Gäste, Mitarbeitende, Umwelt/ESG  Source 3) Unit 2 Anforderungen → Erhebung „Ist & Soll“ (Instrumente + Outputs) Was Unit 2 verlangt Ihr müsst  genau 2 Erhebungsmethoden  auswählen (von 4): Interview, Befragung, Beobachtung, Dokumentstudium. Dann: begründen, warum diese 2 Methoden am besten passen planen & durchführen Vorgehen/Struktur  dokumentieren (z.B. Interviewleitfaden / Fragebogen) Ergebnisse dokumentieren (Notizen, beantwortete Fragen, Graphen etc.) Personas verbessern  anhand der Erkenntnisse falls Dokumentstudium: Dokumentenliste  Source Best Fit für SmartGastro.ai (empfohlen) Ich empfehle für Best Grade, weil es sauber belegbar ist: Methode 1:  Interview  (Küchenchef oder Restaurantleiter) Ziel: echte Pain Points (Mise en Place, Verderb, spontane Peaks), Entscheidungslogik heute, Akzeptanz KI. Methode 2:  Dokumentstudium Inputs: POS Reports (Beispiel), Food Waste Reports, Dienstplanlogik, eure vorhandenen Projektunterlagen ( Waiterone Integration,  SmartGastro PPT). Vorteil: Ihr habt starke „Artefakte“ fürs Word Dokument (Dokumentenliste +  Findings ).  Source 4) Unit 3 Anforderungen → Ist Analyse + Ist Soll Vergleich + erwartete Resultate Was Unit 3 verlangt (Pflicht) Ihr wählt: 1 Ist Zustands Methode (1 von 4): SWOT / Prozessanalyse / Finanzanalyse / Ursachenanalyse und 1 Vergleichsmethode (1 von 4): Gap Analyse / Kano Analyse / Benchmarking / Risikoanalyse Dann müsst ihr dokumentieren: warum diese Methoden passen wie ihr sie umsetzt (Plan) welche Resultate ihr erwartet und warum  Source Best Fit für SmartGastro.ai (empfohlen) Ist Analyse:  Prozessanalyse (SIPOC oder einfacher  Prozessflow ) Zeigt „heute“: Planung basiert auf Bauchgefühl → Über/Unterproduktion → Stress/ Waste . Ist Soll Vergleich:  Kano Analyse  (passt perfekt zu  SmartGastro  Feature Priorisierung und ist im Kurs explizit erlaubt).  Source Dazu habt ihr sogar schon die Kano Grafik im Material. Die Kategorien sind: Attractive , Performance,  Must be ,  Indifferent , Reverse; Achsen: Feature Ausprägung vs. Kundenzufriedenheit.  Source 5) Bewertungsraster: Wie ihr „Bestnote“ systematisch erzwingt Bewertet werden  nur Präsentation  (50 Punkte total): Inhalt, Struktur, Rhetorik, Visualisierung/Kreativität, Zeitmanagement (je 10 Punkte).  Source Konsequenz: Euer Word Dokument ist Testat (Pflicht), aber die  Präsentation muss : jede Unit Aufgabe  klar  beantworten (keine Nebensachen) einen harten roten Faden haben visuell sauber, nicht überladen, mit klaren Diagrammen/Tabellen exakt getaktet sein (13–17)  Source Komplettlösung ( Blueprint ) – Word Business Case + PPT, exakt auf Units 1–3 gemappt A) Word-Dokument: empfohlene Struktur (direkt abgabefähig als Inhaltsverzeichnis) Deckblatt Titel: „BUAN Challenge – Business Case SmartGastro.ai“ Klasse, Dozent, Datum Gruppe: Thomas Ballinari & Hüseyin Özdemir Kapitel 1 – Projekt-/Firmenbeschreibung (Unit 1) 1.1 Ausgangslage & Problem (Food  Waste , Stress,  Forecasting -Lücke) – basierend auf eurer PPT-Story  Source 1.2 Lösung SmartGastro.ai (KI ersetzt „Glaskugel“) – Nutzenversprechen  Source 1.3 Zielkunden & Marktannahmen (CH Gastronomie, SaaS) 1.4 Kontext/Organisation (Startup Setup, agil; Rollen im Team) Kapitel 2 – Gruppenarbeiten / Artefakte (Units) 2.1 Stakeholder & Verantwortlichkeiten (Unit 1) Stakeholderliste  (Tabelle)  Source Stakeholder Map  (Power/Interest) Personas (mind. 2: Küchenchef, Restaurantmanager) Empathy   Map  (für Küchenchef) RACI Matrix  (für Pilot/PoC/Integration) 2.2 Erhebung Ist & Soll (Unit 2)  Source Methodenauswahl (Interview + Dokumentstudium) + Begründung Interviewleitfaden (10–12 Fragen, mix offen/Skala) Dokumentenliste (z.B. POS Reports, Abfalllog, eure Unterlagen) Ergebnisse (zusammengefasst + Zitate/ Insights ) Persona Update (vorher/nachher sichtbar machen) 2.3 Ist Analyse & Ist Soll Vergleich (Unit 3)  Source Ist Prozessanalyse (z.B. Prozessdiagramm „heute“) Soll Prozess (mit  SmartGastro ) Kano Analyse (Feature Kategorien + Konsequenz fürs MVP)  Source Erwartete Resultate: weniger  Waste , weniger Stress, bessere Planbarkeit (mit Messgrössen) Anhang Screenshots/Artefakte (Stakeholder Map ,  Empathy   Map , Prozessdiagramme, Kano Tabelle) Quellen/Tools (inkl. KI Nutzung transparent) B) PPT: Folien-Set (15 Minuten, 2 Sprecher) – auf Bewertungsraster optimiert Ich übernehme eure vorhandene Story und mache sie BUAN konform: Hook: „Risotto Problem“ (habt ihr schon)  Source Problem quantifiziert (Food Waste / Stress)  Source Zielbild: „Was muss besser werden?“ (Soll Zustand in 3  bullets ) Stakeholder Map  (1 klare Grafik) Personas (2 Karten: Küchenchef, Manager) Empathy   Map  (Küchenchef) RACI (Pilotphase, Integration, Betrieb) Erhebung: warum Interview + Dokumentstudium (1 Slide)  Source Erhebung: Top Insights (3–5 Findings, 1 Graph) Prozess heute vs. Prozess mit  SmartGastro  (2 Spalten) Kano Analyse: Feature Priorisierung (Must Be/Performance/Attractive)  Source Lösung/Architektur high level (POS → DB → ML → Dashboard)  Source Business Value/ROI Logik (Waste Reduktion, CHF Effekt)  Source Risiken & Mitigations (Data Quality, Black Swan, Adoption)  Source Roadmap (Pilot Q1 2026 etc.)  Source Abschluss: „Warum wir gewinnen“ + Q&A Backup Das ist exakt „Inhalt + Struktur“ fürs Raster, und ihr habt genug Visuals ohne  Overload .  Source 6) Konkrete  SmartGastro Feature Kano (fertige Einordnung, die ihr übernehmen könnt) Auf Basis eurer Lösung & Integration: Must Be (Basisfaktoren) POS Datenimport & saubere Tages-/Produktreports (ohne das kein Vertrauen)  Source Forecast pro Tag/Produkt + einfache Exportliste für Mise en Place Performance (je mehr, desto besser) Prognosegenauigkeit, Granularität (Produkte, Zeitfenster), frühe Warnungen Explainability : „Warum heute mehr/ weniger?“  Source Attractive  ( Begeisterer ) Event/Wetter Effekt automatisch erklärt Menü Empfehlungen (Top Gerichte) inkl. Begründung („sonnig, Wochenende, Saison“)  Source Indifferent / Reverse (kritisch prüfen) Zu viele Push Alerts (Reverse: nervt, senkt Zufriedenheit) Over Automation ohne  Override  (Reverse, weil Chef Kontrolle will)  Source Nächster Schritt (damit ich wirklich „Komplettlösung“ liefere, nicht nur  Blueprint ) Sag mir bitte noch 2 Dinge, dann schreibe ich euch die Inhalte  fixfertig  (Text + Tabelleninhalte + Interviewleitfaden + Kano Tabelle + Prozessbeschreibung) und liefere euch eine  finale PPT Gliederung mit Sprechertext (Minute- by -Minute) : Welche Abgabe gilt bei euch genau:  Word am 17.03.2026  und PPT wann? Wollt ihr als 2 Erhebungsmethoden wirklich  Interview + Dokumentstudium  (empfohlen), oder lieber Interview + Befragung? Wenn du bestätigst, erstelle ich euch danach die komplette Word Kapiteltexte und die PPT Sprechtexte so, dass sie 15 Minuten sauber treffen und das Raster maximal bedienen. Tiefenrecherche 1. Business Case Dokument Testat Abagbe bis  spätenstens  14.03.2026 23.59 h, Abgabe  Powerpoint  bis 20.03.2026 23.59 h, Präsentation Unit 7 am 21.03.2026. Unterricht für Unit 4 am 21.01.2026, Unit 5 am 28.01.2026, Unit 6 am 07.02.2026. Werde  BUAN 4-6 regelmässig hochladen. Behalte und speichere diesen Chat als Projekt BUAN damit wir ihn nach jeder Unit ergänzen können. 2. Interview und Dokumentstudium. Projektstatus  BUAN  (für Murmeltier) – Setup bestätigt Ich habe eure Rahmenbedingungen übernommen: Abgabe Business Case Dokument (Testat)  bis 14.03.2026, 23:59 .  Source Abgabe PowerPoint  bis 20.03.2026, 23:59 .  Source Präsentation  Unit 7 am 21.03.2026 :  15 Min + 5 Min Q&A .  Source Methodenwahl Unit 2:  Interview + Dokumentstudium .  Source Wichtig: Das Business Case Dokument ist  testatpflichtig  (Pflichtabgabe, wird nicht inhaltlich benotet); die  Präsentationsnote  kommt aus dem Raster (Inhalt/Struktur/Rhetorik/Visualisierung/Time).  Source Kann ich den Chat als „Projekt BUAN“ speichern? Ich kann den Chat hier  als durchgängigen Projekt Thread weiterführen  (und jedes Mal bei neuen Uploads Unit 4–6 nahtlos ergänzen). Ein echtes „Speichern als Projekt“ in einem externen System/Notion kann ich  nur  machen, wenn du mir sagst,  wo  (z.B. Notion Workspace) – sonst bleibt es zuverlässig in diesem Chat-Verlauf als Projekt  BUAN  organisiert. Wenn du Notion nutzt: Sag kurz „Ja, in Notion speichern“ und ich lege eine Projektseite „BUAN – SmartGastro.ai“ an. Projekt  BUAN – SmartGastro.ai : Master-Plan (Unit 1–3 fertig, Unit 4–6 anschlussfähig) 1) Anforderungen Unit 1 (Pflicht-Artefakte) → SmartGastro.ai Mapping Ihr müsst ins Business Case Dokument schreiben: Kapitel 1 Projektbeschreibung + Kapitel 2.1 Stakeholder Artefakte ( Stakeholderliste /- map , Personas,  Empathy   Map , RACI).  Source SmartGastro.ai  liefert dafür starke Inhalte: Stakeholder & Integrationskontext aus eurer  Waiterone Integration (Restaurants, Küchenchef, POS Anbieter, Datenquellen, etc.).  Source 2) Anforderungen Unit 2 (Pflicht): 2 Erhebungsmethoden, durchführen, dokumentieren, Personas verbessern Pflicht:  2 Methoden auswählen , begründen, planen & durchführen, Vorgehen/Struktur dokumentieren, Ergebnisse festhalten, Personas aktualisieren; bei Dokumentstudium: Dokumentenliste.  Source Ihr habt gewählt:  Interview + Dokumentstudium  (perfekt für „Bestnote“, weil sehr businessnah und belegbar). 3) Anforderungen Unit 3 (Pflicht): 1 Ist-Analyse + 1 Ist-Soll-Vergleichsmethode, inkl. Planung & erwarteten Resultaten Pflicht: Ist Analyse (1 von 4) + Vergleichsmethode (1 von 4), jeweils begründen, Umsetzung planen, erwartete Resultate erklären.  Source Empfohlen für  SmartGastro : Ist Analyse: Prozessanalyse Ist Soll Vergleich:  Kano Analyse  (ihr habt sogar die passende Visualisierung als Referenz).  Source Visuelle Referenz (für euer Dokument & PPT): Kano-Modell Die Grafik zeigt: x Achse „Feature fehlt → Feature in hoher Ausprägung“, y Achse „Kundenzufriedenheit niedrig → hoch“; Kategorien  Attractive /Performance/Indifferent/ Must be /Reverse.  Source Das ist ideal, um  SmartGastro Features sauber zu priorisieren (MVP vs. Nice to have  vs. vermeiden). Ab jetzt: „Komplettlösung“ als lieferbares Paket (Unit 1–3) Unten bekommst du jetzt ein  abgabefähiges Grundgerüst  (Word-Struktur + Inhalte + Tabellen),  das  ihr 1:1  in euer Business Case Dokument kopieren könnt. Es ist so gebaut, dass Unit 4–6 später ohne Umbau ergänzt werden kann. A) Business Case Dokument (Word) – fertige Struktur + Textbausteine (Unit 1–3) Titelblatt BUAN Challenge – Business Case Dokument Projekt: SmartGastro.ai – KI basierte Nachfrageprognose für Schweizer Gastronomie Gruppe: Thomas Ballinari & Hüseyin Özdemir Klasse/Dozent/Datum Kapitel 1 – Projekt-/Firmenbeschreibung (Unit 1) 1.1 Kurzbeschreibung SmartGastro.ai ist ein SaaS Produkt zur KI basierten Prognose von Gästeaufkommen und Produktverkäufen (z.B. pro Tag/` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Praxisprojekt_Buan_Hüseyin_Thomas.docx`, body: `Ich habe mal angefangen an unsere Challenge bei Joel Baumann. Folgend wie weit ich gekommen bin: Was genau ist die BUAN-Praxisprojekt Challenge – und wie passt SmartGastro.ai dazu? Ihr müsst ein  unterrichtsbegleitendes Gruppenprojekt  (ihr seid zu zweit) als  Business Case Dokument (Word)  +  PowerPoint Präsentation  erstellen. Das  Word-Dokument ist  testatpflichtig  (muss abgegeben werden), die  Note entsteht aus der Präsentation  nach Bewertungsraster.  Source   Source 1) Harte Anforderungen ( Deliverables , Timing, Rahmen) Ihr müsst abgeben: Ein  Business Case Dokument  (Word/PDF), das die  Resultate/Notizen/Artefakte der Units (mind. 1–3, i.d.R. 1–6)  enthält. Es soll ausdrücklich  Inhalte/Artefakte  zeigen (Texte, Skizzen, Grafiken etc.).  Form/Schönheit ist nicht primär , Inhalt zählt.  Source Eine  PowerPoint  für die Abschluss Präsentation:  15 Minuten Präsentation + 5 Minuten Q&A .  Source Wichtig fürs Scoring: Zeitfenster ist knallhart:  15 Min ±2 Min  (13–17 ok), sonst  Punktabzug pro Minute .  Source Verspätete Abgabe:  -1 Punkt pro angefangene Minute  verspätet.  Source Zu euren Daten: Du sagst  Abgabe 17.03.2026  (statt 14.03. aus Raster). Ich richte die Lösung  auf  euer Datum  aus – aber plant intern so, dass ihr spätestens 1–2 Tage früher fertig seid, weil eine Minute zu spät brutal bestraft wird.  Source 2) Unit 1 Anforderungen → direkt auf SmartGastro.ai gemappt Was Unit 1 verlangt (muss ins Business Case Dokument) Ihr wählt ein Projekt/Firma (real oder fiktiv) und dokumentiert in: Kapitel 1:  Projekt-/Firmenbeschreibung Wahl begründen, Rahmendaten (Größe, Mitarbeitende), Organisationsform (agil/traditionell), aktuelle Aktivitäten.  Source Kapitel 2.1:  Stakeholder & Verantwortlichkeiten Stakeholderliste Stakeholder Map Personas Empathy   Map RACI Matrix   Source Wie SmartGastro.ai das perfekt erfüllt (Vorschlag) Für  Kapitel 1  nehmt ihr SmartGastro.ai als SaaS Startup: KI basierte Nachfrageprognose für Gastronomie zur  Reduktion Food  Waste , Stress und Fehlplanung. Das passt genau zur bestehenden Storyline eurer PPT („Küchenchaos → KI Perfektion“).  Source Für  Kapitel 2.1  könnt ihr Stakeholder sehr sauber aus eurem technischen Dokument ableiten: Primär: Restaurantbesitzer, Manager, Küchenchef Sekundär: POS Anbieter ( Waiterone  etc.), Datenprovider (Wetter/Event) Tertiär: Gäste, Mitarbeitende, Umwelt/ESG  Source 3) Unit 2 Anforderungen → Erhebung „Ist & Soll“ (Instrumente + Outputs) Was Unit 2 verlangt Ihr müsst  genau 2 Erhebungsmethoden  auswählen (von 4): Interview, Befragung, Beobachtung, Dokumentstudium. Dann: begründen, warum diese 2 Methoden am besten passen planen & durchführen Vorgehen/Struktur  dokumentieren (z.B. Interviewleitfaden / Fragebogen) Ergebnisse dokumentieren (Notizen, beantwortete Fragen, Graphen etc.) Personas verbessern  anhand der Erkenntnisse falls Dokumentstudium: Dokumentenliste  Source Best Fit für SmartGastro.ai (empfohlen) Ich empfehle für Best Grade, weil es sauber belegbar ist: Methode 1:  Interview  (Küchenchef oder Restaurantleiter) Ziel: echte Pain Points (Mise en Place, Verderb, spontane Peaks), Entscheidungslogik heute, Akzeptanz KI. Methode 2:  Dokumentstudium Inputs: POS Reports (Beispiel), Food Waste Reports, Dienstplanlogik, eure vorhandenen Projektunterlagen ( Waiterone Integration,  SmartGastro PPT). Vorteil: Ihr habt starke „Artefakte“ fürs Word Dokument (Dokumentenliste +  Findings ).  Source 4) Unit 3 Anforderungen → Ist Analyse + Ist Soll Vergleich + erwartete Resultate Was Unit 3 verlangt (Pflicht) Ihr wählt: 1 Ist Zustands Methode (1 von 4): SWOT / Prozessanalyse / Finanzanalyse / Ursachenanalyse und 1 Vergleichsmethode (1 von 4): Gap Analyse / Kano Analyse / Benchmarking / Risikoanalyse Dann müsst ihr dokumentieren: warum diese Methoden passen wie ihr sie umsetzt (Plan) welche Resultate ihr erwartet und warum  Source Best Fit für SmartGastro.ai (empfohlen) Ist Analyse:  Prozessanalyse (SIPOC oder einfacher  Prozessflow ) Zeigt „heute“: Planung basiert auf Bauchgefühl → Über/Unterproduktion → Stress/ Waste . Ist Soll Vergleich:  Kano Analyse  (passt perfekt zu  SmartGastro  Feature Priorisierung und ist im Kurs explizit erlaubt).  Source Dazu habt ihr sogar schon die Kano Grafik im Material. Die Kategorien sind: Attractive , Performance,  Must be ,  Indifferent , Reverse; Achsen: Feature Ausprägung vs. Kundenzufriedenheit.  Source 5) Bewertungsraster: Wie ihr „Bestnote“ systematisch erzwingt Bewertet werden  nur Präsentation  (50 Punkte total): Inhalt, Struktur, Rhetorik, Visualisierung/Kreativität, Zeitmanagement (je 10 Punkte).  Source Konsequenz: Euer Word Dokument ist Testat (Pflicht), aber die  Präsentation muss : jede Unit Aufgabe  klar  beantworten (keine Nebensachen) einen harten roten Faden haben visuell sauber, nicht überladen, mit klaren Diagrammen/Tabellen exakt getaktet sein (13–17)  Source Komplettlösung ( Blueprint ) – Word Business Case + PPT, exakt auf Units 1–3 gemappt A) Word-Dokument: empfohlene Struktur (direkt abgabefähig als Inhaltsverzeichnis) Deckblatt Titel: „BUAN Challenge – Business Case  SmartGastro.ai“ Klasse, Dozent, Datum Gruppe: Thomas Ballinari & Hüseyin Özdemir Kapitel 1 – Projekt-/Firmenbeschreibung (Unit 1) 1.1 Ausgangslage & Problem (Food  Waste , Stress,  Forecasting -Lücke) – basierend auf eurer PPT-Story  Source 1.2 Lösung SmartGastro.ai (KI ersetzt „Glaskugel“) – Nutzenversprechen  Source 1.3 Zielkunden & Marktannahmen (CH Gastronomie, SaaS) 1.4 Kontext/Organisation (Startup Setup, agil; Rollen im Team) Kapitel 2 – Gruppenarbeiten / Artefakte (Units) 2.1 Stakeholder & Verantwortlichkeiten (Unit 1) Stakeholderliste  (Tabelle)  Source Stakeholder Map  (Power/Interest) Personas (mind. 2: Küchenchef, Restaurantmanager) Empathy   Map  (für Küchenchef) RACI Matrix  (für Pilot/PoC/Integration) 2.2 Erhebung Ist & Soll (Unit 2)  Source Methodenauswahl (Interview + Dokumentstudium) + Begründung Interviewleitfaden (10–12 Fragen, mix offen/Skala) Dokumentenliste (z.B. POS Reports, Abfalllog, eure Unterlagen) Ergebnisse (zusammengefasst + Zitate/ Insights ) Persona Update (vorher/nachher sichtbar machen) 2.3 Ist Analyse & Ist Soll Vergleich (Unit 3)  Source Ist Prozessanalyse (z.B. Prozessdiagramm „heute“) Soll Prozess (mit  SmartGastro ) Kano Analyse (Feature Kategorien + Konsequenz fürs MVP)  Source Erwartete Resultate: weniger  Waste , weniger Stress, bessere Planbarkeit (mit Messgrössen) Anhang Screenshots/Artefakte (Stakeholder Map ,  Empathy   Map , Prozessdiagramme, Kano Tabelle) Quellen/Tools (inkl. KI Nutzung transparent) B) PPT: Folien-Set (15 Minuten, 2 Sprecher) – auf Bewertungsraster optimiert Ich übernehme eure vorhandene Story und mache sie BUAN konform: Hook: „Risotto Problem“ (habt ihr schon)  Source Problem  quantifiziert  (Food Waste / Stress)  Source Zielbild: „Was muss besser werden?“ (Soll Zustand in 3  bullets ) Stakeholder Map  (1 klare Grafik) Personas (2 Karten: Küchenchef, Manager) Empathy   Map  (Küchenchef) RACI (Pilotphase, Integration, Betrieb) Erhebung: warum Interview + Dokumentstudium (1 Slide)  Source Erhebung: Top Insights (3–5 Findings, 1 Graph) Prozess heute vs. Prozess mit  SmartGastro  (2 Spalten) Kano Analyse : Feature Priorisierung  (Must Be/Performance/Attractive)  Source Lösung / Architektur  high level (POS → DB → ML → Dashboard)  Source Business Value/ROI Logik (Waste Reduktion, CHF Effekt)  Source Risiken  & Mitigations (Data Quality, Black Swan, Adoption)  Source Roadmap (Pilot Q1 2026 etc.)  Source Abschluss: „Warum wir gewinnen“ + Q&A Backup Das ist exakt „Inhalt + Struktur“ fürs Raster, und ihr habt genug Visuals ohne  Overload .  Source 6) Konkrete  SmartGastro Feature Kano (fertige Einordnung, die ihr übernehmen könnt) Auf Basis eurer Lösung & Integration: Must Be (Basisfaktoren) POS Datenimport & saubere Tages-/Produktreports (ohne das kein Vertrauen)  Source Forecast pro Tag/Produkt + einfache Exportliste für Mise en Place Performance (je mehr, desto besser) Prognosegenauigkeit, Granularität (Produkte, Zeitfenster), frühe Warnungen Explainability : „Warum heute mehr/ weniger?“  Source Attractive  ( Begeisterer ) Event/Wetter Effekt automatisch erklärt Menü Empfehlungen (Top Gerichte) inkl. Begründung („sonnig, Wochenende, Saison“)  Source Indifferent / Reverse (kritisch prüfen) Zu viele Push Alerts (Reverse: nervt, senkt Zufriedenheit) Over Automation ohne  Override  (Reverse, weil Chef Kontrolle will)  Source Nächster Schritt (damit ich wirklich „Komplettlösung“ liefere, nicht nur  Blueprint ) Sag mir bitte noch 2 Dinge, dann schreibe ich euch die Inhalte  fixfertig  (Text + Tabelleninhalte + Interviewleitfaden + Kano Tabelle + Prozessbeschreibung) und liefere euch eine  finale PPT Gliederung mit Sprechertext (Minute- by -Minute) : Welche Abgabe gilt bei euch genau:  Word am 17.03.2026  und PPT wann? Wollt ihr als 2 Erhebungsmethoden wirklich  Interview + Dokumentstudium  (empfohlen), oder lieber Interview + Befragung? Wenn du bestätigst, erstelle ich euch danach die komplette Word Kapiteltexte und die PPT Sprechtexte so, dass sie 15 Minuten sauber treffen und das Raster maximal bedienen. Projektstatus  BUAN  – Setup bestätigt Ich habe eure Rahmenbedingungen übernommen: Abgabe Business Case Dokument (Testat)  bis 14.03.2026, 23:59 .  Source Abgabe PowerPoint  bis 20.03.2026, 23:59 .  Source Präsentation  Unit 7 am 21.03.2026 :  15 Min + 5 Min Q&A .  Source Methodenwahl Unit 2:  Interview + Dokumentstudium .  Source Wichtig: Das Business Case Dokument ist  testatpflichtig  (Pflichtabgabe, wird nicht inhaltlich benotet); die  Präsentationsnote  kommt aus dem Raster (Inhalt/Struktur/Rhetorik/Visualisierung/Time).  Source Kann ich den Chat als „Projekt BUAN“ speichern? Ich kann den Chat hier  als durchgängigen Projekt Thread weiterführen  (und jedes Mal bei neuen Uploads Unit 4–6 nahtlos ergänzen). Ein echtes „Speichern als Projekt“ in einem externen System/Notion kann ich  nur  machen, wenn du mir sagst,  wo  (z.B. Notion Workspace) – sonst bleibt es zuverlässig in diesem Chat-Verlauf als Projekt  BUAN  organisiert. Wenn du Notion nutzt: Sag kurz „Ja, in Notion speichern“ und ich lege eine Projektseite „BUAN – SmartGastro.ai“ an. Projekt  BUAN – SmartGastro.ai : Master-Plan (Unit 1–3 fertig, Unit 4–6 anschlussfähig) 1) Anforderungen Unit 1 (Pflicht-Artefakte) → SmartGastro.ai Mapping Ihr müsst ins Business Case Dokument schreiben: Kapitel 1 Projektbeschreibung + Kapitel 2.1 Stakeholder Artefakte ( Stakeholderliste /- map , Personas,  Empathy   Map , RACI).  Source SmartGastro.ai  liefert dafür starke Inhalte: Stakeholder & Integrationskontext aus eurer  Waiterone Integration (Restaurants, Küchenchef, POS Anbieter, Datenquellen, etc.).  Source 2) Anforderungen Unit 2 (Pflicht): 2 Erhebungsmethoden, durchführen, dokumentieren, Personas verbessern Pflicht:  2 Methoden auswählen , begründen, planen & durchführen, Vorgehen/Struktur dokumentieren, Ergebnisse festhalten, Personas aktualisieren; bei Dokumentstudium: Dokumentenliste.  Source Ihr habt gewählt:  Interview + Dokumentstudium  (perfekt für „Bestnote“, weil sehr businessnah und belegbar). 3) Anforderungen Unit 3 (Pflicht): 1 Ist-Analyse + 1 Ist-Soll-Vergleichsmethode, inkl. Planung & erwarteten Resultaten Pflicht: Ist Analyse (1 von 4) + Vergleichsmethode (1 von 4), jeweils begründen, Umsetzung planen, erwartete Resultate erklären.  Source Empfohlen für  SmartGastro : Ist Analyse: Prozessanalyse Ist Soll Vergleich:  Kano Analyse  (ihr habt sogar die passende Visualisierung als Referenz).  Source Visuelle Referenz (für euer Dokument & PPT): Kano-Modell Die Grafik zeigt: x Achse „Feature fehlt → Feature in hoher Ausprägung“, y Achse „Kundenzufriedenheit niedrig → hoch“; Kategorien  Attractive /Performance/Indifferent/ Must be /Reverse.  Source Das ist ideal, um  SmartGastro Features sauber zu priorisieren (MVP vs. Nice to have  vs. vermeiden). Ab jetzt: „Komplettlösung“ als lieferbares Paket (Unit 1–3) Unten bekommst du jetzt ein  abgabefähiges Grundgerüst  (Word-Struktur + Inhalte + Tabellen),  das  ihr 1:1  in euer Business Case Dokument kopieren könnt. Es ist so gebaut, dass Unit 4–6 später ohne Umbau ergänzt werden kann. A) Business Case Dokument (Word) – fertige Struktur + Textbausteine (Unit 1–3) Titelblatt BUAN Challenge – Business Case Dokument Projekt: SmartGastro.ai – KI basierte Nachfrageprognose für Schweizer Gastronomie Gruppe: Thomas Ballinari & Hüseyin Özdemir Klasse/Dozent/Datum Kapitel 1 – Projekt-/Firmenbeschreibung (Unit 1) 1.1 Kurzbeschreibung SmartGastro.ai ist ein SaaS Produkt zur KI basierten Prognose von Gästeaufkommen und Produktverkäufen (z.B. pro Tag/Artikel). Ziel ist es, Mise en Place und Produktion datenbasiert zu steuern, um Food  Waste  und Stress im Küchenbetrieb zu reduzieren. Die Lösung ersetzt die manuelle „Bauchgefühl Planung“ durch Vorhersagen auf Basis historischer POS Daten sowie externer Faktoren wie Wetter und Events.  Source 1.2 Problem (Ist-Sicht) Gastronomiebetriebe kämpfen mit unvorhersehbarer Nachfrage: zu wenig Vorbereitung führt zu Wartezeiten und Unzufriedenheit, zu viel Vorbereitung zu Food  Waste  und finanziellen Verlusten.  SmartGastro  positioniert sich als operative Entscheidungsunterstützung, um diese tägliche Planungsunsicherheit zu minimieren.  Source 1.3 Lösung (Soll-Sicht) SmartGastro  integriert POS Daten (z.B.  Waiterone ) und kombiniert sie mit Kontextdaten  (Wetter, Events). Ein ML Modell prognostiziert Nachfrage; Ergebnisse werden über Dashboard/Exports in die Küchenplanung übersetzt.  Source 1.4 Zielgruppe Primär: Restaurants, Cafés, Eventgastronomie (Owner/Manager/Küchenchef). Sekundär: POS Anbieter als Integrationspartner.  Source Kapitel 2 – Gruppenarbeiten / Artefakte 2.1 Stakeholder-Analyse (Unit 1) 2.1.1  Stakeholderliste  (Tabelle – Vorlage) Stakeholder Typ Ziel/Interesse Einfluss Bedarf/Erfolgskriterium Restaurantbesitzer primär Profitabilität, weniger  Waste hoch Einsparungen, ROI, einfache Nutzung Restaurantmanager primär Planungssicherheit mittel/h` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Produktdatenblatt_ Bluetooth, GPS & Diebstahlschutz hinzufügen.pdf`, body: `HÜSEYIN & THOMAS
IPSO Premium Smart-Regenschirm
Modell: Smart Edition 2026 | Carbon Series
Produktbeschreibung
Der IPSO Premium Smart-Regenschirm von Hüseyin & Thomas definiert Regenschutz neu. Durch die
Symbiose aus traditioneller Handwerkskunst und modernster IoT-Technologie bietet dieses Modell nicht
nur Schutz vor Witterung, sondern integriert sich nahtlos in den digitalen Alltag. Mit einem ultra-
kompakten Packmaß von nur 20 cm entfaltet er sich auf beeindruckende 120 cm Spannweite und bietet
dank seines Carbon-Gerippes maximale Stabilität bei minimalem Gewicht. Die integrierten Smart-
Features machen den Verlust Ihres Regenschirms praktisch unmöglich und informieren Sie proaktiv
über Wetteränderungen.
Technische Spezifikationen
Modell
IPSO-Carbon-120 Smart Edition
Artikelnummer
HT-IPSO-SMART-2026-001
Spannweite
120 cm (Durchmesser geöffnet)
Packmaß
20 cm (ultra-kompakt zusammengefaltet)
Gewicht
ca. 380 g (inklusive Smart-Modul)
Gerippe
Hochleistungs-Carbon-Faser mit 8 verstärkten Streben
Griff
Ergonomischer Soft-Touch-Griff mit integrierter Elektronik & Sensorik
Stoffbezug
Premium-Polyester, wasserabweisend, individueller IPSO-Druck
Wassersäule
3000 mm
UV-Schutz
UPF 50+
Windbeständigkeit
Getestet bis 80 km/h (Windkanal)
Öffnungsmechanismus
Vollautomatik per Knopfdruck (Auf/Zu)
Smart-Features & Technologie
Weitere Features & Highlights
Maximale Portabilität: Teleskopierbarer Schaft ermöglicht Reduktion von 120 cm Spannweite auf
20 cm Packmaß.
Carbon-Leichtbauweise: Kombination aus extremer Stabilität und Leichtigkeit für ermüdungsfreies
Tragen.
Design: Individuelle "IPSO" Bedruckung auf dem Schirmdach für hohe Wiedererkennung.
Komfort-Bedienung: Touch-Sensor im Soft-Touch-Griff für intuitive Steuerung.
Bluetooth 5.2 Konnektivität: Nahtlose und energiesparende Verbindung mit der "IPSO
Connect" App (iOS & Android).
●
GPS-Tracking & Suchfunktion: Integriertes GPS-Modul ermöglicht die präzise
Standortbestimmung in Echtzeit weltweit.
●
Find My Umbrella: Löst über die App ein akustisches Signal und LED-Blinken am Griff aus,
um den Schirm im Nahbereich (bis 50m) sofort zu finden.
●
Intelligente Diebstahlsicherung:
●
Bewegungsalarm bei unerlaubtem Entfernen (aktivierbar via App)
-
Geofencing: Push-Benachrichtigung bei Verbindungsabbruch zum Smartphone
-
Reminder-Funktion: Automatische Nachricht, wenn der Regenschirm zurückgelassen
wurde
-
Smart Battery: Leistungsstarker, wiederaufladbarer Li-Ion Akku (USB-C Ladeport), Laufzeit
bis zu 6 Monate pro Ladung.
●
Proaktiver Wetter-Alarm: Erhält lokale Wetterdaten und sendet eine Push-Benachrichtigung
kurz vor Beginn von Regenschauern am aktuellen Standort.
●
Nutzungsstatistik: Detailliertes Tracking von Öffnungszyklen, besuchten Standorten und
verhinderten Regentagen in der App.
●
Schnellöffnung: Zuverlässige Automatik-Funktion für sofortigen Schutz.
Status-Anzeige: Dezente LED im Griff signalisiert Verbindungsstatus und Akkustand.
Robustheit: Elektronik-Modul ist vollständig wasserdicht und stoßfest versiegelt (IP67).
Lieferumfang
1x IPSO Premium Smart-Regenschirm
1x Premium Transporttasche mit RFID-Schutz
1x USB-C Ladekabel (High Speed)
1x Schnellstartanleitung (DE/EN)
Zugangscode zur IPSO Connect App (iOS/Android)
Garantie & Service
Hüseyin & Thomas steht für kompromisslose Qualität.
2 Jahre Herstellergarantie auf alle mechanischen Teile und das Gestell.
1 Jahr Garantie auf elektronische Komponenten und den Akku.
Support: 24/7 Kundenservice-Hotline für technische Unterstützung.
Software: Lebenslange kostenlose App-Updates und Firmware-Aktualisierungen.
© 2026 Hüseyin & Thomas GmbH | Produktdatenblatt Version 2.0 | Irrtümer und technische Änderungen vorbehalten.` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Projekt/Gruppe6_buan_smartgastro_presentation_Abgabe_20.03.2026.pdf`, body: `KI Lösungsentwicklung BUAN-BA1A - Ein Projekt von
Hüseyin Özdemir, Simona Gersak, Stephanie Blaser, Thomas Ballinari
GECHILLT
TOT
Overview
Unser Roter Faden
Von der Idee zur Lösung – In 6 Schritten
SmartGastro.ai | BUAN.BA1A | 21.03.2026
2
Unit 1
Firma &
Stakeholder
Unit 2
Erhebung &
Interview
Unit 3
Ist-Soll
Analyse
Unit 4
Anforder-
ungen
Unit 5
Story Map &
Spezifikation
Unit 6
Prototyp &
Lösung
Künstliche Intelligenz in der Gastronomie
BUAN
Business Analysis
UNIT 1
SmartGastro.ai – Das Startup
Firmensteckbrief
Dezember 2025
Gründung
Prototyp V3.3 | Pilot Q1 2026
Phase
Schweizer Gastronomie (KMU)
Zielmarkt
XGBoost/LightGBM, React.js, Waiterone
Technologie
4 Personen
Team
Restaurants, a la carte-Betriebe
Zielgruppe
29'000
Restaurants in der Schweiz
22%
Food Waste (Ist-Zustand)
CHF 18'750
Einsparung / Jahr / Restaurant
45 ➔15 Min
Tägliche Planungszeitt
SmartGastro.ai | BUAN.BA1A | 21.03.2026
3
BUAN
Business Analysis
UNIT 1
Das Risotto-Dilemma
Die tägliche Herausforderung in der Küche
40
Schnitzel vorbereitet
97
Benötigt!
4–6h / Woche
Manuelle Planung
CHF 27'000 / Jahr
Foodwaste-Kosten
Bauchgefühl
Statt Datenbasis
"Erfahrener Koch, Donnerstag Mittag, Stosszeit – die Herausforderung ist täglich"
VS
SmartGastro.ai | BUAN.BA1A | 21.03.2026
4
BUAN
Business Analysis
UNIT 1
Stakeholder-Ökosystem SmartGastro.ai
↑ 
M A C H T
Keep Satisfied
POS-Partner (Waiterone)
Investoren
 EDÖB
Manage Closely
Owner
Küchenchef Fotios
SmartGastro Dev
Monitor
Lieferanten
Umwelt / Public
 Keep Informed
Managerin Alexandra
Service-Team
 Gäste
I N T ER ES S E →
Schlüssel-Akteure
Küchenchef Fotios (45J)
Hauptnutzer & Entscheider
Managerin Alexandra (34J)
Fokus auf ROI & Effizienz
SmartGastro Dev-Team
Technische Entwicklung
Waiterone AG
POS-Integrationspartner
Gäste
Endnutzer (indirekt)
SmartGastro.ai | BUAN.BA1A | 21.03.2026
5
BUAN
Business Analysis
UNIT 1
Unsere 3 Personas
Fotios (45)
Küchenchef
 Ziel
Präzise Planung und Reduktion von Food Waste 
um 20%.
Pain Points
Manuelle Planung frisst Zeit (4-6h), Stressküche 
durch Fehlkalkulation.
Ich will kochen, nicht rechnen!
Alexandra (34)
Restaurant Managerin
 Ziel
Kostenkontrolle, Effizienzsteigerung und 
sichtbarer ROI.
Pain Points
Keine verlässliche Datenbasis, häufige 
Fehlplanung beim Personal.
Zahlen, die stimmen – bitte!
Simona (29)
Stammgast
 Ziel
Verfügbarkeit von Lieblingsgerichten bei jedem 
Besuch.
Pain Points
Enttäuschung durch "Ausverkauft"-Erlebnisse bei 
Specials.
Nachhaltigkeit entscheidet.
SmartGastro.ai | BUAN.BA1A | 21.03.2026
6
BUAN
Business Analysis
UNIT 1
Empathy Map – Fotios (Küchenchef)
SIEHT
Überfüllte Kühlschränke & Reste
Kollegen im Zeitdruck / Stress bei Nachproduktion
Kompliziertes POS-Terminal
Wetterbericht am Smartphone
HÖRT
"Warum haben wir wieder zu viel?"
Lob der Gäste für Qualität
Kostendruck vom Manager
Lieferanten-Angebote
SCHMERZEN (PAINS)
4–6h Planung pro Woche
Fehlende Kostenkontrolle
Unsicherheit bei Bestellmengen
Angst vor "Ausverkauft"
GEWINNE (GAINS)
Verlässlicher 7-Tage-Forecast
Zeitersparnis bei der Planung
Möglichkeit zum Überschreiben (Kontrolle)
Weniger Food Waste = Weniger Stress
FOTIOS
Küchenchef
DENKT & FÜHLT: Frust, Stolz, Kontrollwunsch 
SmartGastro.ai | BUAN.BA1A | 21.03.2026
7
BUAN
Business Analysis
UNIT 1
RACI-Matrix – Verantwortlichkeiten
WAITERONE
RESTAURANT
SIMONA G.
HÜSEYIN Ö.
THOMAS B.
AUFGABE
R
C
C
R
A
POS-Integration
I
I
I
R
C
ML-Modell Training
I
C
A
C
R
Dashboard-Dev
C
R
R
C
A
Kunden-Onboarding
A
I
C
C
R
DSGVO-Compliance
C
A
R
R
R
Go-Live Pilot
R
Responsible
Führt durch
A
Accountable
Entscheidet
C
Consulted
Wird gefragt
I
Informed
Wird informiert
SmartGastro.ai | BUAN.BA1A | 21.03.2026
8
BUAN
Business Analysis
UNIT 2
Wie wir Wissen gewonnen haben
INTERVIEW
Strukturiertes Experteninterview
Dauer: 45–60 Min | 12 Fragen
Zielgruppe: Küchenchef & Manager
Erkenntnisse: Tiefe Einblicke in Nutzerbedürfnisse & Prozesse
 Warum gewählt?
Erfasst komplexe Prozesse & individuelle Schmerzpunkte, die Daten nicht zeigen.
DOKUMENTENSTUDIUM
Analyse vorhandener Unterlagen
Umfang: 12 Dokumente analysiert
Quellen: POS-Exporte, API-Docs, DSG, Waste-Logs
Erkenntnisse: Technische Fakten & Datenstrukturen
Warum gewählt?
Liefert objektive Zahlen ohne Befragungsverzerrung & technische Machbarkeit.
Warum nicht Beobachtung oder Befragung?
Beobachtung zu aufwändig für 2-Personen-Team. Breite Befragung zu oberflächlich für komplexe B2B-Prozesse.
SmartGastro.ai | BUAN.BA1A | 21.03.2026
9
BUAN
Business Analysis
UNIT 2
Top 5 Erkenntnisse aus Erhebung
Persona Updates 
Marco (Küchenchef)
"Override-Funktion ist ein Muss! Ich lasse mir nicht 
reinreden."
Selin (Managerin)
"Ich brauche den ROI in harten CHF-Zahlen, nicht in 
Prozent."
Simona (Gast)
"Nachhaltigkeit entscheidet bei der Restaurantwahl."
4–6h/Woche Planungsaufwand
Küchenchefs investieren enorm viel Zeit in 
manuelle Planung & Listenpflege.
POS-Daten werden kaum 
genutzt
Daten sind vorhanden, werden aber nicht 
systematisch für Prognosen verwendet.
Wetter = bekannter Faktor
Einfluss ist intuitiv bekannt, wird aber nicht 
automatisch in Bestellmengen übersetzt.
KI mit Erklärung = Akzeptanz
Eine "Black-Box" wird abgelehnt. Nutzer vertrauen 
nur Entscheidungen, die sie verstehen.
DSGVO/DSG = K.O.-Kriterium
Schweizer Datenhaltung und strikte Compliance sind für Restaurantbesitzer unverhandelbar.
SmartGastro.ai | BUAN.BA1A | 21.03.2026
10
BUAN
Business Analysis
UNIT 3
SIPOC – Vom Bauchgefühl zur KI-Prognose
IST-Zustand
Manuell & Bauchgefühl
S
Suppliers (Lieferanten)
Lieferanten, POS (ungenutzt)
I
Inputs
Erfahrungswerte, Notizen vom Vorjahr, Intuition
P
Process
1. Schätzen 2. Wetter prüfen (manuell) 3. Bestellen 4. Mise-en-Place
O
Outputs
Falsche Mengen, 22% Food Waste, 4–6h Aufwand
C
Customers
Küchenpersonal (gestresst), Gäste (unzufrieden)
SmartGastro.ai
SOLL-Zustand
KI-gestützt & Automatisiert
S
Suppliers (Lieferanten)
Waiterone API, MeteoSchweiz, Eventbrite
I
Inputs
POS-Daten (12–36 Mon.), Wetterdaten, Lokale Events
P
Process
1. Auto-Import (02:00) 2. KI-Berechnung 3. Dashboard 4. Override (opt.)
O
Outputs
14-Tage-Forecast, MAPE <10%, Food Waste reduziert
C
Customers
Küchenchef (effizient), Manager (ROI sichtbar)
SmartGastro.ai | BUAN.BA1A | 21.03.2026
11
BUAN
Business Analysis
UNIT 3
Kano-Analyse – Feature-Priorisierung
Kano-Modell Visualisierung
Basismerkmale (Must-Be)
P1 - Kritisch
POS-Import / 7-Tage-Forecast / Datenschutz (nDSG)
Leistungsmerkmale (Performance)
P2 - Wichtig
MAPE <10%Explainability (XAI) / Override-Funktion
Begeisterungsmerkmale (Attractive)
P3 - Optional
Wetter-/Event-Erklärung / ROI-Dashboard (CHF)
 Rückweisungsmerkmale (Reverse)
Vermeiden 
Zu viele Push-Alerts / Vollautomatische Bestellung
SmartGastro.ai | BUAN.BA1A | 21.03.2026
12
BUAN
Business Analysis
UNIT 4
Anforderungsmanagement – Was muss das 
System können?
MUST (Muss)
12 Req.
POS-Datenimport: Täglich automatisch via API
Forecast: 14-Tage-Prognose pro Produkt
Compliance: DSGVO/nDSG, Hosting AWS Zürich
Funktionalität: Override-Funktion + Protokollierung
Qualität: Prognosegenauigkeit MAPE <10%
 SHOULD (Soll)
7 Req.
Explainability: Anzeige Top-3-Einflussfaktoren
Reporting: CSV/PDF-Export für Management
Integration: Eventdaten via Eventbrite API
Dashboard: ROI-Anzeige direkt in CHF
COULD (Kann)
1 Req.
Feature: Menü-Empfehlungsengine (KI-Vorschläge)
Sprache: Mehrsprachigkeit (Französisch/Italienisch)
Architektur: Mandantenfähigkeit für Ketten
 WON'T (Nicht)
2 Req.
Automation: Vollautomatische Bestellauslösung (ohne Check)
UX: Zu viele Push-Benachrichtigungen (Vermeidung)
22 Requirements total
12 Must
7 Should
1 Could
2 Won't
Tools:
 
Jira
Miro
Confluence
Keine Gästedaten im System: Namen, Adressen
SmartGastro.ai | BUAN.BA1A | 21.03.2026
13
BUAN
Business Analysis
UNIT 5
Story Map – Vom Epic zur User Story
NACHFRAGEPROGNOSE
 UX & VERTRAUEN
SKALIERUNG
POS-Integration
Forecast-Engine
Dashboard
Explainability
Menü-Empfehlung
Compliance
US-01
MVP
Als Küchenchef will ich 
täglichen POS-Import
US-03
MVP
Als Küchenchef will ich 7-
Tage-Forecast
US-04
MVP
Als Küchenchef will ich 
Override-Funktion
US-07
MVP
Als Küchenchef will ich KPI-
Dashboard
US-09
MVP
Als Manager will ich 
Explainability
US-11
R2
Als Manager will ich Menü-
Empfehlungen
US-15
R2
Als Admin will ich 
Mandantenfähigkeit
MVP
(Q1 2026)
Release 1
(Q2–Q3)
Release 2 
(Q4+)
SmartGastro.ai | BUAN.BA1A | 21.03.2026
14
BUAN
Business Analysis
UNIT 5
User Story im Detail – US-03
US-03 7-Tage-Forecast
MVP
"Als Küchenchef möchte ich einen 7-Tage-Forecast pro Produkt sehen, damit ich die Mise-en-Place 
effizient planen kann."
Akzeptanzkriterien 
Forecast in <2 Sekunden abrufbar
MAPE <15% (Woche 4) / <10% (Monat 3)
Override möglich mit Begründungsfeld
Confidence-Interval visuell sichtbar
I
Independent
N
Negotiable
V
Valuable
E
Estimable
S
Small
T
Testable
SmartGastro.ai | BUAN.BA1A | 21.03.2026
15
BUAN
Business Analysis
UNIT 6
Storyboard – Ein Tag mit SmartGastro.ai
Fotios öffnet das Dashboard
Gäste erwartet:
161
Wetter:
4°C (Sonnig)
Event:
Stadtfest (+25%)
Explainability & Override
Risotto-Erklärung (Top-Faktoren):
1. Wochentag:
+20%
2. Lokales Event:
+15%
3. Wetter:
+5%
 Manuelle Korrektur: 45 ➝ 50
Erfolgskontrolle & Feedback
Ergebnis:
50 bestellt, 47 verkauft
Food Waste:
–18% (Wochenschnitt)
Einsparung:
CHF 312 (heute)
Feedback-Loop: Daten fliessen zurück ins Modell
DASHBOARD
Gäste:
161
Wetter:
4°C 
Event:
Stadtfest
 Risotto-Erklärung
①Sonntag
+20%
②Stadtfest
+15%
③ Sonne
+5%
Override: 45 ➝50
TAGESABSCHLUSS
Bestellt:
50
Verkauft:
47
Waste:
Minimiert!
08:30 Uhr
08:30 Uhr
23:00 Uhr
Hmm, viele Gäste heute!
SmartGastro.ai | BUAN.BA1A | 21.03.2026
16
BUAN
Business Analysis
Delta -3
UNIT 6
Dashboard-Wireframe –
SmartGastro Engine V3.3
 SmartGastro.ai | Engine V3.3
Sa, 21. Feb 2026
4°C (Zürich)
Thomas B.
CEO / Admin
Gäste Forecast
161
Umsatz Forecast
 7'285.-
Wetter
Bewölkt
System Status
Training
Mise-en-Place Planung
Export
Produkt
Forecast
IST (Manuell)
Diff.
Upload
Aktion
Schnitzel Pommes
38
--
--
Ready
Cordon Bleu
29
32
+3
Ready
Risotto Funghi
45
50
+5
Ready
Bratwurst m. Sauce
31
--
--
Ready
Explainability (XAI)
Warum Risotto Funghi heute +20%? 
① Sonnenwetter
+20%
②Stadtfest
+15%
③Samstag
+10%
Details anzeigen
SmartGastro.ai | BUAN.BA1A | 21.03.2026
17
BUAN
Business Analysis
UNIT 6
Technische Architektur & BPMN-Prozess
 BPMN-Prozessmodell 
KI-System
Feedback Loop
 Technologie-Stack 
Frontend
React.jsTypeScriptTailwind
Backend
PythonFastAPI
 ML-Engine
XGBoostLightGBM
Datenbank
PostgreSQLRedis
Cloud
Externe Festplatte
Security
AES-256TLS 1.3 
(Festplattenverschlüsselung)
 Cron 02:00
POS-Import
Wetterdaten
 ML-Forecast
Dashboard
Küchenchef
Prüfen
Override?
 Mise-en-Place
SmartGastro.ai | BUAN.BA1A | 21.03.2026
18
BUAN
Business Analysis
Externe APIs
MeteoSchweiz
Waiterone v2
 Eventbrite
Tages-
abschluss

BUSINESS VALUE
Der Mehrwert in CHF – klare Zahlen
Investition
SaaS-Abo (Jahr)
CHF 3'588
(CHF 299 / Monat)
Onboarding-Schulung
(Einmalig)
CHF 500
Total Kosten
CHF 16'088
Nutzen (pro Jahr)
Food-Waste-Reduktion (-22% → -12%)
CHF 18'750
Zeitersparnis (4-6h/Woche)
CHF 7'280
Menüoptimierung (+10%)
CHF 7'500
Total Nutzen
CHF 33'530
Pilotphase Q1 2026: 1 Restaurant
Ziel 2026: 10+ Kunden
Vision 2027: DACH-Expansion
ROI
CHF 16’000.00
Break-Even: ~6 Mt.
Implementierung 1. Jahr
CHF 12’000
SmartGastro.ai | BUAN.BA1A | 21.03.2026
19
BUAN
Business Analysis
FAZIT
SmartGastro.ai – In 60 Sekunden
Problem
Food Waste: 22% (Ist-Zustand)
Planungsaufwand: 4–6h täglich
Lösung
KI-Forecast + Explainability
Manuelles Override & Feedback
Stakeholder
3 Personas: Fotios, Alexandra, Simona
12 Stakeholder identifiziert
Methodik
Interview + Dokumentenstudium
5 Key Findings erarbeitet
Anforderungen
22 Requirements total
MoSCoW-priorisiert (12 Must)
Pilot & Value
Start Q1 2026
Sparpotenzial: CHF 18'750
„Wir wollen, dass Gastronominnen und Gastronomen 
wieder Gastgeber sein können – präsent im Gastraum, 
kreativ in der Küche – und nicht gefangen in Hektik, Excel-
Tabellen oder Personalnot.“
Thomas Ballinari
Hüseyin Özdemir
Simona Gersak  
Stress durch Nachproduktion
SmartGastro.ai | BUAN.BA1A | 21.03.2026
20
BUAN
Business Analysis
Stephanie Blaser` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Projekt/Gruppr6__buan_smartgastro_presentation_20.03.2026.pdf`, body: `KI Lösungsentwicklung BUAN-BA1A - Ein Projekt von
Hüseyin Özdemir, Simona Gersak, Stephanie Blaser, Thomas Ballinari
GECHILLT
TOT
Overview
Unser Roter Faden
Von der Idee zur Lösung – In 6 Schritten
SmartGastro.ai | BUAN.BA1A | 21.03.2026
2
Unit 1
Firma &
Stakeholder
Unit 2
Erhebung &
Interview
Unit 3
Ist-Soll
Analyse
Unit 4
Anforder-
ungen
Unit 5
Story Map &
Spezifikation
Unit 6
Prototyp &
Lösung
Künstliche Intelligenz in der Gastronomie
BUAN
Business Analysis
UNIT 1
SmartGastro.ai – Das Startup
Firmensteckbrief
Dezember 2025
Gründung
Prototyp V3.3 | Pilot Q1 2026
Phase
Schweizer Gastronomie (KMU)
Zielmarkt
XGBoost/LightGBM, React.js, Waiterone
Technologie
4 Personen
Team
Restaurants, a la carte-Betriebe
Zielgruppe
29'000
Restaurants in der Schweiz
22%
Food Waste (Ist-Zustand)
CHF 18'750
Einsparung / Jahr / Restaurant
45 ➔15 Min
Tägliche Planungszeitt
SmartGastro.ai | BUAN.BA1A | 21.03.2026
3
BUAN
Business Analysis
UNIT 1
Das Risotto-Dilemma
Die tägliche Herausforderung in der Küche
40
Schnitzel vorbereitet
97
Benötigt!
4–6h / Woche
Manuelle Planung
CHF 27'000 / Jahr
Foodwaste-Kosten
Bauchgefühl
Statt Datenbasis
"Erfahrener Koch, Donnerstag Mittag, Stosszeit – die Herausforderung ist täglich"
VS
SmartGastro.ai | BUAN.BA1A | 21.03.2026
4
BUAN
Business Analysis
UNIT 1
Stakeholder-Ökosystem SmartGastro.ai
↑ 
M A C H T
Keep Satisfied
POS-Partner (Waiterone)
Investoren
 EDÖB
Manage Closely
Owner
Küchenchef Fotios
SmartGastro Dev
Monitor
Lieferanten
Umwelt / Public
 Keep Informed
Managerin Alexandra
Service-Team
 Gäste
I N T ER ES S E →
Schlüssel-Akteure
Küchenchef Fotios (45J)
Hauptnutzer & Entscheider
Managerin Alexandra (34J)
Fokus auf ROI & Effizienz
SmartGastro Dev-Team
Technische Entwicklung
Waiterone AG
POS-Integrationspartner
Gäste
Endnutzer (indirekt)
SmartGastro.ai | BUAN.BA1A | 21.03.2026
5
BUAN
Business Analysis
UNIT 1
Unsere 3 Personas
Fotios (45)
Küchenchef
 Ziel
Präzise Planung und Reduktion von Food Waste 
um 20%.
Pain Points
Manuelle Planung frisst Zeit (4-6h), Stressküche 
durch Fehlkalkulation.
Ich will kochen, nicht rechnen!
Alexandra (34)
Restaurant Managerin
 Ziel
Kostenkontrolle, Effizienzsteigerung und 
sichtbarer ROI.
Pain Points
Keine verlässliche Datenbasis, häufige 
Fehlplanung beim Personal.
Zahlen, die stimmen – bitte!
Simona (29)
Stammgast
 Ziel
Verfügbarkeit von Lieblingsgerichten bei jedem 
Besuch.
Pain Points
Enttäuschung durch "Ausverkauft"-Erlebnisse bei 
Specials.
Nachhaltigkeit entscheidet.
SmartGastro.ai | BUAN.BA1A | 21.03.2026
6
BUAN
Business Analysis
UNIT 1
Empathy Map – Fotios (Küchenchef)
SIEHT
Überfüllte Kühlschränke & Reste
Kollegen im Zeitdruck / Stress bei Nachproduktion
Kompliziertes POS-Terminal
Wetterbericht am Smartphone
HÖRT
"Warum haben wir wieder zu viel?"
Lob der Gäste für Qualität
Kostendruck vom Manager
Lieferanten-Angebote
SCHMERZEN (PAINS)
4–6h Planung pro Woche
Fehlende Kostenkontrolle
Unsicherheit bei Bestellmengen
Angst vor "Ausverkauft"
GEWINNE (GAINS)
Verlässlicher 7-Tage-Forecast
Zeitersparnis bei der Planung
Möglichkeit zum Überschreiben (Kontrolle)
Weniger Food Waste = Weniger Stress
FOTIOS
Küchenchef
DENKT & FÜHLT: Frust, Stolz, Kontrollwunsch 
SmartGastro.ai | BUAN.BA1A | 21.03.2026
7
BUAN
Business Analysis
UNIT 1
RACI-Matrix – Verantwortlichkeiten
WAITERONE
RESTAURANT
SIMONA G.
HÜSEYIN Ö.
THOMAS B.
AUFGABE
R
C
C
R
A
POS-Integration
I
I
I
R
C
ML-Modell Training
I
C
A
C
R
Dashboard-Dev
C
R
R
C
A
Kunden-Onboarding
A
I
C
C
R
DSGVO-Compliance
C
A
R
R
R
Go-Live Pilot
R
Responsible
Führt durch
A
Accountable
Entscheidet
C
Consulted
Wird gefragt
I
Informed
Wird informiert
SmartGastro.ai | BUAN.BA1A | 21.03.2026
8
BUAN
Business Analysis
UNIT 2
Wie wir Wissen gewonnen haben
INTERVIEW
Strukturiertes Experteninterview
Dauer: 45–60 Min | 12 Fragen
Zielgruppe: Küchenchef & Manager
Erkenntnisse: Tiefe Einblicke in Nutzerbedürfnisse & Prozesse
 Warum gewählt?
Erfasst komplexe Prozesse & individuelle Schmerzpunkte, die Daten nicht zeigen.
DOKUMENTENSTUDIUM
Analyse vorhandener Unterlagen
Umfang: 12 Dokumente analysiert
Quellen: POS-Exporte, API-Docs, DSG, Waste-Logs
Erkenntnisse: Technische Fakten & Datenstrukturen
Warum gewählt?
Liefert objektive Zahlen ohne Befragungsverzerrung & technische Machbarkeit.
Warum nicht Beobachtung oder Befragung?
Beobachtung zu aufwändig für 2-Personen-Team. Breite Befragung zu oberflächlich für komplexe B2B-Prozesse.
SmartGastro.ai | BUAN.BA1A | 21.03.2026
9
BUAN
Business Analysis
UNIT 2
Top 5 Erkenntnisse aus Erhebung
Persona Updates 
Marco (Küchenchef)
"Override-Funktion ist ein Muss! Ich lasse mir nicht 
reinreden."
Selin (Managerin)
"Ich brauche den ROI in harten CHF-Zahlen, nicht in 
Prozent."
Simona (Gast)
"Nachhaltigkeit entscheidet bei der Restaurantwahl."
4–6h/Woche Planungsaufwand
Küchenchefs investieren enorm viel Zeit in 
manuelle Planung & Listenpflege.
POS-Daten werden kaum 
genutzt
Daten sind vorhanden, werden aber nicht 
systematisch für Prognosen verwendet.
Wetter = bekannter Faktor
Einfluss ist intuitiv bekannt, wird aber nicht 
automatisch in Bestellmengen übersetzt.
KI mit Erklärung = Akzeptanz
Eine "Black-Box" wird abgelehnt. Nutzer vertrauen 
nur Entscheidungen, die sie verstehen.
DSGVO/DSG = K.O.-Kriterium
Schweizer Datenhaltung und strikte Compliance sind für Restaurantbesitzer unverhandelbar.
SmartGastro.ai | BUAN.BA1A | 21.03.2026
10
BUAN
Business Analysis
UNIT 3
SIPOC – Vom Bauchgefühl zur KI-Prognose
IST-Zustand
Manuell & Bauchgefühl
S
Suppliers (Lieferanten)
Lieferanten, POS (ungenutzt)
I
Inputs
Erfahrungswerte, Notizen vom Vorjahr, Intuition
P
Process
1. Schätzen 2. Wetter prüfen (manuell) 3. Bestellen 4. Mise-en-Place
O
Outputs
Falsche Mengen, 22% Food Waste, 4–6h Aufwand
C
Customers
Küchenpersonal (gestresst), Gäste (unzufrieden)
SmartGastro.ai
SOLL-Zustand
KI-gestützt & Automatisiert
S
Suppliers (Lieferanten)
Waiterone API, MeteoSchweiz, Eventbrite
I
Inputs
POS-Daten (12–36 Mon.), Wetterdaten, Lokale Events
P
Process
1. Auto-Import (02:00) 2. KI-Berechnung 3. Dashboard 4. Override (opt.)
O
Outputs
14-Tage-Forecast, MAPE <10%, Food Waste reduziert
C
Customers
Küchenchef (effizient), Manager (ROI sichtbar)
SmartGastro.ai | BUAN.BA1A | 21.03.2026
11
BUAN
Business Analysis
UNIT 3
Kano-Analyse – Feature-Priorisierung
Kano-Modell Visualisierung
Basismerkmale (Must-Be)
P1 - Kritisch
POS-Import / 7-Tage-Forecast / Datenschutz (nDSG)
Leistungsmerkmale (Performance)
P2 - Wichtig
MAPE <10%Explainability (XAI) / Override-Funktion
Begeisterungsmerkmale (Attractive)
P3 - Optional
Wetter-/Event-Erklärung / ROI-Dashboard (CHF)
 Rückweisungsmerkmale (Reverse)
Vermeiden 
Zu viele Push-Alerts / Vollautomatische Bestellung
SmartGastro.ai | BUAN.BA1A | 21.03.2026
12
BUAN
Business Analysis
UNIT 4
Anforderungsmanagement – Was muss das 
System können?
MUST (Muss)
12 Req.
POS-Datenimport: Täglich automatisch via API
Forecast: 14-Tage-Prognose pro Produkt
Compliance: DSGVO/nDSG, Hosting AWS Zürich
Funktionalität: Override-Funktion + Protokollierung
Qualität: Prognosegenauigkeit MAPE <10%
 SHOULD (Soll)
7 Req.
Explainability: Anzeige Top-3-Einflussfaktoren
Reporting: CSV/PDF-Export für Management
Integration: Eventdaten via Eventbrite API
Dashboard: ROI-Anzeige direkt in CHF
COULD (Kann)
1 Req.
Feature: Menü-Empfehlungsengine (KI-Vorschläge)
Sprache: Mehrsprachigkeit (Französisch/Italienisch)
Architektur: Mandantenfähigkeit für Ketten
 WON'T (Nicht)
2 Req.
Automation: Vollautomatische Bestellauslösung (ohne Check)
UX: Zu viele Push-Benachrichtigungen (Vermeidung)
22 Requirements total
12 Must
7 Should
1 Could
2 Won't
Tools:
 
Jira
Miro
Confluence
Keine Gästedaten im System: Namen, Adressen
SmartGastro.ai | BUAN.BA1A | 21.03.2026
13
BUAN
Business Analysis
UNIT 5
Story Map – Vom Epic zur User Story
NACHFRAGEPROGNOSE
 UX & VERTRAUEN
SKALIERUNG
POS-Integration
Forecast-Engine
Dashboard
Explainability
Menü-Empfehlung
Compliance
US-01
MVP
Als Küchenchef will ich 
täglichen POS-Import
US-03
MVP
Als Küchenchef will ich 7-
Tage-Forecast
US-04
MVP
Als Küchenchef will ich 
Override-Funktion
US-07
MVP
Als Küchenchef will ich KPI-
Dashboard
US-09
MVP
Als Manager will ich 
Explainability
US-11
R2
Als Manager will ich Menü-
Empfehlungen
US-15
R2
Als Admin will ich 
Mandantenfähigkeit
MVP
(Q1 2026)
Release 1
(Q2–Q3)
Release 2 
(Q4+)
SmartGastro.ai | BUAN.BA1A | 21.03.2026
14
BUAN
Business Analysis
UNIT 5
User Story im Detail – US-03
US-03 7-Tage-Forecast
MVP
"Als Küchenchef möchte ich einen 7-Tage-Forecast pro Produkt sehen, damit ich die Mise-en-Place 
effizient planen kann."
Akzeptanzkriterien 
Forecast in <2 Sekunden abrufbar
MAPE <15% (Woche 4) / <10% (Monat 3)
Override möglich mit Begründungsfeld
Confidence-Interval visuell sichtbar
I
Independent
N
Negotiable
V
Valuable
E
Estimable
S
Small
T
Testable
SmartGastro.ai | BUAN.BA1A | 21.03.2026
15
BUAN
Business Analysis
UNIT 6
Storyboard – Ein Tag mit SmartGastro.ai
Fotios öffnet das Dashboard
Gäste erwartet:
161
Wetter:
4°C (Sonnig)
Event:
Stadtfest (+25%)
Explainability & Override
Risotto-Erklärung (Top-Faktoren):
1. Wochentag:
+20%
2. Lokales Event:
+15%
3. Wetter:
+5%
 Manuelle Korrektur: 45 ➝ 50
Erfolgskontrolle & Feedback
Ergebnis:
50 bestellt, 47 verkauft
Food Waste:
–18% (Wochenschnitt)
Einsparung:
CHF 312 (heute)
Feedback-Loop: Daten fliessen zurück ins Modell
DASHBOARD
Gäste:
161
Wetter:
4°C 
Event:
Stadtfest
 Risotto-Erklärung
①Sonntag
+20%
②Stadtfest
+15%
③ Sonne
+5%
Override: 45 ➝50
TAGESABSCHLUSS
Bestellt:
50
Verkauft:
47
Waste:
Minimiert!
08:30 Uhr
08:30 Uhr
23:00 Uhr
Hmm, viele Gäste heute!
SmartGastro.ai | BUAN.BA1A | 21.03.2026
16
BUAN
Business Analysis
Delta -3
UNIT 6
Dashboard-Wireframe –
SmartGastro Engine V3.3
 SmartGastro.ai | Engine V3.3
Sa, 21. Feb 2026
4°C (Zürich)
Thomas B.
CEO / Admin
Gäste Forecast
161
Umsatz Forecast
 7'285.-
Wetter
Bewölkt
System Status
Training
Mise-en-Place Planung
Export
Produkt
Forecast
IST (Manuell)
Diff.
Upload
Aktion
Schnitzel Pommes
38
--
--
Ready
Cordon Bleu
29
32
+3
Ready
Risotto Funghi
45
50
+5
Ready
Bratwurst m. Sauce
31
--
--
Ready
Explainability (XAI)
Warum Risotto Funghi heute +20%? 
① Sonnenwetter
+20%
②Stadtfest
+15%
③Samstag
+10%
Details anzeigen
SmartGastro.ai | BUAN.BA1A | 21.03.2026
17
BUAN
Business Analysis
UNIT 6
Technische Architektur & BPMN-Prozess
 BPMN-Prozessmodell 
KI-System
Feedback Loop
 Technologie-Stack 
Frontend
React.jsTypeScriptTailwind
Backend
PythonFastAPI
 ML-Engine
XGBoostLightGBM
Datenbank
PostgreSQLRedis
Cloud
Externe Festplatte
Security
AES-256TLS 1.3 
(Festplattenverschlüsselung)
 Cron 02:00
POS-Import
Wetterdaten
 ML-Forecast
Dashboard
Küchenchef
Prüfen
Override?
 Mise-en-Place
SmartGastro.ai | BUAN.BA1A | 21.03.2026
18
BUAN
Business Analysis
Externe APIs
MeteoSchweiz
Waiterone v2
 Eventbrite
Tages-
abschluss

BUSINESS VALUE
Der Mehrwert in CHF – klare Zahlen
Investition
SaaS-Abo (Jahr)
CHF 3'588
(CHF 299 / Monat)
Onboarding-Schulung
(Einmalig)
CHF 500
Total Kosten
CHF 16'088
Nutzen (pro Jahr)
Food-Waste-Reduktion (-22% → -12%)
CHF 18'750
Zeitersparnis (4-6h/Woche)
CHF 7'280
Menüoptimierung (+10%)
CHF 7'500
Total Nutzen
CHF 33'530
Pilotphase Q1 2026: 1 Restaurant
Ziel 2026: 10+ Kunden
Vision 2027: DACH-Expansion
ROI
CHF 16’000.00
Break-Even: ~6 Mt.
Implementierung 1. Jahr
CHF 12’000
SmartGastro.ai | BUAN.BA1A | 21.03.2026
19
BUAN
Business Analysis
FAZIT
SmartGastro.ai – In 60 Sekunden
Problem
Food Waste: 22% (Ist-Zustand)
Planungsaufwand: 4–6h täglich
Lösung
KI-Forecast + Explainability
Manuelles Override & Feedback
Stakeholder
3 Personas: Fotios, Alexandra, Simona
12 Stakeholder identifiziert
Methodik
Interview + Dokumentenstudium
5 Key Findings erarbeitet
Anforderungen
22 Requirements total
MoSCoW-priorisiert (12 Must)
Pilot & Value
Start Q1 2026
Sparpotenzial: CHF 18'750
„Wir wollen, dass Gastronominnen und Gastronomen 
wieder Gastgeber sein können – präsent im Gastraum, 
kreativ in der Küche – und nicht gefangen in Hektik, Excel-
Tabellen oder Personalnot.“
Thomas Ballinari
Hüseyin Özdemir
Simona Gersak  
Stress durch Nachproduktion
SmartGastro.ai | BUAN.BA1A | 21.03.2026
20
BUAN
Business Analysis
Stephanie Blaser` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Projekt/SmartGastro.ai BUAN Gruppe 6 v3.0 1-signature-TB.pdf`, body: `© 2026 Thomas Ballinari 
 
 
 
 
 
 
BUAN Business Case 
SmartGastro.ai – KI-gestützte Nachfrageprognose 
für Schweizer Restaurants 
 
Team: Thomas Ballinari, Hüseyin Özdemir, Simona Gersak, Stephanie Blaser 
 
Institution: IPSO Bildung AG 
 
Modul: BUAN.BA1A (Business Analysis) 
 
Abgabedatum: 14.03.2026 
 
TB_Signatur
2026.03.09 13:16:05 +01
© 2026 Thomas Ballinari 
I 
Inhaltsverzeichnis 
ABKÜRZUNGSVERZEICHNIS ............................................................................................................................. III 
ABBILDUNGSVERZEICHNIS ............................................................................................................................... V 
TABELLENVERZEICHNIS ................................................................................................................................... VI 
1 
EINLEITUNG............................................................................................................................................. 1 
2 
UNIT 1 – PROJEKT- UND FIRMENBESCHREIBUNG + STAKEHOLDER-ANALYSE .......................................... 2 
2.1 
FIRMENBESCHREIBUNG .............................................................................................................................. 2 
2.1.1 
Problemstellung .............................................................................................................................. 2 
2.1.2 
Lösung ............................................................................................................................................. 3 
2.1.3 
Zielgruppe ........................................................................................................................................ 3 
2.1.4 
Geschäftsmodell .............................................................................................................................. 3 
2.2 
STAKEHOLDER ANALYSE.............................................................................................................................. 4 
2.2.1 
Stakeholder Liste ............................................................................................................................. 4 
2.2.2 
Stakeholder-Map (Power-Interest-Matrix) ...................................................................................... 5 
2.3 
PERSONAS ............................................................................................................................................... 5 
2.3.1 
Persona 1 Fotios Küchenchef und Geschäftsführer ......................................................................... 5 
2.3.2 
Persona 2 Alexandra Restaurantmanagerin ................................................................................... 6 
2.3.3 
Persona 3 Simona Stammgast ......................................................................................................... 6 
2.4 
EMPATHY MAPS ....................................................................................................................................... 7 
2.5 
RACI-MATRIX .......................................................................................................................................... 8 
3 
UNIT 2 ERHEBUNGSMETHODEN METHODENWAHL UND BEGRÜNDUNG .............................................. 10 
3.1 
METHODENWAHL & BEGRÜNDUNG ............................................................................................................ 10 
3.2 
INTERVIEW LEITFADEN FOTIOS KÜCHENCHEF ................................................................................................ 10 
3.2.1 
Kontext .......................................................................................................................................... 10 
3.2.2 
Pain Points ..................................................................................................................................... 10 
3.2.3 
Soll Zustand und Anforderungen ................................................................................................... 11 
3.2.4 
Technologie und Adoption ............................................................................................................. 11 
3.3 
DOKUMENTENLISTE ................................................................................................................................. 11 
3.3.1 
Findings kurz und wissenschaftlicher formuliert ........................................................................... 12 
3.4 
AKTUALISIERUNG DER PERSONAS ............................................................................................................... 13 
3.4.1 
Fotios ............................................................................................................................................. 13 
3.4.2 
Alexandra ...................................................................................................................................... 13 
4 
UNIT 3 – IST-SOLL-VERGLEICH ............................................................................................................... 14 
4.1 
IST ZUSTAND ANALYSE SIPOC ................................................................................................................... 14 
4.2 
SOLL ZUSTAND ANALYSE SIPOC MIT SMARTGASTRO.AI ................................................................................. 14 
© 2026 Thomas Ballinari 
II 
4.3 
IST SOLL VERGLEICH KANO ANALYSE ........................................................................................................... 15 
4.4 
ERWARTETE RESULTATE ........................................................................................................................... 16 
4.4.1 
Food Waste ................................................................................................................................... 16 
4.4.2 
Planungszeit .................................................................................................................................. 17 
4.4.3 
Wirtschaftlicher Nutzen und ROI ................................................................................................... 17 
5 
UNIT 4 – ANFORDERUNGSMANAGEMENT ............................................................................................ 18 
5.1 
ANFORDERUNGEN AUS VORHANDENEM MATERIAL ABLEITEN ........................................................................... 18 
5.2 
REQUIREMENTS-TABELLE (MOSCOW) ....................................................................................................... 18 
6 
UNIT 5 – SPEZIFIKATION & MODELLIERUNG .......................................................................................... 20 
6.1 
STORY MAP ........................................................................................................................................... 20 
6.2 
USE CASE DIAGRAMM FÜR SMARTGASTRO.AI VISUELLES ARTEFAKT .................................................................. 21 
7 
UNIT 6 – LÖSUNGSENTENTWURF & PROTOTYPING................................................................................ 23 
7.1 
STORYBOARD ......................................................................................................................................... 23 
7.2 
PAPER PROTOTYPE (BESCHREIBUNG) .......................................................................................................... 24 
7.3 
DASHBOARD (HAUPTANSICHT) .................................................................................................................. 24 
7.4 
MID FIDELITY WIREFRAMES BESCHREIBUNG ................................................................................................. 26 
7.4.1 
Wireframe 1 Dashboard Desktop 1920 mal 1080 ......................................................................... 26 
7.4.2 
Wireframe 2 Nachvollziehbarkeit Modal 400 mal 300 .................................................................. 27 
7.4.3 
Wireframe 3 Override Modal 400 mal 350 ................................................................................... 27 
7.5 
BPMN-PROZESSDIAGRAMM (FORECAST-GENERIERUNG & NUTZUNG) ............................................................. 27 
7.5.1 
Lane 1:  
 System (KI-Pipeline) .................................................................................................... 27 
7.5.2 
Lane 2:  
 Küchenchef (Fotis) ....................................................................................................... 28 
7.5.3 
Lane 3: Externe Systeme (APIs) ..................................................................................................... 28 
7.6 
EVALUATION VON LÖSUNGSVARIANTEN ....................................................................................................... 28 
8 
FAZIT ..................................................................................................................................................... 30 
LITERATURVERZEICHNIS ................................................................................................................................. VII 
ANHANG ....................................................................................................................................................... VIII 
 
 
 
© 2026 Thomas Ballinari 
III 
Abkürzungsverzeichnis 
API - Application Programming Interface 
BA - Business Analysis 
BI - Business Intelligence 
CSV - Comma Separated Values 
DSG - Schweizer Datenschutzgesetz revidiert 
DSGVO - Datenschutz Grundverordnung der Europäischen Union 
ESG - Environmental Social Governance 
GUI - Graphical User Interface 
ISO - International Organization for Standardization 
IT - Information Technology 
KPI - Key Performance Indicator 
MAPE - Mean Absolute Percentage Error 
MAE - Mean Absolute Error 
ML - Machine Learning 
MVP - Minimum Viable Product 
NFR - Non Functional Requirement 
OOS - Out of Stock 
OKR - Objectives and Key Results 
PDF - Portable Document Format 
POS - Point of Sale 
RACI - Responsible Accountable Consulted Informed 
REST - Representational State Transfer 
ROI - Return on Investment 
SaaS - Software as a Service 
© 2026 Thomas Ballinari 
IV 
SIPOC - Suppliers Inputs Process Outputs Customers 
UML - Unified Modeling Language 
US - User Story 
UX - User Experience 
 
 
© 2026 Thomas Ballinari 
V 
Abbildungsverzeichnis 
Abbildung 1: Use Case Diagramm ........................................................................... 22 
Abbildung 2: Storyboard ........................................................................................... 23 
Abbildung 3: Prototype ............................................................................................. 24 
Abbildung 4: Dashboard ........................................................................................... 25 
 
 
 
 
© 2026 Thomas Ballinari 
VI 
Tabellenverzeichnis 
Tabelle 1: Stakeholder Liste und Einbindungspriorität ................................................ 4 
Tabelle 2: Stakeholder Map (Power Interest Matrix) ................................................... 5 
Tabelle 3: Empathie Karte Fotios Küchenchef ............................................................ 7 
Tabelle 4: Empathie Karte Alexandra Restaurantmanagerin ...................................... 8 
Tabelle 5: RACI Matrix für Pilot und Umsetzung von SmartGastro.ai ......................... 9 
Tabelle 6: Dokumentenliste für das Dokumentstudium ............................................ 12 
Tabelle 7: SIPOC Ist Zustand Planung und Produktion im Restaurantbetrieb .......... 14 
Tabelle 8: SIPOC Soll Zustand mit SmartGastro.ai .................................................. 15 
Tabelle 9: Kano Analyse der wichtigsten Features ................................................... 16 
Tabelle 10: Requirements Tabelle nach MoSCoW ................................................... 19 
Tabelle 11:Story Map mit Themes Epics User Stories und Releases ....................... 20 
Tabelle 12: Release Plan für SmartGastro.ai ........................................................... 21 
Tabelle 13: Entscheidung 1: Dashboard vs. CSV-Export ......................................... 29 
Tabelle 14: Entscheidung 2: Cloud (AWS) vs. On-Premise ...................................... 29 
 
 
© 2026 Thomas Ballinari 
1 
1 Einleitung 
SmartGastro.ai ist eine KI basierte Lösung zur Nachfrageprognose für das Schweizer 
Gastgewerbe. Ziel ist, Food Waste, operative Hektik und unnötige Kosten entlang der 
täglichen Produktions und Bestellentscheidungen messbar zu senken. Im Fokus ste-
hen Restaurants, die unter schwankender Nachfrage, Personaldruck und knappen 
Margen leiden und deshalb häufig entweder zu viel vorbereiten oder kurzfristig nach-
produzieren müssen. SmartGastro.ai unterstützt diese Betriebe mit datenbasierten 
Prognosen und Handlungsempfehlungen, damit Einkauf, Mise en place, Produktion 
und Personaleinsatz besser planbar werden. 
Das Vorhaben entstand aus dem AIBS Programm und verfügt über einen funktionsfä-
higen Prototyp in Version 3.3. Dieser Business Case dokumentiert die Units 1 bis 6 
und führt Schritt für Schritt von der Projekt und Kontextbeschreibung über Stakeholder 
Analyse und Bedarfserhebung bis zur Ist Analyse und dem Soll Vergleich. Darauf auf-
bauend werden Anforderungen erhoben und priorisiert, in eine agile Spezifikation 
überführt und in ein umsetzbares Lösungsdesign übersetzt. Das Ergebnis ist eine kon-
sistente, nachvollziehbare Entscheidungsgrundlage für die weitere Produktentwick-
lung und die Markteinführung, inklusive klarer Rollen, priorisierter Anforderungen, 
Story Map, User Stories sowie ersten Prototyp Artefakten. Der erwartete wirtschaftli-
che Nutzen basiert auf der Reduktion von Verschwendung und Fehlplanung. Daraus 
leiten sich ein realistischer Return on Investment und ein Break even Zeitraum von 12 
bis 18 Monaten ab, je nach Ausgangslage d` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Projekt/SmartGastro.ai BUAN v3.0 1.pdf`, body: `© 2026 Thomas Ballinari 
 
 
 
 
 
 
BUAN Business Case 
SmartGastro.ai – KI-gestützte Nachfrageprognose 
für Schweizer Restaurants 
 
Team: Thomas Ballinari, Hüseyin Özdemir, Simona Gersak, Stephanie Blaser 
 
Institution: IPSO Bildung AG 
 
Modul: BUAN.BA1A (Business Analysis) 
 
Abgabedatum: 14.03.2026 
 
© 2026 Thomas Ballinari 
I 
Inhaltsverzeichnis 
ABKÜRZUNGSVERZEICHNIS ............................................................................................................................. III 
ABBILDUNGSVERZEICHNIS ............................................................................................................................... V 
TABELLENVERZEICHNIS ................................................................................................................................... VI 
1 
EINLEITUNG............................................................................................................................................. 1 
2 
UNIT 1 – PROJEKT- UND FIRMENBESCHREIBUNG + STAKEHOLDER-ANALYSE .......................................... 2 
2.1 
FIRMENBESCHREIBUNG .............................................................................................................................. 2 
2.1.1 
Problemstellung .............................................................................................................................. 2 
2.1.2 
Lösung ............................................................................................................................................. 3 
2.1.3 
Zielgruppe ........................................................................................................................................ 3 
2.1.4 
Geschäftsmodell .............................................................................................................................. 3 
2.2 
STAKEHOLDER ANALYSE.............................................................................................................................. 4 
2.2.1 
Stakeholder Liste ............................................................................................................................. 4 
2.2.2 
Stakeholder-Map (Power-Interest-Matrix) ...................................................................................... 5 
2.3 
PERSONAS ............................................................................................................................................... 5 
2.3.1 
Persona 1 Fotios Küchenchef und Geschäftsführer ......................................................................... 5 
2.3.2 
Persona 2 Alexandra Restaurantmanagerin ................................................................................... 6 
2.3.3 
Persona 3 Simona Stammgast ......................................................................................................... 6 
2.4 
EMPATHY MAPS ....................................................................................................................................... 7 
2.5 
RACI-MATRIX .......................................................................................................................................... 8 
3 
UNIT 2 ERHEBUNGSMETHODEN METHODENWAHL UND BEGRÜNDUNG .............................................. 10 
3.1 
METHODENWAHL & BEGRÜNDUNG ............................................................................................................ 10 
3.2 
INTERVIEW LEITFADEN FOTIOS KÜCHENCHEF ................................................................................................ 10 
3.2.1 
Kontext .......................................................................................................................................... 10 
3.2.2 
Pain Points ..................................................................................................................................... 10 
3.2.3 
Soll Zustand und Anforderungen ................................................................................................... 11 
3.2.4 
Technologie und Adoption ............................................................................................................. 11 
3.3 
DOKUMENTENLISTE ................................................................................................................................. 11 
3.3.1 
Findings kurz und wissenschaftlicher formuliert ........................................................................... 12 
3.4 
AKTUALISIERUNG DER PERSONAS ............................................................................................................... 13 
3.4.1 
Fotios ............................................................................................................................................. 13 
3.4.2 
Alexandra ...................................................................................................................................... 13 
4 
UNIT 3 – IST-SOLL-VERGLEICH ............................................................................................................... 14 
4.1 
IST ZUSTAND ANALYSE SIPOC ................................................................................................................... 14 
4.2 
SOLL ZUSTAND ANALYSE SIPOC MIT SMARTGASTRO.AI ................................................................................. 14 
© 2026 Thomas Ballinari 
II 
4.3 
IST SOLL VERGLEICH KANO ANALYSE ........................................................................................................... 15 
4.4 
ERWARTETE RESULTATE ........................................................................................................................... 16 
4.4.1 
Food Waste ................................................................................................................................... 16 
4.4.2 
Planungszeit .................................................................................................................................. 17 
4.4.3 
Wirtschaftlicher Nutzen und ROI ................................................................................................... 17 
5 
UNIT 4 – ANFORDERUNGSMANAGEMENT ............................................................................................ 18 
5.1 
ANFORDERUNGEN AUS VORHANDENEM MATERIAL ABLEITEN ........................................................................... 18 
5.2 
REQUIREMENTS-TABELLE (MOSCOW) ....................................................................................................... 18 
6 
UNIT 5 – SPEZIFIKATION & MODELLIERUNG .......................................................................................... 20 
6.1 
STORY MAP ........................................................................................................................................... 20 
6.2 
USE CASE DIAGRAMM FÜR SMARTGASTRO.AI VISUELLES ARTEFAKT .................................................................. 21 
7 
UNIT 6 – LÖSUNGSENTENTWURF & PROTOTYPING................................................................................ 23 
7.1 
STORYBOARD ......................................................................................................................................... 23 
7.2 
PAPER PROTOTYPE (BESCHREIBUNG) .......................................................................................................... 24 
7.3 
DASHBOARD (HAUPTANSICHT) .................................................................................................................. 24 
7.4 
MID FIDELITY WIREFRAMES BESCHREIBUNG ................................................................................................. 26 
7.4.1 
Wireframe 1 Dashboard Desktop 1920 mal 1080 ......................................................................... 26 
7.4.2 
Wireframe 2 Nachvollziehbarkeit Modal 400 mal 300 .................................................................. 27 
7.4.3 
Wireframe 3 Override Modal 400 mal 350 ................................................................................... 27 
7.5 
BPMN-PROZESSDIAGRAMM (FORECAST-GENERIERUNG & NUTZUNG) ............................................................. 27 
7.5.1 
Lane 1:  
 System (KI-Pipeline) .................................................................................................... 27 
7.5.2 
Lane 2:  
 Küchenchef (Fotis) ....................................................................................................... 28 
7.5.3 
Lane 3: Externe Systeme (APIs) ..................................................................................................... 28 
7.6 
EVALUATION VON LÖSUNGSVARIANTEN ....................................................................................................... 28 
8 
FAZIT ..................................................................................................................................................... 30 
LITERATURVERZEICHNIS ................................................................................................................................. VII 
ANHANG ....................................................................................................................................................... VIII 
 
 
 
© 2026 Thomas Ballinari 
III 
Abkürzungsverzeichnis 
API - Application Programming Interface 
BA - Business Analysis 
BI - Business Intelligence 
CSV - Comma Separated Values 
DSG - Schweizer Datenschutzgesetz revidiert 
DSGVO - Datenschutz Grundverordnung der Europäischen Union 
ESG - Environmental Social Governance 
GUI - Graphical User Interface 
ISO - International Organization for Standardization 
IT - Information Technology 
KPI - Key Performance Indicator 
MAPE - Mean Absolute Percentage Error 
MAE - Mean Absolute Error 
ML - Machine Learning 
MVP - Minimum Viable Product 
NFR - Non Functional Requirement 
OOS - Out of Stock 
OKR - Objectives and Key Results 
PDF - Portable Document Format 
POS - Point of Sale 
RACI - Responsible Accountable Consulted Informed 
REST - Representational State Transfer 
ROI - Return on Investment 
SaaS - Software as a Service 
© 2026 Thomas Ballinari 
IV 
SIPOC - Suppliers Inputs Process Outputs Customers 
UML - Unified Modeling Language 
US - User Story 
UX - User Experience 
 
 
© 2026 Thomas Ballinari 
V 
Abbildungsverzeichnis 
Abbildung 1: Use Case Diagramm ........................................................................... 22 
Abbildung 2: Storyboard ........................................................................................... 23 
Abbildung 3: Prototype ............................................................................................. 24 
Abbildung 4: Dashboard ........................................................................................... 25 
 
 
 
 
© 2026 Thomas Ballinari 
VI 
Tabellenverzeichnis 
Tabelle 1: Stakeholder Liste und Einbindungspriorität ................................................ 4 
Tabelle 2: Stakeholder Map (Power Interest Matrix) ................................................... 5 
Tabelle 3: Empathie Karte Fotios Küchenchef ............................................................ 7 
Tabelle 4: Empathie Karte Alexandra Restaurantmanagerin ...................................... 8 
Tabelle 5: RACI Matrix für Pilot und Umsetzung von SmartGastro.ai ......................... 9 
Tabelle 6: Dokumentenliste für das Dokumentstudium ............................................ 12 
Tabelle 7: SIPOC Ist Zustand Planung und Produktion im Restaurantbetrieb .......... 14 
Tabelle 8: SIPOC Soll Zustand mit SmartGastro.ai .................................................. 15 
Tabelle 9: Kano Analyse der wichtigsten Features ................................................... 16 
Tabelle 10: Requirements Tabelle nach MoSCoW ................................................... 19 
Tabelle 11:Story Map mit Themes Epics User Stories und Releases ....................... 20 
Tabelle 12: Release Plan für SmartGastro.ai ........................................................... 21 
Tabelle 13: Entscheidung 1: Dashboard vs. CSV-Export ......................................... 29 
Tabelle 14: Entscheidung 2: Cloud (AWS) vs. On-Premise ...................................... 29 
 
 
© 2026 Thomas Ballinari 
1 
1 Einleitung 
SmartGastro.ai ist eine KI basierte Lösung zur Nachfrageprognose für das Schweizer 
Gastgewerbe. Ziel ist, Food Waste, operative Hektik und unnötige Kosten entlang der 
täglichen Produktions und Bestellentscheidungen messbar zu senken. Im Fokus ste-
hen Restaurants, die unter schwankender Nachfrage, Personaldruck und knappen 
Margen leiden und deshalb häufig entweder zu viel vorbereiten oder kurzfristig nach-
produzieren müssen. SmartGastro.ai unterstützt diese Betriebe mit datenbasierten 
Prognosen und Handlungsempfehlungen, damit Einkauf, Mise en place, Produktion 
und Personaleinsatz besser planbar werden. 
Das Vorhaben entstand aus dem AIBS Programm und verfügt über einen funktionsfä-
higen Prototyp in Version 3.3. Dieser Business Case dokumentiert die Units 1 bis 6 
und führt Schritt für Schritt von der Projekt und Kontextbeschreibung über Stakeholder 
Analyse und Bedarfserhebung bis zur Ist Analyse und dem Soll Vergleich. Darauf auf-
bauend werden Anforderungen erhoben und priorisiert, in eine agile Spezifikation 
überführt und in ein umsetzbares Lösungsdesign übersetzt. Das Ergebnis ist eine kon-
sistente, nachvollziehbare Entscheidungsgrundlage für die weitere Produktentwick-
lung und die Markteinführung, inklusive klarer Rollen, priorisierter Anforderungen, 
Story Map, User Stories sowie ersten Prototyp Artefakten. Der erwartete wirtschaftli-
che Nutzen basiert auf der Reduktion von Verschwendung und Fehlplanung. Daraus 
leiten sich ein realistischer Return on Investment und ein Break even Zeitraum von 12 
bis 18 Monaten ab, je nach Ausgangslage des Betriebs und Umsetzungsgrad.` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Projekt/SmartGastro.ai BUAN v3.0.docx`, body: `BUAN Business  Case SmartGastro.ai – KI-gestützte Nachfrageprognose für Schweizer Restaurants Team:  Thomas Ballinari, Hüseyin Özdemir, Simona Gersak , Stephanie Blaser Institution:  IPSO Bildung AG Modul:  BUAN.BA1A (Business Analysis) Abgabedatum:  14.03.2026 Inhaltsverzeichnis Abkürzungsverzeichnis III Abbildungsverzeichnis V Tabellenverzeichnis VI 1 Einleitung 1 2 UNIT 1 – Projekt- und Firmenbeschreibung + Stakeholder-Analyse 2 2.1 Firmenbeschreibung 2 2.1.1 Problemstellung 2 2.1.2 Lösung 3 2.1.3 Zielgruppe 3 2.1.4 Geschäftsmodell 3 2.2 Stakeholder Analyse 4 2.2.1 Stakeholder Liste 4 2.2.2 Stakeholder-Map (Power-Interest-Matrix) 5 2.3 Personas 5 2.3.1 Persona 1 Fotios Küchenchef und Geschäftsführer 5 2.3.2 Persona 2 Alexandra Restaurantmanagerin 6 2.3.3 Persona 3 Simona Stammgast 6 2.4 Empathy Maps 7 2.5 RACI-Matrix 8 3 Unit 2 Erhebungsmethoden Methodenwahl und Begründung 10 3.1 Methodenwahl & Begründung 10 3.2 Interview Leitfaden Fotios Küchenchef 10 3.2.1 Kontext 10 3.2.2 Pain Points 10 3.2.3 Soll Zustand und Anforderungen 11 3.2.4 Technologie und Adoption 11 3.3 Dokumentenliste 11 3.3.1 Findings kurz und wissenschaftlicher formuliert 12 3.4 Aktualisierung der Personas 13 3.4.1 Fotios 13 3.4.2 Alexandra 13 4 UNIT 3 – Ist-Soll-Vergleich 14 4.1 Ist Zustand Analyse SIPOC 14 4.2 Soll Zustand Analyse SIPOC mit SmartGastro.ai 14 4.3 Ist Soll Vergleich Kano Analyse 15 4.4 Erwartete Resultate 16 4.4.1 Food Waste 16 4.4.2 Planungszeit 17 4.4.3 Wirtschaftlicher Nutzen und ROI 17 5 UNIT 4 – Anforderungsmanagement 18 5.1 Anforderungen aus vorhandenem Material ableiten 18 5.2 Requirements-Tabelle (MoSCoW) 18 6 UNIT 5 – Spezifikation & Modellierung 20 6.1 Story Map 20 6.2 Use Case Diagramm für SmartGastro.ai visuelles Artefakt 21 7 UNIT   6   –   LösungsentEntwurf   &   Prototyping 23 7.1 Storyboard 23 7.2 Paper Prototype (Beschreibung) 24 7.3 Dashboard (Hauptansicht) 24 7.4 Mid Fidelity Wireframes Beschreibung 26 7.4.1 Wireframe 1 Dashboard Desktop 1920 mal 1080 26 7.4.2 Wireframe 2 Nachvollziehbarkeit Modal 400 mal 300 27 7.4.3 Wireframe 3 Override Modal 400 mal 350 27 7.5 BPMN-Prozessdiagramm (Forecast-Generierung & Nutzung) 27 7.5.1 Lane 1:  🤖  System (KI-Pipeline) 27 7.5.2 Lane 2:  👨 ‍ 🍳  Küchenchef (Fotis) 28 7.5.3 Lane 3: Externe Systeme (APIs) 28 7.6 Evaluation von Lösungsvarianten 28 8 Fazit 30 Literaturverzeichnis VII Anhang VIII Abkürzungsverzeichnis API - Application Programming Interface BA - Business Analysis BI - Business Intelligence CSV - Comma Separated Values DSG - Schweizer Datenschutzgesetz revidiert DSGVO - Datenschutz Grundverordnung der Europäischen Union ESG - Environmental Social Governance GUI - Graphical User Interface ISO - International Organization for Standardization IT - Information Technology KPI - Key Performance Indicator MAPE - Mean Absolute Percentage Error MAE - Mean Absolute Error ML - Machine Learning MVP - Minimum Viable Product NFR -  Non Functional  Requirement OOS - Out of Stock OKR - Objectives and Key Results PDF - Portable Document Format POS - Point of Sale RACI - Responsible Accountable Consulted Informed REST - Representational State Transfer ROI - Return on Investment SaaS - Software as a Service SIPOC - Suppliers Inputs Process Outputs Customers UML - Unified Modeling Language US - User Story UX - User  Experience Abbildungsverzeichnis Abbildung 1: Use Case Diagramm 22 Abbildung 2: Storyboard 23 Abbildung 3: Prototype 24 Abbildung 4: Dashboard 25 Tabellenverzeichnis Tabelle 1: Stakeholder Liste und Einbindungspriorität 4 Tabelle 2: Stakeholder Map (Power Interest Matrix) 5 Tabelle 3: Empathie Karte Fotios Küchenchef 7 Tabelle 4: Empathie Karte Alexandra Restaurantmanagerin 8 Tabelle 5: RACI Matrix für Pilot und Umsetzung von SmartGastro.ai 9 Tabelle 6: Dokumentenliste für das Dokumentstudium 12 Tabelle 7: SIPOC Ist Zustand Planung und Produktion im Restaurantbetrieb 14 Tabelle 8: SIPOC Soll Zustand mit SmartGastro.ai 15 Tabelle 9: Kano Analyse der wichtigsten Features 16 Tabelle 10: Requirements Tabelle nach MoSCoW 19 Tabelle 11:Story Map mit Themes Epics User Stories und Releases 20 Tabelle 12: Release Plan für SmartGastro.ai 21 Tabelle 13: Entscheidung 1: Dashboard vs. CSV-Export 29 Tabelle 14: Entscheidung 2: Cloud (AWS) vs. On-Premise 29 E inleitung SmartGastro.ai ist eine KI basierte Lösung zur Nachfrageprognose für das Schweizer Gastgewerbe. Ziel ist, Food  Waste , operative Hektik und unnötige Kosten entlang der täglichen  Produktions  und Bestellentscheidungen messbar zu senken. Im Fokus stehen Restaurants, die unter schwankender Nachfrage, Personaldruck und knappen Margen leiden und deshalb häufig entweder zu viel vorbereiten oder kurzfristig nachproduzieren müssen. SmartGastro.ai unterstützt diese Betriebe mit datenbasierten Prognosen und Handlungsempfehlungen, damit Einkauf, Mise en  place , Produktion und Personaleinsatz besser planbar werden. Das Vorhaben entstand aus dem  AIBS Programm  und verfügt über einen funktionsfähigen Prototyp in Version 3.3. Dieser Business Case dokumentiert die Units 1 bis 6 und führt Schritt für Schritt  von der Projekt  und Kontextbeschreibung über Stakeholder Analyse und Bedarfserhebung bis zur Ist Analyse und dem Soll Vergleich. Darauf aufbauend werden Anforderungen erhoben und priorisiert, in eine agile Spezifikation überführt und in ein umsetzbares Lösungsdesign übersetzt. Das Ergebnis ist eine konsistente, nachvollziehbare Entscheidungsgrundlage für die weitere Produktentwicklung und die Markteinführung, inklusive klarer Rollen, priorisierter Anforderungen, Story  Map , User Stories sowie ersten Prototyp Artefakten. Der erwartete wirtschaftliche Nutzen basiert auf der Reduktion von Verschwendung und Fehlplanung. Daraus leiten sich ein realistischer Return on Investment und ein  Break  even  Zeitraum von 12 bis 18 Monaten ab, je nach Ausgangslage des Betriebs und Umsetzungsgrad. UNIT 1 – Projekt- und Firmenbeschreibung + Stakeholder-Analyse Firmenbeschreibung SmartGastro.ai ist ein Startup Projekt, das im Dezember 2025 im Rahmen des  AIBS Lehrgangs  initiiert und als funktionsfähiger Prototyp in Version 3.3 umgesetzt wurde. Der Prototyp adressiert ein zentrales Problem im Schweizer Gastgewerbe: stark schwankende Nachfrage führt häufig zu Überproduktion, kurzfristigen Nachproduktionen und hoher operativer Belastung im Team. SmartGastro.ai nutzt datenbasierte Nachfrageprognosen, um Küchen und Service bei der täglichen Planung zu unterstützen und Entscheidungen zu Einkauf, Vorbereitung, Produktion und Personaleinsatz planbarer zu machen. Für das erste Quartal 2026 ist eine Pilotphase mit fünf bis zehn Schweizer Gastronomiebetrieben vorgesehen. Ziel der Pilotphase ist es, den Produktnutzen im realen Betrieb zu validieren, die Akzeptanz bei den Anwenderinnen und Anwendern zu prüfen und systematisch Anforderungen für die nächste Produktversion abzuleiten. Dabei werden klare Erfolgskriterien festgelegt, zum Beispiel Reduktion von Food  Waste , weniger Ad hoc Nachproduktion, stabilere Abläufe sowie messbare Zeit und Kosteneffekte. Die Ergebnisse der Pilotphase bilden die Grundlage für die Weiterentwicklung, die Priorisierung der Anforderungen und die Vorbereitung einer skalierbaren Markteinführung. Problemstellung Schweizer Restaurants stehen täglich vor dem Spannungsfeld zwischen unsicherer Nachfrage und knappen Ressourcen. Schwankungen nach Wochentag, Wetter, Saison und lokalen Anlässen führen dazu, dass Speisen entweder zu früh und zu viel produziert werden oder kurzfristig nachproduziert werden müssen. Beides erzeugt vermeidbare Kosten, Food  Waste  und Stress im Betrieb. Besonders kritisch ist die manuelle Planung, weil sie stark erfahrungsbasiert ist und neue Muster, etwa veränderte Gästeströme oder Event Effekte, nur verzögert berücksichtigt. Das Resultat sind Überschüsse, Engpässe und hektische Abläufe in Küche und Service, was sich zusätzlich negativ auf Qualität,   B elastung der Mitarbeiter  und Kundenzufriedenheit auswirken kann. Lösung SmartGastro.ai kombiniert operative Verkaufsdaten aus dem Kassensystem, Kontextdaten wie Wetterdaten von MeteoSchweiz sowie Event Informationen aus öffentlichen Event Quellen, um die Nachfrage  auf Tages  und Produktebene zu prognostizieren. Auf Basis von  Machine  Learning Modellen wie Gradient Boosting werden für 7 bis 14 Tage im Voraus erwartete Gästezahlen und Absatzmengen je Gericht geschätzt. Die Prognosen werden in konkrete Planungshinweise übersetzt, zum Beispiel Vorschläge für Produktionsmengen, Bestellmengen und zeitliche Vorbereitung. Der Nutzen entsteht nicht nur durch höhere Prognosegüte, sondern vor allem durch bessere Entscheidungsunterstützung im Alltag. Als Qualitätsmass wird die Prognosegüte mit MAPE oder ähnlichen Kennzahlen überwacht und im Pilotbetrieb laufend kalibriert, damit die Modelle pro Restaurant und Sortiment robuster werden. Zielgruppe Primäre Nutzerinnen und Nutzer sind Küchenchefs und Restaurantmanagerinnen, die täglich Entscheidungen zu Einkauf, Mise en  place , Produktion und Personal treffen. Sie profitieren von weniger Unsicherheit und klaren Handlungsempfehlungen, die sich in ihre bestehende Arbeitsroutine einfügen. Sekundäre Zielgruppe sind Anbieter von Kassensystemen und Gastro Software, die SmartGastro.ai als Ergänzungsmodul integrieren können, um ihren Kundinnen und Kunden datenbasierte Forecast Funktionen anzubieten. Dadurch entsteht ein skalierbarer Zugang zum Markt  über bestehende Vertriebs  und Integrationskanäle. Geschäftsmodell SmartGastro.ai wird als Software  as  a Service angeboten. Ein niederschwelliger Einstieg erfolgt über eine zeitlich begrenzte Testphase, damit Betriebe den Nutzen mit eigenen Daten validieren können. Das Premium Modell umfasst erweiterte Funktionen wie Personalplanung, Menü und  Produktions  Empfehlungen, Reporting sowie Integrationsoptionen in bestehende Systeme. Die Preisgestaltung kann als monatliches Abonnement pro Standort erfolgen, ergänzt um optionale Onboarding Leistungen und Integrationspakete. Damit wird ein wiederkehrender Umsatzstrom aufgebaut und zugleich eine klare Kopplung an messbaren Kundennutzen geschaffen. Stakeholder   Analyse Die Stakeholder Analyse für SmartGastro.ai identifiziert alle relevanten Anspruchsgruppen und bewertet deren Nutzen, Erwartungen sowie Einfluss und Interesse. Dadurch wird sichtbar, wer für die Pilotphase und die Produktentwicklung entscheidend ist, welche Anforderungen priorisiert werden müssen und wo Akzeptanz oder Umsetzungsrisiken entstehen können. Auf Basis der Bewertung wird festgelegt, wie stark einzelne Stakeholder einbezogen werden, damit Entscheidungen schneller getroffen werden und das Produkt im Restaurantalltag wirklich funktioniert. Stakeholder Liste Die Stakeholder Liste fasst die wichtigsten Gruppen strukturiert zusammen und zeigt pro Stakeholder den erwarteten Nutzen sowie eine grobe Einordnung von Einfluss und Interesse. Primäre Stakeholder sind die direkten Nutzerinnen und Nutzer im Restaurant, sekundäre Stakeholder unterstützen Skalierung und Integration, tertiäre Stakeholder sind indirekt betroffen oder profitieren gesellschaftlich. Die Liste dient als Grundlage für Interviews, Kommunikationsplanung und spätere  RACI Klärungen . Stakeholder Typ Interesse   /   Nutzen Power Interest Kategorie Küchenchef   (Fotios) &   Geschäftsführer Primär Präzise Mengen, weniger   Stress, Food- Waste  ↓ ROI, ESG-Berichterstattung Hoch Sehr   hoch Manager   Restaurantmanagerin   (Alexandra) Primär Kostensenkung, Gästezufriedenheit Mittel Sehr   hoch Manager   Closely Stammgast   (Simona) Tertiär Immer   verfügbare   Lieblingsgerichte,   Nachhaltigkeit Niedrig Mittel Keep   Informed POS-Partner   ( Waiterone ) Sekundär Integration, neue Kunden,   API-Nutzung Hoch Mittel Keep   Satisfied Lieferanten   (Food) Sekundär Planbarere Bestellungen, weniger Spontan-Abholungen Mittel Niedrig Monitor Mitarbeitende   (Service) Tertiär Weniger Hektik, optimierte   Personalplanung Niedrig Mittel Keep   Informed Umwelt   /   Gesellschaft Tertiär CO ₂ -Reduktion,   Nachhaltigkeit Niedrig Mittel Keep   Informed Investoren   /   IPSO Sekundär Machbarkeit,   Innovation,   ROI Hoch Mittel Keep   Satisfied Tabelle  1 :  Stakeholder Liste und Einbindungspriorität S takeholder-Map (Power-Interest-Matrix) Die Stakeholder  Map  ordnet die wichtigsten Anspruchsgruppen nach Macht und Interesse ein. Damit wird sichtbar, wer eng in die Pilotphase eingebunden werden muss, wer regelmässig informiert werden sollte und bei wem ein schlankes Monitoring genügt. Stakeholder mit hoher Macht und hohem Interesse werden eng begleitet, weil sie über Akzeptanz, Ressourcen und Entscheidungen im Betrieb bestimmen. Stakeholder mit hoher Macht, aber tieferem Interesse werden gezielt zufriedengestellt, damit Integration und Finanzierung stabil bleiben. Stakeholder mit niedriger Macht werden je nach Interesse informiert oder nur beobachtet. Interesse niedrig Interesse hoch Macht hoch Keep Satisfied POS Partner,  Investoren Manage  Closely  Owner, Küchenchef und Geschäftsführer, Restaurantmanagerin Macht niedrig Monitor Lieferanten, Umwelt Öffentlichkeit Keep  Informed  Mitarbeitende Service, Simona Stammgast Tabelle  2 :  Stakeholder  Map   ( Power Interest Matrix ) Personas Die folgenden Personas beschreiben typische Nutzerinnen und Nutzer sowie indirekt Betroffene von SmartGastro.ai. Sie helfen dabei, Ziele, Erwartungen und Schmerzpunkte greifbar zu machen und Anforderungen konsequent aus Sicht der Anwenderinnen und Anwender abzuleiten. Dadurch wird sichergestellt, dass die Lösung im Restaurantalltag praktikabel ist und der Nutzen in der Pilotphase messbar überprüft werden kann. Persona 1 Fotios Küchenchef und Geschäftsführer Alter 45 Jahre Rolle Geschäftsführer und Küchenchef im Restaurant Löwenburg in Lienz mit 185 Plätzen Berufserfahrung 18 Jahre Gastronomie Technologie Affinität hoch, nutzt Kassensystem regelmässig, arbeitet ungern mit Tabellenkalkulation Ziele Mise en  place  präzise planen, Food  Waste  um mindestens 20 Proze` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Projekt/SmartGastro.ai BUAN-BA1A für KI-Nachfrageprognose im Schweizer Gastgewerbe.docx`, body: `BUAN   Business   Case SmartGastro.ai   –   KI-gestützte   Nachfrageprognose   für Schweizer Restaurants Team: Thomas   Ballinari,   Hüseyin   Özdemir,   Simona   Gersak Institution: IPSO Bildung  AG Modul: BUAN.BA1A   (Business   Analysis) Abgabedatum: 14.03.2026 Inhaltsverzeichnis Executive   Summary 1 Unit   1   –   Projekt-   und   Firmenbeschreibung 2 Unit   2   –  Erhebungsmethoden 5 Unit   3   –   Ist-Soll- Vergleich 8 Unit   4   –  Anforderungsmanagement 11 Unit   5   –   Spezifikation   &   Modellierung 14 Unit   6   –   Lösungsentwurf   &   Prototyping 18 Anhänge 22 Executive   Summary SmartGastro.ai ist eine KI-basierte Lösung zur Nachfrageprognose, die darauf abzielt, Food-Waste  und  Stress   in  Schweizer Restaurants um 15–25 % zu reduzieren. Das Startup ging im Dezember 2025 aus dem AIBS-Programm hervor und verfügt über einen funktionsfähigen V3.3-Prototypen. Dieser Business Case deckt die Units 1–6 ab: Projektbeschreibung, Stakeholder-Analyse, Bedarfserhebung (Interviews + Dokumentenstudium), Ist-Analyse (SIPOC), Soll-Vergleich (Kano), Anforderungsmanagement (MoSCoW), agile Spezifikation (Story Map, User Stories) und Lösungsdesign (Storyboard, Wireframes, BPMN). Der erwartete ROI s ieht einen Break-Even in 12–18 Monaten vor, mit Einsparungen von ca. CHF 18'750 pro Restaurant und Jahr. UNIT   1   –   Projekt-   und   Firmenbeschreibung   +   Stakeholder- Analyse Firmenbeschreibung SmartGastro.ai ist ein Startup-Projekt, das im Dezember 2025 im Rahmen des AIBS-Lehrgangs   entwickelt   wurde.   Aktuell   liegt   ein   funktionsfähiger   Prototyp   (V3.3) vor, der für Q1 2026 in eine Pilotphase mit 5–10 Schweizer Gastronomiebetrieben überführt werden soll. Problemstellung Schweizer Restaurants werfen täglich 15–30 % produzierter Speisen weg. Manuelle Planung führt zu Stress  bei Nachproduktion , Überschuss und Engpässen. Lösung SmartGastro.ai kombiniert POS-Transaktionsdaten, Wetter (MeteoSchweiz) und Event-Feeds (Eventbrite), um mit XGBoost/LightGBM 7–14 Tage im Voraus Gastzahlen und Produktabsatz je Gericht vorherzusagen (MAPE < 10 %). Zielgruppe Primär:   Küchenchefs,   Restaurantmanager   (50–500   Gäste/Tag) Sekundär:   POS-Anbieter   (Waiterone,   Lightspeed,   Abacus) Geschäftsmodell Freemium   SaaS:   Core-Forecast   kostenlos   (14   Tage   Trial),   Personalplanung   &   Menü-Recommendation als Premium (CHF 199/Monat). Stakeholder-Analyse Stakeholder-Liste Stakeholder Typ Interesse   /   Nutzen Power Interest Kategorie Küchenchef   ( Fotios )  & Geschäftsführer Primär Präzise Mengen, weniger   Stress, Food-Waste ↓  ROI, ESG- Berichterstattung Hoch Sehr   hoch Manage r   Restaurantmanagerin   ( Alexandra ) Primär Kostensenkung,  Gästezufriedenheit Mittel Sehr   hoch Manage r   Closely Stammgast   (Simona) Tertiär Immer   verfügbare   Lieblingsgerichte,   Nachhaltigkei t Niedrig Mittel Keep   Informed POS-Partner   (Waiterone) Sekundär Integration, neue Kunden,   API-Nutzung Hoch Mittel Keep   Satisfied Stakeholder Typ Interesse   /   Nutzen Power Interest Kategorie Lieferanten   (Food) Sekundär Planbarere Bestellungen,   weniger Spontan-Abholungen Mittel Niedrig Monitor Mitarbeitende   (Service) Tertiär Weniger Hektik, optimierte   Personalplanung Niedrig Mittel Keep   Informed Umwelt   /   Gesellschaft Tertiär CO₂-Reduktion,   Nachhaltigkeit Niedrig Mittel Keep   Informed Investoren   /   IPSO Sekundär Machbarkeit,   Innovation,   ROI Hoch Mittel Keep   Satisfied Stakeholder-Map   (Power-Interest-Matrix) Interest  → P   ┌───────────────────┬───────────────────┐   o   H   │   POS-Par tner     │   Küchenchef   Fotis   │ w   i   │   (Waiterone)     │   Managerin   Alexandra    │ e   g   │   Investoren   │   (Manage r)     ├───────────────────┼───────────────────┤ ↓ │ │ │ L │ Lieferanten │ Simona  (Gast) │ o o │ (Monitor) │ Mitarbeitende │ w w │ │ (Keep  Informed) │ └───────────────────┴───────────────────┘  Low Interest High Interest Personas Persona   1:   Fotios   –   Küchenchef Alter:   45   Jahre Position:   Geschäftsführer ,   Rest. Löwenburg, CH-9464 Lienz   (1 85   Plätze) Erfahrung:   18   Jahre   Gastronomie Technologie-Affinität:   Hoch   (nutzt   POS,   aber   ungern   Excel) Ziele:   Mise-en-Place   exakt   planen,   Food-Waste   um   min.   20   %   senken, Stresslevel reduzieren. Pain   Points:   " Wochenend   ist   immer   Überraschung",   "Keine   Zeit   für   Excel",   "Wetter-Einfluss ist Bauchgefühl". Erwartung:   "Zeig   mir   heute ,   was   ich   morgen   vorbereiten   muss   –   und  warum." Persona   2:   Alexandra   –   Restaurantmanagerin Alter:   34   Jahre Position:   Chef de Service ,   Rest.  Löwenburg, CH-9464 Lienz Erfahrung:   12   Jahre   Technologie-Affinität:   Mittel   (nutzt   POS ,   Tableau) Ziele:   Gästezufriedenheit steig ern Pain Points:  Manuelle Waste-Reports, reaktive Personalplanung, fehlende  Transparenz Erwartung:  Dashboard mit KPIs: Forecast vs. Ist, Waste-Trend, ROI-Tracke r . Persona   3:   Simona   –   Stammgast Alter:   29   Jahre Position:   Marketing   Specialist,   Oberriet Verhalten:   2×   pro   Woche   Mittagessen   im   Restaurant Ziele:   Lieblingsgerichte   immer   verfügbar,   nachhaltiges   Restaurant   unterstützen. Pain   Points:   Ausverkaufte   Gerichte   ("Letzten   Donnerstag   war   das   Curry-Poulet  weg"). Erwartung:   "Das   Restaurant   pla nt   besser   →   mein   Gericht   ist   da." Empathy   Maps Empathy   Map:   Fotios (Küchenchef) Was   denkt   &   fühlt   er? "Ich will verlässliche Zahlen." / "Food-Waste nervt mich." /   "Stress vor dem Service." Was   hört   er? Gäste : " Zu lange Wartezeiten !" / Mitarbeiter: "Zu wen ig   vorbereitet!" Was   sieht   er? Überfüllte Kühlschränke, POS-Zahlen ohne Kontext, Excel- Listen. Was   sagt   &   tut   er? "Morgen mehr Schnitzel vorbereiten." / Bauchgefühl-Planung / Hektische Anrufe. Pains:   Unsicherheit,   Stress,   manueller   Aufwand.   |   Gains:   Präzise   Prognosen,   weniger   Stress,   Zeit   für   Kreativität. Empathy   Map:   Alexandra   ( Chef de  Service ) Was   denkt   &   fühlt   sie? "Zahlen lügen nicht." / "Waste kostet uns CHF   2'000/Monat." Was   hört   sie? Buchhaltung:   "Food-Cost   zu   hoch!"   /   Investoren:   "Zeig   ROI!" Was   sieht   sie? Waste-Reports in Excel, POS-Transaktionen,   Mitbewerber-Tools. Was   sagt   &   tut   sie? "Lasst uns Waste-Daten analysieren." / Weekly Reviews / Sucht   Tech-Lösungen. Pains:   Keine   Echtzeit-Transparenz,   manuelles   Reporting.   |   Gains:   Automatisierte   KPIs,   Kostensenkung,   ROI- Sicherheit. RACI-Matrix Aktivität Küchenchef ( Fotis ) Chef de Service  (Selin) IT/Dev-Team POS- Partner SmartGastro  Team Forecast-Modell   entwickeln C C I I R/A POS-Integration   einrichten C I R A C Trainingsdaten   bereitstellen R I C C I Dashboard   testen R R C      I R          -  Go-Live   genehmigen C I I I R Datenschutz   (DSGVO) I I R C C Legende:   R   =   Responsible,   A   =   Accountable,   C   =   Consulted,   I   =   Informed U NIT   2   –   Erhebungsmethoden   (Ist-   und   Soll- Zustand) Methodenwahl   &   Begründung Für   die   Anforderungserhebung   wurden   zwei   Methoden   gewählt: Stakeholder-Interview   (qualitativ):   Tiefes   Verständnis   der   Bedürfnisse   von Marco   und   Selin,   Exploration   unbekannter   Anforderungen,   Validierung   der  Personas. Dokumentstudium   (quantitativ/qualitativ):   Objektivierung   durch   existierende Daten (POS-Export, Waste-Logs), effizienter Zugang zu technischen Requirements   ohne   subjektive   Verzerrung. Interview-Leitfaden   (12   Fragen) Partner:   Fotios   (Küchenchef)   |   Dauer:   45   Min Kontext:   1.   Wie   sieht   Ihr   typischer   Planungsablauf   aus?   2.   Welche   Infos   nutzen Sie (Bauchgefühl, Wetter)? 3. Wie oft planen Sie falsch? Pain   Points:   4.   Größte   Stressoren?   5.   Auswirkung   von   Food-Waste?   6.   Einfluss externer Faktoren? Soll-Zustand:   7.   Was   muss   eine   Prognose   enthalten?   8.   Wie   wichtig   ist "Explainability"? 9. Würden Sie manuell überschreiben? Technologie:   10.   Wie   technikaffin   sind   Sie?   11.   Bedenken   bei   KI?   12.   Größter erwarteter Gewinn? Dokumentenliste Nr. Dokument Quelle Relevanz 1 POS- Transaktionsexport Restaurant Löwenburg Trainingsdaten,   Saisonalität 2 Artikelstamm POS- System Feature   Engineering   (Kategorien) 3 Waste-Logs  (manuell) Küche   (Q3- Q4) Validierung   Forecast- Genauigkeit 4 Waiterone   REST   API   v2 waiterone.com Technische   Integration 5 MeteoSchweiz   API opendata.swiss Kontext-Feature   Wetter 6 Eventbrite-Daten eventbrite.ch Kontext-Feature   Events 7 Praxisanalyse   SmartGastro AIBS-Projekt   Dez   2025 Grundlage   Business- Requirements Findings Aus   dem   Interview   mit   Fotis : Planung   zu 80   %  Bauchgefühl. Wetter-Korrelation   ("Sonnig   →   +20%   Gäste"). Vertrauensproblem:   "Will   wissen   warum   50   Schnitzel,   sonst   überschreibe   ich." Aus   dem   Dokumentstudium: Saisonalität:   Dez   +30%   (Weihnachten),   Juli   - 15%. Top-Produkte:   Schnitzel   (18%),   Cordon   Bleu   (14%). Waste:   Durchschn.   22%,   besonders   hoch   bei   Risotto   (35%). API: Waiterone bietet Realtime-Zugriff (<500ms). Aktualisierung   der   Personas Fotis :   Nutzt   kein   Excel   (Dashboard   muss   intuitiv   sein).   Braucht   "Explainability"   für Vertrauen. Override-Funktion essentiell. Alexandra :   Braucht   PDF-Export   für   Reporting.   Fokus   auf   ROI-Tracking   und   API-Zugriff   für  BI-Tools. UNIT   3   –   Ist-Soll- Vergleich Ist-Zustands-Analyse   (SIPOC) Supplier POS   (Waiterone , Fotis ,   Wetter-App,   Bauchgefühl ) Input POS-Daten (gestern), Wettervorhersage   (manuell), Kalender,   Gedächtnis Process 1.  Fotis  checkt Zahlen gestern. 2. Schaut Wetter-App. 3. Schätzt Gästezahl (+10%?). 4. Überschlägt Mengen   im Kopf. 5. Gibt Bestellung auf. 6. Team bereitet vor. Output Vorbereitete   Portionen   (oft   ±20%   Abweichung),   manuelles   Waste- Protokoll. Customer Service-Team,   Gäste,   Schwachstellen:  Manueller Prozess, Bauchgefühl statt Daten, keine Feedback-Schleife, hohe Varianz. Soll-Zustands-Analyse   (SIPOC   mit   SmartGastro.ai) Prozess-Verbesserung:  Automatisierter Forecast um 06:00 (Cron-Job), zentrales Dashboard, Explainable AI ("Warum 50 Schnitzel?"), Feedback-Loop durch Override-Tracking. Ziel: Waste-Reduktion auf 10-12%. Ist-Soll-Vergleich   (Kano-Analyse) Feature Kano- Typ Priorität Beschreibung POS- Datenimport Must- be Must Basishygiene,   ohne   Daten   kein   Forecast. 7-Tage-Forecast Must- be Must Core- Value. Genauigkeit   (MAPE   <10%) Performance Must Linearer   Zufriedenheitsanstieg. Explainability   ("Warum?") Performance Must Wichtig   für   Vertrauen. Override- Funktion Attractive Should Begeisterungsfaktor   für   den   Chef. Waste-Report   (PDF) Attractive Should Freut   das   Management. Zu   viele   Push- Alerts Reverse Won't Nervt   Nutzer. Erwartete   Resultate Food-Waste:   Reduktion   von   22%   auf   10– 12%. Planungszeit:   45   Min   →   15   Min   pro   Tag. ROI:   Kosteneinsparung   ca.   CH F   18'750   /   Jahr.   Break-Even   in   12–18   Monaten. UNIT   4   –   Anforderungsmanagement 4.2   Requirements-Tabelle   (MoSCoW) ID Ebene Beschreibung Priorität BR- 01 Business SmartGastro.ai   soll   Food-Waste   um   15–25   %   reduzieren. Must BR- 02 Business Produkt   muss   ROI-Break-Even   in   12–18   Monaten   erreichen. Must UR- 01 User Küchenchef   benötigt   Forecast-Übersicht   pro   Produkt   im   Dashboard. Must UR- 02 User Küchenchef   will   Prognose   manuell   überschreiben   können. Must UR- 05 User Küchenchef   will   Explainability   ("Warum?")   verstehen. Must SR-F- 01 Solution System   MUSS   täglich   POS-Transaktionen   importieren   (06:00). Must SR-F- 02 Solution System   MUSS   7-Tage-Forecast   berechnen   (MAPE   <10%). Must SR-NF- 02 Solution System   MUSS   DSGVO-konform   sein   (CH- Datacenter). Must SR-F- 04 Solution System  SOLL   Event-Daten   von Eventbrite   integrieren. Should SR-NF- 05 Solution System   SOLL   mandantenfähig   sein. Could UNIT   5   –   Spezifikation   &   Modellierung Story  Map Theme   1:   Nachfrageprognose   (Core) Epic   1.1   POS-Integration:   US-01   (MVP):   Täglicher   Auto-Import.   US-02   (R1): Multi-POS Support. Epic   1.2   Forecast-Engine:   US-03   (MVP):   7-Tage-Forecast.   US-04   (MVP):  Override-Funktion. Epic   1.3   Kontext:   US-05   (MVP):   Wetter-API.   US-06   (R1):   Event- Daten. Theme   2:   UX   &  Vertrauen Epic   2.1   Dashboard:   US-07   (MVP):   KPI-Kacheln.   US-08   (R1):   PDF- Export. Epic   2.2   Explainability:   US-09   (MVP):   "Warum"-Modal.   US-10   (R1):   Forecast   vs. Ist Chart. Theme   3:   Skalierung Epic   3.2   Multi-Tenancy:   US-12   (R1):   Mandantenverwaltung.   US-13   (MVP):  DSGVO-Compliance. Release- Plan Release Zeitraum Stories Ziel MVP   (Pilot) Q1   2026 US-01,   03,   04,   05,   07,   09,   13 Core   Product,   Compliance,   5-10   Piloten Release   1 Q2-Q3   2026 US-02,   06,   08,   10,   12 Skalierung,   Reporting,   Multi- POS Release   2 Q4   2026+ US-11   (Menü- Rec.) Zusatzfeatures Use-Case-Diagramm Akteure:   Fotis   (Chef  + Koch ),   Selin   ( Chef de Service ),   Admin,   Systeme   (POS,   Wetter). Use-Cases:  POS-Daten importieren, Forecast abrufen (includes Kontext-Daten), Prognose   überschreiben   (extends   Forecast),   Explainability   anzeigen,   Waste-Report  exportieren. UNIT   6   –   LösungsentEntwurf   &   Prototyping 91 Schnitzelverkauft KI-Delta(Diferrenz) KI-lernt und verbessert sich. 91 Schnitzelverkauft KI-Delta(Diferrenz) KI-lernt und verbessert sich. Storyboard Frame   1:   Fotis   loggt   sich   um   0 8 : 3 0   ein.   Dashboard   zeigt:   "Samstag,   bewölkt, 161 Gäste (+12%)". Frame   2:   Er   prüft   die   Tabelle.   "Schnitzel:   97 ".   Er   klickt   auf   Info-Icon.   Modal erklärt: "Samstag +  Bauernmarkt  = +20%". Frame   3:   Am Abend : Tagesabschluss hochladen   " 91   verkauft . Differenz  - 6 “ . "F` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Projekt/SmartGastro.ai Sprechtext für BUAN-Präsentation 2026.docx`, body: `BUAN   Praxisprojekt   –   SmartGastro.ai   | Sprechtext für die Präsentation Untertitel:  15 Minuten | 20 Folien |  Team:  Thomas Ballinari, Stephanie  Blaser, Hüseyin Özdemir, Simona Gersak Datum:  21.03.2026 |  Institution:  IPSO Bildung |  Modul:  BUAN.BA1A ÜBERSICHT  ZEITPLAN Sprecher Folien Zeit Inhalt /  Unit Thomas 1– 5 3:45   Min Unit   1:   Startup   &   Stakeholder Stephanie 6– 10 3:45   Min Unit   1–2:   Personas   &   Erhebung Hüseyin 11–15 3:45   Min Unit   3–5:   Analyse   &   Spezifikation Simona 16– 20 3:45   Min Unit   6   &   Business   Value GESAMT 20   Folien 15:00   Min Exakt   getaktet SPRECHTEXT   –   THOMAS   (Folien   1– 5) Folie   1:   TITELFOLIE   –   GECHILLT   /   TOT Folie   1:   TITELFOLIE   –   GECHILLT   /   TOT ⏱   0:00–0:30   (30   Sekunden) GECHILLT   in   Grün,   rechts   TOT   in   Rot] ⏱   0:00–0:30   (30   Sekunden) GECHILLT   in   Grün,   rechts   TOT   in   Rot] [Design-Beschreibung:    Schwarzer    Hintergrund,    links [Design-Beschreibung:    Schwarzer    Hintergrund,    links "Guten   Tag!   Herzlich   willkommen   zu   unserer   BUAN- Präsentation. Was du hier siehst – GECHILLT oder TOT – das ist die tägliche Realität in Schweizer Restaurant-Küchen. Entweder du hast 40 Schnitzel vorbereitet  und es kommen 97 Gäste – dann bist du TOT vor Stress. Oder du bereitest 100 Portionen vor und es kommen nur 50 Gäste – dann landest du GECHILLT mit einem Kühlschrank voller Food Waste. Wir   sind   Thomas,   Stephanie,   Hüseyin   und   Simona   –   und   wir   haben   die   Lösung: SmartGastro.ai ." Folie   2:   AGENDA   –   UNSER   ROTER   FADEN Folie   2:   AGENDA   –   UNSER   ROTER   FADEN ⏱   0:30–1:00   (30   Sekunden) rechts] ⏱   0:30–1:00   (30   Sekunden) rechts] [Visualisierung:   6   Units   als   Timeline   von   links   nach [Visualisierung:   6   Units   als   Timeline   von   links   nach "In   den   nächsten   15   Minuten   zeigen   wir   dir,   wie   wir   von   der   Problemanalyse   zur fertigen KI-Lösung gekommen sind – in genau 6 Schritten: Unit   1  –   Wer ist   SmartGastro.ai und   wer sind   die  Stakeholder? Unit 2  – Wie haben wir das Problem  erforscht? Unit   3  –   Wo sind   wir heute   und wo   wollen wir  hin? Unit   4   –   Was   sind   die   Anforderungen? Unit 5  – Wie sieht die agile Umsetzung  aus? Unit 6  – Und wie funktioniert der  Prototyp? Am Ende zeigen wir dir den Business Value in CHF – und warum diese  Lösung nicht nur clever, sondern auch rentabel ist." Folie   3:   UNIT   1   –   SMARTGASTRO.AI   –   DAS   STARTUP Folie   3:   UNIT   1   –   SMARTGASTRO.AI   –   DAS   STARTUP ⏱   1:00–2:00   (60   Sekunden) ⏱   1:00–2:00   (60   Sekunden) [Tabelle:   Firmensteckbrief   +   4   Kennzahlen- Kacheln] [Tabelle:   Firmensteckbrief   +   4   Kennzahlen- Kacheln] "SmartGastro.ai ist ein  KI-Start-up aus der Schweiz , gegründet im  Dezember 2025.   Aktuell haben wir einen funktionsfähigen  Prototyp in Version 3.3  – und im  Q1 2026  startet unsere Pilotphase. Unser Zielmarkt? Die  29'000 Restaurants in der Schweiz  – vor allem  KMU, die täglich mit Unsicherheit kämpfen: Wie viele Gäste kommen? Wie viel soll   ich vorbereiten? Die Technologie dahinter ist  XGBoost  und  LightGBM  für die Prognosen,  ein  React.js-Dashboard  für die Küchenchefs – und eine direkte Integration ins  Waiterone-Kassensystem . Die Zahlen sprechen für  sich: 22%   Food   Waste   –   das   ist   der   Schweizer   Durchschnitt. CHF 18'750  – so viel kann ein Restaurant pro Jahr  einsparen. Und die  Planungszeit  sinkt von  45 Minuten auf 15 Minuten  pro   Tag. Unser   Team   besteht   aus   4   Personen:   zwei   Entwickler,   ein   UX-Designer   und   ein Business Analyst – also wir hier." Folie   4:   UNIT   1   –   DAS   RISOTTO- DILEMMA Folie   4:   UNIT   1   –   DAS   RISOTTO- DILEMMA ⏱   2:00–3:00   (60   Sekunden) Stress-Icon und   Waste- Icon] ⏱   2:00–3:00   (60   Sekunden) Stress-Icon und   Waste- Icon] [Visualisierung:   40   Schnitzel   vs.   97   benötigt   –   mit [Visualisierung:   40   Schnitzel   vs.   97   benötigt   –   mit "Warum   braucht   es   SmartGastro.ai  überhaupt? Stell dir vor, es ist Donnerstag Mittag. Fotios, der Küchenchef, hat  heute Morgen  40 Schnitzel  vorbereitet – basierend auf seiner Erfahrung. Um 12:30 Uhr rennt die Servicekraft in die Küche:  'Wir brauchen 97 Schnitzel!' Was   passiert?   Hektik,   Stress,   Überstunden.   Gäste   warten.   Der   Chef   ist   genervt. Das Service-Team ist frustriert. Und am nächsten Tag? Da bereitet Fotios aus Vorsicht  120 Portionen  vor – und es kommen nur 60 Gäste. Resultat:  60 Portionen im Müll . Das ist Food  Waste. Die Zahlen sind  brutal: 4   bis   6 Stunden   pro Woche   verbringt Fotios   mit  Planung. CHF   27'000   pro   Jahr   gehen   als   Food   Waste   verloren. Und   das   alles   nur,   weil   Entscheidungen   nach   Bauchgefühl   getroffen  werden. Aber   es   gibt   Daten:   Wetter,   POS-Verkaufszahlen,   Events   in   der   Region.   Sie werden nur nicht genutzt." Folie   5:   UNIT   1   –   STAKEHOLDER- ÖKOSYSTEM Folie   5:   UNIT   1   –   STAKEHOLDER- ÖKOSYSTEM ⏱   3:00–3:45   (45   Sekunden) ⏱   3:00–3:45   (45   Sekunden) [Macht/Interesse-Matrix   mit   4   Quadranten] [Macht/Interesse-Matrix   mit   4   Quadranten] "Wer ist von SmartGastro.ai betroffen? Wir haben eine  Stakeholder- Analyse  gemacht – und da gibt es vier Gruppen: Oben rechts – hohe Macht, hohes Interesse : Das sind die  Key Player .  Der  Owner ,   der   Küchenchef   Fotios   und   unser   Dev   Team .   Sie   entscheiden,   ob   das Projekt fliegt oder nicht. Oben links – hohe Macht, niedriges Interesse : Die  POS-Partner  wie Waiterone,   die   Investoren   und   der   Eidgenössische   Datenschutzbeauftragte . Die müssen wir zufriedenstellen, aber sie mischen sich nicht ins   Tagesgeschäft  ein. Unten rechts – niedrige Macht, hohes Interesse : Die  Managerin   Alexandra , das  Service-Team  und die  Gäste . Sie profitieren direkt – haben aber wenig  Entscheidungsmacht. Unten links – Monitor only :  Lieferanten  und  Umwelt . Sie sind betroffen,  aber wir müssen sie nur beobachten. Diese Matrix zeigt uns: Wir müssen vor allem Fotios und den Owner  überzeugen – und die POS-Partner technisch integrieren." [ÜBERGABE   AN   STEPHANIE] [ÜBERGABE   AN   STEPHANIE] Thomas:   "Damit   übergebe   ich   an   Stephanie   –   sie   zeigt   dir   jetzt   unsere   drei Personas  und wie wir das Problem erforscht haben." SPRECHTEXT   –   STEPHANIE   (Folien   6– 10) Folie   6:   UNIT   1   –   UNSERE   3  PERSONAS Folie   6:   UNIT   1   –   UNSERE   3  PERSONAS ⏱   3:45–4:45   (60   Sekunden) Simona] ⏱   3:45–4:45   (60   Sekunden) Simona] [3   Persona-Karten   nebeneinander:   Fotios,   Alexandra, [3   Persona-Karten   nebeneinander:   Fotios,   Alexandra, "Danke Thomas! Wir haben drei  Personas  entwickelt – echte Menschen mit echten Bedürfnissen. Persona   1: Fotios, 45 Jahre, Küchenchef und  Geschäftsführer. Sein Ziel?  20% Food Waste reduzieren . Sein größter Schmerz?  Zeit .  Er verbringt jeden Morgen 45 Minuten mit Bauchgefühl-Planung – und liegt trotzdem oft daneben. Persona 2:   Alexandra, 34 Jahre,  Restaurantmanagerin. Sie will  ROI sehen  und  Effizienz steigern . Ihr Problem?  Fehlende Transparenz . Sie hat keine Datenbasis für Personalplanung und Einkauf.   Alles läuft über Excel und Bauchgefühl. Persona 3: Simona, 29 Jahre,  Stammgast. Sie liebt das Restaurant – aber ihr Lieblingsgericht ist oft  ausverkauft . Ihr  Pain Point?  'Heute leider nicht verfügbar'  – das nervt sie. Diese   drei   Personas   zeigen:   SmartGastro.ai   ist   nicht   nur   ein   Tech-Tool   –   es   löst  echte Probleme für echte Menschen ." Folie   7:   UNIT   1   –   EMPATHY   MAP   –   FOTIOS Folie   7:   UNIT   1   –   EMPATHY   MAP   –   FOTIOS ⏱   4:45–5:30   (45   Sekunden) ⏱   4:45–5:30   (45   Sekunden) [4   Quadranten:   Sieht,   Hört,   Schmerzen,   Gewinne] [4   Quadranten:   Sieht,   Hört,   Schmerzen,   Gewinne] "Wir   haben   für   Fotios   eine   Empathy   Map   erstellt   –   um   wirklich   zu   verstehen, was in seinem Kopf vorgeht. Was sieht er?  Überfüllte Kühlschränke am Abend – oder leere Regale um 12 Uhr. Beides ist schlecht. Was   hört   er?   Kostendruck   vom   Owner.   Beschwerden   vom   Service:   'Wir   haben kein Schnitzel mehr!'  Und von Lieferanten:  'Kannst du nicht  besser   planen?' Seine   Schmerzen?   Unsicherheit.   Stress.   Verschwendung.   Und   das   Gefühl,   die Kontrolle zu verlieren. Seine Gewinne mit SmartGastro.ai?  Ein  14-Tage-Forecast . Klare  Zahlen statt Bauchgefühl. Und  30 Minuten Zeitersparnis  jeden Morgen – die er für Qualität nutzen kann. Diese Map hat uns geholfen, die Benutzeroberfläche genau auf  Fotios  zuzuschneiden." Folie   8:   UNIT   1   –   RACI- MATRIX Folie   8:   UNIT   1   –   RACI- MATRIX ⏱   5:30–6:00   (30   Sekunden) ⏱   5:30–6:00   (30   Sekunden) [Tabelle   mit   Aufgaben   und   Rollen:   R,   A,   C,   I] [Tabelle   mit   Aufgaben   und   Rollen:   R,   A,   C,   I] "Wer   macht   was?   Die  RACI-Matrix   zeigt   die  Verantwortlichkeiten. POS-Integration : Hüseyin ist Responsible , Thomas ist Accountable ,  Waiterone wird  Consulted , das Restaurant wird  Informed . ML-Modell   Training :   Thomas   ist   R ,   Hüseyin   ist   A ,   Simona   hilft   als   C , Alexandra wird  I . Dashboard-Entwicklung :   Simona   ist   R ,   Hüseyin   ist   A ,   Fotios   wird   C   für   UX- Feedback. DSGVO-Compliance :   Thomas   ist   R   und   A ,   der   EDÖB   wird   C ,   alle   anderen werden  I . Diese   Matrix   sorgt   dafür,   dass   jeder   weiß,   wer   entscheidet,   wer   liefert   –   und   wer nur informiert werden muss." Folie   9:   UNIT   2   –   WIE   WIR   WISSEN   GEWONNEN   HABEN Folie   9:   UNIT   2   –   WIE   WIR   WISSEN   GEWONNEN   HABEN ⏱   6:00–6:45   (45   Sekunden) ⏱   6:00–6:45   (45   Sekunden) [2   Icons:   Interview   +   Dokumentenstudium] [2   Icons:   Interview   +   Dokumentenstudium] "Wie haben wir das Problem wirklich verstanden? Wir haben zwei  Erhebungsmethoden  kombiniert: Methode   1: Strukturiertes  Experteninterview. Wir haben einen  Interview-Leitfaden  mit  12 Fragen  entwickelt – und 45 bis 60 Minuten mit Fotios gesprochen. Themen: Planungsprozess,  Datenquellen, Schmerzpunkte, Wünsche. Methode 2:  Dokumentenstudium. Wir haben  12 Dokumente  analysiert: POS-Exporte, Waste- Protokolle, Waiterone-API-Dokumentation, MeteoSchweiz-Daten, Event-Kalender. Warum beide Methoden? Das  Interview  liefert  implizites Wissen  – Dinge, die Fotios nicht in Excel schreibt. Das  Dokumentenstudium  liefert  Fakten  und Zahlen  – die Basis für unsere KI-Modelle. Diese Kombination hat uns  5 zentrale Erkenntnisse  gebracht – die zeige  ich dir jetzt." Folie   10:   UNIT   2   –   TOP   5   ERKENNTNISSE   AUS   ERHEBUNG Folie   10:   UNIT   2   –   TOP   5   ERKENNTNISSE   AUS   ERHEBUNG ⏱   6:45–7:30   (45   Sekunden) ⏱   6:45–7:30   (45   Sekunden) [5   nummerierte   Kästen   mit   Icons] [5   nummerierte   Kästen   mit   Icons] "Hier   sind   die   Top   5   Findings   aus   unserer  Erhebung: Hoher  Planungsaufwand. 4   bis 6   Stunden pro Woche   – das ist   fast ein ganzer   Arbeitstag   nur für  Planung. POS-Daten sind vorhanden – werden aber nicht  genutzt. Waiterone   speichert   jeden   Verkauf   –   aber   niemand   macht   Prognosen  daraus. Wetter   ist   ein bekannter   Faktor   – wird   aber  ignoriert. Fotios   sagt:   'Bei   Sonnenschein   kommen   mehr   Gäste.'   Aber   er   hat   keine Wetterdaten in seinem Planungsprozess. KI wird nur akzeptiert, wenn sie erklärbar  ist. Fotios   will   nicht   einfach   eine   Zahl   sehen   –   er   will   wissen   warum .   Das   nennt man  Explainable AI  oder  XAI . Datenschutz ist  Pflicht. DSGVO und das Schweizer Datenschutzgesetz  nDSG  – das heißt: Hosting  in der Schweiz, keine Daten ins Ausland, klare Einwilligungen. Diese 5 Punkte haben unsere  Requirements  in Unit 4  definiert." [ÜBERGABE   AN   HÜSEYIN] [ÜBERGABE   AN   HÜSEYIN] Stephanie: "Hüseyin zeigt dir jetzt, wie wir vom Ist-Zustand zum Soll- Zustand   kommen – und was die KI leisten muss." SPRECHTEXT   –   HÜSEYIN   (Folien   11– 15) Folie   11:   UNIT   3   –   SIPOC   –   VOM   BAUCHGEFÜHL   ZUR   KI- PROGNOSE Folie   11:   UNIT   3   –   SIPOC   –   VOM   BAUCHGEFÜHL   ZUR   KI- PROGNOSE ⏱   7:30–8:30   (60   Sekunden) ⏱   7:30–8:30   (60   Sekunden) [2   SIPOC-Tabellen:   IST   vs.   SOLL] [2   SIPOC-Tabellen:   IST   vs.   SOLL] "Danke   Stephanie!   Jetzt   wird's   analytisch.   Wir   haben   eine   SIPOC- Analyse   gemacht – das ist ein Prozess-Tool aus dem Lean Management. Ist-Zustand – Manueller  Prozess: Supplier : POS-Zahlen von Waiterone, Excel-Sheets, Fotios' Gedächtnis.   Input : Verkaufszahlen von letzter Woche, Wetterblick aus dem Fenster.  Process : Fotios schätzt:  'Letzten Donnerstag kamen 80 Gäste, also bereite ich 90 Portionen vor.' Output : Mise-en-Place-Liste – oft zu viel oder zu  wenig. Customer : Küchenchef, Service, Gäste – alle  frustriert. Resultat:   22%   Food   Waste ,   kein   Feedback-Loop,   keine   Datenanalyse. Soll-Zustand – Mit  SmartGastro.ai: Supplier : Waiterone API, MeteoSchweiz API, Eventbrite, Google Calendar.  Input : 1 bis 3 Jahre historische POS-Daten, 7-Tage-Wettervorhersage,  Events im Umkreis. Process : KI-Modell rechnet jeden Morgen um 02:00 Uhr –  XGBoost  analysiert  Patterns. Output :   Dashboard   um   06:00   Uhr   mit   7-Tage-Forecast   pro   Gericht ,   inkl. Erklärung : 'Sonnig + Stadtfest = +20%  Risotto'. Customer :   Fotios   sieht   den   Forecast,   kann   ihn   überschreiben   (Override)   – und abends gibt's einen  Ist-Soll-Vergleich . Resultat:  MAPE unter 10%  – das heißt, die Prognose liegt im Schnitt maximal 10% daneben." Folie   12:   UNIT   3   –   KANO- ANALYSE Folie   12:   UNIT   3   –   KANO- ANALYSE ⏱   8:30–9:15   (45   Sekunden) ⏱   8:30–9:15   (45   Sekunden) [Kano-Kurve   mit   Features   in   4   Kategorien] [Kano-Kurve   mit   F` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Projekt/SmartGastro.ai Sprechtext für BUAN-Präsentation 2026v2.0.docx`, body: `BUAN   Praxisprojekt   –   SmartGastro.ai   | Sprechtext für die Präsentation Untertitel:  12 Minuten | 20 Folien |  Team:  Thomas Ballinari, Stephanie  Blaser, Hüseyin Özdemir, Simona Gersak Datum:  21.03.2026 |  Institution:  IPSO Bildung |  Modul:  BUAN.BA1A ÜBERSICHT  ZEITPLAN Sprecher Folien Zeit Inhalt /  Unit Thomas 1– 5 3:00   Min Unit   1:   Startup   &   Stakeholder Stephanie 6– 10 3:00   Min Unit   1–2:   Personas   &   Erhebung Hüseyin 11–15 3:00   Min Unit   3–5:   Analyse   &   Spezifikation Simona 16– 20 3:00   Min Unit   6   &   Business   Value GESAMT 20   Folien 12:00   Min Kompakt   getaktet SPRECHTEXT   –   THOMAS   (Folien   1– 5) Folie   1:   TITELFOLIE   –   GECHILLT   /   TOT Folie   1:   TITELFOLIE   –   GECHILLT   /   TOT ⏱   0:00–0:20   (20   Sekunden) GECHILLT   in   Grün,   rechts   TOT   in   Rot] ⏱   0:00–0:20   (20   Sekunden) GECHILLT   in   Grün,   rechts   TOT   in   Rot] [Design-Beschreibung:    Schwarzer    Hintergrund,    links [Design-Beschreibung:    Schwarzer    Hintergrund,    links "Grüezi! GECHILLT oder TOT – das ist die Realität in Schweizer  Restaurant-Küchen. Entweder ihr habt zu wenig vorbereitet – TOT vor Stress. Oder zu viel – GECHILLT mit Food Waste. Wir sind Thomas, Stephanie, Hüseyin und Simona, und wir präsentieren euch die Lösung:  SmartGastro.ai ." Folie   2:   AGENDA   –   UNSER   ROTER   FADEN Folie   2:   AGENDA   –   UNSER   ROTER   FADEN ⏱   0:20–0:40   (20   Sekunden) rechts] ⏱   0:20–0:40   (20   Sekunden) rechts] [Visualisierung:   6   Units   als   Timeline   von   links   nach [Visualisierung:   6   Units   als   Timeline   von   links   nach "In   12   Minuten   führen   wir   euch   von   der   Problemanalyse   zur   KI-Lösung   –   in   6 Schritten:   Unit   1   –   Startup   &   Stakeholder.   Unit   2   –   Erhebung.   Unit   3   –   Ist- Soll. Unit 4 –   Anforderungen. Unit 5 –   Agile Umsetzung. Unit 6 – Prototyp.   Am  Ende: Business Value in CHF." Folie   3:   UNIT   1   –   SMARTGASTRO.AI   –   DAS   STARTUP Folie   3:   UNIT   1   –   SMARTGASTRO.AI   –   DAS   STARTUP ⏱   0:40–1:20   (40   Sekunden) ⏱   0:40–1:20   (40   Sekunden) [Tabelle:   Firmensteckbrief   +   4   Kennzahlen- Kacheln] [Tabelle:   Firmensteckbrief   +   4   Kennzahlen- Kacheln] "SmartGastro.ai – KI-Start-up aus der Schweiz, gegründet Dezember  2025. Prototyp V3.3, Pilotphase Q1 2026. Zielmarkt: 29'000 Schweizer Restaurants – KMU mit Planungsunsicherheit. Technologie:  XGBoost, React.js, Waiterone-Integration . Die Zahlen:  22% Food Waste  im Schnitt,  CHF 18'750 Ersparnis  pro Restaurant/Jahr, Planungszeit sinkt von  45 auf 15 Minuten  täglich." Folie   4:   UNIT   1   –   DAS   RISOTTO- DILEMMA Folie   4:   UNIT   1   –   DAS   RISOTTO- DILEMMA ⏱   1:20–2:00   (40   Sekunden) Stress-Icon und   Waste- Icon] ⏱   1:20–2:00   (40   Sekunden) Stress-Icon und   Waste- Icon] [Visualisierung:   40   Schnitzel   vs.   97   benötigt   –   mit [Visualisierung:   40   Schnitzel   vs.   97   benötigt   –   mit "Warum SmartGastro.ai? Donnerstag Mittag: Küchenchef bereitet  40  Schnitzel  vor – um 12:30 Uhr braucht's plötzlich  97 . Hektik, Stress. Nächster Tag: Aus Vorsicht  120 Portionen , nur 60 Gäste kommen –  60 Portionen im Müll . Die Zahlen:  4–6h Planung/Woche, CHF 27'000 Waste/Jahr, alles nach Bauchgefühl . Aber Daten sind da: Wetter, POS, Events – werden nur nicht  genutzt." Folie   5:   UNIT   1   –   STAKEHOLDER- ÖKOSYSTEM Folie   5:   UNIT   1   –   STAKEHOLDER- ÖKOSYSTEM ⏱   2:00–2:40   (40   Sekunden) ⏱   2:00–2:40   (40   Sekunden) [Macht/Interesse-Matrix   mit   4   Quadranten] [Macht/Interesse-Matrix   mit   4   Quadranten] "Stakeholder-Analyse in der Macht/Interesse-Matrix:  Key Player  (hohe  Macht, hohes Interesse): Owner, Küchenchef Fotios, Dev Team – sie entscheiden.  Keep Satisfied  (hohe Macht, niedrig Interesse): POS-Partner Waiterone, Investoren,   EDÖB.   Keep   Informed   (niedrig   Macht,   hoch   Interesse):   Managerin, Service, Gäste.  Monitor : Lieferanten, Umwelt. Fazit: Fotios & Owner überzeugen, POS-Partner technisch integrieren." [ÜBERGABE   AN   STEPHANIE] [ÜBERGABE   AN   STEPHANIE] Thomas: "Stephanie zeigt euch jetzt unsere  Personas  und die  Erhebung." SPRECHTEXT   –   STEPHANIE   (Folien   6– 10) Folie   6:   UNIT   1   –   UNSERE   3  PERSONAS Folie   6:   UNIT   1   –   UNSERE   3  PERSONAS ⏱   2:40–3:10   (30   Sekunden) Simona] ⏱   2:40–3:10   (30   Sekunden) Simona] [3   Persona-Karten   nebeneinander:   Fotios,   Alexandra, [3   Persona-Karten   nebeneinander:   Fotios,   Alexandra, "Drei  Personas :  Fotios (45, Küchenchef)  – Ziel: 20% weniger  Waste, Problem: Zeitaufwand 45 Min/Tag.  Alexandra (34, Managerin)  – Ziel: ROI & Transparenz, Problem: keine Datenbasis.  Simona (29, Stammgast)  – Ziel: Verfügbarkeit,   Problem:   'ausverkauft'   nervt.   SmartGastro.ai   löst   echte   Probleme für echte Menschen." Folie   7:   UNIT   1   –   EMPATHY   MAP   –   FOTIOS Folie   7:   UNIT   1   –   EMPATHY   MAP   –   FOTIOS ⏱   3:10–3:35   (25   Sekunden) ⏱   3:10–3:35   (25   Sekunden) [4   Quadranten:   Sieht,   Hört,   Schmerzen,   Gewinne] [4   Quadranten:   Sieht,   Hört,   Schmerzen,   Gewinne] " Empathy Map Fotios : Sieht überfüllte Kühlschränke oder leere Regale.  Hört Kostendruck, Beschwerden. Schmerzen: Unsicherheit, Stress, Kontrollverlust. Gewinne   mit   SmartGastro.ai:   14-Tage-Forecast,   30   Min   Zeitersparnis/Tag,   klare Zahlen statt Bauchgefühl. Diese Map prägte unsere UX." Folie   8:   UNIT   1   –   RACI- MATRIX Folie   8:   UNIT   1   –   RACI- MATRIX ⏱   3:35–3:55   (20   Sekunden) ⏱   3:35–3:55   (20   Sekunden) [Tabelle   mit   Aufgaben   und   Rollen:   R,   A,   C,   I] [Tabelle   mit   Aufgaben   und   Rollen:   R,   A,   C,   I] " RACI-Matrix  klärt Verantwortlichkeiten: POS-Integration (Hüseyin R,  Thomas A,   Waiterone   C),   ML-Training   (Thomas   R/A,   Simona   C),   Dashboard   (Simona   R, Hüseyin A, Fotios C), DSGVO (Thomas R/A, EDÖB C). Jeder weiß: wer entscheidet, wer liefert, wer informiert wird." Folie   9:   UNIT   2   –   WIE   WIR   WISSEN   GEWONNEN   HABEN Folie   9:   UNIT   2   –   WIE   WIR   WISSEN   GEWONNEN   HABEN ⏱   3:55–4:20   (25   Sekunden) ⏱   3:55–4:20   (25   Sekunden) [2   Icons:   Interview   +   Dokumentenstudium] [2   Icons:   Interview   +   Dokumentenstudium] " Zwei Erhebungsmethoden :  Experteninterview  mit 12 Fragen, 45–60  Min   mit Fotios – liefert implizites Wissen.  Dokumentenstudium : 12 Dokumente (POS-Exporte, Waste-Protokolle, Waiterone-API, Wetter-Daten) – liefert Fakten. Diese Kombi brachte 5 zentrale Erkenntnisse." Folie   10:   UNIT   2   –   TOP   5   ERKENNTNISSE   AUS   ERHEBUNG Folie   10:   UNIT   2   –   TOP   5   ERKENNTNISSE   AUS   ERHEBUNG ⏱   4:20–5:00   (40   Sekunden) ⏱   4:20–5:00   (40   Sekunden) [5   nummerierte   Kästen   mit   Icons] [5   nummerierte   Kästen   mit   Icons] " Top 5 Findings : 1. Hoher Planungsaufwand (4–6h/Woche). 2. POS- Daten vorhanden, aber ungenutzt. 3. Wetter bekannter Faktor, wird ignoriert. 4. KI nur akzeptiert    mit    Explainability    (XAI)    –    'Warum?'-Frage    muss    beantwortet werden.   5.   Datenschutz   Pflicht:   nDSG,   Hosting   Schweiz .   Diese   Punkte   definierten unsere Requirements." [ÜBERGABE   AN   HÜSEYIN] [ÜBERGABE   AN   HÜSEYIN] Stephanie: "Hüseyin zeigt euch jetzt Ist-Soll und was die KI leisten  muss." SPRECHTEXT   –   HÜSEYIN   (Folien   11– 15) Folie   11:   UNIT   3   –   SIPOC   –   VOM   BAUCHGEFÜHL   ZUR   KI- PROGNOSE Folie   11:   UNIT   3   –   SIPOC   –   VOM   BAUCHGEFÜHL   ZUR   KI- PROGNOSE ⏱   5:00–5:45   (45   Sekunden) ⏱   5:00–5:45   (45   Sekunden) [2   SIPOC-Tabellen:   IST   vs.   SOLL] [2   SIPOC-Tabellen:   IST   vs.   SOLL] " SIPOC-Analyse  – Prozess-Tool aus Lean Management.  Ist-Zustand :  Input POS-Zahlen + Bauchgefühl, Prozess = Fotios schätzt, Output = oft falsch, Resultat 22% Waste, kein Feedback.  Soll-Zustand mit SmartGastro.ai : Input 1–3 Jahre POS, Wetter, Events. Prozess: KI rechnet um 02:00 Uhr (XGBoost). Output: Dashboard 06:00 Uhr mit 7-Tage-Forecast + Erklärung ('Sonnig +15%, Stadtfest   +20%').   Override   möglich,   Ist-Soll-Vergleich   abends.   Resultat:   MAPE <10% ." Folie   12:   UNIT   3   –   KANO- ANALYSE Folie   12:   UNIT   3   –   KANO- ANALYSE ⏱   5:45–6:20   (35   Sekunden) ⏱   5:45–6:20   (35   Sekunden) [Kano-Kurve   mit   Features   in   4   Kategorien] [Kano-Kurve   mit   Features   in   4   Kategorien] " Kano-Analyse  – Feature-Priorisierung.  Must-be : POS-Import täglich, 7- Tage-Forecast, nDSG-Datenschutz.  Performance : MAPE <10%, XAI (Erklärbarkeit), Override-Funktion.  Delighters : Wetter-Icon, ROI-Dashboard, PDF-Export.  Reverse  (wollen User NICHT): Vollautomatische Bestellung → Kontrollverlust. Strategie: MVP zuerst Must-be, dann Performance, dann Delighters." Folie   13:   UNIT   4   –  ANFORDERUNGSMANAGEMENT Folie   13:   UNIT   4   –  ANFORDERUNGSMANAGEMENT ⏱   6:20–7:00   (40   Sekunden) WON'T   2] ⏱   6:20–7:00   (40   Sekunden) WON'T   2] [MoSCoW-Kacheln:   MUST   12,   SHOULD   7,   COULD   1, [MoSCoW-Kacheln:   MUST   12,   SHOULD   7,   COULD   1, " 22 Requirements nach MoSCoW .  MUST (12) : POS-Integration  (Waiterone API),   7-Tage-Forecast,   Dashboard   Web-App,   XAI,   Override,   Datenschutz   (AWS Zürich, nDSG), Rollenkonzept.  SHOULD (7) : PDF-Export, Wetter-Integration (MeteoSchweiz), Events (Eventbrite), Ist-Soll-Vergleich, KPI-Dashboard.  COULD   (1) :   Mandantenfähigkeit   für   Skalierung.   WON'T   (2) :   Vollautomatische Bestellung,   Push-Alerts   alle   10   Min.   Damit   liefern   wir   MVP   Q1   2026   mit   12  MUST-Features." Folie   14:   UNIT   5   –   STORY   MAP Folie   14:   UNIT   5   –   STORY   MAP ⏱   7:00–7:25   (25   Sekunden) farbcodiert   nach   Release] ⏱   7:00–7:25   (25   Sekunden) farbcodiert   nach   Release] [Horizontal:   Themes,   vertikal:   Epics   →   User   Stories, [Horizontal:   Themes,   vertikal:   Epics   →   User   Stories, " Story Map  für agile Umsetzung.  MVP Q1 2026 : US-01 POS-Import, US-03 7-Tage-Forecast   (MAPE   <15%   initial),   US-04   Override,   US-07   Dashboard,   US-09 Explainability.  Release 1 Q2–Q3 : US-02 Multi-POS, US-06 Events, US- 08 Waste-Report.  Release 2 Q4+ : US-11 Menü-Recommendation, US-12 Mandantenfähigkeit. Iterativ: erst Minimum, dann erweitern." Folie   15:   UNIT   5   –   USER   STORY   IM   DETAIL   –   US- 03 Folie   15:   UNIT   5   –   USER   STORY   IM   DETAIL   –   US- 03 ⏱   7:25–8:00   (35   Sekunden) ⏱   7:25–8:00   (35   Sekunden) [User   Story   Karte   mit   INVEST- Check] [User   Story   Karte   mit   INVEST- Check] " US-03 – 7-Tage-Forecast  im Detail. Story: Als Küchenchef will ich 7- Tage-Forecast pro Produkt für effiziente Mise-en-Place.   Akzeptanzkriterien:   Abruf <2 Sek, MAPE <10% nach 3 Monaten, Override verfügbar.  INVEST-Check : Independent (unabhängig umsetzbar), Negotiable (Genauigkeit verhandelbar), Valuable (weniger Waste), Estimable (40 Storypoints), Small (1 Sprint), Testable (mit echten Daten). Diese Story ist unser Kernstück." [ÜBERGABE   AN   SIMONA] [ÜBERGABE   AN   SIMONA] Hüseyin: "Simona zeigt euch jetzt den  Prototyp  und den  Prozess." SPRECHTEXT   –   SIMONA   (Folien   16– 20) Folie   16:   UNIT   6   –   STORYBOARD   –   EIN   MORGEN   MIT  SMARTGASTRO.AI Folie   16:   UNIT   6   –   STORYBOARD   –   EIN   MORGEN   MIT  SMARTGASTRO.AI ⏱   8:00–8:40   (40   Sekunden) ⏱   8:00–8:40   (40   Sekunden) [3   Frames:   Morgen,   Override,   Abend- Kontrolle] [3   Frames:   Morgen,   Override,   Abend- Kontrolle] " Storyboard   –   Ein   Tag   mit   SmartGastro.ai .   Frame   1,   08:30   Uhr :   Fotios   öffnet Dashboard – 161 Gäste erwartet, Umsatz CHF 7'285, Risotto 45 Portionen empfohlen. Erklärung: Sonnig +15%, Samstag +10%, Stadtfest +20%.  Frame   2 : Fotios korrigiert auf 40 Portionen (Override), gibt Feedback – KI lernt.  Frame 3, 23:00 Uhr : Ist-Soll-Vergleich: Forecast 40, verkauft 38 – nur 2 Portionen übrig,   Waste   minimiert.   SmartGastro.ai   ist   intelligenter   Assistent,   kein   Autopilot." Folie   17:   UNIT   6   –   DASHBOARD- WIREFRAME Folie   17:   UNIT   6   –   DASHBOARD- WIREFRAME ⏱   8:40–9:15   (35   Sekunden) und   Tabelle] ⏱   8:40–9:15   (35   Sekunden) und   Tabelle] [Screenshot:   Dashboard   im   Dark   Mode   mit   KPI- Karten [Screenshot:   Dashboard   im   Dark   Mode   mit   KPI- Karten " Dashboard Engine V3.3  – unser Prototyp. Header: Datum, Wetter  (Wolke, 4°C), Event, Profil.  4 KPI-Karten : Gäste Forecast 161, Umsatz CHF 7'285, Wetter, Training Status.  Mise-en-Place-Tabelle : 5 Gerichte (Schnitzel, Cordon Bleu, Curry, Bratwurst, Geschnetzeltes) mit FORECAST, IST (MANUELL Override), DIFFERENZ, POS UPLOAD. Rechts:  Explainability-Modal  – 'Warum?'-Button zeigt 'Sonnig +15%, Samstag +10%, Stadtfest +20%'. Dark Mode gegen Bildschirmblendung in hellen Küchen." Folie   18:   UNIT   6   –   TECHNISCHE   ARCHITEKTUR   &  BPMN Folie   18:   UNIT   6   –   TECHNISCHE   ARCHITEKTUR   &  BPMN ⏱   9:15–9:40   (25   Sekunden) ⏱   9:15–9:40   (25   Sekunden) [3   Swimlanes:   System,   Küchenchef,   Externe   APIs] [3   Swimlanes:   System,   Küchenchef,   Externe   APIs] " BPMN-Prozess   &   Tech   Stack .   System-Lane :   Cron   02:00   Uhr   startet   →   POS-Import (Waiterone   API) → Wetter (MeteoSchweiz) → Events (Eventbrite) → ML rechnet (XGBoost/LightGBM) → DB (PostgreSQL) → Dashboard 06:00 Uhr.  Küchenchef-Lane : Fotios öffnet, sieht Forecast, Override? Feedback  → Ground Truth für Retraining.  Tech Stack : React.js, Python FastAPI, AWS Zürich (DSGVO/nDSG). Setup läuft vollautomatisch." Folie   19:   BUSINESS   VALUE   –   MEHRWERT   IN   CHF Folie   19:   BUSINESS   VALUE   –   MEHRWERT   IN   CHF ⏱   9:40–10:15   (35   Sekunden) ⏱   9:40–10:15   (35   Sekunden) [2   Säulen:   Kosten   vs.   Nutzen,   ROI-Badge   200%] [2   Säulen:   Kosten   vs.   Nutzen,   ROI-Badge   200%] " Rechnet sich das? Kosten Jahr 1: CHF 16'088  – SaaS CHF  3'588 (299/Mona` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Projekt/Stakholder_Interview_Löwenburg.pdf`, body: `Stakeholder & Interview 
Für unseren Usecase nehmen wir ein reales Restaurant. 
Diese Restaurant habe ich (Thomas Ballinari) 10 Jahre geführt und danach meinem langjährigen 
griechischen Koch (Fotios Kleidaras) übergeben. 
Restaurant Löenburg, Oberbüchel 3a, CH-9464 Lienz 
www.löwenburg-lienz.ch 
Es ist ein Ausﬂugsrestaurant in der Schweiz direkt an der dreiländergrenze FL-A-CH am Rheindamm. 
45 Plätze im Restaurant, 80 Plätze im Saal, 45 Plätze auf der gedeckten Terrasse, 100 Plätze im 
Lindengarten. 
Besticht durch grossen Parkplatz, Elektroladestation für E-Bikes, grosser Kinderspielplatz, 
durchgehend warme Küche, mitten im Grünen. 
Stakeholder 
Typ 
Ziel/Interesse 
Ein-
fluss 
Bedarf/Erfolgskri-
terium 
Geschäftsführer 
Fotios K. 
Intern 
primär 
Profitabilität, weniger 
Waste 
hoch 
Einsparungen, ROI, 
einfache Nutzung 
Restaurantmanag
er 
Alexandra H. 
Intern 
primär 
Planungssicherheit 
mittel/
hoch 
klare Reports, 
Forecast-Vertrauen 
Küchenchef 
Fotios K. 
Intern 
primär 
Mise-en-Place, 
Qualität 
hoch 
präzise Empfehlungen 
+ Override 
Software-
Entwickler 
HüseyinÖ. 
Extern 
primär 
 
Umsetzung 
Pilotprojekt 
mittel 
POS-Daten 
Hardware 
Budget 
POS-Anbieter 
(Waiterone) 
Int.&ext. 
sekundär 
Integration/Partnersch
aft 
mittel 
stabile API, geringer 
Support-Aufwand 
Mitarbeitende 
12 Aushilfen 
Intern 
tertiär 
weniger Stress 
mittel 
fairere Lastspitzen, 
bessere Planung 
Gäste 
Biker, Tagesgäste 
mit Auto, Vereine, 
Anlässe
Extern 
tertiär 
Verfügbarkeit/Qualität 
mittel 
weniger Wartezeit, 
gewünschte Gerichte 
Umwelt/ESG 
Extern 
tertiär 
weniger Waste/CO₂ 
niedri
g 
messbarer 
Waste-Rückgang 
 
22.2.2 Interviewleitfaden 12 Fragen an Thomas, Fotios und Alexandra vom 16.01.2026 
1. Wie planen Sie heute Mise-en-Place / Produktionsmengen? 
Wir nehmen Reservationsdaten und Wettervorhersagen, natürlich ob es ein Werktag 
oder Wochenende ist. Z.B. bei heissem Wetter mehr Fitnessteller. Produzieren so viel 
vor, wie wir im Minimum denken das könnte etwa laufen. Dabei gibt es meist 
Stresssituationen während des Service, da viel nachgemacht werden muss. 
2. Was sind die häufigsten Gründe für Überproduktion? (Wetter, Events, Ferien, etc.) 
Wetterumbrüche, Flaute werktags, lokale Events,  
3. Welche Produkte verursachen am meisten Waste / Out-of-Stock? 
Frischprodukte wie Salat, Fisch. Speisen die nicht wieder aufgewärmt werden können, 
z.B. Risotto 
4. Wie weit im Voraus planen Sie (heute) – 1 Tag, 3 Tage, 1 Woche? 
Mo. für Mi. – Fr.---- Do. für Sa.+ So.   
5. Welche Kennzahlen schauen Sie regelmäßig an? 
Umsatzzahlen, Kartenreiter, POS-Produkte, POS-Tagesablauf 
6. Welche Daten sind im POS vorhanden und wie zuverlässig sind sie? 
Die Daten sind zu 100% zuverlässig, müssen 100% für Buchhaltung und 
Steuererklärung stimmen, was nicht getippt wird wurde entweder durch Servicekraft 
gestohlen oder ist Schwarzgeld. 
7. Was wäre für Sie ein „guter Forecast“ (Genauigkeit/Format)? 
Ein Produktdatenblatt mit Tag/Datum, Wettervorhersage, Eventdaten, die erwarteten 
Produktverkäufe auf +5/-5 prognostiziert. 
8. Welche Entscheidungen würden Sie der KI erlauben, welche nicht? 
Entscheidungen keine, Forcast ausprobieren, wenn stimmig benutzen.  
9. Welche Erklärung würden Sie brauchen, um einer Empfehlung zu vertrauen? 
Aufgrund welcher Daten die Empfehlung erstellt wurde, z.B. Es ist Sonntag, schlechtes 
Wetter, Schützenfest in Sennwald, heute brauchst Du nur 8 Cordon bleu anstatt 65 bei 
einem schönen Sonntag. 
10. Wie würden Sie Warnungen/Alerts bevorzugen (Dashboard, Mail, WhatsApp, gar nicht)? 
Dashboard 
11. Welche Risiken sehen Sie bei KI-Planung? 
Zu grosses Vertrauen anstatt eigenen Instinkt/Erfahrung zu benutzen. 
12. Was wäre ein klarer Grund, SmartGastro nach 30 Tagen weiter zu nutzen? 
Foodwaste spürbar rückläufig, Tiefe Fehlerquote, Trainierbarkeit der KI, ROI 
Lizenzgebühren lassen sich mind. decken. 
 
Lieber Fotis, liebe Alexandra herzlichen Dank für das Interview.` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/SmartGastro.ai BUAN v2.0 2.pdf`, body: `BUAN Business Case 
SmartGastro.ai – KI-gestützte Nachfrageprognose 
für Schweizer Restaurants 
 
Team: Thomas Ballinari, Hüseyin Özdemir, Simona Gersak, Stephanie Blaser 
 
Institution: IPSO Bildung AG 
 
Modul: BUAN.BA1A (Business Analysis) 
 
Abgabedatum: 14.03.2026 
 
I 
Inhaltsverzeichnis 
ABKÜRZUNGSVERZEICHNIS ............................................................................................................................. III 
ABBILDUNGSVERZEICHNIS ............................................................................................................................... V 
TABELLENVERZEICHNIS ................................................................................................................................... VI 
1 
EINLEITUNG............................................................................................................................................. 1 
2 
UNIT 1 – PROJEKT- UND FIRMENBESCHREIBUNG + STAKEHOLDER-ANALYSE .......................................... 2 
2.1 
FIRMENBESCHREIBUNG .............................................................................................................................. 2 
2.1.1 
Problemstellung .............................................................................................................................. 2 
2.1.2 
Lösung ............................................................................................................................................. 3 
2.1.3 
Zielgruppe ........................................................................................................................................ 3 
2.1.4 
Geschäftsmodell .............................................................................................................................. 3 
2.2 
STAKEHOLDER ANALYSE.............................................................................................................................. 4 
2.2.1 
Stakeholder Liste ............................................................................................................................. 4 
2.2.2 
Stakeholder-Map (Power-Interest-Matrix) ...................................................................................... 5 
2.3 
PERSONAS ............................................................................................................................................... 5 
2.3.1 
Persona 1 Fotios Küchenchef und Geschäftsführer ......................................................................... 5 
2.3.2 
Persona 2 Alexandra Restaurantmanagerin ................................................................................... 6 
2.3.3 
Persona 3 Simona Stammgast ......................................................................................................... 6 
2.4 
EMPATHY MAPS ....................................................................................................................................... 7 
2.5 
RACI-MATRIX .......................................................................................................................................... 8 
3 
UNIT 2 ERHEBUNGSMETHODEN METHODENWAHL UND BEGRÜNDUNG .............................................. 10 
3.1 
METHODENWAHL & BEGRÜNDUNG ............................................................................................................ 10 
3.2 
INTERVIEW LEITFADEN FOTIOS KÜCHENCHEF ................................................................................................ 10 
3.2.1 
Kontext .......................................................................................................................................... 10 
3.2.2 
Pain Points ..................................................................................................................................... 11 
3.2.3 
Soll Zustand und Anforderungen ................................................................................................... 11 
3.2.4 
Technologie und Adoption ............................................................................................................. 11 
3.3 
DOKUMENTENLISTE ................................................................................................................................. 11 
3.3.1 
Findings kurz und wissenschaftlicher formuliert ........................................................................... 12 
3.4 
AKTUALISIERUNG DER PERSONAS ............................................................................................................... 13 
3.4.1 
Fotios ............................................................................................................................................. 13 
3.4.2 
Alexandra ...................................................................................................................................... 13 
4 
UNIT 3 – IST-SOLL-VERGLEICH ............................................................................................................... 14 
4.1 
IST ZUSTAND ANALYSE SIPOC ................................................................................................................... 14 
4.2 
SOLL ZUSTAND ANALYSE SIPOC MIT SMARTGASTRO.AI ................................................................................. 15 
II 
4.3 
IST SOLL VERGLEICH KANO ANALYSE ........................................................................................................... 15 
4.4 
ERWARTETE RESULTATE ........................................................................................................................... 17 
4.4.1 
Food Waste ................................................................................................................................... 17 
4.4.2 
Planungszeit .................................................................................................................................. 17 
4.4.3 
Wirtschaftlicher Nutzen und ROI ................................................................................................... 17 
5 
UNIT 4 – ANFORDERUNGSMANAGEMENT ............................................................................................ 18 
5.1 
ANFORDERUNGEN AUS VORHANDENEM MATERIAL ABLEITEN ........................................................................... 18 
5.2 
REQUIREMENTS-TABELLE (MOSCOW) ....................................................................................................... 18 
6 
UNIT 5 – SPEZIFIKATION & MODELLIERUNG .......................................................................................... 20 
6.1 
STORY MAP ........................................................................................................................................... 20 
6.2 
USE CASE DIAGRAMM FÜR SMARTGASTRO.AI VISUELLES ARTEFAKT .................................................................. 21 
7 
UNIT 6 – LÖSUNGSENTENTWURF & PROTOTYPING................................................................................ 23 
7.1 
STORYBOARD ......................................................................................................................................... 23 
7.2 
PAPER PROTOTYPE (BESCHREIBUNG) .......................................................................................................... 24 
7.3 
DASHBOARD (HAUPTANSICHT) .................................................................................................................. 24 
7.4 
MID FIDELITY WIREFRAMES BESCHREIBUNG ................................................................................................. 26 
7.4.1 
Wireframe 1 Dashboard Desktop 1920 mal 1080 ......................................................................... 26 
7.4.2 
Wireframe 2 Nachvollziehbarkeit Modal 400 mal 300 .................................................................. 27 
7.4.3 
Wireframe 3 Override Modal 400 mal 350 ................................................................................... 27 
7.5 
BPMN-PROZESSDIAGRAMM (FORECAST-GENERIERUNG & NUTZUNG) ............................................................. 27 
7.5.1 
Lane 1:  
 System (KI-Pipeline) .................................................................................................... 27 
7.5.2 
Lane 2:  
 Küchenchef (Fotis) ....................................................................................................... 28 
7.5.3 
Lane 3: Externe Systeme (APIs) ..................................................................................................... 28 
7.6 
EVALUATION VON LÖSUNGSVARIANTEN ....................................................................................................... 28 
8 
FAZIT ..................................................................................................................................................... 30 
LITERATURVERZEICHNIS ................................................................................................................................. VII 
ANHANG ....................................................................................................................................................... VIII 
 
 
 
III 
Abkürzungsverzeichnis 
API - Application Programming Interface 
BA - Business Analysis 
BI - Business Intelligence 
CSV - Comma Separated Values 
DSG - Schweizer Datenschutzgesetz revidiert 
DSGVO - Datenschutz Grundverordnung der Europäischen Union 
ESG - Environmental Social Governance 
GUI - Graphical User Interface 
ISO - International Organization for Standardization 
IT - Information Technology 
KPI - Key Performance Indicator 
MAPE - Mean Absolute Percentage Error 
MAE - Mean Absolute Error 
ML - Machine Learning 
MVP - Minimum Viable Product 
NFR - Non Functional Requirement 
OOS - Out of Stock 
OKR - Objectives and Key Results 
PDF - Portable Document Format 
POS - Point of Sale 
RACI - Responsible Accountable Consulted Informed 
REST - Representational State Transfer 
ROI - Return on Investment 
SaaS - Software as a Service 
IV 
SIPOC - Suppliers Inputs Process Outputs Customers 
UML - Unified Modeling Language 
US - User Story 
UX - User Experience 
 
 
V 
Abbildungsverzeichnis 
Abbildung 1: Use Case Diagramm ........................................................................... 22 
Abbildung 2: Storyboard ........................................................................................... 23 
Abbildung 3: Prototype ............................................................................................. 24 
Abbildung 4: Dashboard ........................................................................................... 25 
 
 
 
 
VI 
Tabellenverzeichnis 
Tabelle 1: Stakeholder Liste und Einbindungspriorität ................................................ 4 
Tabelle 2: Stakeholder Map (Power Interest Matrix) ................................................... 5 
Tabelle 3: Empathie Karte Fotios Küchenchef ............................................................ 7 
Tabelle 4: Empathie Karte Alexandra Restaurantmanagerin ...................................... 8 
Tabelle 5: RACI Matrix für Pilot und Umsetzung von SmartGastro.ai ......................... 9 
Tabelle 6: Dokumentenliste für das Dokumentstudium ............................................ 12 
Tabelle 7: SIPOC Ist Zustand Planung und Produktion im Restaurantbetrieb .......... 14 
Tabelle 8: SIPOC Soll Zustand mit SmartGastro.ai .................................................. 15 
Tabelle 9: Kano Analyse der wichtigsten Features ................................................... 16 
Tabelle 10: Requirements Tabelle nach MoSCoW ................................................... 19 
Tabelle 11:Story Map mit Themes Epics User Stories und Releases ....................... 20 
Tabelle 12: Release Plan für SmartGastro.ai ........................................................... 21 
Tabelle 13: Entscheidung 1: Dashboard vs. CSV-Export ......................................... 29 
Tabelle 14: Entscheidung 2: Cloud (AWS) vs. On-Premise ...................................... 29 
 
 
1 
1 Einleitung 
SmartGastro.ai ist eine KI basierte Lösung zur Nachfrageprognose für das Schweizer 
Gastgewerbe. Ziel ist, Food Waste, operative Hektik und unnötige Kosten entlang der 
täglichen Produktions und Bestellentscheidungen messbar zu senken. Im Fokus ste-
hen Restaurants, die unter schwankender Nachfrage, Personaldruck und knappen 
Margen leiden und deshalb häufig entweder zu viel vorbereiten oder kurzfristig nach-
produzieren müssen. SmartGastro.ai unterstützt diese Betriebe mit datenbasierten 
Prognosen und Handlungsempfehlungen, damit Einkauf, Mise en place, Produktion 
und Personaleinsatz besser planbar werden. 
Das Vorhaben entstand aus dem AIBS Programm und verfügt über einen funktionsfä-
higen Prototyp in Version 3.3. Dieser Business Case dokumentiert die Units 1 bis 6 
und führt Schritt für Schritt von der Projekt und Kontextbeschreibung über Stakeholder 
Analyse und Bedarfserhebung bis zur Ist Analyse und dem Soll Vergleich. Darauf auf-
bauend werden Anforderungen erhoben und priorisiert, in eine agile Spezifikation 
überführt und in ein umsetzbares Lösungsdesign übersetzt. Das Ergebnis ist eine kon-
sistente, nachvollziehbare Entscheidungsgrundlage für die weitere Produktentwick-
lung und die Markteinführung, inklusive klarer Rollen, priorisierter Anforderungen, 
Story Map, User Stories sowie ersten Prototyp Artefakten. Der erwartete wirtschaftli-
che Nutzen basiert auf der Reduktion von Verschwendung und Fehlplanung. Daraus 
leiten sich ein realistischer Return on Investment und ein Break even Zeitraum von 12 
bis 18 Monaten ab, je nach Ausgangslage des Betriebs und Umsetzungsgrad. 
 
 
 
 
 
 
 
 
 
2 
2 UNIT 1 – Projekt- und Firmenbeschreibung + Stakeholder-Ana-
lyse 
2.1 Firmenbeschreibung 
SmartGastro.ai ist ein Startup Projekt, das im Dezember 2025 im Rahmen des AIBS 
Lehrgangs initiiert u` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/SmartGastro.ai BUAN v2.0 3.docx`, body: `BUAN Business  Case SmartGastro.ai – KI-gestützte Nachfrageprognose für Schweizer Restaurants Team:  Thomas Ballinari, Hüseyin Özdemir, Simona Gersak , Stephanie Blaser Institution:  IPSO Bildung AG Modul:  BUAN.BA1A (Business Analysis) Abgabedatum:  14.03.2026 Inhaltsverzeichnis Abkürzungsverzeichnis III Abbildungsverzeichnis V Tabellenverzeichnis VI 1 Einleitung 1 2 UNIT 1 – Projekt- und Firmenbeschreibung + Stakeholder-Analyse 2 2.1 Firmenbeschreibung 2 2.1.1 Problemstellung 2 2.1.2 Lösung 3 2.1.3 Zielgruppe 3 2.1.4 Geschäftsmodell 3 2.2 Stakeholder Analyse 4 2.2.1 Stakeholder Liste 4 2.2.2 Stakeholder-Map (Power-Interest-Matrix) 5 2.3 Personas 5 2.3.1 Persona 1 Fotios Küchenchef und Geschäftsführer 5 2.3.2 Persona 2 Alexandra Restaurantmanagerin 6 2.3.3 Persona 3 Simona Stammgast 6 2.4 Empathy Maps 7 2.5 RACI-Matrix 8 3 Unit 2 Erhebungsmethoden Methodenwahl und Begründung 10 3.1 Methodenwahl & Begründung 10 3.2 Interview Leitfaden Fotios Küchenchef 10 3.2.1 Kontext 10 3.2.2 Pain Points 11 3.2.3 Soll Zustand und Anforderungen 11 3.2.4 Technologie und Adoption 11 3.3 Dokumentenliste 11 3.3.1 Findings kurz und wissenschaftlicher formuliert 12 3.4 Aktualisierung der Personas 13 3.4.1 Fotios 13 3.4.2 Alexandra 13 4 UNIT 3 – Ist-Soll-Vergleich 14 4.1 Ist Zustand Analyse SIPOC 14 4.2 Soll Zustand Analyse SIPOC mit SmartGastro.ai 15 4.3 Ist Soll Vergleich Kano Analyse 15 4.4 Erwartete Resultate 17 4.4.1 Food Waste 17 4.4.2 Planungszeit 17 4.4.3 Wirtschaftlicher Nutzen und ROI 17 5 UNIT 4 – Anforderungsmanagement 18 5.1 Anforderungen aus vorhandenem Material ableiten 18 5.2 Requirements-Tabelle (MoSCoW) 18 6 UNIT 5 – Spezifikation & Modellierung 20 6.1 Story Map 20 6.2 Use Case Diagramm für SmartGastro.ai visuelles Artefakt 21 7 UNIT   6   –   LösungsentEntwurf   &   Prototyping 23 7.1 Storyboard 23 7.2 Paper Prototype (Beschreibung) 24 7.3 Dashboard (Hauptansicht) 24 7.4 Mid Fidelity Wireframes Beschreibung 26 7.4.1 Wireframe 1 Dashboard Desktop 1920 mal 1080 26 7.4.2 Wireframe 2 Nachvollziehbarkeit Modal 400 mal 300 27 7.4.3 Wireframe 3 Override Modal 400 mal 350 27 7.5 BPMN-Prozessdiagramm (Forecast-Generierung & Nutzung) 27 7.5.1 Lane 1:  🤖  System (KI-Pipeline) 27 7.5.2 Lane 2:  👨 ‍ 🍳  Küchenchef (Fotis) 28 7.5.3 Lane 3: Externe Systeme (APIs) 28 7.6 Evaluation von Lösungsvarianten 28 8 Fazit 30 Literaturverzeichnis VII Anhang VIII Abkürzungsverzeichnis API - Application Programming Interface BA - Business Analysis BI - Business Intelligence CSV -  Comma   Separated  Values DSG - Schweizer Datenschutzgesetz revidiert DSGVO - Datenschutz Grundverordnung der Europäischen Union ESG - Environmental Social Governance GUI - Graphical User Interface ISO - International Organization for Standardization IT - Information Technology KPI - Key Performance Indicator MAPE - Mean Absolute Percentage Error MAE - Mean Absolute Error ML - Machine Learning MVP - Minimum Viable Product NFR -  Non Functional  Requirement OOS - Out of Stock OKR - Objectives and Key Results PDF - Portable Document Format POS - Point of Sale RACI - Responsible Accountable Consulted Informed REST - Representational State Transfer ROI - Return on Investment SaaS - Software as a Service SIPOC - Suppliers Inputs Process Outputs Customers UML - Unified Modeling Language US - User Story UX - User  Experience Abbildungsverzeichnis Abbildung 1: Use Case Diagramm 22 Abbildung 2: Storyboard 23 Abbildung 3: Prototype 24 Abbildung 4: Dashboard 25 Tabellenverzeichnis Tabelle 1: Stakeholder Liste und Einbindungspriorität 4 Tabelle 2: Stakeholder Map (Power Interest Matrix) 5 Tabelle 3: Empathie Karte Fotios Küchenchef 7 Tabelle 4: Empathie Karte Alexandra Restaurantmanagerin 8 Tabelle 5: RACI Matrix für Pilot und Umsetzung von SmartGastro.ai 9 Tabelle 6: Dokumentenliste für das Dokumentstudium 12 Tabelle 7: SIPOC Ist Zustand Planung und Produktion im Restaurantbetrieb 14 Tabelle 8: SIPOC Soll Zustand mit SmartGastro.ai 15 Tabelle 9: Kano Analyse der wichtigsten Features 16 Tabelle 10: Requirements Tabelle nach MoSCoW 19 Tabelle 11:Story Map mit Themes Epics User Stories und Releases 20 Tabelle 12: Release Plan für SmartGastro.ai 21 Tabelle 13: Entscheidung 1: Dashboard vs. CSV-Export 29 Tabelle 14: Entscheidung 2: Cloud (AWS) vs. On-Premise 29 E inleitung SmartGastro.ai ist eine KI basierte Lösung zur Nachfrageprognose für das Schweizer Gastgewerbe. Ziel ist, Food  Waste , operative Hektik und unnötige Kosten entlang der täglichen  Produktions  und Bestellentscheidungen messbar zu senken. Im Fokus stehen Restaurants, die unter schwankender Nachfrage, Personaldruck und knappen Margen leiden und deshalb häufig entweder zu viel vorbereiten oder kurzfristig nachproduzieren müssen. SmartGastro.ai unterstützt diese Betriebe mit datenbasierten Prognosen und Handlungsempfehlungen, damit Einkauf, Mise en  place , Produktion und Personaleinsatz besser planbar werden. Das Vorhaben entstand aus dem  AIBS Programm  und verfügt über einen funktionsfähigen Prototyp in Version 3.3. Dieser Business Case dokumentiert die Units 1 bis 6 und führt Schritt für Schritt  von der Projekt  und Kontextbeschreibung über Stakeholder Analyse und Bedarfserhebung bis zur Ist Analyse und dem Soll Vergleich. Darauf aufbauend werden Anforderungen erhoben und priorisiert, in eine agile Spezifikation überführt und in ein umsetzbares Lösungsdesign übersetzt. Das Ergebnis ist eine konsistente, nachvollziehbare Entscheidungsgrundlage für die weitere Produktentwicklung und die Markteinführung, inklusive klarer Rollen, priorisierter Anforderungen, Story  Map , User Stories sowie ersten Prototyp Artefakten. Der erwartete wirtschaftliche Nutzen basiert auf der Reduktion von Verschwendung und Fehlplanung. Daraus leiten sich ein realistischer Return on Investment und ein  Break  even  Zeitraum von 12 bis 18 Monaten ab, je nach Ausgangslage des Betriebs und Umsetzungsgrad. UNIT 1 – Projekt- und Firmenbeschreibung + Stakeholder-Analyse Firmenbeschreibung SmartGastro.ai ist ein Startup Projekt, das im Dezember 2025 im Rahmen des  AIBS Lehrgangs  initiiert und als funktionsfähiger Prototyp in Version 3.3 umgesetzt wurde. Der Prototyp adressiert ein zentrales Problem im Schweizer Gastgewerbe: stark schwankende Nachfrage führt häufig zu Überproduktion, kurzfristigen Nachproduktionen und hoher operativer Belastung im Team. SmartGastro.ai nutzt datenbasierte Nachfrageprognosen, um Küchen und Service bei der täglichen Planung zu unterstützen und Entscheidungen zu Einkauf, Vorbereitung, Produktion und Personaleinsatz planbarer zu machen. Für das erste Quartal 2026 ist eine Pilotphase mit fünf bis zehn Schweizer Gastronomiebetrieben vorgesehen. Ziel der Pilotphase ist es, den Produktnutzen im realen Betrieb zu validieren, die Akzeptanz bei den Anwenderinnen und Anwendern zu prüfen und systematisch Anforderungen für die nächste Produktversion abzuleiten. Dabei werden klare Erfolgskriterien festgelegt, zum Beispiel Reduktion von Food  Waste , weniger Ad hoc Nachproduktion, stabilere Abläufe sowie messbare Zeit und Kosteneffekte. Die Ergebnisse der Pilotphase bilden die Grundlage für die Weiterentwicklung, die Priorisierung der Anforderungen und die Vorbereitung einer skalierbaren Markteinführung. Problemstellung Schweizer Restaurants stehen täglich vor dem Spannungsfeld zwischen unsicherer Nachfrage und knappen Ressourcen. Schwankungen nach Wochentag, Wetter, Saison und lokalen Anlässen führen dazu, dass Speisen entweder zu früh und zu viel produziert werden oder kurzfristig nachproduziert werden müssen. Beides erzeugt vermeidbare Kosten, Food  Waste  und Stress im Betrieb. Besonders kritisch ist die manuelle Planung, weil sie stark erfahrungsbasiert ist und neue Muster, etwa veränderte Gästeströme oder Event Effekte, nur verzögert berücksichtigt. Das Resultat sind Überschüsse, Engpässe und hektische Abläufe in Küche und Service, was sich zusätzlich negativ auf Qualität,   B elastung der Mitarbeiter  und Kundenzufriedenheit auswirken kann. Lösung SmartGastro.ai kombiniert operative Verkaufsdaten aus dem Kassensystem, Kontextdaten wie Wetterdaten von MeteoSchweiz sowie Event Informationen aus öffentlichen Event Quellen, um die Nachfrage  auf Tages  und Produktebene zu prognostizieren. Auf Basis von  Machine  Learning Modellen wie Gradient Boosting werden für 7 bis 14 Tage im Voraus erwartete Gästezahlen und Absatzmengen je Gericht geschätzt. Die Prognosen werden in konkrete Planungshinweise übersetzt, zum Beispiel Vorschläge für Produktionsmengen, Bestellmengen und zeitliche Vorbereitung. Der Nutzen entsteht nicht nur durch höhere Prognosegüte, sondern vor allem durch bessere Entscheidungsunterstützung im Alltag. Als Qualitätsmass wird die Prognosegüte mit MAPE oder ähnlichen Kennzahlen überwacht und im Pilotbetrieb laufend kalibriert, damit die Modelle pro Restaurant und Sortiment robuster werden. Zielgruppe Primäre Nutzerinnen und Nutzer sind Küchenchefs und Restaurantmanagerinnen, die täglich Entscheidungen zu Einkauf, Mise en  place , Produktion und Personal treffen. Sie profitieren von weniger Unsicherheit und klaren Handlungsempfehlungen, die sich in ihre bestehende Arbeitsroutine einfügen. Sekundäre Zielgruppe sind Anbieter von Kassensystemen und Gastro Software, die SmartGastro.ai als Ergänzungsmodul integrieren können, um ihren Kundinnen und Kunden datenbasierte Forecast Funktionen anzubieten. Dadurch entsteht ein skalierbarer Zugang zum Markt  über bestehende Vertriebs  und Integrationskanäle. Geschäftsmodell SmartGastro.ai wird als Software  as  a Service angeboten. Ein niederschwelliger Einstieg erfolgt über eine zeitlich begrenzte Testphase, damit Betriebe den Nutzen mit eigenen Daten validieren können. Das Premium Modell umfasst erweiterte Funktionen wie Personalplanung, Menü und  Produktions  Empfehlungen, Reporting sowie Integrationsoptionen in bestehende Systeme. Die Preisgestaltung kann als monatliches Abonnement pro Standort erfolgen, ergänzt um optionale Onboarding Leistungen und Integrationspakete. Damit wird ein wiederkehrender Umsatzstrom aufgebaut und zugleich eine klare Kopplung an messbaren Kundennutzen geschaffen. Stakeholder   Analyse Die Stakeholder Analyse für SmartGastro.ai identifiziert alle relevanten Anspruchsgruppen und bewertet deren Nutzen, Erwartungen sowie Einfluss und Interesse. Dadurch wird sichtbar, wer für die Pilotphase und die Produktentwicklung entscheidend ist, welche Anforderungen priorisiert werden müssen und wo Akzeptanz oder Umsetzungsrisiken entstehen können. Auf Basis der Bewertung wird festgelegt, wie stark einzelne Stakeholder einbezogen werden, damit Entscheidungen schneller getroffen werden und das Produkt im Restaurantalltag wirklich funktioniert. Stakeholder Liste Die Stakeholder Liste fasst die wichtigsten Gruppen strukturiert zusammen und zeigt pro Stakeholder den erwarteten Nutzen sowie eine grobe Einordnung von Einfluss und Interesse. Primäre Stakeholder sind die direkten Nutzerinnen und Nutzer im Restaurant, sekundäre Stakeholder unterstützen Skalierung und Integration, tertiäre Stakeholder sind indirekt betroffen oder profitieren gesellschaftlich. Die Liste dient als Grundlage für Interviews, Kommunikationsplanung und spätere  RACI Klärungen . Stakeholder Typ Interesse   /   Nutzen Power Interest Kategorie Küchenchef   (Fotios) &   Geschäftsführer Primär Präzise Mengen, weniger   Stress, Food- Waste  ↓ ROI, ESG-Berichterstattung Hoch Sehr   hoch Manager   Restaurantmanagerin   (Alexandra) Primär Kostensenkung, Gästezufriedenheit Mittel Sehr   hoch Manager   Closely Stammgast   (Simona) Tertiär Immer   verfügbare   Lieblingsgerichte,   Nachhaltigkeit Niedrig Mittel Keep   Informed POS-Partner   ( Waiterone ) Sekundär Integration, neue Kunden,   API-Nutzung Hoch Mittel Keep   Satisfied Lieferanten   (Food) Sekundär Planbarere Bestellungen, weniger Spontan-Abholungen Mittel Niedrig Monitor Mitarbeitende   (Service) Tertiär Weniger Hektik, optimierte   Personalplanung Niedrig Mittel Keep   Informed Umwelt   /   Gesellschaft Tertiär CO ₂ -Reduktion,   Nachhaltigkeit Niedrig Mittel Keep   Informed Investoren   /   IPSO Sekundär Machbarkeit,   Innovation,   ROI Hoch Mittel Keep   Satisfied Tabelle  1 :  Stakeholder Liste und Einbindungspriorität S takeholder-Map (Power-Interest-Matrix) Die Stakeholder  Map  ordnet die wichtigsten Anspruchsgruppen nach Macht und Interesse ein. Damit wird sichtbar, wer eng in die Pilotphase eingebunden werden muss, wer regelmässig informiert werden sollte und bei wem ein schlankes Monitoring genügt. Stakeholder mit hoher Macht und hohem Interesse werden eng begleitet, weil sie über Akzeptanz, Ressourcen und Entscheidungen im Betrieb bestimmen. Stakeholder mit hoher Macht, aber tieferem Interesse werden gezielt zufriedengestellt, damit Integration und Finanzierung stabil bleiben. Stakeholder mit niedriger Macht werden je nach Interesse informiert oder nur beobachtet. Interesse niedrig Interesse hoch Macht hoch Keep Satisfied POS Partner,  Investoren Manage  Closely  Owner, Küchenchef und Geschäftsführer, Restaurantmanagerin Macht niedrig Monitor Lieferanten, Umwelt Öffentlichkeit Keep  Informed  Mitarbeitende Service, Simona Stammgast Tabelle  2 :  Stakeholder  Map   ( Power Interest Matrix ) Personas Die folgenden Personas beschreiben typische Nutzerinnen und Nutzer sowie indirekt Betroffene von SmartGastro.ai. Sie helfen dabei, Ziele, Erwartungen und Schmerzpunkte greifbar zu machen und Anforderungen konsequent aus Sicht der Anwenderinnen und Anwender abzuleiten. Dadurch wird sichergestellt, dass die Lösung im Restaurantalltag praktikabel ist und der Nutzen in der Pilotphase messbar überprüft werden kann. Persona 1 Fotios Küchenchef und Geschäftsführer Alter 45 Jahre Rolle Geschäftsführer und Küchenchef im Restaurant Löwenburg in Lienz mit 185 Plätzen Berufserfahrung 18 Jahre Gastronomie Technologie Affinität hoch, nutzt Kassensystem regelmässig, arbeitet ungern mit Tabellenkalkulation Ziele Mise en  place  präzise planen, Food  Waste  um mindestens 20 P` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/SmartGastro.ai BUAN v2.pdf`, body: `





%8$1%XVLQHVV&DVH
6PDUW*DVWURDL±.,JHVWW]WH1DFKIUDJHSURJQRVH
IU6FKZHL]HU5HVWDXUDQWV

7HDP7KRPDV%DOOLQDUL+VH\\LQg]GHPLU6LPRQD*HUVDN6WHSKDQLH%ODVHU

,QVWLWXWLRQ,362%LOGXQJ$*

0RGXO%8$1%$$%XVLQHVV$QDO\\VLV

$EJDEHGDWXP

,
,QKDOWVYHU]HLFKQLV
<mZhE'^sZ/,E/^͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘///
/>hE'^sZ/,E/^͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘s
d>>EsZ/,E/^͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘s/
ϭ
/E>/dhE'͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭ
Ϯ
hE/dϭʹWZK:<dͲhE&/ZDE^,Z/hE'н^d<,K>ZͲE>z^͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯ
Ϯ͘ϭ
&/ZDE^,Z/hE'͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯ
Ϯ͘ϭ͘ϭ
WƌŽďůĞŵƐƚĞůůƵŶŐ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯ
Ϯ͘ϭ͘Ϯ
>ƂƐƵŶŐ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϯ
Ϯ͘ϭ͘ϯ
ŝĞůŐƌƵƉƉĞ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϯ
Ϯ͘ϭ͘ϰ
'ĞƐĐŚćĨƚƐŵŽĚĞůů͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϯ
Ϯ͘Ϯ
^d<,K>ZE>z^͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϰ
Ϯ͘Ϯ͘ϭ
^ƚĂŬĞŚŽůĚĞƌ>ŝƐƚĞ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϰ
Ϯ͘Ϯ͘Ϯ
^ƚĂŬĞŚŽůĚĞƌͲDĂƉ;WŽǁĞƌͲ/ŶƚĞƌĞƐƚͲDĂƚƌŝǆͿ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϱ
Ϯ͘ϯ
WZ^KE^͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϱ
Ϯ͘ϯ͘ϭ
WĞƌƐŽŶĂϭ&ŽƚŝŽƐ<ƺĐŚĞŶĐŚĞĨƵŶĚ'ĞƐĐŚćĨƚƐĨƺŚƌĞƌ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϱ
Ϯ͘ϯ͘Ϯ
WĞƌƐŽŶĂϮůĞǆĂŶĚƌĂZĞƐƚĂƵƌĂŶƚŵĂŶĂŐĞƌŝŶ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϲ
Ϯ͘ϯ͘ϯ
WĞƌƐŽŶĂϯ^ŝŵŽŶĂ^ƚĂŵŵŐĂƐƚ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϲ
Ϯ͘ϰ
DWd,zDW^͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϳ
Ϯ͘ϱ
Z/ͲDdZ/y͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϴ
ϯ
hE/dϮZ,hE'^Dd,KEDd,KEt,>hE'ZmEhE'͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϬ
ϯ͘ϭ
Dd,KEt,>Θ'ZmEhE'͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϬ
ϯ͘Ϯ
/EdZs/t>/d&E&Kd/K^<m,E,&͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϬ
ϯ͘Ϯ͘ϭ
<ŽŶƚĞǆƚ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϬ
ϯ͘Ϯ͘Ϯ
WĂŝŶWŽŝŶƚƐ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϬ
ϯ͘Ϯ͘ϯ
^ŽůůƵƐƚĂŶĚƵŶĚŶĨŽƌĚĞƌƵŶŐĞŶ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϭ
ϯ͘Ϯ͘ϰ
dĞĐŚŶŽůŽŐŝĞƵŶĚĚŽƉƚŝŽŶ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϭ
ϯ͘ϯ
K<hDEdE>/^d͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϭ
ϯ͘ϯ͘ϭ
&ŝŶĚŝŶŐƐŬƵƌǌƵŶĚǁŝƐƐĞŶƐĐŚĂĨƚůŝĐŚĞƌĨŽƌŵƵůŝĞƌƚ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϮ
ϯ͘ϰ
<dh>/^/ZhE'ZWZ^KE^͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϯ
ϯ͘ϰ͘ϭ
&ŽƚŝŽƐ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϯ
ϯ͘ϰ͘Ϯ
ůĞǆĂŶĚƌĂ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϯ
ϰ
hE/dϯʹ/^dͲ^K>>ͲsZ'>/,͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϰ
ϰ͘ϭ
/^dh^dEE>z^^/WK͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϰ
ϰ͘Ϯ
^K>>h^dEE>z^^/WKD/d^DZd'^dZK͘/͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϰ
,,
ϰ͘ϯ
/^d^K>>sZ'>/,<EKE>z^͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϱ
ϰ͘ϰ
ZtZddZ^h>dd͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϲ
ϰ͘ϰ͘ϭ
&ŽŽĚtĂƐƚĞ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϲ
ϰ͘ϰ͘Ϯ
WůĂŶƵŶŐƐǌĞŝƚ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϳ
ϰ͘ϰ͘ϯ
tŝƌƚƐĐŚĂĨƚůŝĐŚĞƌEƵƚǌĞŶƵŶĚZK/͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϳ
ϱ
hE/dϰʹE&KZZhE'^DE'DEd͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϴ
ϱ͘ϭ
E&KZZhE'Eh^sKZ,EEDDdZ/>>/dE͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϴ
ϱ͘Ϯ
ZYh/ZDEd^Ͳd>>;DK^KtͿ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϭϴ
ϲ
hE/dϱʹ^W/&/<d/KEΘDK>>/ZhE'͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϮϬ
ϲ͘ϭ
^dKZzDW͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϮϬ
ϲ͘Ϯ
h^^/'ZDD&mZ^DZd'^dZK͘/s/^h>>^Zd&<d͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϭ
ϳ
hE/dϲʹ>P^hE'^EdEdthZ&ΘWZKdKdzW/E'͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϯ
ϳ͘ϭ
^dKZzKZ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϯ
ϳ͘Ϯ
WWZWZKdKdzW;^,Z/hE'Ϳ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϰ
ϳ͘ϯ
^,KZ;,hWdE^/,dͿ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϰ
ϳ͘ϰ
D/&/>/dzt/Z&ZD^^,Z/hE'͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϲ
ϳ͘ϰ͘ϭ
tŝƌĞĨƌĂŵĞϭĂƐŚďŽĂƌĚĞƐŬƚŽƉϭϵϮϬŵĂůϭϬϴϬ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϲ
ϳ͘ϰ͘Ϯ
tŝƌĞĨƌĂŵĞϮEĂĐŚǀŽůůǌŝĞŚďĂƌŬĞŝƚDŽĚĂůϰϬϬŵĂůϯϬϬ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϳ
ϳ͘ϰ͘ϯ
tŝƌĞĨƌĂŵĞϯKǀĞƌƌŝĚĞDŽĚĂůϰϬϬŵĂůϯϱϬ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϳ
ϳ͘ϱ
WDEͲWZK^^/'ZDD;&KZ^dͲ'EZ/ZhE'ΘEhdhE'Ϳ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϳ
ϳ͘ϱ͘ϭ
>ĂŶĞϭ͗뱅
뱆
뱇
뱈
뱉
뱊
뱋
뱌^ǇƐƚĞŵ;</ͲWŝƉĞůŝŶĞͿ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϳ
ϳ͘ϱ͘Ϯ
>ĂŶĞϮ͗辔
辕
辖
辗
霝
霞
辘
辙
辚
辛
霟
辜
霠
霡
霢
辝
辞
辟
辠
辡
辢
辣
辤
辥
霣
霤
霥
霦
辦
辧
辨
辩<ƺĐŚĞŶĐŚĞĨ;&ŽƚŝƐͿ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϴ
ϳ͘ϱ͘ϯ
>ĂŶĞϯ͗ǆƚĞƌŶĞ^ǇƐƚĞŵĞ;W/ƐͿ͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϴ
ϳ͘ϲ
s>hd/KEsKE>P^hE'^sZ/EdE͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘Ϯϴ
ϴ
&/d͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘ϯϬ
>/dZdhZsZ/,E/^͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘s//
E,E'͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘͘s///



,,,
$ENU]XQJVYHU]HLFKQLV
$3,$SSOLFDWLRQ3URJUDPPLQJ,QWHUIDFH
%$%XVLQHVV$QDO\\VLV
%,%XVLQHVV,QWHOOLJHQFH
&69&RPPD6HSDUDWHG9DOXHV
'6*6FKZHL]HU'DWHQVFKXW]JHVHW]UHYLGLHUW
'6*92'DWHQVFKXW]*UXQGYHURUGQXQJGHU(XURSlLVFKHQ8QLRQ
(6*(QYLURQPHQWDO6RFLDO*RYHUQDQFH
*8,*UDSKLFDO8VHU,QWHUIDFH
,62,QWHUQDWLRQDO2UJDQL]DWLRQIRU6WDQGDUGL]DWLRQ
,7,QIRUPDWLRQ7HFKQRORJ\\
.3,.H\\3HUIRUPDQFH,QGLFDWRU
0$3(0HDQ$EVROXWH3HUFHQWDJH(UURU
0$(0HDQ$EVROXWH(UURU
0/0DFKLQH/HDUQLQJ
0930LQLPXP9LDEOH3URGXFW
1)51RQ)XQFWLRQDO5HTXLUHPHQW
2262XWRI6WRFN
2.52EMHFWLYHVDQG.H\\5HVXOWV
3')3RUWDEOH'RFXPHQW)RUPDW
3263RLQWRI6DOH
5$&,5HVSRQVLEOH$FFRXQWDEOH&RQVXOWHG,QIRUPHG
5(675HSUHVHQWDWLRQDO6WDWH7UDQVIHU
52,5HWXUQRQ,QYHVWPHQW
6DD66RIWZDUHDVD6HUYLFH
,9
6,32&6XSSOLHUV,QSXWV3URFHVV2XWSXWV&XVWRPHUV
80/8QLILHG0RGHOLQJ/DQJXDJH
868VHU6WRU\\
8;8VHU([SHULHQFH


9
$EELOGXQJVYHU]HLFKQLV
$EELOGXQJ8VH&DVH'LDJUDPP
$EELOGXQJ6WRU\\ERDUG
$EELOGXQJ3URWRW\\SH
$EELOGXQJ'DVKERDUG




9,
7DEHOOHQYHU]HLFKQLV
7DEHOOH6WDNHKROGHU/LVWHXQG(LQELQGXQJVSULRULWlW
7DEHOOH6WDNHKROGHU0DS3RZHU,QWHUHVW0DWUL[
7DEHOOH(PSDWKLH.DUWH)RWLRV.FKHQFKHI
7DEHOOH(PSDWKLH.DUWH$OH[DQGUD5HVWDXUDQWPDQDJHULQ
7DEHOOH5$&,0DWUL[IU3LORWXQG8PVHW]XQJYRQ6PDUW*DVWURDL
7DEHOOH'RNXPHQWHQOLVWHIUGDV'RNXPHQWVWXGLXP
7DEHOOH6,32&,VW=XVWDQG3ODQXQJXQG3URGXNWLRQLP5HVWDXUDQWEHWULHE
7DEHOOH6,32&6ROO=XVWDQGPLW6PDUW*DVWURDL
7DEHOOH.DQR$QDO\\VHGHUZLFKWLJVWHQ)HDWXUHV
7DEHOOH5HTXLUHPHQWV7DEHOOHQDFK0R6&R:
7DEHOOH6WRU\\0DSPLW7KHPHV(SLFV8VHU6WRULHVXQG5HOHDVHV
7DEHOOH5HOHDVH3ODQIU6PDUW*DVWURDL
7DEHOOH(QWVFKHLGXQJ'DVKERDUGYV&69([SRUW
7DEHOOH(QWVFKHLGXQJ&ORXG$:6YV2Q3UHPLVH



 (LQOHLWXQJ
6PDUW*DVWURDLLVWHLQH.,EDVLHUWH/|VXQJ]XU1DFKIUDJHSURJQRVHIUGDV6FKZHL]HU
*DVWJHZHUEH=LHOLVW)RRG:DVWHRSHUDWLYH+HNWLNXQGXQQ|WLJH.RVWHQHQWODQJGHU
WlJOLFKHQ3URGXNWLRQVXQG%HVWHOOHQWVFKHLGXQJHQPHVVEDU]XVHQNHQ,P)RNXVVWH
KHQ 5HVWDXUDQWV GLH XQWHU VFKZDQNHQGHU 1DFKIUDJH 3HUVRQDOGUXFN XQG NQDSSHQ
0DUJHQOHLGHQXQGGHVKDOEKlXILJHQWZHGHU]XYLHOYRUEHUHLWHQRGHUNXU]IULVWLJQDFK
SURGX]LHUHQ PVVHQ 6PDUW*DVWURDL XQWHUVWW]W GLHVH %HWULHEH PLW GDWHQEDVLHUWHQ
3URJQRVHQXQG+DQGOXQJVHPSIHKOXQJHQGDPLW(LQNDXI0LVHHQSODFH3URGXNWLRQ
XQG3HUVRQDOHLQVDW]EHVVHUSODQEDUZHUGHQ
'DV9RUKDEHQHQWVWDQGDXVGHP$,%63URJUDPPXQGYHUIJWEHUHLQHQIXQNWLRQVIl
KLJHQ3URWRW\\SLQ9HUVLRQ'LHVHU%XVLQHVV&DVHGRNXPHQWLHUWGLH8QLWVELV
XQGIKUW6FKULWWIU6FKULWWYRQGHU3URMHNWXQG.RQWH[WEHVFKUHLEXQJEHU6WDNHKROGHU
$QDO\\VHXQG%HGDUIVHUKHEXQJELV]XU,VW$QDO\\VHXQGGHP6ROO9HUJOHLFK'DUDXIDXI
EDXHQG ZHUGHQ $QIRUGHUXQJHQ HUKREHQ XQG SULRULVLHUW LQ HLQH DJLOH 6SH]LILNDWLRQ
EHUIKUWXQGLQHLQXPVHW]EDUHV/|VXQJVGHVLJQEHUVHW]W'DV(UJHEQLVLVWHLQHNRQ
VLVWHQWH QDFKYROO]LHKEDUH (QWVFKHLGXQJVJUXQGODJH IU GLH ZHLWHUH 3URGXNWHQWZLFN
OXQJ XQG GLH 0DUNWHLQIKUXQJ LQNOXVLYH NODUHU 5ROOHQ SULRULVLHUWHU $QIRUGHUXQJHQ
6WRU\\0DS8VHU6WRULHVVRZLHHUVWHQ3URWRW\\S$UWHIDNWHQ'HUHUZDUWHWHZLUWVFKDIWOL
FKH1XW]HQEDVLHUWDXIGHU5HGXNWLRQYRQ9HUVFKZHQGXQJXQG)HKOSODQXQJ'DUDXV
OHLWHQVLFKHLQUHDOLVWLVFKHU5HWXUQRQ,QYHVWPHQWXQGHLQ%UHDNHYHQ=HLWUDXPYRQ
ELV0RQDWHQDEMHQDFK$XVJDQJVODJHGHV%HWULHEVXQG8PVHW]XQJVJUDG










 81,7±3URMHNWXQG)LUPHQEHVFKUHLEXQJ6WDNHKROGHU$QD
O\\VH
 )LUPHQEHVFKUHLEXQJ
6PD` },
  { title: `CLAUDECODE/10-Business-Analyse/Buisness_Analyse_Joel_Baumann/Stakholder_Interview_Löwenburg.docx`, body: `Stakeholder & Interview Für unseren Usecase nehmen wir ein reales Restaurant. Diese Restaurant habe ich (Thomas Ballinari) 10 Jahre geführt und danach meinem langjährigen griechischen Koch (Fotios Kleidaras) übergeben. Restaurant Löenburg, Oberbüchel 3a, CH-9464 Lienz www.löwenburg-lienz.ch Es ist ein Ausflugsrestaurant in der Schweiz direkt an der dreiländergrenze FL-A-CH am Rheindamm. 45 Plätze im Restaurant, 80 Plätze im Saal, 45 Plätze auf der gedeckten  Terrasse , 100 Plätze im Lindengarten. Besticht  durch grossen Parkplatz, Elektroladestation für E-Bikes, grosser Kinderspielplatz,   durchgehend warme Küche ,  mitten im Grünen . Stakeholder Typ Ziel/Interesse Ein - fluss Bedarf/Erfolgskri - terium Geschäftsführer Fotios K. Intern primär Profitabilität, weniger Waste hoch Einsparungen, ROI, einfache Nutzung Restaurantmanager Alexandra H. Intern primär Planungssicherheit mittel/hoch klare Reports, Forecast-Vertrauen Küchenchef Fotios K. Intern primär Mise-en-Place, Qualität hoch präzise Empfehlungen + Override Software-Entwickler HüseyinÖ. Extern primär Umsetzung Pilotprojekt mittel POS-Daten Hardware Budget POS-Anbieter (Waiterone) Int.&ext. sekundär Integration/Partnerschaft mittel stabile API, geringer Support-Aufwand Mitarbeitende 12 Aushilfen Intern tertiär weniger Stress mittel fairere Lastspitzen, bessere Planung Gäste Biker, Tagesgäste mit Auto, Vereine, Anlässe Extern tertiär Verfügbarkeit/Qualität mittel weniger Wartezeit, gewünschte Gerichte Umwelt/ESG Extern tertiär weniger Waste/CO ₂ niedrig messbarer Waste Rückgang 2 2. 2.2 Interviewleitfaden 12 Fragen   an Thomas, Fotios und Alexandra  vom 16.01.2026 Wie planen Sie heute Mise en Place / Produktionsmengen? Wir nehmen Reservations daten  und Wettervorhersagen , natürlich ob es ein Werktag   oder Wochenende ist . Z.B . b ei heissem Wetter mehr Fitnessteller . Produzieren so viel  vor ,  wie wir  im Minimum denken das könnte etwa laufen. Dabei gibt es meist   Stresssituationen während des Service, da viel nachgemacht werden muss . Was sind die häufigsten Gründe für Überproduktion? (Wetter, Events, Ferien, etc.) Wetterumbrüche,  Flaute werktags,  lokale Events,   Welche Produkte verursachen am meisten Waste / Out of Stock? Frischprodukte wie Salat, Fisch . Speisen die nicht wieder aufgewärmt werden können ,   z.B. Risotto Wie weit im Voraus planen Sie (heute) – 1 Tag, 3 Tage, 1 Woche? Mo. für Mi. – Fr. ----  Do. f ür Sa.+ So.    Welche Kennzahlen schauen Sie regelmäßig an? Umsatzz a hlen ,  Kartenreiter , POS- Produkte, POS-Tagesablauf Welche Daten sind im POS vorhanden und wie zuverlässig sind sie? Die Daten sind zu 100% zuverlässig,  müssen 100% für  Buchhaltung und  Steuererklärung  stimmen, was nicht getippt wird  wurde entweder durch Servicekraft gestohlen oder ist Schwarzgeld. Was wäre für Sie ein „guter Forecast“ (Genauigkeit/Format)? Ein Produktdatenblatt mit Tag /Datum, Wettervorhersage, Eventdaten , die erwarteten Produktverkäufe auf +5/-5  prognostiziert. Welche Entscheidungen würden Sie der KI erlauben, welche nicht? Entscheidungen keine ,  Forcast ausprobieren, wenn stimmig benutzen.   Welche Erklärung würden Sie brauchen, um einer Empfehlung zu vertrauen? Aufgrund welcher Daten die Empfehlung erstellt wurde , z.B. Es ist Sonntag, schlechtes Wetter,  Schützenfest in Sennwald,  heute  brauchst Du nur 8 Cordon bleu  anstatt 65 bei einem schönen Sonntag. Wie würden Sie Warnungen/Alerts bevorzugen (Dashboard, Mail, WhatsApp, gar nicht)? Dashboard Welche Risiken sehen Sie bei KI Planung? Zu grosses Vertrauen anstatt eigenen Instin kt/Erfahrung zu benutzen. Was wäre ein klarer Grund, SmartGastro nach 30 Tagen weiter zu nutzen? Foodwaste  spürbar  rückläufig,  Tiefe Fehlerquote, Trainierbarkeit der KI,  ROI Lizenzgebühren  lassen sich mind. decken. Lieber Fotis, liebe Alexandra herzlichen Dank für das Interview .` },
  { title: `CLAUDECODE/10-Business-Analyse/Unternehmensanalyse_Thomas_Frankhauser/OneDrive_3_20.12.2025/Challenge/Abgaben Unit 5 Challenge/Gruppe 1 - Bildung, HR.pdf`, body: `Diana Ch. Ryffel, Ronny Mathieu, Sandra Wirth, Simona Gersak
ipso! AIBS: AI Business Specialist FA – Umfeldanalyse – 13.12.2025
Ausgangslage
KreaFusion AG, KI-Dienstleister mit 20 Mitarbeitern und grossem Partner-Netzwerk
• Problemstellung: 
• Wechselnde Teamzusammensetzung
• Heterogene Wissensstände (Zusammenarbeit mit Partnern)
• Compliance und Standardisierung
• Lösungsansatz:
Erstellung und Aufbau eines RAG (Retrieval-Augmented Generation)
 
• Nutzen: 
• Kosteneinsparung
• Effizienzsteigerung
PESTEL-Analyse
Einflussfaktor
Beschreibung
Politik
EU AI Act, Regulierung, Datenlokalisierung, Förderung digitaler Innovation
Wirtschaft
Initiale Investition, Cloud-Kosten, ROI durch Effizienzgewinne, Skalierbarkeit ohne 
proportionale Personalkosten
Gesellschaft
Nutzerakzeptanz, Change Management, Know-How-Transfer, Zusammenhalt
Technologie
LLM, RAG-Entwicklung, Vektordatenbanken, Datenspeicher, UI
Ökologie
n/a
Recht
DSGVO, personenbezogene Daten, Urheberrecht, Haftung, Compliance
SWOT-Analyse
Stärken (Strengths)
Interdisziplinäres Team
Flexibles Partnernetzwerk
Heterogenes Fachwissen
Offene Innovationskultur
Schwächen (Weaknesses)
Wechselnde Teamzusammensetzung
Komplexität & Pflegeaufwand
Chancen (Opportunities)
Wachsender KI-Markt
Differenzierung durch Wissensmanagement
Skalierbarkeit des Modells
Netzwerkeffekte
Risiken (Threats)
Inkorrekter Output
Schneller Technologiewandel
Ungenügende Datenbasis
Datenschutz & Compliance
Akzeptanzrisiken
Key Partners
• LLM-Anbieter 
• Cloud-Provider
• Open-Source Community
Key Activities
• RAG-System-Entwicklung
• Wissensdatenbank-Aufbau
• Kontinuierliche Systempflege/
Qualitätsmonitoring 
• Change Management
• Datenschutz-Compliance
Customer Segments
• Mitarbeiter KreaFusion
• Partnerfirmen
Cost Structure
• Initiale Entwicklungskosten
• Laufende Kosten: 
Cloud-Infrastruktur, API-Nutzung
(LLMs), Speicherung
• Personalkosten: Entwicklung,
Wartung, Datenpflege
Value Propositions
• Reduktion Onboarding-Zeit
• Selbständige 
  Projekt-einarbeitung
• Wissensbewahrung
  (Schwarmintelligenz
• Wettbewerbsvorteil durch
  Effizienz
Revenue Streams
• Effizienzsteigerung: 
Schnellere Projektabwicklung,
höhere Kapazität
• Kosteneinsparungen: 
Reduzierte Onboarding-Zeit
• Skalierbarkeit:
Geschäftswachstum ohne
proportionale Personalkosten
Key Resources
• Entwickler-Team (IT-Spezialisten)
• Wissensdatenbank
• Cloud-Infrastruktur
• RAG-Technologie & LLM-APIs
• Heterogenes Fachwissen 
  (5 Bereiche)
• Projektdokumentation
Customer Relationships
• Individuelles Onboarding
• Community-getriebene
  Wissensbasis
Business Model Canvas
Handlungsempfehlung
Erstellung und Aufbau des internen RAGs weiterverfolgen
Nächste Schritte
• Finanzierung klären
• KPIs festlegen
• Datenquellen definieren und bereinigen
• Prototyp erstellen` },
  { title: `CLAUDECODE/10-Business-Analyse/Unternehmensanalyse_Thomas_Frankhauser/OneDrive_3_20.12.2025/Gruppenarbeiten/Modul3_GartnerHypecycle/AIBS UAKI.pdf`, body: `AI Agents
Gartner – Hype Cycle 
für KI 2025
Laut Gartner: „Die zwei größten Bewegungen auf dem diesjährigen Hype Cycle sind AI-ready data und AI agents. 
Beide beﬁnden sich auf dem Peak of Inﬂated Expectations.“ (gartner.com)
Gartner – 
Pressemitteilung 
August 2025
Gartner bestätigte, dass „KI-Agenten und KI-fähige Daten“ als Schlüsseltechnologien gelten und sich auf dem 
Spitzenbereich der Erwartungskurve beﬁnden. (gartner.com)
Gartner – Hype Cycle 
2025 Dokument
Der offizielle Bericht listet „AI agents“ explizit als eine der „emerging AI techniques“, die starke Aufmerksamkeit 
erfahren und deren geschäftlicher Nutzen noch nicht vollständig realisiert ist. (gartner.com)
Studie von Kong Inc. 
(Sep 2025)
90 % der befragten Unternehmen gaben an, dass ihre Organisationen aktiv KI-Agenten einsetzen. 79 % erwarteten 
eine vollständige Einführung innerhalb von drei Jahren. (PR Newswire)
Weitere 
Adoptions-Statistiken
Z. B. fanden sich Angaben wie: „Mehr als die Hälfte der Unternehmen haben KI-Agenten schon im Einsatz“ (oder 
planen sie), und „bis 2028 werden x % der Unternehmens-Software Agenten enthalten“. Beispiel: 52 % der 
Führungskräfte berichteten, dass ihre Organisation KI-Agenten aktiv nutzt. (thefastmode.com)
Risikoabschätzung 
von Gartner
Gartner warnte, dass über 40 % der Agentic-AI-Projekte bis Ende 2027 eingestellt werden könnten, da Kosten, 
Geschäftsnutzen und Governance noch ungenügend sind. (Reuters)` },
  { title: `CLAUDECODE/10-Business-Analyse/Unternehmensanalyse_Thomas_Frankhauser/OneDrive_3_20.12.2025/Megatrends/MegatrendMap2025-Poster-A4.pdf`, body: `AI
LEADER-
SHIP
BUSINESS
ECOSYSTEMS
CBDC
EUROPEAN
PLATFORM
LOCK-IN
ECO
PROPOSITION
WORK-LIFE
BLENDING
HUMAN-TO-
HUMAN
EXPERIENCE
MIGRATION
SHIFTS
GENERATIONAL
LEADERSHIP
LIFELONG
LEARNING
EDUTAINMENT
GAMIFICATION
FUTURE
MANAGEMENT
RESPONSIBLE
AI
OPEN
SOURCE AI
PLATTFORM-
ÖKONOMIE
HUMAN
CENTRICITY
PRIVACY 
DIGITALE
IDENTITÄT
SELBST-
OPTIMIERUNG
MENTAL HEALTH
AWARENESS
ADVANCED
NURSING
SMART
INNOVATION
MICRO-
LEARNING
COOPETITION
GLOBAL
WORK
DYNAMICS
MULTIGRAFIE
SOZIALE
SICHERHEIT
PREVENTIVE
HEALTH
HEALTHY
AGING
EXTENDED
REALITY
DIVERSITY
WATER
MANAGEMENT
URBAN
SAFETY
GAME OF
NATIONS
ERSCHÖPFTES
EUROPA
CRISIS
MANAGEMENT
ETHICAL 
FRAMEWORKS
MILITARY
INNOVATION
POLITICS
OF HOPE
DIGITAL
CITIZENSHIP
TRUST
TECHNOLOGY
BLOCK-
CHAIN
CYBER-
SECURITY
URBAN
FARMING
SUSTAINABLE
TRANSPORT
THIRD
PLACES
LUFT-
MOBILITÄT
MIKRO-
MOBILITÄT
15-MINUTEN-
STADT
6G
DIGITAL
TWINS
AUTONOMES
FAHREN
SHARING
ECONOMY
24/7-
GESELLSCHAFT
NACH-
HALTIGE
KRAFT-
STOFFE
SEAMLESS
MOBILITY
GREEN
SPACES
DEKARBO-
NISIERUNG
BIOKLIMATISCHE
ARCHITEKTUR
BIOENERGY
CIRCULAR
ECONOMY
SOCIAL
BUSINESS
SMART 
CITY
BEVÖLKERUNGS-
WACHSTUM
INKLUSION
INTERGENERA-
TIONALITÄT
BLOCKBUSTER
ALLIANCES
NEO-
NATIONALISMUS
DEPENDABILITY
FRIEND-
SHORING
MULTIPOLARE
WELTORDNUNG
GENDER
AWARENESS
EMPATHIC
CITY
E-MOBILITY
LAST MILE
CONCEPTS
PUBLIC
HEALTH
REMOTE
WORK
KI-
EMPOWERMENT
FLEXIBILITY
EXPLORER
NETWORKS
POST
NEW WORK
ERA
GIG
ECONOMY
DEALING WITH
REGULATIONS
IMMERSIVES
LERNEN
EDTECH
DIGITAL
LITERACY
OMNI
INTERACTION
RISE OF
CHINA
TECHNO-
SOZIALE 
ARBEITSWELT
EAAS 
DIGITAL
DIVIDE
TRANSITION
WORK
CORPORATE
HEALTH
HAPPINESS
APPROACH
CARE
QUALITY
HUMAN
COMPANIONSHIP
RESILIENZ
ACHT-
SAMKEIT
PLANT
BASED
BIODIVERSITÄT
SEXUELLE
VIELFALT
LEBENS-
QUALITÄT
AGROFORST-
WIRTSCHAFT 
ALTERNATIVE
PROTEINE
ONE
HEALTH
HOLISTIC
HEALTH
DETOXING
GREEN
TECH
PROGRESSIVE
PROVINZ
REGIONALI-
SIERUNG
DIGITAL
HEALTH
DEZENTRALE
KI
LONGEVITY
SMART
HEALTH
HUBS
DIGITAL 
HUMAN
CARE
DIGITAL 
WORK
SKILLS
GLOBAL
CITIZENSHIP
INTELLIGENT
AUTOMATION
KOLLABORATION
OPEN
INNOVATION
ENERGY 
MANAGEMENT
SPACE
AGE
HYPER-
PERSONA-
LISIERUNG
RELIGIÖSE
IDENTITÄT
SELBST-
WIRK-
SAMKEIT
QUANTEN-
COMPUTING
INTEGRATED
CARE
DIFFERENTIATED
DATA
UN-RUHESTAND
WIR-
KULTUR
HUMAN
AUGMENTATION
GLOKALISIERUNG
MEGACITY
GLOBALISIERUNG
GLOBALISIERUNG
WISSENSKULTUR
WISSENSKULTUR
SICHERHEIT
SICHERHEIT
GESUNDHEIT
GESUNDHEIT
ÖKOINTELLIGENZ
ÖKOINTELLIGENZ
KONNEKTIVITÄT
KONNEKTIVITÄT
URBANISIERUNG
URBANISIERUNG
DEMOGRAFISCHER
WANDEL
DEMOGRAFISCHER
WANDEL
IDENTITÄTSDYNAMIK
IDENTITÄTSDYNAMIK
FUTURE OF WORK
FUTURE OF WORK
MOBILITÄT
MOBILITÄT
Die Megatrend-Map zeigt die elf zentralen Mega-
trends unserer Zeit. Sie sind die größten Treiber des 
Wandels in Wirtschaft und Gesellschaft und prägen 
unsere Zukunft – nicht nur kurzfristig, sondern auf 
mittlere bis lange Sicht. Megatrends entfalten ihre 
Dynamik über Jahrzehnte.
Megatrends sind nie linear und eindimensional, son-
dern vielschichtig und voller gegenläufiger Strömun-
gen. Sie wirken nicht isoliert, sondern beeinflussen 
einander gegenseitig und verstärken sich so in ihrer 
Wirkung. Die Map stellt daher auch die Parallelen 
und Überschneidungen von Megatrends dar. 
Die einzelnen Stationen einer Megatrend-Linie zei-
gen die wichtigsten Subtrends, die den Megatrend 
prägen. Sie verdeutlichen die dynamische Vielfalt, 
die innerhalb eines Megatrends wirkt.
Megatrend-­Map` },
  { title: `CLAUDECODE/20-Evaluation-KI-Loesungen/EVKI-Albert/Apertus-Testbericht zum offenen Schweizer KI-Modell - 20 Minuten.pdf`, body: `17.01.26, 11:53
Apertus: Testbericht zum offenen Schweizer KI-Modell - 20 Minuten
Seite 1 von 10
https://www.20min.ch/story/apertus-testbericht-zum-offenen-schweizer-ki-modell-103409077
News | Digital | AI | Apertus: Testbericht zum offenen Schweizer KI-Modell
WERBUNG
WERBUNG
WERBUNG
WERBUNG
Publiziert 3. September 2025, 18:27
ETH ZÜRICH
Apertus: Das offene Schweizer KI-Modell – wir haben
es getestet
Apertus ist ein offenes Sprachmodell aus der Schweiz. Es versteht über 1000 Sprachen, arbeitet transparent – und zeigt
im Test sowohl Stärken als auch Schwächen.
von 
Michael Andai
1 / 3
News
Video
Entdecken
Profil
17.01.26, 11:53
Apertus: Testbericht zum offenen Schweizer KI-Modell - 20 Minuten
Seite 2 von 10
https://www.20min.ch/story/apertus-testbericht-zum-offenen-schweizer-ki-modell-103409077
Darum gehts
Apertus ist ein offenes Sprachmodell aus der Schweiz, entwickelt von ETH Zürich, EPFL und CSCS.
Es versteht über 1000 Sprachen und ist vollständig transparent, was Architektur und Datenquellen betrifft.
Das Modell zeigt Stärken in der Sprachvielfalt, aber Schwächen bei logischen Aufgaben und Übersetzungen.
Apertus ist auf Hugging Face verfügbar und bietet Varianten mit 8 und 70 Milliarden Parametern an.
Apertus heisst die neue KI aus der Schweiz. Es ist vollständig offen und mehrsprachig und unterscheidet sich damit
deutlich von KI-Systemen der US-Techkonzerne. Entwickelt wurde es von ETH Zürich, École Polytechnique Fédérale de
Lausanne (EPFL) und dem Swiss National Supercomputing Centre CSCS in Lugano.
Wie Apertus technisch funktioniert
Bei Apertus sind Architektur, Trainingsmethoden und Modellgewichte öffentlich einsehbar. Auch die Datenquellen sind
dokumentiert. Somit lässt sich die ganze Datenbeschaffung nachvollziehen.
Was ist dir bei einem KI-Modell am wichtigsten?
3685 Abstimmungen
Der Trainingskorpus umfasst 15 Billionen Wörter (Tokens) in über 1000 Sprachen. Rund 40 Prozent stammen nicht aus
dem Englischen, darunter auch Schweizerdeutsch und Rätoromanisch. Damit unterscheidet sich das Modell von
Konkurrenzsystemen, die stark auf Englisch ausgerichtet sind.
Wir haben ChatGPT Dialekt reden lassen. Vor rund einem Jahr klang Schweizerdeutsch von ChatGPT so.
Datensicherheit und Sprachvielfalt
Apertus wurde ausschliesslich mit frei verfügbaren Daten trainiert. Persönliche Informationen wurden entfernt, Opt-out-
Hinweise respektiert. Damit erfüllt das Projekt die Anforderungen des Schweizer Datenschutzgesetzes und die
Transparenzvorgaben des EU AI Act.
Apertus ist als Grundlage gedacht für neue KI-Anwendungen in Forschung, Gesellschaft und Wirtschaft. EPFL, ETH Zurich, CSCS / Molinari Design
Transparenz und Offenheit.
Sprachvielfalt und Mehrsprachigkeit.
Logische Fähigkeiten und Genauigkeit.
Datenschutz und Sicherheit.
17.01.26, 11:53
Apertus: Testbericht zum offenen Schweizer KI-Modell - 20 Minuten
Seite 3 von 10
https://www.20min.ch/story/apertus-testbericht-zum-offenen-schweizer-ki-modell-103409077
Die gezielte Berücksichtigung vieler Sprachen – von grossen Weltsprachen bis zu Minderheitensprachen – soll Apertus
zu einem der vielfältigsten Modelle weltweit machen, so die Entwickler.
Finanzierung und Partnerschaften
Rechenleistung:
Rechenleistung:
Rechenleistung:
Rechenleistung: Über 10 Mio. GPU-Stunden auf dem Supercomputer Alps des Swiss National Supercomputing
Centre (CSCS).
Finanzierung:
Finanzierung:
Finanzierung:
Finanzierung: ETH-Rat, das strategische Führungs- und Aufsichtsorgan des ETH-Bereichs (ETH Zürich, EPFL, WSL,
PSI, Empa, Eawag).
Partner:
Partner:
Partner:
Partner: Swisscom unterstützt das Projekt als wichtigste strategische Partnerin.
So kommst du an das Modell ran
Apertus ist kein Chatbot, sondern ein Werkzeug für Fachleute. Auf Hugging Face stehen zwei Varianten bereit: mit 8 und
70 Milliarden Parametern (zum Vergleich: Experten schätzen GPT-5 auf bis zu 52 Billionen Parameter). Swisscom bietet
zusätzlich Cloud-Dienste.
Wer das Modell direkt ausprobieren will, kann dies über 
publicai.co  tun. Ohne Login läuft dort das kleinere 8B-Modell.
Wer sich registriert, erhält Zugang zur grösseren 70B-Variante.
Wir testen Apertus für dich
Getestet haben wir die grosse Version, mit 70 Milliarden Parametern. Gegenüber stehen die KI-Giganten «ChatGPT» und
«Gemini 2.5». Beides Modelle, hinter denen mehrere Milliarden Dollar Entwicklungsgelder stecken. Ein unfairer Kampf?
Ein erstes Fazit zeigt Stärken und Schwächen:
Die Oberfläche
17.01.26, 11:53
Apertus: Testbericht zum offenen Schweizer KI-Modell - 20 Minuten
Seite 4 von 10
https://www.20min.ch/story/apertus-testbericht-zum-offenen-schweizer-ki-modell-103409077
Logik zeigt Schwächen
Apertus leidet an den gleichen «Krankheiten», die LLMs schon lange plagen. Sprachmodelle sind keine
Rechenmaschinen. Zudem besitzt Apertus keinen «Reasoning Mode», kann also nicht über Probleme nachdenken. Das
macht logische Schlussfolgerungen schwierig bis unmöglich.
Rätoromanisch – das KI-Kryptonit
Bei der Frage nach einer rätoromanischen Übersetzung streicht Gemini 2.5 gleich die Segel und gibt an, kein
Rätoromanisch zu können. GPT-5 und Claude behaupten, Rätoromanisch einigermassen zu beherrschen.
Als Test lassen wir die ersten beiden Punkte der publizistischen Leitlinien von 20 Minuten in Rumantsch Puter übersetzen.
Ein Rätoromanisch, das hauptsächlich im Oberengadin gesprochen wird:
Die Oberfläche ist schlicht und übersichtlich gehalten. Es gibt eine Schaltfläche, mit der man die KI in den «Schwiizerdütsch-Mode» versetzen kann.
PublicAI.co/Screenshot
1 / 2
Eine einfache Rechnung klappt normalerweise problemlos. Aber hier macht die KI direkt einen Fehler. PublicAI.co/Screenshot
1 / 4
17.01.26, 11:53
Apertus: Testbericht zum offenen Schweizer KI-Modell - 20 Minuten
Seite 5 von 10
https://www.20min.ch/story/apertus-testbericht-zum-offenen-schweizer-ki-modell-103409077
Das Ergebnis: Beide Modelle sind davon überzeugt, den besseren Text abgeliefert zu haben. Aber wer hat recht?
Für Michelle Freund und Nadja Hort, Lehrerinnen im Oberengadin, ist die Wahl eindeutig: «Der Text von GPT-5 ist
passabel, auch wenn er viele Fehler enthält und zwei Rumantsch mischt, Puter und Vallader.»
Der Text von Apertus sei aber praktisch unbrauchbar: «Hier gibt es noch mehr Grammatikfehler, noch mehr Endungen,
die nicht stimmen und noch mehr Sprachen-Mischmasch.»
Schwiizerdütsch – welche KI liefert die besseren Texte?
Alle grösseren KI-Chatbots können «Schwiizerdütsch», die einen besser (Gemini 2.5), die anderen schlechter (Grok 4).
Apertus besitzt sogar einen «Knopf» mit dem man die Kommunikation auf Schwiizerdütsch ein- und ausschalten kann.
Es gibt eine Schaltfläche, mit der man die KI in den «Schwiizerdütsch-Mode» versetzen kann. PublicAI.co/Screenshot
Erste Erfahrungen sind ernüchternd. Der Dialekt von Apertus wirkt oft zusammengewürfelt und gekünstelt. So spricht
GPT-5 liefert schnell einen Text, der für einen Laien korrekt anmutet. Hier ein Auszug aus Text A. ChatGPT/Screenshot
1 / 4
17.01.26, 11:53
Apertus: Testbericht zum offenen Schweizer KI-Modell - 20 Minuten
Seite 6 von 10
https://www.20min.ch/story/apertus-testbericht-zum-offenen-schweizer-ki-modell-103409077
niemand in der Deutschschweiz. Anders sieht es bei Gemini aus. Auch dort gibt es einzelne Wörter, die keinen Sinn
ergeben, aber das Sprachbild als Ganzes ist stimmiger.
Als finalen Test lassen wir beide KIs einen CH-Rap kreieren. Der Prompt: Schreib mir einen kurzen, humorvollen Rap zum
Thema «Zürisee».
So tönen die beiden Raps, wenn man sie musikalisch umsetzt:
Zürisee (Gemini)
0:00
1:30
Hier ein Auszug au den 83 (!) Zeilen, die Apertus abgeliefert hat. Grösstenteils eine Aneinanderreihung von Schweizerdeutsch anmutenden Wörtern,
die keinen Sinn ergeben. PublicAI.co/Screenshot
1 / 2
17.01.26, 11:53
Apertus: Testbericht zum offenen Schweizer KI-Modell - 20 Minuten
Seite 7 von 10
https://www.20min.ch/story/apertus-testbericht-zum-offenen-schweizer-ki-modell-103409077
Zürisee (Apertus)
0:00
4:46
Die Tests verdeutlichen: Apertus ist derzeit eine Testumgebung, nicht ein Ersatz für etablierte KI-Assistenten. Mit den
grossen Konkurrenten kann es (momentan) nicht mithalten. Das ist angesichts der unterschiedlichen Budgets auch nicht
verwunderlich.
Wie es mit Apertus weitergeht
Die Entwickler verstehen das Modell als Startpunkt. Geplant sind regelmässige Updates und spezialisierte Varianten für
Recht, Bildung oder Gesundheit. Ziel ist es, die offene Infrastruktur gemeinsam mit Forschung und Wirtschaft
auszubauen.
Für die neusten AI News: Jetzt Push abonnieren!
Wir bereiten täglich diejenigen KI-News auf, die im echten Leben und am Arbeits- oder Ausbildungsplatz einen ganz
praktischen Nutzen bringen. Dafür lassen wir ganz viel Nerdiges und kurzlebige News zum Thema weg. Weil es aber
auch in der AI-Welt manchmal richtig schnell gehen muss, lohnt es sich,
hier den neuen AI-Push in der App zu aktivieren  und auf «bestätigen» zu klicken (funktioniert nur in der App).
So gehts:
So gehts:
So gehts:
So gehts: Installiere die neuste Version der 20-Minuten-App. Tippe unten auf «Profil», dann aufs «Einstellungen»-
Zahnrad und schliesslich auf «Push-Mitteilungen». Wähle hier die gewünschten Themen aus.
Folgst du schon 20 Minuten auf Whatsapp?
Folgst du schon 20 Minuten auf Whatsapp?
Folgst du schon 20 Minuten auf Whatsapp?
Folgst du schon 20 Minuten auf Whatsapp?
Eine Newsübersicht am Morgen und zum Feierabend, überraschende Storys und Breaking News: Abonniere den
Whatsapp-Kanal von 20 Minuten und du bekommst regelmässige Updates mit unseren besten Storys direkt auf
dein Handy.
Jetzt 20 Minuten abonnieren
Michael Andai (mia) arbeitet seit 2024 für 20 Minuten. Er ist seit 2025 AI-Journalist und schreibt über alles rund um künstliche Intelligenz.
von 
Michael Andai
17.01.26, 11:53
Apertus: Testbericht zum offenen Schweizer KI-Modell - 20 Minuten
Seite 8 von 10
https://www.20min.ch/story/apertus-testbericht-zum-offenen-schweizer-ki-modell-103409077
Deine Meinung zählt
Fehler gefunden? Jetzt melden.
14 Kommentare
Kommentarfunktion geschlossen
Das Thema bewegt mich.
Ich fühle mich gut informiert.
Der Artikel ist fair und ausgewogen.
419
14
418
Merken
Dasmussauchmalgesagtsein vor 4 Monaten
So so, ein halbes rotes Kreuz. Hat die KI die Legitimation der Verwendung eines völkerrechtlich geschützten Zeichens auch
abgeklärt?
LOVE IT | 54/94 Lesende
Stinkibear vor 4 Monaten
@DerBüsser völkerrechtlich? Markenrechtlich.. Und da braucht es mehr als Farbe und Grundform.
GENAU | 12/16 Lesende
krassmannjunior vor 4 Monaten
Wo bleibt der Aufschrei der Grünen?
UNNÖTIG | 47/108 Lesende
Papierfliegerpilot vor 4 Monaten
@krassmann denke, die sind dafür. Sag ich, ein grünliberaler.
LOVE IT | 13/25 Lesende
Turner vor 4 Monaten
15+5x5=35??? Ich denke nicht! 15+25=40!
GENAU | 57/113 Lesende
17.01.26, 11:53
Apertus: Testbericht zum offenen Schweizer KI-Modell - 20 Minuten
Seite 9 von 10
https://www.20min.ch/story/apertus-testbericht-zum-offenen-schweizer-ki-modell-103409077
Inhalte
News
Video
Lifestyle
Aktivitäten
Spiele
Fantasy League
Horoscope
GOAT
Services
Wetter
Live TV
Gutscheine
E-paper Archiv
RSS Feed
Werbeformate
Hol dir die 20 Minuten
App!
Bleib auf dem Laufenden.
Google News
TikTok
Whats App
Instagram
LinkedIn
Facebook
Twitch
Snapchat
Alle Kommentare anzeigen
Gratis Online-Spiele
Gratis Online-Spiele
Gratis Online-Spiele
Gratis Online-Spiele
Mehr Spiele
Alle Antworten zeigen
arpster vor 4 Monaten
@Turner ist mir auch aufgefallen, dass das Resultat falsch ist... peinlich für die Journalist:innen von Tamedia
QUATSCH | 22/43 Lesende
13.Rente vor 4 Monaten
@Turner bei mir gibt das 100
QUATSCH | 38/49 Lesende
deul vor 4 Monaten
@13.Rente Punkt vor Strich, nicht von links nach rechts.
GENAU | 21/25 Lesende
Solitaire
Kreuzworträtsel
Sudoku
Mahjong
Bubbles
Snake
Schach
17.01.26, 11:53
Apertus: Testbericht zum offenen Schweizer KI-Modell - 20 Minuten
Seite 10 von 10
https://www.20min.ch/story/apertus-testbericht-zum-offenen-schweizer-ki-modell-103409077
Karriere | Impressum & Team | Archiv | Datenschutzerklärung | AGB | Privatsphäre | Werbeformate & Tarife` },
  { title: `CLAUDECODE/20-Evaluation-KI-Loesungen/EVKI-Albert/Block-2-KIEV-WR-Ziele-Machbarkeit-Projektstudie.pdf`, body: `AIBS –AI Business Specialist 
Fachausweis 
Unit-2 WR und Initialisierung Eval.
WR:Investitionsrechnen
Projektinitialisierung – Ziele – Machbarkeit usw.
21. Februar 2026 / Albert Rijkeboer
Traditionell
Wasserfall Ansatz, formelle diskrete Schritte.
Vgl. Buch
2
Traditionell: Die Schritte der Beschaffung (Teil Evaluation)
Wasserfall Ansatz, formelle diskrete Schritte.
Vgl. Buch
3
Beispiel vereinfachtes Vorgehen
Die wesentlichen Schritte
4
Initialisierung
Vorbereitung
Evaluation Durchführung
Evaluation 
Abschluss mit 
Entscheid
PD
P-Plan
Team
Grob 
Anford.
Markt 
Übersicht.
RFI
Filter
SDL
SDL
Eval.
Ents.
Kriterien
Bericht
Antrag
Vorgehen
Konventionelle Angehens-Weise ggü. «Agile» Angehens-Weise
Plan- versus Wert- und Nutzen-getrieben, kurze Erklärung
5
6
Klassisch versus agil II
Fix
Variabel
Agil
Klassisch
Aufwand
Zeit
Umfang
Plan-
gesteuert
Umfang
Aufwand
Zeit
Geschäftswert-
gesteuert
Ambition Kollaboration
Stossrichtung
2
7
Klassisch versus agil III
Ausgangspunkt
1
Planung
2
Abschluss
4
Durchführung
3
Ausgangspunkt
1
Inkrement
3
Inkrement
4
Inkrement
5
Abschluss
7
Ambition Kollaboration
Konsens und Konsent
8
Konsens
Ziel: Alle sind einverstanden.
• Es wird so lange diskutiert, bis alle zustimmen.
• Jede Person muss „Ja“ sagen können.
• Ein einziger Widerstand kann die Entscheidung blockieren.
• Häufig führt das zu langen Diskussionen oder zu sehr verwässerten Kompromissen, damit alle zustimmen können.
Beispiel: „Wir entscheiden erst, wenn wirklich jede Person sagt: Ich bin dafür.“
Konsent
Ziel: Niemand hat einen schwerwiegenden Einwand.
• Es geht nicht darum, dass alle begeistert sind.
• Es reicht, wenn niemand einen begründeten, relevanten Einwand hat.
• Ein Einwand ist kein „Ich mag das nicht“, sondern ein Hinweis auf Risiken oder Schäden.
• Entscheidungen können schneller getroffen und später iterativ verbessert werden.
Beispiel: „Ich bin nicht begeistert, aber ich habe keinen Einwand – also können wir es ausprobieren.“
Der Begriff Konsent kommt ursprünglich aus der Soziokratie, einem Organisations- und Entscheidungsmodell, das in den 1970er-Jahren von Gerard Endenburg in den Niederlanden entwickelt wurde.
Grundidee der Soziokratie kommt von Kees Boeke, wurde in 1926 umgesetzt im Schulkonzept „Werkplaats Kindergemeenschap“ in Bilthoven
9
Konsent – der agile Bruder des Konsens
Jeder sagt ja.
Langsam, zermürbend.
Streben nach perfekten Entscheidungen.
Enger Spielraum für Entscheidungen.
Keiner sagt nein.
Schnell, intensiv.
Good enough for now, save enough to try.
Grosser Entscheidungsspielraum.
Konsens
Konsent
Ambition Kollaboration
Die Wunderfrage
Herkunft und wie
10
• Die „Wunderfrage“ ist ein Klassiker unter den Systemischen 
Fragetechniken. Sie stammt von Steve de Shazer, einem der Begründer 
der lösungsfokussierten Kurzzeittherapie, und wurde erstmals in den 
1980er-Jahren vorgestellt. Die Wunderfrage geht davon aus, dass jedes 
Problem eine Lösung hat und dass es hilfreich ist, den Fokus auf diese 
Lösung zu richten.
• Die Wunderfrage ist eine offene Frage, die sich auf eine hypothetische 
Zukunft bezieht. Sie lautet: „Stellen Sie sich vor, Sie wachen morgen auf, 
und das Problem, das Sie haben, ist gelöst. Was hat sich verändert?“ 
Diese Frage zielt darauf ab, die Aufmerksamkeit weg vom Problem 
und hin zur Lösung zu lenken. Sie ermöglicht es den Klient:innen, die 
eigenen Ressourcen und Stärken zu erkennen und Lösungen zu finden, 
die bisher vielleicht nicht in Betracht gezogen wurden.
Beispiel für die Wunder
Frage:
11
1.
Mal angenommen, in der heutigen Nacht würde ein Wunder geschehen 
und morgen früh, wenn Sie aufwachen, ist ihr Problem gelöst. Woran 
würden Sie morgens merken, dass ein Wunder geschehen ist? Wer 
ausser Ihnen würde erkennen, dass das Problem gelöst wurde?
2.
Mal angenommen, morgen früh wäre Problem X nicht mehr vorhanden, 
woran würden Sie es zuerst merken? Was würde sich ebenso verändern?
3.
Wie stellen Sie sich den darauffolgenden Tag vor, ganz ohne das 
Problem?
4.
Wie würde sich Ihr Verhältnis zu Ihrer Partnerin / Kollegin / Chefin 
ändern?
5.
Was würde sich ändern, wenn Sie morgen früh aufwachen und Sie ihr 
Ziel erreicht haben?
6.
….. Usw.
«EVALUIERT» kurzgefasst
Quelle: Der-Schlüssel-zur-Evaluation-Vorgehensmodell.pdf
12
1. Bestimmung des Evaluationsgegenstandes
2. Akteure und Rollen
3. Evaluationszwecke
4. Kriterien
5. Vorgehen und Methoden
6. Erhebungen
7. Interpretation und Bewertung
8. Berichterstattung
9. Nutzung
10.Evaluation der Evaluation
Ambition Kollaboration
13
Themen basiertes
Modell
für KI
Evaluation &
Einführung
KI-Strategie
KI-
Regulierung
KI-Einsatz
Daten
KI-Kompetenzen
KI-
Technologie
Grundlage für KI-Integration 
(und generell für digitale 
Transformation).
Konkreter Nutzen, 
Use Cases.
Regeln und Werte 
für Anwendung und 
Projekte.
Werkzeuge und 
technische 
Grundlage als 
Ermöglicher.
Menschen und 
ihre 
Motivation 
und 
Fähigkeiten.
Rahmen für alle KI-
Initiativen. 
Thema
XXXXXX
Ambition Kollaboration
14
Eine mögliche Arbeitsweise
15
Exploitation
Exploration
Ziel
Ausbeuten & Effizienz, um kurzfristigen Kundenwunsch zu 
erfüllen.
Lernen & Innovation, um langfristigen Kundenwunsch zu erfüllen.
Handlungsfelder
Effiziente und effektive Abwicklung bestehender Leistungen
Kreative und wandlungsfähige Entwicklung neuer Leistungen
Innovationsart
Inkrementelle Innovation 
Radikale Innovation 
Massstäbe
Kosten, Profit, Margen, Produktivität 
Innovation, Wachstum, Meilensteine 
Organisationsstruktur
en
Formal, Routine, mechanisch 
Anpassungsfähig, agil, nicht-Routine, organisch 
Kultur und Verhalten 
Effizienz, geringes Risiko, Stabilität, hohe Qualität 
Risikofreude, Geschwindigkeit, Flexibilität, Experimentieren 
Führungsstil
Autoritär, top-down 
Visionär, involvierend 
Mitarbeitertyp
Umsetzer, Spezialisten
Unternehmer, Generalisten 
Ambition Kollaboration
16
Fazit alle Gruppen
1. Runde Druckerempfehlung
17
- Zu viel ARD (allgemeines raten und diskutieren) à sollte sich entwickeln Richtung ZDF: 
Zahlen / Daten / Fakten
- Keine Annahmen!
REFLEKTION
Was ist hängen geblieben wo gibt es Probleme
• Was hat dir noch beschäftigt?
• Gab es für Dich im Nachhinein noch «Ah-ha» Erlebnissen, so ja welche?
• Was sollen wir heute unbedingt noch tiefer behandeln?
• Andere Anliegen?
1.
•
Lebenszyklus & 
Vorgehen
•
Wirtschaftlichkeits
-betrachtung & 
Bewertung
Roadmap: Evaluation von KI Lösungen EVKI 
Von der Idee, über die Wirtschaftlichkeit bis zur Auswahl eines ICT-AI-Vorhabens
19
1.
•
Lebenszyklus & 
Vorgehen
•
Wirtschaftlichkeits
-betrachtung & 
Bewertung
3.
• Praxis Referat 
Q&A
• Anforderungen
• & Kriterien 
5.
• KI-spezifische 
Machbarkeits- &
• Governance-
Bewertung 
7.
• Erstellung 
Business Case
2.
• Ziele,
• Machbarkeit &
• Projektstudie 
4.
• Ausschreibung,
• Pflichtenheft &
• Bewertung 
6.
• Nutzen 
&Wirkung
• WR-bewertung 
KI-Lösungen 
8.
• Challenge in 
Gruppen 
Challenge
Lehrmittel: Beschaffung von Informatikmitteln 
Script: Investitionsrechnen
Handout Lean Agile Procurement
Roadmap heute NM
Einleitung & Überblick
20
Zusammenfassung
2. 
Gruppenübung 
Evaluation 
Drucker mit 
WR
3. Projekt 
Initialisierung
Ziele 
definieren 
4.Theorie
1.
Einleitung
Rückblick
Roadmap
Tagesziele
6. Projekt 
Vorgehen 
festlegen 
7. Abschluss 
& Ausblick
5.Fragen an 
CMI 
25.02.2026
Handlungskompetenzen Unit 2. - Projektphase 
Vorstudie: Ziele, Machbarkeit & Projektstudie 
Informatiklösungen Evaluieren, die Teilnehmenden … 
21
• erläutern Zweck und Inhalt der Vorstudie (Zielformulierung, grobe Anforderungen, 
Nutzen, Risiken, Projektabgrenzung) und grenzen eine technische 
Machbarkeitsprüfung von einer umfassenden Machbarkeits-/Projektstudie ab,
• formulieren Ziele (inkl. SMART, Muss-/Kann-/Soll-Ziele, Kano) und leiten daraus 
erste Anforderungen ab (funktional, nicht-funktional),
• kennen Methoden zur Machbarkeitsprüfung (technische Machbarkeitsprüfung, 
Machbarkeits- bzw. Projektstudie, PoC, Prototyp, Simulation, Expertenbefragung, 
Referenzobjekte) und können diese für KI-Vorhaben einordnen,
• identifizieren bereits in der Vorstudie KI-spezifische Risiken (Datenqualität, 
Abhängigkeit von Trainingsdaten, Unsicherheiten, Blackbox-Charakter) und 
berücksichtigen sie in der Machbarkeitsbetrachtung.
Projektmanagement
Strategie
Lösungsentwicklung
Governance
Geschäftschance
n
Evaluation von 
KI-Lösungen
Business 
Analyse
Umfeldanalyse
Praxisarbeit
EVKI:
• Evaluation von spezifische KI-Themen
• Modelltraining
• Szenarien
• Prüfung von KI-Lösungen 
Einordnung im Gesamtmodule
23
Optimierung
Umsetzung
Changemanagement
Prüfungsvorbereitung
Wissensmanagement
Einordnung im Gesamtmodule
24
Machbarkeit 
Rechtlich
Machbarkeit 
Technisch
Wirtschaftlichkeit
Nutzen
Machbarkeit
(Antrag)
Business Case
KI-basierte Lösungsansätze auf Machbarkeit prüfen 619
FP
Embedded KI-Lösung für XYZ (Privat & öffentlicher Hand)
Eigene B-Case
Die Lehrmittel
Script / Buch / Leitfaden Praxisarbeit / Beispiele aus der Praxis
25
Im Teams
Im Teams
2. Gruppenübung Evaluation Drucker mit WR
Theorie Input Investitionsrechnen
Aktualisierung WR-Druckerempfehlung
Kahoot
26
Investition und Finanzierung einfach erklärt
 
 
 
 
 
 
 
 
       Bilanz Rechnung
27
Aktiva
1. Anlagevermögen
2. Umlaufvermögen
Passiva
1. Eigenkapital
2. Fremdkapital
Was wir mit unser Geld machen
(Umwandlung von Kapital in Vermögen)
Von wo unser Geld kommt
(Kapitalbeschaffung)
Investitionen = Mittelverwendung
Finanzierung = Mittelherkunft
Typische Kennzahlen
• Liquidität
• Cash-Flow
• Anlagendeckung
• Rentabilitäten
Investitionsarten
• Ersatz
• Rationalisierung
• Erweiterung
• Umstellung
• Diversifikation
Wo wir das Geld nehmen
• Innenfinanzierung
• Selbst/Abschreibung
Rückstellung
• Aussenfinanzierung
• Eigen / Fremd
• Besondere
• Leasing
Investitionsrechnung (Lohnt es sich…?)
Statische Verfahren
•
Kostenvergleich, Gewinnvergleich
•
Amortisationsvergleich, Rentabilitätsvergleich
Dynamische Verfahren
•
Kapitalwert
•
Interne Zinsfuss
Statische- und Dynamische-Betrachtung
Die Parameter
28
• Aufwand / Nutzen
• Abschreibung
• Betriebskosten
• Zinsen
• Kostenvergleichsrechnung
• Gewinnvergleichsrechnung
• ROI
• Pay Back
Statische Investitionsrechnung
Vergleich von z.B. zwei Maschinen
29
• Kostenvergleichsrechnung:  
Welche Maschine kostet am wenigsten?
• Gewinnvergleichsrechnung:  
Welche Maschine erwirtschaftet besser?
• Rentabilitätsvergleichsrechnung: 
Mit welcher Maschine wird die Investierung besser
 
 
 
 
 
verzinst?
• Amortisationsvergleichsrechnung: 
Mit welcher Maschine fliesst die Investition schneller
 
 
 
 
 
im Unternehmen zurück?
Statische Investitionsrechnung
Vergleich von z.B. zwei Maschinen
30
• Kostenvergleichsrechnung:  
Welche Maschine kostet am wenigsten?
• Gewinnvergleichsrechnung:  
Welche Maschine erwirtschaftet besser?
• Rentabilitätsvergleichsrechnung: 
Mit welcher Maschine wird die Investierung besser
 
 
 
 
 
verzinst?
• Amortisationsvergleichsrechnung: 
Mit welcher Maschine fliesst die Investition schneller
 
 
 
 
 
im Unternehmen zurück?
Unsere Rechnungsbeispiel von zwei Maschinen
Annahme oder Anforderung: Wir müssen 8’000 Stück pro Jahr produzieren können
31
Vergleichsthema
Maschine 1
Maschine 2
Anschaffungskosten CHF
100’000
80’000
Nutzungsdauer in Jahre
5
5
Kalkulatorische Zinsen
Wartung Instandhaltung pro Jahr
5’000
7’000
Kapazität (Anzahl Stück pro Jahr)
10’000
9’000
Variable Stückkosten (Löhne, 
Material, …)
0.80
0.90
Verkaufspreis pro Stück
?
?
Vergleichsthema Kosten
Maschine 1
Maschine 2
Abschreibung (Kosten/Nutzdauer) 
20’000
16’000
Kapitalbindung gemäss statischer Betrachtung
Im Beispiel Maschine 1
32
100’000
5
CHF
Jedes Jahr fliesen über 
«Umsatzerlöse» 20’000 
CHF ins Unternehmen 
zurück.
Nach 5 Jahre sind 100’000 CHF ins 
Unternehmen zurück geflossen. à 
Es ist kein Geld mehr in der 
Maschine gebunden
Im Durchschnitt sind 50’000 CHF 
in der Maschine gebunden
Dieses Kapital von 
50’000 CHF soll mit 
dem kalkulatorischen 
Zinssatz (z.B. 5%) 
verzinst werden.
50’000 * 5/100=2’500
Unsere Rechnungsbeispiel von zwei Maschinen
Zuerst die «fixe Kosten»
33
Vergleichsthema
Maschine 1
Maschine 2
Anschaffungskosten CHF
100’000
80’000
Nutzungsdauer in Jahre
5
5
Kalkulatorische Zinsen
Wartung Instandhaltung pro Jahr
5’000
7’000
Kapazität (Anzahl Stück pro Jahr)
10’000
9’000
Variable Stückkosten (Löhne, 
Material, …)
0.80
0.90
Verkaufspreis pro Stück
?
?
Vergleichsthema Kosten
Fixe Kosten
Maschine 1
Maschine 2
Abschreibung (Kosten/Nutzdauer) 
20’000
16’000
Kalkulatorische Zinsen (Kosten/2 * Zins)
2’500
2’000
Wartung
5’000
9’000
Unsere Rechnungsbeispiel von zwei Maschinen
Zuerst die «fixe Kosten»
34
Vergleichsthema
Maschine 1
Maschine 2
Anschaffungskosten CHF
100’000
80’000
Nutzungsdauer in Jahre
5
5
Kalkulatorische Zinsen
2’500
2000
Wartung Instandhaltung pro Jahr
5’000
7’000
Kapazität (Anzahl Stück pro Jahr)
10’000
9’000
Variable Stückkosten (Löhne, 
Material, …)
0.80
0.90
Verkaufspreis pro Stück
?
?
Vergleichsthema Kosten
Fixe Kosten
Maschine 1
Maschine 2
Abschreibung (Kosten/Nutzdauer) 
20’000
16’000
Kalkulatorische Zinsen (Kosten/2 * Zins)
2’500
2’000
Wartung
5’000
9’000
Unsere Rechnungsbeispiel von zwei Maschinen
Produktion ist 8’000 Stück pro Jahr à zu den var. Kosten 
35
Vergleichsthema
Maschine 1
Maschine 2
Anschaffungskosten CHF
100’000
80’000
Nutzungsdauer in Jahre
5
5
Kalkulatorische Zinsen
2’500
2000
Wartung Instandhaltung pro Jahr
5’000
7’000
Kapazität (Anzahl Stück pro Jahr)
10’000
9’000
Variable Stückkosten (Löhne, 
Material, …)
0.80
0.90
Verkaufspreis pro Stück
?
?
Vergleichsthema Kosten
Fixe Kosten
Maschine 1
Maschine 2
Abschreibung (Kosten/Nutzdauer) 
20’000
16’000
Kalkulatorische Zinsen (Kosten/2 * Zins)
2’500
2’000
Wartung
5’000
9’000
Vergleichsthema Kosten
Variable Kosten
Maschine 1
Maschine 2
Löhne & Material (Stück * 
Menge)) 
6’400
7’200
Unsere Rechnungsbeispiel von zwei Maschinen
Produktion ist 8’000 Stück pro Jahr à zu den var. Kosten 
36
Vergleichsthema
Maschine 1
Maschine 2
Anschaffungskosten CHF
100’000
80’000
Nutzungsdauer in Jahre
5
5
Kalkulatorische Zinsen
2’500
2000
Wartung Instandhaltung pro Jahr
5’000
7’000
Kapazität (An` },
  { title: `CLAUDECODE/20-Evaluation-KI-Loesungen/EVKI-Albert/Block-3-KIEV-Ziele-Kriterien.pdf`, body: `AIBS –AI Business Specialist 
Fachausweis 
Unit-3 Ziele / Anforderungen / Kriterien
Projektinitialisierung– Ziele – Machbarkeit usw.
25. Februar 2026 / Albert Rijkeboer
Handlungskompetenzen Unit 3. - Projektphase 
Hauptstudie/Konzeption: Anforderungen & Kriterien  
Informatiklösungen Evaluieren, die Teilnehmenden … 
2
• beschreiben den Prozess zur Ermittlung von Anforderungen (Stakeholder, 
bestehende Systeme, Dokumente, Prozesse, Normen/Standards) und können 
typische Quellen systematisch nutzen, 
• unterscheiden Ziel, Anforderung und Messkriterium und wenden diese 
Unterscheidung auf ein konkretes (KI-)Vorhaben an, 
• strukturieren Anforderungen für ein Lastenheft (Ausgangslage, IST, Ziele, Muss-
/Soll-/Kann-Anforderungen, Rahmenbedingungen, Bewertungskriterien, 
Offertenvorgaben), 
• kennen unterschiedliche Typen von Kriterien (Ausschluss-/K.O.-Kriterien, 
qualitative/quantitative Kriterien, Auswahlkriterien) und die grundlegende Struktur 
eines Kriterienkatalogs – inkl. KI-spezifischer Kriterien wie Datenqualität, Model-
Interpretierbarkeit, ethische Aspekte,
• erklären den Ansatz agiler Beschaffung (z. B. agiles Agreement, 
Kollaborationskodex) und reflektieren, wann dieser für KI-Projekte sinnvoll ist.
Traditionell
Wasserfall Ansatz, formelle diskrete Schritte.
Vgl. Buch
3
Ambition Kollaboration
4
Themen basiertes
Modell
für KI
Evaluation &
Einführung
KI-Strategie
KI-
Regulierung
KI-Einsatz
Daten
KI-Kompetenzen
KI-
Technologie
Grundlage für KI-Integration 
(und generell für digitale 
Transformation).
Konkreter Nutzen, 
Use Cases.
Regeln und Werte 
für Anwendung und 
Projekte.
Werkzeuge und 
technische 
Grundlage als 
Ermöglicher.
Menschen und 
ihre 
Motivation 
und 
Fähigkeiten.
Rahmen für alle KI-
Initiativen. 
Thema
XXXXXX
Roadmap heute Abend
Einleitung & Überblick
5
Zusammenfassung
2. Präsentation 
CMI & Dialog
Q&A
3. Projekt 
Initialisierung
Ziele 
definieren 
4.Theorie
1.
Einleitung
Tagesziele
Roadmap
5. Projekt 
Vorgehen 
festlegen 
6. Abschluss 
& Ausblick
Roadmap: Evaluation von KI Lösungen EVKI 
Von der Idee, über die Wirtschaftlichkeit bis zur Auswahl eines ICT-AI-Vorhabens
6
1.
•
Lebenszyklus & 
Vorgehen
•
Wirtschaftlichkeits
-betrachtung & 
Bewertung
3.
• Praxis Referat 
Q&A
• Ziele, Anford.
• & Kriterien 
5.
• KI-spezifische 
Machbarkeits- &
• Governance-
Bewertung 
7.
• Erstellung 
Business Case
•
Challenge in 
Gruppen 
2.
• Ziele,
• Machbarkeit &
• Projektstudie 
4.
• Ausschreibung,
• Pflichtenheft &
• Bewertung 
6.
• Nutzen 
&Wirkung
• WR-bewertung 
KI-Lösungen 
8.
• Finalisierung 
Business Case
•
Repetition
•
Lean Agile Proc.
Challenge
Lehrmittel: Beschaffung von Informatikmitteln 
Script: Investitionsrechnen
Handout Lean Agile Procurement
2. Präsentation & Dialog CMI und Q&A
KI +
Flughafen Zürich
7
8
Praxisreferat
9
10 Minuten Pause, es geht weiter um XX:XX Uhr
10
Fazit und Stimmen zu der Präsentation & Dialog
11
3. Projekt Initialisierung, Ziele definieren
….
12
Beschreibung B-CASE
Firma Hole-in-One AG - Aufgabe
13
• Der CEO hat erkannt das es eine moderne AI-Integration in «sämtlichen 
Produkten» der Hole-in-One AG braucht, um die Zukunft dieses Unternehmen 
zu sichern. Sowohl im Golf als auch im Fitnessbereich und auch Intern für die 
Prozessoptimierung.
• Als wichtigste Aufgabe sollten sie als Stabsleiter der Informatik eine AI-
Software Lösung für die Hole-in-One AG evaluieren.
- Anmerkung: Dies ist eine reale Aufgabe….. Nicht konkret….. Hohe Erwartungen…. 
Anforderungen nicht definiert …….
• 1. Gruppenaufgabe (Zeitbudget 45 Min.): 
- Beschreibe mögliche Ziele die der Hole-in-One mit der Beschaffung der AI-
Software erreichen möchte.
- Unterscheide zwischen Business Ziele & Projekt Ziele
- Lade das Ergebnis hoch im «Teams» unter Gruppenübung 25.02.26
Beschreibung B-CASE
Firma Hole-in-One AG - Hintergrundinformation
14
• Der CEO denkt das AI in den Bereiche Business Intelligence, Verkauf und 
Helpdesk grosse Verbesserungen bringen kann. Erwartungen sind:
- Die Kundenzufriedenheit wird massgeblich verbessert.
- Das Unternehmen kann Aufgrund intelligente Kombination der Daten besser 
gesteuert werden.
- Die Verkaufszahlen werden AI-unterstützt gesteigert.
- Helpdesk wird effizienter abgewickelt und auch neu 24 Std. pro Tag mit AI-
Service erreichbar.
• Es stehen eine Anzahl Standard Software zur Auswahl, siehe nächste Seite, die 
in der Evaluation genutzt werden können. Darf erweitert werden.
• Als AI-Business Spezialist und Stabsleiter Informatik haben sie und ihr Team die 
Aufgabe das Projekt zu initialisieren, die Evaluation von A bis Z (bis zum 
Entscheid) durchzuführen und die empfohlene Lösung auf Machbarkeit, nach 
Kriterien, Wirtschaftlichkeit und Risiken beurteilt zu haben.
Lösungen und Einsatzgebiet: BI, Helpdesk, Verkauf
Aus dieser Standard Lösungen (oder weitere) kann eine Vor-Auswahl getroffen werden. Und 
ist das Einsatzgebiet und die erwartete «High-Level» Wirkung zu erarbeiten.
15
•
ConRat nennt für ihren ChatBot4You kleine und mittleren Unternehmen (KMU) ohne bestimmten Branchenfokus als Zielgruppe. Dabei eignet 
sich das Produkt auch für den unternehmensinternen Einsatz.
•
epicinsights möchte mit ihrem Produkt epicAi Unternehmen ansprechen, die ihren Datenmix zeitnah und effizienter verarbeiten sowie 
mittelfristig eigene Expertise in den Bereichen Data Science, Data Processing und KI aufbauen möchten.
•
Das Angebot von Inspirient eignet sich nach eigenen Angaben für mittelständische Unternehmen und Grosskonzerne, die die Wertschöpfung 
aus ihren Daten effizienter gestalten wollen.
•
SCOUT eignet sich nach Angaben von MAPEGY für Innovations-, Technologie- und F&E-Manager*innen sowie Analyst*innen aller Hightech-
Unternehmen weltweit und unabhängig von der Branche.
•
Neohelden gibt an, dass ihr KI-Assistent Neo in allen Branchen, Unternehmen und Anwendungsfeldern eingesetzt werden kann, vom kleinen und 
mittelständischen Unternehmen bis hin zum Konzern.
•
Magellan von OpenText richtet sich an Kund*innen verschiedener Sparten und Unternehmensgrößen in datenintensiven Bereichen, wie 
beispielsweise Financial Services, Retail, Telecommunications, Manufacturing, Energy & Utilities oder auch dem öffentlichen Dienst.
•
Das Produkt bearch von Schober unterstützt alle Unternehmen, die Produkte und/oder Dienstleistungen an andere Unternehmen verkaufen.
•
Die Anwendung ReplyOne von Sematell richtet sich an Unternehmen und einzelne Abteilungen der Bereiche Customer Service und 
ContactCenter. Dabei gibt es keine Einschränkungen bezüglich Grösse oder Branche.
•
The MathWorks vertreibt seine MATLAB-Produkte an Unternehmen sämtlicher Branchen.
Ihr solltest als Team, später die Lösung einordnen:
AI im Produkt-App, AI-Unterstütze BI, Im Help Desk und oder im Verkauf 
16
Traditionell
Wasserfall Ansatz, formelle diskrete Schritte.
Vgl. Buch
17
1. Gruppenarbeit 45 Minuten
Beschreibe zuerst nur die möglichen Ziele die der Hole-in-One mit 
der Beschaffung der AI-Software erreichen möchte. 
18
• Business Ziele
• Projekt Ziele
Gruppenarbeit Reflexion
Business Ziele / Projekt Ziele
19
4. Theorie über Kriterien, Anforderungen und Ziele
Klare unterschied zwischen Ziele, Anfordeungen und Kriterien
20
Ziele à Kriterien & Anforderungen
Saubere Trennung zwischen Ziele, Anforderungen, Ausgangslage und 
Entscheidungskriterien
21
• Projektziel: Ziele beschreiben, was mit einem System erreicht werden soll.
- Wir können unterscheiden zwischen Businessziele und Projektziele, macht in vielen 
Firmen Sinn. Das Management denkt in B-Ziele, der PL hat P-Ziele…….
- Ein oder meistens mehrere Initiativen und Projekten liefern einen Teil-Beitrag, um das 
Business-Ziel zu erreichen!
• Kriterium: Ein Kriterium ist ein Merkmal, das relevant für eine Unterscheidung, eine
 
 
Bewertung oder Entscheidung ist.
• Anforderung: Anforderungen beschreiben dagegen, was mit einem System
 
 
     gemacht werden soll und in welcher Qualität dies geschehen muss. 
SMART Ziele formulieren
Erklerung SMART
22
1.
Specific 
 Spezifisch 
Das Ziel soll eindeutig, nicht vage sondern Präzise sein.
2.
Measurable Messbar 
Das Ziel soll Messbar sein.
3.
Achievable  Erreichbar 
Das Ziel soll ansprechend und erreichbar sein (oder attraktiv).
 
 
 
 
(manchmal sieht man auch «akzeptiert» in englisch accepted)
4.
Reasonable Angemessen Das Ziel soll möglich und realisierbar sein, eben realistisch.
Realistic 
 Realistisch
5.
Timebound  Terminiert 
Das Ziel soll mit einem fixen Datum festgelegt sein.
Ein Ziel ist nur dann S.M.A.R.T., wenn es diese fünf Bedingungen erfüllt!
Bei konsequenter Anwendung von „SMART“ ergeben sich klare, mess- und überprüfbare 
Ziele. Sie sollten auch Nutzenrelevant sein und Lösungsneutral!
Ziele ß à Anforderung
Anforderungen beschreiben, was das 
System können muss (... um die Ziele zu 
erreichen).
Die Anforderungen können 
normalerweise nach Projektabschluss 
direkt überprüft werden 
Ziele sagen aus: Was wollen wir mit dem 
System erreichen (bis wann).
Und beinhaltet normalerweise auch eine 
zeitliche Komponente.
Ziele können oft erst zu einem späteren 
Zeitpunkt überprüft werden (haben wir 
den gewünschten ROI erreicht).
 
 
Ziel 
 
 
 
 
Anforderung
23
Ziele ß à Anforderung
Anforderung müssten folgendermassen 
formuliert sein: "das System muss xxxx 
können".
Ziele müssten also primär in der Form 
"bis xx.xx wollen wir xxx erreicht haben" 
formuliert werden 
 
 
Ziel 
 
 
 
 
Anforderung
24
Bei einem "sauber" ablaufenden Projekt werden aber normalerweise zuerst die Ziele definiert
und anschliessend hieraus die Anforderungen abgeleitet.
Tip: Sammle zuerst B-Ziele, Jahresziele, Geschäftsziele und finde heraus welchen erwarten Wert
      dein Projekt zu diesem B-Ziel beiträgt.
Ziele-, Kriterien- und Anforderungskategorien
Klare Unterscheidung
25
• Ziele: 
 
z.B. finanzielle, strategische, operationelle Ziele.
• Kriterien: 
 
Funktionalen- technischen und allgemeinen Kriterien.
• Anforderungen: 
Funktionalen und nicht funktionalen Anforderungen.
 
 
       
Nicht funktionalen Anforderungen sind z.B.
 
 
 
Qualitätsanforderungen, technische Anforderungen,
 
 
 
gesetzliche Anforderungen und Rahmenbedingungen,
 
 
 
Entwicklungsanforderungen, ICT-betriebliche Anforderungen.
5. Projekt Vorgehen
26
Gruppenübung Vorgehensplan erstellen
Gruppenaufgabe (Zeitbudget 30 Min.): 
- Erarbeite ein grob Vorgehensplan mit 
Phasen (ohne Termine).
- Hinweis: Entscheidet euch für ein 
Vorgehenstyp (Klassisch oder mehr 
Agil).
- Lade das Ergebnis hoch im «Teams» 
unter «Ergebnisse 25-02-26»
Firma Hole-in-One AG – Aufgabe Vorgehensplan AI-Evaluation
27
6. Abschluss und Ausblick
Was wir gelernt haben……
Was war gut und was wollen wir anders machen am Mittwoch…
Und Blick nach vorne.
28
Abschluss: Rückblick / Ausblick
Tagesziele erreicht?
Was machen wir das nächste Mal?
29
• Um dies zu definieren, schauen wir kurz 
zurück:
- Was haben wir heute gelernt?
- Was war wirklich neu?
- Was wurde noch nicht so ganz 
verstanden?
- Wo gibt es Schwierigkeiten?
• Blick nach vorne:
- Was wollen wir unbedingt weiter üben?
EVKI– Block 2
Herzlichen Dank
30` },
  { title: `CLAUDECODE/20-Evaluation-KI-Loesungen/EVKI-Albert/Caddy_Bot_Sprechtext.pdf`, body: `I Hole-in-One AG
KI-Evaluation · Caddy-Bot
Sprechtext für die Präsentation
11. März 2026 · Challenge EVKI
Simona · Thomas · Dmitri · Stephanie · Hüseyin
I Gesamtdauer: ca. 13 Minuten · 21 Folien
Zeitübersicht
Sprecher
Folien
Wörter
Zeit
Dmitri
1–6
~430
3,5 Min.
Stephanie
7–10
~300
2,5 Min.
Simona
11–14
~290
2,5 Min.
Hüseyin
15–18
~290
2,5 Min.
Thomas
19–21
~230
2,0 Min.
Total
21 Folien
~1'540
≈ 13 Min.
I Tipp: Zügig aber deutlich sprechen. Pausen bei den fettgedruckten Kernaussagen einplanen – diese sind
die Anker des roten Fadens.
I DMITRI
Folien 1–6 · ca. 3,5 Min.
I Folie 1 – Titelfolie
Sonntagabend, 22 Uhr. Ein Golfclub-Mitglied will eine Startzeit buchen – und landet auf der
Mailbox. Buchung weg. Kunde weg. Umsatz weg. Das passiert bei uns. Heute noch. Täglich. Ich
bin Dmitri. Und zusammen mit Simona, Thomas, Stephanie und Hüseyin haben wir eine Antwort
erarbeitet: den Caddy-Bot – eine KI, die 24/7 für unsere Kunden da ist. Heute zeigen wir Ihnen:
das Problem, die Methode, den Vergleich – und eine klare Empfehlung.
I Folie 2 – Management Summary
Für alle, die es direkt wollen: VOISA gewinnt – 8.2 zu 6.1 Punkten. ROI 90 %. Break-even nach
2,6 Jahren. Netto-Nutzen über fünf Jahre: CHF 285'000. Alveni AI? Technisch schwächer, höheres
Risiko. Die Analyse ist eindeutig. Wie wir dazu gekommen sind – das sehen Sie jetzt.
I Folie 3 – Ausgangslage
Unsere Produkte sind etabliert. Aber der Markt schläft nicht. Wettbewerber setzen KI ein, während
wir Telefonreservationen noch manuell eintippen. Drei Pain Points: verlorene Buchungen nach
Bürozeiten, hohe Fehlerquote bei manuellen Einträgen, keine Skalierbarkeit in der Hochsaison.
Wer heute nicht automatisiert, verliert morgen Kunden. So einfach ist das.
I Folie 4 – Business-Ziele 1 & 2
Ziele nach SMART. Ziel 1: NPS von 3.2 auf 4.2 Sterne bis Ende 2026. Ziel 2: Average Order
Value plus 15 % durch KI-Empfehlungen bis Mitte 2027. Zufriedene Kunden. Mehr Umsatz. Klare
Messgrössen.
I Folie 5 – Business-Ziel 3
Und das grösste Ziel: Marktanteil in der Schweiz um 5 % steigern bis Ende 2027. Der
Caddy-Bot ist kein Nice-to-have – er ist der strategische Hebel, der uns vom Software-Verkäufer
zum Service-Partner macht.
I Folie 6 – Projektziel
Unser Lieferdatum: 30. April 2026 – fundierte Lösungsempfehlung. April ist Saisonstart.
Entschieden wird jetzt.
--> Stephanie zeigt Ihnen, wie wir methodisch vorgegangen sind. Stephanie, bitte.
I STEPHANIE
Folien 7–10 · ca. 2,5 Min.
I Folie 7 – Vorgehensplan
Danke, Dmitri. Unsere Evaluation war kein Bauchentscheid – sie folgt einem agilen
7-Phasen-Modell: von der Zieldefinition über Anforderungsanalyse, Use-Case-Identifikation und
Marktanalyse bis hin zu RFI, Nutzwertanalyse und finaler Empfehlung. Jede Phase baut auf der
nächsten auf. Strukturiert. Reproduzierbar. Vertretbar.
I Folie 8 – Anforderungen
Was muss ein Caddy-Bot können? Drei Ebenen. Funktional: Voice und Chat, Buchen/Stornieren
in 
Echtzeit 
mit 
PC-Green, 
Equipment-Reservationen, 
Handoff 
bei 
komplexen 
Fällen.
Nicht-funktional: Natürliche Sprache, Chat unter 2 Sekunden, Telefonlatenz unter 500 ms, 24/7
ohne Ausfall. KI-spezifisch: Dialekt-Resilienz, kein Halluzinieren von Terminen, nachvollziehbare
Entscheidungslogik. Das ist die Messlatte – und sie ist hoch.
I Folie 9 – Rahmenbedingungen
Dazu kommen vier Rahmendimensionen. Organisatorisch brauchen wir einen echten Partner mit
klarer Roadmap. Technisch ist die API-Anbindung an PC-Green ein K.O.-Kriterium – nicht
verhandelbar. Wirtschaftlich wollen wir TCO-Transparenz und messbaren ROI. Compliance:
DSGVO, Datenhaltung CH oder EU – absolutes Muss.
I Folie 10 – Evaluationsgegenstand
Der Markt ist gross. Aber mit unserem Profil – Golf, Voice, PC-Green, Compliance, Budget bis
CHF 50'000 Setup – blieben am Ende zwei Kandidaten: VOISA und Alveni AI.
--> Simona zeigt, wie wir sie auseinandergenommen haben. Simona, du bist dran.
I SIMONA
Folien 11–14 · ca. 2,5 Min.
I Folie 11 – Anbieter-Vergleich
Danke, Stephanie. VOISA gegen Alveni AI – zwei Anbieter, zwei Philosophien, eine
Entscheidung. Und die Entscheidung basiert nicht auf Gefühl, sondern auf Kriterien.
I Folie 12 – Use Case
Der Use Case ist präzise: Sprachbot und Chat, Echtzeit-Abgleich mit PC-Green, automatisches
Buchen/Stornieren, Erinnerungen zwei Stunden vor Spielbeginn, Equipment-Reservationen. Vier
Sprachen. 99,9 % Uptime. Latenz unter 500 ms. Daten in der Schweiz oder EU. Kein Spielraum
für Halbherzigkeiten.
I Folie 13 – Kriterienkatalog
Sechs Kriterien. Zwei K.O.-Kriterien, vier gewichtet. K.O.: API zu PC-Green – kein Connector, kein
Deal. DSGVO – keine Compliance, kein Deal. Gewichtet: Sprachverarbeitung 25 %,
Funktionsumfang 30 %, proaktiver Service 15 %, TCO 30 %. Keine Interpretationsspielräume.
Objektiv. Reproduzierbar.
I Folie 14 – Scoring-Logik
Vier Stufen: 10 Exzellent – 7 Gut – 4 Genügend – 1 K.O. 10 Punkte: Anforderung vollständig
erfüllt, mit Mehrwert. 1 Punkt: K.O.-Kriterium nicht erfüllt – Projekt gestoppt. Diese Logik macht
unsere Empfehlung wasserdicht.
--> Hüseyin zeigt Ihnen das Ergebnis. Hüseyin, bitte.
I HÜSEYIN
Folien 15–18 · ca. 2,5 Min.
I Folie 15 – Nutzwertanalyse
Danke, Simona. Die Zahlen sprechen für sich. API-Anbindung: VOISA 10 Punkte – native
Integration. Alveni: 4 Punkte – manuelle Workarounds, Doppelbuchungsrisiko. Proaktiver
Service: VOISA 10 – Alveni schockierende 1. Kein Reminder, kein proaktiver Kontakt.
Funktionsumfang: VOISA 7 – Alveni 4. Einziger Punkt für Alveni: das günstigere Preismodell – 10
zu 7. Gesamtscore: VOISA 8.2 – Alveni 6.1. Billiger und schlechter ist keine Strategie.
I Folie 16 – RFI
Wir haben nicht Produktblätter verglichen – wir haben einen strukturierten RFI-Prozess
durchgeführt. Offizielles Anschreiben, sechs Kernanforderungen, Einreichefrist 25. März. Das ist
professionelle Beschaffung – kein Schnellentscheid.
I Folie 17 – TCO-Vergleich
VOISA kostet über fünf Jahre CHF 315'000, Alveni CHF 235'000. Delta: CHF 80'000. Aber: VOISA
spart vier Stunden Personalaufwand pro Woche – das sind CHF 12'000 im Jahr. Dazu keine
Fehlbuchungen, keine verlorenen Nachtbuchungen. CHF 80'000 mehr investiert – massiv mehr
zurückbekommen.
I Folie 18 – Risikobewertung
Technisch: VOISA niedrig, Alveni hoch – fehlende API, Doppelbuchungsrisiko. Geschäftlich:
VOISA mittel, Alveni hoch – kein proaktiver Service, Umsatzverluste durch No-Shows.
Compliance: VOISA niedrig, Alveni mittel – unklare Subunternehmer-Datenflüsse. Alvenis fehlende
API ist ein Showstopper. VOISA ist die sichere Wahl.
--> Thomas, du schliesst ab. Thomas, bitte.
I THOMAS
Folien 19–21 · ca. 2,0 Min.
I Folie 19 – ROI & Break-even
Danke, Hüseyin. Die letzte Frage: Lohnt es sich? VOISA generiert CHF 120'000 Einsparungen
pro Jahr – 24/7-Buchungen, weniger Admin, weniger Fehler. Break-even nach 2,6 Jahren.
Netto-Nutzen über fünf Jahre: CHF 285'000. ROI: 90 %. Alveni: CHF 165'000 Netto-Nutzen, 70 %
ROI, Break-even erst nach 2,9 Jahren. Die Rechnung ist klar.
I Folie 20 – Kaufempfehlung
Unsere Empfehlung: VOISA – klare Kaufentscheidung. Proof of Concept April–Mai.
Vertragsverhandlung Juni. Pilotphase Juli–August. Vollständiger Rollout ab September. Sechs
Monate. Strukturiert. Ready to go.
I Folie 21 – Fazit & Abschluss
Wir haben ein Problem gelöst – methodisch, objektiv, mit Zahlen. Der Caddy-Bot ist nicht nur ein
Helpdesk-Tool. Er ist Schritt eins unserer Transformation – vom Software-Verkäufer zum
intelligenten Service-Partner. Schritt zwei? Dynamic Pricing für Greenfees. Aber zuerst brauchen
wir das Fundament. Was wir heute von Ihnen brauchen, ist ein einziges Wort: Go.
I Freigabe Proof of
Concept
I Budget CHF 15'000
I Start April 2026
Geben Sie uns das Go – und wir geben der Hole-in-One AG ihren Caddy-Bot.
Vielen Dank.` },
  { title: `CLAUDECODE/20-Evaluation-KI-Loesungen/EVKI-Albert/Challenge-Hole-in-One-AG-20260314.pdf`, body: `Modulprüfung 
 
 
 
 
 
 
Fach: 
Evaluation von KI Lösungen 
Dozent: 
Albert Rijkeboer 
Erlaubte  
Hilfsmittel: 
Open Book, Während Vorbereitung der Präsentation kann 2 x 10 Min ein 
Q&A mit dem Dozenten gebucht werden. 
Form: 
Challenge: Management Präsentation siehe Beschreibung und Anweisun-
gen im Business Case 
Dauer: 
Präsentation min. 10 Minuten max. 15 Minuten. 5 Minuten Q&A 
Max. Punkte: 
45 
Bemerkungen: 
Siehe Bewertungsraster in der Aufgabe 
 
Klasse: 
AIBS.A.OL.1.136-OL-S2510-EVKI.BA1A 
Schulort: 
Zürich Altstetten 
Datum: 
14. März 2026 
 
 
 
 
Seite 2 von 7 
 
Einleitung Challenge: AI-Evaluation durchführen 
Im vorliegenden Fach haben Sie sich insbesondere mit den folgenden Lernzielen auseinandergesetzt: 
«Sie führen Evaluationsprozesse für AI-Informatiklösungen durch, basierend auf Projekt- oder Beschaffungs-
aufträgen und Anforderungen. Sie oder als Gruppe geben fundierte Beschaffungsempfehlungen ab. Dabei 
agieren sie als Wirtschaftsinformatiker interdisziplinär, indem sie sowohl die Geschäftsprozesse und Funktio-
nen der Geschäftsbereiche verstehen als auch die Anforderungen aus diesen Prozessen für die Entwicklung 
der ICT-Systeme formulieren können.» 
 
Im Rahmen dieser qualifikationsrelevanten Arbeit sollen Sie das Gelernte in einem praktischen Kontext an-
wenden und so Ihre Kompetenz weiter ausbauen. 
 
Arbeitsauftrag 
Ausgangslage 
Als Wirtschaftsinformatiker: in wird die Aufgabe an Sie gestellt, dass Sie für Ihren aktuellen Arbeitgeber 
eine AI Lösung oder Lösungen für die Hole in One AG finden.  
Das Hauptziel dieser Praxisarbeit ist es, eine Analyse und Bewertung einer AI-Lösung vorzunehmen, 
die für Ihr Unternehmen von Interesse sein könnte. Sie sollen das Potenzial dieser Technologie in Be-
zug auf die aktuellen und zukünftigen Bedürfnisse ihres Unternehmens bewerten. Ziel der Arbeit ist es, 
einen Vorschlag für ein Produkt zu erhalten.  
Sie oder ihre Gruppe erstellen dafür eine Management Präsentation. Diese beinhaltet eine Empfhelung 
und Antrag für das weitere Vorgehen. 
  
Struktur der Arbeit / Aufbau der Management Präsentation 
 
1. Management Summary mit Empfehlung und Antrag 
2. Ausgangslage & Ziele 
3. Vorgehen 
4. Ergebnis der Evaluation / Bewertungs-Ergebnis 
a. Funktional / ggf. Nutzwert 
b. Wirtschaftliche Betrachtung 
c. Risiken 
5. Empfehlung mit Vorschlag für das weitere Vorgehen 
6. Abschluss / Fazit 
 
Einreichung Ihrer Management Präsentation 
Laden Sie Ihre Präsentation termingerecht bis 13:50 Uhr am 14. März 2026 auf der Campus-Plattform hoch. 
ACHTUNG: Jedes Gruppenmitglied ladet die Präsentation bei sich im Campus hoch. 
 
 
 
Seite 3 von 7 
 
 
Erwartungen und Bewertungskriterien 
Die Gruppenchallenge wird anhand der folgenden Standard-Gütekriterien bewertet: 
 
  
Bewertungskriterium 
Beschreibung 
  
  
  
1 Inhalt (10 Punkte) 
- sachlich richtig, hohe Argumentationsqualität 
-  angemessene Schwerpunktsetzung; Keine nebensächliche Punkte 
- Alle Fragen beantwortet 
2 Struktur (10 Punkte) 
 -  klar erkennbarer, zielgerichteter, roter Faden 
-  gute Abstimmung innerhalb der Gruppe 
3 Rhetorik (10 Punkte) 
- verständlich, sicher im Ausdruck  
- variiert, dynamisch, gute Pausentechnik, effektvoll, spannend, interessant 
4 Visualisierung / Kreativität 
 (10 Punkte) 
- aussagekräftige, nicht überladene Folien 
- aussagekräftige Schaubilder 
- klare Bezeichnungen, übersichtliche Tabellen 
- besonders herausragende, kreative Ideen  
5 Time Management 
 (5 Punkte) 
.-Abgabe der Unterlagen pro angefangene Minute Verspätung -1 Punkt 
- Präsentation: Min. 10 Minuten  - max. 15 Minuten.  Pro angefangene Minute über
Minuten -1 Punkt 
 
 
Seite 4 von 7 
 
Business Case der Hole in One AG. 
 
Die „Hole-in-One AG“ ist eine etablierte Vertriebs- und Supportunternehmung für die 
Software von Golflösungen. Eigene Produkte sind: Virtgolf und PC-Green. 
Vor zwei Jahren haben sie den Markt erweitert mit spezifischer Software und Apps für 
den Fitness-Branche. Die Lösungen für die Fitness-Branche werden im Bereich und 
auf der Basis vom Virtgolf entwickelt und vertrieben. 
Sie arbeiten seit Montag, 12. Januar 2026 neu als Stabsleiter der Abteilung Informatik 
dieser Firma. Diese Stelle wurde mit Ihrem Eintritt neu geschaffen und befindet sich 
noch nicht auf dem Organigramm.  
Der neue CEO, der per 1. Januar 2025 die operative Leitung übernommen hat, hat 
eingesehen, dass es als Unterstützung für den IT-Leiter einen tatkräftigen Wirt-
schaftsinformatiker braucht mit profunder Kenntnis im Bereich AI.  
Der CEO hat erkannt das es eine moderne AI-Integration in sämtlichen Produkten der 
Hole-in-One AG braucht, um die Zukunft dieses Unternehmen zu sichern! 
 
Organigramm 
 
Unternehmensleitbild (Auszug)  
• 
Zu unseren Kunden gehören Golf Clubs wie Golf Spieler. Wir schlagen die Brücke 
zwischen ihnen und unterstützen die Organisation sowie das Spiel mit optimaler 
Golfsoftware.  
• 
Seit zwei Jahren gehören auch Fitness-Studios und deren Mitglieder zu unseren 
Kunden. Mit diversen Apps und Buchungssoftware sowie eine Branchen-Portallö-
sung. 
 
Seite 5 von 7 
 
• 
Wir bieten den Kunden ein gesamtheitliches Konzept, das von der Idee bis zur Ein-
führung und Implementierung reicht.  
• 
Im Mittelpunkt unseres Unternehmens steht der Kunde. In Beratung, Begleitung 
und Support setzen wir uns individuell auf seine Bedürfnisse ein.  
• 
Dem Kunden gegenüber zeichnen wir uns durch Know-how, Qualität und Effizienz 
aus. Wir sind freundlich, zuvorkommend und flexibel.  
• 
Wir wollen mit Know-how, Zuverlässigkeit und Professionalität überzeugen.  
• 
Unsere Unternehmensorganisation ist einfach und flexibel, so dass Ideen und In-
formationen frei ausgetauscht werden können und schnell zur richtigen Stelle ge-
langen.  
• 
Die Geschäftsprozesse der Firma sind klar, transparent und nachvollziehbar.  
 
AI-Lösungen evaluieren 
• 
Der CEO hat erkannt das es eine moderne AI-Integration in sämtlichen Produk-
ten der Hole-in-One AG braucht, um die Zukunft dieses Unternehmen zu sichern. 
• 
Als wichtigste Aufgabe sollten sie als Stabsleiter der Informatik die AI-Software 
Lösung für die Hole-in-One AG evaluieren. 
• 
Weil sie und ihre Gruppe Spezialisten sind, bekommen sie viel Freiheit um eine 
wirtschaftliche und Wertvolle Lösung für die Hole-in-One AG zu evaluieren. Sie 
empfehlen die Lösung, die den grössten Wert für das Unternehmen verspricht. 
• 
Machen sie dazu entsprechenden Annahmen und deklariere diese klar und deut-
lich. 
• 
Der CEO denkt das AI in den Bereiche Business Intelligence, Verkauf und Helpdesk 
grosse Verbesserungen bringen kann. Erwartungen sind: 
• 
Die Kundenzufriedenheit wird massgeblich verbessert. 
• 
Das Unternehmen kann Aufgrund intelligente Kombination der Daten besser 
gesteuert werden. 
• 
Die Verkaufszahlen werden AI-unterstützt gesteigert. 
• 
Helpdesk wird effizienter abgewickelt und auch neu 24 Std. pro Tag mit AI-
Service erreichbar. 
• 
Es stehen eine Anzahl Standard Software zur Auswahl, siehe die Präsentationen 
aus dem Unterricht 3, 4 und 5 und auf der nächsten Seite in dieser Prüfungsunter-
lage. Sie dürfen diese SW in der Evaluation nutzen muss jedoch nicht.  
• 
Als AI-Business Spezialist und Stabsleiter Informatik haben sie und ihr Team die 
Aufgabe das Projekt zu initialisieren, die Evaluation von A bis Z (bis zum Ent-
scheid) durchzuführen und die empfohlene Lösung auf Machbarkeit, nach Kriterien, 
Wirtschaftlichkeit und Risiken beurteilt zu haben. 
• 
Heute Präsentieren sie und ihr Team das Ergebnis dieser Evaluation in einer Ma-
nagement Präsentation. 
• 
Herausforderungen in diesem Projekt die sie berücksichtigen sollten sind: Wirt-
schaftlichkeit, Datenschutz, Governance, Integration und Akzeptanz sicherstellen.  
 
 
 
 
Seite 6 von 7 
 
Aus diesen Standardlösungen (oder weitere) kann eine Vor-Auswahl getroffen werden. 
Und ist das Einsatzgebiet und die erwartete «High-Level» Wirkung zu erarbeiten. Beim 
Dozenten können weiterführenden Information zu dieser Software bezogen werden. 
• 
ConRat nennt für ihren ChatBot4You kleine und mittleren Unternehmen (KMU) 
ohne bestimmten Branchenfokus als Zielgruppe. Dabei eignet sich das Produkt 
auch für den unternehmensinternen Einsatz. 
• 
epicinsights möchte mit ihrem Produkt epicAi Unternehmen ansprechen, die ihren 
Datenmix zeitnah und effizienter verarbeiten sowie mittelfristig eigene Expertise in 
den Bereichen Data Science, Data Processing und KI aufbauen möchten. 
• 
Das Angebot von Inspirient eignet sich nach eigenen Angaben für mittelständi-
sche Unternehmen und Grosskonzerne, die die Wertschöpfung aus ihren Daten ef-
fizienter gestalten wollen. 
• 
SCOUT eignet sich nach Angaben von MAPEGY für Innovations-, Technologie- und 
F&E-Manager*innen sowie Analyst*innen aller Hightech-Unternehmen weltweit und 
unabhängig von der Branche. 
• 
Neohelden gibt an, dass ihr KI-Assistent Neo in allen Branchen, Unternehmen und 
Anwendungsfeldern eingesetzt werden kann, vom kleinen und mittelständischen 
Unternehmen bis hin zum Konzern. 
• 
Magellan von OpenText richtet sich an Kund*innen verschiedener Sparten und 
Unternehmensgrößen in datenintensiven Bereichen, wie beispielsweise Financial 
Services, Retail, Telecommunications, Manufacturing, Energy & Utilities oder auch 
dem öffentlichen Dienst. 
• 
Das Produkt bearch von Schober unterstützt alle Unternehmen, die Produkte 
und/oder Dienstleistungen an andere Unternehmen verkaufen. 
• 
Die Anwendung ReplyOne von Sematell richtet sich an Unternehmen und einzelne 
Abteilungen der Bereiche Customer Service und ContactCenter. Dabei gibt es keine 
Einschränkungen bezüglich Grösse oder Branche. 
• 
The MathWorks vertreibt seine MATLAB-Produkte an Unternehmen sämtlicher 
Branchen. 
 
 
 
 
Seite 7 von 7 
 
Zeitplan: 
Wann welche Gruppe kommt, wird gewürfelt! 
 
Präsentation min 10 Minuten, max. 15 Minuten. 
 
Abgabeschluss 13:50 Uhr. 
 
1. Gruppe 14:00 - 14:20 
Gruppe: 
2. Gruppe 14:25 - 14: 45 
Gruppe: 
-- 5 Min. Pause -- 
3. Gruppe 14:55 - 15:15 
Gruppe: 
4. Gruppe 15:20 - 15:40 
Gruppe: 
5. Gruppe 15:45 - 16:05 
Gruppe: 
 
16:05 - 16:15 Feedback und Tagesabschluss` },
  { title: `CLAUDECODE/20-Evaluation-KI-Loesungen/EVKI-Albert/Der-Schlüssel-zur-Evaluation-Vorgehensmodell.pdf`, body: `SCHLÜSSEL ZUR EVALUATION
10 SCHRITTE – «EVALUIERT» KURZGEFASST
LARS BALZER, ELLEN LAUPPER, VÉRONIQUE EICHER UND
WOLFGANG BEYWL
www.ehb.swiss/evaluiert
Inhaltsverzeichnis
Einleitung «evaluiert» 
3
 ....................................................................................................................................................... 
Schritt 1: Bestimmung des Evaluationsgegenstandes 
4
 ................................................................................................. 
Schritt 2: Bestimmung der interessierten Akteure und die Rolle der Evaluierenden 
6
 .............................................. 
Schritt 3: Bestimmung der Evaluationszwecke und Evaluationsfragestellungen 
8
 ................................................... 
Schritt 4: Festlegung der Bewertungskriterien 
11
 ........................................................................................................... 
Schritt 5: Auswahl von Erhebungsdesign und Erhebungsmethoden 
13
 ....................................................................... 
Schritt 6: Durchführung der Erhebungen 
15
 ..................................................................................................................... 
Schritt 7: Datenauswertung, Interpretation und Bewertungssynthese 
16
 .................................................................. 
Schritt 8: Berichterstattung 
18
 ........................................................................................................................................... 
Schritt 9: Nutzung 
21
 ............................................................................................................................................................ 
Schritt 10: Evaluation der Evaluation 
23
 ........................................................................................................................... 
3
Der Schlüssel zur Evaluation: Die ersten fünf Schritte im Evaluationsprozess werden so lange aufeinander
abgestimmt, bis die fünf Schritte der Umsetzung durchlaufen werden.
Einleitung «evaluiert»
Evaluation begegnet man in verschiedenen Feldern, und dabei wird ganz
Unterschiedliches darunter verstanden. In nahezu jedem Text, der sich intensiver mit
diesem Thema befasst, findet sich eine andere Definition, und je nach wissenschaftlicher
Disziplin wird der Begriff unterschiedlich akzentuiert. Zudem wird heute vieles als
Evaluation bezeichnet, was bei näherer Betrachtung eigentlich keine ist.
In diesem Text – und dem zugrundeliegenden Lehrbuch «evaluiert» – wird Evaluation als eine wissenschaftliche
Dienstleistung verstanden, die für geklärte Zwecke und nach begründeten Kriterien Evaluationsgegenstände
(insbesondere Programme und Massnahmen) beschreibt und bewertet. Die Bewertung geschieht systematisch,
transparent sowie nachvollziehbar und basiert auf Daten und Informationen, die mithilfe sozialwissenschaftlicher
Methoden gewonnen werden. Nach diesem Verständnis müssen Personen für diese Tätigkeit spezifisch qualifiziert
sein.
Bei der konkreten Durchführung einer Evaluation gehen Evaluierende in zehn Schritten vor. Diese müssen nicht
rigide befolgt werden, sondern sind den spezifischen Rahmenbedingungen der konkreten Evaluation anzupassen.
Im vorliegenden Text werden die zehn Schritte des Evaluationsprozesses dargestellt. Dabei handelt es sich um eine
Zusammenfassung des Lehrbuches «evaluiert».
Diese Darstellung richtet sich gleichermassen an Personen, die sich einen Überblick über Evaluation verschaffen
wollen und solche, die eine Evaluation planen oder sie gerade durchlaufen.
Für eine ausführliche Darstellung mit weiteren Erläuterungen und vielen Beispielen sei auf «evaluiert» verwiesen.
4
Schritt 1: Bestimmung des Evaluationsgegenstandes
Im ersten Schritt des Evaluationsprozesses wird der Evaluationsgegenstand bestimmt.
Dafür ist zuerst eine kurze schriftliche Beschreibung des zu evaluierenden Gegenstandes
zu erstellen, die auch für Aussenstehende nachvollziehbar ist. Relevante Dimensionen für
diese Beschreibung sind z. B. die Bezeichnung des Evaluationsgegenstandes,
Verantwortliche, Mitarbeitende, Ziele, fachwissenschaftliche Bezüge, Inhalte bzw.
Themen, Elemente, Methoden, Umfang, zur Verfügung stehende Ressourcen, Kennzahlen,
bisherige Entwicklungen etc.
Bei der Bestimmung des Evaluationsgegenstandes kommt der Identifikation seiner Ziele besondere Bedeutung zu,
da deren Erreichung in einer Evaluation oft überprüft werden soll. Ein Mittel der Zielidentifikation ist beispielsweise
das dreigegliederte Zielsystem: Ein Leitziel gibt die Grundausrichtung an und ist längerfristig gültig. Ein Mittlerziel
konkretisiert das Leitziel, in dem es Teilbereiche näher beschreibt. Ein Detailziel beschriebt präzise den Zielzustand,
der durch die Intervention erreicht werden soll. Es ist konkret, überprüfbar, zeitlich festgelegt und realistisch. 
Bei komplexen Evaluationsgegenständen können textlich-visuelle Darstellungen in Form eines «Logischen Modells»
hilfreich sein, welche die zentralen Elemente des Evaluationsgegenstandes sowie ihre Verbindungen untereinander
darstellen. Dabei werden in der Regel mindestens die Ausgangssituation, die Interventionen und die Ziele/Resultate
festgehalten. Beim «Programmbaum*» als besonders anschauliches Logisches Modell wird zusätzlich differenziert
zwischen den Bedingungen (z. B. Kontext, Ressourcen), dem Plan (das Konzept mit den Zielen), der Umsetzung (die
konkreten Aktivitäten) und den erwarteten und unerwarteten Resultaten des Evaluationsgegenstandes.
Evaluationsgegenstände sind in der Regel konkrete Projekte, können aber auch Pakete von Massnahmen,
Programme und auch gesamte Organisationen sein.
* Quelle: Univation - Institut für Evaluation 2016; adaptierte Fassung
5
In der illustrierenden Bildergeschichte möchte ein Bauer mehr über einen Apfel einer bestimmten Sorte
erfahren und hat deswegen eine Evaluation in Auftrag gegeben. Auf den ersten Blick ist dies ein einfacher
Evaluationsgegenstand. Doch bei genauerer Betrachtung ist es gar nicht mehr so einfach: Dieser Apfel
symbolisiert nämlich ganz viele Äpfel, wie sie sich in einem Korb, auf einer Palette, in einer Wagenladung
befinden. Dieser Apfel ist auf einem Baum gewachsen, der wiederum auf einem Grundstück, vielleicht einer
Apfelwiese oder einem grossen Obstgarten steht. Er wächst also in einer bestimmten Umwelt (Kontext), die
bestimmte Merkmale aufweist (zum Beispiel bezüglich der Biodiversität). Der Apfelanbau findet in einer
bestimmten organisatorischen Struktur statt, dies kann ein kleinbäuerlicher Betrieb sein oder eine grosse,
international tätige Aktiengesellschaft (Struktur).
Für den Anbau werden Ressourcen benötigt, zum Beispiel Wasser zur Bewässerung, Pflanzenschutzmittel,
menschliche Arbeitskraft (Input). Es braucht Samen oder Ableger, aus denen der Baum wächst. Durch
Anpflanzen, Pflege und Beschneiden (Aktivitäten/Interventionen) kommt es zu hoffentlich befriedigenden,
die Inputs rechtfertigenden Erträgen in Form einer Apfelernte (Outputs). Die Verarbeitung oder der direkte
Verzehr der Äpfel befriedigt Grundbedürfnisse des Menschen, ihr Anblick erfreut sie, womöglich trägt der
Apfel zu deren Gesundheit bei (Outcomes). Es können aber auch unvorhergesehene Nebenfolgen auftreten,
zum Beispiel ein negativer Einfluss auf die Biodiversität oder allergische Reaktionen.
6
Schritt 2: Bestimmung der interessierten Akteure und
die Rolle der Evaluierenden
Im zweiten Schritt des Evaluationsprozesses werden die Akteure bestimmt, die Interessen
in Bezug auf den Evaluationsgegenstand und/oder an der Evaluation selbst haben.
Darüber hinaus ist die Rolle der Evaluierenden zu klären.
Akteure, die Interessen in Bezug auf den Evaluationsgegenstand haben, werden «Beteiligte und Betroffene» oder
auch «Stakeholderinnen und Stakeholder» genannt. «Beteiligte» sind Personen, Gruppen oder auch Organisationen,
die in Bezug auf den Evaluationsgegenstand aktiv und/oder einflussreich sind, also z. B. Geldgebenden des
Evaluationsgegenstandes wie auch Akteure, die ihn verantwortlich steuern oder die im Rahmen des
Evaluationsgegenstandes tätig sind, wie z. B. Mitarbeitende. «Betroffene» sind insbesondere Personen mit wenig
Einfluss. Sie finden sich oft unter den Zielgruppen, oder es sind vom Evaluationsgegenstand Ausgeschlossene oder
durch ihn Benachteiligte, mitunter ohne von dessen Existenz zu wissen. Akteure, die Informationsinteressen in
Bezug auf die Evaluation hegen, sind «potenziell Nutzende» der Evaluation und ihrer Ergebnisse. Diejenigen, welche
die Evaluierenden gemäss Evaluationsplan mit Informationen bedienen wollen, sind «Adressierte» oder
«vorgesehene Nutzende».
Oft ist es zweckmässig, die Beteiligten und Betroffenen in den Evaluationsprozess einzubinden. Das ist der
Grundgedanke nutzungsfokussierter und auch partizipativer Evaluationsansätze. Ein zentrales Argument dafür
besteht darin, dass man sich von deren Partizipation einen reibungslosen Ablauf, eine fundierte thematische
Absicherung, hilfreiche Tipps für die konkrete Durchführung sowie eine gute Unterstützung bei der Nutzung der
Ergebnisse der Evaluation erhofft. Ob überhaupt, in welchem Umfang und in welchen Schritten der konkreten
Evaluation der Einbezug von Beteiligten und Betroffenen sinnvoll ist, ist von Fall zu Fall zu entscheiden.
7
Evaluationen müssen von Personen durchgeführt werden, die für diese Aufgabe spezifisch qualifiziert sind: den
professionellen Evaluierenden. Evaluierende können eine interne oder externe Position einnehmen (interne bzw.
externe Evaluation). Interne Evaluation wird von Personen der den Evaluationsgegenstand tragenden Organisation
gesteuert und durchgeführt. Bei der Inhouse-Evaluation (als Unterform der internen Evaluation) wird die Evaluation
ebenfalls von Personen der den Evaluationsgegenstand tragenden Organisation durchgeführt; diese sind aber nicht
hauptverantwortlich für den Evaluationsgegenstand (z. B. eine spezialisierte Evaluationsabteilung). Wenn die
Hauptverantwortung für den Evaluationsgegenstand und für die Evaluation in einer Hand liegt, spricht man auch
von Selbstevaluation. Externe Evaluationen führen hingegen Evaluierende durch, die von ausserhalb der
Organisation kommen.
 
Wenn nun bestimmt werden soll, wie »gut« diese besondere Sorte von Äpfeln ist, dann muss man sich zuerst
vergegenwärtigen, welche Gruppen von Akteuren mit welchen Interessen auf die Äpfel blicken. Je nachdem
wie der Evaluationsgegenstand genau definiert wird, haben sie etwas zu gewinnen oder zu verlieren.
Beispiele in diesem Fall sind die Produzierenden, die Weiterverarbeitenden, der Handel (Grosshandel,
Einzelhandel, Direktvertrieb beim Apfelbauer), womöglich die Baumschulen, diejenigen die professionell die
Umweltverträglichkeit und die Produktqualität der Äpfel untersuchen (zum Beispiel Fachleute aus dem
Verbraucherschutz) und natürlich die Endverbraucherinnen und Endverbraucher, welche die Äpfel oder die
weiter verarbeiteten Produkte konsumieren. Für die Planung der Evaluation ist es notwendig, die Ziele und
Informationsinteressen dieser Akteurinnen und Akteure zu kennen, da diese den weiteren Fortgang der
Evaluation mitbestimmen werden. Diese können sehr unterschiedlich gelagert sein.
So kann der Handel auf sichere und kontinuierlich zur Verfügung stehende Ernten angewiesen sein; die
Baumschulen benötigen hochwertiges Saatgut; Weiterverarbeitende brauchen Äpfel bestimmter Qualität für
die Erzeugung von Apfelsaft oder Apfelkuchen; der Handel, die Produzierenden und auch die
Konsumierenden sind an Äpfeln mit bestimmten Merkmalen (kräftiger Geschmack, schöne Farben, gutes
Aussehen) und an Einnahmen durch den Apfelverkauf und guten Preisen interessiert, wobei die Meinungen
zu den verschiedenen Aspekten jeweils stark auseinandergehen können. Oft wird eine externe Person als
Evaluierende beigezogen, damit sie den Evaluationsprozess planen und die Evaluation anschliessend
durchführen kann.
8
Schritt 3: Bestimmung der Evaluationszwecke und
Evaluationsfragestellungen
Im dritten Schritt des Evaluationsprozesses werden die Evaluationszwecke festgelegt und
die Evaluationsfragestellungen formuliert, deren Beantwortung dazu beiträgt, den
Evaluationszweck zu erreichen.
Evaluationszwecke können nach Funktion und Verwendungsabsicht kategorisiert werden.
Es lassen sich fünf Funktionen unterscheiden:
Bei der proaktiven Evaluation wird untersucht, inwiefern ein Bedarf am Evaluationsgegenstand besteht und
inwiefern dieser mit bestehenden Ressourcen im vorgegebenen Zeitrahmen implementiert werden kann.
Bei der klärenden Evaluation wird das Konzept eines Evaluationsgegenstandes datenbasiert auf Stringenz und
Kohärenz mit festgelegten Bedarfen und Bedürfnissen geprüft.
Die interaktive Evaluation untersucht die Stärken und Schwächen eines Evaluationsgegenstandes und
welches Optimierungspotential daraus abgeleitet werden kann.
Bei der dokumentierenden Evaluation stehen Daten zu zentralen Kennzahlen im Mittelpunkt, die über einen
längeren Zeitraum regelmässig standardisiert erhoben werden.
Bei der wirkungsfeststellenden Evaluation wird geprüft, inwiefern die Ziele des Evaluationsgegenstandes
erreicht wurden und gegebenenfalls, in welchem Ausmass er zur Zielerreichung beigetragen hat.
Während die proaktive und klärende Evaluation noch vor dem möglichen Start des Evaluationsgegenstandes
durchgeführt werden, erfolgt die interaktive Evaluation zeitlich parallel zum Evaluationsgegenstand, insbesondere
in der Entwicklungsphase einer Erstdurchführung oder in einer Phase der Neukonzeption. Dokumentierende und
wirkungsfeststellende Evaluation können hingegen nur bei hinreichender Reife des Evaluationsgegenstandes
umgesetzt werden.
Bei der Klassifizierung nach Verwendungsabsicht wird zwischen Orientierung auf Verbesserung (Informationsbasis
für Optimierungen bzw. Stabilisierungen schaffen), auf Rechenschaftslegung (Nachweis der Qualität gegenüber
verantwortlichen Personen/Institutionen), auf Grundsatzentscheid (Datensammlung für einen Entscheid für oder
` },
  { title: `CLAUDECODE/20-Evaluation-KI-Loesungen/EVKI-Albert/Fraunhofer_IAIS_Whitepaper_KI-Prueftools.pdf`, body: `KI-Anwendungen systematisch 
prüfen und absichern 
Prüfwerkzeuge und Prüfplattform zur Gestaltung  
vertrauenswürdiger Künstlicher Intelligenz
Executive Summary  �.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.   6
1.	 Herausforderungen des vertrauenswürdigen Einsatzes von KI  �.�.�.�.�.�.�.�.�.�.�.�.�.�.�.   7
2.	 Dimensionen der Vertrauens­würdigkeit von KI  �.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.�.   10
Autonomie und Kontrolle   ����������������������������������������������������������������������������������������������  10
Fairness  ����������������������������������������������������������������������������������������������������������

[... gekuerzt ...]` },
];

export function getChatKiSpecialistKnowledge(): string {
  if (!KI_SPECIALIST_SECTIONS.length) return "";
  return [
    "EIDG. KI-SPEZIALIST / AI BUSINESS SPECIALIST (Lehrgangswissen, Chatbot-Hintergrund):",
    "Bei Fragen zu Ausbildung, Modulen, Handlungsfeldern, RAG, SECI, KMMM, Praxisprojekten, Pruefung und Fachbegriffen zuerst hier suchen.",
    "Antworte in Ich-Form als Thomas Ballinari, Schweizer Schreibweise (ss statt ß).",
    "",
    ...KI_SPECIALIST_SECTIONS.map((s) => `### ${s.title}\n${s.body}`),
  ].join("\n\n");
}
