export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  category: 'ki' | 'gastro' | 'both';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'ki_it' | 'gastro' | 'patents';
  grade?: string;
  highlights: string[];
  transcript?: string;
  /** Pfad zum Scan/PDF unter public/documents/certificates/ */
  documentUrl?: string;
}

export interface TestimonialItem {
  id: string;
  employer: string;
  role: string;
  period: string;
  summary: string;
  fullText: string;
  highlights: string[];
  /** Überschrift im Dokumenten-Panel (z. B. CERTIFICAT DE TRAVAIL) */
  documentTitle?: string;
  /** Pfad zum Scan/PDF unter public/documents/zeugnisse/ */
  documentUrl?: string;
}

export const PersonalData = {
  name: "Thomas Ballinari",
  title: "AI Business Specialist i.A. | KI-Professional Business | Gastronomie & KI",
  subTitle: "Eidg. Fachausweis in Ausbildung",
  email: "thomas.ballinari@pm.me",
  phone: "+41 79 705 63 14",
  address: "Volksbadstrasse 17a, CH-9000 St. Gallen",
  location: "St. Gallen, Schweiz",
  birthdate: "10. Januar 1966",
  languages: [
    { name: "Deutsch", level: "C2, Muttersprache" },
    { name: "Englisch", level: "C1, fortgeschritten, verhandlungssicher" },
    { name: "Französisch", level: "B2, gute Kenntnisse" },
    { name: "Italienisch", level: "A2, Grundkenntnisse" }
  ],
  strengths: [
    "Analytisches & vernetztes Denken",
    "Unternehmerisches Spirit & Tatkraft",
    "Kommunikationsstärke & Verhandlungsgeschick",
    "Teamführung & Motivation",
    "Belastbarkeit & Agilität in Stresssituationen",
    "Kreativität & Innovationsgeist",
    "Selbstständiges, strukturiertes Arbeiten"
  ],
  skills: [
    { title: "KI-gestützte Prozessoptimierung", score: 95, icon: "Cpu" },
    { title: "Prompt Engineering (Gemini, Claude, GPT)", score: 95, icon: "Terminal" },
    { title: "Google Studio AI / Gemini API", score: 90, icon: "Sparkles" },
    { title: "Claude & Claude Code Integration", score: 90, icon: "Code" },
    { title: "Machine Learning Grundlagen", score: 85, icon: "Brain" },
    { title: "Datenschutz (nDSG) & KI-Ethik", score: 90, icon: "ShieldCheck" },
    { title: "Gastronomie-Management", score: 95, icon: "Utensils" },
    { title: "Kalkulation & Warenbewirtschaftung", score: 95, icon: "Calculator" },
    { title: "POS-Kassensysteme (z.B. WaiterOne)", score: 90, icon: "Coins" },
    { title: "Führung & Teamleitung", score: 95, icon: "Users" },
    { title: "Projektmanagement (BPMN, Agil)", score: 90, icon: "FolderGit2" },
    { title: "Business Case & ROI Berechnung", score: 95, icon: "TrendingUp" }
  ],
  summary: "Thomas Ballinari verbindet über 40 Jahre wertvolle Gastronomie- und Führungserfahrung mit der modernen Welt der künstlichen Intelligenz. Als angehender AI Business Specialist (eidg. FA) und zertifizierter KI-Professional Business konzipiert er datenbasierte Lösungen zur drastischen Kosteneinsparung, Prozessoptimierung und Entlastung im Arbeitsalltag. Sein bestes Fallbeispiel dafür ist SmartGastro.ai, eine KI-gestützte Nachfrageprognose, welche praxisnah entwickelt wurde, um echte gastronomische Probleme wie Food Waste und Personalengpässe zu lösen."
};

export const InterestsAndEngagement = {
  interests: [
    "Prozessoptimierung & KI",
    "Reisen & interkultureller Austausch",
    "Curling",
  ],
  voluntary: [
    "2006 bis 2007: Aufbau & Betriebsleitung Eiskunstlaufbahn Sargans",
    "Seit 2018: Beistandschaft für Brüder Oliver und René (Zerebralparese)",
  ],
} as const;

export const Experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Aushilfe Küchenchef",
    company: "Säntis Gastronomie AG",
    location: "St. Gallen",
    period: "02/2025 bis aktuell",
    category: "gastro",
    highlights: [
      "Grossevents, Bankette bis 5'000 Gästen, Take-Away Messegastronomie",
      "Küchenchef Moststube, Olma-Messen St. Gallen"
    ]
  },
  {
    id: "exp-2",
    role: "Selbstständiger Pächter & Geschäftsführer",
    company: "Restaurant Löwenburg",
    location: "Lienz",
    period: "05/2013 bis 03/2023",
    category: "gastro",
    highlights: [
      "Erfolgreiche Leitung eines beliebten Ausflugsrestaurants mit 120 Innenplätzen und 185 Plätzen im Garten, Bewältigung von bis zu 500 Laufgästen an Spitzentagen.",
      "Gesamtverantwortung für die operative Küche, Personalrekrutierung und -ausbildung, Finanzbuchhaltung, Lohnwesen und Lieferantenverhandlungen.",
      "Durchführung einer vorbildlichen, erfolgreichen Betriebsübergabe an einen langjährigen, treuen Mitarbeiter nach 10-jähriger erfolgreicher Ära."
    ]
  },
  {
    id: "exp-3",
    role: "Leiter Gastronomie",
    company: "VersuchsStollen Hagerbach AG",
    location: "Flums",
    period: "08/2007 bis 05/2013",
    category: "gastro",
    highlights: [
      "Vollständige operative Führung des Restaurants, inkl. Menüplanung, Kalkulation, Einkauf und anspruchsvoller Mitarbeiterdisposition.",
      "Kochen für tägliche abwechslungsreiche Mittagessen für bis zu 120 Personen und Organisation von Corporate-Events bis 500 Personen.",
      "Konzeption, Planung & Realisation des Caterings für die renommierte IUT-Fachmesse 2011 mit über 3'000 Besuchern.",
      "Erfolgreiche Planung und Begleitung eines umfassenden Küchenumbaus und einer Betriebsvergrösserung."
    ]
  },
  {
    id: "exp-4",
    role: "Koch Teilzeit (20 bis 40 Prozent)",
    company: "Berit Paracelsus Klinik AG",
    location: "Niederteufen",
    period: "06/2006 bis 11/2006",
    category: "gastro",
    highlights: [
      "Verantwortung für anspruchsvolle Diätküche und die hochqualitative Einzelpatientenversorgung.",
      "Mitarbeit bei der täglichen reibungslosen Mahlzeitenbereitstellung im Klinikbetrieb."
    ]
  },
  {
    id: "exp-5",
    role: "Küchenchef",
    company: "Hotel Blumenstein",
    location: "Frauenfeld",
    period: "02/2004 bis 02/2006",
    category: "gastro",
    highlights: [
      "Leitung der Küchenbrigade, Ausbildung von engagierten Lehrlingen.",
      "Kreative Menüplanung, Koordination von exklusiven Banketten und gastronomischen Sonderveranstaltungen."
    ]
  },
  {
    id: "exp-6",
    role: "Selbstständiger Unternehmer",
    company: "Markthandel",
    location: "Ostschweiz",
    period: "10/1997 bis 12/2003",
    category: "gastro",
    highlights: [
      "Aufbau eines Handelsgeschäfts für den Einkauf & Import von Silberschmuck und trendigen Textilien.",
      "Erfolgreicher eigenständiger Vertrieb an nationalen Messen, Märkten und Open-Air-Veranstaltungen."
    ]
  },
  {
    id: "exp-7",
    role: "Pächter",
    company: "Schwimmbadrestaurant",
    location: "Oberwinterthur",
    period: "05/1995 bis 09/1997",
    category: "gastro",
    highlights: [
      "Operative und finanzielle Führung des saisonal hochfrequentierten Schwimmbadrestaurants mit bis zu 10 Mitarbeitenden.",
      "Gestaltung eines ansprechenden, schnellen Speisenangebots und Steuerung der Gästeströme."
    ]
  },
  {
    id: "exp-8",
    role: "Geschäftsführer",
    company: "Bistro La baguette",
    location: "Volketswil",
    period: "09/1993 bis 12/1994",
    category: "gastro",
    highlights: [
      "Leitung eines Bistro-Betriebs mit 90 Sitzplätzen, Erzielung ausgezeichneter betrieblicher Umsatzzahlen.",
      "Frühzeitiger, visionärer Einsatz von EDV-Kassensystemen (Lucullus, Vendomat) zur schnellen Einarbeitung und optimierten Warenbewirtschaftung."
    ]
  },
  {
    id: "exp-9",
    role: "Koch/Küchenchef",
    company: "Berggasthaus Tschuggenhütte",
    location: "Arosa",
    period: "02/1992 bis 03/1993",
    category: "gastro",
    highlights: [
      "Führung der Küche in einem hochfrequentierten Skigebiet-Gasthaus mit Einkaufskoordination und Menügestaltung.",
      "Parallel erfolgreicher Abschluss des anspruchsvollen Wirtefachkurses."
    ]
  },
  {
    id: "exp-10",
    role: "Kellner",
    company: "Gastronomiebetriebe Basma AG",
    location: "St. Gallen",
    period: "09/1990 bis 01/1992",
    category: "gastro",
    highlights: [
      "Einsatz in mehreren Betrieben der Basma AG (Filou-Bar, Goliath-Stübli, Peppermint-Bar).",
      "Ehrliche, pünktliche und korrekte Arbeitsweise. Im Arbeitszeugnis bestens empfohlen."
    ]
  },
  {
    id: "exp-11",
    role: "Sous-Chef / Saucier",
    company: "Chalet Suisse",
    location: "New York, USA",
    period: "04/1990 bis 08/1990",
    category: "gastro",
    highlights: [
      "Auslandserfahrung im renommierten Schweizer Restaurant mitten in New York City.",
      "Exzellente Fachpraxis in der klassischen Saucier-Kunst und Förderung interkultureller Kompetenz."
    ]
  },
  {
    id: "exp-12",
    role: "Chef Tournant",
    company: "Century Plaza Hotel",
    location: "Los Angeles, USA",
    period: "08/1988 bis 02/1990",
    category: "gastro",
    highlights: [
      "Springer für 14 Restaurants und die Hauptküche in einem der grössten Hotelkomplexe Los Angeles.",
      "Organisation von Banketten und Grossveranstaltungen bis zu 4'700 Personen."
    ]
  },
  {
    id: "exp-13",
    role: "Koch / Küchenchef",
    company: "Hotel Residenza La Val",
    location: "Brigels",
    period: "12/1986 bis 04/1988",
    category: "gastro",
    highlights: [
      "Aufstieg vom Koch zum Küchenchef, meine erste Führungserfahrung in der Küchenleitung.",
      "Kreative Menügestaltung; die Küche genoss unter seiner Leitung einen sehr guten Ruf."
    ]
  },
  {
    id: "exp-14",
    role: "Alleinkoch",
    company: "Restaurant Linsebühl",
    location: "St. Gallen",
    period: "06/1986 bis 11/1986",
    category: "gastro",
    highlights: [
      "Umsichtige Bewirtschaftung als selbstständiger Alleinkoch im Restaurantbetrieb.",
      "Eigenständige Menüzusammenstellung mit hoher Kundenzufriedenheit."
    ]
  },
  {
    id: "exp-15",
    role: "Tournant / Koch",
    company: "Hotel Alpenrose",
    location: "Wildhaus",
    period: "10/1985 bis 01/1986",
    category: "gastro",
    highlights: [
      "Rückkehr in den Lehrbetrieb als Tournant vor Antritt der Rekrutenschule.",
      "Gereifte Persönlichkeit und ausgezeichnete Einsatzfreude. Im Zeugnis bin ich für höhere Posten empfohlen."
    ]
  },
  {
    id: "exp-16",
    role: "Commis de Cuisine",
    company: "Hotel le Château d'Ouchy",
    location: "Lausanne",
    period: "06/1985 bis 10/1985",
    category: "gastro",
    highlights: [
      "Erster Einsatz in der Westschweiz im renommierten Schloss-Hotel am Genfersee.",
      "Volle Zufriedenheit; sehr guter Kontakt mit Vorgesetzten und französischsprachigen Kollegen."
    ]
  }
];

