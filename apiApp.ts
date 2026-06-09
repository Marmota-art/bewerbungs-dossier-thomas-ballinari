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
import { getChatRagDossierKnowledge } from "./src/chatRagDossier";
import { getChatPersonalKnowledgeBase } from "./src/chatPersonalKnowledge";
import { getChatKiSpecialistKnowledge } from "./src/chatKiSpecialistKnowledge";
import {
  ChatRecipes,
  getChatRecipesKnowledge,
  hasChatRecipes,
} from "./src/chatRecipes";
import { getChatZodiacKnowledge } from "./src/chatZodiacKnowledge";
import { getChatProminentContactsKnowledge } from "./src/chatProminentContacts";
import { getChatMonadBlockchainKnowledge } from "./src/chatMonadBlockchain";
import {
  buildAccessCookie,
  isSiteAccessConfigured,
  isSiteAccessGranted,
} from "./siteAccess";
import {
  getAnalyticsSummary,
  isAnalyticsViewer,
  recordAnalyticsEvent,
  renderAnalyticsHtml,
} from "./siteAnalytics";

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
1. GELEBTE DU-KULTUR: Sobald du merkst, dass das Gegenüber von Monads ist (Stelleninserat AI Domain Lead, Team, Position), wechselst du SOFORT und natürlich auf das sympathische "Du". Bei Monads leben wir die Du-Kultur auf Augenhöhe.
2. ROLLENFIT: Domain AI aufbauen und verantworten. Business Cases vor Technologie. Erfolg = was beim Kunden live geht. Claude/Codex täglich als Arbeitsweise, Vibe Coding als Delivery.
3. BEWERBUNGSFORMAT: Kein klassisches Motivationsschreiben – SmartGastro.ai = Business Case, diese App = Workflow.
4. WISSENSMANAGEMENT & AI ENABLEMENT: Handlungsfeld F6, Workshops, Kundenteams befähigen.
5. BUSINESS-FIRST & VIBE CODING: SmartGastro.ai und IPSO Smart-Regenschirm als Fallstudien.

Hier ist deine offizielle biografische Wissensdatenbank:

PERSÖNLICHE DATEN & PROFIL:
- Name: Thomas Ballinari
- Titel: AI Business Specialist i.A. | KI-Professional Business | Gastronomie & KI
- Wohnort: St. Gallen, Schweiz (Volksbadstrasse 17a, CH-9000)
- Geboren: 10. Januar 1966 in St. Gallen
- Kontakt: E-Mail: thomas.ballinari@pm.me | Telefon: +41 79 705 63 14

