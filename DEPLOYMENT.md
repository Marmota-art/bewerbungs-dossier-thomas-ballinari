# Cursor → GitHub → Netlify – Einrichtung

Diese Anleitung verbindet **Cursor** (lokal entwickeln), **GitHub** (Code-Quelle) und **Netlify** (Live-Website + Chatbot-API) ohne doppelte Deployments.

```
Cursor (bearbeiten) → git push → GitHub (main) → Netlify (automatischer Build & Go-Live)
```

Live-URL (Beispiel): https://thomas-ballinari-ai-app.netlify.app  
Ziel-Domain: **https://www.thomoro.com**

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

## 5. Eigene Domain `www.thomoro.com` (Netlify)

Die Domain wird im **Netlify-Dashboard** verknüpft; DNS liegt beim Domain-Registrar (z. B. Hostpoint, Infomaniak, Cloudflare).

### Schritt A – Domain in Netlify hinzufügen

1. [Netlify](https://app.netlify.com/) → Site **thomas-ballinari-ai-app**
2. **Domain management** → **Add a domain** → `thomoro.com` eingeben
3. Netlify schlägt meist vor: `www.thomoro.com` + `thomoro.com` (Apex) hinzufügen
4. **Primary domain** auf **`www.thomoro.com`** setzen (HTTPS-Zertifikat wird automatisch ausgestellt)

### Schritt B – DNS beim Registrar

Netlify zeigt unter **Domain management → DNS** die exakten Werte. Typisch:

| Typ | Host / Name | Ziel / Wert |
|-----|-------------|-------------|
| **CNAME** | `www` | `thomas-ballinari-ai-app.netlify.app` *(oder den von Netlify angezeigten Load-Balancer-Namen)* |
| **A** oder **ALIAS** | `@` (Apex) | Netlify-IP(s) aus dem Dashboard *(oder Netlify DNS für die ganze Zone nutzen)* |

DNS-Propagierung kann **15 Min. bis 48 Std.** dauern. Status in Netlify: **Pending** → **Verified**.

### Schritt C – Redirects (im Repo)

In `netlify.toml` leitet `thomoro.com` bereits auf `https://www.thomoro.com` um. Nach dem nächsten Deploy aktiv.

### Schritt D – Test

- https://www.thomoro.com lädt die App
- https://thomoro.com leitet auf `www` um
- Schloss-Symbol / gültiges TLS-Zertifikat

---

## 6. Kontaktformular → E-Mail an `thomas.ballinari@pm.me`

Das Formular heisst im Code **`contact`**. Netlify speichert Einsendungen und kann bei jeder neuen Submission eine E-Mail schicken.

**Die Empfänger-Adresse lässt sich nicht in `netlify.toml` setzen** – nur im Netlify-Dashboard (oder per Netlify API).

### Einmalig im Netlify-Dashboard

1. Site → **Forms** (nach dem ersten Deploy mit Formular sollte **`contact`** sichtbar sein)
2. Falls leer: einmal Test-Nachricht über https://www.thomoro.com (Tab **Kontakt**) senden, dann neu laden
3. **Site configuration** → **Notifications** → **Form submission notifications** → **Add notification**
4. **Email notification** wählen:
   - **Event:** New form submission
   - **Email to notify:** `thomas.ballinari@pm.me`
   - **Form:** `contact` *(nicht «Any form», falls mehrere existieren)*
   - **Custom subject** (optional): z. B. `Neue Kontaktanfrage – thomoro.com`
5. **Save**

E-Mails kommen von **formresponses@netlify.com** (Absender von Netlify, nicht von deiner Domain). Inhalt: alle Formularfelder (Name, E-Mail, Firma, Nachricht).

### Im Repo (bereits eingerichtet)

- Verstecktes Formular in `index.html` + `public/contact.html` (SPA-Erkennung beim Build)
- React-Formular im Tab **Kontakt** sendet per `POST` an `/`
- Honeypot `bot-field` gegen Spam

### Test

1. Live-Seite → **Kontakt** → Testnachricht absenden → Erfolgsmeldung in der App
2. Netlify → **Forms** → Submission sichtbar
3. Postfach `thomas.ballinari@pm.me` (auch Spam-Ordner prüfen)

**Hinweis Proton Mail (`@pm.me`):** Netlify-Mails manchmal im Spam; Absender `formresponses@netlify.com` als vertrauenswürdig markieren.

---

## 7. Checkliste «läuft alles?»

- [ ] GitHub Pages: **None**
- [ ] Netlify: Repo `Marmota-art/bewerbungs-dossier-thomas-ballinari`, Branch `main`
- [ ] Netlify: `GEMINI_API_KEY` gesetzt + Redeploy
- [ ] `.env.local` lokal mit gleichem Key (nur für `npm run dev`)
- [ ] Push von Cursor → Netlify-Deploy **Published** (grün)
- [ ] Live: Chatbot antwortet (nicht nur «Backup Assistent»)
- [ ] Domain `www.thomoro.com` in Netlify **Verified**, Primary Domain gesetzt
- [ ] Form-Benachrichtigung an `thomas.ballinari@pm.me` aktiv

---

## 8. Häufige Probleme

| Symptom | Lösung |
|---------|--------|
| Chatbot nur Mock-Antworten live | `GEMINI_API_KEY` in Netlify setzen, neu deployen |
| Doppelte / widersprüchliche Deploys | Nur Netlify-Git-Deploy; kein `deploy.yml` mit Netlify-CLI |
| GitHub Pages weiter rot | Pages auf *None*; neuen Code pushen (ohne Pages-Workflow) |
| Änderungen nicht online | Push wirklich auf `main`? Netlify-Deploy-Log prüfen |
| API 404 / 502 auf Netlify | `netlify.toml` Redirects `/api/*` → Functions; API-Code in `apiApp.ts` (ohne Vite-Import) |
| Chat zeigt nur «Verbindungsstörung» | Meist 502 durch kaputte Function – nach Fix pushen; danach `GEMINI_API_KEY` in Netlify prüfen |
| Domain zeigt alte Seite / nicht erreichbar | DNS beim Registrar prüfen; in Netlify **Verify DNS**; ggf. 24–48 h warten |
| Keine Formular-E-Mail | Notification unter **Form submission notifications** anlegen; Spam prüfen; Form-Name `contact` |
| Formular «erfolgreich», nichts in Netlify | Neu deployen (`public/contact.html` muss im Build sein); Forms im Dashboard prüfen |

---

## Kurzüberblick der Rollen

| Tool | Rolle |
|------|--------|
| **Cursor** | Code schreiben, lokal testen (`npm run dev`) |
| **GitHub** | Versionierung, `main` als Quelle der Wahrheit |
| **Netlify** | Hosting, HTTPS, Serverless `/api/chat`, Formulare |
| **Google AI Studio** | API-Key für Gemini (lokal + Netlify Env) |
