# Originale für die App (Zertifikate & Arbeitszeugnisse)

Lege hier die **Scan- oder PDF-Originale** ab. Sie werden über Netlify öffentlich ausgeliefert.

## Ordner

| Ordner | Inhalt | Dateiname = ID in `src/data.ts` |
|--------|--------|----------------------------------|
| `certificates/` | Zertifikate, Diplome, Patente | z. B. `ki-professional.pdf` → `"documentUrl": "/documents/certificates/ki-professional.pdf"` |
| `zeugnisse/` | Arbeitszeugnisse | z. B. `zeugnis-1.pdf` → ID `zeugnis-1` |

## Empfohlene Formate

- **PDF** (bevorzugt, eine Datei pro Dokument)
- **JPG / PNG** (Foto-Scan, max. ca. 5 MB pro Datei)

## Benennung

Kleinbuchstaben, Bindestriche, keine Leerzeichen:

```
ki-professional.pdf
efz-koch.pdf
zeugnis-1.pdf
zeugnis-hotel-alpenrose.pdf
```

Nach dem Ablegen: in `src/data.ts` beim passenden Eintrag `documentUrl` setzen (oder uns Bescheid geben).
