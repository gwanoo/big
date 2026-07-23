// 상태 전역 변수
let state = {
  currentDate: '',
  userData: {
    weight: 70,
    activity: 1.375,
    targets: {
      calories: 2200,
      carbs: 275,
      protein: 140,
      fat: 54
    }
  },
  dailyLogs: {} // 날짜별 데이터: { 'YYYY-MM-DD': { diet: [], workout: [], workoutSplit: '' } }
};

// 분할별 추천 운동 데이터
const SPLIT_RECOMMENDATIONS = {
  'chest-triceps': [
    { name: "플랫 벤치 프레스", desc: "가슴 전체 볼륨 발달 및 스트렝스 향상의 메인 운동", reps: "8~12회 4세트" },
    { name: "인클라인 덤벨 프레스", desc: "윗가슴을 채워 볼륨감 있는 입체적 가슴을 만드는 운동", reps: "10~12회 4세트" },
    { name: "덤벨 플라이", desc: "덤벨을 가슴 넓게 벌려 대흉근 안쪽 깊은 자극과 스트레칭 전달", reps: "12~15회 3세트" },
    { name: "펙덱 플라이 (Pec Deck)", desc: "머신을 사용하여 안전하고 정확하게 가슴 근육을 고립 수축", reps: "12~15회 4세트" },
    { name: "딥스 (Chest Dips)", desc: "가슴 하부와 삼두근을 동시에 공략하는 고강도 맨몸 운동", reps: "8~12회 3세트" },
    { name: "라잉 트라이셉스 익스텐션", desc: "삼두근 전체의 매스(크기)를 얹어주는 전통적 삼두운동", reps: "10~12회 4세트" },
    { name: "케이블 푸쉬다운", desc: "삼두근 외측두와 내측두를 선별 고립하여 수축감을 극대화", reps: "12~15회 4세트" },
    { name: "덤벨 오버헤드 익스텐션", desc: "삼두근의 장두(Long head) 자극을 극대화하여 팔 두께를 키움", reps: "12~15회 3세트" }
  ],
  'back-biceps': [
    { name: "컨벤셔널 데드리프트", desc: "등 하부 및 척추기립근, 후면사슬 전체를 강화하는 전신 리프팅", reps: "5~8회 4세트" },
    { name: "턱걸이 (풀업)", desc: "넓은 프레임과 강인한 상체를 만드는 최고의 등 운동", reps: "실패지점까지 4세트" },
    { name: "랫 풀 다운", desc: "광배근 자극을 집중적으로 느끼며 등을 넓히는 운동", reps: "10~12회 4세트" },
    { name: "바벨 로우 (벤트오버)", desc: "등의 두께감과 중부 승모근, 광배근 하부를 강화", reps: "8~12회 4세트" },
    { name: "시티드 케이블 로우", desc: "상체를 바르게 유지하며 등 안쪽과 하부를 조여주는 등 로우 머신", reps: "10~12회 4세트" },
    { name: "이지바 바벨 컬", desc: "이두근의 전체적인 매스(크기)를 늘리는 기본 고립 훈련", reps: "10~12회 4세트" },
    { name: "인클라인 덤벨 컬", desc: "기울어진 벤치에서 이두근 장두의 최대 이완과 스트레칭 공략", reps: "10~12회 3세트" },
    { name: "해머 컬", desc: "상완요골근과 이두근 외측을 발달시켜 팔의 입체감 향상", reps: "12~15회 3세트" }
  ],
  'legs-shoulders': [
    { name: "바벨 스쿼트", desc: "하체 대근육 전체와 코어를 자극하여 호르몬 분비를 촉진", reps: "8~12회 4세트" },
    { name: "레그 프레스", desc: "허리 부담 없이 대퇴사두근과 둔근에 고중량 자극 전달", reps: "10~15회 4세트" },
    { name: "레그 컬 (Lying Leg Curl)", desc: "하체 후면(대퇴이두근)을 고립 타격하여 불균형을 해소하는 운동", reps: "12~15회 4세트" },
    { name: "워킹 런지 (Walking Lunge)", desc: "하체의 고유수용성 감각과 둔근 자극을 높이는 편측성 훈련", reps: "왕복 15걸음 3세트" },
    { name: "오버헤드 프레스 (OHP)", desc: "어깨 전면 및 코어와 전신 협응력을 키우는 최고의 어깨 프레스", reps: "8~12회 4세트" },
    { name: "덤벨 숄더 프레스", desc: "덤벨의 넓은 가동범위를 활용해 측/전면 삼각근 볼륨 형성", reps: "10~12회 4세트" },
    { name: "사이드 레터럴 레이즈", desc: "측면 삼각근을 고립하여 넓고 각진 어깨 프레임을 완성", reps: "15~20회 5세트" },
    { name: "페이스 풀 (Face Pull)", desc: "후면 삼각근과 회전근개 단련으로 부상 방지 및 입체적 어깨 완성", reps: "15~20회 4세트" }
  ]
};

