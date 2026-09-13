import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, extname } from 'node:path'

const root = join(process.cwd(), 'out')
const prefix = '/triunegeotech'
const textExt = new Set(['.html', '.js', '.css', '.json', '.txt', '.xml', '.webmanifest'])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(path)
      continue
    }
    if (!textExt.has(extname(entry.name))) continue
    const source = await readFile(path, 'utf8')
    const next = source
      .replaceAll('"/images/', `"${prefix}/images/`)
      .replaceAll("'/images/", `'${prefix}/images/`)
      .replaceAll('href="/images/', `href="${prefix}/images/`)
      .replaceAll('"/icon.svg', `"${prefix}/icon.svg`)
      .replaceAll("'/icon.svg", `'${prefix}/icon.svg`)
      .replaceAll('"/icon-', `"${prefix}/icon-`)
      .replaceAll('"/apple-icon', `"${prefix}/apple-icon`)
    if (next !== source) await writeFile(path, next)
  }
}

await walk(root)
await writeFile(join(root, '.nojekyll'), '')
console.log('Prefixed static assets for GitHub Pages')
