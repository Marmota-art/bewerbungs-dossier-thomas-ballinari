import React from "react";
import { Sparkles, ShieldCheck, Workflow, Gauge, FileJson, ListChecks } from "lucide-react";

const PILOTS = [
  {
    title: "Artwork-Prüfung",
    text: "Automatische Prüfung der Druckdaten gegen das freigegebene Artwork, mit Meldung nur bei kritischen Abweichungen.",
    note: "Esko bietet dafür ein eigenes KI-Werkzeug an. Ich würde es nicht selbst bauen, sondern Comply und GlobalVision als Vergleichsmassstab nehmen.",
  },
  {
    title: "Daten aus Kundenbriefings lesen",
    text: "Eine KI liest das Briefing, füllt die Pflichtfelder und markiert, was fehlt. Ein Mensch prüft, bevor der Auftrag angelegt wird.",
    note: "Erfolgsmass im Pilot: Feldgenauigkeit bei mindestens 90 % der Pflichtfelder.",
  },
  {
    title: "Service-Desk-Triage",
    text: "Eingehende Anfragen werden vorsortiert, einer Kategorie zugeordnet und mit einem Antwortvorschlag versehen.",
    note: "Die Antwort sendet immer ein Mensch.",
  },
  {
    title: "Quickwin: freigegebene KI-Assistenz",
    text: "Ein vom Betrieb freigegebener Assistent für Texte, Zusammenfassungen und Recherche, mit klaren Regeln für die Daten.",
    note: "Schnell einführbar und eine gute Grundlage, um Erfahrung im Team aufzubauen.",
  },
];

const PROCESS = [
  { n: "1", t: "Briefing per Mail oder Portal", d: "Automatisch entsteht ein Ticket in Jira." },
  { n: "2", t: "KI extrahiert die Pflichtfelder", d: "Nichts wird erfunden, Fehlendes wird gemeldet." },
  { n: "G1", t: "Kontrolle 1: Mensch prüft und ergänzt", d: "Fehlt etwas, geht eine Rückfrage an den Kunden.", gate: true },
  { n: "3", t: "Auftrag anlegen, Job in der Automation Engine starten", d: "" },
  { n: "4", t: "Prepress erstellt die Druckdaten", d: "Regelbasiert." },
  { n: "5", t: "Automatische Prüfung gegen das Freigabe-Artwork", d: "" },
  { n: "G2", t: "Kontrolle 2: Mensch entscheidet bei kritischen Fehlern", d: "Bei Fehlern zurück zu Schritt 4.", gate: true },
  { n: "6", t: "Freigabe im Kundenportal", d: "Der Status geht automatisch an den Kunden." },
  { n: "7", t: "Plattenauftrag, Fakturavorschlag und Kennzahlen", d: "Das ERP wird nur über Schnittstellen angesprochen." },
];

const PROMPT = `Du bist Assistent in der Auftragserfassung einer Premedia-Firma.
Lies das Kunden-Briefing und gib NUR gültiges JSON zurück.
Felder: kunde, artikel, verpackungstyp, format_mm, druckverfahren
(Offset|Flexo|Tiefdruck|unbekannt), sprachen[], termin (YYYY-MM-DD),
anzahl_varianten, fehlende_angaben[].
Regeln: Nichts erfinden. Was nicht im Text steht, kommt in
fehlende_angaben. Zitiere bei unsicheren Feldern die Textstelle.`;

const BRIEFING =
  "Hallo, wir brauchen für den Relaunch unseres Müesli Beeren eine neue Faltschachtel, Flexodruck, 3 Sprachen (DE/FR/IT), 4 Sorten. Lieferung der Druckdaten bis 20. November. Format wie letztes Jahr.";

