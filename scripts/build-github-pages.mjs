import { spawnSync } from 'node:child_process'

process.env.GITHUB_PAGES = 'true'

const build = spawnSync('npx', ['next', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
})

if (build.status !== 0) process.exit(build.status ?? 1)

const prefix = spawnSync('node', ['scripts/prefix-github-pages.mjs'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
})

process.exit(prefix.status ?? 1)
