
        const ASSETS = [
  "assets/index.a73a071c.js",
  "assets/disable-app-if-not-supported.9b4340fe.js",
  "assets/view-artists.3a1f4063.js",
  "assets/modal.ca31a2db.js",
  "assets/add-to-playlist-modal.670ec966.js",
  "assets/create-or-rename-playlist.f7d6437e.js",
  "assets/app-theme.c2072629.js",
  "assets/tracks-file-parser-worker.9dc4a2d2.js",
  "assets/player.4053e755.js",
  "assets/details.9cc00c05.js",
  "assets/search.169c6439.js",
  "assets/settings.b7cec41d.js",
  "assets/about.83fc7eb6.js",
  "assets/not-found.36030863.js",
  "assets/style.4c7eba61.css",
  "index.html",
  "manifest.webmanifest",
  "/icons/icon_responsive.svg",
  "/icons/icon_maskable.svg"
];
        const VERSION = "43fcf799cadc772c60de6cbac33925463c9ba68f";
        self.addEventListener("fetch",(e=>{e.respondWith((async()=>{const{request:s}=e,t=new URL(s.url);if("GET"===s.method&&self.location.origin===t.origin){const e="navigate"===s.mode?"/index.html":s;return caches.match(e).then((e=>e||fetch(s)))}return fetch(s)})())})),self.addEventListener("install",(e=>{const s=caches.open(VERSION).then((e=>e.addAll(ASSETS)));e.waitUntil(s)})),self.addEventListener("activate",(e=>{self.clients.claim();const s=caches.keys().then((e=>{const s=e.map((e=>{if(e!==VERSION)return caches.delete(e)}));return Promise.all(s)}));e.waitUntil(s)})),self.addEventListener("message",(e=>{"skip-waiting"===e.data&&self.skipWaiting()}));

      