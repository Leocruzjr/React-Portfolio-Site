export const getImageUrl = (p) => {
  if (!p || typeof p !== 'string') {
    throw new Error(`getImageUrl: invalid path "${p}"`)
  }
  // remove any accidental leading slashes to avoid "assets//..."
  const clean = p.replace(/^\/+/, '')
  // For files in public/assets
  return `${import.meta.env.BASE_URL}./assets/${clean}`
}
