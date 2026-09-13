import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Consult() {
  return (
    <section className="consult">
      <div className="wrap consult-grid">
        <Reveal className="consult-photo">
          <Image
            src="/images/consult.jpg"
            alt="Engineering team reviewing project drawings at a site meeting"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal className="consult-copy" delay={100}>
          <h2>LET&apos;S TALK ABOUT YOUR PROJECT.</h2>
          <p>
            Whether you&apos;re planning a new structure, investigating site conditions, or looking for reliable
            engineering support, our team is ready to help you understand the ground and move your project forward.
          </p>
          <a className="btn btn-dark" href="#contact">
            Schedule a Consultation <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
