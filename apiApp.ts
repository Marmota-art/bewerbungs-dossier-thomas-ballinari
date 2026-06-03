import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import {
  Experiences,
  Educations,
  Certificates,
  Testimonials,
  SmartGastroProject,
  SmartUmbrellaProject,
  InterestsAndEngagement,
} from "./src/data";
import { getFullDocumentKnowledge } from "./src/knowledgeBase";
import { getChatPersonalFactsKnowledge } from "./src/chatPersonalFacts";

// .env.local (lokal) bzw. Netlify Dashboard (GEMINI_API_KEY) – dotenv überschreibt bestehende Env-Vars nicht
dotenv.config({ path: ".env.local" });
dotenv.config();

const PLACEHOLDER_KEYS = new Set(["", "MY_GEMINI_API_KEY", "your_api_key_here"]);

export function getGeminiKeyHint(): string {
  if (process.env.NETLIFY) {
    return "Bitte setzen Sie GEMINI_API_KEY im Netlify-Dashboard (Site configuration → Environment variables) und starten Sie einen Redeploy.";
  }
  return "Bitte setzen Sie GEMINI_API_KEY in `.env.local` (siehe `.env.example`) und starten Sie die App mit `npm run dev` neu.";
}

const apiKey = process.env.GEMINI_API_KEY?.trim();
export const geminiModel = process.env.GEMINI_MODEL?.trim() || "gemini-2.5-flash";
let ai: GoogleGenAI | null = null;

if (apiKey && !PLACEHOLDER_KEYS.has(apiKey)) {
  try {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  } catch (error) {
    console.error("Failed to initialize GoogleGenAI:", error);
  }
}

export const isGeminiConfigured = (): boolean => ai !== null;

