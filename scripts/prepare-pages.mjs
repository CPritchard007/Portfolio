import fs from 'node:fs'
import path from 'node:path'

const distDir = path.resolve(process.cwd(), 'dist')

if (!fs.existsSync(distDir)) {
  throw new Error('dist/ does not exist. Run `npm run build` first.')
}

// Ensures GitHub Pages doesn't run Jekyll processing.
fs.writeFileSync(path.join(distDir, '.nojekyll'), '')
