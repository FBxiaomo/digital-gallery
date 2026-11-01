/* 仅缓存本站图片。更新 logo 或彩蛋图片时递增 CACHE_NAME；设备图更新时递增 index.html 的 IMG_V。 */
const CACHE_NAME = 'digital-atlas-images-v1';
const CACHE_PREFIX = 'digital-atlas-images-';
const IMAGE_DIRS = ['db/images/', 'logo/', 'easter-egg-img/'];

self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  event.waitUntil((async function() {
    const names = await caches.keys();
    await Promise.all(names.filter(function(name) {
      return name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME;
    }).map(function(name) { return caches.delete(name); }));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', function(event) {
  const request = event.request;
  if (request.method !== 'GET' || request.destination !== 'image') return;

  const url = new URL(request.url);
  const scope = self.registration.scope;
  if (url.origin !== self.location.origin || !url.href.startsWith(scope)) return;
  const path = url.href.slice(scope.length).split('?')[0];
  if (!IMAGE_DIRS.some(function(dir) { return path.startsWith(dir); })) return;

  event.respondWith((async function() {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if (cached) return cached;

    const response = await fetch(request);
    if (response.ok && response.type === 'basic' &&
        (response.headers.get('Content-Type') || '').toLowerCase().startsWith('image/')) {
      try { await cache.put(request, response.clone()); } catch (err) {
        // 存储空间不足时仍显示已下载的图片。
      }
    }
    return response;
  })());
});
