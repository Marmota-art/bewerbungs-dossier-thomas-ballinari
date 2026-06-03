"""Reduce en-dash heavy copy in UI-facing strings."""
from __future__ import annotations

import re
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]


def humanize_data_ts() -> None:
    path = REPO / "src" / "data.ts"
    data = path.read_text(encoding="utf-8")

    data = re.sub(r'(period: "[^"]*?) – ', r"\1 bis ", data)
    data = data.replace(" bis aktuell", " bis heute")

    for old, new in [
        ("C2 – Muttersprache", "C2, Muttersprache"),
        ("C1 – Fortgeschritten", "C1, fortgeschritten"),
        ("B2 – Gute Kenntnisse", "B2, gute Kenntnisse"),
        ("A2 – Grundkenntnisse", "A2, Grundkenntnisse"),
        ("SmartGastro.ai – eine", "SmartGastro.ai, eine"),
        ("Arbeitsweise – im", "Arbeitsweise. Im"),
        ("Küchenchef – erste", "Küchenchef, meine erste"),
        ("Einsatzfreude – für", "Einsatzfreude. Im Zeugnis bin ich für"),
        ("Informatik & Wirtschaft – Intensive", "Informatik & Wirtschaft. Intensive"),
        ("2006–2007:", "2006 bis 2007:"),
        ("(20–40%)", "(20 bis 40 Prozent)"),
        ("Als Team weiterkommen – Keine", "Als Team weiterkommen, keine"),
        ("Gemeinsam am Tisch – Entwickler", "Gemeinsam am Tisch: Entwickler"),
        ("Arbeitsweise – nicht als Experiment", "Arbeitsweise, nicht als Experiment"),
        ("lebende Beispiel – in kürzester", "lebende Beispiel: in kürzester"),
        ("Kunden misst – genau", "Kunden misst, genau"),
        ("1982–1985", "1982 bis 1985"),
        ("Module 1–4", "Module 1 bis 4"),
    ]:
        data = data.replace(old, new)

    for field in ("degree", "title", "employer", "concept"):
        data = re.sub(
            rf'^(\s+{field}: "[^"]*?) – ',
            r"\1, ",
            data,
            flags=re.M,
        )

    path.write_text(data, encoding="utf-8")


