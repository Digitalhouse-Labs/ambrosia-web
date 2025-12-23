const CACHE_NAME = "app-cache-v1"

self.addEventListener("install", (event) => {
   self.skipWaiting()
})

self.addEventListener("activate", (event) => {
   event.waitUntil(
      caches.keys().then((cacheNames) => {
         return Promise.all(
            cacheNames
               .filter((name) => name !== CACHE_NAME)
               .map((name) => caches.delete(name)),
         )
      }),
   )
   self.clients.claim()
})

self.addEventListener("fetch", (event) => {
   event.respondWith(
      caches.match(event.request).then((response) => {
         return response || fetch(event.request)
      }),
   )
})