export const Educations: EducationItem[] = [
  {
    id: "edu-1",
    degree: "AI Business Specialist, Eidg. Fachausweis",
    institution: "ipso Bildung AG",
    location: "Zürich (Schweiz)",
    period: "2025 bis heute",
    details: [
      "Informatik & Wirtschaft. Intensive Vorbereitung auf den neu geschaffenen eidg. Fachausweis.",
      "Schwerpunkte: KI-Strategie, Business Intelligence (BI), Prototyping, Datenanalyse, Digitale Transformation.",
      "Praxisprojekt als Ausbildungsnachweis: Konzeptentwicklung und Prototyp für 'SmartGastro.ai' zur KI-gestützten Nachfrageprognose. Abgabe: 22. August 2026."
    ]
  },
  {
    id: "edu-2",
    degree: "KI-Professional (Business), Zertifikat",
    institution: "HSO Wirtschafts- und Informatikschule",
    location: "Bern / Oerlikon",
    period: "2025",
    details: [
      "Erfolgreicher Abschluss des praxisnahen Studiengangs.",
      "Inhalte: Grundlagen Künstlicher Intelligenz, AI-Datenmanagement & Analytics, NLP, Machine Learning / Deep Learning, Integration von KI-Projekten im Geschäftsalltag, EU-AI-Act & Schweizer nDSG (Datenschutz), KI-Ethics."
    ]
  },
  {
    id: "edu-3",
    degree: "Wirtefachkurs, Fähigkeitsausweis",
    institution: "GastroSuisse / Kanton St. Gallen",
    location: "St. Gallen",
    period: "02/1993 bis 06/1993",
    details: [
      "Umfassende Ausbildung zur Berechtigung zur Führung eines gastgewerblichen Betriebs mit Alkoholausschank.",
      "Spitzennote im Notenblatt der Wirteprüfung: Durschnitt von 5.8 über alle Fachnoten (inklusive Küchenführung 6.0, Buchhaltung 6.0)."
    ]
  },
  {
    id: "edu-4",
    degree: "Lehrmeisterkurs, Kursausweis",
    institution: "Amt für Berufsbildung / ZbW St. Gallen",
    location: "St. Gallen",
    period: "11/2004",
    details: [
      "Pädagogische Ausbildung zur fachgerechten Begleitung und Ausbildung von Lernenden im Gastgewerbe (Koch/Köchin EFZ)."
    ]
  },
  {
    id: "edu-5",
    degree: "Kochlehre, Eidg. Fähigkeitszeugnis (EFZ) Koch",
    institution: "Hotel Alpenrose",
    location: "Wildhaus",
    period: "01/1982 bis 01/1985",
    details: [
      "Fundierte Ausbildung in hochstehender Schweizer Gastronomie, mit Auszeichnung absolviert.",
      "Direkt nach erfolgreichem Abschluss mit Führungsverantwortung in der Küchenleitung betraut."
    ]
  }
];

