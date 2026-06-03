/** Anonymes Tracking – nur Ereignistyp, ref, Pfad (keine Personendaten). */

const SESSION_KEY = "tb_analytics_session";

function sessionFlags(): Record<string, boolean> {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "{}") as Record<string, boolean>;
  } catch {
    return {};
  }
}

function markSent(event: string) {
  const flags = sessionFlags();
  flags[event] = true;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(flags));
}

function wasSent(event: string): boolean {
  return !!sessionFlags()[event];
}

export function getTrackingRef(): string | undefined {
  const url = new URL(window.location.href);
  const ref = url.searchParams.get("ref")?.trim();
  if (ref) {
    sessionStorage.setItem("tb_ref", ref.slice(0, 64));
    return ref;
  }
  const stored = sessionStorage.getItem("tb_ref");
  return stored?.trim() || undefined;
}

export async function trackVisit(
  event: "gate_view" | "access_unlock" | "app_view",
): Promise<void> {
  if (wasSent(event)) return;
  const ref = getTrackingRef();
  const path = window.location.pathname;

  try {
    const res = await fetch("/api/analytics/track", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, ref, path }),
    });
    if (res.ok) markSent(event);
  } catch {
    /* still */
  }
}
