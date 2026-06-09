import { Testimonials, type TestimonialItem } from "./data";
import { OfficialPdfDocuments } from "./officialDocuments";
import { testimonialAppUrl, testimonialPdfUrl } from "./chatAppLinks";

function employerKeywords(employer: string): string[] {
  const stop = new Set(["ag", "gmbh", "sa", "der", "die", "das", "und", "the", "hotel", "restaurant"]);
  return employer
    .toLowerCase()
    .replace(/[(),./]/g, " ")
    .split(/\s+/)
    .map((w) => w.trim())
    .filter((w) => w.length >= 4 && !stop.has(w));
}

function findTestimonialInMessage(message: string): TestimonialItem | null {
  const lower = message.toLowerCase();
  let best: TestimonialItem | null = null;
  let bestScore = 0;

  for (const t of Testimonials) {
    let score = 0;
    if (lower.includes(t.employer.toLowerCase())) score += 10;
    if (lower.includes(t.id)) score += 10;
    for (const kw of employerKeywords(t.employer)) {
      if (lower.includes(kw)) score += 2;
    }
    if (lower.includes(t.role.toLowerCase().slice(0, 12))) score += 1;
    if (score > bestScore) {
      bestScore = score;
      best = t;
    }
  }

  return bestScore >= 2 ? best : null;
}

function formatTestimonialReply(t: TestimonialItem): string {
  const appLink = testimonialAppUrl(t.id);
  const pdfLink = testimonialPdfUrl();
  return [
    `Gerne – hier ist mein originales Arbeitszeugnis von ${t.employer} (${t.period}, ${t.role}):`,
    "",
    `- In der App (Volltext): [Arbeitszeugnis ${t.employer.split(",")[0].trim()}](${appLink})`,
    `- Original-PDF-Sammlung: [${OfficialPdfDocuments.arbeitszeugnisse.fileName}](${pdfLink})`,
    "",
    `Kurz-Auszug: «${t.summary}»`,
  ].join("\n");
}

function formatGenericZeugnisReply(): string {
  const pdfLink = testimonialPdfUrl();
  const appLink = testimonialAppUrl();
  return [
    "Alle meine offiziellen Arbeitszeugnisse findest du hier:",
    "",
    `- Original-PDF (komplette Sammlung): [${OfficialPdfDocuments.arbeitszeugnisse.fileName}](${pdfLink})`,
    `- Interaktiv in der App: [Arbeitszeugnisse auf thomoro.com](${appLink})`,
    "",
    `Insgesamt ${Testimonials.length} Zeugnisse. Nenne mir einen Arbeitgeber (z. B. Hagerbach, Arosa, Chalet Suisse), dann gebe ich dir den direkten Link zum passenden Zeugnis.`,
  ].join("\n");
}

export function getTestimonialLinkReply(message: string): string | null {
  const lower = message.toLowerCase();
  const hasZeugnis = /zeugnis|testimonial|arbeitgeberzeugnis/.test(lower);
  const hasLinkIntent = /original|pdf|link|url|dokument|herunterladen|ansehen/.test(lower);

  if (!hasZeugnis && !hasLinkIntent) return null;

  const matched = findTestimonialInMessage(message);
  if (matched) return formatTestimonialReply(matched);

  if (hasZeugnis || hasLinkIntent) return formatGenericZeugnisReply();

  return null;
}

export function getChatTestimonialsKnowledge(): string {
  const pdfLink = testimonialPdfUrl();
  const appLink = testimonialAppUrl();
  const lines = [
    "ZEUGNIS-LINKS (bei Fragen nach Original-Arbeitszeugnissen IMMER klickbare Markdown-Links angeben):",
    `- PDF-Sammlung aller Originale: [${OfficialPdfDocuments.arbeitszeugnisse.fileName}](${pdfLink})`,
    `- App-Seite Arbeitszeugnisse (Volltext): [Arbeitszeugnisse](${appLink})`,
    "Einzelne Zeugnisse in der App (Format: [Titel](URL)):",
  ];

  for (const t of Testimonials) {
    lines.push(
      `- ${t.employer} (${t.period}): [Zeugnis ${t.employer.split(",")[0].trim()}](${testimonialAppUrl(t.id)})`
    );
  }

  lines.push(
    "",
    "Regel: Bei «Original-Zeugnis», «PDF», «Link» oder konkretem Arbeitgeber → passenden Link sofort mitgeben, nicht nur beschreiben."
  );

  return lines.join("\n");
}
