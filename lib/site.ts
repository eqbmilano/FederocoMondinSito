/**
 * Dati del sito in un posto solo: li usano i dati strutturati, la sitemap,
 * llms.txt e l'export in testo. Nessun dato inventato, vengono tutti dal sito
 * e dal dizionario in lib/i18n.tsx (23/09/2026).
 *
 * Quando arriva il dominio suo, si cambia solo SITE_URL.
 */
export const SITE_URL = "https://federicomondin.eqbmilano.it";

export const PROFESSIONISTA = {
  nome: "Federico Mondin",
  ruolo: "Osteopata D.O.",
  descrizione:
    "Osteopata a Milano centro. Percorsi integrati per problemi ricorrenti: valutazione, terapia manuale, lavoro attivo e tutoring fino al risultato.",
  telefono: "+39 375 515 3273",
  email: "info@eqbmilano.it",
  whatsapp: "https://wa.me/393755153273",
  instagram: "https://www.instagram.com/fm.osteopatia/",
  indirizzo: {
    via: "Viale Regina Margherita 43",
    citta: "Milano",
    cap: "20122",
    provincia: "MI",
    paese: "IT",
  },
  zona: "Milano centro, zona Cinque Giornate",
} as const;

/** Servizi mostrati in home, stessi testi delle card */
export const SERVIZI = [
  {
    slug: "lombalgia-ricorrente",
    nome: "Lombalgia ricorrente",
    descrizione: "Ridurre ricadute e riprendere allenamento e viaggi senza ansia.",
  },
  {
    slug: "postura-e-lavoro",
    nome: "Postura e lavoro ad alta responsabilità",
    descrizione: "Per chi vive sotto carico mentale e vuole continuità e controllo.",
  },
  {
    slug: "percorso-integrato",
    nome: "Percorso integrato",
    descrizione:
      "Valutazione, terapia manuale, lavoro attivo e tutoring in un unico percorso.",
  },
] as const;

/** Pagine pubbliche: alimentano sitemap e llms.txt */
export const PAGINE = [
  { path: "/", titolo: "Studio Osteopatico Milano, Federico Mondin", priorita: 1 },
  { path: "/bio", titolo: "Federico Mondin, link utili", priorita: 0.6 },
] as const;
