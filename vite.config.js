import { copyFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const pagesBase = '/Parhelia-personal.github.io/'

function targetCursorStyles() {
  return {
    name: 'target-cursor-styles',
    resolveId(source, importer) {
      if (!importer || source !== './TargetCursor.css') return null
      const normalized = importer.replaceAll('\\', '/')
      if (!normalized.endsWith('/src/components/target_cursor.jsx')) return null
      return path.resolve(path.dirname(importer), 'target_cursor.css')
    },
  }
}

function githubPagesFiles() {
  return {
    name: 'github-pages-files',
    apply: 'build',
    closeBundle() {
      const docs = path.resolve('docs')
      copyFileSync(path.join(docs, 'index.html'), path.join(docs, '404.html'))
      writeFileSync(path.join(docs, '.nojekyll'), '')
    },
  }
}

export default defineConfig(({ command }) => ({
  base: command === 'build' ? pagesBase : '/',
  plugins: [targetCursorStyles(), react(), tailwindcss(), githubPagesFiles()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}))
