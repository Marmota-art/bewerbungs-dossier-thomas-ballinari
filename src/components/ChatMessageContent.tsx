import type { MouseEvent, ReactNode } from "react";
import { parseChatLink, testimonialPdfUrl } from "../chatAppLinks";

type ChatMessageContentProps = {
  content: string;
  onOpenTestimonial?: (testimonialId?: string) => void;
};

function openPdf(path: string) {
  window.open(path, "_blank", "noopener,noreferrer");
}

/** Rendert Chat-Text mit klickbaren Markdown-Links [Label](url) */
export function ChatMessageContent({ content, onOpenTestimonial }: ChatMessageContentProps) {
  const nodes: ReactNode[] = [];
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const parsed = parseChatLink(href);
    if (!parsed) return;

    e.preventDefault();
    if (parsed.type === "testimonial") {
      if (parsed.id) {
        openPdf(testimonialPdfUrl(parsed.id));
      } else {
        onOpenTestimonial?.();
      }
      return;
    }
    if (parsed.type === "pdf") {
      openPdf(parsed.path);
    }
  };

  while ((match = linkRe.exec(content)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(content.slice(lastIndex, match.index));
    }

    const href = match[2];
    const parsed = parseChatLink(href);
    const isInternal = parsed?.type === "testimonial" || parsed?.type === "pdf";

    nodes.push(
      <a
        key={`link-${key++}`}
        href={href}
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        onClick={(e) => handleLinkClick(e, href)}
        className="text-teal-400 underline underline-offset-2 hover:text-teal-300 break-all cursor-pointer touch-manipulation"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    nodes.push(content.slice(lastIndex));
  }

  return (
    <span className="whitespace-pre-line text-[11px] sm:text-xs">
      {nodes.length > 0 ? nodes : content}
    </span>
  );
}

/** @deprecated Nutze ChatMessageContent-Komponente */
export function renderChatMessageContent(content: string): ReactNode[] {
  return [<ChatMessageContent key="legacy" content={content} />];
}
