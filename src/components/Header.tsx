import { useLang } from '../hooks/useLanguage';
import { UI, ADDRESS, PHONE, IG_HANDLE, HOURS, SET_INCLUDES, NOTICES } from '../data/site-info';
import type { Lang } from '../types/menu';

function HoursList({ lang }: { lang: Lang }) {
  const days = (UI.dayLabels as Record<Lang, string[]>)[lang];
  const jsDay = new Date().getDay();
  const todayIdx = (jsDay + 6) % 7; // JS Sunday=0, our array Monday=0
  return (
    <ul className="hours-list">
      {HOURS.map((slots, i) => {
        const isToday = i === todayIdx;
        const closed = !slots;
        return (
          <li key={i} className={`${isToday ? 'today' : ''} ${closed ? 'closed' : ''}`}>
            <span className="day">{days[i]}</span>
            <span className="hours-val">
              {closed ? (UI.closed as Record<Lang, string>)[lang] : slots.join(' · ')}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function SetBanner({ lang }: { lang: Lang }) {
  return (
    <div className="set-banner">
      <div className="stamp">{(UI.setBanner as Record<Lang, string>)[lang]}</div>
      <h3>{(UI.setBannerSub as Record<Lang, string>)[lang]}</h3>
      <div className="set-rows">
        {SET_INCLUDES.map((r, i) => (
          <div className="set-row" key={i}>
            <span className="set-tag">{r.k[lang]}</span>
            <span className="set-val">{r.v[lang]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Notice({ lang }: { lang: Lang }) {
  return (
    <div className="notice">
      <h3>{(UI.noticeHead as Record<Lang, string>)[lang]}</h3>
      <ul>
        {NOTICES[lang].map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Header() {
  const { lang } = useLang();

  return (
    <>
      <div className="hero">
        <img src="./images/hero.png" alt="山上山下" loading="eager" />
        <div className="hero-title">
          <div className="kicker">{(UI.brandKicker as Record<Lang, string>)[lang]}</div>
          <h1>{(UI.brand as Record<Lang, string>)[lang]}</h1>
          <div className="hero-sub">{(UI.brandSub as Record<Lang, string>)[lang]}</div>
          <div className="ig-handle">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
            <span>{IG_HANDLE}</span>
          </div>
        </div>
      </div>

      <div className="info">
        <div className="info-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12Z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <div>
            <div className="info-label">{(UI.address as Record<Lang, string>)[lang]}</div>
            <div className="info-value">
              {ADDRESS[lang]}
              {lang !== 'zh' && <span className="info-secondary">{ADDRESS.zh}</span>}
            </div>
          </div>
        </div>

        <div className="info-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
          </svg>
          <div>
            <div className="info-label">{(UI.phone as Record<Lang, string>)[lang]}</div>
            <div className="info-value">
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {PHONE}
              </a>
            </div>
          </div>
        </div>

        <div className="info-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
          <div style={{ flex: 1 }}>
            <div className="info-label">{(UI.hours as Record<Lang, string>)[lang]}</div>
            <HoursList lang={lang} />
          </div>
        </div>
      </div>

      <SetBanner lang={lang} />
    </>
  );
}
