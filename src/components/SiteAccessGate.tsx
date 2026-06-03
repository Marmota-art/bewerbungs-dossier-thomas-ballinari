import { useEffect, useState, type ReactNode } from "react";
import { Lock, ShieldCheck } from "lucide-react";

type AccessStatus = {
  required: boolean;
  unlocked: boolean;
};

interface SiteAccessGateProps {
  children: ReactNode;
  onAccessChange?: (unlocked: boolean, required: boolean) => void;
}

export function SiteAccessGate({ children, onAccessChange }: SiteAccessGateProps) {
  const [status, setStatus] = useState<AccessStatus | null>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const refreshStatus = async () => {
    const res = await fetch("/api/access/status", { credentials: "include" });
    if (!res.ok) {
      setStatus({ required: false, unlocked: true });
      onAccessChange?.(true, false);
      return;
    }
    const data = (await res.json()) as AccessStatus;
    setStatus(data);
    onAccessChange?.(data.unlocked, data.required);
  };

  const tryUnlock = async (key: string) => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/access/unlock", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: key.trim() }),
      });
      if (!res.ok) {
        setError("Ungültiger Zugangscode. Bitte prüfen Sie die Angabe aus der Bewerbung.");
        return;
      }
      await refreshStatus();
      const url = new URL(window.location.href);
      url.searchParams.delete("zugang");
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    } catch {
      setError("Verbindung zum Server fehlgeschlagen. Bitte später erneut versuchen.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    void (async () => {
      await refreshStatus();
      const urlKey = new URLSearchParams(window.location.search).get("zugang");
      if (urlKey) {
        await tryUnlock(urlKey);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!status) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400 text-sm font-mono">
        Zugang wird geprüft…
      </div>
    );
  }

  if (!status.required || status.unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 space-y-6 shadow-2xl">
        <div className="text-center space-y-3">
          <div className="mx-auto w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
            <Lock className="w-6 h-6 text-teal-400" />
          </div>
          <h1 className="text-xl font-bold text-white">Geschützter Bewerbungszugang</h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Dieses Dossier ist für ausgewählte Personen freigeschaltet. Bitte geben Sie den
            Zugangscode aus der Bewerbungsnachricht ein.
          </p>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            void tryUnlock(code);
          }}
        >
          <label className="block space-y-2">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono font-bold">
              Zugangscode
            </span>
            <input
              type="password"
              autoComplete="off"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Einladungscode eingeben"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-500/50"
            />
          </label>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={submitting || !code.trim()}
            className="w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:opacity-50 text-slate-950 font-bold text-sm transition-all"
          >
            {submitting ? "Wird geprüft…" : "Zugang freischalten"}
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-800">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
          <span>TLS-verschlüsselt · thomoro.com · nDSG-konform gehostet</span>
        </div>
      </div>
    </div>
  );
}
