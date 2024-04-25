self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("ListaDeTarefas").then((cache) => {
      return cache.addAll([
        "index.html",
        "style.css",
        "app.js",
        "manifest.json",
        "icon-144x144.png",
        "icon-192x192.png",
        "icon-512x512.png",
      ]);
    })
  );
});

// Intercepta solicitações de rede e serve os recursos do cache, se disponí­veis
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