export const Certificates: CertificateItem[] = [
  {
    id: "cert-1",
    title: "KI-Professional (Business), Zertifikat",
    issuer: "HSO Wirtschafts- und Informatikschule Schweiz",
    date: "18.07.2025",
    category: "ki_it",
    highlights: [
      "Erfolgreicher Abschluss des Zertifikats-Lehrgangs mit 6 praxisnahen Modulen.",
      "Module: KI-Grundlagen, Daten als Grundlage für KI, Maschinelles Lernen, KI-Projektintegration, KI-Ethik & nDSG, KI im Geschäftsalltag."
    ],
    transcript: "Zertifikat KI-Professional (Business)\n\nDie HSO Wirtschafts- und Informatikschule bestätigt, dass Ballinari Thomas den Zertifikats-Lehrgang KI-Professional (Business) besucht und gemäss dem Studienreglement der HSO Wirtschafts- und Informatikschule den Lehrgang bestanden hat.\n\nDer Lehrgang umfasste folgende Module:\n• Grundlagen der Künstlichen Intelligenz (KI)\n• Daten als Grundlage für KI\n• Maschinelles Lernen und Deep Learning, Sprachmodelle\n• Entwicklung und Integration von KI-Projekten\n• Ethische Aspekte und Datenschutz (CH-nDSG)\n• KI-Anwendungen im Geschäftsalltag\n\nOerlikon, 18.07.2025\n\nHSO Wirtschafts- und Informatikschule Schweiz\nAndré Durrer (Gesamtleiter Studienmanagement), Michael Segrada (Gesamtschulleiter & Geschäftsführer HSO)"
  },
  {
    id: "cert-2",
    title: "ECDL Modul 1, PC-Aufbaukurs",
    issuer: "Spirig Computer AG Trainingscenter, Heerbrugg",
    date: "13.04.2007",
    category: "ki_it",
    grade: "Prüfungsnote: 91%",
    highlights: [
      "Schulung zu IT-Grundlagen, Hardware-Komponenten, Betriebssystemen und Speichermedien.",
      "Erfolgreicher Abschluss der Modulprüfung mit hervorragenden 91% (gefordert 75%)."
    ],
    transcript: "ZERTIFIKAT - Spirig Computer AG Trainingscenter\n\nThomas Ballinari hat die Weiterbildung mit folgendem Schulungsinhalt erfolgreich absolviert:\n\nPC-Aufbaukurs (ECDL Modul 1)\n\n• Grundlagen der Informationstechnologie: Hard- und Software, Hauptbestandteile eines PC\n• Hardware: Zentrale Rechnereinheit, Eingabegeräte / Ausgabegeräte\n• Software: Betriebssystemsoftware, Anwendersoftware, Systementwicklung\n• Speichern: Verschiedene Speicherarten, Speichergeräte / Speicherkapazität, Rechnerleistung\n• Informationsnetzwerk: LAN und WAN, Telefonnetzwerk und Computer, Email und Internet\n• Computer im Alltag: Privat, am Arbeitsplatz, im Bildungswesen\n• IT und Gesellschaft-Welt im Wandel: Der richtige Arbeitsplatz, Gesundheit und Sicherheit, Sicherheit, Copyright, Gesetze, Computerviren, Datenschutz\n\nDie Schulung umfasste 5 Tage à 6 Lektionen. Die Modulprüfung wurde mit 91 % absolviert (ECDL fordert 75% für eine bestandene Prüfung).\n\nHeerbrugg, 13. April 2007\nKursleiter: Roberto Nicolini"
  },
  {
    id: "cert-3",
    title: "ECDL Modul 2, PC Grundkurs",
    issuer: "Klubschule Migros Rapperswil",
    date: "30.03.2007",
    category: "ki_it",
    highlights: [
      "Klassischer Weiterbildungskurs für Computer-Grundlagen unter Windows XP.",
      "Erfolgreiche Kursbestätigung über 6 intensive Lektionen à 45 Minuten."
    ],
    transcript: "Klubschule Migros - MEHR ERFOLG - Kurs-Bestätigung\n\nGerne bestätigen wir, dass Thomas Ballinari folgende Weiterbildung besucht hat:\n\nPC Grundkurs ECDL Modul 2\n\nLeitung: Peter Staub\nDatum: 19. März – 30. März 2007\nDauer: 6 Lektionen à 45 Minuten\nPlattform: Windows XP & Grundlagen der Dateiverwaltung\n\nRapperswil, 30. März 2007\nKlubschule Migros Rapperswil\nPeter Staub (Kursleitung), Christian Huber (Leiter Informatik)"
  },
  {
    id: "cert-4",
    title: "ECDL Modul 3, Word Processing",
    issuer: "Spirig Computer AG Trainingscenter, Heerbrugg",
    date: "20.04.2007",
    category: "ki_it",
    grade: "Prüfungsnote: 97%",
    highlights: [
      "Professionelle Textverarbeitung mit Microsoft Word 2003.",
      "Hervorragende Leistung in der Modulprüfung mit 97% Prüfungsnote."
    ],
    transcript: "ZERTIFIKAT - Spirig Computer AG Trainingscenter\n\nThomas Ballinari hat die Weiterbildung mit folgendem Schulungsinhalt erfolgreich absolviert:\n\nPC-Aufbaukurs (ECDL Modul 3 - Word Processing)\n\n• Grundlagen: Erste Schritte in der Textverarbeitung, Grundeinstellungen anpassen, Dokumentenaustausch\n• Grundlegende Arbeitsschritte: Einfügen, auswählen, kopieren, verschieben, löschen, suchen, ersetzen\n• Formatieren: Text formatieren, Allgemeine Formatierungen, Dokumentvorlagen\n• Fertigstellung eines Dokumentes: Formatvorlage, Seitennummerierung, Kopf- und Fusszeilen, Rechtschreibung und Grammatik, Dokument einrichten\n• Drucken: Druckvorbereitung\n• Fortgeschrittene Aufgaben: Tabellen, Einfügen von Bildern, Fotos und Objekten, Serienbrieffunktion\n\nDie Schulung umfasste 5 Tage à 6 Lektionen. Die Modulprüfung wurde mit dem glänzenden Ergebnis von 97 % absolviert (ECDL fordert 75% für das Bestehen).\n\nHeerbrugg, 20. April 2007\nKursleiter: Roberto Nicolini"
  },
  {
    id: "cert-5",
    title: "ECDL Modul 4, Spreadsheets",
    issuer: "Spirig Computer AG Trainingscenter, Heerbrugg",
    date: "27.04.2007",
    category: "ki_it",
    grade: "Prüfungsnote: 97%",
    highlights: [
      "Umfassende Tabellenkalkulation mit Microsoft Excel 2003.",
      "Überragende Leistung in der Modulprüfung mit 97% Prüfungsnote."
    ],
    transcript: "ZERTIFIKAT - Spirig Computer AG Trainingscenter\n\nThomas Ballinari hat die Weiterbildung mit folgendem Schulungsinhalt erfolgreich absolviert:\n\nPC-Aufbaukurs (ECDL Modul 4 - Spreadsheets)\n\n• Grundlagen: Erste Schritte in der Tabellenkalkulation, Grundeinstellungen anpassen, Dokumentenaustausch\n• Grundlegende Arbeitsschritte: Dateneingabe, Daten auswählen, Daten kopieren, verschieben, löschen, suchen, ersetzen, sortieren, Zeilen und Spalten\n• Formeln und Funktionen: Arithmetische und logische Formeln, Arbeiten mit Funktionen\n• Formatieren: Zahlen und Text in Zellen formatieren, Zellen und Zellbereiche formatieren, Rechtschreibung, Dokument einrichten\n• Drucken: Einfache Tabellenkalkulationsdateien ausdrucken\n• Fortgeschrittene Aufgaben: Einfügen von Objekten, Einfache Diagramme\n\nDie Schulung umfasste 5 Tage à 6 Lektionen. Die Modulprüfung wurde mit hervorragenden 97 % absolviert.\n\nHeerbrugg, 27. April 2007\nKursleiter: Roberto Nicolini"
  },
  {
    id: "cert-6",
    title: "ECDL Modul 6, Präsentation / PowerPoint",
    issuer: "Spirig Computer AG Trainingscenter, Heerbrugg",
    date: "18.06.2007",
    category: "ki_it",
    highlights: [
      "Gestaltung und Strukturierung professioneller Präsentationen mit PowerPoint 2003.",
      "Inhalte umfassen Folienübergänge, Animationen und Daten-Diagramme."
    ],
    transcript: "ZERTIFIKAT - Spirig Computer AG Trainingscenter\n\nThomas Ballinari hat die Weiterbildung mit folgendem Schulungsinhalt erfolgreich absolviert:\n\nPowerpoint (ECDL Modul 6)\n\n• Grundlagen der Präsentation: Grundeinstellungen, Ansichten, Layouttypen\n• Erstellung, Formatierung und Vorbereitung einer Präsentation: Präsentation manuell und mit Assistenten erstellen, Folien verschieben, kopieren, löschen etc.\n• Verwendung von Grafiken und Diagrammen: Diagramme, Organigramme, ClipArts, Videoclips\n• Drucken und Ausgabe der Präsentation: Drucklayouts, Handzettel, Notizseiten\n• Einsatz von Effekten bei Folienpräsentationen: Folienübergänge, Animationen, Sound, selbstlaufende Präsentationen\n• Betrachten und Durchführung der Folienpräsentation: Anpassung Ablaufzeiten, manueller und automatischer Ablauf\n\nDie in Teilzeit durchgeführte Schulung umfasste 5 Abende à 3 Lektionen. Der Inhalt ist auf dem international anerkannten Standard der ECDL aufgebaut.\n\nHeerbrugg, 18.06.07\nKursleiter: Clemens Eugster"
  },
  {
    id: "cert-7",
    title: "ECDL Modul 7, Internet & Outlook",
    issuer: "Bildungszentrum BVS St. Gallen",
    date: "25.05.2007",
    category: "ki_it",
    grade: "Note: 100% (Maximum)",
    highlights: [
      "Effiziente Internetnutzung, Web-Recherche und professionelles E-Mail-Management.",
      "Abschluss der anspruchsvollen Modulprüfung mit der Maximalnote von 100%."
    ],
    transcript: "Bildungszentrum BVS St. Gallen - Kursbestätigung\n\nSehr geehrter Herr Ballinari,\n\nHiermit bestätigen wir, dass Sie an unserem Bildungszentrum den Lehrgang Internet und Outlook besucht haben.\n\nKursbeginn: 21. Mai 2007\nKursende: 25. Mai 2007\nKurstage: 5 Tage\nLektionen: 30 Lektionen à 45 Minuten\nKursinhalt: Grundlegende Suchfunktionen im Internet unter Verwendung eines Webbrowsers. Lesezeichen setzen, Web-Seiten drucken. Verwendung von Outlook um Nachrichten zu senden und empfangen. Organisieren von Nachrichtenordnern und -verzeichnissen.\n\nDas ECDL Modul 7 (Internet und Outlook) wurde mit 100% absolviert. Für weitere Fragen stehen wir Ihnen gerne zur Verfügung.\n\nSt. Gallen, 25. Mai 2007\nHerzliche Grüsse, Bildungszentrum BVS St. Gallen\nHugo Scheiwiller, Pädagogische Planstelle"
  },
  {
    id: "cert-8",
    title: "ECDL Start Certificate (Module 1 bis 4)",
    issuer: "ECDL European Computer Driving Licence",
    date: "03.05.2007",
    category: "ki_it",
    highlights: [
      "Offizielle internationale EU-Zertifizierung nach Syllabus Version 4.0.",
      "Bescheinigt das erfolgreiche Bestehen der vier Kern-Module (Skills Card CH-0079487)."
    ],
    transcript: "ECDL European Computer Driving Licence\n\nECDL Start Certificate\n\nThis is to certify that\n\nThomas Ballinari\n\nhas successfully passed all 4 modules required for the granting of the\nECDL Start\nSyllabus Version: 4.0\n\nModules:\n• Concepts of Information Technology (M1)\n• Using the Computer and Managing Files (M2)\n• Word Processing (M3)\n• Spreadsheets (M4)\n\nSkills Card Number: CH-0079487\nDate: 03.05.2007\nECDL Manager Switzerland"
  },
  {
    id: "cert-9",
    title: "Eidg. Fähigkeitszeugnis Koch",
    issuer: "Kanton St. Gallen / Eidgenossenschaft",
    date: "02.04.1985",
    category: "gastro",
    grade: "Gesamtnote 5.2",
    highlights: [
      "Offizielle schweizerische Berufsurkunde für die erfolgreich absolvierte Kochlehre im Hotel Alpenrose.",
      "Ausgezeichnete Prüfungsnoten: Arbeitsprüfung 5.1, Berufskenntnisse 5.3, Allgemeinbildung 5.2."
    ],
    transcript: "SCHWEIZERISCHE EIDGENOSSENSCHAFT - CONFÉDÉRATION SUISSE\n\nFähigkeitszeugnis / Certificat de capacité / Attestato di capacità\n\nKoch\n\nbei / chez / presso: Hotel Alpenrose, Wildhaus\n\nbeendigt und die gesetzliche Lehrabschlussprüfung mit Erfolg bestanden.\n\nName: Ballinari Thomas\ngeboren: 10. Januar 1966\nHeimatberechtigt: Campo-Blenio TI\n\nSt.Gallen, 2. April 1985\nAmt für Berufsbildung Kanton St. Gallen\nDer Vorsteher: Bod... (Unterschrift)"
  },
  {
    id: "cert-10",
    title: "Berufsschulzeugnis, Kochlehre",
    issuer: "Gewerbliche Berufsschule St. Gallen",
    date: "27.03.1985",
    category: "gastro",
    grade: "Mustergültige Semesternoten",
    highlights: [
      "Offizielles Lehrzeugnis der Gewerblichen Berufsschule St. Gallen über die Lehrzeit von 1982 bis 1985.",
      "Fleiss-Note 6.0 durchgehend in allen Semestern."
    ],
    transcript: "Gewerbliche Berufsschule St. Gallen - ABTEILUNG FÜR DIENSTLEISTUNGSBERUFE\n\nKandidat: Ballinari Thomas, geb. 10.01.66, Kochlehre im Hotel Alpenrose Wildhaus.\n\nSemestralnoten 1982 - 1985 (Pflichtfächer / Freifächer):\n• Deutsch: Fleiss-Note 6 durchgehend | Leistung: 5, 6, 6, 4.5, 6, 5.5, 5, 5.5\n• Rechnen: Fleiss-Note 6 durchgehend | Leistung: 6, 6, 6\n• Wirtschaftskunde: Leistung 4.5, 5, 5\n• Staatskunde: Leistung 4.5, 6, 6\n• Geschäftskunde: Fleiss 6 | Leistung 5, 6, 5, 5.5, 5, 5, 5.5\n• Fachrechnen: Leistung 6, 4.5, 6\n• Betriebsleiterkunde: Fleiss 6 | Leistung 4.5, 5, 5\n• Warenkunde: Leistung 4.5, 5, 6, 5\n• Ernährungslehre: Leistung 6, 6, 5\n• Menükunde & Rechtschreibung: Leistung 6, 5.5, 6, 4.5, 5\n• Kochkunde: Leistung 6, 4.5, 6, 4.5, 6, 5\n\nBetragen: Note 6 durchgehend (Mustergültig)\nAbsenzen: Sehr gering (8 in Lehrjahren)\n\nSt. Gallen, den 27.03.85"
  },
  {
    id: "cert-11",
    title: "Wirtefachkurs, Fähigkeitsausweis",
    issuer: "Volkswirtschaftsdepartement Kanton St. Gallen",
    date: "15.06.1993",
    category: "gastro",
    highlights: [
      "Fähigkeitsausweis für die Führung eines gastgewerblichen Betriebs (Kantonales Patent).",
      "Berechtigung zum gastgewerblichen Alkoholausschank."
    ],
    transcript: "Das Volkswirtschaftsdepartement des Kantons St. Gallen erteilt\n\nThomas BALLINARI von Campo Blenio TI\n\naufgrund der vor der Wirteprüfungskommission abgelegten Prüfung den\n\nFÄHIGKEITSAUSWEIS für die Führung eines gastgewerblichen Betriebs mit Berechtigung zum Alkoholausschank.\n\nSt. Gallen, 15. Juni 1993\nWirteprüfungskommission: Der Vorsitzende (Unterschrift)\nVolkswirtschaftsdepartement: Der Vorsteher"
  },
  {
    id: "cert-12",
    title: "Notenblatt Wirtefachprüfung",
    issuer: "Wirteprüfungskommission Kanton St. Gallen",
    date: "16.06.1993",
    category: "gastro",
    grade: "Gesamtschnitt: 5.8",
    highlights: [
      "Herausragende Prüfungsnoten in allen 8 geprüften Wirtschaftsbereichen.",
      "Maximale Traumnote 6.0 in Küche, Buchhaltung, Wein- und Kellerkunde sowie Bier/Spirituosen."
    ],
    transcript: "Wirteprüfungskommission des Kantons St. Gallen - Notenblatt der Wirtefachprüfung\n\nKandidat: Ballinari Thomas, 10. Januar 1966, von Campo Blenio TI\n\nPrüfungsergebnisse (vom 14./15. Juni 1993):\n1. Fachnoten (schriftlich / mündlich / Durchschnitt):\n   a) Küche: 6,0 / 6,0 / 6,0\n   b) Service und Hauswirtschaft: - / 5,5 / 5,5\n   c) Wein- und Kellerbehandlung: - / 6,0 / 6,0\n   d) Bier, Spirituosen und alkoholfreie Getränke: - / 6,0 / 6,0\n   e) Lebensmittelgesetzgebung / Alkoholgesetz: - / 6,0 / 6,0\n   f) Gastwirtschaftsgesetz und andere kantonale Vorschriften: - / 5,5 / 5,5\n   g) Buchhaltung und Sozialversicherungswesen: 5,5 / 6,0 / 6,0\n   h) Unternehmungs- und Personalführung: 5,5 / - / 5,5\n\nDurchschnitt aller Fachnoten: 5,8\nSchlussnote: 46,5\n\nSt. Gallen, 16. Juni 1993\nDer Vorsitzende: H. Rieder (Unterschrift)"
  },
  {
    id: "cert-13",
    title: "Lehrmeisterkurs, Kursausweis",
    issuer: "Amt für Berufsbildung / ZbW St. Gallen",
    date: "25.11.2004",
    category: "gastro",
    highlights: [
      "Akkreditierter Ausbildungskurs (40 Lektionen) für Berufsbildner gemäss schweizerischem Gesetz.",
      "Befähigt zur Ausbildung von Lehrlingen als Kochlehrlinge (Koch/Köchin EFZ)."
    ],
    transcript: "Kursausweis Lehrmeisterkurs\n\nDie Inhaberin/der Inhaber dieses Ausweises hat den Ausbildungskurs für Lehrmeisterinnen und Lehrmeister gemäss Berufsbildungsgesetz absolviert.\n\nKandidat: Ballinari Thomas\nGeburtsort: St. Gallerstrasse 29, 9320 Arbon\nAHV-Nummer: 131.66.110.119\nKurs-Nummer: 20424\nKursdauer: 28.10.2004 – 25.11.2004\nLektionen: 40\nKursort: St. Gallen\n\nKursthemen:\n1. Das schweizerische Berufsbildungssystem\n2. Rechtliche Rahmenbedingungen der Lehrlingsausbildung\n3. Jugendpsychologie\n4. Führungspsychologie\n5. Führung und Ausbildung\n6. Früherkennung von Suchtverhalten\n\nSt. Gallen, 25.11.2004\nAmt für Berufsbildung Kanton St. Gallen\nKursorganisator: ZbW St. Gallen, A. Gnägi (Direktor)"
  },
  {
    id: "cert-14",
    title: "Gastwirtschaftspatente Kanton Zürich",
    issuer: "Finanzdirektion Kanton Zürich / Abt. Wirtschaftswesen",
    date: "1993 / 1995",
    category: "patents",
    highlights: [
      "Patentiertes Betriebsdokument zur eigenverantwortlichen Führung konzessionierter Wirtschaften.",
      "Betriebe: Restaurant Bistro la baguette Volketswil (1993) und Kiosk Schwimmbad Oberwinterthur (1995)."
    ],
    transcript: "Kanton Zürich - Finanzdirektion - Abteilung Wirtschaftswesen\nAußerordentliche Gastwirtschaftsbewilligungen / Patente:\n\n1. Patent Nr. 131477 (Ausgestellt am 11.11.1993):\n   Für den Betrieb 'Restaurant Bistro la baguette' an der Adresse 'Im Zentrum 18', Volketswil.\n   Patent-Inhaber: Ballinari Thomas\n   Staatsgebühr: CHF 1800.00 | Schreibgebühr: CHF 60.00 | Total: CHF 1860.00\n\n2. Patent Nr. 133629 (Ausgestellt am 18.07.1995):\n   Für den Betrieb 'Kiosk Schwimmbad Oberwinterthur' an der Adresse 'Im Zentrum 18', Volketswil.\n   Patent-Inhaber: Ballinari Thomas\n   Staatsgebühr: CHF 1800.00 | Schreibgebühr: CHF 60.00 | Total: CHF 1860.00\n\n2. Patent Nr. 133629 (Ausgestellt am 18.07.1995):\n   Für den Betrieb 'Kiosk Schwimmbad Oberwinterthur' an der Adresse 'Moosweisenweg 44', Oberwinterthur.\n   Patent-Inhaber: Ballinari Thomas\n   Staatsgebühr: CHF 150.00 | Schreibgebühr: CHF 100.00 | Total: CHF 250.00\n\nBedingungen/Auflagen: Entgeltliche Abgabe von an Ort und Stelle zu- oder aufbereiteten Speisen sowie alkoholfreien Getränken zum direkten Verzehr.\n\nZürich, Finanzdirektion des Kantons Zürich, Abt. Wirtschaftswesen."
  }
];

