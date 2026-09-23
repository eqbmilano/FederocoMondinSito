/**
 * Dati strutturati (JSON-LD) letti da Google e dagli assistenti tipo ChatGPT,
 * Gemini e Perplexity: dicono chi è Federico, dove riceve, cosa fa e con quali
 * risposte. Testi identici a quelli in pagina (lib/i18n.tsx), mai inventati.
 *
 * Niente coordinate geografiche: non le abbiamo verificate, e un dato sbagliato
 * qui vale meno di un dato assente.
 */
import { PROFESSIONISTA as P, SERVIZI, SITE_URL } from "./site";

const indirizzo = {
  "@type": "PostalAddress",
  streetAddress: P.indirizzo.via,
  addressLocality: P.indirizzo.citta,
  postalCode: P.indirizzo.cap,
  addressRegion: P.indirizzo.provincia,
  addressCountry: P.indirizzo.paese,
};

/** Le stesse domande della sezione FAQ in home */
export const FAQ = [
  {
    domanda: "Quanto dura il percorso?",
    risposta:
      "Dipende dal problema. In media 8-12 settimane con valutazione iniziale, 4-6 sedute e lavoro attivo a casa.",
  },
  {
    domanda: "Devo fare esercizi a casa?",
    risposta:
      "Sì. Il percorso richiede partecipazione attiva. La terapia manuale da sola non basta per risolvere.",
  },
  {
    domanda: "Posso prenotare una seduta singola?",
    risposta:
      "No. Lavoro solo con percorsi strutturati per garantire risultati duraturi e non temporanei.",
  },
  {
    domanda: "Quanto costa?",
    risposta:
      "La prima visita di valutazione è di 100€. Il percorso viene definito insieme in base all'obiettivo.",
  },
] as const;

/** I quattro passi del metodo, come in pagina */
export const METODO = [
  { nome: "Valutazione reale", testo: "Analisi del movimento e delle cause, non solo del sintomo." },
  { nome: "Terapia manuale mirata", testo: "Usata quando serve, integrata nel percorso." },
  { nome: "Lavoro attivo guidato", testo: "Esercizi personalizzati, adattati nel tempo." },
  { nome: "Tutoring fino al risultato", testo: "Feedback costante e aggiustamenti fino all'autonomia." },
] as const;

export function grafoDatiStrutturati() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#federico`,
        name: P.nome,
        jobTitle: P.ruolo,
        description: P.descrizione,
        url: SITE_URL,
        telephone: P.telefono,
        email: P.email,
        address: indirizzo,
        areaServed: { "@type": "City", name: "Milano" },
        sameAs: [P.instagram, P.whatsapp],
        worksFor: { "@id": `${SITE_URL}/#studio` },
      },
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": `${SITE_URL}/#studio`,
        name: `${P.nome}, ${P.ruolo}`,
        description: P.descrizione,
        url: SITE_URL,
        telephone: P.telefono,
        email: P.email,
        address: indirizzo,
        areaServed: { "@type": "City", name: "Milano" },
        medicalSpecialty: "Osteopathic",
        priceRange: "€€",
        currenciesAccepted: "EUR",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Percorsi osteopatici",
          itemListElement: SERVIZI.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.nome,
              description: s.descrizione,
              serviceType: "Osteopatia",
              provider: { "@id": `${SITE_URL}/#federico` },
              areaServed: { "@type": "City", name: "Milano" },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#sito`,
        url: SITE_URL,
        name: `${P.nome}, osteopata a Milano`,
        inLanguage: "it-IT",
        publisher: { "@id": `${SITE_URL}/#federico` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        // speakable: dice agli assistenti vocali quale parte leggere ad alta voce
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#faq h2", "#faq h3", "#faq p"],
        },
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.domanda,
          acceptedAnswer: { "@type": "Answer", text: f.risposta },
        })),
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/#metodo`,
        name: "Il percorso osteopatico, dalla causa al risultato",
        description:
          "Già dalla prima visita capisci perché finora non ha funzionato e cosa serve per risolvere.",
        step: METODO.map((m, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: m.nome,
          text: m.testo,
        })),
      },
    ],
  };
}
