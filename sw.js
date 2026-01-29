const CACHE_NAME = 'study-partner-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  // Add your local video/image paths here if you downloaded them
  // e.g., './background.mp4'
];

// Install Event: Cache core assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch Event: Serve from cache, fall back to network
self.addEventListener('fetch', (e) => {
  e.waitUntil(
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request))
    )
  );
});