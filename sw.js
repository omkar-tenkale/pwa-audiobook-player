
        const ASSETS = [
  "assets/index.3459bb43.js",
  "assets/disable-app-if-not-supported.9b4340fe.js",
  "assets/view-artists.e3173e3f.js",
  "assets/modal.5e7b1e8f.js",
  "assets/add-to-playlist-modal.178c82c3.js",
  "assets/create-or-rename-playlist.41de9418.js",
  "assets/app-theme.c2072629.js",
  "assets/tracks-file-parser-worker.9dc4a2d2.js",
  "assets/player.3f91669c.js",
  "assets/details.2d89fd8c.js",
  "assets/search.adf9a7d7.js",
  "assets/settings.0807b590.js",
  "assets/about.a51f5c2b.js",
  "assets/not-found.3a23870d.js",
  "assets/style.6afb747f.css",
  "index.html",
  "manifest.webmanifest",
  "/icons/icon_responsive.svg",
  "/icons/icon_maskable.svg"
];
        const VERSION = "0ae19a2d7aa098428b180d329ca5e93a3f671c96";
        self.addEventListener("fetch",(e=>{e.respondWith((async()=>{const{request:s}=e,t=new URL(s.url);if("GET"===s.method&&self.location.origin===t.origin){const e="navigate"===s.mode?"/index.html":s;return caches.match(e).then((e=>e||fetch(s)))}return fetch(s)})())})),self.addEventListener("install",(e=>{const s=caches.open(VERSION).then((e=>e.addAll(ASSETS)));e.waitUntil(s)})),self.addEventListener("activate",(e=>{self.clients.claim();const s=caches.keys().then((e=>{const s=e.map((e=>{if(e!==VERSION)return caches.delete(e)}));return Promise.all(s)}));e.waitUntil(s)})),self.addEventListener("message",(e=>{"skip-waiting"===e.data&&self.skipWaiting()}));

      