const CACHE_NAME = 'wc-predictions-v24'
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

self.addEventListener('push', event => {
  let data = {}

  try {
    data = event.data ? event.data.json() : {}
  } catch (e) {
    data = {
      title: 'WC Predictions',
      body: event.data ? event.data.text() : 'New notification'
    }
  }

  const title = data.title || 'WC Predictions'

  const options = {
    body: data.body || 'You have a new update.',
    icon: '/image/logo-maskable.svg',
    badge: '/image/logo-maskable.svg',
    vibrate: [120, 80, 120],
    data: {
      url: data.url || '/'
    }
  }

  event.waitUntil(
    self.registration.showNotification(title, options)
  )
})

self.addEventListener('notificationclick', event => {
  event.notification.close()

  const url = event.notification.data?.url || '/'

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if ('focus' in client) return client.focus()
      }
      return clients.openWindow(url)
    })
  )
})