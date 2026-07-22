"use client";
import React, { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";

export type Lang = "it" | "en";

const DEFAULT_LANG: Lang = "it";
const STORAGE_KEY = "fmo-lang";

export const translations: Record<Lang, Record<string, string>> = {
  it: {
    "nav.services": "Servizi",
    "nav.about": "Chi sono",
    "nav.method": "Metodo",
    "nav.faq": "FAQ",
    "nav.reviews": "Testimonianze",
    "nav.contact": "Contatti",
    "nav.langToggle": "IT / EN",
    "hero.eyebrow": "Studio osteopatico a Milano centro",
    "hero.title": "Se il problema torna, non era risolto.",
    "hero.subtitle":
      "Non propongo sedute singole: costruisco percorsi integrati per risolvere problemi ricorrenti alla radice, con valutazione reale, terapia manuale, lavoro attivo e tutoring.",
    "hero.cta": "Prenota visita",
    "hero.secondary": "Scopri i servizi",
    "hero.cardLabel": "Percorso integrato",
    "hero.cardTitle": "Dalla prima visita, sai cosa non ha funzionato",
    "hero.cardBody": "Esci con un percorso chiaro, non con una speranza.",
    "hero.cardMeta1": "Milano centro",
    "hero.cardMeta2": "Approccio premium",
    "services.eyebrow": "Servizi principali",
    "services.title": "Un piano di trattamento su misura.",
    "services.subtitle":
      'Percorsi per chi ha già provato soluzioni frammentate. L’obiettivo è uscire dal ciclo "sto meglio, ricado, ricomincio" e tornare autonomi.',
    "services.cards.0.title": "Lombalgia ricorrente",
    "services.cards.0.body": "Ridurre ricadute e riprendere allenamento e viaggi senza ansia.",
    "services.cards.1.title": "Postura e lavoro ad alta responsabilità",
    "services.cards.1.body": "Per chi vive sotto carico mentale e vuole continuità e controllo.",
    "services.cards.2.title": "Percorso integrato",
    "services.cards.2.body": "Terapia manuale + lavoro attivo + tutoring fino al risultato.",
    "about.eyebrow": "Chi sono",
    "about.title": "Federico Mondin, osteopata D.O.",
    "about.body":
      "Osteopata e laureando in Fisioterapia. Lavoro con professionisti e imprenditori che vogliono capire perché il problema torna e uscire dal ciclo delle ricadute.",
    "about.list.0": "Percorsi strutturati, non sedute singole",
    "about.list.1": "Metodo integrato con lavoro attivo guidato",
    "about.list.2": "Focus su autonomia e prevenzione",
    "about.profileTitle": "Percorso di lavoro",
    "about.profileRow1": "Valutazione reale",
    "about.profileRow1Meta": "60 min",
    "about.profileRow2": "Terapia manuale mirata",
    "about.profileRow2Meta": "45 min",
    "about.profileRow3": "Lavoro attivo e follow-up",
    "about.profileRow3Meta": "30 min",
    "method.eyebrow": "Metodo",
    "method.title": "Un percorso chiaro, dalla causa al risultato.",
    "method.subtitle": "Già dalla prima visita capisci perché finora non ha funzionato e cosa serve per risolvere.",
    "method.cards.0.title": "Valutazione reale",
    "method.cards.0.body": "Analisi del movimento e delle cause, non solo del sintomo.",
    "method.cards.1.title": "Terapia manuale mirata",
    "method.cards.1.body": "Usata quando serve, integrata nel percorso.",
    "method.cards.2.title": "Lavoro attivo guidato",
    "method.cards.2.body": "Esercizi personalizzati, adattati nel tempo.",
    "method.cards.3.title": "Tutoring fino al risultato",
    "method.cards.3.body": "Feedback costante e aggiustamenti fino all’autonomia.",
    "reviews.eyebrow": "Testimonianze",
    "reviews.title": "Risultati percepiti dai pazienti.",
    "reviews.cards.0.body":
      "“Imprenditore, viaggi continui: avevo ricadute ogni mese. Ora ho un percorso chiaro e la schiena è affidabile.”",
    "reviews.cards.0.author": "Marco, 42",
    "reviews.cards.1.body":
      "“Manager con agenda piena. Ho capito il perché del problema e cosa fare per non ripartire da capo.”",
    "reviews.cards.1.author": "Laura, 39",
    "reviews.cards.2.body":
      "“Dopo anni di soluzioni frammentate, finalmente un metodo che integra terapia ed esercizi.”",
    "reviews.cards.2.author": "Davide, 48",
    "contact.eyebrow": "Contatti",
    "contact.title": "Prenota la tua visita.",
    "contact.subtitle": "Rispondo entro 24 ore. Compila il form oppure scrivimi direttamente.",
    "contact.form.name": "Nome e cognome",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefono",
    "contact.form.message": "Messaggio",
    "contact.form.cta": "Prenota visita",
    "contact.form.note": "* Il form apre il tuo client email con i dati precompilati.",
    "contact.form.namePlaceholder": "Mario Rossi",
    "contact.form.emailPlaceholder": "nome@email.com",
    "contact.form.phonePlaceholder": "+39",
    "contact.form.messagePlaceholder": "Raccontami la tua esigenza",
    "contact.info.title": "Studio Osteopatico",
    "contact.info.address": "Viale Regina Margherita, 43, 20122 Milano MI",
    "contact.info.phone": "Tel. +39 375 515 3273",
    "contact.info.email": "info@eqbmilano.it",
    "contact.info.whatsappCta": "Scrivi su WhatsApp",
    "contact.info.whatsappMsg": "Ciao Federico, vorrei avere più informazioni",
    "faq.eyebrow": "FAQ",
    "faq.title": "Domande frequenti.",
    "faq.q1": "Quanto dura il percorso?",
    "faq.a1": "Dipende dal problema. In media 8-12 settimane con valutazione iniziale, 4-6 sedute e lavoro attivo a casa.",
    "faq.q2": "Devo fare esercizi a casa?",
    "faq.a2": "Sì. Il percorso richiede partecipazione attiva. La terapia manuale da sola non basta per risolvere.",
    "faq.q3": "Posso prenotare una seduta singola?",
    "faq.a3": "No. Lavoro solo con percorsi strutturati per garantire risultati duraturi e non temporanei.",
    "faq.q4": "Quanto costa?",
    "faq.a4": "La prima visita di valutazione è di 100€. Il percorso viene definito insieme in base all'obiettivo.",
    "footer.copy": "© 2026 Federico Mondin Osteopatia. Tutti i diritti riservati.",
    "footer.privacy": "Privacy",
    "footer.cookies": "Cookie policy",
  },
  en: {
    "nav.services": "Services",
    "nav.about": "About",
    "nav.method": "Method",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.langToggle": "EN / IT",
    "hero.eyebrow": "Osteopathic studio in Milan center",
    "hero.title": "If the problem returns, it was never resolved.",
    "hero.subtitle":
      "No single sessions: I build integrated paths to resolve recurring issues at the root, with real assessment, manual therapy, active work, and tutoring.",
    "hero.cta": "Book a visit",
    "hero.secondary": "Explore services",
    "hero.cardLabel": "Integrated path",
    "hero.cardTitle": "From the first visit, you know what did not work",
    "hero.cardBody": "You leave with a clear path, not a hope.",
    "hero.cardMeta1": "Milan center",
    "hero.cardMeta2": "Premium approach",
    "services.eyebrow": "Main services",
    "services.title": "A tailored treatment plan.",
    "services.subtitle":
      'Paths for those who already tried fragmented solutions. The goal is to exit the "better, relapse, restart" cycle and regain autonomy.',
    "services.cards.0.title": "Recurring low back pain",
    "services.cards.0.body": "Reduce relapses and resume training and travel without anxiety.",
    "services.cards.1.title": "Posture and high-responsibility work",
    "services.cards.1.body": "For people under mental load who want continuity and control.",
    "services.cards.2.title": "Integrated path",
    "services.cards.2.body": "Manual therapy + active work + tutoring until results.",
    "about.eyebrow": "About",
    "about.title": "Federico Mondin, osteopath D.O.",
    "about.body":
      "Osteopath and physiotherapy student. I work with professionals and entrepreneurs who want to understand why the problem returns and exit the relapse cycle.",
    "about.list.0": "Structured paths, not single sessions",
    "about.list.1": "Integrated method with guided active work",
    "about.list.2": "Focus on autonomy and prevention",
    "about.profileTitle": "Work path",
    "about.profileRow1": "Real assessment",
    "about.profileRow1Meta": "60 min",
    "about.profileRow2": "Targeted manual therapy",
    "about.profileRow2Meta": "45 min",
    "about.profileRow3": "Active work and follow-up",
    "about.profileRow3Meta": "30 min",
    "method.eyebrow": "Method",
    "method.title": "A clear path from cause to result.",
    "method.subtitle": "From the first visit you understand why it did not work and what it takes to resolve it.",
    "method.cards.0.title": "Real assessment",
    "method.cards.0.body": "Movement and root-cause analysis, not just symptoms.",
    "method.cards.1.title": "Targeted manual therapy",
    "method.cards.1.body": "Used when needed, integrated in the path.",
    "method.cards.2.title": "Guided active work",
    "method.cards.2.body": "Personalized exercises, adapted over time.",
    "method.cards.3.title": "Tutoring until results",
    "method.cards.3.body": "Ongoing feedback and adjustments to autonomy.",
    "reviews.eyebrow": "Reviews",
    "reviews.title": "Results reported by patients.",
    "reviews.cards.0.body":
      "“Entrepreneur with constant travel: monthly relapses. Now I have a clear path and a reliable back.”",
    "reviews.cards.0.author": "Marco, 42",
    "reviews.cards.1.body": "“Manager with a packed agenda. I understood why it kept coming back and what to do.”",
    "reviews.cards.1.author": "Laura, 39",
    "reviews.cards.2.body": "“After years of fragmented solutions, finally a method that integrates therapy and exercises.”",
    "reviews.cards.2.author": "Davide, 48",
    "contact.eyebrow": "Contact",
    "contact.title": "Book your visit.",
    "contact.subtitle": "I reply within 24 hours. Fill out the form or message me directly.",
    "contact.form.name": "Full name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.message": "Message",
    "contact.form.cta": "Book a visit",
    "contact.form.note": "* The form opens your email client with the details pre-filled.",
    "contact.form.namePlaceholder": "John Doe",
    "contact.form.emailPlaceholder": "name@email.com",
    "contact.form.phonePlaceholder": "+39",
    "contact.form.messagePlaceholder": "Tell me about your needs",
    "contact.info.title": "Osteopathic Studio",
    "contact.info.address": "Viale Regina Margherita 43, 20122 Milan",
    "contact.info.phone": "Tel. +39 375 515 3273",
    "contact.info.email": "info@eqbmilano.it",
    "contact.info.whatsappCta": "Message on WhatsApp",
    "contact.info.whatsappMsg": "Hello Federico, I would like more information",
    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked questions.",
    "faq.q1": "How long is the path?",
    "faq.a1": "It depends on the problem. On average 8-12 weeks with initial assessment, 4-6 sessions and active work at home.",
    "faq.q2": "Do I need to do exercises at home?",
    "faq.a2": "Yes. The path requires active participation. Manual therapy alone is not enough to resolve the issue.",
    "faq.q3": "Can I book a single session?",
    "faq.a3": "No. I only work with structured paths to ensure lasting, not temporary, results.",
    "faq.q4": "How much does it cost?",
    "faq.a4": "The first assessment visit is €100. The path is defined together based on the goal.",
    "footer.copy": "© 2026 Federico Mondin Osteopatia. All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.cookies": "Cookie policy",
  },
};

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const LANG_EVENT = "fmo-lang-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LANG_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANG_EVENT, callback);
  };
}

function getSnapshot(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "it" || stored === "en" ? stored : DEFAULT_LANG;
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event(LANG_EVENT));
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "it" ? "en" : "it");
  }, [lang, setLang]);

  const t = useCallback((key: string) => translations[lang][key] ?? translations[DEFAULT_LANG][key] ?? key, [lang]);

  return <I18nContext.Provider value={{ lang, setLang, toggleLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LangProvider");
  return ctx;
}