def humanize_monads_section() -> None:
    path = REPO / "src" / "data.ts"
    data = path.read_text(encoding="utf-8")

    old = '''export const MonadsFitSection = {
  title: "Warum ich zu Monads passe",
  intro:
    "Fabian, Christian, Marc, Adrian, Rafael, Tanja – euer Inserat beschreibt fast wortwörtlich meinen Alltag: AI-Domain aufbauen, Business Cases vor Technologie, beim Kunden Wirkung erzielen. Ihr verwandelt bei Monads «Complexity into Clarity» – genau so denke ich: nicht in Modellen, sondern in Hebeln, die live gehen. Kein klassisches Motivationsschreiben – hier ist mein Match zu eurem AI-Rollenprofil, im Du und auf Augenhöhe.",
  cards: [
    {
      number: "01",
      title: "AI-Domain mitgestalten",
      body: "Fabian, Christian – ihr sucht jemanden, der Strategie, Positionierung und Angebot der AI-Domain verantwortet. Genau das will ich: die AI-Praxis bei Monads von Null auf mit euch definieren. SmartGastro.ai und diese App sind meine Antwort auf eure Aufforderung – zeigt Workflow und Business Case, nicht Folien.",
      lever: "Erfolg = was beim Kunden live läuft",
    },
    {
      number: "02",
      title: "Business Cases, nicht Technologie",
      body: "Marc, du knackst die kniffligen Fälle – ich starte einen Schritt früher: Gespräch mit Fachbereich und Management, Schmerz verstehen, ROI skizzieren. Food Waste, POS-Daten, manuelle Planung – erst der Case, dann Claude, Cursor oder die passende Pipeline.",
      lever: "Business-first, wie Monads es lebt",
    },
    {
      number: "03",
      title: "Nah am Kunden – auf allen Ebenen",
      body: "Adrian, du findest heraus, was wirklich zählt – nach 40 Jahren Gastronomie kenne ich diese Dialoge mit Küche, Pächter und Geschäftsleitung. Rafael, Brücken bauen ist auch meine Stärke: zwischen Fachbereich, IT und C-Level, damit AI nicht im Labor bleibt.",
      lever: "Potenziale identifizieren, wo es weh tut",
    },
    {
      number: "04",
      title: "AI Power-User & Vibe Coding",
      body: "Claude, Cursor und Google Studio AI nutze ich täglich – nicht als Spielerei, als Arbeitsweise. Lösungen designen und selbst in Rekordzeit umsetzen: Fullstack-Prototypen, serverlose ETL-Jobs, produktionsnahe Demos. Das ist der Wettbewerbsvorteil aus eurem Inserat – und meiner.",
      lever: "Von Konzept zu produktionsreif in Tagen",
    },
    {
      number: "05",
      title: "AI Enablement & Wissensmanagement",
      body: "Ihr wollt Kundenteams befähigen – Workshops, Methoden, Formate. In meiner AI-Business-Ausbildung ist Wissensmanagement (F6) zertifizierte Kernkompetenz. AI, die inspiriert statt ersetzt – passend zu eurer Enterprise Intelligence: vom Datenchaos zur klaren Entscheidung.",
      lever: "Nachhaltige AI-Kultur beim Kunden",
    },
    {
      number: "06",
      title: "Freiheit, Du-Kultur & Nomad-Mindset",
      body: "Tanja, du sorgst dafür, dass das Fundament trägt – ich bringe Tatkraft und Eigenverantwortung mit. Remote, flexibel, ohne Mikromanagement: euer Nomad-DNA («independent, mobile, efficient») ist meine. Als Team auf Augenhöhe – als Nomads – kommen wir gemeinsam weiter.",
      lever: "Gestaltungsspielraum statt starre Strukturen",
    },
  ],
} as const;'''

    new = '''export const MonadsFitSection = {
  title: "Warum ich zu Monads passe",
  intro:
    "Fabian, Christian, Marc, Adrian, Rafael, Tanja: Euer Inserat trifft genau meinen Alltag. AI-Domain aufbauen, zuerst Business Cases denken, beim Kunden Wirkung erzielen. Bei Monads heisst das «Complexity into Clarity». Genau so arbeite ich. Nicht in Modellen, sondern in Hebeln, die live gehen. Kein klassisches Motivationsschreiben, sondern mein Match zu eurem AI-Rollenprofil. Im Du und auf Augenhöhe.",
  cards: [
    {
      number: "01",
      title: "AI-Domain mitgestalten",
      body: "Fabian, Christian, ihr sucht jemanden, der Strategie, Positionierung und Angebot der AI-Domain verantwortet. Genau das will ich mit euch. Die AI-Praxis bei Monads von Null auf definieren. SmartGastro.ai und diese App sind meine Antwort auf eure Aufforderung: Workflow und Business Case statt Folien.",
      lever: "Erfolg = was beim Kunden live läuft",
    },
    {
      number: "02",
      title: "Business Cases, nicht Technologie",
      body: "Marc, du knackst die kniffligen Fälle. Ich starte einen Schritt früher: Gespräch mit Fachbereich und Management, Schmerz verstehen, ROI skizzieren. Erst der Case, dann Claude, Cursor oder die passende Pipeline.",
      lever: "Business-first, wie Monads es lebt",
    },
    {
      number: "03",
      title: "Nah am Kunden auf allen Ebenen",
      body: "Adrian, du findest heraus, was wirklich zählt. Nach 40 Jahren Gastronomie kenne ich diese Dialoge mit Küche, Pächter und Geschäftsleitung. Rafael, Brücken bauen ist auch meine Stärke, damit AI nicht im Labor bleibt.",
      lever: "Potenziale finden, wo es weh tut",
    },
    {
      number: "04",
      title: "AI Power-User und Vibe Coding",
      body: "Claude, Cursor und Google Studio AI nutze ich täglich, nicht als Spielerei, sondern als Arbeitsweise. Lösungen designen und selbst in Rekordzeit umsetzen: Fullstack-Prototypen, serverlose ETL-Jobs, produktionsnahe Demos. Das ist der Wettbewerbsvorteil aus eurem Inserat und meiner.",
      lever: "Von Konzept zu produktionsreif in Tagen",
    },
    {
      number: "05",
      title: "AI Enablement und Wissensmanagement",
      body: "Ihr wollt Kundenteams befähigen mit Workshops, Methoden und Formaten. In meiner AI-Business-Ausbildung ist Wissensmanagement (F6) zertifizierte Kernkompetenz. AI, die inspiriert statt ersetzt. Genau eure Enterprise Intelligence: vom Datenchaos zur klaren Entscheidung.",
      lever: "Nachhaltige AI-Kultur beim Kunden",
    },
    {
      number: "06",
      title: "Freiheit, Du-Kultur und Nomad-Mindset",
      body: "Tanja, du sorgst dafür, dass das Fundament trägt. Ich bringe Tatkraft und Eigenverantwortung mit. Remote, flexibel, ohne Mikromanagement. Euer Nomad-DNA ist auch meine. Als Team auf Augenhöhe kommen wir gemeinsam weiter.",
      lever: "Gestaltungsspielraum statt starre Strukturen",
    },
  ],
} as const;'''

    if old not in data:
        raise SystemExit("MonadsFitSection block not found")
    data = data.replace(old, new)

    data = data.replace(
        'intro: "Fabian, Christian, Marc, Adrian, Rafael, Tanja – ihr sucht eine Macher-Persönlichkeit für eure AI-Domain: Business Cases statt Konzeptpapiere, Vibe Coding statt PowerPoint, Wirkung beim Kunden statt Technologie-Diskussionen. Hier meine interaktive Antwort auf euer Stelleninserat – im Du, mit SmartGastro.ai als konkretem Case.",',
        'intro: "Fabian, Christian, Marc, Adrian, Rafael, Tanja: Ihr sucht eine Macher-Persönlichkeit für eure AI-Domain. Business Cases statt Konzeptpapiere, Vibe Coding statt PowerPoint, Wirkung beim Kunden statt Technologie-Diskussionen. Hier meine interaktive Antwort auf euer Stelleninserat, im Du, mit SmartGastro.ai als konkretem Case.",',
    )

    path.write_text(data, encoding="utf-8")


