import { Certificates, type CertificateItem } from "./data";
import { OfficialPdfDocuments } from "./officialDocuments";
import { certificateAppUrl, certificatePdfUrl } from "./chatAppLinks";

const STOP = new Set([
  "modul",
  "module",
  "kurs",
  "zertifikat",
  "certificate",
  "der",
  "die",
  "das",
  "und",
  "für",
  "the",
  "von",
  "des",
]);

function titleKeywords(title: string): string[] {
  return title
    .toLowerCase()
    .replace(/[(),./–—]/g, " ")
    .split(/\s+/)
    .map((w) => w.trim())
    .filter((w) => w.length >= 3 && !STOP.has(w));
}

function scoreCertificate(message: string, cert: CertificateItem): number {
  const lower = message.toLowerCase();
  let score = 0;

  if (lower.includes(cert.id)) score += 12;
  if (lower.includes(cert.title.toLowerCase())) score += 10;
  if (lower.includes(cert.issuer.toLowerCase().slice(0, 20))) score += 4;

  for (const kw of titleKeywords(cert.title)) {
    if (lower.includes(kw)) score += 2;
  }

  if (cert.grade && lower.includes(cert.grade.toLowerCase().slice(0, 8))) score += 2;

  if (cert.category === "ki_it" && /ecdl|ki-professional|hso|computer|it-zertifikat/.test(lower)) {
    score += 1;
  }
  if (cert.category === "gastro" && /koch|wirte|lehrmeister|gastro|berufsschule|fähigkeitszeugnis/.test(lower)) {
    score += 1;
  }
  if (cert.category === "patents" && /patent|gastwirtschaft|lizenz|zürich/.test(lower)) {
    score += 1;
  }

  return score;
}

function findCertificateInMessage(message: string): CertificateItem | null {
  let best: CertificateItem | null = null;
  let bestScore = 0;

  for (const cert of Certificates) {
    const score = scoreCertificate(message, cert);
    if (score > bestScore) {
      bestScore = score;
      best = cert;
    }
  }

  return bestScore >= 2 ? best : null;
}

function findMatchingCertificates(message: string): CertificateItem[] {
  const lower = message.toLowerCase();
  if (/ecdl/.test(lower)) {
    return Certificates.filter((c) => /ecdl/i.test(c.title));
  }
  if (/ki-professional|ki professional|hso/.test(lower)) {
    return Certificates.filter((c) => c.id === "cert-1");
  }
  if (/patent|gastwirtschaftspatent/.test(lower)) {
    return Certificates.filter((c) => c.category === "patents");
  }
  if (/wirte|wirt/.test(lower)) {
    return Certificates.filter((c) => /wirte/i.test(c.title));
  }
  if (/kochlehre|fähigkeitszeugnis|berufsschule/.test(lower)) {
    return Certificates.filter((c) => c.category === "gastro" && /koch|berufsschule|fähigkeits/i.test(c.title));
  }

  const single = findCertificateInMessage(message);
  return single ? [single] : [];
}

function transcriptExcerpt(cert: CertificateItem, maxLen = 480): string {
  if (!cert.transcript) return "";
  const flat = cert.transcript.replace(/\n+/g, " ").trim();
  if (flat.length <= maxLen) return flat;
  return `${flat.slice(0, maxLen).trim()}…`;
}

function formatSingleCertificateReply(cert: CertificateItem, includeKnowledge: boolean): string {
  const pdfLink = certificatePdfUrl(cert.id);
  const appLink = certificateAppUrl(cert.id);
  const lines = [
    `Gerne – hier sind die Angaben zu meinem Zertifikat «${cert.title}» (${cert.issuer}, ${cert.date}):`,
    "",
    `- Original-PDF: [${cert.title}](${pdfLink})`,
    `- Volltext in der App: [${cert.title} (interaktiv)](${appLink})`,
  ];

  if (cert.grade) {
    lines.push("", `Note / Bewertung: ${cert.grade}`);
  }

  if (includeKnowledge && cert.highlights.length > 0) {
    lines.push("", "Kernpunkte:");
    for (const h of cert.highlights) {
      lines.push(`- ${h}`);
    }
  }

  const excerpt = includeKnowledge ? transcriptExcerpt(cert) : "";
  if (excerpt) {
    lines.push("", `Auszug aus dem Original-Dokument: «${excerpt}»`);
  }

  return lines.join("\n");
}

