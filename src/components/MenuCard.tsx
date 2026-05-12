import type { MenuItem, Lang } from '../types/menu';
import TagBadge from './TagBadge';
import { UI } from '../data/site-info';

function fmtPrice(v: number | 'tba'): string | null {
  if (v === 'tba') return null;
  return `NT$ ${v}`;
}

interface PriceProps {
  item: MenuItem;
  lang: Lang;
}

function PriceSummary({ item, lang }: PriceProps) {
  const { price, category } = item;
  const isAddon = category === 'addon' || category === 'veg';
  const tbaText = (UI.tba as Record<Lang, string>)[lang];

  if (price.length === 1 && !price[0].label) {
    const v = price[0].value;
    if (v === 'tba') return <div className="price-tba">{tbaText}</div>;
    return (
      <div className={`price-single${isAddon ? ' addon' : ''}`}>
        {isAddon ? `+ NT$ ${v}` : `NT$ ${v}`}
      </div>
    );
  }

  return (
    <div className="prices">
      {price.map((p, i) => (
        <div className="price-row-item" key={i}>
          <span className="price-opt">{p.label ? p.label[lang] : ''}</span>
          <span className="price-val">
            {p.value === 'tba' ? tbaText : fmtPrice(p.value)}
          </span>
        </div>
      ))}
    </div>
  );
}

interface Props {
  item: MenuItem;
  lang: Lang;
  onOpen: (item: MenuItem) => void;
}

export default function MenuCard({ item, lang, onOpen }: Props) {
  const placeholderText = item.names.en.replace(/\(.*?\)/g, '').trim().split(/[·,]/)[0].trim();

  return (
    <button className="item" onClick={() => onOpen(item)} aria-label={item.names[lang]}>
      <div className={`thumb cat-${item.category}`}>
        {item.image ? (
          <img src={`./images/${item.image}`} alt={item.names.en} loading="lazy" />
        ) : (
          <>
            <div className="thumb-tint" />
            <div className="thumb-name">{placeholderText}</div>
          </>
        )}
      </div>
      <div className="item-meta">
        <div className="item-name">{item.names[lang]}</div>
        {item.sub && <div className="item-name-sub">{item.sub[lang]}</div>}
        <PriceSummary item={item} lang={lang} />
        {item.tags.length > 0 && (
          <div className="item-tags">
            {item.tags.map((t) => (
              <TagBadge key={t} code={t} lang={lang} />
            ))}
          </div>
        )}
      </div>
    </button>
  );
}
