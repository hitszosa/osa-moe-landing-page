// import 'normalize.css'

globalThis.trans = () => {
  document.getElementById("logo").src = new URL('./assets/images/lug-pub-logo-alt.svg', import.meta.url);
  return '🏳️‍⚧️'
}