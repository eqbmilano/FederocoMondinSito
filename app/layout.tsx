import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import { LangProvider } from "../lib/i18n";
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
  title: "Studio Osteopatico Milano - Federico Mondin",
  description:
    "Percorso osteopatico integrato per risolvere problemi ricorrenti alla radice. Valutazione, terapia manuale, lavoro attivo e tutoring.",
  openGraph: {
    title: "Studio Osteopatico Milano - Federico Mondin",
    description: "Percorso osteopatico integrato per risolvere problemi ricorrenti alla radice.",
    url: "https://federicomondin.eqbmilano.it",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${manrope.variable} ${poppins.variable} antialiased`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
