if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let t={};const a=e=>n(e,s),c={module:{uri:s},exports:t,require:a};i[s]=Promise.all(r.map((e=>c[e]||a(e)))).then((e=>(o(...e),t)))}}define(["./workbox-a953cab6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.0d1937cf.js",revision:null},{url:"assets/index.e386eecf.css",revision:null},{url:"index.html",revision:"5a3a7eefb54067ed297fc454b259d332"},{url:"favicon.ico",revision:"a8b7960180710030f280441c4eba8e24"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"apple-touch-icon.png",revision:"f4a01ea8feee4dc59af635c162aad6e9"},{url:"android-chrome-192x192.png",revision:"5069e3f7abf1a444505b0661a325be61"},{url:"android-chrome-512x512.png",revision:"45bae53a508b64fd8904287c2d50314d"},{url:"manifest.webmanifest",revision:"537867bfaf7067415631a99923278079"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
