// 店家維護的簡化菜單原始資料（純中文）
// 若需新增或修改品項，請直接編輯此檔，並同步更新 menu-i18n.ts 的翻譯。

export interface RawMenuItem {
  id: string;
  category: 'set' | 'addon' | 'side' | 'veg' | 'tea';
  name: string;
  price: { label?: string; value: number | 'tba' }[];
  tags: string[];
  desc: string;
  note?: string;
  image?: string | null;
  emoji?: string;
}

export const menuRaw: RawMenuItem[] = [
  // ── 咖哩定食 ──────────────────────────────────────────
  { id: 'set-001', category: 'set',   name: '山上祕滷牛腱套餐',    price: [{ value: 390 }], tags: ['R', 'B'], desc: '招牌秘滷牛腱搭配韓式泡菜、十口豆干、黃金蒜片、鮮炸南瓜，附山上甜點。本店最頂級的定食。', note: '' },
  { id: 'set-002', category: 'set',   name: '黃金炸豬排咖哩定食',  price: [{ value: 375 }], tags: ['P'],      desc: '原始咖哩配菜搭配整片香酥炸豬排。', note: '' },
  { id: 'set-003', category: 'set',   name: '極★厚切豬排咖哩定食', price: [{ value: 360 }], tags: ['R', 'P'], desc: '原始咖哩配菜與整片極★厚切炸豬里肌，肉香飽滿。', note: '' },
  { id: 'set-004', category: 'set',   name: '招牌唐揚雞咖哩定食',  price: [{ value: 345 }], tags: ['R'],      desc: '原始咖哩配菜與本店秘製鮮嫩雞腿丁。', note: '' },
  { id: 'set-005', category: 'set',   name: '豬雞雙拼咖哩定食',    price: [{ value: 325 }], tags: ['P'],      desc: '原始咖哩配菜搭配黃金炸豬排與唐揚雞，雙拼一次滿足。', note: '' },
  { id: 'set-006', category: 'set',   name: '炸蝦天婦羅咖哩定食',  price: [{ value: 295 }], tags: [],         desc: '原始咖哩配菜與兩隻裹粉黃金炸白蝦。', note: '' },

  // ── 主餐加購 ──────────────────────────────────────────
  { id: 'addon-001', category: 'addon', name: '北海道醬油漬鮭魚卵', price: [{ value: 45  }], tags: [],         desc: '主餐加購選項。北海道進口鮭魚卵以醬油醃漬，鹹鮮回甘。', note: '主餐加購' },
  { id: 'addon-002', category: 'addon', name: '炙燒半黃金切達起司', price: [{ value: 15  }], tags: [],         desc: '主餐加購選項。半片切達起司現場炙燒，香氣四溢。', note: '主餐加購' },

  // ── 單點小食 ──────────────────────────────────────────
  { id: 'side-001', category: 'side', name: '厚切豬排',   price: [{ value: 100 }], tags: ['P'],      desc: '酥炸厚切豬里肌，單點供應。', note: '' },
  { id: 'side-002', category: 'side', name: '唐揚嫩雞',   price: [{ value: 65  }], tags: [],         desc: '秘製醃漬鮮嫩雞腿丁酥炸。', note: '' },
  { id: 'side-003', category: 'side', name: '黃金炸蝦',   price: [{ value: 65  }], tags: [],         desc: '裹粉酥炸白蝦。', note: '' },
  { id: 'side-004', category: 'side', name: '黃金脆薯',   price: [{ value: 50  }], tags: ['V'],      desc: '酥脆薯條，撒上特調鹽。', note: '' },
  { id: 'side-005', category: 'side', name: '炸洋蔥圈',   price: [{ value: 50  }], tags: ['V'],      desc: '酥脆裹粉洋蔥圈。', note: '' },
  { id: 'side-006', category: 'side', name: '韓式泡菜',   price: [{ value: 40  }], tags: ['1', 'V'], desc: '韓式泡菜，酸辣開胃。', note: '' },
  { id: 'side-007', category: 'side', name: '黎麥毛豆',   price: [{ value: 40  }], tags: ['V'],      desc: '毛豆與黎麥涼拌，清爽健康。', note: '' },
  { id: 'side-008', category: 'side', name: '一口豆干',   price: [{ value: 35  }], tags: ['V'],      desc: '入味豆干切丁，鹹香涮口。', note: '' },
  { id: 'side-009', category: 'side', name: '紅豆仙草',   price: [{ value: 40  }], tags: ['V'],      desc: '嫩仙草配紅豆，清涼甜點。', note: '' },

  // ── 配菜加購 ──────────────────────────────────────────
  { id: 'veg-001', category: 'veg', name: '胡麻鮮蔬',  price: [{ value: 50 }], tags: ['V'],   desc: '時令鮮蔬涼拌胡麻醬。', note: '' },
  { id: 'veg-002', category: 'veg', name: '鮮炸南瓜',  price: [{ value: 35 }], tags: ['V'],   desc: '酥炸南瓜，甜糯香脆。', note: '' },
  { id: 'veg-003', category: 'veg', name: '淋鮮奶油',  price: [{ value: 15 }], tags: ['V'],   desc: '加倍鮮奶油，咖哩更香醇。', note: '' },
  { id: 'veg-004', category: 'veg', name: '多力多滋',  price: [{ value: 15 }], tags: ['V'],   desc: '多力多滋撒料加倍。', note: '' },
  { id: 'veg-005', category: 'veg', name: '黃金蒜片',  price: [{ value: 15 }], tags: ['V'],   desc: '黃金酥脆蒜片撒料加倍。', note: '' },
  { id: 'veg-006', category: 'veg', name: '半溏心蛋',  price: [{ value: 15 }], tags: ['V'],   desc: '加半顆滷溏心蛋。', note: '' },
  { id: 'veg-007', category: 'veg', name: 'NG 雞腿骨', price: [{ value: 10 }], tags: [],       desc: '唐揚雞剩餘的鮮嫩骨頭部位，限量供應。', note: '數量有限' },

  // ── 冷泡茶 ────────────────────────────────────────────
  { id: 'tea-001', category: 'tea', name: '18 號紅玉紅茶', price: [{ value: 120       }], tags: ['R', 'V'], desc: '台灣魚池鄉紅玉品種，肉桂與薄荷香氣。', note: '主餐加購折抵 30 元' },
  { id: 'tea-002', category: 'tea', name: '08 號環珞紅茶', price: [{ value: 110       }], tags: ['V'],      desc: '環珞品種，茶湯明亮帶花果香。', note: '主餐加購折抵 30 元' },
  { id: 'tea-003', category: 'tea', name: '蜜香貴妃',       price: [{ value: 110       }], tags: ['V'],      desc: '經小綠葉蟬叮咬的茶葉，自然蜜香。', note: '主餐加購折抵 30 元' },
  { id: 'tea-004', category: 'tea', name: '黃金蕎麥',       price: [{ value: 'tba'    }], tags: ['V'],      desc: '烘焙黃金蕎麥沖泡，無咖啡因。', note: '價格請洽店內' },
];
