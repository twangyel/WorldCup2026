const CACHE_NAME = 'wc-predictions-v2'
const urlsToCache = [
  '/',
  '/index.html',
  '/admin.html',
  '/assets/js/auth.js',
  '/manifest.json',
  '/image/logo.svg'  // <-- add this
]
// ... rest of your sw.js stays the same

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  )
  self.skipWaiting()
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', event => {
  // Network-first for HTML and JS so updates show immediately
  if (event.request.mode === 'navigate' || event.request.url.match(/\.(html|js)$/)) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone()
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone))
          return res
        })
        .catch(() => caches.match(event.request))
    )
    return
  }
  // Cache-first for everything else (images, manifest)
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  )
})