// 현재 선택된 식품 (검색 완성용)
let selectedFoodFromDb = null;

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  initDate();
  loadLocalStorage();
  setupEventListeners();
  calculateRecommendedMacros();
  updateUI();
  registerServiceWorker();
});

// 서비스 워커 등록 (PWA 모바일 앱 설치 지원)
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('ServiceWorker registered with scope:', reg.scope))
      .catch(err => console.error('ServiceWorker registration failed:', err));
  }
}

// 날짜 초기화 (현재 날짜 세팅 및 input 바인딩)
function initDate() {
  const dateInput = document.getElementById('current-date');
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  
  if (mm < 10) mm = '0' + mm;
  if (dd < 10) dd = '0' + dd;
  
  const formattedToday = `${yyyy}-${mm}-${dd}`;
  state.currentDate = formattedToday;
  dateInput.value = formattedToday;
}

// LocalStorage 데이터 로드
function loadLocalStorage() {
  const savedState = localStorage.getItem('leanMassUpTrackerState');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      if (parsed.userData) state.userData = parsed.userData;
      if (parsed.dailyLogs) state.dailyLogs = parsed.dailyLogs;
    } catch (e) {
      console.error('LocalStorage 파싱 오류:', e);
    }
  }
  
  // 현재 날짜 로그 없으면 빈 객체로 생성
  ensureCurrentDateLog();
  
  // 입력 폼에 설정값 채우기
  document.getElementById('user-weight').value = state.userData.weight;
  document.getElementById('user-activity').value = state.userData.activity;
  document.getElementById('target-calories').value = state.userData.targets.calories;
  document.getElementById('target-carbs').value = state.userData.targets.carbs;
  document.getElementById('target-protein').value = state.userData.targets.protein;
  document.getElementById('target-fat').value = state.userData.targets.fat;
}

// LocalStorage에 상태 저장
function saveState() {
  localStorage.setItem('leanMassUpTrackerState', JSON.stringify(state));
}

// 현재 날짜의 로그 구조가 있는지 보장
function ensureCurrentDateLog() {
  if (!state.dailyLogs[state.currentDate]) {
    state.dailyLogs[state.currentDate] = {
      diet: [],
      workout: [],
      workoutSplit: ''
    };
  }
}

// 이벤트 리스너 설정
function setupEventListeners() {
  // 날짜 변경 이벤트
  document.getElementById('current-date').addEventListener('change', (e) => {
    state.currentDate = e.target.value;
    ensureCurrentDateLog();
    updateUI();
  });
  
  // 식품 검색 자동완성 이벤트
  const searchInput = document.getElementById('food-search');
  searchInput.addEventListener('input', handleFoodSearch);
  
  // 다른 곳 클릭 시 자동완성 리스트 닫기
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.autocomplete-container')) {
      document.getElementById('autocomplete-list').style.display = 'none';
    }
  });
}

// 탭 전환 기능
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  document.getElementById(tabId).classList.add('active');
  
  // 클릭한 버튼 활성화
  const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(btn => {
    return btn.getAttribute('onclick').includes(tabId);
  });
  if (activeBtn) activeBtn.classList.add('active');
}

