const CACHE_NAME = "noirblanc-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/favicon.ico",
  "/manifest.json",
  "https://cdn.tailwindcss.com",
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap",
  "https://i.blogs.es/ddbb9c/sfera-blanco-negro-2020-05/1366_2000.jpeg",
  "https://static.zara.net/assets/public/6074/d892/25c642688c3f/e572e958f95e/08246046718-p/08246046718-p.jpg?ts=1738839881321&w=1500",
  "https://static.zara.net/assets/public/36fd/c059/92d247d2bc3e/9464966b687f/09632253718-000-p/09632253718-000-p.jpg?ts=1739792902236&w=1500",
  "https://static.zara.net/assets/public/92b5/291d/be084ee5bbf5/9d33495411c7/07484051407-p/07484051407-p.jpg?ts=1738690196340&w=1500",
  "https://www.toptal.com/designers/subtlepatterns/uploads/marble-pattern.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
