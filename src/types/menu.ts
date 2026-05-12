export type Lang = 'zh' | 'en' | 'ja' | 'ko';

export type I18nText = Record<Lang, string>;

export type CategoryKey = 'set' | 'addon' | 'side' | 'veg' | 'tea';

export type TagCode = 'R' | '1' | '2' | '3' | 'P' | 'B' | 'L' | 'V' | 'H' | 'V5';

export interface PriceOption {
  label: I18nText | null;
  value: number | 'tba';
}

export interface MenuItem {
  id: string;
  category: CategoryKey;
  names: I18nText;
  sub?: I18nText;
  price: PriceOption[];
  tags: TagCode[];
  desc: I18nText;
  note: I18nText;
  image?: string | null;
  emoji?: string;
}

export interface Category {
  key: CategoryKey;
  num: string;
  names: I18nText;
  en_kicker: string;
}

export interface TagDef {
  glyph: string;
  names: I18nText;
  cls: string;
}
