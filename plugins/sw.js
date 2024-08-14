self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('lcars-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/images/logo.svg',
        '/assets/css/main.css',
        '/assets/css/lcars-theme.css',
        '/assets/css/lcars-animations.css', // Removed duplicate
        '/assets/css/lcars.css',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