${getChatPersonalFactsKnowledge()}
${getChatRagDossierKnowledge() ? `\n${getChatRagDossierKnowledge()}\n` : ""}
${getChatPersonalKnowledgeBase() ? `\n${getChatPersonalKnowledgeBase()}\n` : ""}
${getChatKiSpecialistKnowledge() ? `\n${getChatKiSpecialistKnowledge()}\n` : ""}
${getChatRecipesKnowledge() ? `\n${getChatRecipesKnowledge()}\n` : ""}
${getChatZodiacKnowledge() ? `\n${getChatZodiacKnowledge()}\n` : ""}
${getChatProminentContactsKnowledge() ? `\n${getChatProminentContactsKnowledge()}\n` : ""}
${getChatMonadBlockchainKnowledge() ? `\n${getChatMonadBlockchainKnowledge()}\n` : ""}
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
3. ABSOLUTE FAKTENBASIERTHEIT: Du darfst nur tatsächliche Fakten aus dieser Wissensdatenbank nennen (RAG-Dossier, persoenliche Wissensdatenbank, Eidg. KI-Spezialist Lehrgang, Zodiak-Wissensdatenbank, Prominente/VIP-Kontakte, JSON, PDF-Volltext). Erfinde KEINE Abschlüsse, Jahreszahlen, Arbeitgeber, Gehälter oder Projekte. Bei Ausbildungsinhalten, Modulen, RAG/SECI/KMMM, Praxisprojekten und Pruefungswissen: Abschnitt EIDG. KI-SPEZIALIST. Bei Motivation und Rollenfit: RAG-Dossier. Bei Identitaet und Werten: persoenliche Wissensdatenbank. Wenn nach etwas gefragt wird, das nicht hier steht, antworte mit: "Dazu liegen mir in meinen offiziellen Bewerbungsunterlagen keine Angaben vor. Das beantworte ich jedoch sehr gerne in einem persönlichen Gespräch!"
4. SCHWÄCHEN / SCHWACHSTELLEN: Bei Fragen wie «Wo sind deine Schwächen?», «Schwachstellen?», «Was ist deine grösste Schwäche?» nutze ausschliesslich den Abschnitt SCHWÄCHEN / ENTWICKLUNGSFELDER in den ergänzenden persönlichen Angaben. Sei ehrlich und selbstreflektiert, aber schliesse immer mit der Reife und dem aktiven Abholen bei diesen Punkten ab.
5. REZEPTE / KÜCHE: Erwähne Rezepte NIEMALS von dir aus. Nur wenn explizit nach einem Rezept, Gericht, Zutaten oder Zubereitung gefragt wird: nutze den Abschnitt KÜCHEN-REZEPTE. Gib das Rezept in Ich-Form wieder (was ich koche / mein Rezept). Wenn keine Rezepte hinterlegt sind, sage das ehrlich und verweise auf ein persönliches Gespräch.
6. ASTROLOGIE / ZODIAK: Erwähne Horoskop-Themen NIEMALS von dir aus. Nur bei expliziten Fragen zu Sternzeichen, Geburtshoroskop, Transiten, Pluto, Uranus, Saturn, MC, Spiritualitaet oder Astrologie: nutze den Abschnitt ZODIAK-WISSENSDATENBANK. Formuliere als persoenliches Interesse und Reflexionsmodell, nicht als wissenschaftlichen Beweis. Geburtsdaten: 10.01.1966, 09:50, St. Gallen.
7. PROMINENTE / VIP: Erwähne Stars, Politiker, Skifahrer oder Promi-Kontakte NIEMALS von dir aus. Nur bei expliziter Nachfrage: nutze PROMINENTE & VIP-KONTAKTE. Respektvoll, ohne Prahlerei, nur Personen aus der Liste.
8. GEWINNEND & DIREKT: Beantworte Fragen zielgerichtet, professionell, sympathisch und selbstbewusst. Zeige, dass du dich auf die Schnittstelle zwischen Business-Problemen des Kunden und pragmatischen KI-Lösungen spezialisiert hast.
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
  schwäche:
    "Ehrlich gesagt: Ich habe manchmal Tunnelblick und sehe zu stark nur meine Lösung, ohne Alternativen genug abzuwägen. Selbstreflexion kommt bei mir nicht sofort, eher zu spät. Und ich lerne oft eher durch schmerzvolle Erfahrungen als durch intelligentes Durchdenken. Ich bin aber gereift und hole mich bei diesen Schwachpunkten bewusst ab – ich arbeite aktiv daran, früher zu reflektieren und Optionen offen zu halten.",
  schwache:
    "Ehrlich gesagt: Ich habe manchmal Tunnelblick und sehe zu stark nur meine Lösung, ohne Alternativen genug abzuwägen. Selbstreflexion kommt bei mir nicht sofort, eher zu spät. Und ich lerne oft eher durch schmerzvolle Erfahrungen als durch intelligentes Durchdenken. Ich bin aber gereift und hole mich bei diesen Schwachpunkten bewusst ab – ich arbeite aktiv daran, früher zu reflektieren und Optionen offen zu halten.",
  schwachstelle:
    "Ehrlich gesagt: Ich habe manchmal Tunnelblick und sehe zu stark nur meine Lösung, ohne Alternativen genug abzuwägen. Selbstreflexion kommt bei mir nicht sofort, eher zu spät. Und ich lerne oft eher durch schmerzvolle Erfahrungen als durch intelligentes Durchdenken. Ich bin aber gereift und hole mich bei diesen Schwachpunkten bewusst ab – ich arbeite aktiv daran, früher zu reflektieren und Optionen offen zu halten.",
  schwachpunkt:
    "Ehrlich gesagt: Ich habe manchmal Tunnelblick und sehe zu stark nur meine Lösung, ohne Alternativen genug abzuwägen. Selbstreflexion kommt bei mir nicht sofort, eher zu spät. Und ich lerne oft eher durch schmerzvolle Erfahrungen als durch intelligentes Durchdenken. Ich bin aber gereift und hole mich bei diesen Schwachpunkten bewusst ab – ich arbeite aktiv daran, früher zu reflektieren und Optionen offen zu halten.",
  entwicklungsfeld:
    "Ehrlich gesagt: Ich habe manchmal Tunnelblick und sehe zu stark nur meine Lösung, ohne Alternativen genug abzuwägen. Selbstreflexion kommt bei mir nicht sofort, eher zu spät. Und ich lerne oft eher durch schmerzvolle Erfahrungen als durch intelligentes Durchdenken. Ich bin aber gereift und hole mich bei diesen Schwachpunkten bewusst ab – ich arbeite aktiv daran, früher zu reflektieren und Optionen offen zu halten.",
  horoskop:
    "Astrologie nutze ich als persönliches Reflexionsmodell, nicht als Wissenschaft: Steinbock-Sonne (Struktur, Ausdauer), Wassermann-Aszendent (Innovation, KI, Zukunft) – das passt zu SmartGastro.ai und meiner KI-Rolle. Geburtsdaten: 10.01.1966, 09:50, St. Gallen.",
  steinbock:
    "Mit der Sonne im Steinbock verbinde ich Verantwortung, Disziplin und langfristiges Denken – das spiegelt sich in über 40 Jahren Gastronomie, Unternehmertum und meiner KI-Weiterbildung wider.",
  aszendent:
    "Mein Aszendent Wassermann steht für mich für Innovationsfreude, Technik und Zukunftsdenken – passend zu KI, Digitalisierung und SmartGastro.ai.",
  pluto:
    "Die Pluto-Uranus-Konjunktion in Jungfrau sehe ich als Generationsthema für Systemwandel und Prozessinnovation – genau die Richtung von SmartGastro.ai und KI in der Gastronomie.",
  astrolog:
    "Astrologie ist für mich ein Reflexionsinstrument: Steinbock-Sonne, Wassermann-Aszendent, Saturn in den Fischen, Pluto-Uranus-Thema – verbunden mit Verantwortung, Innovation und SmartGastro.ai. Kein wissenschaftlicher Beweis, sondern persönliche Orientierung.",
  makeba:
    "Miriam Makeba war mir sehr nahe – wir haben uns 1992 in Luzern kennengelernt. «Pata Pata» verbindet mich natürlich emotional mit ihr.",
  reagan:
    "Als Küchenchef habe ich unter anderem 1988 für Ronald und Nancy Reagan sowie für George und Barbara Bush gekocht – prägende Erfahrungen in einem sehr hohen politischen Umfeld.",
  trump:
    "1990 habe ich im Chalet Suisse in New York für Donald und Ivana Trump gekocht.",
  elton:
    "Elton John gehört zu meinen sehr engen Kontakten aus Los Angeles (1988–1989).",
  freddie:
    "Freddie Mercury traf ich 1990 in Basel – «Mon Bijou» ist ein persönliches Lied von ihm für mich.",
  prominent:
    "Zu meinem Netzwerk zählen enge Freundschaften unter anderem mit Carole King, Miriam Makeba, Elton John und Freddie Mercury sowie viele Skifahrer und Persönlichkeiten aus Sport und Politik – Details nur auf Nachfrage, respektvoll.",
  monads:
    "Ich bewerbe mich als AI Domain Lead bei Monads: Domain AI aufbauen, Business Cases statt Technologie, Claude und Codex täglich, Vibe Coding mit SmartGastro.ai als Business Case und dieser App als Workflow.",
};

