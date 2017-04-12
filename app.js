async function registerServiceWorker () {
  if ('serviceWorker' in navigator) {
    return navigator.serviceWorker.register('sw.js')
  } else {
    throw new Error('Service worker cannot be registered');
  }
}

registerServiceWorker()
  .then(registration => console.log('Service worker registered', registration))
  .catch(err => console.log(err));
