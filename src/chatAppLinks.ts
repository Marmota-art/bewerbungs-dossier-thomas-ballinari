import { OfficialPdfDocuments } from "./officialDocuments";

/** Relative Deep-Links – funktionieren in derselben App-Session */
export function testimonialPdfUrl(): string {
  return OfficialPdfDocuments.arbeitszeugnisse.path;
}

export function testimonialAppUrl(testimonialId?: string): string {
  if (testimonialId) return `#testimonials/${testimonialId}`;
  return "#testimonials";
}

export type ParsedChatLink =
  | { type: "testimonial"; id?: string }
  | { type: "pdf"; path: string };

/** Erkennt App-interne Zeugnis- und PDF-Links aus dem Chat */
export function parseChatLink(href: string): ParsedChatLink | null {
  const trimmed = href.trim();

  const hashOnly = trimmed.match(/^#testimonials(?:\/(zeugnis-\d+))?$/);
  if (hashOnly) {
    return { type: "testimonial", id: hashOnly[1] };
  }

  if (trimmed.startsWith("/documents/") && trimmed.toLowerCase().endsWith(".pdf")) {
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
    if (url.pathname.includes("arbeitszeugnisse") || url.pathname.endsWith(".pdf")) {
      return { type: "pdf", path: url.pathname };
    }
  } catch {
    return null;
  }

  return null;
}