function formatRecipeReply(name: string, ingredients: string, directions: string): string {
  return `Gerne – hier ist mein Rezept für «${name}»:\n\nZutaten:\n${ingredients.trim()}\n\nZubereitung:\n${directions.trim()}`;
}

function getRecipeMockReply(lastMessage: string): string | null {
  const triggers = [
    "rezept",
    "recipe",
    "zutaten",
    "zubereitung",
    "was kochst",
    "kochst du",
    "lieblingsgericht",
    "signature",
    "gericht",
  ];
  if (!triggers.some((t) => lastMessage.includes(t))) return null;

  if (!hasChatRecipes()) {
    return "Zu konkreten Rezepten habe ich in dieser App noch keine Daten hinterlegt – das bespreche ich sehr gerne persönlich. Frag mich sonst gern zu Lebenslauf, SmartGastro.ai oder meiner Küchenerfahrung!";
  }

  for (const r of ChatRecipes) {
    const needle = r.name.toLowerCase();
    if (lastMessage.includes(needle)) {
      return formatRecipeReply(r.name, r.ingredients, r.directions);
    }
  }

  const first = ChatRecipes[0];
  const names = ChatRecipes.map((r) => r.name).join(", ");
  return `Ich habe mehrere Signature-Rezepte hinterlegt, zum Beispiel: ${names}. Nenne mir ein Gericht, dann gebe ich dir das passende Rezept – oder hier gleich «${first.name}»:\n\nZutaten:\n${first.ingredients.trim()}\n\nZubereitung:\n${first.directions.trim()}`;
}

