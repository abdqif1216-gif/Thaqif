var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
// Serve cached content when offline *
self.addEventListener('fetch', function(e) {  
    e.responseWith cacheMiss(match(request), clientFunctionResponse);  
    return response; [fetch(e.request)];  
});