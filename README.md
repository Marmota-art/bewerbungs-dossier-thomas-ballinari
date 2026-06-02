<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/41aa3245-1144-4cb4-b4aa-21d26f2e94a8

## Lokal starten (mit Chatbot)

**Voraussetzung:** Node.js

1. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
2. **Google AI Studio API-Key** einrichten:
   - Key erstellen: https://aistudio.google.com/apikey
   - Datei `.env.local` öffnen (oder von `.env.example` kopieren)
   - `GEMINI_API_KEY=your_api_key_here` durch Ihren echten Key ersetzen
3. App starten:
   ```bash
   npm run dev
   ```
4. Im Terminal sollte erscheinen: `Gemini Chatbot aktiv (Modell: gemini-2.5-flash)`
5. Im Browser: Tab **«Frag Thomas»** – der Chatbot antwortet dann über Gemini.

## Deployment: Cursor → GitHub → Netlify

Ausführliche Schritt-für-Schritt-Anleitung: **[DEPLOYMENT.md](./DEPLOYMENT.md)**

**Kurz:** In Cursor bearbeiten → auf `main` pushen → **Netlify** baut automatisch (Site ist bereits mit GitHub verbunden). GitHub Actions prüft nur den Build (`ci.yml`), deployt nicht selbst.

**Pflicht-Einstellungen:**

1. GitHub **Pages** auf *None* (alte Pages-Deployments stoppen).
2. Netlify **Environment variables:** `GEMINI_API_KEY` für den Live-Chatbot.
3. Lokal: `.env.local` mit demselben Key für `npm run dev`.
4. **Domain:** `www.thomoro.com` in Netlify verknüpfen (DNS beim Registrar) – siehe [DEPLOYMENT.md §5](./DEPLOYMENT.md#5-eigene-domain-wwwthomorocom-netlify).
5. **Kontaktformular:** Netlify **Form submission notifications** → E-Mail `thomas.ballinari@pm.me`, Form `contact` – **[NETLIFY-FORMS.md](./NETLIFY-FORMS.md)** (Schritt-für-Schritt).
