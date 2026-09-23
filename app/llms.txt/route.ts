/**
 * llms.txt: il biglietto da visita del sito per gli assistenti AI (ChatGPT,
 * Gemini, Perplexity). Dice in poche righe chi è, cosa fa, dove riceve e dove
 * trovare il testo completo. Generato al build, resta un file statico.
 */
import { PROFESSIONISTA as P, SERVIZI, SITE_URL } from "../../lib/site";
import { FAQ, METODO } from "../../lib/dati-strutturati";

export const dynamic = "force-static";

export function GET() {
  const testo = `# ${P.nome}, ${P.ruolo}

> ${P.descrizione}

## Dove
${P.indirizzo.via}, ${P.indirizzo.cap} ${P.indirizzo.citta} (${P.zona}).
Telefono e WhatsApp: ${P.telefono} · Email: ${P.email}

## Percorsi
${SERVIZI.map((s) => `- ${s.nome}: ${s.descrizione}`).join("\n")}

## Come funziona
${METODO.map((m, i) => `${i + 1}. ${m.nome}: ${m.testo}`).join("\n")}

## Domande frequenti
${FAQ.map((f) => `- ${f.domanda} ${f.risposta}`).join("\n")}

## Pagine in testo
- ${SITE_URL}/md/home.md

## Note
Le sedute si svolgono in studio a Milano. Non si prenotano sedute singole: il lavoro è per percorsi.
`;
  return new Response(testo, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
