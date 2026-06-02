# Cursor → GitHub → Netlify – Einrichtung

Diese Anleitung verbindet **Cursor** (lokal entwickeln), **GitHub** (Code-Quelle) und **Netlify** (Live-Website + Chatbot-API) ohne doppelte Deployments.

```
Cursor (bearbeiten) → git push → GitHub (main) → Netlify (automatischer Build & Go-Live)
```

Live-URL (Beispiel): https://thomas-ballinari-ai-app.netlify.app

---

## 1. GitHub – GitHub Pages abschalten

Die fehlgeschlagenen Deployments unter **Deployments → github-pages** kommen vom alten Pages-Workflow.

| Schritt | Wo | Einstellung |
|--------|-----|-------------|
| Pages deaktivieren | GitHub → Repo → **Settings** → **Pages** | **Source:** *None* (keine Website aus Pages) |
| Alten Workflow entfernen | Nach Push: nur noch `ci.yml` unter **Actions** (Build-Check), kein «Deploy to GitHub Pages» mehr |

---

## 2. Netlify – bereits verbunden (prüfen)

Im Screenshot ist die Site **thomas-ballinari-ai-app** mit  
`github.com/Marmota-art/bewerbungs-dossier-thomas-ballinari` verknüpft – das ist richtig.

### Build-Einstellungen (Project configuration → Build & deploy → Build settings)

| Feld | Wert |
|------|------|
| Branch to deploy | `main` |
| Base directory | *(leer oder `/`)* |
| Build command | `npm run build` *(oder leer – wird aus `netlify.toml` gelesen)* |
| Publish directory | `dist` *(oder leer – aus `netlify.toml`)* |

**Wichtig:** Nur **eine** Deploy-Quelle nutzen:

- ✅ Netlify baut bei Push auf `main` (empfohlen, bereits aktiv)
- ❌ Kein zweites Deploy über GitHub Actions mit `NETLIFY_AUTH_TOKEN` (würde doppelt bauen)

### Umgebungsvariablen (für den Chatbot)

**Project configuration → Environment variables → Add a variable**

| Variable | Scope | Wert |
|----------|--------|------|
| `GEMINI_API_KEY` | All scopes (oder Production) | Ihr Key von https://aistudio.google.com/apikey |
| `NETLIFY` | *(optional, in netlify.toml schon gesetzt)* | `true` |

Nach dem Speichern: **Deploys → Trigger deploy → Deploy site** (einmal neu bauen).

### Build hooks / Deploy-Kontext

Unter **Build & deploy → Continuous deployment** sollte stehen: *«Deploys from GitHub»*.  
Keinen zusätzlichen «Deploy from GitHub Actions»-Workflow parallel aktivieren.

---

## 3. Cursor – lokal arbeiten & hochladen

### Einmalig: Repo klonen / Remote prüfen

```bash
git remote -v
# Sollte zeigen: origin → https://github.com/Marmota-art/bewerbungs-dossier-thomas-ballinari.git
```

Falls noch kein Git-Repo lokal:

```bash
git init
git remote add origin https://github.com/Marmota-art/bewerbungs-dossier-thomas-ballinari.git
git branch -M main
```

### API-Key nur lokal (nicht committen)

Datei **`.env.local`** im Projektroot:

```
GEMINI_API_KEY=Ihr_echter_Key_hier
```

Lokal testen:

```bash
npm install
npm run dev
```

→ http://localhost:3000 → Tab **«Frag Thomas»**

### Typischer Arbeitsablauf in Cursor

1. Dateien bearbeiten (z. B. `src/App.tsx`, `src/data.ts`)
2. Source Control (Git-Icon) → Commit-Message → **Commit**
3. **Sync / Push** auf Branch `main`
4. Netlify startet automatisch einen Build (1–3 Min.)
5. Fortschritt: Netlify → **Deploys** oder GitHub → **Actions** (nur CI-Build-Check)

---

## 4. GitHub Actions – nur Qualitäts-Check

Workflow: `.github/workflows/ci.yml`

- Führt `npm run build` aus
- **Deployt nicht** (das macht Netlify)
- Grüner Haken = Code baut auch in der Cloud

Keine Secrets `NETLIFY_AUTH_TOKEN` / `NETLIFY_SITE_ID` nötig, solange Netlify direkt mit GitHub verbunden ist.

---

## 5. Checkliste «läuft alles?»

- [ ] GitHub Pages: **None**
- [ ] Netlify: Repo `Marmota-art/bewerbungs-dossier-thomas-ballinari`, Branch `main`
- [ ] Netlify: `GEMINI_API_KEY` gesetzt + Redeploy
- [ ] `.env.local` lokal mit gleichem Key (nur für `npm run dev`)
- [ ] Push von Cursor → Netlify-Deploy **Published** (grün)
- [ ] Live: Chatbot antwortet (nicht nur «Backup Assistent»)

---

## 6. Häufige Probleme

| Symptom | Lösung |
|---------|--------|
| Chatbot nur Mock-Antworten live | `GEMINI_API_KEY` in Netlify setzen, neu deployen |
| Doppelte / widersprüchliche Deploys | Nur Netlify-Git-Deploy; kein `deploy.yml` mit Netlify-CLI |
| GitHub Pages weiter rot | Pages auf *None*; neuen Code pushen (ohne Pages-Workflow) |
| Änderungen nicht online | Push wirklich auf `main`? Netlify-Deploy-Log prüfen |
| API 404 auf Netlify | `netlify.toml` Redirects `/api/*` → Functions (im Repo enthalten) |

---

## Kurzüberblick der Rollen

| Tool | Rolle |
|------|--------|
| **Cursor** | Code schreiben, lokal testen (`npm run dev`) |
| **GitHub** | Versionierung, `main` als Quelle der Wahrheit |
| **Netlify** | Hosting, HTTPS, Serverless `/api/chat`, Formulare |
| **Google AI Studio** | API-Key für Gemini (lokal + Netlify Env) |
