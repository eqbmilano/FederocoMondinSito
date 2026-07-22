"use client";
import React from "react";
import { useI18n } from "../lib/i18n";
import { useVisible } from "./useVisible";
import "./SectionTestimonianze.css";

const CARDS = [0, 1, 2];

export const SectionTestimonianze: React.FC = () => {
  const { t } = useI18n();
  const { ref, visible } = useVisible();

  return (
    <section id="testimonianze" className={`te${visible ? " is-on" : ""}`} ref={ref}>
      <div className="container">
        <div className="te__head">
          <span className="eqb-label my-anim my-anim--1">{t("reviews.eyebrow")}</span>
          <h2 className="my-anim my-anim--2">{t("reviews.title")}</h2>
        </div>

        <div className="te__grid">
          {CARDS.map((i, idx) => (
            <article className={`te__card my-anim my-anim--${Math.min(idx + 2, 5)}`} key={i}>
              <p>{t(`reviews.cards.${i}.body`)}</p>
              <span>{t(`reviews.cards.${i}.author`)}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
