"use client";
import React from "react";
import { useI18n } from "../lib/i18n";
import { useVisible } from "./useVisible";
import { TiltCard } from "./TiltCard";
import "./SectionServizi.css";

const CARD_KEYS = [0, 1, 2];

export const SectionServizi: React.FC = () => {
  const { t } = useI18n();
  const { ref, visible } = useVisible();

  return (
    <section id="servizi" className={`sv${visible ? " is-on" : ""}`} ref={ref}>
      <div className="container">
        <div className="sv__head">
          <span className="eqb-label my-anim my-anim--1">{t("services.eyebrow")}</span>
          <h2 className="my-anim my-anim--2">{t("services.title")}</h2>
          <p className="sv__sub my-anim my-anim--3">{t("services.subtitle")}</p>
        </div>

        <div className="sv__grid">
          {CARD_KEYS.map((i, idx) => (
            <TiltCard key={i} className={`sv__card my-anim my-anim--scale my-anim--${Math.min(idx + 2, 5)}`}>
              <h3>{t(`services.cards.${i}.title`)}</h3>
              <p>{t(`services.cards.${i}.body`)}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
