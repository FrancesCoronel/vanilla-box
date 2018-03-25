/**
 * Setting up service worker with cache-first network
 */
var CACHE = "vanilla-box-precache";

/**
 * Add an array of files to precache for your app
 */
var precacheFiles = [
  "index.html",
  "favicon.ico",
  "assets/css/style.css",
  "assets/js/app.min.js"
];

/**
 * Set up the cache-array to configure pre-cache content
 */
self.addEventListener("install", function(evt) {
  console.log("The service worker is being installed! 🎉");
  evt.waitUntil(
    precache().then(function() {
      console.log("[ServiceWorker] Skip waiting on install");
      return self.skipWaiting();
    })
  );
});

/**
 * Allow service worker to control the current page
 */
self.addEventListener("activate", function(event) {
  console.log("[ServiceWorker] Claiming clients for current page");
  return self.clients.claim();
});

/**
 * Fetching and serving assets
 */
self.addEventListener("fetch", function(evt) {
  console.log(
    "The service worker is serving the following asset: " + evt.request.url
  );
  evt.respondWith(fromCache(evt.request).catch(fromServer(evt.request)));
  evt.waitUntil(update(evt.request));
});

/**
 * Add files from precache array
 */
function precache() {
  return caches.open(CACHE).then(function(cache) {
    return cache.addAll(precacheFiles);
  });
}

/**
 * Fetch files from cache for faster loading
 * @param {*} request
 */
function fromCache(request) {
  return caches.open(CACHE).then(function(cache) {
    return cache.match(request).then(function(matching) {
      return matching || Promise.reject("no-match");
    });
  });
}

/**
 * Call server to get newest version of file to use next time user visits page
 * @param {*} request
 */
function update(request) {
  return caches.open(CACHE).then(function(cache) {
    return fetch(request).then(function(response) {
      return cache.put(request, response);
    });
  });
}

/**
 * Fallback if it is not in the cahche to go to the server and get it
 * @param {*} request
 */
function fromServer(request) {
  return fetch(request).then(function(response) {
    return response;
  });
}
