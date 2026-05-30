/* Service Worker - HER ZAMAN GÜNCEL HTML + çevrimdışı destek */
const CACHE = 'oyun-portali-final-22';
const DOSYALAR = [
  './',
  './index.html',
  './sorular.json',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DOSYALAR)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(adlar => Promise.all(adlar.filter(a => a !== CACHE).map(a => caches.delete(a))))
      .then(() => self.clients.claim())
  );
});

function networkFirst(req) {
  return fetch(req).then(resp => {
    const kopya = resp.clone();
    caches.open(CACHE).then(c => c.put(req, kopya));
    return resp;
  }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')));
}

function cacheFirst(req) {
  return caches.match(req).then(r => r || fetch(req).then(resp => {
    const kopya = resp.clone();
    caches.open(CACHE).then(c => c.put(req, kopya));
    return resp;
  }));
}

self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (/\.(html|json|js)(\?.*)?$|\/$/.test(url) || e.request.mode === 'navigate') {
    e.respondWith(networkFirst(e.request));
  } else {
    e.respondWith(cacheFirst(e.request));
  }
});

self.addEventListener('message', e => {
  if (e.data === 'GUNCELLE') self.skipWaiting();
});
