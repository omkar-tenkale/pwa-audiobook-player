
        const ASSETS = [
  "assets/index.6cc77cfb.js",
  "assets/disable-app-if-not-supported.9b4340fe.js",
  "assets/view-artists.7679b8b8.js",
  "assets/modal.e963941b.js",
  "assets/add-to-playlist-modal.94fd0db2.js",
  "assets/create-or-rename-playlist.dfda7373.js",
  "assets/app-theme.c2072629.js",
  "assets/tracks-file-parser-worker.9dc4a2d2.js",
  "assets/player.4187d1fd.js",
  "assets/details.68d1d074.js",
  "assets/search.a7f232f1.js",
  "assets/settings.6de54ace.js",
  "assets/about.d399b509.js",
  "assets/not-found.af2bfd94.js",
  "assets/style.a21f5e10.css",
  "index.html",
  "manifest.webmanifest",
  "/icons/icon_responsive.svg",
  "/icons/icon_maskable.svg"
];
        const VERSION = "7ace5bcfbe76a897b212c8d6e705af7dcc29e660";
        self.addEventListener("fetch",(e=>{e.respondWith((async()=>{const{request:s}=e,t=new URL(s.url);if("GET"===s.method&&self.location.origin===t.origin){const e="navigate"===s.mode?"/index.html":s;return caches.match(e).then((e=>e||fetch(s)))}return fetch(s)})())})),self.addEventListener("install",(e=>{const s=caches.open(VERSION).then((e=>e.addAll(ASSETS)));e.waitUntil(s)})),self.addEventListener("activate",(e=>{self.clients.claim();const s=caches.keys().then((e=>{const s=e.map((e=>{if(e!==VERSION)return caches.delete(e)}));return Promise.all(s)}));e.waitUntil(s)})),self.addEventListener("message",(e=>{"skip-waiting"===e.data&&self.skipWaiting()}));

      