function formatMultipleCertificatesReply(certs: CertificateItem[]): string {
  const lines = [
    "Hier sind die passenden Zertifikate mit Original-Links:",
    "",
  ];

  for (const cert of certs) {
    lines.push(
      `- ${cert.title} (${cert.date}): [Original-PDF](${certificatePdfUrl(cert.id)}) | [App-Volltext](${certificateAppUrl(cert.id)})`
    );
  }

  lines.push(
    "",
    `Gesamtsammlung: [${OfficialPdfDocuments.zertifikate.fileName}](${certificatePdfUrl()})`
  );

  return lines.join("\n");
}

function formatGenericCertificateReply(): string {
  const pdfLink = certificatePdfUrl();
  const appLink = certificateAppUrl();
  const kiCount = Certificates.filter((c) => c.category === "ki_it").length;
  const gastroCount = Certificates.filter((c) => c.category === "gastro").length;
  const patentCount = Certificates.filter((c) => c.category === "patents").length;

  return [
    "Alle meine offiziellen Zertifikate und Ausbildungsnachweise findest du hier:",
    "",
    `- Original-PDF (komplette Sammlung): [${OfficialPdfDocuments.zertifikate.fileName}](${pdfLink})`,
    `- Interaktiv in der App: [Zertifikate auf thomoro.com](${appLink})`,
    "",
    `Insgesamt ${Certificates.length} Nachweise: ${kiCount} KI & IT, ${gastroCount} Gastronomie-Fachausweise, ${patentCount} behördliche Patente.`,
    "Nenne mir ein Stichwort (z. B. KI-Professional, ECDL, Wirtefachkurs, Kochlehre, Patent), dann gebe ich dir den direkten Link und die Inhalte.",
  ].join("\n");
}

export function getCertificateLinkReply(message: string): string | null {
  const lower = message.toLowerCase();
  const hasCertTopic =
    /zertifikat|zertifikate|certificate|diplom|abschluss|ecdl|patent|fähigkeitszeugnis|lehrmeister|wirtefach|nachweis|ausbildungsnachweis|ki-professional|transkript|hso|modul \d|berufsschulzeugnis|notenblatt/.test(
      lower
    );
  const hasLinkIntent = /original|pdf|link|url|dokument|herunterladen|ansehen|scan/.test(lower);
  const hasContentIntent =
    /inhalt|was steht|module|noten|welche|details|volltext|wissen|beschreib|erzähl|zeig|transkript|auszug/.test(
      lower
    );

  if (!hasCertTopic && !(hasLinkIntent && /zertifikat|ecdl|patent|diplom|abschluss|nachweis/.test(lower))) {
    return null;
  }

  const multi = findMatchingCertificates(message);
  if (multi.length > 1) return formatMultipleCertificatesReply(multi);

  const matched = multi[0] ?? findCertificateInMessage(message);
  if (matched) {
    return formatSingleCertificateReply(matched, hasContentIntent || !hasLinkIntent);
  }

  if (hasCertTopic || hasLinkIntent || hasContentIntent) {
    return formatGenericCertificateReply();
  }

  return null;
}

export function getChatCertificatesKnowledge(): string {
  const pdfLink = certificatePdfUrl();
  const appLink = certificateAppUrl();
  const lines = [
    "ZERTIFIKAT-LINKS (bei Fragen nach Original-Zertifikaten, PDF, Link, Inhalt oder Modulen IMMER klickbare Markdown-Links angeben):",
    `- PDF-Sammlung aller Originale: [${OfficialPdfDocuments.zertifikate.fileName}](${pdfLink})`,
    `- App-Seite Zertifikate (Volltext & Transkripte): [Zertifikate](${appLink})`,
    "",
    "Einzelne Zertifikate (Format: [Titel](URL) – bei Detailfragen auch Highlights und Transkript-Inhalt aus JSON nutzen):",
  ];

  for (const cert of Certificates) {
    lines.push(
      `- ${cert.title} (${cert.date}${cert.grade ? `, ${cert.grade}` : ""}): [Original-PDF](${certificatePdfUrl(cert.id)}) | [App](${certificateAppUrl(cert.id)})`
    );
    for (const h of cert.highlights) {
      lines.push(`  • ${h}`);
    }
    if (cert.transcript) {
      const excerpt = transcriptExcerpt(cert, 320);
      lines.push(`  Transkript-Auszug: ${excerpt}`);
    }
  }

  lines.push(
    "",
    "Regel: Bei «Original-Zertifikat», «PDF», «Link», «Inhalt», «Module», «Noten» oder konkretem Zertifikatsnamen → zuerst Original-PDF-Link (#page=N) mitgeben und relevantes Wissen aus Highlights/Transkript nennen, nicht nur beschreiben."
  );

  return lines.join("\n");
}
