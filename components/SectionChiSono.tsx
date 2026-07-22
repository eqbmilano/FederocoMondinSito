"use client";
import React from "react";
import { useI18n } from "../lib/i18n";
import { useVisible } from "./useVisible";
import "./SectionChiSono.css";

const LIST_KEYS = [0, 1, 2];
const PROFILE_ROWS = [1, 2, 3];

export const SectionChiSono: React.FC = () => {
  const { t } = useI18n();
  const { ref, visible } = useVisible();

  return (
    <section id="chi-sono" className={`cs${visible ? " is-on" : ""}`} ref={ref}>
      <div className="container cs__inner">
        <div className="cs__photo my-anim my-anim--1">
          {/* ← da caricare in /public/assets/federico.jpg quando Fede manda la foto */}
          <span>FM</span>
        </div>

        <div className="cs__content">
          <span className="eqb-label my-anim my-anim--1">{t("about.eyebrow")}</span>
          <h2 className="my-anim my-anim--2">{t("about.title")}</h2>
          <p className="cs__body my-anim my-anim--3">{t("about.body")}</p>
          <ul className="cs__list my-anim my-anim--4">
            {LIST_KEYS.map((i) => (
              <li key={i}>{t(`about.list.${i}`)}</li>
            ))}
          </ul>

          <div className="cs__profile my-anim my-anim--5">
            <span className="cs__profile-title">{t("about.profileTitle")}</span>
            {PROFILE_ROWS.map((i) => (
              <div className="cs__profile-row" key={i}>
                <span>{t(`about.profileRow${i}`)}</span>
                <span>{t(`about.profileRow${i}Meta`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