const RESULT = `{
  "kunde": null,
  "artikel": "Müesli Beeren",
  "verpackungstyp": "Faltschachtel",
  "format_mm": null,
  "druckverfahren": "Flexo",
  "sprachen": ["DE", "FR", "IT"],
  "termin": "2026-11-20",
  "anzahl_varianten": 4,
  "fehlende_angaben": ["kunde", "format (nur «wie letztes Jahr»)", "Jahr des Termins ist angenommen"]
}`;

const AMPEL = [
  { c: "bg-red-500", name: "Rot", klass: "Vertrauliche Kundendaten", ex: "Artworks vor Launch, Markeninformationen, Rezepturen", ok: "Nur freigegebene Tools mit Vertrag und Datenstandort Schweiz oder EU, nach Einzelfreigabe" },
  { c: "bg-amber-400", name: "Gelb", klass: "Interne Daten", ex: "Prozessbeschreibungen, interne Preise, Tickets ohne Kundennamen", ok: "Freigegebene Tools aus der Whitelist" },
  { c: "bg-emerald-500", name: "Grün", klass: "Öffentliche Daten", ex: "Website-Texte, Marktrecherche, allgemeine Fragen", ok: "Auch allgemeine Assistenten" },
];

const KPIS = [
  { k: "Durchlaufzeit Druckdaten (Arbeitstage)", q: "Jira, WebCenter" },
  { k: "Erstfreigabequote", q: "WebCenter" },
  { k: "Korrekturschleifen pro Job", q: "WebCenter" },
  { k: "Automatisierungsgrad Standardschritte", q: "Automation Engine" },
  { k: "Reaktionszeit Service Desk", q: "Atlassian" },
];

const card = "rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-4";
const h3 = "flex items-center gap-2 text-teal-300 font-bold text-base";

