
        const ASSETS = [
  "assets/index.3c97a768.js",
  "assets/disable-app-if-not-supported.9b4340fe.js",
  "assets/view-artists.fb23c022.js",
  "assets/modal.a3041589.js",
  "assets/add-to-playlist-modal.de494854.js",
  "assets/create-or-rename-playlist.bba924df.js",
  "assets/app-theme.c2072629.js",
  "assets/tracks-file-parser-worker.9dc4a2d2.js",
  "assets/player.86ea8585.js",
  "assets/details.09a6ade4.js",
  "assets/search.cc0cacd3.js",
  "assets/settings.975af714.js",
  "assets/about.a9cc1400.js",
  "assets/not-found.d2dc1279.js",
  "assets/style.4c7eba61.css",
  "index.html",
  "manifest.webmanifest",
  "/icons/icon_responsive.svg",
  "/icons/icon_maskable.svg"
];
        const VERSION = "4174b9d7c71a2e693a19388f54ddd5187cd752ee";
        self.addEventListener("fetch",(e=>{e.respondWith((async()=>{const{request:s}=e,t=new URL(s.url);if("GET"===s.method&&self.location.origin===t.origin){const e="navigate"===s.mode?"/index.html":s;return caches.match(e).then((e=>e||fetch(s)))}return fetch(s)})())})),self.addEventListener("install",(e=>{const s=caches.open(VERSION).then((e=>e.addAll(ASSETS)));e.waitUntil(s)})),self.addEventListener("activate",(e=>{self.clients.claim();const s=caches.keys().then((e=>{const s=e.map((e=>{if(e!==VERSION)return caches.delete(e)}));return Promise.all(s)}));e.waitUntil(s)})),self.addEventListener("message",(e=>{"skip-waiting"===e.data&&self.skipWaiting()}));

      