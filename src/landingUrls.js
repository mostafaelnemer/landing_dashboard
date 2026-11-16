// Public production URLs supplied by the site owner.
export const LANDING_URLS = {
  cola: 'https://cola.healthyandtasty.net/',
  'ice-cream': 'https://ice-cream.healthyandtasty.net/',
  spread: 'https://spread.healthyandtasty.net/',
  'halawa-bar': 'https://sweetness.healthyandtasty.net/',
  'choco-bar': 'https://chocolate.healthyandtasty.net/',
}

export function landingPreviewUrl(site) {
  if (import.meta.env.DEV && ['localhost', '127.0.0.1'].includes(window.location.hostname)) {
    return `http://127.0.0.1:${{ cola: 4175, 'ice-cream': 4176, spread: 4177, 'halawa-bar': 4178, 'choco-bar': 4179 }[site]}/preview.html`
  }
  return LANDING_URLS[site] ? new URL('/preview.html', LANDING_URLS[site]).href : null
}