// 체중에 따른 기초 영양성분 가이드 계산
function calculateRecommendedMacros() {
  const weight = parseFloat(document.getElementById('user-weight').value) || 70;
  const activity = parseFloat(document.getElementById('user-activity').value) || 1.375;
  
  state.userData.weight = weight;
  state.userData.activity = activity;
  
  // BMR (해리스-베네딕트 공식 변형 간이 계산)
  const bmr = 10 * weight + 6.25 * 175 - 5 * 28 + 5; // 남성 기준 간이 추정 (175cm, 28세 예시)
  const tdee = Math.round(bmr * activity);
  
  // 린매스업 권장: TDEE + 150kcal
  const targetCal = tdee + 150;
  
  // 단백질: 체중 x 2.0g
  const targetProtein = Math.round(weight * 2.0);
  
  // 지방: 총 칼로리의 22% (1g = 9kcal)
  const targetFat = Math.round((targetCal * 0.22) / 9);
  
  // 탄수화물: 남은 칼로리 충당 (1g = 4kcal)
  const targetCarb = Math.round((targetCal - (targetProtein * 4) - (targetFat * 9)) / 4);
  
  // 가이드 텍스트 업데이트
  document.getElementById('guide-cal').textContent = `${targetCal} kcal`;
  document.getElementById('guide-carb').textContent = `${targetCarb} g`;
  document.getElementById('guide-protein').textContent = `${targetProtein} g`;
  document.getElementById('guide-fat').textContent = `${targetFat} g`;
}

// 타겟 직접 지정 저장
function saveTargetSettings() {
  state.userData.targets.calories = parseInt(document.getElementById('target-calories').value) || 2200;
  state.userData.targets.carbs = parseInt(document.getElementById('target-carbs').value) || 275;
  state.userData.targets.protein = parseInt(document.getElementById('target-protein').value) || 140;
  state.userData.targets.fat = parseInt(document.getElementById('target-fat').value) || 54;
  
  saveState();
  updateUI();
  alert('설정이 저장되었습니다.');
}

// UI 전체 업데이트
function updateUI() {
  updateDashboard();
  updateDietList();
  updateWorkoutSection();
}

