import Plausible from 'plausible-tracker'

// SvelteKit workaround for static generation
const fn = typeof Plausible == "function" ? Plausible : (Plausible as any).default as typeof Plausible

// Setup analytics
export const plausible = fn({
  domain: 'scambier.xyz',
  apiHost: 'https://stats.scambier.xyz'
})
