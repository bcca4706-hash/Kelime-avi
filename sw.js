/* Service Worker — çevrimdışı çalışma için önbellek
   Sürüm değişince (CACHE adındaki numarayı artırınca) eski önbellek temizlenir. */
const CACHE = 'oyun-portali-v1';
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

// kurulum: tüm dosyaları önbelleğe al
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DOSYALAR)).then(() => self.skipWaiting()));
});

// etkinleşme: eski sürüm önbelleklerini sil
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(adlar => Promise.all(adlar.filter(a => a !== CACHE).map(a => caches.delete(a))))
      .then(() => self.clients.claim())
  );
});

// istek: önce ağ (taze veri için), başarısızsa önbellek (çevrimdışı)
// sorular.json için "network-first", diğer her şey için "cache-first" mantığı
self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (url.includes('sorular.json')) {
    // güncel kalsın diye önce ağdan dene, olmazsa önbellekten
    e.respondWith(
      fetch(e.request).then(r => {
        const kopya = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, kopya));
        return r;
      }).catch(() => caches.match(e.request))
    );
  } else {
    // hızlı açılış için önce önbellek, yoksa ağ
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
        const kopya = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, kopya));
        return resp;
      }).catch(() => caches.match('./index.html')))
    );
  }
});
