import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  // Ta linia jest kluczowa dla poprawnego działania na GitHub Pages
  base: '/studio-paznokci/' 
})