export const Testimonials: TestimonialItem[] = [
  {
    id: "zeugnis-1",
    employer: "VersuchsStollen Hagerbach AG, Flums-Hochwiese",
    role: "Leiter Gastronomie",
    period: "08/2007 bis 05/2013",
    summary: "Überdurchschnittliche Leistungsbereitschaft und hervorragende Qualitäten als umsichtiger Leiter und erfahrener Küchenchef. Kochen für Grossanlässe bis zu 500 Personen mit äusserstem Organisationstalent.",
    highlights: [
      "Führung des Restaurants, Menüplanung, Menükalkulation, Einkauf und anspruchsvolle Mitarbeiterdisposition.",
      "Grosses Projekt: 2010 Planung & Support bei Auswahl und Anlage der neuen Kücheneinrichtungen.",
      "Catering IUT-Fachmesse 2011 mit 3'000 Besuchern bravourös gemeistert.",
      "Bescheinigt unternehmerisches Denken, Flexibilität und eine stets motivierende Führungsweise."
    ],
    fullText: `ARBEITSZEUGNIS

Gerne bestätigen wir, dass Herr Thomas Ballinari, geboren am 10. Januar 1966, von Campo Blenio (TI) , vom 1. August 2007 bis 30. April 2013 als Leiter Gastronomie bei uns tätig war. 

Seine Hauptaufgaben umfassten:
- Führen vom Restaurant
- Menüplanung
- Menükalkulation
- Einkauf
- Mitarbeiterdisposition
- Gewährleistung der Einhaltung der Auflagen der Aufsichtsbehörden
- Kochen für die tägliche Mittagsverpflegung vor Ort (bis zu 120 Essen)
- Kochen für Kundenanlässe (bis zu 500 Personen)

Besondere Projekte / Aufträge:
- Im Jahr 2010 Planung und Support bei Auswahl und Anlage der neuen Kücheneinrichtungen für das Restaurant
- Planen und Realisieren des Caterings während der IUT-Fachmesse 2011 mit ca. 3'000 Besuchern
- Erfolgreiche Menüplanung und Umsetzung für Festabend der IUT mit 500 Personen

Wir stellen Herrn Ballinari das Zeugnis eines erfahrenen Chefkochs und Leiters Gastronomie aus. Seine Menüauswahl war dem jeweiligen Gästekreis angepasst, abwechslungsreich und kostenbewusst. Das Essen was von hoher Qualität und ansprechend angerichtet. Herr Ballinari hielt die Hygienevorschriften ein und verfügt über gutes unternehmerisches Denken und Handeln. Vor allem zu erwähnen sind seine überdurchschnittliche Leistungsbereitschaft, Selbstständigkeit und Zuverlässigkeit. Wir lernten ihn als verantwortungsbewussten, engagierten und flexiblen Mitarbeiter kennen, dem auch die Dekoration und die Einhaltung von Terminen und Vorgaben wichtig waren. Herr Ballinari brachte oft gute und wertvolle Ideen ein. Seine Mitarbeiter setzte er gezielt ein und führte sie auf motivierende Weise.

Sein Verhalten gegenüber Gästen, Vorgesetzten und Arbeitskollegen war stets freundlich und hilfsbereit. Er ermöglichte eine angenehme und konstruktive Zusammenarbeit.

Herr Ballinari verlässt uns auf eigenen Wunsch. Wir danken ihm für seine geleisteten wertvollen Dienste und wünschen ihm für seinen weiteren Lebensweg alles Gute und viel Erfolg.

VersuchsStollen Hagerbach AG
Robert Boni (Geschäftsführer), Barbara Bucher (Leiterin Human Resources)
Flums-Hochwiese, 30. April 2013`
  },
  {
    id: "zeugnis-2",
    employer: "Berit Paracelsus Klinik AG, Teufen",
    role: "Koch Teilzeit (20-40%)",
    period: "06/2006 bis 11/2006",
    summary: "Herr Ballinari bewies äusserst selbstständiges, effizientes, kreatives Arbeiten. Er bereitete köstliche Patientenspeisen und Diätgerichte mit viel Feingefühl zu und behielt auch in hektischen Zeiten die Ruhe.",
    highlights: [
      "Zubereitung von exklusiver Diätküche und Einzelpatientenverpflegung im Klinikbereich.",
      "Bescheinigt eine hervorragende Zuverlässigkeit, Teamgeist und ein stets loyales Verhalten."
    ],
    fullText: `ZEUGNIS

Name / Vorname: Ballinari Thomas
Bürgerort: Campo Blenio Ti
Geburtsdatum: 10. Januar 1966

Anstellung
vom: 01. Juni 2006
bis: 30. November 2006
als: Koch 20 bis 40% Teilzeitanstellung

Die Berit Klinik ist eine Privatklinik mit 40 Betten für Spezialchirurgie, Rehabilitation am Bewegungsorgan und Chinesische Medizin.

Herr Ballinari arbeitet nach kurzer Einarbeitungszeit selbstständig und effizient, kreativ und von guter Qualität.

Herr Ballinari ist ein routinierter Koch mit Gespür und Geschick für das Detail. Er richtet die Mahlzeiten mit viel Können an und seine Speisen sind für das Auge wie auch für den Gaumen ein Genuss.

Alle ihm übertragenen Arbeiten erledigte er zu unserer vollen Zufriedenheit. Innerhalb des Teams zeichnete er sich durch Hilfsbereitschaft, Flexibilität und Kooperation aus. Auch in hektischen Zeiten bewahrte er den Überblick und vermittelte dem Team Sicherheit.

Sein Verhalten zu Vorgesetzten war stets korrekt und freundlich.

Herr Ballinari verlässt uns, da er an seinem neuen Wohnort eine neue Herausforderung antreten wird. Wir bedauern seinen Weggang und wünschen ihm für seine private und berufliche Zukunft alles Gute.

Für die Geschäftsleitung: Frau Astrid Bergundthal
Der Küchenchef: Herr Heinz Ruckstuhl
Teufen, 22. November 2006`
  },
  {
    id: "zeugnis-3",
    employer: "Hotel Blumenstein, Frauenfeld",
    role: "Küchenchef",
    period: "02/2004 bis 02/2006",
    summary: "Als Küchenchef leitete Thomas Ballinari die Geschicke des anspruchsvollen Hotelrestaurants. Kreative Menüplanung, Ausbildung der Lehrlinge und tadellose Hygiene.",
    highlights: [
      "Führung der Küchenbrigade und Lehrlingsausbildung.",
      "Kreative Menügestaltung und herausragendes Eventkochen.",
      "Vorbildlicher Umgang mit Gästen und Mitarbeitenden."
    ],
    fullText: `ARBEITSZEUGNIS
**************************

Name: Ballinari Thomas
Geburtsdatum: 10. Januar 1966
Tätigkeit: Küchenchef
Anstellungsdauer: 4.2.2004 - 28.2.2006

Wir lernten Herrn Ballinari als sehr geschickten und pflichtbewussten Mitarbeiter kennen und schätzen. Herr Ballinari hat sich in kurzer Zeit in unser Team integriert und sich rasch in seinem Aufgabengebiet eingearbeitet.

Er hat mit grossem Elan die Ausbildung der Lehrlinge, spezielle Events und auch die Kreativität bei der täglichen Menüplanung in die Hand genommen und auch mitgelebt.

Sein Umgang mit Gästen, Vorgesetzten und Arbeitskollegen war stets vorbildlich.

Für die geleistete Arbeit danken wir Herrn Ballinari und wünschen ihm für seine Zukunft alles Gute und viel Erfolg.

R. Wiesli, Geschäftsführer (Hotel Blumenstein)
Frauenfeld, 28. Feb. 2006`
  },
  {
    id: "zeugnis-4",
    employer: "Arosa Bergbahnen AG (Tschuggenhütte)",
    role: "Küchenchef",
    period: "12/2000 bis 04/2001",
    summary: "Hervorragende Zusammenarbeit als sehr tüchtige, zuverlässige Arbeitskraft in der alpinen Gastronomie. Vollste Zufriedenheit bei Team und Führung.",
    highlights: [
      "Tüchtige und zuverlässige Arbeitskraft im anspruchsvollen Wintersaison-Restaurant.",
      "Sehr angenehmer, loyaler Umgang mit Kollegen und Vorgesetzten.",
      "Höchste Empfehlung und Bereitschaft zur Wiedereinstellung."
    ],
    fullText: `ARBEITSZEUGNIS
**************************

Herr Thomas Ballinari, geboren am 10.01.1966, von Campo Blenio

war in unserem Betrieb vom 1. Dezember 2000 bis 22. April 2001 als Küchenchef tätig.

Herr Ballinari hat seine Aufgaben ordnungsgemäss und zu unserer vollen Zufriedenheit ausgeführt. Er hat sich als tüchtige und zuverlässige Arbeitskraft empfohlen. Im Umgang mit Gästen, Vorgesetzten und Arbeitskollegen durften wir ihn als angenehmen Mitarbeiter kennenlernen. Herrn Ballinari würden wir gerne wieder als Saisonmitarbeiter in unserer Unternehmung einstellen.

Wir wünschen Herrn Ballinari für seine private wie berufliche Zukunft alles Gute und viel Erfolg.

AROSA BERGBAHNEN AG
Alain Balbinot (Gerant Tschuggenhütte)
Arosa, 22. April 2001 /rz`
  },
  {
    id: "zeugnis-5",
    employer: "Bistrag AG, Bistro La baguette, Volketswil",
    role: "Geschäftsführer",
    period: "09/1993 bis 12/1994",
    summary: "Herausragender geschäftlicher Einsatz, Erzielung ausgezeichneter Umsätze im 90-Plätze-Bistro. Frühzeitiger, gewinnbringender Einsatz moderner Gastronomie-EDV.",
    highlights: [
      "Vollständige geschäftliche Führung des Bistros mit 90 Plätzen.",
      "Sehr produktiver Einsatz von EDV-Warenwirtschaft zur schnellen Optimierung.",
      "Phantasievolle Gestaltung des Gastraums und exzellente Beliebtheit im Team."
    ],
    fullText: `Arbeitszeugnis

Wir bestätigen hiermit, dass Herr Thomas Ballinari, geboren am 10. Januar 1966, vom 20. September 1993 bis am 31. Dezember 1994 als Geschäftsführer in unserem Bistro la baguette in Volketswil tätig war.

Herr Ballinari leitete das Bistro mit 90 Sitzplätzen zu unserer vollen Zufriedenheit. Durch sein grosses Engagement erreichte er ausgezeichnete Umsatzzahlen (Umsatz, Rendite).

Dank seiner guten Auffassungsgabe arbeitete er sich sehr schnell in das mit EDV (Lucullus-Warenbewirtschaftung, Vendomat-Ausschankanlage) ausgerüstete Bistro ein. Die abwechslungsreiche Menuwahl von Herrn Ballinari wurde sehr geschätzt und entsprachen einer ausgezeichneten Qualität. Die abwechslungsreichen Menüs wurden sehr geschätzt und entsprachen einer ausgezeichneten Qualität.

Herr Ballinari war bei den Gästen und Mitarbeitern sehr beliebt. Durch seine Initiative und den grossen Einsatz war er den Angestellten stets ein gutes Vorbild. Die ganz grosse Stärke von Herrn Ballinari war die phantasievolle Gestaltung des Gastraumes (Dekoration, Ambiente schaffen etc.).

Herr Thomas Ballinari verlässt uns auf eigenen Wunsch. Wir bedauern seinen Wegzug - danken ihm für seinen hervorragenden Einsatz - und wünschen ihm für die Zukunft alles Gute.

Regensdorf, 29. November 1994
Bistrag AG: R. Ricco (Unterschrift)`
  },
  {
    id: "zeugnis-6",
    employer: "Berggasthaus Tschuggenhütte, Arosa",
    role: "Koch / Küchenchef",
    period: "02/1992 bis 03/1993",
    summary: "Kombination aus Aushilfs- und Küchenchefführung in einem der lebhaftesten Bergrestaurants von Arosa. Ruhige, verlässliche Küchenorganisation.",
    highlights: [
      "Mister Allrounder: Vom Aushilfskoch zum alleinigen Küchenchef befördert.",
      "Gesamteinkauf und komplette Vorratsplanung für extremen Saisondrang erledigt.",
      "Erfolgreicher Wirteschulabschluss parallel zur Küchenchefarbeit gemeistert."
    ],
    fullText: `ZEUGNIS CERTIFICAT CERTIFICATO

Der Unterzeichnete bezeugt hiermit, dass Herr Thomas Ballinari, geb. 10.1.66
vom 11. Februar 1992 bis 22. April 92, vom 12. Juni 1992 bis 19. Oktober 92 und vom 20. November 1992 bis 22. März 93 als Koch/Küchenchef in unserem Dienst gestanden ist.

Nachdem wir Herrn Ballinari im Februar 92 als Aushilfe bis Saisonende eingestellt hatten, übertrugen wir ihm in den folgenden Saisons die Funktion als Küchenchef in unserem lebhaften Betrieb.

In dieser Anstellung hatte Herr Ballinari die Gelegenheit, den ganzen Kücheneinkauf sowie die ganze Küchenorganisation selbstständig zu erledigen, was für ein Bergrestaurant in dieser Grösse nicht immer einfach ist.

Wir have Herrn Ballinari als einen ruhigen und zuverlässigen Mitarbeiter kennengelernt. Die gestellten Aufgaben erfüllte er zu unserer vollen Zufriedenheit und zeigte stets viel Interesse und grossen Einsatz.

Er hat diesen Frühling die Wirtefachschule mit grossem Erfolg bestanden. Wir danken ihm für seine bisher geleisteten Dienste und wünschen ihm schon jetzt viel Erfolg und Erfüllung in seiner Zukunft.

Ort und Datum: Arosa, 7. Juli 1992

Stempel und Unterschrift: BERGGERASTHAUS TSCHUGGENHÜTTE
Arosa Bergbahnen AG, Familie Th. Bangerter, 7050 Arosa
Schweizer Wirteverband`
  },
  {
    id: "zeugnis-7",
    employer: "Basma AG Gastronomiebetriebe, St. Gallen",
    role: "Kellner",
    period: "09/1990 bis 01/1992",
    summary: "Abdeckung exzellenter Servicequalitäten in anspruchsvollen St. Galler Gastbetrieben wie Filou-Bar, Goliath-Stübli und Peppermint-Bar.",
    highlights: [
      "Ehrliche, pünktliche und korrekte Arbeitsweise im lebhaften Bar- und Restaurantbetrieb.",
      "Herausragendes Verhalten gegenüber Gästen und der Geschäftsleitung.",
      "Austritt zur schulischen und fachlichen Weiterbildung (Wirtefachschule)."
    ],
    fullText: `BASMA AG GASTRONOMIEBETRIEBE
Postfach 390, CH-9004 St. Gallen
12. Januar 1992

Arbeitszeugnis

für Ballinari Thomas, geb. am 10.1.1966

Wir bestätigen hiermit, dass Herr Ballinari in unseren Betrieben
- Filou-Bar
- Goliath-Stübli
- Peppermint-Bar
vom 9. September 1990 bis am 5. Januar 1992 als Kellner gearbeitet hat.

Herr Ballinari hat seine Arbeit zu unserer vollen Zufriedenheit ausgeführt. Wir können ihn als ehrlich und pünktlich bezeichnen. Den Gästen, seinen Mitarbeitern wie auch der Firma gegenüber hat er sich immer korrekt verhalten. Herr Ballinari verlässt uns auf seinen eigenen Wunsch, um sich weiterzubilden. Wir können ihn als guten Mitarbeiter bestens empfehlen.

St. Gallen, 12. Januar 1992
BASMA AG: Peter Panella`
  },
  {
    id: "zeugnis-8",
    employer: "Chalet Suisse, New York (Manhattan)",
    role: "Sous-Chef / Saucier",
    period: "04/1990 bis 08/1990",
    summary: "Internationale Auslandserfahrung in NYC. Tadellose professionelle Standards in exzellenter Saucier-Kunst und bemerkenswert positive Ausstrahlung im Team.",
    highlights: [
      "Hervorragende Arbeitsmoral und umfassendes Fachwissen als Saucier.",
      "Äusserst saubere und gründliche Arbeitsweise in einer Prime-Location in Manhattan.",
      "Bescheinigt grossartige Teamkommunikation und ansteckende Fröhlichkeit."
    ],
    fullText: `CHALET SUISSE
6 East 48th St. New York 10017
Telephone (212) 355-0855
Konrad Egli

New York, August 29th 1990

To whom it may concern:

This is to confirm that Mr. Thomas Ballinari worked for us as Saucier (Sous-Chef) from April 23rd to August 29th 1990.

During his period of employment with us Mr. Ballinari demonstrated excellent working habits and a complete knowledge of his profession. He is very thorough and clean. He also possesses very good interpersonal skills and relates well to others. He never lost his cheerfulness.

Mr. Ballinari is leaving our employ at his own initiative and we wish him well in his new endeavours.

Very truly yours,
Konrad Egli, President`
  },
  {
    id: "zeugnis-9",
    employer: "Hotel Residenza La Val, Brigels (Winter 1987/88)",
    role: "Küchenverantwortlicher / 1. Koch",
    period: "12/1987 bis 04/1988",
    summary: "Alleinige Führung der Winter-Küchenbrigade. Angewandtes Handwerk in anspruchsvoller à la carte und Pensions-Küche, fantastisches Gebäck-Flair.",
    highlights: [
      "Volle Verantwortung für die lebhafte Hotelküche und Mitarbeiterkoordination.",
      "Besonderes Talent bei edlen hausgemachten Desserts und warmen Pracht-Buffets.",
      "Sehr gut strukturierter, vorausschauender Einkauf und exzellente Hygiene."
    ],
    fullText: `Zeugnis Certificat Certificato

Herr BALLINARI Thomas, geb. 10. Januar 1966 von Campo Blenio/TI
hat vom 14. Dezember 1987 bis zum 12. April 1988 als KÜCHENVERANTWORTLICHER / 1. KOCH in unserem Diensten gestanden in unserem Etablissement in Brigels.

Herr Ballinari war diesen Winter für die recht lebhafte Küche verantwortlich. Das Angebot umfasste die gepflegten Vier-Gang-Menus für die Pensionsgäste sowie eine recht umfangreiche à la carte-Karte.

Nebst der Zubereitung der Speisen, gehörten auch Einkauf von Frischprodukten und Economatprodukten, Ordnung und Sauberkeit, sowie die Führung der Küchenbrigade in seinen Aufgabenbereich.

Mit dem fachlichen Können von Herrn Ballinari waren wir auch diese Saison auf allen Posten sehr zufrieden. Seine Freude am Beruf und seine Kreativität stellte er vor allem bei der Herstellung von Desserts, Süssspeisen und warmen Buffets unter Beweis. Herr Ballinari bringt viele Ideen, die er auch in die Tat umsetzt. Die Küche genoss dank seinem Einsatz einen guten Ruf.

Wenn Herr Ballinari seine Kenntnisse in der Küchenorganisation noch verbessert und vertieft, wie wir ihn als Küchenchef in einer kleinen Brigade kennen gelernt haben, steht ihm jeder Posten offen. Herr Ballinari verlässt uns, um noch Auslanderfahrung zu sammeln. Wir danken ihm für seinen vorbildlichen Einsatz. Unser Betrieb steht ihm jederzeit offen.

Datum: Brigels, 12. April 1988
Stempel und Unterschrift: HOTEL RESIDENZA LA VAL
Th. Reimann, Dir.`
  },
  {
    id: "zeugnis-10",
    employer: "Hotel Residenza La Val, Brigels (Sommer 1987)",
    role: "1. Koch",
    period: "06/1987 bis 10/1987",
    summary: "Massgeblicher Anteil an einer erheblichen Umsatzsteigerung durch überzeugende Qualitätssicherung und eine kreative Erweiterung der à la carte-Karte.",
    highlights: [
      "Operative Sommerverantwortung für die Hotelküche und ein kleines Team.",
      "Relevante Umsatzsteigerung durch exzellente Produktauswahl und Zubereitung.",
      "Vertiefender Dessertkurs für erstklassige, anspruchsvolle Süssspeisen."
    ],
    fullText: `Zeugnis Certificat Certificato

Herr BALLINARI Thomas, geb. 10. Januar 1966 von Campo Blenio/TI
hat vom 8. Juni 1987 bis 18. Oktober 1987 als 1. KOCH in unserem Diensten gestanden in unserem Etablissement in Brigels.

Herr Ballinari hatte diesen Sommer die Verantwortung für die Führung der Küche und deren kleines Team.

Auch diese Saison waren wir mit dem fachlichen Können von Herrn Ballinari auf allen Posten sehr zufrieden. Sein Flair für Desserts und Gebäck konnte Herr Ballinari in einem Dessertkurs noch vertiefen.

Grossen Wert wurde auf die 'à la carte'-Karte gelegt, die entsprechend vergrössert wurde. Dank dem grösseren Angebot und Dank der Qualität der zubereiteten Produkte konnte der Umsatz erheblich gesteigert werden.

Sein Verhalten gegenüber Vorgesetzten und Mitarbeitern war auch diese Saison sehr gut, seine Arbeitsweise recht gut. Wir freuen uns, dass wir auch in der kommenden Wintersaison wieder auf Herrn Ballinari zählen dürfen.

Datum: 18. Oktober 1987
Stempel und Unterschrift: Hotel Residenza La Val
Th. Reimann, Direktion`
  },
  {
    id: "zeugnis-11",
    employer: "Hotel Residenza La Val, Brigels (Winter 1986/87)",
    role: "Koch",
    period: "12/1986 bis 04/1987",
    summary: "Bescheinigung erstklassigen Rufs durch unermüdlichen Wintersaison-Einsatz im 4-Mann-Brigadeteam.",
    highlights: [
      "Umfassender Beitrag zum Wintersaison-Erfolg für Pensionäre & à la carte.",
      "Auffallend positive Entfaltung kreativer Fantasie und Begeisterungsfähigkeit.",
      "Herausfordernde Ernennung zur vollen Küchenverantwortung für den kommenden Sommer."
    ],
    fullText: `Zeugnis Certificat Certificato

Herr BALLINARI Thomas, geb. 10.01.1966 von Campo Blenio
hat vom 17. Dez. 1986 bis 02. April 1987 als K O C H in unserem Diensten gestanden in unserem Etablissement in Brigels.

Herr Ballinari war als Koch in unserem 4 Mann-Team tätig.

Das Angebot umfasste die gepflegten Vier-Gang-Menus für unsere Pensionsgäste sowie eine umfangreiche 'à la carte' Karte für das Restaurant. Die Küche genoss während der vergangenen Wintersaison 1986/87 bei den Gästen und dem Restaurantbesuchern einen guten Ruf. Dies nicht zuletzt Dank dem grossen Einsatz von Herrn Ballinari.

Wir waren mit dem fachlichen Können von Herrn Ballinari auf allen Posten sehr zufrieden. Herr Ballinari bringt viel Freude für seinen Beruf mit, was sich besonders in der positiven Entfaltung seiner Phantasie zeigt.

Sein Verhalten gegenüber Vorgesetzten und Mitarbeitern war stets vorbildlich, seine Arbeitsweise sauber.

Wir können Herrn Ballinari für einen gleichwertigen Posten sehr empfehlen und freuen uns, dass er im kommenden Sommer die Verantwortung für die Führung der Küche übernimmt.

Datum: 02. April 1987
HOTEL RESIDENZA LA VAL
Th. Reimann, Direktion`
  },
  {
    id: "zeugnis-12",
    employer: "Restaurant Linsebühl, St. Gallen",
    role: "Alleinkoch",
    period: "08/1986 bis 11/1986",
    summary: "Umsichtige Bewirtschaftung als selbstständiger Alleinkoch. Höchste Kundenzufriedenheit bei täglicher, freier Menügestaltung.",
    highlights: [
      "Volle Verantwortung als Alleinkoch bei eigenständiger Speisengestaltung.",
      "Besonders starker Ordnungssinn, Ehrlichkeit und bedingungslose Loyalität.",
      "Bedauern der Arbeitgeber über den angekündigten Austritt des beliebten Mitarbeiters."
    ],
    fullText: `ARBEITS-ZEUGNIS
**************************

Herr Thomas Ballinari, geb. 10.1.1966, ist vom 1.8.1986 bis zum 30.11.1986 in unserem Dienst gestanden. Er war in unserem Restaurant-Betrieb "Linsebühl" als Koch tätig und hat seine Arbeit zu unserer vollen Zufriedenheit geleistet. Er war ein ehrlicher und pflichtbewusster Angestellter. Seine Zuverlässigkeit und seinen Ordnungssinn wussten wir besonders zu schätzen. Mit seinen selbständig zusammengestellten Menus hat er unsere Kunden bestens bedient. Gerne hätten wir seinen Dienst weiterhin beansprucht.

Wir danken Herrn Ballinari für die geleistete Arbeit und wünschen ihm Erfolg im Beruf und alles Gute für die Zukunft.

9000 St.Gallen, 30. Nov. 1986
Fam. Fässler-Fuchs, Rest. Linsebühl, 9000 St.Gallen`
  },
  {
    id: "zeugnis-13",
    employer: "Hotel Alpenrose, Wildhaus (Tournant)",
    role: "Koch / Tournant",
    period: "10/1985 bis 01/1986",
    summary: "Erfolgreiche Rückkehr in den Lehrbetrieb als reife Kochpersönlichkeit in der Position des Tournants vor dem Militärdienst.",
    highlights: [
      "Sofortige reibungslose Wiedereingliederung in die anspruchsvolle Küchenbrigade.",
      "Herausragende Dienste auf allen Posten als flexibler Tournant.",
      "Gereifte Persönlichkeitsentwicklung und mustergültige Einsatzfreude."
    ],
    fullText: `ZEUGNIS
****************

Wir bestätigen hiermit, dass Herr Thomas Ballinari, geboren am 10. Januar 1966 von Campo Blenio, vom 15. Oktober 1985 bis 31. Januar 1986 als Koch in unseren Diensten gestanden hat.

Nach Abschluss der Lehrzeit kehrte Thomas vor Antritt der Rekrutenschule für weitere 3.5 Monate in unseren Betrieb zurück.

Ohne Schwierigkeiten konnte er sich wieder in unsere Küchenbrigade eingliedern und leistete in der Position des Tournant sehr gute Dienste.

Thomas zeigte bereits eine gereifte Persönlichkeit und verdiente sich durch Einsatzfreude unsere Wertschätzung. Er besitzt die Fähigkeiten für eine erfolgreiche berufliche Zukunft, für die wir ihm alles Gute wünschen.

Wildhaus, 31.Jan.86
HOTEL ALPENROSE WILDHAUS
Niklaus Stump-Wiggli, Telefon 074 5 21 21`
  },
  {
    id: "zeugnis-14",
    employer: "Hotel le Château d'Ouchy, Lausanne",
    role: "Commis de Cuisine",
    period: "06/1985 bis 10/1985",
    documentTitle: "CERTIFICAT DE TRAVAIL",
    summary: "Erster Westschweiz-Aufenthalt zur Festigung französischer Fachbegriffe. Volle Zufriedenheit im renommierten Schloss-Hotel am Genfersee.",
    highlights: [
      "Exzellente Arbeitsleistung und feine Berufshaltung als Commis de Cuisine.",
      "Sehr gute harmonische Zusammenarbeit mit Vorgesetzten und französischsprachigen Kollegen.",
      "Austritt in bestem, beiderseitigem Einvernehmen."
    ],
    fullText: `Monsieur BALLINARI Thomas, né le 10 janvier 1966 de Campo Blenio/TI, a travaillé dans notre établissement du 1er juin 1985 au 13 octobre 1985 en qualité de COMMIS DE CUISINE.

Durant cette période, Thomas nous a donné entière satisfaction, tant par son travail, sa tenue, que par son bon contact avec ses collègues et ses supérieurs.

Il nous quitte à ce jour libre de tout engagement et nos meilleurs voeux l'accompagnent pour la suite de sa carrière.

Lausanne, le 13 octobre 1985
HOTEL LE CHATEAU D'OUCHY
M. Martial Grand (Chef de cuisine), N. Gruss (Directeur)`
  },
  {
    id: "zeugnis-15",
    employer: "Hotel Alpenrose, Wildhaus (Ausbildung)",
    role: "Kochlehre (Kochlehrling)",
    period: "05/1982 bis 04/1985",
    summary: "Herausragendes Fundament einer dreijährigen klassischen Kochlehre. Mit grossem Fleiss, Können und mustergültigem Benehmen hervorragend absolviert.",
    highlights: [
      "Erstklassiges Engagement beim Erlernen aller klassischen Kochdisziplinen.",
      "Äusserst beliebt bei allen Ausbildnern und Brigadevorgesetzten.",
      "Aufbau exzellenter, breiter Kenntnisse einer gehobenen Schweizer Hotelküche."
    ],
    fullText: `ZEUGNIS:
**************

Wir bestätigen hiermit, dass Herr Thomas Ballinari, geboren am 10.I.1966 von Campo Blenio TI, vom 1.5.1982 bis 30.4.1985 als Kochlehrling in unseren Diensten gestanden hat.

Thomas Ballinari hat die Kochlehre mit sehr grossem Fleiss und Können hervorragend absolviert. Er war stets zuvorkommend und sein Betragen in jeder Hinsicht mustergültig. Thomas war bei seinen Arbeitskollegen und Vorgesetzten sehr beliebt. Für die weitere Zukunft als Koch besitzt Thomas schon sehr gute Berufskenntnisse einer gepflegten Küche und wir wünschen ihm in seiner Karriere alles Gute.

Wildhaus, den 30.4.1985

HOTEL ALPENROSE WILDHAUS
Birger Stump, Niklaus Stump-Wiggli`
  }
];

