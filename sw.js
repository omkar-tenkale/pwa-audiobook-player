
        const ASSETS = [
  "assets/index.a1262edb.js",
  "assets/disable-app-if-not-supported.9b4340fe.js",
  "assets/view-artists.a69d9aa7.js",
  "assets/modal.d38a1b54.js",
  "assets/add-to-playlist-modal.0e6b9ac2.js",
  "assets/create-or-rename-playlist.ff35fa09.js",
  "assets/app-theme.c2072629.js",
  "assets/tracks-file-parser-worker.9dc4a2d2.js",
  "assets/player.f7f2eade.js",
  "assets/details.cd22157c.js",
  "assets/search.987e169c.js",
  "assets/settings.2eb91595.js",
  "assets/about.b2f39ed4.js",
  "assets/not-found.7ae684fe.js",
  "assets/style.4c7eba61.css",
  "index.html",
  "manifest.webmanifest",
  "/icons/icon_responsive.svg",
  "/icons/icon_maskable.svg"
];
        const VERSION = "b68311fbea0747f185ac1ee2ec58581e1e754bb1";
        self.addEventListener("fetch",(e=>{e.respondWith((async()=>{const{request:s}=e,t=new URL(s.url);if("GET"===s.method&&self.location.origin===t.origin){const e="navigate"===s.mode?"/index.html":s;return caches.match(e).then((e=>e||fetch(s)))}return fetch(s)})())})),self.addEventListener("install",(e=>{const s=caches.open(VERSION).then((e=>e.addAll(ASSETS)));e.waitUntil(s)})),self.addEventListener("activate",(e=>{self.clients.claim();const s=caches.keys().then((e=>{const s=e.map((e=>{if(e!==VERSION)return caches.delete(e)}));return Promise.all(s)}));e.waitUntil(s)})),self.addEventListener("message",(e=>{"skip-waiting"===e.data&&self.skipWaiting()}));

      