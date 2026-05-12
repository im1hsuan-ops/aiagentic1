import { useRef } from 'react';
import type { MenuItem } from '../types/menu';
import type { Lang } from '../types/menu';
import TagBadge from './TagBadge';
import { CATEGORIES } from '../data/menu-i18n';
import { UI } from '../data/site-info';
import { useScrollLock } from '../hooks/useScrollLock';

interface Props {
  item: MenuItem | null;
  lang: Lang;
  onClose: () => void;
}

function fmtPrice(v: number | 'tba'): string {
  if (v === 'tba') return '';
  return `NT$ ${v}`;
}

export default function ItemDetailModal({ item, lang, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  useScrollLock(!!item);

  if (!item) return null;

  const cat = item.category;
  const catDef = CATEGORIES.find((c) => c.key === cat)!;
  const placeholderText = item.names.en.replace(/\(.*?\)/g, '').trim();
  const desc = item.desc[lang];
  const note = item.note[lang];
  const secondary = lang === 'en' ? null : item.names.en;
  const isAddon = cat === 'addon' || cat === 'veg';
  const tbaText = (UI.tba as Record<Lang, string>)[lang];
  const priceHead = isAddon
    ? (UI.addonHead as Record<Lang, string>)[lang]
    : (UI.priceHead as Record<Lang, string>)[lang];

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      className="modal-overlay open"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={item.names[lang]}
    >
      <div className="modal">
        <div className="modal-grip" />
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M6 6 18 18M18 6 6 18" />
          </svg>
        </button>

        <div className={`modal-hero cat-${cat}`}>
          {item.image ? (
            <img
              src={`./images/${item.image}`}
              alt={item.names.en}
              style={{ width: '100%', height: '100%', objectFit: 'cover', touchAction: 'pinch-zoom' }}
            />
          ) : null}
          <div className="modal-cat-tag">{catDef.en_kicker}</div>
          <div className="modal-name-card">{placeholderText}</div>
        </div>

        <div className="modal-body">
          <h2>{item.names[lang]}</h2>
          {secondary && <div className="modal-sub-name">{secondary}</div>}
          {item.tags.length > 0 && (
            <div className="modal-tags-row">
              {item.tags.map((t) => (
                <TagBadge key={t} code={t} lang={lang} />
              ))}
            </div>
          )}

          <div className="modal-price-block">
            <div className="modal-price-head">{priceHead}</div>
            {item.price.length === 1 && !item.price[0].label ? (
              <div className={`modal-price-row single${isAddon ? ' addon' : ''}`}>
                <span className="modal-opt" />
                <span className={`modal-val${item.price[0].value === 'tba' ? ' tba' : ''}`}>
                  {item.price[0].value === 'tba'
                    ? tbaText
                    : (isAddon ? '+ ' : '') + fmtPrice(item.price[0].value)}
                </span>
              </div>
            ) : (
              item.price.map((p, i) => (
                <div className="modal-price-row" key={i}>
                  <span className="modal-opt">{p.label ? p.label[lang] : ''}</span>
                  <span className={`modal-val${p.value === 'tba' ? ' tba' : ''}`}>
                    {p.value === 'tba' ? tbaText : fmtPrice(p.value)}
                  </span>
                </div>
              ))
            )}
          </div>

          {desc && <div className="modal-desc">{desc}</div>}
          {note && <div className="modal-note">{note}</div>}
        </div>
      </div>
    </div>
  );
}