// 1. 대시보드 정보 갱신
function updateDashboard() {
  ensureCurrentDateLog();
  const todayLog = state.dailyLogs[state.currentDate];
  const targets = state.userData.targets;
  
  // 영양 섭취 합계 계산
  let totalCal = 0;
  let totalCarb = 0;
  let totalProtein = 0;
  let totalFat = 0;
  
  todayLog.diet.forEach(item => {
    totalCal += item.calories;
    totalCarb += item.carbs;
    totalProtein += item.protein;
    totalFat += item.fat;
  });
  
  totalCal = Math.round(totalCal);
  totalCarb = Math.round(totalCarb);
  totalProtein = Math.round(totalProtein);
  totalFat = Math.round(totalFat);
  
  // 텍스트 매칭
  const calPercent = targets.calories > 0 ? Math.min(100, Math.round((totalCal / targets.calories) * 100)) : 0;
  document.getElementById('cal-ratio-text').textContent = `${totalCal} / ${targets.calories} kcal (${calPercent}%)`;
  
  document.getElementById('progress-cal-val').textContent = `${totalCal} / ${targets.calories} kcal`;
  document.getElementById('progress-carb-val').textContent = `${totalCarb}g / ${targets.carbs}g`;
  document.getElementById('progress-protein-val').textContent = `${totalProtein}g / ${targets.protein}g`;
  document.getElementById('progress-fat-val').textContent = `${totalFat}g / ${targets.fat}g`;
  
  // 바 게이지 가로 폭
  document.getElementById('progress-cal-bar').style.width = `${calPercent}%`;
  document.getElementById('progress-carb-bar').style.width = `${targets.carbs > 0 ? Math.min(100, (totalCarb / targets.carbs) * 100) : 0}%`;
  document.getElementById('progress-protein-bar').style.width = `${targets.protein > 0 ? Math.min(100, (totalProtein / targets.protein) * 100) : 0}%`;
  document.getElementById('progress-fat-bar').style.width = `${targets.fat > 0 ? Math.min(100, (totalFat / targets.fat) * 100) : 0}%`;
  
  // 하단 미니 박스 값
  document.getElementById('macro-carb').textContent = `${totalCarb} g`;
  document.getElementById('macro-protein').textContent = `${totalProtein} g`;
  document.getElementById('macro-fat').textContent = `${totalFat} g`;
  
  // 대시보드 운동 요약 업데이트
  const splitTextMap = {
    'chest-triceps': '🔥 가슴 & 삼두',
    'back-biceps': '💪 등 & 이두',
    'legs-shoulders': '🏋️‍♂️ 하체 & 어깨'
  };
  
  const todaySplit = todayLog.workoutSplit;
  const splitBadge = document.getElementById('today-workout-split');
  
  if (todaySplit && splitTextMap[todaySplit]) {
    splitBadge.textContent = splitTextMap[todaySplit];
    splitBadge.style.display = 'inline-block';
  } else {
    splitBadge.textContent = '미설정';
  }
  
  const emptyDiv = document.getElementById('today-workout-empty');
  const summaryDiv = document.getElementById('today-workout-summary');
  const todayWorkoutList = document.getElementById('today-workout-list');
  
  if (todayLog.workout && todayLog.workout.length > 0) {
    emptyDiv.style.display = 'none';
    summaryDiv.style.display = 'block';
    
    // 기록 세트 세기
    let totalSets = 0;
    todayLog.workout.forEach(w => totalSets += w.sets.length);
    document.getElementById('workout-summary-stats').textContent = `총 ${todayLog.workout.length}개 종목 / ${totalSets}개 세트 완료`;
    
    todayWorkoutList.innerHTML = '';
    todayLog.workout.forEach(w => {
      const li = document.createElement('li');
      li.className = 'log-item';
      
      // 세트 요약 문자열 만들기
      const setSummaries = w.sets.map((s, idx) => `${idx + 1}세트: ${s.weight}kg x ${s.reps}회`).join(', ');
      
      li.innerHTML = `
        <div class="log-info">
          <h4>${w.name}</h4>
          <p>${setSummaries || '세트 기록 없음'}</p>
        </div>
      `;
      todayWorkoutList.appendChild(li);
    });
  } else {
    emptyDiv.style.display = 'block';
    summaryDiv.style.display = 'none';
  }
}

// 2. 식단 검색 및 자동완성 (오프라인 전용 고속 매칭)
function handleFoodSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const listEl = document.getElementById('autocomplete-list');
  
  if (!query) {
    listEl.style.display = 'none';
    return;
  }
  
  // 로컬 DB에서 매칭되는 식품 12개까지 추출
  const matches = FOOD_DATABASE.filter(food => food.name.toLowerCase().includes(query)).slice(0, 12);
  
  if (matches.length === 0) {
    listEl.innerHTML = '<div class="autocomplete-item" style="color: var(--color-text-muted);">검색 결과가 없습니다.</div>';
    listEl.style.display = 'block';
    return;
  }
  
  const categoryKo = {
    fitness: '피트니스',
    convenience: '편의점',
    franchise: '프랜차이즈',
    restaurant: '일반외식'
  };
  
  listEl.innerHTML = '';
  matches.forEach(food => {
    const item = document.createElement('div');
    item.className = 'autocomplete-item';
    item.innerHTML = `
      <span>${food.name} <small style="color: var(--color-text-muted);">(${food.calories}kcal/${food.defaultServing}${food.unit})</small></span>
      <span class="food-category">${categoryKo[food.category] || '식품'}</span>
    `;
    item.addEventListener('click', () => {
      selectFood(food);
    });
    listEl.appendChild(item);
  });
  listEl.style.display = 'block';
}

