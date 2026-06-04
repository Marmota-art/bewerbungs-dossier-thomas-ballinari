import type { ReactNode } from "react";
import { Award, ChevronRight, FileText, Search } from "lucide-react";
import type { TestimonialItem } from "../data";
import { Testimonials } from "../data";
import { OfficialPdfDocuments } from "../officialDocuments";

type DocumentLinkRenderer = (
  documentUrl: string,
  label?: string,
  downloadName?: string
) => ReactNode;

interface TestimonialsPageProps {
  testimonialSearch: string;
  onTestimonialSearchChange: (value: string) => void;
  filteredTestimonials: TestimonialItem[];
  selectedTestimonialId: string;
  onSelectTestimonial: (id: string) => void;
  activeTestimonial: TestimonialItem;
  onGoToResume: () => void;
  renderDocumentLinks: DocumentLinkRenderer;
}

export function TestimonialsPage({
  testimonialSearch,
  onTestimonialSearchChange,
  filteredTestimonials,
  selectedTestimonialId,
  onSelectTestimonial,
  activeTestimonial,
  onGoToResume,
  renderDocumentLinks,
}: TestimonialsPageProps) {
  return (
    <section id="sect-testimonials" className="space-y-10 animate-fade-in font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-900 text-left">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>{Testimonials.length} offizielle Zeugnisse</span>
          </div>
          <h2 className="text-3xl font-serif font-black text-white">Arbeitszeugnisse</h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Eigene Hauptseite mit allen Schweizer und internationalen Zeugnissen im originalen Wortlauf.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
          {renderDocumentLinks(
            OfficialPdfDocuments.arbeitszeugnisse.path,
            "Alle Zeugnisse (PDF)",
            OfficialPdfDocuments.arbeitszeugnisse.fileName
          )}
          <button
            type="button"
            onClick={onGoToResume}
            className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-850 text-xs font-semibold text-slate-300 flex items-center gap-2 border border-slate-800 transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Zum Lebenslauf</span>
          </button>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="search"
          value={testimonialSearch}
          onChange={(e) => onTestimonialSearchChange(e.target.value)}
          placeholder="Arbeitgeber, Funktion oder Stichwort suchen…"
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-2 max-h-[560px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-800">
          {filteredTestimonials.length === 0 ? (
            <p className="text-sm text-slate-500 p-4">Kein Zeugnis zur Suche gefunden.</p>
          ) : (
            filteredTestimonials.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => onSelectTestimonial(t.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col gap-1.5 ${
                  selectedTestimonialId === t.id
                    ? "bg-slate-950 border-emerald-500 text-white shadow-lg"
                    : "bg-slate-900/60 border-slate-850 hover:border-slate-800 text-slate-400"
                }`}
              >
                <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400 font-bold">
                  <span>{t.period}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
                <h4 className="font-bold text-sm text-slate-200 line-clamp-1">{t.employer}</h4>
                <p className="text-xs text-slate-450">{t.role}</p>
              </button>
            ))
          )}
        </div>

        <div className="lg:col-span-8">
          <div className="bg-slate-950 rounded-2xl border border-slate-850 overflow-hidden flex flex-col min-h-[520px] shadow-2xl">
            <div className="bg-slate-950 border-b border-slate-850 px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400 font-mono">
              <span>OFFIZIELLES ORIGINAL-DOKUMENT</span>
              <div className="flex flex-wrap items-center gap-3">
                {activeTestimonial.documentUrl
                  ? renderDocumentLinks(activeTestimonial.documentUrl, "Original-PDF")
                  : null}
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(activeTestimonial.fullText);
                    alert("Dokumententext in die Zwischenablage kopiert!");
                  }}
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  Text kopieren
                </button>
              </div>
            </div>

            <div className="bg-emerald-500/[0.03] border-b border-slate-850/80 p-5 font-light text-xs sm:text-sm text-slate-300">
              <p className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                Auszug Highlights
              </p>
              <p className="italic leading-relaxed mt-1">&quot;{activeTestimonial.summary}&quot;</p>
            </div>

            <div className="p-8 md:p-10 overflow-y-auto flex-1 max-h-[420px] bg-white text-slate-900 font-serif shadow-inner">
              <div className="max-w-md mx-auto space-y-6 text-sm">
                <div className="flex justify-between items-center border-b border-slate-150 pb-4 font-sans text-[10px] text-slate-400 uppercase tracking-wider">
                  <span>{activeTestimonial.employer}</span>
                  <span>{activeTestimonial.period}</span>
                </div>
                <h4 className="text-center font-sans font-black text-slate-900 text-lg border-b-2 border-slate-900 pb-1 uppercase tracking-tight">
                  {activeTestimonial.documentTitle || "ARBEITSZEUGNIS"}
                </h4>
                <p className="whitespace-pre-wrap leading-relaxed text-slate-800">
                  {activeTestimonial.fullText}
                </p>
                <div className="pt-4 border-t border-slate-200 flex justify-between items-center font-sans text-[10px] text-slate-400">
                  <span>Urkunde elektronisch übermittelt</span>
                  <span className="font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
