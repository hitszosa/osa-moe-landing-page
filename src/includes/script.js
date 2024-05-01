// import 'normalize.css'

console.info('Welcome to the pub!')
console.info('Check out TXT record of tg.osa.moe')

navigator.serviceWorker.register(
  new URL('./sw.js', import.meta.url), { type: 'module' })

let logoIndex = 0
const $logos = document.querySelectorAll('img.logo')
const [$prevButton, $nextButton] = document.querySelectorAll('.logo-view > button')

const updateLogos = () => {
  $logos.forEach((logo, index) => {
    if (index === logoIndex) {
      logo.classList.add('primary')
    } else {
      logo.classList.remove('primary')
    }
  })
}

$prevButton.addEventListener('click', (_) => {
  logoIndex = (logoIndex - 1 + $logos.length) % $logos.length
  updateLogos();
})

$nextButton.addEventListener('click', (_) => {
  logoIndex = (logoIndex + 1) % $logos.length
  updateLogos();
})

document.addEventListener('pointerenter', (ev) => {
  if (ev.pointerType === 'mouse') {
    $prevButton.classList.remove('visible')
    $nextButton.classList.remove('visible')
  } else {
    $prevButton.classList.add('visible')
    $nextButton.classList.add('visible')
  }
})