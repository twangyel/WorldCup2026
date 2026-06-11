const CACHE_NAME = 'wc-predictions-v4'
const urlsToCache = [
  '/',
  '/index.html',
  '/admin.html',
  '/assets/js/auth.js',
  '/manifest.json',
  '/image/logo-maskable.svg'
]

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
  // Network-first for HTML and JS
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

  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  )
})

/* ========== PUSH NOTIFICATIONS ========== */
self.addEventListener('push', event => {
  let data = { title: 'WC Predictions', body: 'New update', tag: 'general', url: '/admin.html' }
  try { data = event.data.json() } catch (e) {}

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/image/logo-maskable.svg',
      badge: '/image/logo-maskable.svg',
      tag: data.tag,
      requireInteraction: true,
      data: { url: data.url || '/admin.html' }
    })
  )
})

self.addEventListener('notificationclick', event => {
  event.notification.close()
  const url = event.notification.data?.url || '/admin.html'
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (const client of windowClients) {
        if (client.url.includes(url) && 'focus' in client) return client.focus()
      }
      if (clients.openWindow) return clients.openWindow(url)
    })
  )
})