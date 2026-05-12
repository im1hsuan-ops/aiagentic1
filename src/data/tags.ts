import type { TagCode, TagDef } from '../types/menu';

export const TAGS: Record<TagCode, TagDef> = {
  R:  { glyph: '★',     names: { zh: '本店推薦', en: "Chef's Pick",   ja: 'おすすめ',      ko: '추천' },          cls: 'tag-R'  },
  '1':{ glyph: '🌶',    names: { zh: '小辣',     en: 'Mild Spicy',    ja: '少し辛い',      ko: '약간 매운' },     cls: 'spicy'  },
  '2':{ glyph: '🌶🌶',  names: { zh: '中辣',     en: 'Medium Spicy',  ja: '中辛',          ko: '보통 매운' },     cls: 'spicy'  },
  '3':{ glyph: '🔥',    names: { zh: '大辣',     en: 'Very Spicy',    ja: '激辛',          ko: '매우 매운' },     cls: 'spicy'  },
  P:  { glyph: '🐷',    names: { zh: '含豬肉',   en: 'Contains Pork', ja: '豚肉入り',      ko: '돼지고기 포함' }, cls: 'meat'   },
  B:  { glyph: '🐂',    names: { zh: '含牛肉',   en: 'Contains Beef', ja: '牛肉入り',      ko: '소고기 포함' },   cls: 'meat'   },
  L:  { glyph: '🐑',    names: { zh: '含羊肉',   en: 'Contains Lamb', ja: 'ラム入り',      ko: '양고기 포함' },   cls: 'meat'   },
  V:  { glyph: '🥬',    names: { zh: '素食',     en: 'Vegetarian',    ja: 'ベジタリアン',  ko: '채식' },          cls: 'tag-V'  },
  H:  { glyph: '☪',    names: { zh: '清真認證', en: 'Halal',          ja: 'ハラール',      ko: '할랄' },          cls: 'tag-H'  },
  V5: { glyph: '🌿',    names: { zh: '五辛素',   en: 'Allium-Free Veg',ja: '五葷素',       ko: '오신채 채식' },   cls: 'tag-V'  },
};
