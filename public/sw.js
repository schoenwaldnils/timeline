if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/107.cc922cf944b6f7c0.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/252f366e.c8cdc1e2b9d19094.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/29107295-a2d0c8e72019a3ed.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/574.efa63831b8325183.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/651.e7ad805f32a091cd.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/683.c9bc7dadbb40976c.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/725-e428a97568f2103b.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/840.b875a3683a3d802f.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/9a1974b2-26d3cdec4426b37b.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/framework-8957c350a55da097.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/main-c30905e7444c2e71.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/pages/_app-2e59c25f49b66362.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/pages/_error-9734db4c9fd59614.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/pages/index-a60229b4c41a2361.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/chunks/webpack-95370ba76a882140.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/hirewW1TliKqQ9YUnfU3f/_buildManifest.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/hirewW1TliKqQ9YUnfU3f/_middlewareManifest.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/_next/static/hirewW1TliKqQ9YUnfU3f/_ssgManifest.js",revision:"hirewW1TliKqQ9YUnfU3f"},{url:"/assets/images/favicon.png",revision:"2bf55107ea37f05c656c47a5e90f3649"},{url:"/assets/images/favicons/android-chrome-192x192.png",revision:"8c114afb709a2a423502b34703c955e8"},{url:"/assets/images/favicons/android-chrome-256x256.png",revision:"3438f9416cd8777c46bc71dd0cc5c645"},{url:"/assets/images/favicons/apple-touch-icon.png",revision:"275e70264895cfe1af86e0d5eefc213d"},{url:"/assets/images/favicons/browserconfig.xml",revision:"16343815a95c1f87dda7320d7e1da73b"},{url:"/assets/images/favicons/favicon-16x16.png",revision:"c3137d7e3d3035e7626785f35f41bfbc"},{url:"/assets/images/favicons/favicon-32x32.png",revision:"d8df8da453f63efe3101cdb2d320b386"},{url:"/assets/images/favicons/favicon.ico",revision:"56786c596d8f4f113da0af516de028b5"},{url:"/assets/images/favicons/mstile-144x144.png",revision:"391723b3def4d2bc8868dbb2972869af"},{url:"/assets/images/favicons/mstile-150x150.png",revision:"0c16e75ea947fc48221bcbdd1461b4fe"},{url:"/assets/images/favicons/mstile-310x150.png",revision:"dcea40f1207f3d81a0385b2eb2270a62"},{url:"/assets/images/favicons/mstile-310x310.png",revision:"1f4e926e4d16323824bde153da0db98e"},{url:"/assets/images/favicons/mstile-70x70.png",revision:"91d294f0bdc43a1d25fe4f9a316f9e2b"},{url:"/assets/images/favicons/safari-pinned-tab.svg",revision:"00e63dd9910c4c73b4171f5f3a1d3e40"},{url:"/assets/images/favicons/site.webmanifest",revision:"4519e790a1572c315ca6a9c9769870a1"},{url:"/locales/de/common.json",revision:"01403b8a87f2d132b7c06671b33731ca"},{url:"/locales/en/common.json",revision:"e031491264a441ce093f4a2033467b91"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));