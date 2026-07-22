"use client";
import React from "react";
import { useI18n } from "../lib/i18n";
import "./Footer.css";

export const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>{t("footer.copy")}</p>
        <div className="footer__links">
          <a href="#">{t("footer.privacy")}</a>
          <a href="#">{t("footer.cookies")}</a>
        </div>
      </div>
    </footer>
  );
};
