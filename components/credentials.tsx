import { Reveal } from '@/components/reveal'
import { Topography } from '@/components/topography'
import { site } from '@/lib/site'

export function Credentials() {
  return (
    <section id="credentials" className="credentials" aria-labelledby="credentials-heading">
      <Topography className="credentials-topo" />
      <div className="wrap">
        <Reveal className="credentials-intro">
          <p className="eyebrow light">OFFICIAL CREDENTIALS</p>
          <h2 id="credentials-heading">REGISTERED. ACCREDITED. ACCOUNTABLE.</h2>
          <p>
            TRIUNE operates as a registered engineering practice with a DPWH-accredited laboratory. These credentials
            support legally valid reports, permits, and client due diligence.
          </p>
        </Reveal>
        <div className="credentials-plate">
          <div className="credentials-grid">
            {site.registrations.map((item, index) => (
              <Reveal key={item.code} delay={index * 90}>
                <article className="credential-card">
                  <span className="credential-seal" aria-hidden="true">
                    {item.code}
                  </span>
                  <p className="credential-label">{item.label}</p>
                  <strong>{item.value}</strong>
                  <p>{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="credentials-foot">
            Registered practice · Accredited laboratory · PRC-licensed engineers, signed and sealed
          </p>
        </div>
      </div>
    </section>
  )
}
