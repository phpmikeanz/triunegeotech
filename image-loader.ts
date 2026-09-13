const prefix = process.env.GITHUB_PAGES === 'true' ? '/triunegeotech' : ''

export default function imageLoader({ src }: { src: string }) {
  if (src.startsWith('http://') || src.startsWith('https://')) return src
  return `${prefix}${src.startsWith('/') ? src : `/${src}`}`
}
