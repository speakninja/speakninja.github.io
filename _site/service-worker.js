                        importScripts("/assets/js/workbox-v3.4.1/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.4.1"});

            self.__precacheManifest = [{"url":"/assets/search.js","revision":"8bf6ba8f3264f76a935d80d0f07e6e93"},{"url":"/assets/css/main.css","revision":"9f03b26017b0b203590917777e872875"},{"url":"/assets/css/style.css","revision":"0b73f80c9b4d779390505ce52a7344b3"},{"url":"/assets/images/logo/logo.svg","revision":"af12225ca196e9a4def746da1c010460"},{"url":"/assets/images/logo/backup.svg","revision":"085349e05067027c7fcddea933956831"},{"url":"/assets/safari-pinned-tab.svg","revision":"bde2a8380b1780d580927c04b600a85e"},{"url":"/index.html","revision":"be58bf148621dde49215ec22fcbec1b2"},{"url":"/2018/07/01/welcome.html","revision":"4d555b7b1c64e7fd31a97adf3fecf26d"}];
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

