import { useLang } from '../hooks/useLanguage';
import type { Lang } from '../types/menu';

const LANGS: { key: Lang; label: string }[] = [
  { key: 'zh', label: '繁' },
  { key: 'en', label: 'EN' },
  { key: 'ja', label: '日' },
  { key: 'ko', label: '한' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-switch" role="tablist" aria-label="Language">
      {LANGS.map((l) => (
        <button
          key={l.key}
          role="tab"
          aria-selected={l.key === lang}
          className={l.key === lang ? 'active' : ''}
          onClick={() => setLang(l.key)}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
