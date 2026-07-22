"use client";
import React, { useEffect, useState } from "react";
import { useI18n } from "../lib/i18n";
import "./Navbar.css";

const LINKS: { key: string; href: string }[] = [
  { key: "nav.services", href: "#servizi" },
  { key: "nav.about", href: "#chi-sono" },
  { key: "nav.method", href: "#metodo" },
  { key: "nav.faq", href: "#faq" },
  { key: "nav.reviews", href: "#testimonianze" },
  { key: "nav.contact", href: "#contatti" },
];

export const Navbar: React.FC = () => {
  const { t, toggleLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          FM <span>Osteopatia</span>
        </a>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <a key={link.key} href={link.href} className="navbar__link">
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="navbar__right">
          <button type="button" className="navbar__lang" onClick={toggleLang}>
            {t("nav.langToggle")}
          </button>
          <button
            type="button"
            className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}>
        {LINKS.map((link) => (
          <a key={link.key} href={link.href} className="navbar__mobile-link" onClick={closeMenu}>
            {t(link.key)}
          </a>
        ))}
      </div>
    </header>
  );
};
