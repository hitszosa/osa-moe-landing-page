// import 'normalize.css'

console.info("Welcome to the pub!")
console.info("Check out TXT record of tg.osa.moe")

globalThis.feelLucky = () => {
  document.getElementById("logo").src = new URL('./assets/images/lug-pub-logo-alt.svg', import.meta.url);
  return '🎲'
}

navigator.serviceWorker.register(
  new URL('./sw.js', import.meta.url), { type: 'module' })