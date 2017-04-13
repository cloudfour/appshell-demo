import {version} from './package.json';
const cacheName = `cache_${version}`;

/**
 * Open the cache.
 * fetch the asset-manifest.json file and parse it as JSON.
 * Add "/" and all of the URLs from the maifest to the cache.
 */
async function precache () {
  const pages = ['/', '/error.html'];
  const [cache, manifest] = await Promise.all([
    caches.open(cacheName),
    fetch('/asset-manifest.json', {cache: 'no-store'})
      .then(res => res.json())
      .then(json => Object.values(json))
  ]);
  const urls = pages.concat(manifest)
  return cache.addAll(urls);
}

self.oninstall = event => (
  event.waitUntil(
    precache().then(skipWaiting)
  )
);