export const SmartGastroProject = {
  title: "SmartGastro.ai",
  subTitle: "KI-gestützte Nachfrageprognose im Schweizer Gastgewerbe",
  demo: {
    version: "V3.3",
    label: "Demo-Version V3.3",
    url: "https://gemini.google.com/share/bcf2f6bba4e2?hl=de",
    description: "Interaktiver Prototyp in Google Gemini mit POS-Anbindung (WaiterOne) und Forecast-Dashboard.",
  },
  candidate: "Thomas Ballinari",
  role: "Analyst, Konzeptentwickler & Projektverantwortlicher (ipso Ausbildung AG, Fachausweis)",
  submissionDate: "22. August 2026",
  problem: {
    title: "Das tägliche Planungsdilemma in der Gastro-Küche",
    details: [
      "Fehlplanung beim Mise-en-Place führt direkt zu enormem Food Waste (Zubereitung auf Verdacht) oder unzufriedenen Gästen durch Out-of-Stock-Situationen.",
      "Massiver Hektik und Stress während der Stosszeiten (z. B. 12:15 Uhr) durch spontane, ungeplante Nachproduktionen.",
      "Schwere Vorhersehbarkeit durch reine Intuition. Das Gästeaufkommen schwankt extrem je nach Wetter (Sonne = Terrassengeschäft, Regen = gutbürgerlich innen) und lokalen Events im Umkreis.",
      "Fehlende Datennutzung: Das vorhandene POS-Kassensystem (z. B. WaiterOne) erfasst zwar alle Transaktionen lückenlos, diese wertvollen Daten verbleiben jedoch ungenutzt im Archiv.",
      "Kosten als Schmerzpunkt: Ein durchschnittliches Schweizer Ausflugsrestaurant verliert monatlich CHF 1'000 bis CHF 2'000 durch vermeidbaren Food Waste."
    ]
  },
  solution: {
    title: "Die SmartGastro.ai Lösung: Datenbasierte Intelligenz",
    details: [
      "Kombination historischer POS-Verkaufsdaten mit lokalen Wettervorhersagen (MeteoSchweiz Open Data) und registrierten Events im Umkreis von 30 km.",
      "Einsatz hoch-optimierter Machine Learning Algorithmen (XGBoost & LightGBM) zur Generierung eines präzisen 7- bis 14-Tage-Forecasts pro Gericht und Tag.",
      "Präzision: Erreichung einer nachgewiesenen Vorhersagegenauigkeit (MAPE) von unter 15% nach nur 3 Monaten Pilotbetrieb für die Top 10-Gerichte.",
      "Automatisierte Cloud-Pipeline: Serverlose ETL-Abfragen in eine sichere PostgreSQL-Datenbank (gehostet im AWS-Rechenzentrum Schweiz zur Einhaltung des nDSG) täglich um 06:00 Uhr.",
      "Actionable Dashboard: Klares Web-Dashboard für den Küchenchef mit automatischen Bestell- und Vorbereitungsmengen, inklusive Erklärbarkeit (z. B. 'Samstag +10% wegen Bauernmarkt Lienz und sonnigem Wetter').",
      "Self-Learning Feedback Loop: Der Küchenchef gibt abends mit einem Klick das reale 'Ist' ein oder lädt den CSV-Tagesabschluss hoch. Die KI lernt kontinuierlich aus den Abweichungen (KI-Delta)."
    ]
  },
  businessCase: {
    title: "Wirtschaftlichkeitsanalyse (1 Restaurant, z.B. Restaurant Löwenburg Lienz)",
    statusQuo: {
      sales: 800000,
      cogs: 264000, // 33% Wareneinsatz
      foodWaste: 18200, // 8% des Wareneinsatzes
      outOfStock: 8000, // 1% entgangener Umsatz
      planningHours: 11640 // Stress & Überstunden
    },
    savings: {
      foodWaste: 9000, // -50% Food Waste
      outOfStock: 3750, // +0.5% Umsatz durch bessere Verfügbarkeit
      planningTime: 2875, // Zeitersparnis (30 Min/Tag, 230 Tage)
      overtimeReduction: 3125, // Reduktion Stress & Überstunden
      totalBenefit: 18750 // Jährlicher Gesamtnutzen
    },
    costs: {
      onboarding: 7500, // Einmalige Einrichtung und IT-Onboarding
      license: 4800, // Jährliche Lizenzgebühr (CHF 400/Monat)
      totalYear1: 12300,
      totalYear2: 5300, // Nur Lizenz + CHF 500 Wartung
      totalYear3: 5300
    },
    metrics: {
      roiYear1: "152%", // ROI im ersten Jahr ((Nutzen CHF 18'750 - Lizenz CHF 4'800) / Onboarding CHF 7'500)
      breakeven: "ca. 7 Monate",
      netProfit3Years: 33350, // Kumulierter 3rd Year Net Benefit
      stressLevelReduction: "Von 7/10 auf 4/10"
    }
  },
  roadmap: [
    { phase: "Phase 1: MVP (3 Monate)", goal: "POS-Import automatisiert, Forecast für Top-15 Produkte, Real/Kassa-Feedback, nDSG Compliance, 1 Pilotbetrieb." },
    { phase: "Phase 2: Release 1 (+3 Monate)", goal: "Wetter-API Live-Integration, automatisierte Eventssuche (30km), Management-Reports (Waste/Accuracy), vollständige Produktabdeckung." },
    { phase: "Phase 3: Release 2 (+6 Monate)", goal: "Multi-Standorte Mandantenfähigkeit, Integration weiterer Kassensysteme (REST-API v2), mobile Web-App für Küchenchefs, automatisches Schichtpersonal-Vorschlagskonzept." }
  ],
  methods: [
    { name: "Stakeholder Interviews", desc: "Befragungen von Küchenchef Fotios und Serviceleiterin Alexandra zur Erhebung der schmerzhaften Alltagsprozesse." },
    { name: "Ishikawa Analyse", desc: "Strukturierte Analyse der Hauptfehlerquellen für Überproduktion (Mensch, Methode, Maschine, Material, Umwelt)." },
    { name: "MoSCoW Priorisierung", desc: "Klassifikation funktionaler Anforderungen (z.B. Must-Have: Täglicher automatischer POS Import, 7-Tage Forecast, Override Funktion)." },
    { name: "BPMN & Prozessfluss", desc: "Modellierung des täglichen Arbeitsablaufs ab 06:00 Uhr ETL-Prozess bis 22:30 Uhr Tagesabschluss." },
    { name: "Total Cost of Ownership", desc: "Umfassende betriebswirtschaftliche Kalkulation von SaaS-Gebühren, Schulungen und Onboarding-Beratung." }
  ],
  forecastData: [
    { date: "Montag", dish: "Cordon Bleu", forecast: 65, actual: 61, delta: -4, weather: "Sonnig, 22°C", event: "Keine Extrajubiläen" },
    { date: "Dienstag", dish: "Fitnessteller Salat", forecast: 95, actual: 97, delta: 2, weather: "Heiss, 28°C", event: "Keine Extrajubiläen" },
    { date: "Mittwoch", dish: "Zürcher Geschnetzeltes", forecast: 45, actual: 42, delta: -3, weather: "Regnerisch, 14°C", event: "Keine Extrajubiläen" },
    { date: "Donnerstag", dish: "Wienerschnitzel", forecast: 97, actual: 91, delta: -6, weather: "Bewölkt, 18°C", event: "Bauernmarkt Lienz (+20%)" },
    { date: "Freitag", dish: "Rinds-Entrecôte", forecast: 55, actual: 58, delta: 3, weather: "Sonnig, 23°C", event: "Firmenjubiläum (+15%)" },
    { date: "Samstag", dish: "Käsespätzle", forecast: 80, actual: 82, delta: 2, weather: "Regnerisch, 12°C", event: "Lokales Konzert (+10%)" },
    { date: "Sonntag", dish: "Cordon Bleu", forecast: 120, actual: 118, delta: -2, weather: "Sonnig, 24°C", event: "Sonntags-Ausflügler" }
  ]
};

