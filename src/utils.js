// src/utils.js

// Map everything under src/assets at build time
// NOTE: pattern is relative to THIS file (./assets/...)
const imageManifest = import.meta.glob('./assets/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

// Call like: getImageUrl('hero/heroImage.png')
export const getImageUrl = (path) => {
  const key = `./assets/${path}`;
  let url = imageManifest[key];

  if (!url) {
    console.warn(`[getImageUrl] Not found: ${key}`);
    return '';
  }

if (/^https?:\/\//i.test(url)) return url;

const base = import.meta.env.BASE_URL || '/';
const absBase = new URL(basePath, window.location.origin);

return new URL(url, replace(/^\//, ''), absBase).toString();
};