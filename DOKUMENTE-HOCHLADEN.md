# Originale hochladen – Zertifikate & Arbeitszeugnisse

So bringst du die **Original-PDFs oder Scans** in die App (abrufbar unter **Zertifikate** / **Lebenslauf → Zeugnisse**).

---

## Option A – Dateien in Cursor ablegen (empfohlen)

1. Scans/PDFs auf dem PC bereitlegen (ein Dokument = eine Datei).
2. Im Explorer links in Cursor öffnen:
   ```
   public/documents/certificates/   ← Zertifikate
   public/documents/zeugnisse/      ← Arbeitszeugnisse
   ```
3. Dateien **per Drag & Drop** in den passenden Ordner ziehen.
4. Im Chat schreiben, z. B.:  
   *«Ich habe die PDFs in public/documents/ gelegt – bitte verknüpfen.»*

Wir tragen dann in `src/data.ts` die Pfade ein, z. B.:

```ts
documentUrl: "/documents/certificates/ki-professional.pdf"
```

5. Commit + Push → Netlify deployt → Originale sind live unter `https://www.thomoro.com/documents/...`

---

## Option B – Dateien direkt im Chat anhängen

1. PDF oder Bild in **diesen Chat ziehen** (Drag & Drop) oder über 📎 anhängen.
2. Kurz sagen, **welches Dokument** es ist (z. B. «HSO KI-Zertifikat» oder «Zeugnis Hotel Alpenrose 2019»).
3. Wir speichern die Datei im richtigen Ordner und verknüpfen sie in der App.

**Hinweis:** Viele Dateien auf einmal → besser **Option A** (Ordner im Projekt).

---

## Dateinamen (Beispiele)

| Dokument | Dateiname | ID in data.ts |
|----------|-----------|---------------|
| KI-Professional HSO | `ki-professional.pdf` | `ki-professional` |
| EFZ Koch | `efz-koch.pdf` | `efz-koch` |
| Arbeitszeugnis Nr. 1 | `zeugnis-1.pdf` | `zeugnis-1` |

Details: [public/documents/README.md](./public/documents/README.md)

---

## Datenschutz

Alles unter `public/` ist **öffentlich** erreichbar (jeder mit dem Link).  
Nur Dokumente hochladen, die du in einer Bewerbung ohnehin teilen würdest.

---

## Was die App dann zeigt

- **Zertifikate:** Button **«Original ansehen»** (+ Download im Dialog)
- **Arbeitszeugnisse:** **«Original-PDF»** neben «Kopieren» (sobald `documentUrl` gesetzt ist)

Bis die Dateien fehlen, bleiben die bisherigen **Text-Transkripte** sichtbar.
