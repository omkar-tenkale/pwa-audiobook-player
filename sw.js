
        const ASSETS = [
  "assets/index.94c5adfb.js",
  "assets/disable-app-if-not-supported.9b4340fe.js",
  "assets/view-artists.67ed7727.js",
  "assets/modal.2a7c0f3a.js",
  "assets/add-to-playlist-modal.b82665fa.js",
  "assets/create-or-rename-playlist.cc11afee.js",
  "assets/app-theme.c2072629.js",
  "assets/tracks-file-parser-worker.9dc4a2d2.js",
  "assets/player.99171b47.js",
  "assets/details.44084e8e.js",
  "assets/search.1d10f45b.js",
  "assets/settings.ef5a56bc.js",
  "assets/about.5a7cc315.js",
  "assets/not-found.40dc1d1f.js",
  "assets/style.ad889449.css",
  "assets/va9E4kDNxMZdWfMOD5VvmojLeTY.c042fdbc.woff2",
  "assets/va9E4kDNxMZdWfMOD5Vvk4jLeTY.75f38e9c.woff2",
  "assets/va9E4kDNxMZdWfMOD5Vvm4jLeTY.788eb4af.woff2",
  "assets/va9E4kDNxMZdWfMOD5VvlIjLeTY.a69d641f.woff2",
  "assets/va9E4kDNxMZdWfMOD5VvmIjLeTY.cabc1489.woff2",
  "assets/va9E4kDNxMZdWfMOD5VvmYjLeTY.6044d555.woff2",
  "assets/va9E4kDNxMZdWfMOD5Vvl4jL.8eae8403.woff2",
  "assets/va9B4kDNxMZdWfMOD5VnZKveSxf6TF0.8656e45b.woff2",
  "assets/va9B4kDNxMZdWfMOD5VnZKveQhf6TF0.de6c5cb7.woff2",
  "assets/va9B4kDNxMZdWfMOD5VnZKveShf6TF0.ef84235f.woff2",
  "assets/va9B4kDNxMZdWfMOD5VnZKveRRf6TF0.2ff22ac3.woff2",
  "assets/va9B4kDNxMZdWfMOD5VnZKveSRf6TF0.460d60e3.woff2",
  "assets/va9B4kDNxMZdWfMOD5VnZKveSBf6TF0.53126e5f.woff2",
  "assets/va9B4kDNxMZdWfMOD5VnZKveRhf6.d7e96d52.woff2",
  "assets/webfonts.0d46cfcb.css",
  "index.html",
  "manifest.webmanifest",
  "/icons/icon_responsive.svg",
  "/icons/icon_maskable.svg"
];
        const VERSION = "446131f6f6654990a03f8c0e91949e3c2d28a3ea";
        self.addEventListener("fetch",(e=>{e.respondWith((async()=>{const{request:s}=e,t=new URL(s.url);if("GET"===s.method&&self.location.origin===t.origin){const e="navigate"===s.mode?"/index.html":s;return caches.match(e).then((e=>e||fetch(s)))}return fetch(s)})())})),self.addEventListener("install",(e=>{const s=caches.open(VERSION).then((e=>e.addAll(ASSETS)));e.waitUntil(s)})),self.addEventListener("activate",(e=>{self.clients.claim();const s=caches.keys().then((e=>{const s=e.map((e=>{if(e!==VERSION)return caches.delete(e)}));return Promise.all(s)}));e.waitUntil(s)})),self.addEventListener("message",(e=>{"skip-waiting"===e.data&&self.skipWaiting()}));

      