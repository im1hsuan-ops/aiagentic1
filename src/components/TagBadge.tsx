import type { TagCode } from '../types/menu';
import type { Lang } from '../types/menu';
import { TAGS } from '../data/tags';

interface Props {
  code: TagCode;
  lang: Lang;
}

export default function TagBadge({ code, lang }: Props) {
  const t = TAGS[code];
  if (!t) return null;
  return (
    <span className={`badge ${t.cls}`}>
      <span className="badge-glyph">{t.glyph}</span>
      <span>{t.names[lang]}</span>
    </span>
  );
}
