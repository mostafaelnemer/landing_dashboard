import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isConfigured = Boolean(url && key)

export const supabase = createClient(url || 'http://localhost', key || 'missing-key')

export const BUCKET = 'offer-images'

/** الصفحات اللي الداشبورد بتديرها — الـ key هو قيمة عمود site */
export const SITES = [
  { key: 'cola', label: 'Healthy Cola', name: 'الكولا', emoji: '🥤' },
  { key: 'ice-cream', label: 'Healthy Ice Cream', name: 'الآيس كريم', emoji: '🍨' },
  { key: 'spread', label: 'Healthy Spread', name: 'السبريد', emoji: '🥄' },
  // الـ key فاضل 'halawa-bar' (مخزّن في عمود site) — المنتج نفسه حلاوة سبريد
  { key: 'halawa-bar', label: 'Healthy Halawa Spread', name: 'الحلاوة سبريد', emoji: '🍯' },
  { key: 'choco-bar', label: 'Healthy Choco Bar', name: 'الشوكولاتة بار', emoji: '🍫' },
]

/** اسم الصفحة بالعربي — مثال: siteLabel('choco-bar') → 'الشوكولاتة بار' */
export const SITE_NAMES = Object.fromEntries(SITES.map(s => [s.key, s.name]))
export const siteLabel = key => SITE_NAMES[key] || key
