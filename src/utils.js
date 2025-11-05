// src/utils.js

// Map everything under src/assets at build time
// NOTE: pattern is relative to THIS file (./assets/...)
const imageManifest = import.meta.glob('./assets/**/*', {
  eager: true,
  as: 'url',
});

// Call like: getImageUrl('hero/heroImage.png')
export const getImageUrl = (path) => {
  const key = `./assets/${path}`;
  let url = imageManifest[key];

  if (!url) {
    console.warn(`[getImageUrl] Not found: ${key}`);
    return '';
  }

  // If Vite gave us "/assets/..." (domain-root), prefix the site's base.
  if (url.startsWith('/')) {
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    url = `${base}${url}`;
  }

  return url;
};
