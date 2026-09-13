import { Reveal } from '@/components/reveal'

const items = [
  {
    title: 'DPWH ACCREDITED',
    body: 'Fully accredited laboratory with legal acceptance for regulatory requirements and building permits nationwide.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 26V8l10-4 10 4v18H6Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 26v-8h8v8" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'LICENSED ENGINEERS',
    body: 'All reports signed and sealed by PRC-licensed Geotechnical and Structural Engineers.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="11" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 25c1.6-5 5-7.5 9-7.5S23.4 20 25 25" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'ASTM STANDARDS',
    body: 'Testing aligned with ASTM and international protocols for technical accuracy.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M7 8h18M7 16h18M7 24h12" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="24" cy="24" r="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'MINDANAO + LUZON',
    body: 'Based in Zamboanga City with project experience across Mindanao and Luzon.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 5v22M6 14.5h20" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
] as const

export function TrustBar() {
  return (
    <section id="trust" className="trust-bar">
      <div className="wrap">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <article className="trust-item">
              <span className="trust-icon">{item.icon}</span>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
