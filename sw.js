const CACHE_NAME = 'wc-predictions-v3'
const urlsToCache = [
  '/',
  '/index.html',
  '/admin.html',
  '/assets/js/auth.js',
  '/manifest.json',
  '/image/logo-maskable.svg'
]

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)))
  self.skipWaiting()
})

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))))
  self.clients.claim()
})

self.addEventListener('fetch', event => {
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

  // Prevent black background (50ms max)
  if (event.request.url === self.origin || event.request.url.endsWith('/')) {
    event.respondWith(
      new Promise(resolve => {
        setTimeout(() => {
          fetch(event.request)
            .then(res => {
              const clone = res.clone()
              caches.open(CACHE_NAME).then(c => c.put(event.request, clone))
              resolve(res)
            })
            .catch(() => resolve(new Response(null, { status: 204 })))
        }, 50)
      })
    )
    return
  }

  event.respondWith(caches.match(event.request).then(res => res || fetch(event.request)))
})

// Push & notification listeners remain the same...