def humanize_app_ts() -> None:
    path = REPO / "src" / "App.tsx"
    app = path.read_text(encoding="utf-8")
    replacements = [
        (
            "Ich denke nicht in reinen Technologien – ich denke in",
            "Ich denke nicht in Technologien, sondern in",
        ),
        (
            "Ich rede nicht nur über AI-Strategie – ich konzipiere, promte und baue. Lassen Sie uns die Prozesse Ihrer Organisation gemeinsam datengetrieben optimieren!",
            "Ich rede nicht nur über AI-Strategie. Ich konzipiere, promte und baue. Lassen Sie uns die Prozesse Ihrer Organisation gemeinsam datengetrieben optimieren!",
        ),
        (
            '{SmartUmbrellaProject.subTitle} — ',
            "{SmartUmbrellaProject.subTitle} · ",
        ),
        (
            "alt=\"IPSO Premium Smart-Regenschirm – geöffnet",
            'alt="IPSO Premium Smart-Regenschirm, geöffnet',
        ),
        (
            "Fragen Sie den digitalen Assistenten – Antworten basieren",
            "Fragen Sie den digitalen Assistenten. Antworten basieren",
        ),
        (
            "Ich werde mich unverzüglich bei dir melden – auf Augenhöhe im Sinne unserer Monads Du-Kultur!",
            "Ich werde mich unverzüglich bei dir melden, auf Augenhöhe im Sinne unserer Monads Du-Kultur!",
        ),
        (
            "Erreichbar: Mo - Sa, Bürozeiten",
            "Erreichbar: Mo bis Sa, Bürozeiten",
        ),
        (
            "Derzeit absolviere ich an der ipso Bildung AG in Zürich die Ausbildung zum <strong className=\"text-teal-300\">AI Business Specialist mit eidgenössischem Fachausweis</strong>. Mein Fokus liegt ganz klar auf der <strong className=\"text-white\">praktischen Realisierbarkeit</strong>. Viele KI-Lösungen bleiben am grünen Tisch hängen, weil die Entwickler den harten Arbeitsalltag in Betrieben nicht kennen. Ich kenne ihn haargenau: die Hektik beim Mittags-Ansturm (z.B. 12:15 Uhr), den Ärger über teuren Food Waste und den ständigen Stress durch Fehlplanung und Personalengpass.",
            "Derzeit absolviere ich an der ipso Bildung AG in Zürich die Ausbildung zum <strong className=\"text-teal-300\">AI Business Specialist mit eidgenössischem Fachausweis</strong>. Mein Fokus liegt auf praktischer Realisierbarkeit. Viele KI-Lösungen bleiben am grünen Tisch hängen, weil die Entwickler den harten Arbeitsalltag in Betrieben nicht kennen. Ich kenne ihn: die Hektik beim Mittagsansturm gegen 12:15 Uhr, teurer Food Waste, Fehlplanung und Personalengpass.",
        ),
    ]
    for old, new in replacements:
        app = app.replace(old, new)

    # Monads projects section quotes
    app = app.replace(
        "„Als Team kommen wir gemeinsam weiter.“ Dieser Satz beschreibt meine tiefste Überzeugung. Ich stehe für flache Hierarchien, offene Ohren und gegenseitiges Empowerment. Ich gestalte die AI-Domain nicht als einsamer Wolf, sondern binde das gesamte Monads-Team aktiv ein und teile mein Wissen bedingungslos mit euch und unseren Kunden.",
        "«Als Team kommen wir gemeinsam weiter.» Das meine ich ernst. Flache Hierarchien, offene Ohren, gegenseitiges Empowerment. Die AI-Domain baue ich nicht allein, sondern mit euch und unseren Kunden, Wissen inklusive.",
    )

    path.write_text(app, encoding="utf-8")


def main() -> None:
    humanize_data_ts()
    humanize_monads_section()
    humanize_app_ts()
    print("OK: humanized dashes in UI copy")


if __name__ == "__main__":
    main()
