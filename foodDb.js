// 내장 식품 데이터베이스 (100g 또는 1개/인분당 영양소 정보)
// 칼로리(kcal), 탄수화물(g), 단백질(g), 지방(g)

const FOOD_DATABASE = [
  // 1. 기본 피트니스 식단 (100g 기준이 많음)
  { name: "닭가슴살 (구이/100g)", calories: 150, carbs: 0, protein: 31, fat: 3, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "닭가슴살 (생/100g)", calories: 110, carbs: 0, protein: 23, fat: 1.5, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "현미밥 (햇반/210g)", calories: 300, carbs: 68, protein: 6, fat: 1.5, unit: "g", defaultServing: 210, category: "fitness" },
  { name: "현미밥 (100g)", calories: 140, carbs: 32, protein: 3, fat: 0.7, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "백미밥 (햇반/210g)", calories: 315, carbs: 70, protein: 5.5, fat: 0.6, unit: "g", defaultServing: 210, category: "fitness" },
  { name: "백미밥 (100g)", calories: 150, carbs: 33, protein: 2.6, fat: 0.3, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "찐 고구마 (100g)", calories: 130, carbs: 31, protein: 1.5, fat: 0.2, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "달걀 (삶은것/1개)", calories: 75, carbs: 0.5, protein: 6.3, fat: 5, unit: "개", defaultServing: 1, category: "fitness" },
  { name: "달걀 흰자 (삶은것/1개)", calories: 17, carbs: 0.2, protein: 3.5, fat: 0, unit: "개", defaultServing: 1, category: "fitness" },
  { name: "소고기 우둔살 (구이/100g)", calories: 200, carbs: 0, protein: 29, fat: 9, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "연어 구이 (100g)", calories: 200, carbs: 0, protein: 25, fat: 11, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "바나나 (중/1개)", calories: 90, carbs: 23, protein: 1.1, fat: 0.3, unit: "개", defaultServing: 1, category: "fitness" },
  { name: "오트밀 (100g)", calories: 380, carbs: 67, protein: 13, fat: 7, unit: "g", defaultServing: 40, category: "fitness" },
  { name: "단백질 파우더 (WPI/1스쿱)", calories: 120, carbs: 2, protein: 25, fat: 1, unit: "개(스쿱)", defaultServing: 1, category: "fitness" },
  { name: "아몬드 (10알)", calories: 60, carbs: 2, protein: 2.1, fat: 5.4, unit: "개(알)", defaultServing: 10, category: "fitness" },

  // 2. 편의점 가공식품 (1개/1회 제공량 기준)
  { name: "매일유업 더단백 (초코/250ml)", calories: 105, carbs: 9, protein: 20, fat: 1.2, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "빙그레 요플레 프로틴 (250ml)", calories: 170, carbs: 19, protein: 20, fat: 1.5, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "셀렉스 프로틴 드링크 (125ml)", calories: 90, carbs: 10, protein: 8, fat: 2, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "감동란 (2알)", calories: 130, carbs: 1, protein: 12, fat: 9, unit: "개(팩)", defaultServing: 1, category: "convenience" },
  { name: "삼각김밥 (참치마요/1개)", calories: 200, carbs: 35, protein: 4.5, fat: 4.5, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "삼각김밥 (전주비빔/1개)", calories: 180, carbs: 36, protein: 4, fat: 2, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "오뚜기 컵누들 (매콤한맛/1개)", calories: 120, carbs: 27, protein: 1, fat: 0.5, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "닭가슴살 소시지 (편의점/1바)", calories: 120, carbs: 3, protein: 18, fat: 4, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "닭가슴살 핫바 (갈릭/1개)", calories: 115, carbs: 2, protein: 19, fat: 3.5, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "크랩카카 (게살바/1개)", calories: 85, carbs: 9, protein: 10, fat: 0.9, unit: "개", defaultServing: 1, category: "convenience" },
  
  // 3. 주요 프랜차이즈 음식 (1개/1인분 기준)
  { name: "서브웨이 로티세리 바비큐 치킨 (15cm)", calories: 350, carbs: 41, protein: 29, fat: 7.9, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "서브웨이 이탈리안 비엠티 (15cm)", calories: 410, carbs: 40, protein: 21, fat: 18, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "서브웨이 풀드포크 바비큐 (15cm)", calories: 327, carbs: 41, protein: 26, fat: 6, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "샐러디 탄단지 샐러디 (드레싱 제외)", calories: 371, carbs: 36, protein: 19, fat: 18, unit: "개(인분)", defaultServing: 1, category: "franchise" },
  { name: "샐러디 칠리베이컨 웜볼 (드레싱 제외)", calories: 485, carbs: 61, protein: 20, fat: 19, unit: "개(인분)", defaultServing: 1, category: "franchise" },
  { name: "샐러디 시저치킨 샐러디 (드레싱 제외)", calories: 116, carbs: 8, protein: 13, fat: 4, unit: "개(인분)", defaultServing: 1, category: "franchise" },
  { name: "맥도날드 맥스파이시 상하이 버거", calories: 512, carbs: 50, protein: 22, fat: 26, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "맥도날드 빅맥", calories: 582, carbs: 46, protein: 27, fat: 31, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "맥도날드 치즈버거", calories: 310, carbs: 32, protein: 16, fat: 13, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "스타벅스 바비큐 치킨 치즈 치아바타", calories: 329, carbs: 41, protein: 18, fat: 10, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "스타벅스 단호박 에그 샌드위치", calories: 350, carbs: 38, protein: 11, fat: 17, unit: "개", defaultServing: 1, category: "franchise" },

  // 4. 일반 외식 메뉴 (1인분/대접 기준)
  { name: "짬뽕 (1대접/800g)", calories: 688, carbs: 103, protein: 29, fat: 18, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "짜장면 (1그릇/650g)", calories: 797, carbs: 125, protein: 22, fat: 23, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "돼지국밥 (밥 포함/1그릇)", calories: 720, carbs: 85, protein: 42, fat: 22, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "순대국밥 (밥 포함/1그릇)", calories: 650, carbs: 82, protein: 32, fat: 21, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "뼈해장국 (밥 포함/1그릇)", calories: 780, carbs: 80, protein: 48, fat: 28, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "제육볶음 (밥 제외/1인분/200g)", calories: 380, carbs: 15, protein: 26, fat: 24, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "김치찌개 (돼지고기/밥 제외/1인분)", calories: 250, carbs: 8, protein: 18, fat: 16, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "된장찌개 (두부/밥 제외/1인분)", calories: 145, carbs: 11, protein: 9, fat: 7, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "등심 돈까스 (밥 제외/1인분/200g)", calories: 550, carbs: 32, protein: 28, fat: 34, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "치킨 카레라이스 (1인분)", calories: 620, carbs: 95, protein: 20, fat: 18, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "라면 (신라면 기준/1봉지)", calories: 500, carbs: 80, protein: 10, fat: 16, unit: "개", defaultServing: 1, category: "restaurant" },
  { name: "제육덮밥 (1인분)", calories: 750, carbs: 110, protein: 35, fat: 25, unit: "인분", defaultServing: 1, category: "restaurant" },
];
