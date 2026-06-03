import crypto from "node:crypto";
import type { Request } from "express";

export function isSiteAccessConfigured(): boolean {
  const key = process.env.SITE_ACCESS_KEY?.trim();
  return !!key;
}

export function getSiteAccessToken(): string {
  const key = process.env.SITE_ACCESS_KEY?.trim() ?? "";
  return crypto.createHmac("sha256", key).update("thomas-ballinari-site-access-v1").digest("hex");
}

function parseCookie(cookieHeader: string | undefined, name: string): string | undefined {
  if (!cookieHeader) return undefined;
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match?.[1];
}

export function isSiteAccessGranted(req: Request): boolean {
  if (!isSiteAccessConfigured()) return true;
  const token = parseCookie(req.headers.cookie, "tb_site_access");
  return token === getSiteAccessToken();
}

export function buildAccessCookie(): string {
  const token = getSiteAccessToken();
  const secure = process.env.NETLIFY ? "Secure; " : "";
  // Session-Cookie: nach Schliessen des Browsers erneut Code eingeben
  return `tb_site_access=${token}; Path=/; HttpOnly; ${secure}SameSite=Lax`;
}