export interface MonadsValueItem {
  title: string;
  concept: string;
  description: string;
  howWeWin: string;
}

export const MonadsFitSection = {
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
} as const;

export const MonadsValues = {
  intro: "Fabian, Christian, Marc, Adrian, Rafael, Tanja: Ihr sucht eine Macher-Persönlichkeit für eure AI-Domain. Business Cases statt Konzeptpapiere, Vibe Coding statt PowerPoint, Wirkung beim Kunden statt Technologie-Diskussionen. Hier meine interaktive Antwort auf euer Stelleninserat, im Du, mit SmartGastro.ai als konkretem Case.",
  items: [
    {
      title: "1. Aufbau & Verantwortung der Domain AI",
      concept: "Unternehmerische Domain-Verantwortung",
      description: "Ich brenne darauf, die AI-Praxis bei Monads von Grund auf zu gestalten. Mit meiner 40-jährigen unternehmerischen Erfahrung als selbstständiger Pächter bringe ich genau das unternehmerische Denken, die finanzielle Disziplin und strategische Positionierung mit, die für einen erfolgreichen Business-Pfad nötig sind.",
      howWeWin: "Wir etablieren ein klares AI-Dienstleistungsportfolio, das sich am ROI des Kunden misst, genau wie es in SmartGastro.ai vorgedacht ist."
    },
    {
      title: "2. Business Cases über Technologie stellen",
      concept: "Nutzenzentriertes Solution Design",
      description: "Ich denke in Geschäftsproblemen statt in Algorithmen. In der Gastronomie waren das Food Waste, Personalknappheit und hohe Betriebskosten. Für eure Kunden übersetze ich komplexe organisatorische Ineffizienzen in klare AI-Interventionen (z.B. prädiktive Analysen, automatisierte Dokumentenverarbeitung).",
      howWeWin: "Direkte Gespräche mit Fachbereichen und C-Level auf Augenhöhe. Ich finde die Hebel, die echten finanziellen Mehrwert schaffen."
    },
    {
      title: "3. Vibe Coding & Schnelle Delivery",
      concept: "Pragmatische Prototypen in Rekordzeit",
      description: "Lösungen designen und sofort selbst zum Leben erwecken: Ich nutze Claude, Cursor, Codex und APIs tagtäglich intensiv als Arbeitsweise, nicht als Experiment. SmartGastro.ai ist das lebende Beispiel: in kürzester Zeit als reaktionsfähiger Fullstack-Prototyp umgesetzt, fertig zur Kundenpräsentation.",
      howWeWin: "Keine nutzlosen und teuren 100-seitigen Konzepte. Wir präsentieren dem Kunden funktionierende Prototypen nach wenigen Tagen. Das ist unser unschlagbarer Wettbewerbsvorteil bei Monads!"
    },
    {
      title: "4. Systematisches Wissensmanagement",
      concept: "F6-zertifiziertes Ensurement & Enablement",
      description: "Wissen darf kein Herrschaftswissen sein. In meiner Ausbildung zum AI Business Specialist ist das Sichern des KI-Wissensmanagements (Handlungsfeld F6) eine zertifizierte Kernkompetenz. Ich baue Methoden, Formate und durchsuchbare Wissensspeicher (wie das RAG in dieser App), damit der Kunde lernt, AI selbstständig im Alltag produktiv einzusetzen.",
      howWeWin: "Wir befähigen Kundenteams durch strukturierte Workshops und etablieren eine nachhaltige AI-Kultur, die im Unternehmen verankert bleibt."
    },
    {
      title: "5. Flat Hierarchies & Du-Kultur",
      concept: "Als Team weiterkommen, keine Einzelgänger",
      description: "Ich liebe flache Strukturen, Freiheit und Eigenverantwortung. Bei Monads arbeiten wir auf Augenhöhe. Mit meiner langjährigen Leader-Erfahrung weiss ich, dass der Erfolg eines Projekts immer auf Teamarbeit beruht. Die Du-Kultur ist für mich keine Floskel, sondern gelebte Realität.",
      howWeWin: "Gemeinsam am Tisch: Entwickler, Berater und Kunden ziehen an einem Strang. Transparenter Austausch, bei welchem jeder sein Bestes beisteuert."
    }
  ],
  workflowSteps: [
    {
      step: "01. Potenziale identifizieren",
      title: "Business Problem im Dialog",
      desc: "Gespräch mit den Fachbereichen vor Ort. Analyse des Kernschmerzes (z. B. zwei Stunden manuelles Datensichten, Materialschwund, Engpässe)."
    },
    {
      step: "02. AI Lösungsdesign",
      title: "Schnittstellen & Frameworks",
      desc: "Konzeptionierung der Technologie-Pipeline (z.B. Gemini Flash APIs, serverlose Cloud SQL, NLP-Agenten) und mathematische Plausibilitätsprüfung."
    },
    {
      step: "03. Rapid Vibe Delivery",
      title: "Iterative Entwicklung mit LLMs",
      desc: "Einsatz von Claude, Cursor und APIs zur direkten Umsetzung von Mockups, ETL-Pipelines und interaktiven Benutzeroberflächen binnen weniger Tage."
    },
    {
      step: "04. Enablement & Transfer",
      title: "Wissensmanagement & Workshops",
      desc: "Dokumentenspeicher aufbauen, interaktive Schulungen über Prompting & Tool-Einsatz halten, sodass das Team die Lösung liebt und beherrscht."
    }
  ]
};

