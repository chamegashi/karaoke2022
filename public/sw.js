if (!self.define) {
  let e,
    c = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    c[n] ||
      new Promise((c) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = c), document.head.appendChild(e);
        } else (e = n), importScripts(n), c();
      }).then(() => {
        let e = c[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const s =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (c[s]) return;
    let r = {};
    const o = (e) => n(e, s),
      t = { module: { uri: s }, exports: r, require: o };
    c[s] = Promise.all(a.map((e) => t[e] || o(e))).then((e) => (i(...e), r));
  };
}
define(["./workbox-5afaf374"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/1cPN9aNwNAJkr_Ig5M25P/_buildManifest.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/1cPN9aNwNAJkr_Ig5M25P/_middlewareManifest.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/1cPN9aNwNAJkr_Ig5M25P/_ssgManifest.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/238-345540d0f24a9626.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/281-8cc40a2433f0f792.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/298-1e525c6ef2f75ae4.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/40-b5df4f93aa637cc3.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/612-1c14137678f76b21.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/669-df73c25ffd588904.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/672-0e13e39b4ac2295f.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/782-c552f4e22782f5e2.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/923-023fbe4acd9dae8a.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/framework-e70c6273bfe3f237.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/main-162f22c83e474964.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/pages/_app-d174ac3da0852fe2.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/pages/_error-2280fa386d040b66.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/pages/database-9c7e18a49586a575.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/pages/database/%5Bmusic_id%5D-633181407637c06f.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/pages/history-9878f5ad6ef25ad3.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/pages/history/addData-7a7fb1af4da65d98.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/pages/index-f89e078f79a65ca8.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/pages/search-668b77f13fa96b42.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/pages/search/addData-d398c4607f0eb650.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/pages/search/result-87b4107a058cdfaa.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/pages/setting-5cac8ee5782b04d2.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/chunks/webpack-42cdea76c8170223.js",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/_next/static/css/f9e6eea5fe5c0c5c.css",
          revision: "1cPN9aNwNAJkr_Ig5M25P",
        },
        {
          url: "/android-chrome-128x128.png",
          revision: "4468b4aa9dd4c594db67ebfa67ff1606",
        },
        {
          url: "/android-chrome-144x144.png",
          revision: "adb507486f6d45b259ff855e9dec26f2",
        },
        {
          url: "/android-chrome-152x152.png",
          revision: "fb658a08de5cf77a945c741ad4ca1dbc",
        },
        {
          url: "/android-chrome-192x192.png",
          revision: "f895a91e69771fe0a36711ac18f45693",
        },
        {
          url: "/android-chrome-256x256.png",
          revision: "e1bbd31f0e83fb98be0693858f1c63ac",
        },
        {
          url: "/android-chrome-36x36.png",
          revision: "8895d74e49572f1ad5b19385d2195da2",
        },
        {
          url: "/android-chrome-384x384.png",
          revision: "b2c15a10d5dcf50d39947601df0f4001",
        },
        {
          url: "/android-chrome-48x48.png",
          revision: "4799160190687eb88d17396a9c36d0a0",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "bde0aa3446f67d45d587fb53e3beec29",
        },
        {
          url: "/android-chrome-72x72.png",
          revision: "f08e5beb2a72ba4b164453802d1cbb51",
        },
        {
          url: "/android-chrome-96x96.png",
          revision: "84402198f087fc0b950988e352b24f01",
        },
        {
          url: "/apple-touch-icon-114x114-precomposed.png",
          revision: "b5aad47bd95a54e17205debfe07e63f5",
        },
        {
          url: "/apple-touch-icon-114x114.png",
          revision: "b5aad47bd95a54e17205debfe07e63f5",
        },
        {
          url: "/apple-touch-icon-120x120-precomposed.png",
          revision: "b2cbb9ffb07d397d4b487b83080212a1",
        },
        {
          url: "/apple-touch-icon-120x120.png",
          revision: "b2cbb9ffb07d397d4b487b83080212a1",
        },
        {
          url: "/apple-touch-icon-144x144-precomposed.png",
          revision: "adb507486f6d45b259ff855e9dec26f2",
        },
        {
          url: "/apple-touch-icon-144x144.png",
          revision: "adb507486f6d45b259ff855e9dec26f2",
        },
        {
          url: "/apple-touch-icon-152x152-precomposed.png",
          revision: "fb658a08de5cf77a945c741ad4ca1dbc",
        },
        {
          url: "/apple-touch-icon-152x152.png",
          revision: "fb658a08de5cf77a945c741ad4ca1dbc",
        },
        {
          url: "/apple-touch-icon-180x180-precomposed.png",
          revision: "f091fb57496b4a5a10ae9c5e0ef16c1d",
        },
        {
          url: "/apple-touch-icon-180x180.png",
          revision: "f091fb57496b4a5a10ae9c5e0ef16c1d",
        },
        {
          url: "/apple-touch-icon-57x57-precomposed.png",
          revision: "38a39920596dcef54c5ff06d9132cc85",
        },
        {
          url: "/apple-touch-icon-57x57.png",
          revision: "38a39920596dcef54c5ff06d9132cc85",
        },
        {
          url: "/apple-touch-icon-60x60-precomposed.png",
          revision: "d54498ffebce1926c5f5571f90b5f2e1",
        },
        {
          url: "/apple-touch-icon-60x60.png",
          revision: "d54498ffebce1926c5f5571f90b5f2e1",
        },
        {
          url: "/apple-touch-icon-72x72-precomposed.png",
          revision: "f08e5beb2a72ba4b164453802d1cbb51",
        },
        {
          url: "/apple-touch-icon-72x72.png",
          revision: "f08e5beb2a72ba4b164453802d1cbb51",
        },
        {
          url: "/apple-touch-icon-76x76-precomposed.png",
          revision: "d7c26d01180961a348e40c0afdc99249",
        },
        {
          url: "/apple-touch-icon-76x76.png",
          revision: "d7c26d01180961a348e40c0afdc99249",
        },
        {
          url: "/apple-touch-icon-precomposed.png",
          revision: "f091fb57496b4a5a10ae9c5e0ef16c1d",
        },
        {
          url: "/apple-touch-icon.png",
          revision: "f091fb57496b4a5a10ae9c5e0ef16c1d",
        },
        { url: "/favicon.ico", revision: "2d6b846d3f3a4bc4bb297a0f7b2945f9" },
        {
          url: "/icon-128x128.png",
          revision: "4468b4aa9dd4c594db67ebfa67ff1606",
        },
        {
          url: "/icon-144x144.png",
          revision: "adb507486f6d45b259ff855e9dec26f2",
        },
        {
          url: "/icon-152x152.png",
          revision: "fb658a08de5cf77a945c741ad4ca1dbc",
        },
        {
          url: "/icon-160x160.png",
          revision: "55f43bc3f6f8c22ce98461a205c589e5",
        },
        {
          url: "/icon-16x16.png",
          revision: "331db82f6ce7f18ab6cda1dc65dc4804",
        },
        {
          url: "/icon-192x192.png",
          revision: "f895a91e69771fe0a36711ac18f45693",
        },
        {
          url: "/icon-196x196.png",
          revision: "1e3e3739520fc5f55a54e03a7c324461",
        },
        {
          url: "/icon-24x24.png",
          revision: "896046875de992193ccca9f09f7ef671",
        },
        {
          url: "/icon-256x256.png",
          revision: "e1bbd31f0e83fb98be0693858f1c63ac",
        },
        {
          url: "/icon-32x32.png",
          revision: "ff78f68500ad3e7b1c43d4fc8cddd665",
        },
        {
          url: "/icon-36x36.png",
          revision: "8895d74e49572f1ad5b19385d2195da2",
        },
        {
          url: "/icon-384x384.png",
          revision: "b2c15a10d5dcf50d39947601df0f4001",
        },
        {
          url: "/icon-48x48.png",
          revision: "4799160190687eb88d17396a9c36d0a0",
        },
        {
          url: "/icon-512x512.png",
          revision: "bde0aa3446f67d45d587fb53e3beec29",
        },
        {
          url: "/icon-72x72.png",
          revision: "f08e5beb2a72ba4b164453802d1cbb51",
        },
        {
          url: "/icon-96x96.png",
          revision: "84402198f087fc0b950988e352b24f01",
        },
        { url: "/manifest.json", revision: "a1333fc0a01d7547b908a6f1d4d798f9" },
        {
          url: "/site-tile-150x150.png",
          revision: "64b20f391cea641037397c7ea294cb57",
        },
        {
          url: "/site-tile-310x150.png",
          revision: "8aeea80f89d726f44cafb7235af2b55b",
        },
        {
          url: "/site-tile-310x310.png",
          revision: "45a081ab407c96546a7c16c653f1de80",
        },
        {
          url: "/site-tile-70x70.png",
          revision: "37f167cc628e18be728d482430ae1a72",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: c,
              event: n,
              state: a,
            }) =>
              c && "opaqueredirect" === c.type
                ? new Response(c.body, {
                    status: 200,
                    statusText: "OK",
                    headers: c.headers,
                  })
                : c,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const c = e.pathname;
        return !c.startsWith("/api/auth/") && !!c.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
