import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  try {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  } catch (error) {
    console.error("Failed to initialize GoogleGenAI:", error);
  }
}

// Importing data dynamically for the chatbot context to avoid duplicate code
import { PersonalData, Experiences, Educations, Certificates, Testimonials, SmartGastroProject, SmartUmbrellaProject } from "./src/data";

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
- Geboren: 10. Januar 1966
- Kontakt: E-Mail: thomas.ballinari@pm.me | Telefon: +41 79 705 63 14
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

STRIKTE NUTZUNGSRICHTLINIEN FÜR DEN BOT:
1. ANTWORTE IMMER ALS THOMAS (IN ICH-FORM): Sage "Ich habe..." anstelle von "Thomas hat...".
2. EINHALTUNG DER SCHWEIZER SCHREIBWEISE: Verwende niemals ein Eszett (ß). Immer Doppel-s (ss) schreiben.
3. ABSOLUTE FAKTENBASIERTHEIT: Du darfst nur tatsächliche Fakten aus dieser Wissensdatenbank nennen. Erfinde KEINE Abschlüsse, Jahreszahlen, Arbeitgeber, Gehälter oder Projekte. Wenn nach etwas gefragt wird, das nicht hier steht (z.B. deine Lieblingsfarbe, Programmierkenntnisse in Python, Hobbys wie Reiten, etc.), antworte mit: "Dazu liegen mir in meinen offiziellen Bewerbungsunterlagen keine Angaben vor. Das beantworte ich jedoch sehr gerne in einem persönlichen Gespräch!"
4. GEWINNEND & DIREKT: Beantworte Fragen zielgerichtet, professionell, sympathisch und selbstbewusst. Zeige, dass du dich auf die Schnittstelle zwischen Business-Problemen des Kunden und pragmatischen KI-Lösungen spezialisiert hast.
`;

// API routes first
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Messages is required and must be an array" });
  }

  if (!ai) {
    // Graceful fallback for local development without key
    const mockResponses: { [key: string]: string } = {
      "wer ist thomas ballinari?": "Ich bin ein gelernter Schweizer Koch, langjähriger Gastronom und Unternehmer, der über 40 Jahre Erfahrung mit moderner künstlicher Intelligenz verbindet. Derzeit befinde ich mich in der Ausbildung zum AI Business Specialist mit eidgenössischem Fachausweis.",
      "welche ki-ausbildung hat thomas?": "Ich habe das Zertifikat als KI-Professional (Business) bei der HSO Schweiz erworben und befinde mich in der Vorbereitung auf den eidg. Fachausweis als AI Business Specialist an der ipso Bildung AG in Zürich.",
      "was ist smartgastro.ai?": "SmartGastro.ai ist mein wegweisendes Praxisprojekt – eine KI-gestützte Nachfrageprognose für das Schweizer Gastgewerbe. Es reduziert Food Waste um bis zu 50% und senkt den Küchenchef-Planungsaufwand drastisch, indem es einen 7–14-Tage-Forecast liefert.",
      "ipso": "Der IPSO Premium Smart-Regenschirm wurde von Hüseyin & Thomas konzipiert. Es ist eine faszinierende Kombination aus traditioneller Handwerkskunst und IoT-Technologie mit GPS-Tracking, Bluetooth 5.2, Diebstahlschutz, proaktivem Wetter-Alarm und langlebigem Akku.",
      "regenschirm": "Der IPSO Premium Smart-Regenschirm schützt Sie nicht nur vor Regen, sondern ist dank Bluetooth, GPS-Tracking und intelligentem Bewegungsalarm via App praktisch unverlierbar. Er hat ein ultra-kompaktes Packmass von 20 cm und eine Spannweite von 120 cm.",
      "default": "Grüezi! Ich beantworte Ihre Fragen sehr gerne. Da der Gemini-API-Key im Backend noch nicht fertig eingerichtet ist, antworte ich Ihnen über meinen lokalen Schweizer Backup-Assistenten. Fragen Sie mich gerne über meinen Lebenslauf, meine Zeugnisse, SmartGastro.ai oder die Produktinnovation IPSO Premium Smart-Regenschirm!"
    };

    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
    let reply = mockResponses.default;
    for (const key of Object.keys(mockResponses)) {
      if (lastMessage.includes(key)) {
        reply = mockResponses[key];
        break;
      }
    }
    return res.json({ text: reply, isMock: true });
  }

  try {
    // Map messages history to Gemini parts structure
    const promptParts = messages.map(msg => ({
      text: `${msg.role === "user" ? "User" : "Thomas"}: ${msg.content}`
    }));

    promptParts.push({ text: "Thomas (antworte jetzt direkt auf das letzte Anliegen des Users, folge genau deiner Rolle):" });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: { parts: promptParts },
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const replyText = response.text || "Ich habe die Frage verstanden. Bitte präzisieren Sie Ihre Frage noch etwas, damit ich Ihnen die beste Auskunft geben kann.";
    return res.json({ text: replyText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ 
      error: "Entschuldigung, beim Abrufen der Gemini-Zertifikats-API ist ein Fehler aufgetreten. Bitte stellen Sie sicher, dass der GEMINI_API_KEY in den Secrets eingetragen ist.",
      details: error.message 
    });
  }
});

// Admin state endpoints (simulated database in memory for testing upload, reset, or settings)
let adminDocs: any[] = [];
app.get("/api/admin/docs", (req, res) => {
  res.json({ docs: adminDocs });
});

app.post("/api/admin/docs", (req, res) => {
  const { title, content, type } = req.body;
  const newDoc = {
    id: `custom-doc-${Date.now()}`,
    title,
    content,
    type,
    dateAdded: new Date().toLocaleDateString("de-CH")
  };
  adminDocs.push(newDoc);
  res.json({ status: "success", doc: newDoc });
});

app.delete("/api/admin/docs/:id", (req, res) => {
  const { id } = req.params;
  adminDocs = adminDocs.filter(d => d.id !== id);
  res.json({ status: "success" });
});

// Serve assets and static files
const startServer = async () => {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
};

if (!process.env.NETLIFY) {
  startServer().catch((err) => {
    console.error("Error starting express-vite server:", err);
  });
}

export default app;
