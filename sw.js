
        const ASSETS = [
  "assets/index.e2dc2028.js",
  "assets/disable-app-if-not-supported.9b4340fe.js",
  "assets/view-artists.cec04f0e.js",
  "assets/modal.4af012d1.js",
  "assets/add-to-playlist-modal.4230be9e.js",
  "assets/create-or-rename-playlist.6775dcec.js",
  "assets/app-theme.c2072629.js",
  "assets/tracks-file-parser-worker.9dc4a2d2.js",
  "assets/player.6b61ec97.js",
  "assets/details.829771a9.js",
  "assets/search.ee9887ee.js",
  "assets/settings.07292184.js",
  "assets/about.bb6a3220.js",
  "assets/not-found.c3d6897e.js",
  "assets/style.4c7eba61.css",
  "index.html",
  "manifest.webmanifest",
  "/icons/icon_responsive.svg",
  "/icons/icon_maskable.svg"
];
        const VERSION = "78a0e2c3edfb718e2104fd144abaa15b0980002a";
        self.addEventListener("fetch",(e=>{e.respondWith((async()=>{const{request:s}=e,t=new URL(s.url);if("GET"===s.method&&self.location.origin===t.origin){const e="navigate"===s.mode?"/index.html":s;return caches.match(e).then((e=>e||fetch(s)))}return fetch(s)})())})),self.addEventListener("install",(e=>{const s=caches.open(VERSION).then((e=>e.addAll(ASSETS)));e.waitUntil(s)})),self.addEventListener("activate",(e=>{self.clients.claim();const s=caches.keys().then((e=>{const s=e.map((e=>{if(e!==VERSION)return caches.delete(e)}));return Promise.all(s)}));e.waitUntil(s)})),self.addEventListener("message",(e=>{"skip-waiting"===e.data&&self.skipWaiting()}));

      