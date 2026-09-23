"use client";
import React, { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";

export type { Lang } from "./testi";
import type { Lang } from "./testi";
import { translations } from "./testi";

export { translations };

const DEFAULT_LANG: Lang = "it";
const STORAGE_KEY = "fmo-lang";



type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const LANG_EVENT = "fmo-lang-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LANG_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANG_EVENT, callback);
  };
}

function getSnapshot(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "it" || stored === "en" ? stored : DEFAULT_LANG;
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event(LANG_EVENT));
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "it" ? "en" : "it");
  }, [lang, setLang]);

  const t = useCallback((key: string) => translations[lang][key] ?? translations[DEFAULT_LANG][key] ?? key, [lang]);

  return <I18nContext.Provider value={{ lang, setLang, toggleLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LangProvider");
  return ctx;
}
