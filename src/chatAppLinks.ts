import { Certificates, Testimonials } from "./data";
import { OfficialPdfDocuments } from "./officialDocuments";

/** Original-PDF; mit testimonialId springt der Link direkt zur Zeugnis-Seite (#page=N). */
export function testimonialPdfUrl(testimonialId?: string): string {
  const base = OfficialPdfDocuments.arbeitszeugnisse.path;
  if (!testimonialId) return base;
  const page = Testimonials.find((t) => t.id === testimonialId)?.pdfPage;
  return page ? `${base}#page=${page}` : base;
}

export function testimonialAppUrl(testimonialId?: string): string {
  if (testimonialId) return `#testimonials/${testimonialId}`;
  return "#testimonials";
}

/** Original-PDF; mit certificateId springt der Link direkt zur Zertifikats-Seite (#page=N). */
export function certificatePdfUrl(certificateId?: string): string {
  const base = OfficialPdfDocuments.zertifikate.path;
  if (!certificateId) return base;
  const page = Certificates.find((c) => c.id === certificateId)?.pdfPage;
  return page ? `${base}#page=${page}` : base;
}

export function certificateAppUrl(certificateId?: string): string {
  if (certificateId) return `#certificates/${certificateId}`;
  return "#certificates";
}

export type ParsedChatLink =
  | { type: "testimonial"; id?: string }
  | { type: "certificate"; id?: string }
  | { type: "pdf"; path: string };

/** Erkennt App-interne Zeugnis- und PDF-Links aus dem Chat */
export function parseChatLink(href: string): ParsedChatLink | null {
  const trimmed = href.trim();

  const hashOnly = trimmed.match(/^#testimonials(?:\/(zeugnis-\d+))?$/);
  if (hashOnly) {
    return { type: "testimonial", id: hashOnly[1] };
  }

  const certHash = trimmed.match(/^#certificates(?:\/(cert-\d+))?$/);
  if (certHash) {
    return { type: "certificate", id: certHash[1] };
  }

  const pdfPath = trimmed.match(/^(\/documents\/[^#]+\.pdf)(?:#page=\d+)?$/i);
  if (pdfPath) {
    return { type: "pdf", path: trimmed };
  }

  try {
    const base =
      typeof window !== "undefined" ? window.location.origin : "https://thomoro.com";
    const url = new URL(trimmed, base);
    const hash = url.hash.replace(/^#/, "");
    if (hash.startsWith("testimonials")) {
      const id = hash.split("/")[1];
      return {
        type: "testimonial",
        id: id?.startsWith("zeugnis-") ? id : undefined,
      };
    }
    if (hash.startsWith("certificates")) {
      const id = hash.split("/")[1];
      return {
        type: "certificate",
        id: id?.startsWith("cert-") ? id : undefined,
      };
    }
    if (
      url.pathname.includes("arbeitszeugnisse") ||
      url.pathname.includes("zertifikate") ||
      url.pathname.endsWith(".pdf")
    ) {
      return { type: "pdf", path: `${url.pathname}${url.hash}` };
    }
  } catch {
    return null;
  }

  return null;
}
