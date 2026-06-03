import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { Request } from "express";

export type AnalyticsEventType = "gate_view" | "access_unlock" | "app_view";

export type AnalyticsEvent = {
  id: string;
  ts: string;
  type: AnalyticsEventType;
  ref?: string;
  path?: string;
  refererHost?: string;
  country?: string;
  device?: "mobile" | "desktop" | "unknown";
};

const MAX_EVENTS = 400;
const DEV_LOG = path.join(process.cwd(), "data", "analytics-events.jsonl");

function sanitizeRef(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim().slice(0, 64);
  return trimmed || undefined;
}

function sanitizePath(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim().slice(0, 200);
  return trimmed || undefined;
}

export function extractAnalyticsContext(req: Request, body?: { ref?: unknown; path?: unknown }) {
  const ref = sanitizeRef(body?.ref);
  const pagePath = sanitizePath(body?.path);
  const refererHeader = req.headers.referer || req.headers.referrer;
  let refererHost: string | undefined;
  if (typeof refererHeader === "string") {
    try {
      refererHost = new URL(refererHeader).hostname.slice(0, 120);
    } catch {
      refererHost = undefined;
    }
  }
  const countryRaw =
    (req.headers["x-nf-geo-country"] as string | undefined) ||
    (req.headers["x-country"] as string | undefined);
  const country = countryRaw?.trim().slice(0, 2).toUpperCase();
  const ua = String(req.headers["user-agent"] || "");
  const device: AnalyticsEvent["device"] = /mobile|android|iphone|ipad/i.test(ua)
    ? "mobile"
    : ua
      ? "desktop"
      : "unknown";

  return { ref, path: pagePath, refererHost, country, device };
}

function newEvent(
  type: AnalyticsEventType,
  ctx: ReturnType<typeof extractAnalyticsContext>,
): AnalyticsEvent {
  return {
    id: `evt-${Date.now()}-${crypto.randomBytes(4).toString("hex")}`,
    ts: new Date().toISOString(),
    type,
    ...ctx,
  };
}

async function persistNetlify(event: AnalyticsEvent): Promise<void> {
  const { getStore } = await import("@netlify/blobs");
  const store = getStore({ name: "site-analytics", consistency: "strong" });
  await store.setJSON(event.id, event);

  const { blobs } = await store.list();
  if (blobs.length <= MAX_EVENTS) return;

  const sorted = [...blobs].sort((a, b) => a.key.localeCompare(b.key));
  const toDelete = sorted.slice(0, blobs.length - MAX_EVENTS);
  await Promise.all(toDelete.map((b) => store.delete(b.key)));
}

function persistDev(event: AnalyticsEvent): void {
  fs.mkdirSync(path.dirname(DEV_LOG), { recursive: true });
  fs.appendFileSync(DEV_LOG, `${JSON.stringify(event)}\n`, "utf8");

  const lines = fs.existsSync(DEV_LOG)
    ? fs.readFileSync(DEV_LOG, "utf8").trim().split("\n").filter(Boolean)
    : [];
  if (lines.length <= MAX_EVENTS) return;
  fs.writeFileSync(DEV_LOG, `${lines.slice(-MAX_EVENTS).join("\n")}\n`, "utf8");
}

export async function recordAnalyticsEvent(
  type: AnalyticsEventType,
  req: Request,
  body?: { ref?: unknown; path?: unknown },
): Promise<void> {
  const ctx = extractAnalyticsContext(req, body);
  const event = newEvent(type, ctx);

  console.log("[analytics]", JSON.stringify(event));

  try {
    if (process.env.NETLIFY) {
      await persistNetlify(event);
    } else {
      persistDev(event);
    }
  } catch (err) {
    console.error("[analytics] persist failed", err);
  }
}

async function loadEvents(): Promise<AnalyticsEvent[]> {
  if (process.env.NETLIFY) {
    try {
      const { getStore } = await import("@netlify/blobs");
      const store = getStore({ name: "site-analytics", consistency: "strong" });
      const { blobs } = await store.list();
      const events: AnalyticsEvent[] = [];
      for (const blob of blobs) {
        const data = await store.get(blob.key, { type: "json" });
        if (data && typeof data === "object" && "type" in data) {
          events.push(data as AnalyticsEvent);
        }
      }
      return events.sort((a, b) => b.ts.localeCompare(a.ts));
    } catch {
      return [];
    }
  }

  if (!fs.existsSync(DEV_LOG)) return [];
  return fs
    .readFileSync(DEV_LOG, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line) as AnalyticsEvent)
    .sort((a, b) => b.ts.localeCompare(a.ts));
}

export function isAnalyticsViewer(req: Request): boolean {
  const expected =
    process.env.ANALYTICS_VIEW_KEY?.trim() || process.env.SITE_ACCESS_KEY?.trim();
  if (!expected) return false;

  const fromQuery = typeof req.query.key === "string" ? req.query.key.trim() : "";
  const fromHeader =
    typeof req.headers["x-analytics-key"] === "string"
      ? req.headers["x-analytics-key"].trim()
      : "";

  return fromQuery === expected || fromHeader === expected;
}

export async function getAnalyticsSummary() {
  const events = await loadEvents();
  const byType: Record<string, number> = {};
  const byRef: Record<string, number> = {};
  const byCountry: Record<string, number> = {};

  for (const e of events) {
    byType[e.type] = (byType[e.type] || 0) + 1;
    const refKey = e.ref || "(ohne ref)";
    byRef[refKey] = (byRef[refKey] || 0) + 1;
    if (e.country) byCountry[e.country] = (byCountry[e.country] || 0) + 1;
  }

  return {
    total: events.length,
    byType,
    byRef,
    byCountry,
    recent: events.slice(0, 40),
    note: "Anonymisiert: keine Namen, keine IP, keine Chat-Inhalte.",
  };
}

export function renderAnalyticsHtml(summary: Awaited<ReturnType<typeof getAnalyticsSummary>>): string {
  const rows = summary.recent
    .map(
      (e) =>
        `<tr><td>${e.ts}</td><td>${e.type}</td><td>${e.ref || "–"}</td><td>${e.path || "–"}</td><td>${e.refererHost || "–"}</td><td>${e.country || "–"}</td><td>${e.device || "–"}</td></tr>`,
    )
    .join("");

  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>thomoro.com – Zugriffe</title>
<style>body{font-family:system-ui,sans-serif;background:#0f172a;color:#e2e8f0;padding:2rem}table{width:100%;border-collapse:collapse;font-size:13px}th,td{border-bottom:1px solid #334155;padding:8px;text-align:left}h1{color:#2dd4bf}small{color:#94a3b8}</style></head><body>
<h1>Bewerbungsdossier – Zugriffe</h1>
<p><small>${summary.note}</small></p>
<p>Gesamt: <strong>${summary.total}</strong> · Freischaltungen: <strong>${summary.byType.access_unlock || 0}</strong> · App-Aufrufe: <strong>${summary.byType.app_view || 0}</strong> · Gate: <strong>${summary.byType.gate_view || 0}</strong></p>
<h2>Nach Link-Kennung (ref)</h2><pre>${JSON.stringify(summary.byRef, null, 2)}</pre>
<h2>Letzte Ereignisse</h2>
<table><thead><tr><th>Zeit</th><th>Ereignis</th><th>ref</th><th>Pfad</th><th>Referrer</th><th>Land</th><th>Gerät</th></tr></thead><tbody>${rows}</tbody></table>
</body></html>`;
}
