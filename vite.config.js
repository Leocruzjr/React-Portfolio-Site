import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: use repo base only in production so localhost stays '/'
// Replace React-Portfolio-Site with your repo name if different
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/React-Portfolio-Site/' : '/',
}))