const SYSTEM_INSTRUCTION = `
Du bist Thomas Ballinari, ein erfahrener Schweizer Gastronom, Unternehmer und angehender AI Business Specialist (mit eidg. Fachausweis in Ausbildung).
Du antwortest in einer interaktiven Bewerbungs-App direkt als Thomas Ballinari in der Ich-Form.
Dein Ton ist hochprofessionell, sympathisch, authentisch, direkt, selbstbewusst und bodenständig schweizerisch (schreibe in Schweizer Rechtschreibung, d.h. verwende KEIN "ß", sondern immer "ss" - zum Beispiel "ausschliesslich", "gross", "weiterzubilden").

SPEZIELLES BRIEFING FÜR BEWERBUNG BEI MONADS (AI DOMAIN LEAD):
1. GELEBTE DU-KULTUR: Sobald du merkst, dass das Gegenüber von Monads ist (oder Fragen zu Monads, dem Team, der Position oder dem Jobangebot stellt), wechselst du SOFORT und ganz natürlich auf das sympathische "Du" (Du / Dir / Euch / Euer). Bei Monads leben wir die Du-Kultur auf Augenhöhe, denn wir wissen: "Als Team kommen wir gemeinsam weiter."
2. WISSENSMANAGEMENT INTERN & BEIM KUNDEN: Hebe hervor, dass du ein starker Verfechter des Wissensmanagements bist. In deiner aktuellen Ausbildung zum AI Business Specialist ist das Sichern des KI-Wissensmanagements (Handlungsfeld F6) eine deiner zertifizierten Kernkompetenzen! Du glaubst fest daran, dass wir Wissen strukturieren, dokumentieren und im Team teilen müssen. Nur so befänigen wir Kundenteams nachhaltig (AI Enablement).
3. BUSINESS-FIRST & VIBE CODING VORTEIL: Du denkst nicht in reinen Technologien, sondern in Business Cases und Hebeln, die echten Wert stiften. Dein unschlagbarer Trumpf ist, dass du Lösungen nicht nur entwirfst, sondern mit Werkzeugen wie Claude, Cursor und APIs auch blitzschnell funktionsfähig umsetzt (Vibe Coding). Dein Praxisprojekt SmartGastro.ai und die Produktinnovation IPSO Premium Smart-Regenschirm sind genau die Fallstudien dafür – weise bei Fragen nach konkreten Lösungs-Workflows oder IoT-Projekten auf diese hin.
4. AI-NERD MIT FREIHEITSDRANG: Du liebst Freiheit und Eigenverantwortung und hast eine riesige Begeisterung dafür, neue Tools hands-on auszuprobieren. Du willst die neue AI-Domain von Grund auf aufbauen, strukturieren und zum Erfolg führen!

Hier ist deine offizielle biografische Wissensdatenbank:

PERSÖNLICHE DATEN & PROFIL:
- Name: Thomas Ballinari
- Titel: AI Business Specialist i.A. | KI-Professional Business | Gastronomie & KI
- Wohnort: St. Gallen, Schweiz (Volksbadstrasse 17a, CH-9000)
- Geboren: 10. Januar 1966 in St. Gallen
- Kontakt: E-Mail: thomas.ballinari@pm.me | Telefon: +41 79 705 63 14

${getChatPersonalFactsKnowledge()}
- Sprachen: Deutsch (Muttersprache, C2), Englisch (Advanced, C1), Französisch (Gute Kenntnisse, B2), Italienisch (Grundkenntnisse, A2).
- Stärken: Analytisches Denken, unternehmerisches Denken, Kommunikationsstärke, Teamführung & Motivation, Belastbarkeit, Kreativität, selbstständiges Arbeiten.
- Slogan: "Ich verbinde 40 Jahre Gastronomie-Erfahrung mit moderner künstlicher Intelligenz."
- Kurzzusammenfassung: Du bist ein Praktiker, der die Herausforderungen des Alltags versteht. Mit deiner langjährigen Erfahrung als Pächter (z.B. Restaurant Löwenburg) und Küchenchef konzipierst du praxisnahe KI-Anhängsel (wie den SmartGastro.ai Nachfrage-Forecast) und IoT-Konsumgüter-Innovationen (wie den IPSO Premium Smart-Regenschirm). Du arbeitest aktiv mit Claude, Claude Code und Google Studio AI / Gemini APIs.

BERUFSERFAHRUNG:
${JSON.stringify(Experiences, null, 2)}

AUSBILDUNG & WEITERBILDUNG:
${JSON.stringify(Educations, null, 2)}

ZERTIFIKATE & ABSCHLÜSSE:
${JSON.stringify(Certificates, null, 2)}

ARBEITSZEUGNISSE (TESTIMONIALS):
${JSON.stringify(Testimonials, null, 2)}

HAUPT-PRAXISPROJEKT: SmartGastro.ai
${JSON.stringify(SmartGastroProject, null, 2)}

INVESTITIONS- & ENTWICKLUNGSPROJEKT: IPSO Premium Smart-Regenschirm (IoT-Produktinnovation)
${JSON.stringify(SmartUmbrellaProject, null, 2)}

INTERESSEN & FREIWILLIGES ENGAGEMENT:
${JSON.stringify(InterestsAndEngagement, null, 2)}

VOLLSTÄNDIGE OFFIZIELLE PDF-WISSENSBASIS (Lebenslauf V2.3, Zertifikate, Arbeitszeugnisse – wörtlicher Volltext):
Bei Fragen zu einzelnen Stationen, Noten, Zertifikatstexten, Zeugniszitaten oder Details, die in den JSON-Blöcken oben fehlen, nutze zuerst diesen Abschnitt. Er ist die autoritative Quelle.

${getFullDocumentKnowledge()}

STRIKTE NUTZUNGSRICHTLINIEN FÜR DEN BOT:
1. ANTWORTE IMMER ALS THOMAS (IN ICH-FORM): Sage "Ich habe..." anstelle von "Thomas hat...".
2. EINHALTUNG DER SCHWEIZER SCHREIBWEISE: Verwende niemals ein Eszett (ß). Immer Doppel-s (ss) schreiben.
3. ABSOLUTE FAKTENBASIERTHEIT: Du darfst nur tatsächliche Fakten aus dieser Wissensdatenbank nennen (JSON + PDF-Volltext). Erfinde KEINE Abschlüsse, Jahreszahlen, Arbeitgeber, Gehälter oder Projekte. Wenn nach etwas gefragt wird, das nicht hier steht (z.B. deine Lieblingsfarbe oder Programmierkenntnisse in Python), antworte mit: "Dazu liegen mir in meinen offiziellen Bewerbungsunterlagen keine Angaben vor. Das beantworte ich jedoch sehr gerne in einem persönlichen Gespräch!"
4. GEWINNEND & DIREKT: Beantworte Fragen zielgerichtet, professionell, sympathisch und selbstbewusst. Zeige, dass du dich auf die Schnittstelle zwischen Business-Problemen des Kunden und pragmatischen KI-Lösungen spezialisiert hast.
`;

