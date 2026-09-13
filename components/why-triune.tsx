import { Reveal } from '@/components/reveal'

const principles = [
  {
    title: 'TECHNICAL EXPERTISE',
    body: 'Geotechnical and structural engineering capability across investigation, testing, foundations, and design.',
  },
  {
    title: 'REGULATORY COMPLIANCE',
    body: 'Testing and engineering work aligned with DPWH, ASTM, NSCP, and applicable building requirements.',
  },
  {
    title: 'PROFESSIONAL INTEGRITY',
    body: 'Reports and engineering work handled by PRC-licensed professionals and signed and sealed for legal validity.',
  },
  {
    title: 'PROJECT-FOCUSED',
    body: 'Solutions designed around actual project and site conditions, from field investigation through technical recommendations.',
  },
] as const

export function WhyTriune() {
  return (
    <section id="why-triune" className="why">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow light">03 — WHY TRIUNE</p>
          <h2>PRECISION YOU CAN BUILD ON.</h2>
        </Reveal>
        <div className="why-grid">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
