import { createContext, useContext, useState, useEffect } from 'react';
import type { Lang } from '../types/menu';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LangContext = createContext<LangContextValue>({
  lang: 'zh',
  setLang: () => {},
});

export function useLang(): LangContextValue {
  return useContext(LangContext);
}

export function useLangState(): LangContextValue {
  const stored = localStorage.getItem('lang') as Lang | null;
  const valid: Lang[] = ['zh', 'en', 'ja', 'ko'];
  const initial: Lang = stored && valid.includes(stored) ? stored : 'zh';
  const [lang, setLangState] = useState<Lang>(initial);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem('lang', next);
  };

  useEffect(() => {
    document.body.setAttribute('data-lang', lang);
    document.documentElement.lang = { zh: 'zh-Hant', en: 'en', ja: 'ja', ko: 'ko' }[lang];
  }, [lang]);

  return { lang, setLang };
}
