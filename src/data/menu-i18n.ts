import type { MenuItem, Category } from '../types/menu';

const D = (zh: string, en: string, ja: string, ko: string) => ({ zh, en, ja, ko });
const SINGLE = (v: number | 'tba') => [{ label: null, value: v }];

export const CATEGORIES: Category[] = [
  { key: 'set',   num: '01', names: D('咖哩定食', 'Curry Sets',    'カレー定食',   '카레 정식'),   en_kicker: 'CURRY SETS'   },
  { key: 'addon', num: '02', names: D('主餐加購', 'Main Add-ons',  'メイン追加',   '메인 추가'),   en_kicker: 'MAIN ADD-ONS' },
  { key: 'side',  num: '03', names: D('單點小食', 'À la Carte',    '単品おつまみ', '단품 안주'),   en_kicker: 'À LA CARTE'   },
  { key: 'veg',   num: '04', names: D('配菜加購', 'Side Add-ons',  '副菜追加',     '사이드 추가'), en_kicker: 'SIDE ADD-ONS' },
  { key: 'tea',   num: '05', names: D('冷泡茶',   'Cold-Brew Tea', '水出し茶',     '콜드브루 차'), en_kicker: 'COLD-BREW TEA'},
];

export const MENU: MenuItem[] = [
  // ── Curry Sets ──────────────────────────────────────
  {
    id: 'set-001', category: 'set',
    names: D('山上祕滷牛腱套餐', 'Shan-Shang Braised Beef Shank Set', '山上特製煮込み牛すじセット', '산상 특제 양지 세트'),
    sub:   D('Premium Set', 'Premium Set', 'プレミアム', '프리미엄'),
    price: SINGLE(390),
    tags: ['R', 'B'],
    desc: D(
      '招牌秘滷牛腱搭配韓式泡菜、十口豆干、黃金蒜片、鮮炸南瓜，附山上甜點。本店最頂級的定食。',
      'Our signature braised beef shank with kimchi, marinated tofu, golden garlic chips, fried pumpkin and house dessert. Top-of-line set.',
      '看板の煮込み牛すじに、キムチ・豆干・黄金にんにくチップ・揚げかぼちゃと特製デザートを添えた最上級セット。',
      '시그니처 양지 조림에 김치, 두부, 골든 마늘칩, 호박튀김과 디저트가 함께 나오는 최상급 정식.'
    ),
    note: D('', '', '', ''),
  },
  {
    id: 'set-002', category: 'set',
    names: D('黃金炸豬排咖哩定食', 'Golden Tonkatsu Curry Set', '黄金とんかつカレー定食', '골든 돈카츠 카레 정식'),
    price: SINGLE(375),
    tags: ['P'],
    desc: D(
      '原始咖哩配菜搭配整片香酥炸豬排。',
      'Original curry plate with a full crispy golden pork cutlet.',
      'オリジナルカレーに、一枚まるごとの黄金とんかつ。',
      '오리지널 카레와 통째로 한 장의 골든 돈카츠.'
    ),
    note: D('', '', '', ''),
  },
  {
    id: 'set-003', category: 'set',
    names: D('極★厚切豬排咖哩定食', 'Extra Thick-Cut Tonkatsu Curry Set', '極★厚切りとんかつカレー定食', '극★두꺼운 돈카츠 카레 정식'),
    price: SINGLE(360),
    tags: ['R', 'P'],
    desc: D(
      '原始咖哩配菜與整片極★厚切炸豬里肌，肉香飽滿。',
      'Original curry plate with a thick-cut, fully crispy pork loin cutlet — extra meaty.',
      'オリジナルカレーに、肉感たっぷりの極厚切りロースかつ。',
      '오리지널 카레와 극두꺼운 돈카츠 — 육즙 가득.'
    ),
    note: D('', '', '', ''),
  },
  {
    id: 'set-004', category: 'set',
    names: D('招牌唐揚雞咖哩定食', 'Signature Karaage Curry Set', '看板唐揚げチキンカレー定食', '시그니처 가라아게 카레 정식'),
    price: SINGLE(345),
    tags: ['R'],
    desc: D(
      '原始咖哩配菜與本店秘製鮮嫩雞腿丁。',
      'Original curry plate with our house-marinated juicy chicken thigh karaage.',
      'オリジナルカレーに、特製ジューシー鶏もも唐揚げ。',
      '오리지널 카레와 수제 양념 닭다리살 가라아게.'
    ),
    note: D('', '', '', ''),
  },
  {
    id: 'set-005', category: 'set',
    names: D('豬雞雙拼咖哩定食', 'Pork & Chicken Combo Curry Set', '豚＆鶏盛り合わせカレー定食', '돼지＋닭 콤보 카레 정식'),
    price: SINGLE(325),
    tags: ['P'],
    desc: D(
      '原始咖哩配菜搭配黃金炸豬排與唐揚雞，雙拼一次滿足。',
      'Original curry plate with both golden tonkatsu and karaage chicken.',
      'オリジナルカレーに、黄金とんかつと唐揚げチキンの両盛り。',
      '오리지널 카레에 골든 돈카츠와 가라아게를 한 번에.'
    ),
    note: D('', '', '', ''),
  },
  {
    id: 'set-006', category: 'set',
    names: D('炸蝦天婦羅咖哩定食', 'Shrimp Tempura Curry Set', '海老天ぷらカレー定食', '새우 텐푸라 카레 정식'),
    price: SINGLE(295),
    tags: [],
    desc: D(
      '原始咖哩配菜與兩隻裹粉黃金炸白蝦。',
      'Original curry plate with two golden, breaded white shrimp.',
      'オリジナルカレーに、衣をつけた白海老の天ぷら二尾。',
      '오리지널 카레와 흰 새우 텐푸라 두 마리.'
    ),
    note: D('', '', '', ''),
  },

  // ── Main Add-ons ────────────────────────────────────
  {
    id: 'addon-001', category: 'addon',
    names: D('北海道醬油漬鮭魚卵', 'Hokkaido Soy-Marinated Salmon Roe', '北海道醤油漬けいくら', '홋카이도 간장 절임 연어알'),
    price: SINGLE(45),
    tags: [],
    desc: D(
      '主餐加購選項。北海道進口鮭魚卵以醬油醃漬，鹹鮮回甘。',
      'Main-dish add-on. Hokkaido salmon roe in soy marinade — savory with a sweet finish.',
      'メイン追加用。北海道産いくらの醤油漬け、コクのある旨み。',
      '메인 추가용. 홋카이도산 연어알 간장 절임 — 깊은 감칠맛.'
    ),
    note: D('主餐加購', 'Add to a main', 'メイン追加', '메인에 추가'),
  },
  {
    id: 'addon-002', category: 'addon',
    names: D('炙燒半黃金切達起司', 'Half Torched Golden Cheddar', '炙り黄金チェダー半枚', '구운 골든 체다 반장'),
    price: SINGLE(15),
    tags: [],
    desc: D(
      '主餐加購選項。半片切達起司現場炙燒，香氣四溢。',
      'Main-dish add-on. Half slice of cheddar torched to order — fragrant and gooey.',
      'メイン追加用。チェダーチーズ半枚をその場で炙ります。',
      '메인 추가용. 체다 치즈 반장을 즉석에서 토치로 구워 드립니다.'
    ),
    note: D('主餐加購', 'Add to a main', 'メイン追加', '메인에 추가'),
  },

  // ── À la Carte ──────────────────────────────────────
  {
    id: 'side-001', category: 'side',
    names: D('厚切豬排', 'Thick-Cut Tonkatsu', '厚切りとんかつ', '두꺼운 돈카츠'),
    price: SINGLE(100), tags: ['P'],
    desc: D('酥炸厚切豬里肌，單點供應。', 'Crispy thick-cut pork loin — à la carte.', '厚切り豚ロースの揚げ、単品。', '두꺼운 돈카츠, 단품.'),
    note: D('', '', '', ''),
  },
  {
    id: 'side-002', category: 'side',
    names: D('唐揚嫩雞', 'Tender Karaage', '唐揚げチキン', '가라아게 치킨'),
    price: SINGLE(65), tags: [],
    desc: D('秘製醃漬鮮嫩雞腿丁酥炸。', 'House-marinated chicken thigh fried golden.', '特製マリネの鶏もも唐揚げ。', '수제 양념 닭다리 가라아게.'),
    note: D('', '', '', ''),
  },
  {
    id: 'side-003', category: 'side',
    names: D('黃金炸蝦', 'Golden Fried Shrimp', '黄金エビフライ', '골든 새우튀김'),
    price: SINGLE(65), tags: [],
    desc: D('裹粉酥炸白蝦。', 'Breaded white shrimp, fried golden.', '白海老の黄金衣揚げ。', '흰 새우 골든 튀김.'),
    note: D('', '', '', ''),
  },
  {
    id: 'side-004', category: 'side',
    names: D('黃金脆薯', 'Golden Fries', '黄金フライドポテト', '골든 감자튀김'),
    price: SINGLE(50), tags: ['V'],
    desc: D('酥脆薯條，撒上特調鹽。', 'Crispy fries with house-blend seasoning salt.', '特製塩を振ったクリスピーポテト。', '수제 시즈닝의 바삭한 감자튀김.'),
    note: D('', '', '', ''),
  },
  {
    id: 'side-005', category: 'side',
    names: D('炸洋蔥圈', 'Onion Rings', 'オニオンリング', '어니언링'),
    price: SINGLE(50), tags: ['V'],
    desc: D('酥脆裹粉洋蔥圈。', 'Battered and fried onion rings.', '衣をつけたオニオンリング。', '튀김옷 입힌 어니언링.'),
    note: D('', '', '', ''),
  },
  {
    id: 'side-006', category: 'side',
    names: D('韓式泡菜', 'Korean Kimchi', 'キムチ', '김치'),
    price: SINGLE(40), tags: ['1', 'V'],
    desc: D('韓式泡菜，酸辣開胃。', 'Tangy-spicy Korean kimchi.', '酸味と辛味のあるキムチ。', '새콤매콤한 김치.'),
    note: D('', '', '', ''),
  },
  {
    id: 'side-007', category: 'side',
    names: D('黎麥毛豆', 'Quinoa Edamame', 'キヌアと枝豆', '퀴노아 풋콩'),
    price: SINGLE(40), tags: ['V'],
    desc: D('毛豆與黎麥涼拌，清爽健康。', 'Edamame tossed with quinoa — light and wholesome.', '枝豆とキヌアの和え物、ヘルシー。', '퀴노아와 풋콩 무침, 가볍고 건강하게.'),
    note: D('', '', '', ''),
  },
  {
    id: 'side-008', category: 'side',
    names: D('一口豆干', 'Bite-Size Marinated Tofu', '一口豆干', '한입 두부조림'),
    price: SINGLE(35), tags: ['V'],
    desc: D('入味豆干切丁，鹹香涮口。', 'Marinated firm tofu cut into bite-size pieces.', '味付け豆干の一口切り。', '양념 두부를 한입 크기로.'),
    note: D('', '', '', ''),
  },
  {
    id: 'side-009', category: 'side',
    names: D('紅豆仙草', 'Red Bean Grass Jelly', 'あずき仙草ゼリー', '팥 선초 젤리'),
    price: SINGLE(40), tags: ['V'],
    desc: D('嫩仙草配紅豆，清涼甜點。', 'Silky grass jelly topped with sweet red bean.', 'なめらかな仙草ゼリーとあずき。', '부드러운 선초 젤리에 달콤한 팥.'),
    note: D('', '', '', ''),
  },

  // ── Side Add-ons ────────────────────────────────────
  {
    id: 'veg-001', category: 'veg',
    names: D('胡麻鮮蔬', 'Sesame Vegetable Salad', 'ごま和え野菜', '깨소스 야채'),
    price: SINGLE(50), tags: ['V'],
    desc: D('時令鮮蔬涼拌胡麻醬。', 'Seasonal vegetables dressed with sesame sauce.', '季節野菜のごまドレッシング和え。', '제철 야채에 깨소스를 곁들였습니다.'),
    note: D('', '', '', ''),
  },
  {
    id: 'veg-002', category: 'veg',
    names: D('鮮炸南瓜', 'Fried Pumpkin', '揚げかぼちゃ', '호박튀김'),
    price: SINGLE(35), tags: ['V'],
    desc: D('酥炸南瓜，甜糯香脆。', 'Crispy fried pumpkin — sweet and tender inside.', '外はカリッ、中はホクホクのかぼちゃ揚げ。', '겉바속촉의 호박튀김.'),
    note: D('', '', '', ''),
  },
  {
    id: 'veg-003', category: 'veg',
    names: D('淋鮮奶油', 'Extra Cream Drizzle', '生クリーム追加', '생크림 추가'),
    price: SINGLE(15), tags: ['V'],
    desc: D('加倍鮮奶油，咖哩更香醇。', 'Extra fresh cream — richer, creamier curry.', '生クリーム追加でよりまろやかに。', '생크림 추가로 더 진하게.'),
    note: D('', '', '', ''),
  },
  {
    id: 'veg-004', category: 'veg',
    names: D('多力多滋', 'Doritos', 'ドリトス', '도리토스'),
    price: SINGLE(15), tags: ['V'],
    desc: D('多力多滋撒料加倍。', 'Doubled Doritos topping.', 'ドリトス追加。', '도리토스 토핑 추가.'),
    note: D('', '', '', ''),
  },
  {
    id: 'veg-005', category: 'veg',
    names: D('黃金蒜片', 'Golden Garlic Chips', '黄金にんにくチップ', '골든 마늘칩'),
    price: SINGLE(15), tags: ['V'],
    desc: D('黃金酥脆蒜片撒料加倍。', 'Doubled golden-fried garlic chips.', '黄金にんにくチップ追加。', '골든 마늘칩 추가.'),
    note: D('', '', '', ''),
  },
  {
    id: 'veg-006', category: 'veg',
    names: D('半溏心蛋', 'Half Soft-Boiled Egg', '半熟煮卵 半個', '반숙란 반쪽'),
    price: SINGLE(15), tags: ['V'],
    desc: D('加半顆滷溏心蛋。', 'Add half a soy-marinated soft-boiled egg.', '味玉半個を追加。', '간장 반숙 계란 반쪽 추가.'),
    note: D('', '', '', ''),
  },
  {
    id: 'veg-007', category: 'veg',
    names: D('NG 雞腿骨', 'NG Chicken Bone (Limited)', '鶏もも骨（NG）', '닭다리뼈 (한정)'),
    price: SINGLE(10), tags: [],
    desc: D('唐揚雞剩餘的鮮嫩骨頭部位，限量供應。', 'Tender chicken-bone offcuts from our karaage — limited daily supply.', '唐揚げの骨部分、数量限定。', '가라아게에서 나온 뼈 부위, 한정 수량.'),
    note: D('數量有限', 'Limited', '数量限定', '수량 한정'),
  },

  // ── Cold-Brew Tea ───────────────────────────────────
  {
    id: 'tea-001', category: 'tea',
    names: D('18 號紅玉紅茶', 'No.18 Ruby Black Tea', '18号 紅玉紅茶', '18호 홍옥 홍차'),
    price: SINGLE(120), tags: ['R', 'V'],
    desc: D('台灣魚池鄉紅玉品種，肉桂與薄荷香氣。', "Taiwan's Ruby No.18 cultivar from Yuchi — natural cinnamon and mint aromas.", '台湾魚池の紅玉品種、シナモンとミントの香り。', '대만 위치 홍옥 품종, 시나몬과 민트 향.'),
    note: D('主餐加購折抵 30 元', '30 NT off with a main', 'メイン購入で 30元 引き', '메인 주문시 30NT 할인'),
  },
  {
    id: 'tea-002', category: 'tea',
    names: D('08 號環珞紅茶', 'No.08 Huan-Luo Black Tea', '08号 環珞紅茶', '08호 환락 홍차'),
    price: SINGLE(110), tags: ['V'],
    desc: D('環珞品種，茶湯明亮帶花果香。', 'Huan-Luo cultivar — bright cup with floral and fruity notes.', '環珞品種、明るい水色と花果実の香り。', '환락 품종, 밝은 색감과 꽃·과일 향.'),
    note: D('主餐加購折抵 30 元', '30 NT off with a main', 'メイン購入で 30元 引き', '메인 주문시 30NT 할인'),
  },
  {
    id: 'tea-003', category: 'tea',
    names: D('蜜香貴妃', 'Honey-Scented Guifei', '蜜香貴妃茶', '꿀향 귀비차'),
    price: SINGLE(110), tags: ['V'],
    desc: D('經小綠葉蟬叮咬的茶葉，自然蜜香。', 'Leaves bitten by tea leafhoppers, yielding a natural honey aroma.', 'ウンカに吸われた茶葉、自然な蜜の香り。', '녹엽선매미가 흡즙한 찻잎, 자연 꿀향.'),
    note: D('主餐加購折抵 30 元', '30 NT off with a main', 'メイン購入で 30元 引き', '메인 주문시 30NT 할인'),
  },
  {
    id: 'tea-004', category: 'tea',
    names: D('黃金蕎麥', 'Golden Buckwheat Tea', '黄金そば茶', '골든 메밀차'),
    price: [{ label: null, value: 'tba' }],
    tags: ['V'],
    desc: D('烘焙黃金蕎麥沖泡，無咖啡因。', 'Roasted golden buckwheat infusion — caffeine-free.', '焙煎した黄金そばのお茶、ノンカフェイン。', '볶은 골든 메밀차, 무카페인.'),
    note: D('價格請洽店內', 'Please ask in-store', '価格は店頭にて', '가격은 매장 문의'),
  },
];
