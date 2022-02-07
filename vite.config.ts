import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/App.ts'),
      name: 'SmashCredits',
      fileName: (format) => `smash-credits.${format}.js`,
    },
  },
})
