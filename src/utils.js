// src/utils.js

// Build a manifest of all files under /src/assets at build time.
// Vite will return hashed, base-prefixed URLs.
const imageManifest = import.meta.glob('/src/assets/**/*', {
  eager: true,
  as: 'url',
});

// Call with paths like "contact/emailIcon.png"
export const getImageUrl = (path) => {
  const key = `/src/assets/${path}`;
  const url = imageManifest[key];
  if (!url) {
    console.warn(`[getImageUrl] Not found: ${key}`);
  }
  return url || '';
};