export default function ErstloesungenPage({ onAsk }: { onAsk: () => void }) {
  return (
    <section id="sect-erstloesungen" className="space-y-8 animate-fade-in text-left">
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 border border-teal-500/30 rounded-full text-xs font-mono text-teal-300 font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>Erstlösungen · Amagoo AG</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Erste Lösungsansätze zu den Hauptaufgaben
        </h2>
        <p className="text-slate-300 leading-relaxed max-w-3xl">
          Auf Grundlage öffentlich zugänglicher Informationen habe ich mir überlegt, wie ich die ersten Hauptaufgaben im Stelleninserat angehen würde. Das sind Ideen für ein Gespräch, keine fertigen Lösungen. Alle Beispieldaten sind erfunden. Es sind keine Daten von Amagoo, und Zielwerte setze ich erst, wenn eine Ausgangsmessung vorliegt.
        </p>
      </div>

      <div className={card}>
        <h3 className={h3}><ListChecks className="w-4 h-4" /><span>Einsatzfelder für erste Piloten</span></h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          Amagoo ist exklusiver Esko-Vertriebspartner und Atlassian Silver Solution Partner. Die Reihenfolge der Einsatzfelder ist meine Erstschätzung und müsste mit Ihnen geprüft werden.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PILOTS.map((p) => (
            <div key={p.title} className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-2">
              <p className="font-bold text-white text-sm">{p.title}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{p.text}</p>
              <p className="text-[11px] text-slate-500 leading-relaxed">{p.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h3 className={h3}><Workflow className="w-4 h-4" /><span>Soll-Prozess: vom Briefing bis zu den freigegebenen Druckdaten</span></h3>
        <p className="text-xs text-slate-400 leading-relaxed">Zwei Kontrollstellen sorgen dafür, dass ein Mensch an den entscheidenden Punkten das letzte Wort hat.</p>
        <ol className="space-y-2">
          {PROCESS.map((s) => (
            <li
              key={s.n}
              className={`flex items-start gap-3 rounded-xl border p-3 ${s.gate ? "bg-amber-500/10 border-amber-500/40" : "bg-slate-950 border-slate-800"}`}
            >
              <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-mono font-bold ${s.gate ? "bg-amber-400 text-slate-950" : "bg-teal-500/20 text-teal-300"}`}>{s.n}</span>
              <div>
                <p className="text-sm font-semibold text-white">{s.t}</p>
                {s.d && <p className="text-[11px] text-slate-400 mt-0.5">{s.d}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className={card}>
        <h3 className={h3}><FileJson className="w-4 h-4" /><span>Beispiel: Briefing lesen und Pflichtfelder füllen</span></h3>
        <p className="text-xs text-slate-400 leading-relaxed">Vorlage für die Anweisung an das Modell, ein erfundenes Briefing und das erwartete Ergebnis.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-3">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Anweisung (Vorlage)</p>
            <pre className="text-[11px] leading-relaxed bg-slate-950 border border-slate-800 rounded-xl p-4 text-slate-300 whitespace-pre-wrap font-mono">{PROMPT}</pre>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Erfundenes Briefing</p>
            <p className="text-xs italic bg-slate-950 border border-slate-800 rounded-xl p-4 text-slate-300 leading-relaxed">«{BRIEFING}»</p>
          </div>
          <div className="space-y-3">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Erwartetes Ergebnis</p>
            <pre className="text-[11px] leading-relaxed bg-slate-950 border border-teal-500/30 rounded-xl p-4 text-teal-200 whitespace-pre-wrap font-mono">{RESULT}</pre>
            <p className="text-xs text-slate-400 leading-relaxed">
              Die erste Kontrollstelle sorgt dafür, dass ein Mensch die drei fehlenden Angaben klärt, bevor der Auftrag angelegt wird. Das Ergebnis habe ich nicht mit einem echten Modell erzeugt, es zeigt, was die Anweisung liefern soll. Als Erstes im Pilot würde ich 20 echte, anonymisierte Briefings testen.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={card}>
          <h3 className={h3}><ShieldCheck className="w-4 h-4" /><span>KI-Ampel für die Richtlinie</span></h3>
          <div className="space-y-3">
            {AMPEL.map((a) => (
              <div key={a.name} className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${a.c}`}></span>
                  <span className="text-sm font-bold text-white">{a.name}: {a.klass}</span>
                </div>
                <p className="text-[11px] text-slate-500">Beispiele: {a.ex}</p>
                <p className="text-xs text-slate-300">Erlaubt: {a.ok}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={card}>
          <h3 className={h3}><Gauge className="w-4 h-4" /><span>Kennzahlen für den Erfolg</span></h3>
          <p className="text-xs text-slate-400 leading-relaxed">Die Ausgangswerte bleiben offen, bis gemessen wurde. Ich setze keine Zahlen ein, die ich nicht kenne.</p>
          <div className="rounded-xl border border-slate-800 overflow-hidden text-xs">
            <div className="grid grid-cols-12 bg-slate-950 text-[10px] font-mono uppercase tracking-wider text-slate-500 px-3 py-2">
              <span className="col-span-6">Kennzahl</span><span className="col-span-3">Aktuell</span><span className="col-span-3">Quelle</span>
            </div>
            {KPIS.map((k) => (
              <div key={k.k} className="grid grid-cols-12 px-3 py-2.5 border-t border-slate-800 text-slate-300">
                <span className="col-span-6 pr-2">{k.k}</span>
                <span className="col-span-3 text-slate-500">Baseline offen</span>
                <span className="col-span-3 text-slate-400">{k.q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 space-y-3">
        <p className="text-xs text-slate-400 leading-relaxed">
          Grundlage: öffentlich zugängliche Informationen zu Amagoo (Webseite, Esko, Fachpresse). Interne Abläufe und Systeme kenne ich nicht. Alles Obige ist ein Vorschlag, den ich gern mit Ihnen schärfe. Den Prompt würde ich nur mit erfundenen oder anonymisierten Briefings testen, nie mit echten Kundendaten in einem nicht freigegebenen Tool.
        </p>
        <button
          type="button"
          onClick={onAsk}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Fragen Sie mich dazu</span>
        </button>
      </div>
    </section>
  );
}
