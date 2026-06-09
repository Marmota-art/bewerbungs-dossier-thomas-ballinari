import type { ReactNode } from "react";

/** Rendert Chat-Text mit klickbaren Markdown-Links [Label](url) */
export function renderChatMessageContent(content: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const linkRe = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = linkRe.exec(content)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(content.slice(lastIndex, match.index));
    }
    nodes.push(
      <a
        key={`link-${key++}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-400 underline underline-offset-2 hover:text-teal-300 break-all"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    nodes.push(content.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [content];
}
