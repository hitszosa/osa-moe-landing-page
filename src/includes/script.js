// import 'normalize.css'

globalThis.trans = () => {
  document.getElementById("logo").src = new URL('./assets/images/lug-pub-logo-alt.svg', import.meta.url);
  return '🏳️‍⚧️'
}

navigator.serviceWorker.register(
  new URL('./sw.js', import.meta.url), { type: 'module' })