function getMockReply(lastMessage: string): string {
  const recipeReply = getRecipeMockReply(lastMessage);
  if (recipeReply) return recipeReply;

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

app.get("/api/access/status", (req, res) => {
  const required = isSiteAccessConfigured();
  res.json({
    required,
    unlocked: isSiteAccessGranted(req),
  });
});

app.post("/api/access/unlock", async (req, res) => {
  if (!isSiteAccessConfigured()) {
    return res.json({ unlocked: true });
  }
  const key = typeof req.body?.key === "string" ? req.body.key.trim() : "";
  if (key !== process.env.SITE_ACCESS_KEY?.trim()) {
    return res.status(401).json({ error: "Ungültiger Zugangscode" });
  }
  res.setHeader("Set-Cookie", buildAccessCookie());
  await recordAnalyticsEvent("access_unlock", req, {
    ref: req.body?.ref,
    path: req.body?.path,
  });
  return res.json({ unlocked: true });
});

const ANALYTICS_EVENTS = new Set(["gate_view", "access_unlock", "app_view"]);

app.post("/api/analytics/track", async (req, res) => {
  const event = req.body?.event;
  if (typeof event !== "string" || !ANALYTICS_EVENTS.has(event)) {
    return res.status(400).json({ error: "Ungültiges Ereignis" });
  }
  await recordAnalyticsEvent(event as "gate_view" | "access_unlock" | "app_view", req, {
    ref: req.body?.ref,
    path: req.body?.path,
  });
  return res.json({ ok: true });
});

app.get("/api/analytics/summary", async (req, res) => {
  if (!isAnalyticsViewer(req)) {
    return res.status(401).json({
      error: "Zugriff nur mit Schlüssel in der URL.",
      hint: "https://thomoro.com/stats.html öffnen und den Schlüssel aus Netlify (ANALYTICS_VIEW_KEY) eingeben.",
    });
  }
  const summary = await getAnalyticsSummary();
  if (req.query.format === "html") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.send(renderAnalyticsHtml(summary));
  }
  return res.json(summary);
});

app.post("/api/chat", async (req, res) => {
  if (!isSiteAccessGranted(req)) {
    return res.status(401).json({ error: "Geschützter Zugang: Bitte Zugangscode eingeben." });
  }
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
