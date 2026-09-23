/**
 * Versione in testo della home: gli assistenti AI citano volentieri il markdown,
 * che non ha impaginazione da interpretare. Stessi contenuti della pagina.
 */
import { PROFESSIONISTA as P, SERVIZI, SITE_URL } from "../../../lib/site";
import { FAQ, METODO } from "../../../lib/dati-strutturati";
import { translations } from "../../../lib/testi";

export const dynamic = "force-static";

export function GET() {
  const t = translations.it;
  const md = `# ${t["hero.title"]}

${t["hero.subtitle"]}

${P.nome}, ${P.ruolo}. ${P.zona}.

## ${t["services.title"]}

${t["services.subtitle"]}

${SERVIZI.map((s) => `### ${s.nome}\n\n${s.descrizione}`).join("\n\n")}

## ${t["method.title"]}

${t["method.subtitle"]}

${METODO.map((m, i) => `${i + 1}. **${m.nome}** ${m.testo}`).join("\n")}

## Domande frequenti

${FAQ.map((f) => `**${f.domanda}**\n\n${f.risposta}`).join("\n\n")}

## Contatti

- Studio: ${P.indirizzo.via}, ${P.indirizzo.cap} ${P.indirizzo.citta}
- Telefono e WhatsApp: ${P.telefono}
- Email: ${P.email}
- Sito: ${SITE_URL}
`;
  return new Response(md, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
