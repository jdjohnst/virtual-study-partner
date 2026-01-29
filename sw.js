const CACHE_NAME = 'study-partner-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './Clip1VSP.mp4',
  './Clip2VSP.mp4',
  './Clip3VSP.mp4',
  './Clip4VSP.mp4'
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
