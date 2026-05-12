import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { LangContext, useLangState } from './hooks/useLanguage';
import Header, { Notice } from './components/Header';
import LanguageSwitcher from './components/LanguageSwitcher';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import ItemDetailModal from './components/ItemDetailModal';
import { CATEGORIES, MENU } from './data/menu-i18n';
import { UI } from './data/site-info';
import type { MenuItem, CategoryKey } from './types/menu';
import type { Lang } from './types/menu';

function FujiMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 22 L12 12 L14 14 L17 10 L21 16 L24 13 L27 22 Z" fill="currentColor" />
      <circle cx="22" cy="9" r="1.6" fill="currentColor" />
    </svg>
  );
}

export default function App() {
  const langState = useLangState();
  const { lang } = langState;
  const [openItem, setOpenItem] = useState<MenuItem | null>(null);
  const [activeCat, setActiveCat] = useState<CategoryKey>('set');
  const sectionRefs = useRef<Partial<Record<CategoryKey, HTMLElement | null>>>({});

  const itemsByCat = useMemo(() => {
    const map: Partial<Record<CategoryKey, MenuItem[]>> = {};
    CATEGORIES.forEach((c) => {
      map[c.key] = MENU.filter((m) => m.category === c.key);
    });
    return map as Record<CategoryKey, MenuItem[]>;
  }, []);

  const itemCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach((c) => {
      counts[c.key] = itemsByCat[c.key].length;
    });
    return counts;
  }, [itemsByCat]);

  // IntersectionObserver for active category tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const cat = visible[0].target.getAttribute('data-cat') as CategoryKey;
          if (cat) setActiveCat(cat);
        }
      },
      { rootMargin: '-130px 0px -55% 0px', threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToCat = useCallback((key: string) => {
    const el = sectionRefs.current[key as CategoryKey];
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, []);

  return (
    <LangContext.Provider value={langState}>
      {/* Sticky language bar */}
      <div className="lang-bar">
        <div className="brand-mini">
          <FujiMark />
          <span>{(UI.brand as Record<Lang, string>)[lang]}</span>
        </div>
        <LanguageSwitcher />
      </div>

      {/* Hero + Info + Set banner */}
      <Header />

      {/* Sticky category tabs */}
      <CategoryNav
        activeCat={activeCat}
        itemCounts={itemCounts}
        onScrollTo={scrollToCat}
      />

      {/* Menu sections */}
      {CATEGORIES.map((c) => (
        <MenuSection
          key={c.key}
          ref={(el) => { sectionRefs.current[c.key] = el; }}
          category={c}
          items={itemsByCat[c.key]}
          lang={lang}
          onOpen={setOpenItem}
        />
      ))}

      {/* Dining notice */}
      <Notice lang={lang} />

      {/* Footer */}
      <div className="foot">
        <div className="seal">山下</div>
        <div>{(UI.footer as Record<Lang, string>)[lang]}</div>
        <div className="foot-small">{(UI.footerSmall as Record<Lang, string>)[lang]}</div>
      </div>

      {/* Item detail modal */}
      <ItemDetailModal
        item={openItem}
        lang={lang}
        onClose={() => setOpenItem(null)}
      />
    </LangContext.Provider>
  );
}
