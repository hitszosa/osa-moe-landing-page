import { manifest, version } from '@parcel/service-worker'

const install = async () => {
  const cache = await caches.open(version)
  await cache.addAll(manifest)
}
addEventListener('install', e => e.waitUntil(install()))

const activate = async () => {
  const keys = await caches.keys()
  await Promise.all(
    keys.map(key => key !== version && caches.delete(key))
  )
}
addEventListener('activate', e => e.waitUntil(activate()))

const fakeFetch = async (e) => {
  try {
    let res = await fetch(e.request)
    let cache = await caches.open('cache')
    cache.put(e.request.url, res.clone())
    return res
  } catch (error) {
    return caches.match(e.request)
  }
}
addEventListener('fetch', fakeFetch)