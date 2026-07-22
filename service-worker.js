const CACHE_NAME = 'lmu-tracker-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './foodDb.js',
  './app.js',
  './manifest.json',
  './icon.jpg'
];

// 설치 단계: 리소스 캐싱
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching all assets');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// 활성화 단계: 오래된 캐시 정리
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// 요청 페치 단계: 캐시 우선 제공 후 네트워크 업데이트
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        // 캐시된 자원 반환과 동시에 네트워크 요청을 보내 캐시를 업데이트 (Stale-While-Revalidate 전략)
        fetch(e.request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(e.request, networkResponse);
            });
          }
        }).catch(() => {/* 오프라인 시 무시 */});
        
        return cachedResponse;
      }
      return fetch(e.request);
    })
  );
});
