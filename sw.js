
        const ASSETS = [
  "assets/index.6b900303.js",
  "assets/disable-app-if-not-supported.9b4340fe.js",
  "assets/view-artists.e7f4b83e.js",
  "assets/modal.d0b41a6e.js",
  "assets/add-to-playlist-modal.95e02932.js",
  "assets/create-or-rename-playlist.017a8b3a.js",
  "assets/app-theme.c2072629.js",
  "assets/tracks-file-parser-worker.9dc4a2d2.js",
  "assets/player.2820fb64.js",
  "assets/details.f1e901a7.js",
  "assets/search.5428921b.js",
  "assets/settings.9892b3de.js",
  "assets/about.b06741a6.js",
  "assets/not-found.557a3702.js",
  "assets/style.4c7eba61.css",
  "index.html",
  "manifest.webmanifest",
  "/icons/icon_responsive.svg",
  "/icons/icon_maskable.svg"
];
        const VERSION = "4abf96e246262d27b653557f540178c9f7b8f113";
        self.addEventListener("fetch",(e=>{e.respondWith((async()=>{const{request:s}=e,t=new URL(s.url);if("GET"===s.method&&self.location.origin===t.origin){const e="navigate"===s.mode?"/index.html":s;return caches.match(e).then((e=>e||fetch(s)))}return fetch(s)})())})),self.addEventListener("install",(e=>{const s=caches.open(VERSION).then((e=>e.addAll(ASSETS)));e.waitUntil(s)})),self.addEventListener("activate",(e=>{self.clients.claim();const s=caches.keys().then((e=>{const s=e.map((e=>{if(e!==VERSION)return caches.delete(e)}));return Promise.all(s)}));e.waitUntil(s)})),self.addEventListener("message",(e=>{"skip-waiting"===e.data&&self.skipWaiting()}));

      