export const SmartUmbrellaProject = {
  title: "IPSO Premium Smart-Regenschirm",
  subTitle: "Die Symbiose aus traditioneller Handwerkskunst und modernster IoT-Technologie",
  creators: "Hüseyin & Thomas",
  model: "Smart Edition 2026 | Carbon Series",
  specs: {
    modell: "IPSO-Carbon-120 Smart Edition",
    artikelnummer: "HT-IPSO-SMART-2026-001",
    spannweite: "120 cm (Durchmesser geöffnet)",
    packmass: "20 cm (ultra-kompakt zusammengefaltet)",
    gewicht: "ca. 380 g (inklusive Smart-Modul)",
    gerippe: "Hochleistungs-Carbon-Faser mit 8 verstärkten Streben",
    griff: "Ergonomischer Soft-Touch-Griff mit integrierter Elektronik & Sensorik",
    stoffbezug: "Premium-Polyester, wasserabweisend, individueller IPSO-Druck",
    wassersaeule: "3000 mm",
    uvSchutz: "UPF 50+",
    windbestaendigkeit: "Getestet bis 80 km/h (Windkanal)",
    oeffnung: "Vollautomatik per Knopfdruck (Auf/Zu)"
  },
  features: [
    { title: "Bluetooth 5.2 Konnektivität", desc: "Nahtlose und energiesparende Verbindung mit der 'IPSO Connect' App (iOS & Android)." },
    { title: "GPS-Tracking & Suchfunktion", desc: "Integriertes GPS-Modul ermöglicht die präzise Standortbestimmung weltweit und in Echtzeit." },
    { title: "Find My Umbrella", desc: "Blinkende LED im Soft-Touch-Griff und akustisches Signal im Nahbereich bis 50m." },
    { title: "Intelligente Diebstahlsicherung", desc: "Bewegungsalarm via App, Geofencing-Benachrichtigung und proaktive Reminder-Meldung." },
    { title: "Smart Battery", desc: "Leistungsstarker, wiederaufladbarer Li-Ion Akku mit USB-C Port, bis zu 6 Monate Laufzeit." },
    { title: "Proaktiver Wetter-Alarm", desc: "Lokale Wetterdaten-Inferenz mit Push-Meldung kurz vor Regenbeginn am aktuellen Standort." },
    { title: "Nutzungsstatistik", desc: "Detailliertes Tracking von Öffnungszyklen, Standorten und verhinderten Regentagen." }
  ],
  highlights: [
    "Maximale Portabilität: Teleskopierbarer Schaft ermöglicht Reduktion von 120 cm Spannweite auf 20 cm Packmaß.",
    "Carbon-Leichtbauweise: Hohe Stabilität bei ermüdungsfreiem Gewicht (nur 380g).",
    "Design: Individuelle 'IPSO' Bedruckung auf dem Schirmdach für hohe Wiedererkennung.",
    "Komfort-Bedienung: Touch-Sensor im Soft-Touch-Griff für intuitive, komfortable Steuerung.",
    "Schnellöffnung: Vollautomatisch per Knopfdruck schützt innerhalb einer Sekunde.",
    "LED-Statusanzeige: Integriert im Soft-Touch-Griff für Verbindung und Akku.",
    "Robustheit: IP67-zertifizierte, wasserdichte und stoßfeste Versiegelung der IoT-Elektronik."
  ],
  scope: [
    "1x IPSO Premium Smart-Regenschirm",
    "1x Premium Transporttasche mit RFID-Schutz",
    "1x USB-C Ladekabel (High Speed)",
    "1x Schnellstartanleitung (DE/EN)",
    "Zugangscode zur IPSO Connect App (iOS/Android)"
  ],
  warranty: {
    mechanics: "2 Jahre Herstellergarantie auf alle mechanischen Teile und das Gestell.",
    electronics: "1 Jahr Garantie auf elektronische Komponenten und den Akku.",
    support: "24/7 Kundenservice-Hotline für technische Unterstützung.",
    software: "Lebenslange kostenlose App-Updates und Firmware-Aktualisierungen."
  }
};

