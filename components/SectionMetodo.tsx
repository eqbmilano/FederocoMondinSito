"use client";
import React from "react";
import { useI18n } from "../lib/i18n";
import { useVisible } from "./useVisible";
import "./SectionMetodo.css";

const STEPS = [0, 1, 2, 3];

export const SectionMetodo: React.FC = () => {
  const { t } = useI18n();
  const { ref, visible } = useVisible();

  return (
    <section id="metodo" className={`me${visible ? " is-on" : ""}`} ref={ref}>
      <div className="container">
        <div className="me__head">
          <span className="eqb-label my-anim my-anim--1">{t("method.eyebrow")}</span>
          <h2 className="my-anim my-anim--2">{t("method.title")}</h2>
          <p className="me__sub my-anim my-anim--3">{t("method.subtitle")}</p>
        </div>

        <div className="me__steps">
          {STEPS.map((i, idx) => (
            <div className={`me__step my-anim my-anim--scale my-anim--${Math.min(idx + 2, 5)}`} key={i}>
              <span className="me__step-number">{String(idx + 1).padStart(2, "0")}</span>
              <h3>{t(`method.cards.${i}.title`)}</h3>
              <p>{t(`method.cards.${i}.body`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
