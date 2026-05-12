import type { Lang, I18nText } from '../types/menu';

export const PHONE = '0974 032 894';
export const IG_HANDLE = '@3S3S.TW';

export const ADDRESS: Record<Lang, string> = {
  zh: '545 南投縣埔里鎮桃米里桃米路 33-1 號',
  en: 'No. 33-1, Taomi Rd, Taomi Vil., Puli, Nantou 545',
  ja: '545 南投県埔里鎮桃米里桃米路 33-1 号',
  ko: '545 난터우현 푸리진 타오미리 타오미로 33-1',
};

// Mon–Sun (index 0 = Monday). null = closed.
export const HOURS: (string[] | null)[] = [
  ['11:00–15:00', '16:00–18:30'], // Mon
  ['11:00–15:00', '16:00–18:30'], // Tue
  null,                            // Wed closed
  ['11:00–15:00', '16:00–18:30'], // Thu
  ['11:00–15:00', '16:00–18:30'], // Fri
  ['11:00–15:00', '16:00–19:00'], // Sat
  ['11:00–15:00', '16:00–19:00'], // Sun
];

export const UI: Record<string, I18nText | Record<Lang, string[]>> = {
  brand:       { zh: '山上山下',              en: 'SHAN SHANG SHAN XIA',          ja: '山上山下',              ko: '산상산하' },
  brandKicker: { zh: '濃濃咖哩飯 · 南投埔里', en: 'Rich Curry Rice · Puli, Nantou', ja: '濃厚カレーライス · 南投埔里', ko: '진한 카레라이스 · 난터우 푸리' },
  brandSub:    { zh: '日式手作咖哩專門店',     en: 'Handcrafted Japanese-Style Curry House', ja: '日式手作りカレー専門店', ko: '수제 일본식 카레 전문점' },
  address:     { zh: '地址',    en: 'Address',       ja: '住所',      ko: '주소' },
  phone:       { zh: '電話',    en: 'Phone',         ja: '電話',      ko: '전화' },
  hours:       { zh: '營業時間', en: 'Opening Hours', ja: '営業時間',  ko: '영업시간' },
  closed:      { zh: '公休',    en: 'Closed',        ja: '定休日',    ko: '휴무' },
  setBanner:   { zh: '定食內容', en: 'Set Includes',  ja: '定食内容',  ko: '정식 구성' },
  setBannerSub:{ zh: '每份咖哩定食皆包含以下豐富內容', en: 'Every curry set comes with the following', ja: '全てのカレー定食には以下が含まれます', ko: '모든 카레 정식에는 다음이 포함됩니다' },
  itemCount:   { zh: '品項',    en: 'items',         ja: '品目',      ko: '개' },
  priceHead:   { zh: '價格',    en: 'Price',         ja: '価格',      ko: '가격' },
  addonHead:   { zh: '加購',    en: 'Add-on',        ja: '追加',      ko: '추가' },
  tba:         { zh: '請洽店內', en: 'Ask in-store',  ja: '店頭にて',  ko: '매장 문의' },
  noticeHead:  { zh: '用餐須知', en: 'Dining Notes',  ja: 'ご利用のご案内', ko: '이용 안내' },
  footer:      { zh: '歡迎光臨', en: 'WELCOME',        ja: 'いらっしゃいませ', ko: '어서오세요' },
  footerSmall: { zh: '感謝您的光臨 · 用餐愉快', en: 'THANK YOU · ENJOY YOUR MEAL', ja: 'ご来店ありがとうございます', ko: '감사합니다 · 맛있게 드세요' },
  dayLabels: {
    zh: ['週一', '週二', '週三', '週四', '週五', '週六', '週日'],
    en: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    ja: ['月', '火', '水', '木', '金', '土', '日'],
    ko: ['월', '화', '수', '목', '금', '토', '일'],
  },
};

export const SET_INCLUDES: { k: I18nText; v: I18nText }[] = [
  { k: { zh: '咖哩配菜', en: 'Curry sides',   ja: 'カレー副菜',   ko: '카레 사이드' },
    v: { zh: '馬鈴薯、紅蘿蔔、滷心蛋、炸南瓜、小黃瓜、番茄片',
         en: 'Potato, carrot, soy-marinated egg, fried pumpkin, cucumber, tomato slices',
         ja: 'じゃがいも、人参、味玉、揚げかぼちゃ、きゅうり、トマト',
         ko: '감자, 당근, 간장 절임 계란, 호박튀김, 오이, 토마토' } },
  { k: { zh: '小菜',     en: 'Small dish',    ja: '小鉢',          ko: '반찬' },
    v: { zh: '黎麥魚卵拌毛豆 / 韓式泡菜（二選一）',
         en: 'Quinoa edamame with roe / Korean kimchi (choose one)',
         ja: 'キヌアと枝豆の魚卵和え／キムチ（選択）',
         ko: '퀴노아 풋콩 어란 무침 / 김치 (택1)' } },
  { k: { zh: '撒料',     en: 'Topping',       ja: 'トッピング',    ko: '토핑' },
    v: { zh: '多力多滋 / 黃金蒜片（二選一）',
         en: 'Doritos / Golden garlic chips (choose one)',
         ja: 'ドリトス／黄金にんにくチップ（選択）',
         ko: '도리토스 / 골든 마늘칩 (택1)' } },
  { k: { zh: '配料',     en: 'Drizzle',       ja: '仕上げ',        ko: '드리즐' },
    v: { zh: '淋鮮奶油',
         en: 'Fresh cream drizzle',
         ja: '生クリームがけ',
         ko: '생크림 드리즐' } },
  { k: { zh: '甜點',     en: 'Dessert',       ja: 'デザート',      ko: '디저트' },
    v: { zh: '紅豆奶油嫩仙草',
         en: 'Red bean cream grass jelly',
         ja: 'あずきクリーム仙草ゼリー',
         ko: '팥크림 선초 젤리' } },
];

export const NOTICES: Record<Lang, string[]> = {
  zh: [
    '請完成實聯制登記',
    '餐點現做，敬請耐心等候',
    '每人基本消費為一份主餐',
    '未點主餐者恕無法提供座位',
    '座位有限，請多包涵',
  ],
  en: [
    'Please complete contact-tracing registration',
    'All dishes made to order — thank you for your patience',
    'Minimum order: one main dish per person',
    'Seating unavailable without a main-dish order',
    'Seating is limited — thanks for understanding',
  ],
  ja: [
    '実聯制（連絡先登録）にご協力ください',
    '全てお作りしてからの提供となります',
    'お一人様メイン一品以上のご注文をお願いします',
    'メイン未注文の方の席のご利用はご遠慮ください',
    '席数に限りがございます',
  ],
  ko: [
    '방문 등록을 완료해 주세요',
    '주문 후 조리됩니다 — 양해 부탁드립니다',
    '1인당 메인 메뉴 1개 이상 주문 부탁드립니다',
    '메인 메뉴 미주문 시 좌석 이용 불가',
    '좌석 수가 한정되어 있습니다',
  ],
};
