import { useLang } from '../hooks/useLanguage';
import { CATEGORIES } from '../data/menu-i18n';
import { UI } from '../data/site-info';
import type { Lang } from '../types/menu';

interface Props {
  activeCat: string;
  itemCounts: Record<string, number>;
  onScrollTo: (key: string) => void;
}

export default function CategoryNav({ activeCat, itemCounts, onScrollTo }: Props) {
  const { lang } = useLang();
  return (
    <div className="tabs">
      {CATEGORIES.map((c) => (
        <button
          key={c.key}
          className={c.key === activeCat ? 'active' : ''}
          onClick={() => onScrollTo(c.key)}
        >
          {c.names[lang as Lang]}
          <span className="tab-count">{itemCounts[c.key]}</span>
        </button>
      ))}
    </div>
  );
}

export { UI };
