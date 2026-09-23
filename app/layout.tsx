import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import { LangProvider } from "../lib/i18n";
import { PROFESSIONISTA, SITE_URL } from "../lib/site";
import { grafoDatiStrutturati } from "../lib/dati-strutturati";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Osteopata a Milano centro | Federico Mondin, Osteopata D.O.",
  description:
    "Osteopata a Milano, zona Cinque Giornate. Percorsi integrati per problemi ricorrenti: valutazione, terapia manuale, lavoro attivo e tutoring fino al risultato.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: `${PROFESSIONISTA.nome}, ${PROFESSIONISTA.ruolo}`,
    title: "Osteopata a Milano centro | Federico Mondin",
    description:
      "Percorsi osteopatici integrati per risolvere problemi ricorrenti alla radice, in viale Regina Margherita 43 a Milano.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Osteopata a Milano centro | Federico Mondin",
    description: "Percorsi osteopatici integrati per problemi ricorrenti, a Milano centro.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <head>
        <meta name="color-scheme" content="light" />
        {/* Dati strutturati: chi e' Federico, dove riceve, cosa offre e le risposte
            alle domande frequenti. Letti da Google e dagli assistenti AI. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(grafoDatiStrutturati()) }}
        />
      </head>
      <body className={`${manrope.variable} ${poppins.variable} antialiased`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
