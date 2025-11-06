// src/utils.js

// Use ABSOLUTE keys so lookups are stable across dev/prod
const manifest = import.meta.glob('/src/assets/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

// Usage: getImageUrl('skills/html.png') or 'contact/emailIcon.png'
export function getImageUrl(path) {
  const key = `/src/assets/${path}`;
  let url = manifest[key];

  if (!url) {
    console.warn(`[getImageUrl] Not found: ${key}`);
    return '';
  }

  // If Vite gave an absolute or inlined URL, just return it
  if (/^(?:https?:|data:|blob:)/i.test(url)) return url;

  // Prefix with app base (GH Pages) without double-prefix
  const rawBase = (import.meta.env?.BASE_URL) ?? '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  if (url.startsWith(base)) return url;
  if (url.startsWith('/')) return base + url.slice(1);
  return base + url;
}

// (Optional) quick debug helper
export const __listAssetKeys = () => Object.keys(manifest);
