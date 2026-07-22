"use client";
import React from "react";
import { useI18n } from "../lib/i18n";
import { useVisible } from "./useVisible";
import "./SectionContatti.css";

export const SectionContatti: React.FC = () => {
  const { t } = useI18n();
  const { ref, visible } = useVisible();

  const whatsappHref = `https://wa.me/393755153273?text=${encodeURIComponent(t("contact.info.whatsappMsg"))}`;

  return (
    <section id="contatti" className={`co${visible ? " is-on" : ""}`} ref={ref}>
      <div className="container">
        <div className="co__head">
          <span className="eqb-label my-anim my-anim--1">{t("contact.eyebrow")}</span>
          <h2 className="my-anim my-anim--2">{t("contact.title")}</h2>
          <p className="co__sub my-anim my-anim--3">{t("contact.subtitle")}</p>
        </div>

        <div className="co__grid">
          <form
            className="co__form my-anim my-anim--4"
            action="mailto:info@eqbmilano.it?subject=Richiesta%20visita%20osteopatica"
            method="post"
            encType="text/plain"
          >
            <label>
              <span>{t("contact.form.name")}</span>
              <input type="text" name="name" placeholder={t("contact.form.namePlaceholder")} />
            </label>
            <label>
              <span>{t("contact.form.email")}</span>
              <input type="email" name="email" placeholder={t("contact.form.emailPlaceholder")} />
            </label>
            <label>
              <span>{t("contact.form.phone")}</span>
              <input type="tel" name="phone" placeholder={t("contact.form.phonePlaceholder")} />
            </label>
            <label>
              <span>{t("contact.form.message")}</span>
              <textarea name="message" rows={4} placeholder={t("contact.form.messagePlaceholder")} />
            </label>
            <button type="submit" className="btn btn--primary">
              {t("contact.form.cta")}
            </button>
            <p className="co__form-note">{t("contact.form.note")}</p>
          </form>

          <div className="co__info my-anim my-anim--5">
            <div className="co__info-card">
              <h3>{t("contact.info.title")}</h3>
              <p>{t("contact.info.address")}</p>
              <p>{t("contact.info.phone")}</p>
              <p>{t("contact.info.email")}</p>
              <a className="btn btn--ghost co__whatsapp" href={whatsappHref} target="_blank" rel="noopener">
                {t("contact.info.whatsappCta")}
              </a>
            </div>
            <div className="co__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.8155!2d9.2087!3d45.4842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI5JzAzLjEiTiA5wrAxMicyMS42IkU!5e0!3m2!1sit!2sit!4v1613000000000!5m2!1sit!2sit"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: 16 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Studio Osteopatico Milano"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
