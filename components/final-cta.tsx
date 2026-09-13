import { Topography } from '@/components/topography'

export function FinalCta() {
  return (
    <section className="final-cta">
      <Topography className="cta-topo" />
      <div className="wrap">
        <h2>BUILD WITH CONFIDENCE.</h2>
        <p>Start with the ground. Let TRIUNE help you understand what lies beneath.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Schedule a Consultation <span aria-hidden="true">→</span>
          </a>
          <a className="btn btn-ghost" href={`mailto:triunegeotechnical@gmail.com`}>
            Contact TRIUNE →
          </a>
        </div>
      </div>
    </section>
  )
}
