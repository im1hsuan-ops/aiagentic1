import { forwardRef } from 'react';
import type { MenuItem, Category } from '../types/menu';
import type { Lang } from '../types/menu';
import MenuCard from './MenuCard';
import { UI } from '../data/site-info';

interface Props {
  category: Category;
  items: MenuItem[];
  lang: Lang;
  onOpen: (item: MenuItem) => void;
}

const MenuSection = forwardRef<HTMLElement, Props>(({ category, items, lang, onOpen }, ref) => {
  const itemCount = (UI.itemCount as Record<Lang, string>)[lang];
  return (
    <section ref={ref} data-cat={category.key} className="section">
      <div className="section-head">
        <div className="section-num">{category.num}</div>
        <div className="section-label">
          <div className="section-primary">{category.names[lang]}</div>
          <div className="section-secondary">
            {category.en_kicker} · {items.length} {itemCount}
          </div>
        </div>
      </div>
      <div className="grid">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} lang={lang} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
});

MenuSection.displayName = 'MenuSection';
export default MenuSection;
