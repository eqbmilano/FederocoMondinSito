import type { Metadata } from "next";
import "./bio.css";

export const metadata: Metadata = {
  title: "Federico Mondin — FM Osteopatia",
  description: "Studio osteopatico a Milano centro. Percorso integrato per risolvere i problemi alla radice.",
  openGraph: {
    title: "Federico Mondin — FM Osteopatia",
    description: "Studio osteopatico a Milano centro.",
    url: "https://federicomondin.eqbmilano.it/bio",
  },
};

export default function BioPage() {
  return (
    <main className="lt">
      <a href="https://eqbmilano.it" aria-label="EQB Milano" className="lt-logo lt-in lt-in--1">
        <span className="lt-logo__chip">EQB</span>
      </a>

      <div className="lt-card">
        <div className="lt-head lt-in lt-in--2">
          <div className="lt-avatar">
            {/* ← da sostituire con foto reale in /public/assets/federico.jpg quando Fede la manda */}
            <div className="lt-avatar__initials">FM</div>
          </div>

          <h1 className="lt-name">Federico Mondin</h1>
          <p className="lt-spec">Osteopata D.O.</p>
          <span className="lt-badge">
            <span className="lt-badge__dot">✦</span>
            Presso EQB Wellness Coworking · Milano
          </span>
        </div>

        {/* TODO Fede: aggiorna la tagline se vuoi cambiare il tono (max 2 righe) */}
        <p className="lt-bio lt-in lt-in--3">Percorso osteopatico integrato per risolvere i problemi alla radice.</p>

        <div className="lt-links lt-in lt-in--4">
          <LinkRow
            href="https://wa.me/393755153273?text=Ciao%20Federico%2C%20vorrei%20prenotare%20una%20visita"
            primary
            icon={<IconChat />}
            label="Prenota su WhatsApp"
            sub="Risposta entro 24 ore"
          />
          <LinkRow href="/#contatti" icon={<IconCalendar />} label="Prima visita" sub="Valutazione e piano di lavoro" />
          <LinkRow href="/#servizi" icon={<IconGlobe />} label="I miei servizi" sub="Cosa tratto e come" />
          <LinkRow href="/#metodo" icon={<IconPin />} label="Il mio metodo" sub="Percorso integrato in 4 fasi" />
        </div>

        <div className="lt-social lt-in lt-in--5">
          <SocialIcon href="https://www.instagram.com/fm.osteopatia/" label="Instagram">
            <IconInstagram />
          </SocialIcon>
        </div>

        <div className="lt-footer lt-in lt-in--6">
          <span className="lt-footer__chip">EQB</span>
          <span className="lt-footer__text">Wellness &amp; Fitness Coworking · Milano</span>
        </div>
      </div>
    </main>
  );
}

function LinkRow({
  href,
  icon,
  label,
  sub,
  primary,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
  primary?: boolean;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`lt-btn${primary ? " lt-btn--primary" : ""}`}
    >
      <span className="lt-btn__icon">{icon}</span>
      <span className="lt-btn__label">
        <span>{label}</span>
        <span className="lt-btn__sub">{sub}</span>
      </span>
      <span className="lt-btn__arrow">→</span>
    </a>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="lt-social__icon">
      {children}
    </a>
  );
}

function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
