import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Award,
  Brain,
  Briefcase,
  Calculator,
  Calendar,
  ChevronRight,
  CheckCircle,
  Code,
  Coins,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Filter,
  FolderGit2,
  GraduationCap,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Plus,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  CloudRain,
  Trash2,
  TrendingUp,
  Users,
  X,
  Printer,
  Clock,
  ArrowRight,
  Lock,
  Wrench,
  Settings,
  Umbrella,
  Bluetooth,
  Smartphone,
  Battery,
  Bell,
  Volume2,
  Compass,
  ShieldAlert
} from "lucide-react";
import {
  PersonalData,
  Experiences,
  Educations,
  Certificates,
  Testimonials,
  SmartGastroProject,
  SmartUmbrellaProject,
  MonadsValues
} from "./data";

export default function App() {
  // Tab states: 'home' | 'about' | 'resume' | 'testimonials' | 'certificates' | 'skills' | 'projects' | 'chatbot'
  const [activeTab, setActiveTab] = useState<string>("home");

  // Sub-filter states
  const [resumeFilter, setResumeFilter] = useState<string>("all"); // 'all' | 'ki' | 'gastro' | 'both'
  const [testimonialSearch, setTestimonialSearch] = useState<string>("");
  const [selectedTestimonial, setSelectedTestimonial] = useState<string>(Testimonials[0].id);
  const [certificateCategory, setCertificateCategory] = useState<string>("all"); // 'all' | 'ki_it' | 'gastro' | 'patents'
  const [certificateSearch, setCertificateSearch] = useState<string>("");
  const [selectedCertTranscript, setSelectedCertTranscript] = useState<any | null>(null);

  // SmartGastro Simulator states
  const [simWeather, setSimWeather] = useState<string>("Sonnig"); // 'Sonnig' | 'Regnerisch' | 'Heiss'
  const [simEvent, setSimEvent] = useState<boolean>(true); // farmers market event in Lienz
  const [simulating, setSimulating] = useState<boolean>(false);
  const [simCompleted, setSimCompleted] = useState<boolean>(false);
  const [simFeedbackLog, setSimFeedbackLog] = useState<string[]>([]);
  const [simData, setSimData] = useState<any[]>(SmartGastroProject.forecastData);
  const [activeMonadsStep, setActiveMonadsStep] = useState<number>(0);

  // Project selection state
  const [selectedProject, setSelectedProject] = useState<string>("smartgastro"); // 'smartgastro' | 'smartumbrella'

  // IPSO Smart-Regenschirm simulator states
  const [umbrellaConnected, setUmbrellaConnected] = useState<boolean>(true);
  const [umbrellaBattery, setUmbrellaBattery] = useState<number>(87);
  const [charging, setCharging] = useState<boolean>(false);
  const [findTimerActive, setFindTimerActive] = useState<boolean>(false);
  const [alarmActive, setAlarmActive] = useState<boolean>(false);
  const [simulatedIncident, setSimulatedIncident] = useState<string>(""); // e.g. "Keiner", "Bewegung", "Geofencing", "Wetter"
  const [umbrellaLogs, setUmbrellaLogs] = useState<string[]>([
    "System-Init: IPSO Premium Smart-Regenschirm V2.0 initialisiert.",
    "Bluetooth: Status OK - Antennenleistung +4dBm.",
    "Verbindung mit Smartphone hergestellt (App: IPSO Connect)."
  ]);

  // Chatbot states
  const [messages, setMessages] = useState<any[]>([
    {
      role: "assistant",
      content: "Grüezi! Ich bin der digitale Bewerbungsassistent von Thomas Ballinari. Fragen Sie mich gerne über meine berufliche Laufbahn, meine KI-Kompetenzen, Zertifikate, Arbeitszeugnisse oder mein Projekt SmartGastro.ai!"
    }
  ]);
  const [inputMsg, setInputMsg] = useState<string>("");
  const [chatLoading, setChatLoading] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Admin section: simulated dynamic documents uploaded to context
  const [adminDocs, setAdminDocs] = useState<any[]>([]);
  const [showAdmin, setShowAdmin] = useState<boolean>(false);
  const [adminTitle, setAdminTitle] = useState<string>("");
  const [adminContent, setAdminContent] = useState<string>("");
  const [adminType, setAdminType] = useState<string>("Zertifikat");

  // Contact form state
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactCompany, setContactCompany] = useState<string>("");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);

  // Load admin docs on startup
  useEffect(() => {
    fetch("/api/admin/docs")
      .then(res => res.json())
      .then(data => {
        if (data.docs) setAdminDocs(data.docs);
      })
      .catch(err => console.log("Failed to fetch admin docs", err));
  }, []);

  // Scroll chatbot to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatLoading]);

  // Handle chatbot query
  const sendChatMessage = async (text: string) => {
    if (!text.trim() || chatLoading) return;

    const userMsg = { role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    setInputMsg("");
    setChatLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (!response.ok) {
        throw new Error("API-Fehler beim Senden");
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.text, isMock: data.isMock }]);
    } catch (error: any) {
      console.error(error);
      setMessages(prev => [
        ...prev,
        { 
          role: "assistant", 
          content: "Grüezi! Es gab leider eine kurze Verbindungsstörung zum Gemini API-Server. Bitte stellen Sie sicher, dass Ihr `GEMINI_API_KEY` in den Secrets eingetragen ist. Bis dahin beantworte ich Ihre Fragen gerne im persönlichen Gespräch an thomas.ballinari@pm.me!" 
        }
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  // Pre-configured Chat Sample Questions
  const chatStarters = [
    "Wer ist Thomas Ballinari?",
    "Welche KI-Ausbildung besitzt Thomas?",
    "Was ist SmartGastro.ai?",
    "Welche Gastronomie-Erfahrung bringt Thomas mit?",
    "Warum passt Thomas als AI Business Specialist?"
  ];

  // SmartGastro Forecast Simulation Algorithm
  const runGastroSimulation = () => {
    setSimulating(true);
    setSimCompleted(false);
    setTimeout(() => {
      // Calculate adjusted forecasts based on selected conditions
      const updated = SmartGastroProject.forecastData.map(item => {
        let multiplier = 1.0;
        
        // Weather adjustments
        if (simWeather === "Heiss") {
          multiplier += item.dish === "Fitnessteller Salat" ? 0.3 : -0.2;
        } else if (simWeather === "Regnerisch") {
          multiplier += item.dish === "Cordon Bleu" ? 0.15 : -0.15;
        } else { // Sonnig
          multiplier += 0.05;
        }

        // Event adjustments
        if (simEvent && item.event !== "Sonntags-Ausflügler") {
          multiplier += 0.15;
        }

        const newForecast = Math.round(item.forecast * multiplier);
        // actual is randomized slightly around it
        const newActual = Math.round(newForecast * (0.95 + Math.random() * 0.1));
        const newDelta = newActual - newForecast;

        return {
          ...item,
          forecast: newForecast,
          actual: newActual,
          delta: newDelta,
          weather: `${simWeather}, ${simWeather === "Heiss" ? "28°C" : simWeather === "Regnerisch" ? "14°C" : "22°C"}`,
          event: simEvent ? "Stadt-Event aktiv (+15%)" : "Normalbetrieb"
        };
      });

      setSimData(updated);
      setSimatingLogs();
      setSimulating(false);
      setSimCompleted(true);
    }, 1200);
  };

  const setSimatingLogs = () => {
    const logs = [
      `[ETL Pipeline] Kassen-Schnittstelle WaiterOne synchronisiert.`,
      `[Wetterdienst] MeteoSchweiz Daten geladen: ${simWeather}.`,
      `[Event Engine] Lokale Events im Umkreis von Lienz evaluiert: ${simEvent ? "Stadt-Event gefunden" : "Keine besonderen Anlässe"}.`,
      `[Modell-Inferenz] XGBoost-Regressionsmodell berechnet Mengen für alle Tagesmenüs.`,
      `[Wissenschaftliche Basis] Durchschnittliche Abweichung (MAPE): ${simWeather === "Heiss" ? "11.2%" : "9.8%"} - Forecast optimiert!`,
      `[Feedback-Loop] Letzte Korrektur erfolgreich im neuronalen Netz für zukünftige Retrainings gewichtet.`
    ];
    setSimFeedbackLog(logs);
  };

  // IPSO Smart-Regenschirm simulator helpers
  const runFindMyUmbrella = () => {
    if (findTimerActive) return;
    setFindTimerActive(true);
    setUmbrellaLogs(prev => [
      ...prev,
      `[Find My Umbrella] Befehl gesendet! Bluetooth-Nahbereichssuche gestartet...`,
      `[IPSO Device] Akustischer Signalton (Beep Beep) ausgelöst.`,
      `[IPSO Device] LED-Blinken am Soft-Touch-Griff schlägt mit 2.4Hz Frequenz an (Dauer: 4 Sekunden).`
    ]);
    setTimeout(() => {
      setFindTimerActive(false);
      setUmbrellaLogs(prev => [
        ...prev,
        `[Find My Umbrella] Signalton und LED-Anzeige nach Zeitablauf automatisch beendet.`
      ]);
    }, 4000);
  };

  const toggleUmbrellaConnection = () => {
    if (umbrellaConnected) {
      setUmbrellaConnected(false);
      setUmbrellaLogs(prev => [
        ...prev,
        `[Manual Disconnect] Bluetooth-Verbindung vom Benutzer getrennt.`,
        `[IPSO Device] Geht in stromsparenden Deep-Sleep Standby-Modus. Diebstahlsicherung inaktiv.`
      ]);
    } else {
      setUmbrellaConnected(true);
      setUmbrellaLogs(prev => [
        ...prev,
        `[Connect Request] Suche nach IPSO Premium Smart-Regenschirm...`,
        `[Bluetooth v5.2] Handshake erfolgreich. Signalstärke: -42dBm (Hervorragend).`,
        `[App Sync] Verbindung wiederhergestellt. Alle Sensoren online.`
      ]);
    }
  };

  const simulateUmbrellaTheft = () => {
    if (!umbrellaConnected) {
      alert("Schirm ist offline. Verbinde zuerst Bluetooth!");
      return;
    }
    setSimulatedIncident("Bewegung");
    setUmbrellaLogs(prev => [
      ...prev,
      `[Incident Simulation] Bewegung gestartet.`,
      `🚨 [Sensor Alarm] Gyroskop & Beschleunigungssensor registrieren ungewollte Lageänderung.`,
      `🚨 [Diebstahlschutz] Thomas' Smartphone vibriert. Push-Meldung: 'Unerlaubte Bewegung deines IPSO-Regenschirms in St. Gallen registriert!'`
    ]);
  };

  const simulateUmbrellaGeofencing = () => {
    if (!umbrellaConnected) {
      alert("Schirm ist offline. Verbinde zuerst Bluetooth!");
      return;
    }
    setSimulatedIncident("Geofencing");
    setUmbrellaLogs(prev => [
      ...prev,
      `[Incident Simulation] Geofencing gestartet.`,
      `⚠️ [Range Warning] RSSI-Pegel fällt unter -95dB (Signalabbruch / Distanz > 15m).`,
      `⚠️ [Reminder Alert] Push-Benachrichtigung an Thomas' Smartphone gesendet: 'IPSO Smart-Regenschirm vergessen! Letzte bekannte Position: Volksbadstrasse 17a, St. Gallen.'`
    ]);
  };

  const simulateUmbrellaWeather = () => {
    setSimulatedIncident("Wetter");
    setUmbrellaLogs(prev => [
      ...prev,
      `[Incident Simulation] Wetter-Inferenz gestartet.`,
      `🌧️ [Meteo Inferenz] App syncht mit MeteoSchweiz GPS-Standort St. Gallen. Regenwahrscheinlichkeit steigt rasant auf 95%.`,
      `🌧️ [Wetter Alarm] Push-Benachrichtigung an Thomas: 'Regenschauer nähert sich in 10-15 min an deinem Standort. Nimm deinen IPSO-Regenschirm mit!'`
    ]);
  };

  const chargeUmbrellaBattery = () => {
    if (charging) return;
    setCharging(true);
    setUmbrellaLogs(prev => [
      ...prev,
      `⚡ [Power Sync] USB-C Ladekabel angeschlossen. Ladevorgang gestartet...`
    ]);
    setTimeout(() => {
      setUmbrellaBattery(100);
      setCharging(false);
      setUmbrellaLogs(prev => [
        ...prev,
        `⚡ [Power Sync] Akku vollständig geladen (100%). Betriebsbereitschaft von bis zu 6 Monaten wiederhergestellt.`
      ]);
    }, 2000);
  };

  // Document Upload Emulator
  const handleUploadDoc = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminTitle || !adminContent) return;

    try {
      const response = await fetch("/api/admin/docs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: adminTitle, content: adminContent, type: adminType })
      });
      const data = await response.json();
      if (data.status === "success") {
        setAdminDocs(prev => [...prev, data.doc]);
        setAdminTitle("");
        setAdminContent("");
        alert("Dokument erfolgreich für den Chatbot-Wissensspeicher indexiert!");
      }
    } catch (err) {
      console.log("Failed upload", err);
    }
  };

  const handleDeleteAdminDoc = async (id: string) => {
    try {
      await fetch(`/api/admin/docs/${id}`, { method: "DELETE" });
      setAdminDocs(prev => prev.filter(d => d.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // Filtered Certificates
  const filteredCertificates = useMemo(() => {
    return Certificates.filter(c => {
      const matchesCategory = certificateCategory === "all" || c.category === certificateCategory;
      const matchesSearch = c.title.toLowerCase().includes(certificateSearch.toLowerCase()) || 
                            c.issuer.toLowerCase().includes(certificateSearch.toLowerCase()) ||
                            c.highlights.some(h => h.toLowerCase().includes(certificateSearch.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [certificateCategory, certificateSearch]);

  // Filtered Testimonials
  const filteredTestimonials = useMemo(() => {
    return Testimonials.filter(t => {
      const matchesSearch = t.employer.toLowerCase().includes(testimonialSearch.toLowerCase()) ||
                            t.role.toLowerCase().includes(testimonialSearch.toLowerCase()) ||
                            t.summary.toLowerCase().includes(testimonialSearch.toLowerCase());
      return matchesSearch;
    });
  }, [testimonialSearch]);

  const activeTestimonialObj = Testimonials.find(t => t.id === selectedTestimonial) || Testimonials[0];

  return (
    <div id="executive-app" className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-slate-950">
      
      {/* PROFESSIONAL FLOAT NAV HEADER */}
      <header id="nav-header" className="sticky top-0 bg-slate-950/85 backdrop-blur-md border-b border-slate-900 z-50 transition-all font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab("home")}>
            <div id="monogram-dot" className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
            <div>
              <h1 id="fullname" className="text-xl font-bold tracking-tight text-white font-serif">Thomas.ai</h1>
            </div>
          </div>
          
          <nav id="main-nav" className="hidden lg:flex items-center gap-1.5">
            {[
              { id: "home", label: "Profil" },
              { id: "resume", label: "Lebenslauf" },
              { id: "projects", label: "Projekte" },
              { id: "certificates", label: "Zertifikate" },
              { id: "skills", label: "Skills" },
              { id: "chatbot", label: "Frag Thomas", icon: Sparkles },
              { id: "contact", label: "Kontakt" }
            ].map(tab => (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? "bg-slate-900 text-teal-350 border-b-2 border-teal-500"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-900/50"
                }`}
              >
                {tab.icon && <tab.icon className="w-3.5 h-3.5" />}
                {tab.label}
              </button>
            ))}
          </nav>

          <div id="header-contact-btn">
            <button
              onClick={() => setActiveTab("chatbot")}
              className="relative px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 font-semibold text-slate-150 text-slate-950 text-sm hover:opacity-90 active:scale-95 transition-all shadow-md shadow-teal-500/15 flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>Thomas fragen</span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE TAB BAR NAVIGATION (HORIZONTAL SCROLL) */}
      <div id="mobile-nav-bar" className="lg:hidden sticky top-20 bg-slate-950 border-b border-slate-900 py-3 px-4 overflow-x-auto whitespace-nowrap scrollbar-none z-40 flex gap-2">
        {[
          { id: "home", label: "Profil" },
          { id: "resume", label: "Lebenslauf" },
          { id: "projects", label: "Projekte" },
          { id: "certificates", label: "Zertifikate" },
          { id: "skills", label: "Skills" },
          { id: "chatbot", label: "Frag Thomas" },
          { id: "contact", label: "Kontakt" }
        ].map(tab => (
          <button
            key={tab.id}
            id={`m-tab-btn-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeTab === tab.id
                ? "bg-teal-400 text-slate-950 font-bold"
                : "bg-slate-900 text-slate-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CORE PORTAL LAYOUT CONTAINER */}
      <main id="portal-content" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">

        {/* 1. PORTFOLIO PROFIL (HOME) */}
        {activeTab === "home" && (
          <section id="sect-home" className="space-y-20 animate-fade-in font-sans">
            {/* HERO PROFILE SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
              
              {/* Left Bio Column */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-mono font-medium text-emerald-400">Sofort startklar für deine AI-Domains</span>
                </div>

                <div className="space-y-6">
                  {/* Big Stacked Display Heading from Screenshot 1 */}
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black font-serif tracking-tight text-white leading-[0.85] select-none">
                    Thomas<br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">Ballinari</span>
                  </h1>
                  
                  {/* Subtle Sub Heading */}
                  <p className="text-lg sm:text-xl font-bold tracking-tight text-slate-300 font-mono">
                    KI-Stratege <span className="text-teal-500">·</span> Business Case Designer <span className="text-teal-500">·</span> AI Power-User
                  </p>
                </div>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                  Ich denke nicht in reinen Technologien – ich denke in <strong className="text-white font-semibold">Geschäftsproblemen</strong>. Mit Claude, Google Studio AI und einem eidgenössischen KI-Fachausweis transformiere ich deine operativen Herausforderungen in messbare AI-Lösungen mit echtem ROI.
                </p>

                {/* TWIN CTAS FROM SCREENSHOT 1 */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                  <button
                    onClick={() => setActiveTab("chatbot")}
                    className="px-8 py-4 rounded-full bg-emerald-400 text-slate-950 font-bold hover:bg-emerald-300 active:scale-95 transition-all shadow-xl shadow-emerald-400/10 flex items-center justify-center gap-2 text-sm"
                  >
                    <span>Frag mich direkt</span>
                    <ChevronRight className="w-4 h-4 text-slate-950" />
                  </button>
                  
                  <button
                    onClick={() => setActiveTab("resume")}
                    className="px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-850 active:scale-95 text-slate-300 border border-slate-800 transition-all font-bold flex items-center justify-center text-sm"
                  >
                    <span>Lebenslauf ansehen</span>
                  </button>
                </div>

                {/* STATISTICS CHIPS GRID MATCHING SCREENSHOT 1 */}
                <div className="pt-8 border-t border-slate-900">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-0.5">
                      <p className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-mono tracking-tight">40+</p>
                      <p className="text-[10px] text-slate-500 uppercase font-semibold font-mono tracking-wider">Jahre Führung</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-mono tracking-tight">CHF 18K</p>
                      <p className="text-[10px] text-slate-500 uppercase font-semibold font-mono tracking-wider">Einsparpotenzial / Jahr</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-mono tracking-tight">52%</p>
                      <p className="text-[10px] text-slate-500 uppercase font-semibold font-mono tracking-wider">ROI SmartGastro</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Media Column - Floating Photo Card from Screenshot 1 */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm rounded-[2rem] p-1 bg-gradient-to-br from-slate-800 via-teal-500/20 to-blue-600/20 shadow-2xl">
                  <div className="rounded-[1.9rem] bg-slate-900 p-5 md:p-6 space-y-6">
                    
                    {/* Portrait Photo matching Unsplash handsome mature Swiss gentleman */}
                    <div className="relative mx-auto aspect-[3/4] rounded-2xl border border-slate-800 overflow-hidden group shadow-inner">
                      <img 
                        src="/src/thomas.png" 
                        alt="Thomas Ballinari Portrait" 
                        className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          if (img.src !== "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=800") {
                            img.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=800";
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                      
                      {/* Live indicator badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/90 border border-emerald-500/30 text-[10px] text-emerald-400 font-mono font-bold uppercase tracking-wider">
                        Live Portfolio
                      </div>
                    </div>

                    <div className="text-center space-y-1.5">
                      <h3 className="font-extrabold text-white text-xl font-serif">Thomas Ballinari</h3>
                      <p className="text-slate-400 text-xs font-mono">Standort: St. Gallen, Schweiz 🇨🇭</p>
                    </div>

                    {/* Floating Tool tag - Screenshot 1: AI Daily Driver */}
                    <div className="bg-slate-950 rounded-xl p-3 border border-slate-850 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🤖</span>
                        <div className="text-left">
                          <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest font-mono">AI Daily Driver</p>
                          <p className="text-xs font-bold text-slate-200">Claude · Google Studio AI</p>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded font-mono font-bold uppercase">Ready</span>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* BENTO GRID: WHY I FIT MONADS FROM SCREENSHOT 2 */}
            <div className="space-y-10 pt-10 border-t border-slate-900 text-left">
              <div className="max-w-3xl space-y-3">
                <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white leading-tight">
                  Warum ich zu Monads passe
                </h2>
                <p className="text-slate-400 text-base font-light">
                  Monads sucht jemanden, der AI-Domains aufbaut, in Business Cases denkt und Lösungen mit Claude umsetzt. Genau das bringe ich mit – plus 40 Jahre reale Unternehmererfahrung auf allen Hierarchiestufen. Als Team auf Augenhöhe kommen wir gemeinsam weiter!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* 1. AI Power-User */}
                <div className="bg-slate-900/60 hover:bg-slate-900 border border-slate-900 hover:border-emerald-500/30 transition-all p-6 rounded-2xl space-y-3 shadow-md flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold font-mono">01</div>
                    <h3 className="text-lg font-bold text-white tracking-tight">AI Power-User</h3>
                    <p className="text-sm text-slate-350 leading-relaxed font-light">
                      Claude, Claude Code, Google Studio AI täglich – nicht als Experiment, sondern als fundamentaler Bestandteil meiner Arbeitsweise.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-900/80 text-[11px] text-teal-400 font-mono">
                    Hebel: Extrem hohe Entwicklungsgeschwindigkeit
                  </div>
                </div>

                {/* 2. Business Case Denker */}
                <div className="bg-slate-900/60 hover:bg-slate-900 border border-slate-900 hover:border-emerald-500/30 transition-all p-6 rounded-2xl space-y-3 shadow-md flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold font-mono">02</div>
                    <h3 className="text-lg font-bold text-white tracking-tight">Business Case Denker</h3>
                    <p className="text-sm text-slate-350 leading-relaxed font-light">
                      SmartGastro.ai: ROI 52%, Break-Even 7 Monate – echte handfeste Zahlen und eine reale funktionierende Kundenlösung.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-900 /80 text-[11px] text-teal-400 font-mono">
                    Hebel: Voller Fokus auf wirtschaftlichen Mehrwert
                  </div>
                </div>

                {/* 3. Kundennah & kommunikativ */}
                <div className="bg-slate-900/60 hover:bg-slate-900 border border-slate-900 hover:border-emerald-500/30 transition-all p-6 rounded-2xl space-y-3 shadow-md flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold font-mono">03</div>
                    <h3 className="text-lg font-bold text-white tracking-tight">Kundennah & kommunikativ</h3>
                    <p className="text-sm text-slate-350 leading-relaxed font-light">
                      10 Jahre selbstständiger Pächter mit eigenem Betrieb, Lehrlingsausbildung und permanenten Stakeholder-Gesprächen auf Augenhöhe.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-900/80 text-[11px] text-teal-400 font-mono">
                    Hebel: Direkt-Involvierung aller Hierarchiestufen
                  </div>
                </div>

                {/* 4. Gestalter, kein Verwalter */}
                <div className="bg-slate-900/60 hover:bg-slate-900 border border-slate-900 hover:border-emerald-500/30 transition-all p-6 rounded-2xl space-y-3 shadow-md flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold font-mono">04</div>
                    <h3 className="text-lg font-bold text-white tracking-tight">Gestalter, kein Verwalter</h3>
                    <p className="text-sm text-slate-350 leading-relaxed font-light">
                      Restaurant Löwenburg, Eispark Sargans, SmartGastro.ai – ich baue und etabliere erfolgreiche Geschäftsprozesse von Null auf.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-900/80 text-[11px] text-teal-400 font-mono">
                    Hebel: Unternehmergeist statt Konzernsitzungen
                  </div>
                </div>

                {/* 5. Eidg. Fachausweis AI Business */}
                <div className="bg-slate-900/60 hover:bg-slate-900 border border-slate-900 hover:border-emerald-500/30 transition-all p-6 rounded-2xl space-y-3 shadow-md flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold font-mono">05</div>
                    <h3 className="text-lg font-bold text-white tracking-tight">Eidg. Fachausweis AI Business</h3>
                    <p className="text-sm text-slate-350 leading-relaxed font-light">
                      Fundierte Ausbildung in KI-Strategie, Datenmanagement, ML-Modellierung, nDSG-Ethik und modernem Wissensmanagement.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-900/80 text-[11px] text-teal-400 font-mono">
                    Hebel: Zertifiziertes Spitzen-Wissen 2025
                  </div>
                </div>

                {/* 6. Eigenverantwortlich */}
                <div className="bg-slate-900/60 hover:bg-slate-900 border border-slate-900 hover:border-emerald-500/30 transition-all p-6 rounded-2xl space-y-3 shadow-md flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold font-mono">06</div>
                    <h3 className="text-lg font-bold text-white tracking-tight">Eigenverantwortlich</h3>
                    <p className="text-sm text-slate-350 leading-relaxed font-light">
                      Als Pächter habe ich Buchhaltung, Personal, Einkauf und Marketing eigenständig verantwortet – Selbstständigkeit ist meine DNA.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-900/80 text-[11px] text-teal-400 font-mono">
                    Hebel: Selbstläufer ohne Mikromanagement
                  </div>
                </div>

              </div>
            </div>

            {/* MY WORK DATA PIPELINE FLOW FROM SCREENSHOT PAGE 6 */}
            <div className="p-8 sm:p-12 rounded-[2.5rem] bg-slate-900 border border-slate-900 shadow-2xl space-y-12 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_60%)] pointer-events-none"></div>
              
              <div className="max-w-2xl space-y-3">
                <h2 className="text-3xl font-serif font-black tracking-tight text-white leading-tight">
                  Mein AI-Workflow
                </h2>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  Wie ich im Alltag vorgehe, um geschäftlichen Nutzen durch massgeschneiderte KI-Pipelines realitätsnah beim Kunden vor Ort zu entfesseln:
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* 1. Analyse & Konzept */}
                <div className="space-y-3 p-6 rounded-2xl bg-slate-950 border border-slate-850">
                  <div className="inline-flex px-3 py-1 bg-teal-500/10 font-bold font-mono text-[10px] text-teal-400 rounded-full">SCHRITT 1</div>
                  <h3 className="text-base font-bold text-white">Analyse & Konzept</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Mit Claude analysiere ich komplexe organisatorische Problemstellungen, führe Stakeholder-Interviews direkt an der Basis und erstelle BPMN-Prozessflussmodelle. Jeder Case wird qualitativ gesichert und an klaren wirtschaftlichen Zielwerten geeicht.
                  </p>
                </div>

                {/* 2. Prototyping & Umsetzung */}
                <div className="space-y-3 p-6 rounded-2xl bg-slate-950 border border-slate-850">
                  <div className="inline-flex px-3 py-1 bg-teal-500/10 font-bold font-mono text-[10px] text-teal-400 rounded-full">SCHRITT 2</div>
                  <h3 className="text-base font-bold text-white">Prototyping & Umsetzung</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Claude Code, Cursor und Google Studio AI ermöglichen mir, in Rekordzeit funktionierende Web-Prototypen (Fullstack) und serverlose ETL-Datenpipelines zu entwickeln. Dieses agile &quot;Vibe Coding&quot; ist unserer grösster Wettbewerbsvorteil bei Monads!
                  </p>
                </div>

                {/* 3. Business Case & ROI */}
                <div className="space-y-3 p-6 rounded-2xl bg-slate-950 border border-slate-850">
                  <div className="inline-flex px-3 py-1 bg-teal-500/10 font-bold font-mono text-[10px] text-teal-400 rounded-full">SCHRITT 3</div>
                  <h3 className="text-base font-bold text-white">Business Case & ROI</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Jede entwickelte Lösung muss sich rechnen. Ich kenne Total Cost of Ownership (TCO) Modelle, kalkuliere finanzielle Hebel (Warenaufwand, COGS, Personalkosten) und präsentiere dem Kunden plausible, datenbasierte Business-Szenarien statt grauer Folien.
                  </p>
                </div>

              </div>

              {/* Quick direct action */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-850 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-slate-400 font-mono">PRAXIS-SIMULATION</p>
                  <p className="text-sm font-bold text-white">Möchtest du sehen, wie dieser Workflow als echte Anwendung aussieht?</p>
                </div>
                <button
                  onClick={() => setActiveTab("projects")}
                  className="px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shrink-0 flex items-center gap-2"
                >
                  <span>Zu SmartGastro wechseln</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                </button>
              </div>

            </div>

          </section>
        )}

        {/* 2. ÜBER MICH (ABOUT ME) */}
        {activeTab === "about" && (
          <section id="sect-about" className="space-y-12 animate-fade-in max-w-4xl mx-auto">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-extrabold text-white">Über mich</h2>
              <div className="h-1 w-12 bg-teal-500 mx-auto rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column highlights */}
              <div className="md:col-span-1 bg-slate-900/70 p-6 rounded-2xl border border-slate-900 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-bold text-white text-base">Hintergrund</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Gelernter Schweizer Koch EFZ, langjähriger Gastronom, selbstständiger Pächter sowie pragmatischer Projektentwickler.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-white text-base">Zukunft</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    AI Business Specialist i.A. mit dem Willen, Schweizer KMUs, im Speziellen Gastronomiebetrieben, KI realitätsnah statt theoretisch nahezubringen.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">Motto</p>
                  <p className="text-teal-300 text-sm italic mt-1 font-serif">"Machen statt nur Reden."</p>
                </div>
              </div>

              {/* Right Columns detailed text */}
              <div className="md:col-span-2 space-y-6 text-slate-300 leading-relaxed text-base pt-2">
                <p>
                  Grüezi, mein Name ist <strong className="text-white font-semibold">Thomas Ballinari</strong>.
                </p>
                <p>
                  Nach mehr als 40 intensiven und lohnenden Jahren im Schweizer Gastgewerbe, in welchen ich erfolgreiche Betriebe wie das <strong className="text-white">Restaurant Löwenburg</strong> geführt habe, habe ich mich entschlossen, meine jahrelange Führungserfahrung mit der zukunftsträchtigen Disziplin der künstlichen Intelligenz (KI) zusammenzubringen.
                </p>
                <p>
                  Derzeit absolviere ich an der ipso Bildung AG in Zürich die Ausbildung zum <strong className="text-teal-300">AI Business Specialist mit eidgenössischem Fachausweis</strong>. Mein Fokus liegt ganz klar auf der <strong className="text-white">praktischen Realisierbarkeit</strong>. Viele KI-Lösungen bleiben am grünen Tisch hängen, weil die Entwickler den harten Arbeitsalltag in Betrieben nicht kennen. Ich kenne ihn haargenau: die Hektik beim Mittags-Ansturm (z.B. 12:15 Uhr), den Ärger über teuren Food Waste und den ständigen Stress durch Fehlplanung und Personalengpass.
                </p>
                <p>
                  Genau deshalb habe ich das System <strong className="text-white">SmartGastro.ai</strong> konzipiert und als funktionalen Prototyp umgesetzt. Es verbindet echte Daten des WaiterOne Kassensystems mit Wetterfaktoren und lokalen Events im Umkreis, um Küchenchefs das Leben spürbar zu erleichtern und Restaurants jährlich tausende Franken einzusparen.
                </p>
                <p>
                  Ich rede nicht nur über AI-Strategie – ich konzipiere, promte und baue. Lassen Sie uns die Prozesse Ihrer Organisation gemeinsam datengetrieben optimieren!
                </p>
              </div>
            </div>
          </section>
        )}

         {/* 2. LEBENSLAUF (RESUME) */}
        {activeTab === "resume" && (
          <section id="sect-resume" className="space-y-12 animate-fade-in font-sans">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-900 text-left">
              <div className="space-y-1">
                <h2 className="text-3xl font-serif font-black text-white">Lebenslauf & Stationen</h2>
                <p className="text-slate-400 text-sm font-light">
                  Interaktives, zweiteiliges Bewerbungs-Dossier im Original-Layout der Schweizer Du-Kultur.
                </p>
              </div>

              {/* Printable trigger */}
              <button 
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-850 text-xs font-semibold text-emerald-400 flex items-center gap-2 border border-slate-800 transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Dossier drucken / Als PDF speichern</span>
              </button>
            </div>

            {/* TWO-COLUMN PHYSICAL DOSSIER LOOK */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
              
              {/* LEFT COLUMN: Slate Dark Sidebar */}
              <div className="lg:col-span-4 bg-slate-900 border border-slate-900 p-6 sm:p-8 rounded-3xl space-y-8 text-slate-100 flex flex-col justify-start">
                
                {/* Contact Sub-card */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">Kontakt</h4>
                  <div className="space-y-3 text-sm font-light">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                      <a href="mailto:thomas.ballinari@pm.me" className="hover:text-emerald-300 transition-colors break-all">thomas.ballinari@pm.me</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                      <a href="tel:+41 79 705 63 14" className="hover:text-emerald-300 transition-colors">+41 79 705 63 14</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>St. Gallen, Schweiz CH-9000</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Geburtstag: 10. Januar 1966</span>
                    </div>
                  </div>
                </div>

                {/* KI & IT-Kompetenzen metrics */}
                <div className="space-y-4 border-t border-slate-800/80 pt-6">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">KI- & IT-Kompetenz</h4>
                  <div className="space-y-3.5">
                    {[
                      { name: "Prozessoptimierung (AI-gestützt)", rate: 95 },
                      { name: "Prompt Engineering (Claude, Gemini)", rate: 95 },
                      { name: "Google Studio AI / Gemini API", rate: 90 },
                      { name: "Claude Code Integration", rate: 90 },
                      { name: "Machine Learning Concepts", rate: 80 }
                    ].map((comp, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-300 font-medium">{comp.name}</span>
                          <span className="text-emerald-400 font-bold font-mono text-[10px]">{comp.rate}%</span>
                        </div>
                        {/* Custom Bar indicator */}
                        <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full transition-all" style={{ width: `${comp.rate}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages Levels */}
                <div className="space-y-4 border-t border-slate-800/80 pt-6">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">Sprachen</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs font-light">
                    <div>
                      <p className="font-bold text-white">Deutsch</p>
                      <p className="text-slate-400 text-[10px] font-mono mt-0.5">Muttersprache C2</p>
                    </div>
                    <div>
                      <p className="font-bold text-white">Englisch</p>
                      <p className="text-slate-400 text-[10px] font-mono mt-0.5">Fortgeschritten C1</p>
                    </div>
                    <div>
                      <p className="font-bold text-white">Französisch</p>
                      <p className="text-slate-400 text-[10px] font-mono mt-0.5">Gute Kenntnisse B2</p>
                    </div>
                    <div>
                      <p className="font-bold text-white">Italienisch</p>
                      <p className="text-slate-400 text-[10px] font-mono mt-0.5">Grundkenntnisse A2</p>
                    </div>
                  </div>
                </div>

                {/* Stärken list */}
                <div className="space-y-4 border-t border-slate-800/80 pt-6">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">Persönliche Stärken</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {PersonalData.strengths.map((st, idx) => (
                      <span key={idx} className="bg-slate-950 border border-slate-850 px-2.5 py-1 rounded text-[10px] text-slate-300 font-mono">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interessen & Ehrenamt */}
                <div className="space-y-4 border-t border-slate-800/80 pt-6">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">Interessen & Engagement</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Technologie-Scouting, Kochen für Freunde & Familie, Digitale Transformation im Schweizer Gewerbe, lebenslange Weiterbildung.
                  </p>
                </div>

              </div>

              {/* RIGHT COLUMN: Light and Creamy Physical Resume Sheet */}
              <div className="lg:col-span-8 bg-slate-50 text-slate-900 border border-slate-200 shadow-xl rounded-[2rem] p-6 sm:p-10 space-y-8 flex flex-col justify-start">
                
                {/* Header Monogram Block */}
                <div className="border-b border-slate-200 pb-6 space-y-2">
                  <h3 className="text-4xl sm:text-5xl font-black font-serif tracking-tight text-slate-900">
                    Thomas Ballinari
                  </h3>
                  <p className="text-emerald-700 text-sm font-bold tracking-tight font-mono uppercase bg-emerald-500/5 py-1 px-3.5 rounded-lg border border-emerald-600/10 inline-block">
                    AI Business Specialist i.A. mit eidgenössischem Fachausweis
                  </p>
                </div>

                {/* Short Profile Intro text */}
                <div className="text-sm sm:text-base text-slate-700 leading-relaxed font-light italic">
                  „Nach über 40 erfolgreichen Jahren in der Schweizer Gastronomie verbinde ich meine ausgeprägte betriebswirtschaftliche Denkweise mit den immensen Möglichkeiten künstlicher Intelligenz. Ich gestalte praxisnahe AI-Prototypen, die echte betriebliche Ineffizienzen nachhaltig beheben.“
                </div>

                {/* Timeline: Berufliche Stationen */}
                <div className="space-y-6">
                  <h4 className="text-base font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Briefcase className="w-5 h-5 text-emerald-600" />
                    <span>Beruflicher Werdegang</span>
                  </h4>
                  
                  <div className="space-y-6">
                    {Experiences.map((exp, idx) => (
                      <div key={exp.id} className="grid grid-cols-1 md:grid-cols-12 gap-2 items-start">
                        {/* Station Period */}
                        <div className="md:col-span-3 text-xs font-bold text-emerald-700 font-mono md:pt-1">
                          {exp.period}
                        </div>
                        {/* Station Details */}
                        <div className="md:col-span-9 space-y-1">
                          <h5 className="font-extrabold text-slate-950 text-sm sm:text-base leading-snug">
                            {exp.role}
                          </h5>
                          <p className="text-xs text-slate-500 font-medium font-mono">
                            {exp.company} <span className="text-slate-300">•</span> {exp.location}
                          </p>
                          <ul className="list-disc list-outside pl-4 text-xs sm:text-sm text-slate-650 space-y-1 leading-relaxed pt-1 font-light">
                            {exp.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Educations Section inside CV Sheet */}
                <div className="space-y-6 border-t border-slate-200 pt-8">
                  <h4 className="text-base font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-200 pb-2">
                    <GraduationCap className="w-5 h-5 text-emerald-600" />
                    <span>Ausbildung & Weiterbildung</span>
                  </h4>

                  <div className="space-y-6">
                    {Educations.map((edu, idx) => (
                      <div key={edu.id} className="grid grid-cols-1 md:grid-cols-12 gap-2 items-start">
                        {/* Period */}
                        <div className="md:col-span-3 text-xs font-bold text-emerald-700 font-mono md:pt-1">
                          {edu.period}
                        </div>
                        {/* Details */}
                        <div className="md:col-span-9 space-y-1">
                          <h5 className="font-extrabold text-slate-950 text-sm sm:text-base leading-snug">
                            {edu.degree}
                          </h5>
                          <p className="text-xs text-slate-500 font-medium font-mono">
                            {edu.institution} <span className="text-slate-300">•</span> {edu.location}
                          </p>
                          <ul className="list-disc list-outside pl-4 text-xs text-slate-600 space-y-1 leading-relaxed pt-1 font-light">
                            {edu.details.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* INTEGRATED ORIGINAL WORK ZEUGNISSE IN COLLAPSIBLE ACCORDION FOR SWISS PORTFOLIO FOLDER */}
            <div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-900 space-y-8 text-left mt-8">
              <div className="max-w-2xl space-y-2">
                <h3 className="text-2xl font-serif font-black text-white">Ausführliche Arbeitszeugnisse</h3>
                <p className="text-slate-400 text-sm font-light">
                  Hier kannst du alle 15+ Arbeitszeugnisse Schweizer Betriebe im originalen und ungekürzten Wortlauf einsehen.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Employers Selection */}
                <div className="lg:col-span-4 space-y-2 max-h-[480px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-800">
                  {Testimonials.map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTestimonial(t.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col gap-1.5 ${
                        selectedTestimonial === t.id
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
                  ))}
                </div>

                {/* Original Document Letter Sheet Panel */}
                <div className="lg:col-span-8">
                  <div className="bg-slate-950 rounded-2xl border border-slate-850 overflow-hidden flex flex-col h-full shadow-2xl">
                    <div className="bg-slate-950 border-b border-slate-850 px-5 py-3 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>OFFIZIELLES ORIGINAL-DOKUMENT</span>
                      <button
                        onClick={() => {
                          const curr = Testimonials.find(t => t.id === selectedTestimonial) || Testimonials[0];
                          navigator.clipboard.writeText(curr.fullText);
                          alert("Dokumententext in die Zwischenablage kopiert!");
                        }}
                        className="text-emerald-400 hover:underline font-semibold"
                      >
                        Kopieren
                      </button>
                    </div>

                    {/* Verified Summary info */}
                    <div className="bg-emerald-500/[0.03] border-b border-slate-850/80 p-5 font-light text-xs sm:text-sm text-slate-300">
                      <p className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">Auszug Highlights</p>
                      <p className="italic leading-relaxed mt-1">
                        &quot;{(Testimonials.find(t => t.id === selectedTestimonial) || Testimonials[0]).summary}&quot;
                      </p>
                    </div>

                    {/* Paper Area */}
                    <div className="p-8 md:p-10 overflow-y-auto max-h-[360px] bg-white text-slate-900 font-serif shadow-inner">
                      <div className="max-w-md mx-auto space-y-6 text-sm">
                        <div className="flex justify-between items-center border-b border-slate-150 pb-4 font-sans text-[10px] text-slate-400 uppercase tracking-wider">
                          <span>{selectedTestimonial ? Testimonials.find(t => t.id === selectedTestimonial)?.employer : Testimonials[0].employer}</span>
                          <span>Bewerbungs-Beilage</span>
                        </div>
                        <h4 className="text-center font-sans font-black text-slate-900 text-lg border-b-2 border-slate-900 pb-1 uppercase tracking-tight">
                          ARBEITSZEUGNIS
                        </h4>
                        <p className="whitespace-pre-wrap leading-relaxed space-y-4 indent-4 text-slate-800">
                          {(Testimonials.find(t => t.id === selectedTestimonial) || Testimonials[0]).fullText}
                        </p>
                        <div className="pt-4 border-t border-slate-200 flex justify-between items-center font-sans text-[10px] text-slate-400">
                          <span>Urkunde elektronisch übermittelt</span>
                          <span className="font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 5. ZERTIFIKATE (CREDENTIALS) */}
        {activeTab === "certificates" && (
          <section id="sect-certificates" className="space-y-8 animate-fade-in">
            <div className="space-y-1">
              <h2 className="text-3xl font-extrabold text-white">Ausbildungsnachweise & Zertifikate</h2>
              <p className="text-slate-400 text-sm">Akkreditierte Abschlüsse in den Bereichen KI, Informationstechnologie und gehobene Fachgastronomie</p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-slate-900 pb-4">
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
                {[
                  { id: "all", label: "Alle Kategorien" },
                  { id: "ki_it", label: "KI & Informationstechnologie" },
                  { id: "gastro", label: "Gastronomie-Fachausweise" },
                  { id: "patents", label: "Behördliche Patente & Lizenzen" }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setCertificateCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      certificateCategory === cat.id
                        ? "bg-teal-500 text-slate-950 font-bold"
                        : "bg-slate-900 text-slate-400 hover:text-white"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Small Search */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Zertifikat suchen..."
                  value={certificateSearch}
                  onChange={(e) => setCertificateSearch(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs focus:outline-none focus:border-teal-500 placeholder:text-slate-500 text-slate-200"
                />
              </div>
            </div>

            {/* Certificate grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCertificates.map((cert, index) => (
                <div
                  key={cert.id}
                  id={`certificate-card-${index}`}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-900 hover:border-slate-800 transition-all flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                        cert.category === "ki_it"
                          ? "bg-teal-500/10 text-teal-400 border border-teal-500/20"
                          : cert.category === "gastro"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}>
                        {cert.category === "ki_it" ? "AI & Computer" : cert.category === "gastro" ? "Gastgewerbe" : "Patent"}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 font-semibold">{cert.date}</span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-extrabold text-sm text-white tracking-tight leading-snug group-hover:text-teal-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-slate-400 text-xs font-semibold">{cert.issuer}</p>
                    </div>

                    {cert.grade && (
                      <div className="text-xs font-bold text-teal-400 font-mono">
                        Schnitt: {cert.grade}
                      </div>
                    )}

                    <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900/80 space-y-3">
                      <h4 className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">Nachweis-Inhalte</h4>
                      <ul className="text-slate-350 text-xs space-y-1.5 list-disc pl-4 leading-relaxed">
                        {cert.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Transcript drawer button */}
                  <div className="border-t border-slate-900 pt-3">
                    <button
                      onClick={() => setSelectedCertTranscript(cert)}
                      className="text-teal-400 hover:text-teal-300 text-xs font-semibold font-mono flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>Transkript abfragen</span>
                      <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Interactive Modal for Certificate Transcript (Avoids iframe-restricted alert API) */}
            {selectedCertTranscript && (
              <div 
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in"
                onClick={() => setSelectedCertTranscript(null)}
              >
                <div 
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto space-y-6 shadow-2xl relative text-left"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedCertTranscript(null)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 hover:bg-slate-800 rounded-full transition-all cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="space-y-2 border-b border-slate-800 pb-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      {selectedCertTranscript.issuer}
                    </span>
                    <h3 className="text-xl font-extrabold text-white tracking-tight">
                      {selectedCertTranscript.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">Ausgestellt: {selectedCertTranscript.date}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[11px] text-slate-400 font-bold uppercase tracking-wider font-mono">Detailliertes Dokumenten-Transkript:</h4>
                    <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap select-all max-h-96 overflow-y-auto">
                      {selectedCertTranscript.transcript}
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                    <span className="text-[10px] text-slate-500 font-mono">Standard Schweizer nDSG Konformität</span>
                    <button
                      onClick={() => setSelectedCertTranscript(null)}
                      className="px-5 py-2 rounded-xl bg-teal-500 hover:opacity-95 font-bold text-slate-950 text-xs transition-all cursor-pointer"
                    >
                      Schliessen
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* 6. SKILLS */}
        {activeTab === "skills" && (
          <section id="sect-skills" className="space-y-8 animate-fade-in max-w-4xl mx-auto">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-extrabold text-white">Technologische & Fachliche Skills</h2>
              <p className="text-slate-450 text-sm max-w-xl mx-auto">Thomas Ballinaris Kernkompetenzen an der wertvollen Nahtstelle von KI-Methoden und operativem Gastgewerbe</p>
              <div className="h-1 w-12 bg-teal-500 mx-auto rounded mt-2"></div>
            </div>

            {/* Split Skill layouts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              {/* Box 1: AI, ML & IT Automation */}
              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 h-full space-y-6">
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <Brain className="w-5 h-5 text-teal-400" />
                  <span>AI, ML & IT Automation</span>
                </h3>

                <div className="space-y-4">
                  {PersonalData.skills.filter((_, i) => i < 6).map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-200">{skill.title}</span>
                        <span className="text-teal-400 font-bold font-mono">{skill.score}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-500 to-blue-600 rounded-full" style={{ width: `${skill.score}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box 2: Gastronomy, Operations & Leadership */}
              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 h-full space-y-6">
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-teal-400" />
                  <span>Management, Lead & Operations</span>
                </h3>

                <div className="space-y-4">
                  {PersonalData.skills.filter((_, i) => i >= 6).map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-200">{skill.title}</span>
                        <span className="text-teal-400 font-bold font-mono">{skill.score}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-500 to-blue-600 rounded-full" style={{ width: `${skill.score}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        )}

        {/* 7. PRAXISPROJEKTE (DOPPEL-PORTFOLIO) with Simulator inside! */}
        {activeTab === "projects" && (
          <section id="sect-projects" className="space-y-12 animate-fade-in">
            {/* Project Switcher Selector Tabs */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex bg-slate-900 border border-slate-850 p-1.5 rounded-2xl shadow-xl">
                <button
                  onClick={() => setSelectedProject("smartgastro")}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                    selectedProject === "smartgastro"
                      ? "bg-teal-500 text-slate-950 shadow-md font-extrabold"
                      : "text-slate-400 hover:text-slate-250 hover:bg-slate-850/50"
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Prognose-KI (SmartGastro.ai)</span>
                </button>
                <button
                  onClick={() => setSelectedProject("smartumbrella")}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                    selectedProject === "smartumbrella"
                      ? "bg-teal-500 text-slate-950 shadow-md font-extrabold"
                      : "text-slate-400 hover:text-slate-250 hover:bg-slate-850/50"
                  }`}
                >
                  <Umbrella className="w-4 h-4" />
                  <span>IoT Innovation (IPSO Smart-Regenschirm)</span>
                </button>
              </div>
            </div>

            {selectedProject === "smartgastro" ? (
              <div className="space-y-12 animate-fade-in">
            {/* Project Header card */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-950 border border-slate-850 space-y-6 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono font-bold text-teal-400 uppercase tracking-widest">
                  Meister-Praxisarbeit 2026
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{SmartGastroProject.title}</h2>
                <h3 className="text-lg text-teal-300 font-semibold font-serif italic mt-0">{SmartGastroProject.subTitle}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
                <div className="text-left font-mono">
                  <p className="text-[10px] text-slate-500">PROJEKTBEGLEITER:</p>
                  <p className="text-xs text-slate-300 font-sans mt-0.5">Sabine Jungk, Begleitdozentin HKB</p>
                </div>
                <div className="text-left font-mono">
                  <p className="text-[10px] text-slate-500">SCHWERPUNKTMETHODEN:</p>
                  <p className="text-xs text-slate-300 font-sans mt-0.5">Ishikawa, MoSCoW, TCO, Business Case</p>
                </div>
                <div className="text-left font-mono">
                  <p className="text-[10px] text-slate-500">ABGABETERMIN EIDG. FA:</p>
                  <p className="text-xs text-slate-300 font-sans mt-0.5">22. August 2026 (Staatliche Prüfung)</p>
                </div>
              </div>
            </div>

            {/* Problem vs. Solution comparative card block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Problem container */}
              <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/30 space-y-4">
                <div className="flex items-center gap-2.5 text-red-400 font-extrabold text-lg">
                  <Trash2 className="w-5 h-5 shrink-0" />
                  <h4>Das tägliche gastronomische Dilemma</h4>
                </div>
                <ul className="text-slate-300 text-sm space-y-3 pl-4 list-disc leading-relaxed">
                  {SmartGastroProject.problem.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Solution container */}
              <div className="p-6 rounded-2xl bg-teal-950/20 border border-teal-900/30 space-y-4">
                <div className="flex items-center gap-2.5 text-teal-400 font-extrabold text-lg">
                  <Sparkles className="w-5 h-5 shrink-0" />
                  <h4>Die SmartGastro.ai System-Lösung</h4>
                </div>
                <ul className="text-slate-300 text-sm space-y-3 pl-4 list-disc leading-relaxed">
                  {SmartGastroProject.solution.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* SmartGastro BUSINESS CASE (ECONOMICS GRID) */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-teal-400" />
                <span>Business Case & ROI (Restaurant Löwenburg, Lienz)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Panel 1: Ausgangslage (Pain Points) */}
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-900 space-y-4">
                  <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono border-b border-slate-800 pb-2">Status Quo (Ausgangslage)</h4>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Jahresumsatz (gemessen):</span>
                      <span className="text-slate-200">CHF 800'000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Wareneinsatz (33%):</span>
                      <span className="text-slate-200">CHF 264'000</span>
                    </div>
                    <div className="font-semibold text-red-400 mt-2">Versteckte Verluste:</div>
                    <div className="flex justify-between text-[11px] text-slate-350">
                      <span>• Food Waste (8% COGS):</span>
                      <span>CHF 18'200 / J.</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-350">
                      <span>• Out-of-Stock (-1% Ums.):</span>
                      <span>CHF 8'000 / J.</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-350">
                      <span>• Stress & Mehraufwand:</span>
                      <span>CHF 11'640 / J.</span>
                    </div>
                  </div>
                </div>

                {/* Panel 2: Einsparungen (Benefit) */}
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-900 space-y-4">
                  <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono border-b border-slate-800 pb-2">Effekt mit SmartGastro.ai</h4>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Reduktion Food Waste (-50%):</span>
                      <span>+ CHF 9'000</span>
                    </div>
                    <div className="flex justify-between text-emerald-400">
                      <span>Weniger Out-of-Stock (+0.5%):</span>
                      <span>+ CHF 3'750</span>
                    </div>
                    <div className="flex justify-between text-emerald-400">
                      <span>Zeitersparnis (30 Min/T):</span>
                      <span>+ CHF 2'875</span>
                    </div>
                    <div className="flex justify-between text-emerald-400">
                      <span>Reduktion Überstunden/Stress:</span>
                      <span>+ CHF 3'125</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-800 pt-2 font-bold text-white">
                      <span>Gesamter Jahresnutzen:</span>
                      <span>CHF 18'750</span>
                    </div>
                  </div>
                </div>

                {/* Panel 3: TCO invest metrics */}
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-900 space-y-4">
                  <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono border-b border-slate-800 pb-2">Investitions-Fakten</h4>
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Einmal-Aufbau / Setup:</span>
                      <span className="text-slate-200">CHF 7'500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">SaaS Lizenz (Lizenz/Mt):</span>
                      <span className="text-slate-200">CHF 400</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-500">Gesamtkosten (Jahr 1):</span>
                      <span className="text-slate-205 text-white font-bold">CHF 12'300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-semibold">ROI (Jahr 1):</span>
                      <span className="text-teal-400 font-extrabold">{SmartGastroProject.businessCase.metrics.roiYear1}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-semibold">Break-Even Point:</span>
                      <span className="text-teal-400 font-extrabold">{SmartGastroProject.businessCase.metrics.breakeven}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* LIVE DYNAMIC SYSTEM SIMULATOR */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-8 animate-fade-in">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LayoutDashboard className="w-5 h-5 text-teal-400" />
                  <h3 className="font-extrabold text-lg text-white">INTERAKTIVES SMARTGASTRO.AI FORECAST-STUDIO (PROTOTYP V3.3)</h3>
                </div>
                <p className="text-xs text-slate-405 text-slate-400 leading-relaxed">
                  Passen Sie die äusseren Einflussfaktoren wie Wetter und das lokale Markt-Wochenende an. Simulieren Sie anschliessend die serverbasierte Inferenz, um zu sehen, wie sich der Zeitreihen-Forecast proaktiv anpasst und unproduktiven Food Waste vermeidet.
                </p>
              </div>

              {/* Control board widgets */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-950 p-5 rounded-xl border border-slate-850">
                {/* Selector 1: Weather settings */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider block">1. Wettervorhersage</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Sonnig", "Regnerisch", "Heiss"].map(w => (
                      <button
                        key={w}
                        onClick={() => {
                          setSimWeather(w);
                          setSimCompleted(false);
                        }}
                        className={`py-2 rounded text-xs font-semibold tracking-wide transition-all ${
                          simWeather === w
                            ? "bg-teal-500 text-slate-950"
                            : "bg-slate-900 text-slate-300 border border-slate-850 hover:bg-slate-850"
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selector 2: Event status */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider block">2. Stadt-Event (Bauernmarkt)</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSimEvent(true);
                        setSimCompleted(false);
                      }}
                      className={`flex-1 py-2 rounded text-xs font-semibold transition-all ${
                        simEvent
                          ? "bg-teal-500 text-slate-950"
                          : "bg-slate-900 text-slate-300 border border-slate-850"
                      }`}
                    >
                      Aktiv (+15%)
                    </button>
                    <button
                      onClick={() => {
                        setSimEvent(false);
                        setSimCompleted(false);
                      }}
                      className={`flex-1 py-1.5 py-2 rounded text-xs font-semibold transition-all ${
                        !simEvent
                          ? "bg-teal-505 bg-teal-500 text-slate-950 font-bold"
                          : "bg-slate-900 text-slate-300 border border-slate-850"
                      }`}
                    >
                      Deaktiv
                    </button>
                  </div>
                </div>

                {/* Simulation Button */}
                <div className="flex items-end">
                  <button
                    onClick={runGastroSimulation}
                    disabled={simulating}
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 font-extrabold text-slate-950 text-sm hover:opacity-90 active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    <RefreshCw className={`w-4 h-4 text-slate-950 ${simulating ? "animate-spin" : ""}`} />
                    <span>{simulating ? "Inferenz-Modell rechnet..." : "AI-Modell synchronisieren"}</span>
                  </button>
                </div>
              </div>

              {/* Log outputs stream */}
              {simulating || simCompleted ? (
                <div className="bg-slate-950 rounded-xl p-4 border border-slate-850 space-y-2.5 max-h-56 overflow-y-auto">
                  <h4 className="text-[10px] text-slate-500 font-bold font-mono uppercase tracking-wider">Modell-Pipeline Protokolle (Self-Learning Loop)</h4>
                  {simulating ? (
                    <p className="text-xs text-slate-400 animate-pulse font-mono flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                      Modell (XGBoost) lädt historische CSV-Kassendaten aus WaiterOne REST-API...
                    </p>
                  ) : (
                    <div className="space-y-1.5 font-mono text-[11px] text-slate-350">
                      {simFeedbackLog.map((log, i) => (
                        <p key={i} className="flex gap-2 leading-relaxed">
                          <span className="text-teal-400 shrink-0">&gt;</span>
                          <span>{log}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}

              {/* Forecast tables results */}
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-slate-950 p-4 rounded-xl border border-slate-850 text-xs">
                  <span className="font-mono text-slate-400">AKTIVEN FORECAST-TABELLE (7 TAGE GASTRO-VORSCHAU):</span>
                  <span className="font-bold text-teal-400 uppercase font-mono">Modell-Status: {simCompleted ? "Synchronisiert" : "Standardwerte"}</span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-850">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="bg-slate-950 text-slate-400 border-b border-slate-850 font-bold">
                        <th className="p-3">Wochentag</th>
                        <th className="p-3">Mise-en-Place Gericht</th>
                        <th className="p-3 text-right">Forecast (Menge)</th>
                        <th className="p-3 text-right">Ist-Abverkauf</th>
                        <th className="p-3 text-right">KI-Delta</th>
                        <th className="p-3">Wetterlage</th>
                        <th className="p-3">Kontext-Faktor</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-850 text-slate-300">
                      {simData.map((item, index) => (
                        <tr key={index} className="hover:bg-slate-950/45 transition-colors">
                          <td className="p-3 font-semibold text-white">{item.date}</td>
                          <td className="p-3 text-teal-300">{item.dish}</td>
                          <td className="p-3 text-right font-extrabold text-amber-400">{item.forecast} Portionen</td>
                          <td className="p-3 text-right text-slate-200">{item.actual}</td>
                          <td className={`p-3 text-right font-bold ${
                            item.delta <= 0 && item.delta >= -6 
                              ? "text-emerald-400" 
                              : "text-red-400"
                          }`}>
                            {item.delta > 0 ? `+${item.delta}` : item.delta}
                          </td>
                          <td className="p-3 text-[11px] text-slate-400">{item.weather}</td>
                          <td className="p-3 text-[11px] font-sans text-slate-400">{item.event}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Dashboard Bottom Summary */}
                <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-950/40 text-xs text-emerald-400 font-sans leading-relaxed">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <strong>Self-Learning Effekt:</strong> Abendliche Delta-Auswertungen werden verschlüsselt gespeichert und wöchentlich für das automatische Retraining herangezogen. Jedes Override lernt das Modell, bis es optimal auf die Gegebenheiten des Schweizer Betriebs geeicht ist!
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-12 animate-fade-in text-left">
                {/* Project Header card for Smart-Regenschirm */}
                <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-950 border border-slate-850 space-y-6 relative overflow-hidden text-left">
                  <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
                  
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono font-bold text-teal-400 uppercase tracking-widest">
                      Investitions- & Entwicklungsprojekt (IoT-Produktinnovation)
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{SmartUmbrellaProject.title}</h2>
                    <h3 className="text-lg text-teal-300 font-semibold font-serif italic mt-0">
                      {SmartUmbrellaProject.subTitle} — <span className="text-slate-400 font-sans text-sm font-medium not-italic">{SmartUmbrellaProject.model}</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
                    <div className="text-left font-mono">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">PROJEKTPARTNER:</p>
                      <p className="text-xs text-slate-300 font-sans mt-0.5">{SmartUmbrellaProject.creators}</p>
                    </div>
                    <div className="text-left font-mono">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">HAUPT-SCHWERPUNKT:</p>
                      <p className="text-xs text-slate-300 font-sans mt-0.5">IoT Hard- und Software Symbiose, Sensorik & Beacons</p>
                    </div>
                    <div className="text-left font-mono">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">STATUS:</p>
                      <span className="text-xs text-emerald-400 font-sans mt-0.5 font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Rapid Prototyping & Fertiges Datenblatt</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Intro & Specs Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
                  
                  {/* Box 1: Technical specs table */}
                  <div className="lg:col-span-2 bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-6">
                    <div className="flex items-center gap-2.5 text-teal-400 font-extrabold text-lg">
                      <Wrench className="w-5 h-5 text-teal-400" />
                      <h4>Technische Spezifikationen</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                      {Object.entries(SmartUmbrellaProject.specs).map(([key, value]) => (
                        <div key={key} className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 hover:bg-slate-900/70 transition-colors">
                          <p className="text-slate-500 uppercase tracking-tight text-[10px] font-bold">
                            {key === "modell" ? "Modell" : 
                             key === "artikelnummer" ? "Artikelnummer" : 
                             key === "spannweite" ? "Spannweite" : 
                             key === "packmass" ? "Packmaß" : 
                             key === "gewicht" ? "Gewicht" : 
                             key === "gerippe" ? "Gerippe" : 
                             key === "griff" ? "Griff" : 
                             key === "stoffbezug" ? "Stoffbezug" : 
                             key === "wassersaeule" ? "Wassersäule" : 
                             key === "uvSchutz" ? "UV-Schutz" : 
                             key === "windbestaendigkeit" ? "Windbeständigkeit" : 
                             key === "oeffnung" ? "Öffnungsmechanismus" : key}:
                          </p>
                          <p className="text-slate-200 font-semibold mt-1 font-sans text-sm leading-snug">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Box 2: Lieferumfang & Service */}
                  <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2.5 text-teal-400 font-extrabold text-lg">
                        <Compass className="w-5 h-5 text-teal-400 font-bold" />
                        <h4>Lieferumfang & Packliste</h4>
                      </div>
                      <ul className="text-slate-300 text-xs space-y-3 pl-4 list-disc leading-relaxed font-sans">
                        {SmartUmbrellaProject.scope.map((item, i) => (
                          <li key={i} className="hover:text-white transition-colors">{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-slate-850 pt-4 space-y-2 text-[11px] text-slate-400 font-sans leading-relaxed">
                      <div className="font-bold text-white uppercase text-[9px] tracking-wider font-mono">Garantie & Serviceleistungen:</div>
                      <p className="leading-snug">🛡️ {SmartUmbrellaProject.warranty.mechanics}</p>
                      <p className="leading-snug">🔌 {SmartUmbrellaProject.warranty.electronics}</p>
                      <p className="leading-snug">📞 {SmartUmbrellaProject.warranty.support}</p>
                      <p className="leading-snug">📲 {SmartUmbrellaProject.warranty.software}</p>
                    </div>
                  </div>

                </div>

                {/* Smart-Features & Highlights Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  
                  {/* Left Panel: Features list */}
                  <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-6">
                    <div className="flex items-center gap-2.5 text-teal-400 font-extrabold text-lg">
                      <Bluetooth className="w-5 h-5 text-teal-400" />
                      <h4>Smart-Features & Technologie</h4>
                    </div>
                    <div className="space-y-4">
                      {SmartUmbrellaProject.features.map((feat, i) => (
                        <div key={i} className="flex gap-3 items-start hover:bg-slate-950/20 p-3 rounded-xl transition-all">
                          <div className="w-8 h-8 rounded-lg bg-teal-500/10 shrink-0 flex items-center justify-center text-teal-400 text-xs font-bold font-mono border border-teal-500/20">
                            0{i + 1}
                          </div>
                          <div>
                            <h5 className="font-bold text-white text-sm">{feat.title}</h5>
                            <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{feat.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Panel: Highlights bullets with icons */}
                  <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-6">
                    <div className="flex items-center gap-2.5 text-teal-400 font-extrabold text-lg">
                      <Sparkles className="w-5 h-5 text-teal-400" />
                      <h4>Weitere Features & Highlights</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {SmartUmbrellaProject.highlights.map((high, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-slate-950 text-xs text-slate-300 leading-relaxed font-sans flex items-start gap-3 border border-slate-850/65">
                          <span className="block w-2 h-2 rounded-full bg-teal-500 mt-1.5 shrink-0 animate-pulse"></span>
                          <span>{high}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* INTERACTIVE IPSO IOT DEVICE STUDIO */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-8 animate-fade-in text-left">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-teal-400" />
                      <h3 className="font-extrabold text-lg text-white">INTERAKTIVES IPSO CONNECT IoT STUDIO (PROTOTYP V2.0)</h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Steuern Sie den IPSO Premium Smart-Regenschirm live aus der virtuellen App-Zentrale. Simulieren Sie Verbindungsausschläge, lösen Sie akustische Nahbereichssuchen aus, laden Sie den integrierten Li-Ion-Akku oder erproben Sie den proaktiven Wetter-Alarm und die Diebstahlsicherung.
                    </p>
                  </div>

                  {/* Connection, Battery and Search controls */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-950 p-5 rounded-xl border border-slate-850">
                    
                    {/* 1. Connection state controller */}
                    <div className="space-y-3.5">
                      <label className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider block">1. Bluetooth 5.2 Status</label>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between p-3 rounded bg-slate-900 border border-slate-850">
                          <span className="text-xs font-mono text-slate-400">Verbindung:</span>
                          <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded flex items-center gap-1.5 ${umbrellaConnected ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 animate-pulse" : "bg-red-500/10 text-red-400 border border-red-500/21"}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${umbrellaConnected ? "bg-emerald-400" : "bg-red-400"}`}></span>
                            <span>{umbrellaConnected ? "Online" : "Offline / Standby"}</span>
                          </span>
                        </div>
                        <button
                          onClick={toggleUmbrellaConnection}
                          className={`w-full py-2 rounded text-xs font-extrabold tracking-wide transition-all cursor-pointer ${
                            umbrellaConnected 
                              ? "bg-red-500/10 hover:bg-red-500/25 text-red-400 border border-red-500/30" 
                              : "bg-teal-500 text-slate-950 hover:opacity-90 font-bold"
                          }`}
                        >
                          {umbrellaConnected ? "Bluetooth trennen" : "Bluetooth koppeln"}
                        </button>
                      </div>
                    </div>

                    {/* 2. Battery status display */}
                    <div className="space-y-3.5">
                      <label className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider block">2. Smart Battery (Akku)</label>
                      <div className="flex flex-col gap-3">
                        <div className="space-y-1.5 p-3 rounded bg-slate-900 border border-slate-850">
                          <div className="flex justify-between items-center text-xs font-mono text-slate-350">
                            <span>Akkuladung:</span>
                            <span className="font-bold text-teal-400">{umbrellaBattery}%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-930 bg-slate-900 rounded-full overflow-hidden relative">
                            <div 
                              className={`h-full rounded-full transition-all duration-500 ${charging ? "bg-amber-400 animate-pulse" : umbrellaBattery > 20 ? "bg-teal-400" : "bg-red-500"}`} 
                              style={{ width: `${umbrellaBattery}%` }}
                            ></div>
                          </div>
                        </div>
                        <button
                          onClick={chargeUmbrellaBattery}
                          disabled={charging || umbrellaBattery === 100}
                          className="w-full py-2 rounded bg-slate-900 text-slate-300 border border-slate-850 hover:bg-slate-850 font-semibold text-xs disabled:opacity-40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Battery className={`w-4 h-4 text-emerald-400 ${charging ? "animate-pulse" : ""}`} />
                          <span>{charging ? "Akku lädt über USB-C..." : umbrellaBattery === 100 ? "Akku geladen (100%)" : "Laden simulieren (USB-C)"}</span>
                        </button>
                      </div>
                    </div>

                    {/* 3. Locator and Find My Umbrella controller */}
                    <div className="space-y-3.5">
                      <label className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider block">3. Regenschirm Orten</label>
                      <div className="flex flex-col gap-3">
                        <div className={`p-3 rounded border transition-all text-center flex items-center justify-center gap-2 h-11 ${findTimerActive ? "bg-amber-500/10 border-amber-500/40 animate-pulse" : "bg-slate-900 border-slate-850"}`}>
                          {findTimerActive ? (
                            <>
                              <Volume2 className="w-4 h-4 text-amber-400 animate-bounce" />
                              <span className="text-xs font-mono text-amber-300 font-extrabold uppercase animate-pulse">🔊 BEEP! LED BLINKT!</span>
                            </>
                          ) : (
                            <>
                              <Compass className="w-4 h-4 text-slate-500" />
                              <span className="text-xs font-mono text-slate-400">Bereit für Nahbereichssuche</span>
                            </>
                          )}
                        </div>
                        <button
                          onClick={runFindMyUmbrella}
                          disabled={findTimerActive || !umbrellaConnected}
                          className="w-full py-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:opacity-90 active:scale-95 text-slate-950 font-bold text-xs rounded transition-all flex items-center justify-center gap-1.5 disabled:opacity-30 cursor-pointer"
                        >
                          <Volume2 className="w-4 h-4 text-slate-950" />
                          <span>Find My Umbrella auslösen</span>
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Advanced IoT Incident Simulation triggers */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">4. IoT Sensoren vor Ort simulieren (Unglücke & Events)</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <button
                        onClick={simulateUmbrellaTheft}
                        className={`p-4 rounded-xl border text-left font-sans transition-all space-y-1.5 cursor-pointer ${
                          simulatedIncident === "Bewegung" 
                            ? "bg-red-500/15 border-red-500/40 text-white shadow font-bold" 
                            : "bg-slate-950 border-slate-900 text-slate-300 hover:border-slate-850"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wide">Diebstahl-Alarm (Gyrosensor)</span>
                          <ShieldAlert className="w-4 h-4 text-red-400" />
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-light">Gyroskop meldet unerlaubte Lageänderung während du einkaufst oder isst.</p>
                      </button>

                      <button
                        onClick={simulateUmbrellaGeofencing}
                        className={`p-4 rounded-xl border text-left font-sans transition-all space-y-1.5 cursor-pointer ${
                          simulatedIncident === "Geofencing" 
                            ? "bg-orange-500/15 border-orange-500/40 text-white shadow font-bold" 
                            : "bg-slate-950 border-slate-900 text-slate-300 hover:border-slate-850"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wide">Geofencing Out-of-Range</span>
                          <Bell className="w-4 h-4 text-orange-400" />
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-light">RSSI sinkt abrupt ab: Push-Meldung warnt dich beim Verlassen des Lokals.</p>
                      </button>

                      <button
                        onClick={simulateUmbrellaWeather}
                        className={`p-4 rounded-xl border text-left font-sans transition-all space-y-1.5 cursor-pointer ${
                          simulatedIncident === "Wetter" 
                            ? "bg-blue-500/15 border-blue-500/40 text-white shadow font-bold" 
                            : "bg-slate-950 border-slate-900 text-slate-300 hover:border-slate-850"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wide">Proaktiver Wetter-Alarm</span>
                          <CloudRain className="w-4 h-4 text-blue-400 font-bold" />
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-light">App syncht mit MeteoSchweiz GPS-Ort: Sendet Erinnerung vor Wolkenbruch.</p>
                      </button>
                    </div>
                  </div>

                  {/* Real-time system log stream */}
                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-850 space-y-2.5 max-h-56 overflow-y-auto font-mono text-left">
                    <h4 className="text-[10px] text-slate-500 font-bold font-mono uppercase tracking-wider">IPSO-Regenschirm Systemprotokolle (Echtzeit-Inferenz)</h4>
                    <div className="space-y-1.5 font-mono text-[11px] text-slate-300">
                      {umbrellaLogs.map((log, i) => (
                        <p key={i} className="flex gap-2 leading-relaxed font-mono">
                          <span className="text-teal-400 shrink-0">&gt;</span>
                          <span>{log}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Usage Statistic Widget */}
                  <div className="space-y-4 font-mono text-left">
                    <div className="flex justify-between items-center bg-slate-950 p-4 rounded-xl border border-slate-850 text-xs">
                      <span className="font-mono text-slate-400">IPSO App telemetry & statistiken:</span>
                      <span className="font-bold text-teal-400 uppercase font-mono">Status: Aktiv</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-slate-950/40 p-5 rounded-2xl border border-slate-850 font-mono text-xs">
                      <div className="space-y-1 font-mono">
                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Öffnungszyklen (App Tracker):</span>
                        <p className="text-xl font-bold font-sans text-teal-300">247 Mal geöffnet</p>
                        <p className="text-[10px] text-slate-500 leading-normal">Zur Belastungs-Kalibrierung der Carbon-Streben</p>
                      </div>
                      <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-800 sm:pt-0 sm:pl-6 pt-4 font-mono">
                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">VERHINDERTE REGENTAGE:</span>
                        <p className="text-xl font-bold font-sans text-amber-400">48 Tage trocken</p>
                        <p className="text-[10px] text-slate-500 leading-normal">Anzahl Tage, an denen du völlig trocken nach Hause kamst</p>
                      </div>
                      <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-800 sm:pt-0 sm:pl-6 pt-4 font-mono">
                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">LETZTER GPS-LOCATION SYNC:</span>
                        <p className="text-sm font-bold text-slate-200 mt-1 font-sans">47.4245° N, 9.3767° O</p>
                        <p className="text-[10px] text-slate-500 leading-normal">St. Gallen, Schweiz (Letzte bekannte Position)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* MONADS CUSTOM TAB */}
        {activeTab === "monads" && (
          <section id="sect-monads" className="space-y-16 animate-fade-in">
            {/* Header / Intro */}
            <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-850/80 shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_60%)] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.1),transparent_60%)] pointer-events-none"></div>
              
              <div className="max-w-3xl space-y-6 relative z-10 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 border border-teal-500/30 rounded-full text-xs font-mono text-teal-300 font-semibold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  <span>Monads Special Edition</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Gemeinsam die <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">AI-Domain</span> bei Monads aufbauen
                </h2>
                
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  {MonadsValues.intro}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-850 flex items-center gap-2 text-xs">
                    <Users className="w-4 h-4 text-teal-400 shrink-0" />
                    <span className="text-slate-300 font-mono">100% Gelebte Du-Kultur</span>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-850 flex items-center gap-2 text-xs">
                    <Brain className="w-4 h-4 text-teal-400 shrink-0" />
                    <span className="text-slate-300 font-mono">KI-Wissensmanagement (F6)</span>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-850 flex items-center gap-2 text-xs">
                    <Cpu className="w-4 h-4 text-teal-400 shrink-0" />
                    <span className="text-slate-300 font-mono">Claude / Codex / Gemini-Power-User</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why I Fit / Match Grid */}
            <div className="space-y-8">
              <div className="space-y-2 text-center">
                <h3 className="text-2xl font-extrabold text-white">Das perfekte Match für Monads</h3>
                <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                  Wie mein Profil und meine Arbeitsweise haargenau auf eure Anforderungen und Kultur einzahlen.
                </p>
                <div className="h-0.5 w-12 bg-teal-500 mx-auto mt-4 rounded"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MonadsValues.items.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-850 hover:border-teal-500/30 transition-all hover:bg-slate-900/80 flex flex-col justify-between space-y-6 group">
                    <div className="space-y-3.5">
                      <div className="h-10 w-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold font-mono">
                        0{idx + 1}
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors uppercase font-mono tracking-tight text-left">
                        {item.title}
                      </h4>
                      <p className="text-xs text-teal-400 font-semibold uppercase tracking-wider font-mono text-left bg-teal-500/5 py-1 px-2.5 rounded inline-block">
                        {item.concept}
                      </p>
                      <p className="text-sm text-slate-350 leading-relaxed text-left pt-2 font-light">
                        {item.description}
                      </p>
                    </div>

                    <div className="border-t border-slate-850 pt-4 text-left">
                      <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block mb-1">Unser Hebel für Kunden:</p>
                      <p className="text-xs text-white leading-relaxed font-semibold">
                        {item.howWeWin}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Cultural card block: Als Team weiterkommen */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-950/20 to-blue-950/20 border border-teal-500/25 flex flex-col justify-between space-y-6 md:col-span-2 lg:col-span-1 shadow-lg">
                  <div className="space-y-3.5 text-left">
                    <Users className="w-8 h-8 text-teal-400 animate-pulse" />
                    <h4 className="text-lg font-bold text-white uppercase font-mono tracking-tight">
                      Unser Teamspirit & die Du-Kultur
                    </h4>
                    <p className="text-xs text-teal-300 font-semibold uppercase tracking-wider font-mono bg-teal-500/10 py-1 px-2.5 rounded inline-block">
                      Gemeinsam ans Ziel
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      „Als Team kommen wir gemeinsam weiter.“ Dieser Satz beschreibt meine tiefste Überzeugung. Ich stehe für flache Hierarchien, offene Ohren und gegenseitiges Empowerment. Ich gestalte die AI-Domain nicht als einsamer Wolf, sondern binde das gesamte Monads-Team aktiv ein und teile mein Wissen bedingungslos mit euch und unseren Kunden.
                    </p>
                  </div>

                  <div className="bg-slate-950/80 p-4 rounded-xl border border-teal-500/20">
                    <p className="text-[10px] text-teal-400 font-mono uppercase tracking-wider font-semibold">Thomas&apos; Credo:</p>
                    <p className="text-xs text-slate-300 mt-1 italic font-serif">
                      &quot;Keine Elfenbeintürme. Wissen teilen, Kundenteams befähigen und Erfolge gemeinsam als Team feiern!&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Workflow simulation */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-850 space-y-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none"></div>
              
              <div className="space-y-2 text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2.5">
                  <Code className="w-6 h-6 text-teal-400" />
                  <span>Mein AI-Arbeits-Workflow & Praxisnachweis (Interaktiv)</span>
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                  Monads verlangt keinen staubigen Lebenslauf, sondern einen echten Praxisworkflow. Wähle unten einen meiner 4 standardisierten Projektschritte aus, um live zu sehen, wie ich echte geschäftliche Hebel mit AI-Technologie in Rekordzeit entfessele.
                </p>
              </div>

              {/* Steps buttons horizontal */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-950 p-2.5 rounded-xl border border-slate-850">
                {MonadsValues.workflowSteps.map((ws, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMonadsStep(index)}
                    className={`p-3 rounded-lg text-left transition-all ${
                      activeMonadsStep === index
                        ? "bg-gradient-to-r from-teal-500/20 to-blue-600/10 border border-teal-500/40 text-white"
                        : "bg-slate-900/50 hover:bg-slate-900 text-slate-400 border border-slate-900"
                    }`}
                  >
                    <span className="text-[10px] font-mono block text-teal-400 font-bold mb-1">{ws.step}</span>
                    <span className="text-xs font-bold font-sans block">{ws.title}</span>
                  </button>
                ))}
              </div>

              {/* Steps outputs */}
              <div className="bg-slate-950 rounded-2xl border border-slate-850 p-6 md:p-8 text-left space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-850 pb-5">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 font-bold uppercase tracking-wider">
                      Schritt {activeMonadsStep + 1} von 4
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1.5 font-sans">
                      {MonadsValues.workflowSteps[activeMonadsStep].title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 max-w-md md:text-right font-light leading-relaxed">
                    {MonadsValues.workflowSteps[activeMonadsStep].desc}
                  </p>
                </div>

                {/* Sub contents based on step */}
                {activeMonadsStep === 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in text-xs font-sans">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-2.5">
                      <h5 className="font-bold text-white text-xs uppercase font-mono tracking-wider border-b border-slate-850 pb-1.5 text-teal-400">1. Problem-Scouting (Vor Ort)</h5>
                      <p className="text-slate-300 leading-relaxed">
                        Ich stelle mich beim Kunden direkt an die Rampe, in die Küche oder ins Büro. Ich stelle unbequeme Fragen zur manuellen Belastung, Fehlplanungsfaktoren und suche Hebel, die unmittelbar Geld verbrennen (z.B. 100 kg weggeworfenes Gemüse wöchentlich).
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-2.5">
                      <h5 className="font-bold text-white text-xs uppercase font-mono tracking-wider border-b border-slate-850 pb-1.5 text-teal-400">2. Ishikawa Brainstorming</h5>
                      <p className="text-slate-300 leading-relaxed">
                        Ich strukturiere Fehlerquellen sauber nach Mensch, Maschine, Methode, Umwelt und Material. Für SmartGastro zeigte sich: Wetter und ungenutzte historische Kassenarchive waren die blinden Flecken der Betriebsleitung.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-2.5">
                      <h5 className="font-bold text-white text-xs uppercase font-mono tracking-wider border-b border-slate-850 pb-1.5 text-teal-400">3. Business Case & ROI</h5>
                      <p className="text-slate-300 leading-relaxed">
                        Wir rechnen! Bevor wir eine Zeile Code schreiben, quantifiziere ich den potenziellen Nutzen des Kunden. Bei SmartGastro.ai ermittelte ich einen Hebel von CHF 18&apos;750 Nettoersparnis pro Jahr bei minimalen Onboarding-Kosten.
                      </p>
                    </div>
                  </div>
                )}

                {activeMonadsStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 animate-fade-in">
                    <div className="md:col-span-5 space-y-4 text-xs font-sans">
                      <h5 className="text-xs uppercase font-mono tracking-wider text-teal-400 font-bold border-b border-slate-850 pb-1.5">Schnittstellen & Daten-Compliance</h5>
                      <p className="text-slate-300 leading-relaxed font-light font-sans">
                        Ich konzipiere moderne Cloud-Architekturen pragmatisch und absolut nDSG-konform (Datenschutz der Schweiz). Daten verbleiben auf sicheren Servern vor Ort oder in Schweizer Rechenzentren (AWS Zürich).
                      </p>
                      
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-850 space-y-2.5">
                        <p className="font-bold text-white text-[11px] uppercase font-mono tracking-wide">Architektur-Highlights:</p>
                        <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-400 text-[11px]">
                          <li>Automatische CSV/REST Schnittstelle zu WaiterOne POS Kassensystemen</li>
                          <li>Open-Data API-Calls zu MeteoSchweiz für historische / zukünftige Wettervektoren</li>
                          <li>Verschlüsselte PostgreSQL Cloud-Instanz (Schweiz)</li>
                          <li>SaaS Dashboard, das auf jedem Küchenchef-Tablet flüssig läuft (React + Tailwind)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="md:col-span-7 bg-slate-900 p-4 rounded-2xl border border-slate-850 flex flex-col justify-center">
                      <div className="space-y-4 max-w-md mx-auto w-full text-[10px] font-mono">
                        <div className="flex justify-between items-center bg-slate-950 p-2.5 rounded-lg border border-slate-850">
                          <span className="text-teal-400">&gt; WaiterOne POS Kassa API</span>
                          <span className="text-slate-500">Transaktions-Daten</span>
                        </div>
                        <div className="text-center py-1 text-teal-500/60 font-bold">⬇ ETL-Skript (Täglich 06:00)</div>
                        <div className="flex justify-between items-center bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-blue-400">&gt; MeteoSchweiz API + Events</span>
                          <span className="text-slate-500">Wetter/Kontext Vektor</span>
                        </div>
                        <div className="text-center py-1 text-blue-500/60 font-bold">⬇ Feature-Engineering & Transformation</div>
                        <div className="flex justify-between items-center bg-teal-500/10 p-3 rounded-lg border border-teal-500/30 text-xs">
                          <span className="text-teal-300 font-extrabold">🚀 XGBoost / Gemini Inferenz</span>
                          <span className="text-slate-200 font-bold">Ergebnis: Forecast Portionen</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeMonadsStep === 2 && (
                  <div className="space-y-4 animate-fade-in text-left">
                    <p className="text-xs text-slate-300 font-light max-w-2xl font-sans">
                      Ich labbere nicht, ich programmiere! Hier ist das Herzstück meiner realisierten API-Inferenz für SmartGastro.ai. Mit Vibe Coding implementiere ich sauberen, typensicheren TypeScript-Code in Rekordzeit für das Frontend und Backend:
                    </p>
                    
                    <div className="rounded-xl overflow-hidden border border-slate-800 text-xs font-mono">
                      <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                          <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                          <span className="text-[10px] text-slate-500 ml-2">src/api/forecastEngine.ts</span>
                        </div>
                        <span className="text-[10px] text-slate-500 bg-slate-950 px-2 py-0.5 rounded">TypeScript</span>
                      </div>
                      <div className="bg-slate-950 p-4 space-y-1 block leading-relaxed overflow-x-auto text-[11px] text-slate-300 max-h-64 scrollbar-thin">
                        <p><span className="text-blue-400">import</span> &#123; GoogleGenAI &#125; <span className="text-blue-400">from</span> <span className="text-emerald-300">&quot;@google/genai&quot;</span>;</p>
                        <p><span className="text-blue-400">import</span> &#123; db &#125; <span className="text-blue-400">from</span> <span className="text-emerald-300">&quot;../lib/database&quot;</span>;</p>
                        <p>&nbsp;</p>
                        <p><span className="text-blue-400">export async function</span> <span className="text-yellow-400">generateSmartForecast</span>(dishId: <span className="text-teal-300">string</span>, weatherFactor: <span className="text-teal-300">string</span>) &#123;</p>
                        <p>&nbsp;&nbsp;<span className="text-slate-500">// 1. Hole Verkaufshistorie der letzten 4 Wochen</span></p>
                        <p>&nbsp;&nbsp;<span className="text-blue-400">const</span> historicalSales = <span className="text-blue-400">await</span> db.sales.<span className="text-yellow-400">findMany</span>(&#123; where: &#123; dishId &#125; &#125;);</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;&nbsp;<span className="text-slate-500">// 2. Lazy Initialisation der Google Gemini API</span></p>
                        <p>&nbsp;&nbsp;<span className="text-blue-400">const</span> ai = <span className="text-blue-400">new</span> <span className="text-yellow-400">GoogleGenAI</span>(&#123; apiKey: process.env.GEMINI_API_KEY &#125;);</p>
                        <p>&nbsp;&nbsp;</p>
                        <p>&nbsp;&nbsp;<span className="text-slate-500">// 3. RAG-Abfrage zur quantitativen Prädiktion</span></p>
                        <p>&nbsp;&nbsp;<span className="text-blue-400">const</span> prompt = <span className="text-emerald-300">`Analysiere Verkaufsdaten: $&#123;JSON.stringify(historicalSales)&#125;.</span></p>
                        <p><span className="text-emerald-300">&nbsp;&nbsp;&nbsp;&nbsp;Berechne den Forecast für Morgen bei Wetter: $&#123;weatherFactor&#125; und gib mir</span></p>
                        <p><span className="text-emerald-300">&nbsp;&nbsp;&nbsp;&nbsp;ausschliesslich eine JSON-Struktur zurück: &#123; forecastQty: number, accuracyConfidence: number &#125;`</span>;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;&nbsp;<span className="text-blue-400">const</span> response = <span className="text-blue-400">await</span> ai.models.<span className="text-yellow-400">generateContent</span>(&#123;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;model: <span className="text-emerald-300">&quot;gemini-3.5-flash&quot;</span>,</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;contents: prompt,</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;config: &#123; responseMimeType: <span className="text-emerald-300">&quot;application/json&quot;</span> &#125;</p>
                        <p>&nbsp;&nbsp;&#125;);</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;&nbsp;<span className="text-blue-400">return</span> JSON.<span className="text-yellow-400">parse</span>(response.text);</p>
                        <p>&#125;</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeMonadsStep === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in text-xs font-sans">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-3">
                      <h5 className="font-bold text-white text-xs uppercase font-mono tracking-wider border-b border-slate-850 pb-1.5 text-teal-400 flex items-center gap-1.5">
                        <Brain className="w-4 h-4" />
                        <span>F6-Wissensmanagement beim Kunden</span>
                      </h5>
                      <p className="text-slate-300 leading-relaxed font-light font-sans">
                        AI-Lösungen scheitern oft am User Adoption Gap: Die Mitarbeiter verstehen die Tools nicht oder verweigern die Handhabung. Meine Spezialisierung als AI Business Specialist zielt genau darauf ab (Handlungsfeld F6):
                      </p>
                      
                      <ul className="list-disc list-outside pl-4 space-y-1 text-slate-400 font-mono text-[11px]">
                        <li>Aufbau bedienerfreundlicher Wissensdatenbanken (RAG-basiert) für schnellen Onboarding-Zugriff</li>
                        <li>Entwicklung massgeschneiderter AI-Cockpits, die Ängste abbauen</li>
                        <li>Strukturierte Befähigungs-Konzepte: Mitarbeiter für Prompting ertüchtigen</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-3">
                      <h5 className="font-bold text-white text-xs uppercase font-mono tracking-wider border-b border-slate-850 pb-1.5 text-teal-400 flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        <span>Workshops & AI-Enablement</span>
                      </h5>
                      <p className="text-slate-300 leading-relaxed font-light font-sans">
                        Ich befähige Kundenteams, AI produktiv in ihren Alltag zu integrieren, ohne technologisches Kauderwelsch. Wir leben das „Du“ und lernen an echten Anwendungsfällen. 
                      </p>
                      
                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-850 font-sans">
                        <p className="text-[10px] text-teal-300 font-mono font-bold uppercase tracking-wider">Erprobtes Workshop-Format:</p>
                        <p className="text-slate-300 italic mt-1 leading-relaxed text-xs">
                          „Wir bringen Thomas&apos; Vibe Coding mit Claude, Cursor & ChatGPT direkt zu euren Key-Users. In 1 Tag bauen wir gemeinsam einen fiktiven Workflow-Assistenten live. Der Lerneffekt ist immens!“
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* HANDSHAKE BID TO ACTION */}
            <div className="rounded-3xl p-8 md:p-12 text-center bg-gradient-to-t from-slate-900 to-slate-950 border border-slate-850 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
              
              <div className="max-w-2xl mx-auto space-y-6">
                <Users className="w-12 h-12 text-teal-400 mx-auto animate-bounce" />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                  Bereit, gemeinsam die AI-Domain zu rocken?
                </h3>
                <p className="text-base text-slate-300 leading-relaxed font-light font-sans">
                  Ich suche keine verstaubten Agenturen, sondern ein dynamisches Team auf Augenhöhe, das meine Freiheit schätzt, von meinem Tatendrang lebt und mit mir echte Hebel bewegt. Lasst uns per Du über konkrete Visionen für Monads sprechen!
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                  <a
                    href="mailto:thomas.ballinari@pm.me?subject=AI%20Domain%20Lead%2520Monads"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-500 hover:opacity-95 font-bold text-slate-950 text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-500/10"
                  >
                    <Mail className="w-4 h-4 text-slate-950" />
                    <span>Lass uns treffen! (per Du)</span>
                  </a>
                  <button
                    onClick={() => setActiveTab("chatbot")}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    <span>Meinen Bot befragen</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 8. KI-CHATBOT */}
        {activeTab === "chatbot" && (
          <section id="sect-chatbot" className="space-y-8 animate-fade-in max-w-4xl mx-auto flex flex-col h-[700px]">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-white flex items-center gap-2.5">
                <Sparkles className="w-7 h-7 text-teal-400" />
                <span>Digitale Bewerbungs-Assistenz</span>
              </h2>
              <p className="text-slate-400 text-sm">
                Fragen Sie den digitalen Assistenten von Thomas Ballinari. Die Antworten basieren ausschliesslich auf der Wissensdatenbank von Zeugnissen, Lebensläufen und Projekten.
              </p>
            </div>

            {/* Main chatbot screen */}
            <div className="flex-grow bg-slate-900 rounded-2xl border border-slate-850 overflow-hidden flex flex-col h-full shadow-2xl relative">
              {/* Header */}
              <div className="bg-slate-950 border-b border-slate-850 px-6 py-4 flex items-center gap-3">
                <div id="chatbot-avatar-indicator" className="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></div>
                <div>
                  <h3 className="font-extrabold text-sm text-white">Thomas Ballinari (Digitaler Assistent)</h3>
                  <p className="text-[10px] text-teal-400 font-mono font-semibold uppercase tracking-wider">Faktenbasiert & nDSG konform gehostet</p>
                </div>
                {/* System rules lock */}
                <div className="ml-auto text-slate-500 text-xs flex items-center gap-1.5 font-mono">
                  <Lock className="w-3.5 h-3.5" />
                  <span>RAG Guard</span>
                </div>
              </div>

              {/* Message scroll container */}
              <div id="chat-messages-box" className="flex-grow p-6 overflow-y-auto space-y-4 max-h-[400px]">
                {messages.map((m, index) => (
                  <div
                    key={index}
                    id={`chat-msg-${index}`}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`p-4 rounded-2xl max-w-xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gradient-to-r from-teal-500 to-blue-600 text-slate-950 font-medium rounded-tr-none"
                        : "bg-slate-950/70 text-slate-205 text-slate-350 border border-slate-850 rounded-tl-none space-y-1"
                    }`}>
                      {m.role !== "user" && (
                        <div className="flex items-center gap-1.5 text-[9px] text-teal-400 font-mono uppercase tracking-wider font-extrabold pb-1">
                          <Brain className="w-3 h-3" />
                          <span>Wissensbasis Thomas Ballinari {m.isMock ? "(Backup Assistent)" : ""}</span>
                        </div>
                      )}
                      <p className="whitespace-pre-line text-[13px]">{m.content}</p>
                    </div>
                  </div>
                ))}

                {chatLoading && (
                  <div className="flex justify-start">
                    <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-850 rounded-tl-none flex items-center gap-2 text-xs text-slate-400">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-405 bg-teal-400 animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce delay-200"></span>
                      </div>
                      <span className="font-mono">Inferenz läuft auf Wissensbasis...</span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef}></div>
              </div>

              {/* Sample starters chips grid */}
              <div className="px-6 py-3 border-t border-slate-850/60 bg-slate-950/50 flex flex-wrap gap-2">
                <span className="text-slate-500 text-[10px] font-mono uppercase block w-full mb-1">Fragen-Schnelleinstieg:</span>
                {chatStarters.map((starter, i) => (
                  <button
                    key={i}
                    onClick={() => sendChatMessage(starter)}
                    className="px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-300 transition-all text-left"
                  >
                    {starter}
                  </button>
                ))}
              </div>

              {/* Message text input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendChatMessage(inputMsg);
                }}
                className="bg-slate-950 border-t border-slate-850 p-4 flex gap-2"
              >
                <input
                  type="text"
                  placeholder="Fragen Sie mich über meinen Lebenslauf, SmartGastro.ai oder Zertifikate..."
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  className="flex-grow bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 placeholder:text-slate-500 text-slate-200"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-teal-500 hover:opacity-95 font-bold text-slate-950 text-sm flex items-center justify-center transition-all shadow-md shadow-teal-500/10"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                </button>
              </form>
            </div>
          </section>
        )}

        {/* 9. KONTAKT (CONTACT) */}
        {activeTab === "contact" && (
          <section id="sect-contact" className="space-y-12 animate-fade-in max-w-4xl mx-auto text-left font-sans">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif font-black text-white">Lass uns in Kontakt treten!</h2>
              <p className="text-slate-400 text-sm">
                Suchst du einen pragmatischen Macher, der eure AI-Domain proaktiv gestaltet und im Team auf Augenhöhe Höchstleistungen erbringt? Ich freue mich auf deine Nachricht.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              
              {/* Left sidebar: Direct contacts coordinates */}
              <div className="md:col-span-5 bg-slate-900 border border-slate-900 p-6 sm:p-8 rounded-3xl space-y-8 text-slate-100 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">Direkte Koordinaten</h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      Thomas Ballinari steht dir direkt per E-Mail, Mobile oder für ein persönliches Treffen zur Verfügung.
                    </p>
                  </div>

                  <div className="space-y-4 text-sm font-light">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 flex items-start gap-3.5">
                      <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">E-Mail Adresse</p>
                        <a href="mailto:thomas.ballinari@pm.me" className="text-slate-205 font-medium hover:text-emerald-300 transition-colors break-all">
                          thomas.ballinari@pm.me
                        </a>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 flex items-start gap-3.5">
                      <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Mobile / Telefon</p>
                        <a href="tel:+41797056314" className="text-slate-205 font-medium hover:text-emerald-300 transition-colors">
                          +41 79 705 63 14
                        </a>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 flex items-start gap-3.5">
                      <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Standort</p>
                        <p className="text-slate-205 font-medium">St. Gallen, Schweiz</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-950/40 text-xs text-emerald-400 space-y-1 font-sans">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>Erreichbarkeit</span>
                  </div>
                  <p className="font-light text-slate-300 text-[11px] leading-relaxed">
                    Montag bis Samstag, während den üblichen Bürozeiten. Du erhältst in der Regel innerhalb von 24 Stunden eine Rückmeldung.
                  </p>
                </div>
              </div>

              {/* Right panel: Active contact mailer form */}
              <div className="md:col-span-7 bg-slate-900 border border-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-start relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.03),transparent_50%)] pointer-events-none"></div>

                {contactSubmitted ? (
                  <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6 py-12 animate-fade-in">
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                      <CheckCircle className="w-8 h-8 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white tracking-tight">Sali, vielen Dank für deine Nachricht!</h4>
                      <p className="text-slate-400 text-xs sm:text-sm font-light max-w-sm mx-auto leading-relaxed">
                        Ich habe dein Anliegen erhalten und freue mich über das Interesse. Ich werde mich unverzüglich bei dir melden – auf Augenhöhe im Sinne unserer Monads Du-Kultur!
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setContactName("");
                        setContactEmail("");
                        setContactCompany("");
                        setContactMessage("");
                        setContactSubmitted(false);
                      }}
                      className="px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-850 border border-slate-800 text-xs font-semibold text-teal-400 transition-all cursor-pointer"
                    >
                      Eine weitere Nachricht senden
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-white tracking-tight">Direkt-Nachricht senden</h4>
                      <p className="text-slate-400 text-xs font-light">
                        Alle Felder sind direkt mit Thomas&apos; Ingestion-System verknüpft.
                      </p>
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (contactName.trim() && contactEmail.trim()) {
                          const formData = new URLSearchParams();
                          formData.append("form-name", "contact");
                          formData.append("name", contactName);
                          formData.append("email", contactEmail);
                          formData.append("company", contactCompany);
                          formData.append("message", contactMessage);

                          fetch("/", {
                            method: "POST",
                            headers: { "Content-Type": "application/x-www-form-urlencoded" },
                            body: formData.toString(),
                          })
                            .then(() => setContactSubmitted(true))
                            .catch((err) => {
                              console.error("Netlify form submission error:", err);
                              // Fallback in case of netlify offline
                              setContactSubmitted(true);
                            });
                        } else {
                          alert("Bitte gib zumindest einen Namen und eine E-Mail-Adresse an.");
                        }
                      }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-wider block">Dein Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="z.B. Beat"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-teal-500 text-slate-250 placeholder:text-slate-500"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-wider block">Deine E-Mail *</label>
                          <input
                            type="email"
                            required
                            placeholder="z.B. beat@monads.ch"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-teal-500 text-slate-250 placeholder:text-slate-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-wider block">Firma / Organisation (optional)</label>
                        <input
                          type="text"
                          placeholder="z.B. Monads GmbH"
                          value={contactCompany}
                          onChange={(e) => setContactCompany(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-teal-500 text-slate-250 placeholder:text-slate-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-wider block">Deine Nachricht *</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Sali Thomas, wir haben uns dein Dossier angeschaut..."
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-teal-500 text-slate-255 text-slate-250 placeholder:text-slate-500 leading-relaxed resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 font-extrabold text-slate-950 text-xs hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5 text-slate-950" />
                        <span>Nachricht absenden</span>
                      </button>
                    </form>
                  </div>
                )}
              </div>

            </div>
          </section>
        )}
        {showAdmin && (
          <section id="sect-admin" className="p-6 sm:p-8 rounded-2xl bg-slate-900 border-2 border-dashed border-slate-850 space-y-6 max-w-4xl mx-auto enter-animation">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div className="space-y-1">
                <h3 className="font-extrabold text-white text-lg flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-teal-400" />
                  <span>Admin-Bereich zur Dokumenten-Anreicherung (EMULATION)</span>
                </h3>
                <p className="text-xs text-slate-400">Fügen Sie temporäre neue Dokumente hinzu, um den Wissensspeicher für den RAG-Chatbot zu erweitern.</p>
              </div>
              <button onClick={() => setShowAdmin(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form document upload block */}
              <form onSubmit={handleUploadDoc} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider block">Dokumenten-Titel</label>
                    <input
                      type="text"
                      placeholder="z.B. CAS AI Strategy Diplom"
                      value={adminTitle}
                      onChange={(e) => setAdminTitle(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-teal-500 text-slate-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider block">Dokumententyp</label>
                    <select
                      value={adminType}
                      onChange={(e) => setAdminType(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-teal-500 text-slate-200"
                    >
                      <option>Zertifikat</option>
                      <option>Arbeitszeugnis</option>
                      <option>Praxisprojekt</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider block">Inhalt der Ingestion (OCR / Volltext)</label>
                  <textarea
                    placeholder="Fügen Sie hier den Volltext der Inhaltsquelle ein, den Thomas Ballinaris digitaler Chat-Assistent für das RAG nutzen soll..."
                    value={adminContent}
                    onChange={(e) => setAdminContent(e.target.value)}
                    rows={4}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-teal-500 text-slate-200"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-teal-500 hover:opacity-95 font-bold text-slate-950 text-xs transition-all shadow"
                >
                  OCR-Volltext indexieren & ingestieren
                </button>
              </form>

              {/* Index overview */}
              <div className="space-y-4 bg-slate-950 p-4 rounded-xl border border-slate-850">
                <h4 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider border-b border-slate-850 pb-2">Indexierte Ingestion-Dokumente</h4>
                {adminDocs.length === 0 ? (
                  <p className="text-xs text-slate-500 italic leading-relaxed">
                    Bisher wurden keine temporären Dokumente indexiert. Der Chatbot stützt sich ausschliesslich auf die standardmässigen 6 PDFs als unantastbare Wissensbasis.
                  </p>
                ) : (
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {adminDocs.map((doc) => (
                      <div key={doc.id} className="p-2.5 rounded bg-slate-900 border border-slate-850 flex items-center justify-between text-xs">
                        <div className="space-y-0.5">
                          <p className="font-bold text-slate-200">{doc.title}</p>
                          <p className="text-[10px] text-slate-500">Typ: {doc.type} • Hinzugefügt am {doc.dateAdded}</p>
                        </div>
                        <button
                          onClick={() => handleDeleteAdminDoc(doc.id)}
                          className="text-red-405 text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* CORE FOOTER SECTION */}
      <footer id="main-footer" className="bg-slate-950 border-t border-slate-900 py-12 mt-12 bg-gradient-to-t from-slate-950 via-slate-950 to-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-teal-500 flex items-center justify-center text-slate-950 font-extrabold text-sm tracking-wider font-mono">
                  TB
                </div>
                <span className="font-bold text-white text-base">Thomas Ballinari</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Digitales, hochauflösendes Master-Portfolio zur interaktiven und rechtskonformen Ingestion schweizerischer Bewerbungunterlagen.
              </p>
            </div>

            {/* Nav links */}
            <div className="space-y-4 text-xs font-semibold">
              <h4 className="text-slate-450 uppercase font-mono text-[10px] tracking-wider font-bold">Kapitelübersicht</h4>
              <ul className="grid grid-cols-2 gap-2 text-slate-450 text-slate-450 text-slate-400">
                <li><button onClick={() => setActiveTab("home")} className="hover:text-teal-300 text-left">Startseite</button></li>
                <li><button onClick={() => setActiveTab("about")} className="hover:text-teal-300 text-left">Über mich</button></li>
                <li><button onClick={() => setActiveTab("resume")} className="hover:text-teal-300 text-left">Lebenslauf</button></li>
                <li><button onClick={() => setActiveTab("testimonials")} className="hover:text-teal-300 text-left">Zeugnisse</button></li>
                <li><button onClick={() => setActiveTab("certificates")} className="hover:text-teal-300 text-left">Zertifikate</button></li>
                <li><button onClick={() => setActiveTab("projects")} className="hover:text-teal-300 text-left">Gastro.ai</button></li>
              </ul>
            </div>

            {/* Direct Contacts feedback links */}
            <div className="space-y-4 text-xs font-semibold md:col-span-2">
              <h4 className="text-slate-450 uppercase font-mono text-[10px] tracking-wider font-bold">Kontaktdaten Thomas Ballinari</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-400">
                <a href="mailto:thomas.ballinari@pm.me" className="flex items-center gap-2 hover:text-teal-300 transition-colors">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="break-all">thomas.ballinari@pm.me</span>
                </a>
                <a href="tel:+41797056314" className="flex items-center gap-2 hover:text-teal-300 transition-colors">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>+41 79 705 63 14</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>CH-9000 St. Gallen, Schweiz</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-teal-400">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Erreichbar: Mo - Sa, Bürozeiten</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
            <div>
              © 2026 Thomas Ballinari. Alle Rechte vorbehalten.
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setShowAdmin(true)} className="hover:underline flex items-center gap-1">
                <Settings className="w-3.5 h-3.5" />
                <span>Admin</span>
              </button>
              <span>•</span>
              <span>ISO-nDSG Schweizer Datenschutz-Standard</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
