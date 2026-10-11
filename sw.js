/* TierBloom service worker: cache-first so the app works fully offline. Bump VERSION on each release. */
const VERSION='tierbloom-v1.1.0';
const CORE=['./','index.html','404.html','manifest.webmanifest','assets/favicon.svg','assets/favicon-32.png','assets/icon-192.png','assets/icon-512.png','assets/apple-touch-icon.png','assets/og-image.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{const copy=res.clone();caches.open(VERSION).then(c=>c.put(r,copy));return res}).catch(()=>caches.match('index.html'))))});
