"use client";
import React from "react";
import { useI18n } from "../lib/i18n";
import { useVisible } from "./useVisible";
import "./Hero.css";

export const Hero: React.FC = () => {
  const { t } = useI18n();
  const { ref, visible } = useVisible("-40px");

  return (
    <section className={`hero${visible ? " is-on" : ""}`} ref={ref}>
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="eqb-label my-anim my-anim--1">{t("hero.eyebrow")}</span>
          <h1 className="hero__title my-anim my-anim--2">{t("hero.title")}</h1>
          <p className="hero__sub my-anim my-anim--3">{t("hero.subtitle")}</p>
          <div className="hero__cta my-anim my-anim--4">
            <a href="#contatti" className="btn btn--primary">
              {t("hero.cta")}
            </a>
            <a href="#servizi" className="btn btn--ghost">
              {t("hero.secondary")}
            </a>
          </div>
        </div>

        <div className="hero__card my-anim my-anim--right my-anim--3">
          <span className="hero__card-label">{t("hero.cardLabel")}</span>
          <p className="hero__card-title">{t("hero.cardTitle")}</p>
          <p className="hero__card-body">{t("hero.cardBody")}</p>
          <div className="hero__card-meta">
            <span>{t("hero.cardMeta1")}</span>
            <span>{t("hero.cardMeta2")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
