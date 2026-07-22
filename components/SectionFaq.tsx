"use client";
import React, { useState } from "react";
import { useI18n } from "../lib/i18n";
import { useVisible } from "./useVisible";
import "./SectionFaq.css";

const ITEMS = [1, 2, 3, 4];

export const SectionFaq: React.FC = () => {
  const { t } = useI18n();
  const { ref, visible } = useVisible();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className={`fa${visible ? " is-on" : ""}`} ref={ref}>
      <div className="container">
        <div className="fa__head">
          <span className="eqb-label my-anim my-anim--1">{t("faq.eyebrow")}</span>
          <h2 className="my-anim my-anim--2">{t("faq.title")}</h2>
        </div>

        <div className="fa__list my-anim my-anim--3">
          {ITEMS.map((i, idx) => {
            const isOpen = open === idx;
            return (
              <div className={`fa__item${isOpen ? " is-open" : ""}`} key={i}>
                <button
                  type="button"
                  className="fa__question"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span>{t(`faq.q${i}`)}</span>
                  <span className="fa__icon" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="fa__answer">
                  <p>{t(`faq.a${i}`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
