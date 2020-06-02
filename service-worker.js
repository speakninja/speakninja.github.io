workbox.core.setCacheNameDetails({
    prefix: 'SpeakNinja',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/.*(\.css|js|png|jpg|ico|svg|xml|webmanifest)/g,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/use.fontawesome.com|cdn.bootcss.com|cdnjs.cloudflare.com/,
    workbox.strategies.staleWhileRevalidate()
);