function selectFood(food) {
  selectedFoodFromDb = food;
  const searchInput = document.getElementById('food-search');
  searchInput.value = food.name;
  
  const amountInput = document.getElementById('food-amount');
  amountInput.value = food.defaultServing;
  
  const unitLabel = document.getElementById('food-unit');
  unitLabel.textContent = food.unit;
  
  document.getElementById('autocomplete-list').style.display = 'none';
}

// 검색한 음식 식단에 추가
function addSelectedFood() {
  const searchInput = document.getElementById('food-search');
  const amount = parseFloat(document.getElementById('food-amount').value) || 0;
  const category = document.getElementById('food-category-select').value;
  
  if (!selectedFoodFromDb || searchInput.value !== selectedFoodFromDb.name) {
    alert('식품 검색창에서 제안된 품목을 올바르게 선택해 주세요. 리스트에 없다면 하단 직접 입력을 사용해 주세요.');
    return;
  }
  
  if (amount <= 0) {
    alert('섭취량을 1 이상 입력해 주세요.');
    return;
  }
  
  // 영양성분 비례식 계산
  const ratio = amount / selectedFoodFromDb.defaultServing;
  const newMeal = {
    id: Date.now(),
    name: `${selectedFoodFromDb.name} (${amount}${selectedFoodFromDb.unit})`,
    category: category,
    calories: Math.round(selectedFoodFromDb.calories * ratio * 10) / 10,
    carbs: Math.round(selectedFoodFromDb.carbs * ratio * 10) / 10,
    protein: Math.round(selectedFoodFromDb.protein * ratio * 10) / 10,
    fat: Math.round(selectedFoodFromDb.fat * ratio * 10) / 10,
    amount: amount,
    unit: selectedFoodFromDb.unit
  };
  
  ensureCurrentDateLog();
  state.dailyLogs[state.currentDate].diet.push(newMeal);
  saveState();
  updateUI();
  
  // 폼 리셋
  searchInput.value = '';
  document.getElementById('food-amount').value = 100;
  document.getElementById('food-unit').textContent = 'g';
  selectedFoodFromDb = null;
}

// 직접 입력 식품 추가
function addCustomFood() {
  const name = document.getElementById('custom-food-name').value.trim();
  const calories = parseFloat(document.getElementById('custom-calories').value) || 0;
  const carbs = parseFloat(document.getElementById('custom-carbs').value) || 0;
  const protein = parseFloat(document.getElementById('custom-protein').value) || 0;
  const fat = parseFloat(document.getElementById('custom-fat').value) || 0;
  const category = document.getElementById('food-category-select').value;
  
  if (!name) {
    alert('음식 이름을 입력해 주세요.');
    return;
  }
  
  const newMeal = {
    id: Date.now(),
    name: name,
    category: category,
    calories: calories,
    carbs: carbs,
    protein: protein,
    fat: fat,
    amount: 1,
    unit: '인분'
  };
  
  ensureCurrentDateLog();
  state.dailyLogs[state.currentDate].diet.push(newMeal);
  saveState();
  updateUI();
  
  // 폼 리셋
  document.getElementById('custom-food-name').value = '';
  document.getElementById('custom-calories').value = '';
  document.getElementById('custom-carbs').value = '';
  document.getElementById('custom-protein').value = '';
  document.getElementById('custom-fat').value = '';
}

// 식사 목록 렌더링
function updateDietList() {
  ensureCurrentDateLog();
  const diet = state.dailyLogs[state.currentDate].diet;
  
  const lists = {
    '아침': document.getElementById('breakfast-list'),
    '점심': document.getElementById('lunch-list'),
    '저녁': document.getElementById('dinner-list'),
    '간식': document.getElementById('snack-list')
  };
  
  // 리스트 초기화
  Object.values(lists).forEach(listEl => {
    listEl.innerHTML = '';
  });
  
  const itemsCount = { '아침': 0, '점심': 0, '저녁': 0, '간식': 0 };
  
  diet.forEach(meal => {
    itemsCount[meal.category]++;
    const li = document.createElement('li');
    li.className = 'log-item';
    li.innerHTML = `
      <div class="log-info">
        <h4>${meal.name}</h4>
        <p>${meal.calories} kcal | 탄수 ${meal.carbs}g | 단백 ${meal.protein}g | 지방 ${meal.fat}g</p>
      </div>
      <div class="log-meta">
        <button class="delete-btn" onclick="deleteDietItem(${meal.id})">🗑️</button>
      </div>
    `;
    lists[meal.category].appendChild(li);
  });
  
  // 기록이 없는 항목에 플레이스홀더 표시
  Object.keys(lists).forEach(cat => {
    if (itemsCount[cat] === 0) {
      lists[cat].innerHTML = '<li style="color: var(--color-text-muted); font-size: 0.85rem; padding: 0.5rem 0;">기록 없음</li>';
    }
  });
}