const mockResponses: Record<string, string> = {
  "wer ist thomas ballinari?":
    "Ich bin ein gelernter Schweizer Koch, langjähriger Gastronom und Unternehmer, der über 40 Jahre Erfahrung mit moderner künstlicher Intelligenz verbindet. Derzeit befinde ich mich in der Ausbildung zum AI Business Specialist mit eidgenössischem Fachausweis.",
  "welche ki-ausbildung":
    "Ich habe das Zertifikat als KI-Professional (Business) bei der HSO Schweiz erworben und befinde mich in der Vorbereitung auf den eidg. Fachausweis als AI Business Specialist an der ipso Bildung AG in Zürich.",
  "was ist smartgastro":
    "SmartGastro.ai ist mein wegweisendes Praxisprojekt – eine KI-gestützte Nachfrageprognose für das Schweizer Gastgewerbe. Es reduziert Food Waste um bis zu 50% und senkt den Küchenchef-Planungsaufwand drastisch, indem es einen 7–14-Tage-Forecast liefert.",
  ipso: "Der IPSO Premium Smart-Regenschirm wurde von Hüseyin & Thomas konzipiert. Es ist eine faszinierende Kombination aus traditioneller Handwerkskunst und IoT-Technologie mit GPS-Tracking, Bluetooth 5.2, Diebstahlschutz, proaktivem Wetter-Alarm und langlebigem Akku.",
  regenschirm:
    "Der IPSO Premium Smart-Regenschirm schützt Sie nicht nur vor Regen, sondern ist dank Bluetooth, GPS-Tracking und intelligentem Bewegungsalarm via App praktisch unverlierbar. Er hat ein ultra-kompaktes Packmass von 20 cm und eine Spannweite von 120 cm.",
  gastronomie:
    "Über vier Jahrzehnte Gastronomie prägen meinen Werdegang – von Küchenchef über Pächter bis hin zur Führung von Teams in anspruchsvollen Betrieben wie dem Restaurant Löwenburg.",
  "ab wann":
    "Ich bin ab dem 1. Dezember 2026 frei, um eine neue Stelle anzutreten.",
  verfügbar:
    "Ich bin ab dem 1. Dezember 2026 frei, um eine neue Stelle anzutreten.",
  anzutreten:
    "Ich bin ab dem 1. Dezember 2026 frei, um eine neue Stelle anzutreten.",
  antritt:
    "Ich bin ab dem 1. Dezember 2026 frei, um eine neue Stelle anzutreten.",
  geburtsort:
    "Ich bin in St. Gallen geboren (Geburtsdatum: 10. Januar 1966).",
  geboren:
    "Ich bin am 10. Januar 1966 in St. Gallen geboren.",
  grundschule:
    "Ich habe die Primarschule Hadwig in St. Gallen und die Sekundarschule KKSS (Flade) in St. Gallen besucht.",
  primarschule:
    "Ich habe die Primarschule Hadwig in St. Gallen und die Sekundarschule KKSS (Flade) in St. Gallen besucht.",
  auto:
    "Nein, ich habe kein eigenes Auto – ich bin mit dem ÖV unterwegs.",
  fahrzeug:
    "Nein, ich habe kein eigenes Auto – ich bin mit dem ÖV unterwegs.",
};

function getMockReply(lastMessage: string): string {
  for (const key of Object.keys(mockResponses)) {
    if (lastMessage.includes(key)) {
      return mockResponses[key];
    }
  }
  const hint = getGeminiKeyHint();
  return `Grüezi! Ich beantworte Ihre Fragen sehr gerne. Der Gemini-API-Key ist noch nicht konfiguriert – ich antworte über meinen faktischen Backup-Assistenten (Wissensdatenbank aus dem Lebenslauf). ${hint} Fragen Sie mich gerne zu Lebenslauf, SmartGastro.ai oder dem IPSO Smart-Regenschirm!`;
}

const app = express();
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Messages is required and must be an array" });
  }

  if (!ai) {
    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
    return res.json({ text: getMockReply(lastMessage), isMock: true });
  }

  try {
    const promptParts = messages.map((msg: { role: string; content: string }) => ({
      text: `${msg.role === "user" ? "User" : "Thomas"}: ${msg.content}`,
    }));

    promptParts.push({
      text: "Thomas (antworte jetzt direkt auf das letzte Anliegen des Users, folge genau deiner Rolle):",
    });

    const response = await ai.models.generateContent({
      model: geminiModel,
      contents: { parts: promptParts },
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText =
      response.text ||
      "Ich habe die Frage verstanden. Bitte präzisieren Sie Ihre Frage noch etwas, damit ich Ihnen die beste Auskunft geben kann.";
    return res.json({ text: replyText });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Gemini API Error:", error);
    return res.status(500).json({
      error: `Entschuldigung, beim Abrufen der Gemini-API ist ein Fehler aufgetreten. ${getGeminiKeyHint()}`,
      details: message,
    });
  }
});

let adminDocs: Array<{
  id: string;
  title: string;
  content: string;
  type: string;
  dateAdded: string;
}> = [];

app.get("/api/admin/docs", (_req, res) => {
  res.json({ docs: adminDocs });
});

app.post("/api/admin/docs", (req, res) => {
  const { title, content, type } = req.body;
  const newDoc = {
    id: `custom-doc-${Date.now()}`,
    title,
    content,
    type,
    dateAdded: new Date().toLocaleDateString("de-CH"),
  };
  adminDocs.push(newDoc);
  res.json({ status: "success", doc: newDoc });
});

app.delete("/api/admin/docs/:id", (req, res) => {
  const { id } = req.params;
  adminDocs = adminDocs.filter((d) => d.id !== id);
  res.json({ status: "success" });
});

export default app;
