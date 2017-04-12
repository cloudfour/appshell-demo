const cacheName = 'cache';

async function precache () {
  const cache = await caches.open(cacheName);
  return cache.addAll([
    '/'
  ]);
}

addEventListener('install', event => {
  console.log('Service worker install');
  return event.waitUntil(
    precache().then(skipWaiting)
  );
});
