
        const ASSETS = [
  "assets/index.e7521a95.js",
  "assets/disable-app-if-not-supported.9b4340fe.js",
  "assets/view-artists.9f603c33.js",
  "assets/modal.47cbba38.js",
  "assets/add-to-playlist-modal.d0b27057.js",
  "assets/create-or-rename-playlist.de1dbccb.js",
  "assets/app-theme.c2072629.js",
  "assets/tracks-file-parser-worker.9dc4a2d2.js",
  "assets/player.8537303c.js",
  "assets/details.c9a64bdd.js",
  "assets/search.dee7efc6.js",
  "assets/settings.cf9c042b.js",
  "assets/about.c64a75f0.js",
  "assets/not-found.d5ebcd4e.js",
  "assets/style.4c7eba61.css",
  "index.html",
  "manifest.webmanifest",
  "/icons/icon_responsive.svg",
  "/icons/icon_maskable.svg"
];
        const VERSION = "6732bf4f002580f3b50ea53aa0a65c1148b20261";
        self.addEventListener("fetch",(e=>{e.respondWith((async()=>{const{request:s}=e,t=new URL(s.url);if("GET"===s.method&&self.location.origin===t.origin){const e="navigate"===s.mode?"/index.html":s;return caches.match(e).then((e=>e||fetch(s)))}return fetch(s)})())})),self.addEventListener("install",(e=>{const s=caches.open(VERSION).then((e=>e.addAll(ASSETS)));e.waitUntil(s)})),self.addEventListener("activate",(e=>{self.clients.claim();const s=caches.keys().then((e=>{const s=e.map((e=>{if(e!==VERSION)return caches.delete(e)}));return Promise.all(s)}));e.waitUntil(s)})),self.addEventListener("message",(e=>{"skip-waiting"===e.data&&self.skipWaiting()}));

      