// 식단 아이템 삭제
function deleteDietItem(mealId) {
  ensureCurrentDateLog();
  state.dailyLogs[state.currentDate].diet = state.dailyLogs[state.currentDate].diet.filter(m => m.id !== mealId);
  saveState();
  updateUI();
}

// 3. 운동 분할 선택
function selectSplit(splitId) {
  ensureCurrentDateLog();
  state.dailyLogs[state.currentDate].workoutSplit = splitId;
  saveState();
  updateUI();
}

// 운동 기록/추천 섹션 업데이트
function updateWorkoutSection() {
  ensureCurrentDateLog();
  const todayLog = state.dailyLogs[state.currentDate];
  const split = todayLog.workoutSplit;
  
  // 카드 선택 시각적 갱신
  document.querySelectorAll('.workout-card').forEach(card => {
    card.classList.remove('selected');
  });
  
  if (split) {
    const activeCard = document.getElementById(`split-${split}`);
    if (activeCard) activeCard.classList.add('selected');
    
    // 추천 아이템 보이기
    document.getElementById('split-recommendations-empty').style.display = 'none';
    document.getElementById('split-recommendations-content').style.display = 'block';
    
    // 추천 운동 리스트 렌더링
    const recContainer = document.getElementById('recommendation-items');
    recContainer.innerHTML = '';
    
    const recs = SPLIT_RECOMMENDATIONS[split] || [];
    recs.forEach(rec => {
      const div = document.createElement('div');
      div.className = 'rec-item';
      div.innerHTML = `
        <div class="rec-item-info">
          <h4>${rec.name}</h4>
          <p>${rec.desc}</p>
          <p style="color: var(--color-primary); font-weight: 500; font-size: 0.75rem; margin-top: 0.2rem;">추천 볼륨: ${rec.reps}</p>
        </div>
        <button class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;" onclick="addRecommendedWorkout('${rec.name}')">+</button>
      `;
      recContainer.appendChild(div);
    });
  } else {
    document.getElementById('split-recommendations-empty').style.display = 'block';
    document.getElementById('split-recommendations-content').style.display = 'none';
  }
  
  // 오늘의 운동 기록장 리스트 렌더링
  const loggedContainer = document.getElementById('logged-workouts-container');
  const emptyWorkoutDiv = document.getElementById('workout-list-empty');
  
  if (todayLog.workout && todayLog.workout.length > 0) {
    emptyWorkoutDiv.style.display = 'none';
    loggedContainer.style.display = 'flex';
    loggedContainer.innerHTML = '';
    
    todayLog.workout.forEach((w, wIdx) => {
      const wDiv = document.createElement('div');
      wDiv.className = 'card';
      wDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.01)';
      wDiv.style.padding = '1.2rem';
      
      let setsHTML = '';
      w.sets.forEach((s, sIdx) => {
        setsHTML += `
          <div class="set-row">
            <span class="set-num">${sIdx + 1}</span>
            <input type="number" value="${s.weight}" placeholder="무게" style="width: 70px; padding: 0.4rem;" onchange="updateWorkoutSet(${wIdx}, ${sIdx}, 'weight', this.value)">
            <span style="font-size: 0.8rem; color: var(--color-text-muted);">kg</span>
            <input type="number" value="${s.reps}" placeholder="횟수" style="width: 70px; padding: 0.4rem;" onchange="updateWorkoutSet(${wIdx}, ${sIdx}, 'reps', this.value)">
            <span style="font-size: 0.8rem; color: var(--color-text-muted);">회</span>
            <button class="delete-btn" style="padding: 0 0.5rem;" onclick="deleteWorkoutSet(${wIdx}, ${sIdx})">×</button>
          </div>
        `;
      });
      
      wDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
          <h4 style="font-size: 1rem; font-weight: 600;">${w.name}</h4>
          <button class="delete-btn" style="font-size: 0.9rem;" onclick="deleteWorkoutItem(${w.id})">종목 삭제 🗑️</button>
        </div>
        
        <div>
          ${setsHTML}
          <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="addWorkoutSet(${wIdx})">+ 세트 추가</button>
          </div>
        </div>
      `;
      loggedContainer.appendChild(wDiv);
    });
  } else {
    emptyWorkoutDiv.style.display = 'block';
    loggedContainer.style.display = 'none';
  }
}

// 추천 운동에서 기록장으로 추가
function addRecommendedWorkout(workoutName) {
  ensureCurrentDateLog();
  const todayWorkout = state.dailyLogs[state.currentDate].workout;
  
  // 중복 확인
  if (todayWorkout.some(w => w.name === workoutName)) {
    alert('이미 운동 기록장에 추가되어 있는 종목입니다.');
    return;
  }
  
  const newItem = {
    id: Date.now(),
    name: workoutName,
    sets: [
      { weight: 20, reps: 10 } // 첫 디폴트 세트
    ]
  };
  
  todayWorkout.push(newItem);
  saveState();
  updateUI();
}

// 직접 텍스트 기입으로 운동 추가
function addNewWorkoutItem() {
  const nameInput = document.getElementById('workout-name-input');
  const workoutName = nameInput.value.trim();
  
  if (!workoutName) {
    alert('운동 종목 이름을 입력해 주세요.');
    return;
  }
  
  ensureCurrentDateLog();
  const todayWorkout = state.dailyLogs[state.currentDate].workout;
  
  if (todayWorkout.some(w => w.name === workoutName)) {
    alert('이미 등록된 종목입니다.');
    return;
  }
  
  const newItem = {
    id: Date.now(),
    name: workoutName,
    sets: [
      { weight: 20, reps: 10 }
    ]
  };
  
  todayWorkout.push(newItem);
  nameInput.value = '';
  saveState();
  updateUI();
}

// 운동 종목 삭제
function deleteWorkoutItem(workoutId) {
  ensureCurrentDateLog();
  state.dailyLogs[state.currentDate].workout = state.dailyLogs[state.currentDate].workout.filter(w => w.id !== workoutId);
  saveState();
  updateUI();
}

// 세트 추가
function addWorkoutSet(workoutIdx) {
  ensureCurrentDateLog();
  const sets = state.dailyLogs[state.currentDate].workout[workoutIdx].sets;
  
  // 이전 세트가 있다면 이전 세트 무게와 횟수를 기본값으로 주입
  const lastSet = sets[sets.length - 1];
  const newWeight = lastSet ? lastSet.weight : 20;
  const newReps = lastSet ? lastSet.reps : 10;
  
  sets.push({ weight: newWeight, reps: newReps });
  saveState();
  updateUI();
}

// 세트 삭제
function deleteWorkoutSet(workoutIdx, setIdx) {
  ensureCurrentDateLog();
  const sets = state.dailyLogs[state.currentDate].workout[workoutIdx].sets;
  sets.splice(setIdx, 1);
  saveState();
  updateUI();
}

// 세트 정보 업데이트 (무게 또는 횟수 수정 시)
function updateWorkoutSet(workoutIdx, setIdx, field, value) {
  ensureCurrentDateLog();
  const sets = state.dailyLogs[state.currentDate].workout[workoutIdx].sets;
  if (sets[setIdx]) {
    sets[setIdx][field] = parseFloat(value) || 0;
    saveState();
    updateDashboard(); // 상단 대시보드 갱신
  }
}
