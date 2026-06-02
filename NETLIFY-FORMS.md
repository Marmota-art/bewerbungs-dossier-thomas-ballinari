# Netlify Forms → E-Mail `thomas.ballinari@pm.me`

Das Kontaktformular (Tab **Kontakt**) ist im Code als Formular **`contact`** registriert.  
Die **Weiterleitung per E-Mail** stellst du **einmalig im Netlify-Dashboard** ein (nicht im Git-Repo).

---

## Voraussetzung: Formular wird erkannt

Nach jedem Deploy parst Netlify `index.html` und `public/contact.html`.

1. Öffne https://app.netlify.com/ → Site **thomas-ballinari-ai-app**
2. Linkes Menü → **Forms**
3. Unter **Active forms** sollte **`contact`** erscheinen

**Falls `contact` fehlt:**

1. Live-Seite öffnen (z. B. https://www.thomoro.com oder `…netlify.app`)
2. Tab **Kontakt** → Testnachricht absenden (Name, E-Mail, Nachricht)
3. **Deploys** → letzten Deploy **Published**? Wenn nicht: warten oder **Trigger deploy**
4. **Forms**-Seite neu laden

---

## E-Mail-Benachrichtigung einrichten (Hauptschritt)

1. **Site configuration** (Zahnrad) → **Notifications**
2. Bereich **Form submission notifications** → **Add notification**
3. **Email notification** auswählen
4. Felder:

| Feld | Wert |
|------|------|
| **Event to listen for** | New form submission |
| **Email to notify** | `thomas.ballinari@pm.me` |
| **Form** | `contact` |
| **Custom email subject** *(optional)* | `Neue Kontaktanfrage – Bewerbung Thomas Ballinari` |

5. **Save** / **Create notification**

Ab jetzt erhältst du bei jeder Einsendung eine E-Mail von **formresponses@netlify.com** mit allen Feldern (Name, E-Mail, Firma, Nachricht).

---

## Proton Mail (`@pm.me`)

- Erste Mails oft im **Spam** – Absender freigeben oder «Kein Spam»
- Absender: `formresponses@netlify.com`

---

## Test

1. Seite → **Kontakt** → Nachricht senden → grüne Erfolgsmeldung in der App
2. Netlify → **Forms** → **contact** → neue Zeile in **Submissions**
3. Postfach `thomas.ballinari@pm.me` prüfen (1–2 Min., ggf. Spam)

---

## Optional: Slack / Webhook

Unter derselben **Form submission notifications**-Liste kannst du zusätzlich **Slack** oder **HTTP POST** hinzufügen – für E-Mail reicht ein Eintrag.

---

## Limits (Free Plan)

- ca. **100 Formular-Einsendungen pro Monat** inklusive
- Einsendungen auch im Dashboard unter **Forms → Submissions** einsehbar

---

## Technik im Repo (bereits erledigt)

- Verstecktes Formular in `index.html`
- Statische Kopie `public/contact.html`
- React-Submit per `POST` auf `/` (Formularname `contact`)
- Honeypot `bot-field` gegen Spam

Änderungen am Formularnamen erfordern dieselbe Benachrichtigung neu für den neuen Namen.
