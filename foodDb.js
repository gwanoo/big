// 오프라인 전용 고기능성 식품 데이터베이스 (150개 이상)
// 100g 또는 1개/인분 기준
// 칼로리(kcal), 탄수화물(g), 단백질(g), 지방(g)

const FOOD_DATABASE = [
  // ==========================================
  // 1. 피트니스 / 클린 식단 (Fitness)
  // ==========================================
  { name: "닭가슴살 (생/100g)", calories: 110, carbs: 0, protein: 23, fat: 1.5, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "닭가슴살 (구이/100g)", calories: 150, carbs: 0, protein: 31, fat: 3, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "닭가슴살 (훈제/100g)", calories: 120, carbs: 1, protein: 25, fat: 2, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "닭가슴살 수비드 (100g)", calories: 115, carbs: 0.8, protein: 24, fat: 1.8, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "닭가슴살 큐브 (100g)", calories: 130, carbs: 4, protein: 21, fat: 3, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "닭가슴살 스테이크 (100g)", calories: 140, carbs: 5, protein: 20, fat: 4, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "소고기 우둔살 (구이/100g)", calories: 200, carbs: 0, protein: 29, fat: 9, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "소고기 부채살 (구이/100g)", calories: 195, carbs: 0, protein: 27, fat: 9.5, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "소고기 홍두깨살 (생/100g)", calories: 130, carbs: 0, protein: 22, fat: 4.5, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "돼지 안심 (구이/100g)", calories: 175, carbs: 0, protein: 30, fat: 5, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "돼지 등심 (구이/100g)", calories: 210, carbs: 0, protein: 27, fat: 11, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "돼지 뒷다리살 (생/100g)", calories: 125, carbs: 0, protein: 22, fat: 3.5, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "연어 구이 (100g)", calories: 200, carbs: 0, protein: 25, fat: 11, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "틸라피아 구이 (역돔/100g)", calories: 110, carbs: 0, protein: 23, fat: 2, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "광어회 (100g)", calories: 105, carbs: 0, protein: 20, fat: 2, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "참치캔 (살코기/기름뺀것/100g)", calories: 120, carbs: 0, protein: 26, fat: 2, unit: "g", defaultServing: 100, category: "fitness" },
  
  { name: "현미밥 (햇반/210g)", calories: 300, carbs: 68, protein: 6, fat: 1.5, unit: "g", defaultServing: 210, category: "fitness" },
  { name: "현미밥 (100g)", calories: 140, carbs: 32, protein: 3, fat: 0.7, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "백미밥 (햇반/210g)", calories: 315, carbs: 70, protein: 5.5, fat: 0.6, unit: "g", defaultServing: 210, category: "fitness" },
  { name: "백미밥 (100g)", calories: 150, carbs: 33, protein: 2.6, fat: 0.3, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "흑미밥 (햇반/210g)", calories: 330, carbs: 72, protein: 6, fat: 1, unit: "g", defaultServing: 210, category: "fitness" },
  { name: "잡곡밥 (100g)", calories: 145, carbs: 31, protein: 3.5, fat: 0.9, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "곤약현미밥 (햇반/150g)", calories: 120, carbs: 26, protein: 2.5, fat: 0.8, unit: "g", defaultServing: 150, category: "fitness" },
  
  { name: "찐 고구마 (100g)", calories: 130, carbs: 31, protein: 1.5, fat: 0.2, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "군 고구마 (100g)", calories: 140, carbs: 33, protein: 1.6, fat: 0.3, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "고구마 말랭이 (60g/1봉)", calories: 180, carbs: 42, protein: 2, fat: 0.5, unit: "개", defaultServing: 1, category: "fitness" },
  { name: "찐 감자 (100g)", calories: 80, carbs: 18, protein: 2, fat: 0.1, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "오트밀 (100g)", calories: 380, carbs: 67, protein: 13, fat: 7, unit: "g", defaultServing: 40, category: "fitness" },
  
  { name: "달걀 (삶은것/1개)", calories: 75, carbs: 0.5, protein: 6.3, fat: 5, unit: "개", defaultServing: 1, category: "fitness" },
  { name: "달걀 흰자 (삶은것/1개)", calories: 17, carbs: 0.2, protein: 3.5, fat: 0, unit: "개", defaultServing: 1, category: "fitness" },
  { name: "달걀 노른자 (삶은것/1개)", calories: 55, carbs: 0.3, protein: 2.7, fat: 4.8, unit: "개", defaultServing: 1, category: "fitness" },
  { name: "계란후라이 (1개/식용유사용)", calories: 95, carbs: 0.5, protein: 6.3, fat: 7.5, unit: "개", defaultServing: 1, category: "fitness" },
  
  { name: "바나나 (중/1개)", calories: 90, carbs: 23, protein: 1.1, fat: 0.3, unit: "개", defaultServing: 1, category: "fitness" },
  { name: "사과 (중/1개)", calories: 110, carbs: 28, protein: 0.5, fat: 0.3, unit: "개", defaultServing: 1, category: "fitness" },
  { name: "아보카도 (100g)", calories: 160, carbs: 8.5, protein: 2, fat: 14.7, unit: "g", defaultServing: 100, category: "fitness" },
  { name: "방울토마토 (10개/150g)", calories: 25, carbs: 5.5, protein: 1.2, fat: 0.2, unit: "개(묶음)", defaultServing: 1, category: "fitness" },
  { name: "블루베리 (100g)", calories: 57, carbs: 14, protein: 0.7, fat: 0.3, unit: "g", defaultServing: 100, category: "fitness" },
  
  { name: "단백질 쉐이크 (WPI/1스쿱)", calories: 120, carbs: 2, protein: 25, fat: 1, unit: "개(스쿱)", defaultServing: 1, category: "fitness" },
  { name: "단백질 쉐이크 (WPC/1스쿱)", calories: 130, carbs: 4, protein: 24, fat: 2, unit: "개(스쿱)", defaultServing: 1, category: "fitness" },
  { name: "아몬드 (10알)", calories: 60, carbs: 2, protein: 2.1, fat: 5.4, unit: "개(알)", defaultServing: 10, category: "fitness" },
  { name: "땅콩버터 (1스푼/15g)", calories: 90, carbs: 3, protein: 3.5, fat: 7.5, unit: "g", defaultServing: 15, category: "fitness" },
  
  // ==========================================
  // 2. 편의점 즉석 식품 (Convenience Store)
  // ==========================================
  { name: "매일유업 더단백 (초코/250ml)", calories: 105, carbs: 9, protein: 20, fat: 1.2, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "매일유업 더단백 (카라멜/250ml)", calories: 105, carbs: 9, protein: 20, fat: 1.2, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "빙그레 요플레 프로틴 (초코/250ml)", calories: 170, carbs: 19, protein: 20, fat: 1.5, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "셀렉스 프로틴 드링크 (초코/125ml)", calories: 90, carbs: 10, protein: 8, fat: 2, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "일동후디스 하이뮨 액티브 (250ml)", calories: 125, carbs: 10, protein: 20, fat: 1, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "랩노쉬 프로틴 드링크 (마일드카카오)", calories: 160, carbs: 15, protein: 27, fat: 1.5, unit: "개", defaultServing: 1, category: "convenience" },
  
  { name: "감동란 (2알)", calories: 130, carbs: 1, protein: 12, fat: 9, unit: "개(팩)", defaultServing: 1, category: "convenience" },
  { name: "닭가슴살 소시지 (편의점/1바)", calories: 120, carbs: 3, protein: 18, fat: 4, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "닭가슴살 핫바 (갈릭/1개)", calories: 115, carbs: 2, protein: 19, fat: 3.5, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "크랩카카 (게살바/1개)", calories: 85, carbs: 9, protein: 10, fat: 0.9, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "한성크래미 (150g)", calories: 135, carbs: 15, protein: 14, fat: 1.5, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "CJ 덤벨 닭가슴살 육포 (1봉)", calories: 95, carbs: 4, protein: 15, fat: 2, unit: "개", defaultServing: 1, category: "convenience" },
  
  { name: "삼각김밥 (참치마요/1개)", calories: 200, carbs: 35, protein: 4.5, fat: 4.5, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "삼각김밥 (전주비빔/1개)", calories: 180, carbs: 36, protein: 4, fat: 2, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "삼각김밥 (소고기고추장/1개)", calories: 185, carbs: 38, protein: 4, fat: 1.8, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "삼각김밥 (스팸마요/1개)", calories: 215, carbs: 34, protein: 5, fat: 6.5, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "GS25 혜자로운 도시락 (제육/평균)", calories: 730, carbs: 98, protein: 28, fat: 25, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "CU 백종원 한판 도시락 (평균)", calories: 780, carbs: 105, protein: 30, fat: 27, unit: "개", defaultServing: 1, category: "convenience" },
  
  { name: "오뚜기 컵누들 (매콤한맛/1개)", calories: 120, carbs: 27, protein: 1, fat: 0.5, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "오뚜기 컵누들 (우동맛/1개)", calories: 120, carbs: 27, protein: 1.2, fat: 0.5, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "오뚜기 컵누들 (매콤찜닭맛/1개)", calories: 150, carbs: 33, protein: 2, fat: 1, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "육개장 사발면 (편의점 소컵/1개)", calories: 375, carbs: 53, protein: 7, fat: 15, unit: "개", defaultServing: 1, category: "convenience" },
  { name: "불닭볶음면 (소컵/1개)", calories: 290, carbs: 42, protein: 6, fat: 11, unit: "개", defaultServing: 1, category: "convenience" },
  
  // ==========================================
  // 3. 주요 프랜차이즈 (Franchise)
  // ==========================================
  { name: "서브웨이 로티세리 바비큐 치킨 (15cm)", calories: 350, carbs: 41, protein: 29, fat: 7.9, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "서브웨이 이탈리안 비엠티 (15cm)", calories: 410, carbs: 40, protein: 21, fat: 18, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "서브웨이 풀드포크 바비큐 (15cm)", calories: 327, carbs: 41, protein: 26, fat: 6, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "서브웨이 치킨 데리야끼 (15cm)", calories: 314, carbs: 47, protein: 26, fat: 4, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "서브웨이 스테이크 & 치즈 (15cm)", calories: 355, carbs: 40, protein: 28, fat: 9, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "서브웨이 클럽 (15cm)", calories: 299, carbs: 41, protein: 21, fat: 5.7, unit: "개", defaultServing: 1, category: "franchise" },
  
  { name: "샐러디 탄단지 샐러디 (드레싱 제외)", calories: 371, carbs: 36, protein: 19, fat: 18, unit: "개(인분)", defaultServing: 1, category: "franchise" },
  { name: "샐러디 칠리베이컨 웜볼 (드레싱 제외)", calories: 485, carbs: 61, protein: 20, fat: 19, unit: "개(인분)", defaultServing: 1, category: "franchise" },
  { name: "샐러디 우삼겹 웜볼 (드레싱 제외)", calories: 410, carbs: 45, protein: 19, fat: 17, unit: "개(인분)", defaultServing: 1, category: "franchise" },
  { name: "샐러디 시저치킨 샐러디 (드레싱 제외)", calories: 116, carbs: 8, protein: 13, fat: 4, unit: "개(인분)", defaultServing: 1, category: "franchise" },
  { name: "샐러디 멕시칸 랩 (드레싱 제외)", calories: 350, carbs: 42, protein: 14, fat: 14, unit: "개", defaultServing: 1, category: "franchise" },
  
  { name: "맥도날드 맥스파이시 상하이 버거", calories: 512, carbs: 50, protein: 22, fat: 26, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "맥도날드 빅맥", calories: 582, carbs: 46, protein: 27, fat: 31, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "맥도날드 치즈버거", calories: 310, carbs: 32, protein: 16, fat: 13, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "맥도날드 1955 버거", calories: 540, carbs: 48, protein: 29, fat: 28, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "버거킹 와퍼 (기본)", calories: 619, carbs: 49, protein: 29, fat: 35, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "버거킹 와퍼 주니어", calories: 399, carbs: 32, protein: 17, fat: 22, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "버거킹 통새우 와퍼 주니어", calories: 380, carbs: 31, protein: 17, fat: 20, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "롯데리아 불고기버거", calories: 430, carbs: 48, protein: 17, fat: 19, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "롯데리아 데리버거", calories: 355, carbs: 40, protein: 13, fat: 16, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "맘스터치 싸이버거", calories: 594, carbs: 55, protein: 28, fat: 29, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "맘스터치 휠렛버거", calories: 580, carbs: 53, protein: 32, fat: 26, unit: "개", defaultServing: 1, category: "franchise" },
  
  { name: "스타벅스 바비큐 치킨 치즈 치아바타", calories: 329, carbs: 41, protein: 18, fat: 10, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "스타벅스 단호박 에그 샌드위치", calories: 350, carbs: 38, protein: 11, fat: 17, unit: "개", defaultServing: 1, category: "franchise" },
  { name: "스타벅스 크랜베리 치킨 치즈 샌드위치", calories: 364, carbs: 37, protein: 14, fat: 18, unit: "개", defaultServing: 1, category: "franchise" },

  // ==========================================
  // 4. 일반 외식 메뉴 및 배달 (Restaurant)
  // ==========================================
  // 국밥 및 해장국류
  { name: "돼지국밥 (밥 포함/1그릇)", calories: 720, carbs: 85, protein: 42, fat: 22, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "순대국밥 (밥 포함/1그릇)", calories: 650, carbs: 82, protein: 32, fat: 21, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "소머리국밥 (밥 포함/1그릇)", calories: 580, carbs: 78, protein: 36, fat: 14, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "뼈해장국 (밥 포함/1그릇)", calories: 780, carbs: 80, protein: 48, fat: 28, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "설렁탕 (밥 포함/1그릇)", calories: 510, carbs: 75, protein: 28, fat: 10, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "갈비탕 (밥 포함/1그릇)", calories: 550, carbs: 76, protein: 35, fat: 12, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "내장탕 (밥 포함/1그릇)", calories: 680, carbs: 79, protein: 40, fat: 22, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "삼계탕 (닭 반마리 기준/밥 포함)", calories: 600, carbs: 55, protein: 50, fat: 20, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "콩나물국밥 (밥 포함/1그릇)", calories: 420, carbs: 80, protein: 12, fat: 5, unit: "인분", defaultServing: 1, category: "restaurant" },
  
  // 중식 및 볶음 요리
  { name: "짬뽕 (1대접/800g)", calories: 688, carbs: 103, protein: 29, fat: 18, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "짜장면 (1그릇/650g)", calories: 797, carbs: 125, protein: 22, fat: 23, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "간짜장 (1그릇)", calories: 825, carbs: 120, protein: 24, fat: 27, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "울면 (1그릇)", calories: 560, carbs: 98, protein: 18, fat: 10, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "탕수육 (소크기/1인분/200g)", calories: 450, carbs: 55, protein: 18, fat: 18, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "잡채 (1대접/150g)", calories: 230, carbs: 38, protein: 4, fat: 7, unit: "인분", defaultServing: 1, category: "restaurant" },
  
  // 찌개 및 탕류 (밥 제외)
  { name: "김치찌개 (돼지고기/밥 제외/1인분)", calories: 250, carbs: 8, protein: 18, fat: 16, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "된장찌개 (두부/밥 제외/1인분)", calories: 145, carbs: 11, protein: 9, fat: 7, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "부대찌개 (햄/라면반쪽포함/밥 제외/1인분)", calories: 450, carbs: 32, protein: 24, fat: 25, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "순두부찌개 (바지락/밥 제외/1인분)", calories: 180, carbs: 9, protein: 13, fat: 10, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "청국장 (두부/밥 제외/1인분)", calories: 210, carbs: 16, protein: 14, fat: 10, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "추어탕 (밥 제외/1그릇)", calories: 220, carbs: 12, protein: 18, fat: 11, unit: "인분", defaultServing: 1, category: "restaurant" },
  
  // 면 및 분식
  { name: "라면 (신라면 등 매운라면/1봉지)", calories: 500, carbs: 80, protein: 10, fat: 16, unit: "개", defaultServing: 1, category: "restaurant" },
  { name: "잔치국수 (1그릇)", calories: 420, carbs: 85, protein: 12, fat: 3, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "비빔국수 (1그릇)", calories: 550, carbs: 105, protein: 11, fat: 9, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "물냉면 (밥 포함/1그릇)", calories: 520, carbs: 110, protein: 15, fat: 2, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "비빔냉면 (1그릇)", calories: 580, carbs: 118, protein: 14, fat: 5, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "마라탕 (야채/기본육수/1그릇/400g)", calories: 400, carbs: 30, protein: 15, fat: 24, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "베트남 소고기 쌀국수 (1그릇)", calories: 450, carbs: 78, protein: 22, fat: 6, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "떡볶이 (1인분/200g)", calories: 350, carbs: 70, protein: 6, fat: 5, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "찰순대 (소금기준/1인분/200g)", calories: 320, carbs: 58, protein: 9, fat: 5, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "모둠 튀김 (오징어,고구마,김말이 각1개)", calories: 280, carbs: 35, protein: 4, fat: 14, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "일반 야채김밥 (1줄)", calories: 320, carbs: 56, protein: 9, fat: 6, unit: "줄", defaultServing: 1, category: "restaurant" },
  { name: "참치김밥 (마요포함/1줄)", calories: 450, carbs: 58, protein: 13, fat: 18, unit: "줄", defaultServing: 1, category: "restaurant" },
  
  // 덮밥 및 볶음밥
  { name: "공기밥 (식당공기밥/200g)", calories: 300, carbs: 66, protein: 5, fat: 0.4, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "제육덮밥 (1인분)", calories: 750, carbs: 110, protein: 35, fat: 25, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "오징어덮밥 (1인분)", calories: 650, carbs: 105, protein: 28, fat: 13, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "소고기 육회비빔밥 (1인분)", calories: 580, carbs: 88, protein: 26, fat: 14, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "중식 볶음밥 (짜장소스제외/1인분)", calories: 620, carbs: 85, protein: 15, fat: 24, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "치킨 카레라이스 (1인분)", calories: 620, carbs: 95, protein: 20, fat: 18, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "낙지덮밥 (1인분)", calories: 610, carbs: 102, protein: 25, fat: 11, unit: "인분", defaultServing: 1, category: "restaurant" },
  
  // 고기구이 외식
  { name: "삼겹살 구이 (1인분/150g)", calories: 495, carbs: 0.5, protein: 26, fat: 43, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "돼지목살 구이 (1인분/150g)", calories: 320, carbs: 0.2, protein: 28, fat: 22, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "양념 돼지갈비 (1인분/150g)", calories: 375, carbs: 12, protein: 25, fat: 25, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "소등심 구이 (1인분/150g)", calories: 360, carbs: 0, protein: 32, fat: 25, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "제육볶음 (밥 제외/1인분/200g)", calories: 380, carbs: 15, protein: 26, fat: 24, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "소불고기 (밥 제외/1인분/200g)", calories: 290, carbs: 16, protein: 24, fat: 15, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "족발 (살코기중심/1인분/200g)", calories: 420, carbs: 1, protein: 38, fat: 28, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "보쌈 (삼겹부위/1인분/200g)", calories: 550, carbs: 0.8, protein: 34, fat: 45, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "춘천 닭갈비 (면사리제외/1인분)", calories: 450, carbs: 24, protein: 32, fat: 25, unit: "인분", defaultServing: 1, category: "restaurant" },

  // 양식 및 튀김류
  { name: "등심 돈까스 (소스포함/1인분)", calories: 650, carbs: 52, protein: 28, fat: 36, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "안심 돈까스 (소스포함/1인분)", calories: 600, carbs: 50, protein: 30, fat: 31, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "치즈 돈까스 (소스포함/1인분)", calories: 720, carbs: 55, protein: 32, fat: 40, unit: "인분", defaultServing: 1, category: "restaurant" },
  { name: "콤비네이션 피자 (레귤러/1조각)", calories: 250, carbs: 27, protein: 11, fat: 11, unit: "개(조각)", defaultServing: 1, category: "restaurant" },
  
  // 치킨 및 술안주
  { name: "오븐구이 치킨 (굽네오리지널 기준/반마리)", calories: 480, carbs: 1, protein: 48, fat: 32, unit: "인분(반마리)", defaultServing: 1, category: "restaurant" },
  { name: "오븐구이 양념치킨 (갈비천왕 기준/반마리)", calories: 560, carbs: 15, protein: 46, fat: 34, unit: "인분(반마리)", defaultServing: 1, category: "restaurant" },
  { name: "프라이드 치킨 (반마리)", calories: 750, carbs: 45, protein: 40, fat: 48, unit: "인분(반마리)", defaultServing: 1, category: "restaurant" },
  { name: "양념 치킨 (반마리)", calories: 880, carbs: 70, protein: 38, fat: 50, unit: "인분(반마리)", defaultServing: 1, category: "restaurant" },
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FOOD_DATABASE };
}
