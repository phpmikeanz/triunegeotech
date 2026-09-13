import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const services = [
  {
    number: '01',
    title: 'GEOTECHNICAL INVESTIGATIONS',
    body: 'Comprehensive soil boring, sampling, and in-situ testing including Standard Penetration Testing (SPT) following DPWH, ASTM, and international standards.',
    image: '/images/service-geo.jpg',
    alt: 'Soil boring and sampling during a geotechnical field investigation',
  },
  {
    number: '02',
    title: 'DEEP FOUNDATION SYSTEMS',
    body: 'Bored piling, micro-piling, and other deep foundation solutions designed for load transfer and structural integrity in diverse soil conditions.',
    image: '/images/service-foundation.jpg',
    alt: 'Bored piling rig installing a deep foundation',
  },
  {
    number: '03',
    title: 'STRUCTURAL ENGINEERING',
    body: 'Structural analysis, design, and evaluation for residential, commercial, industrial, and infrastructure projects.',
    image: '/images/service-structural.jpg',
    alt: 'Reinforced concrete structure under construction',
  },
] as const

const extras = [
  { title: 'Soil Testing', href: '#contact' },
  { title: 'Bored Piling', href: '#contact' },
  { title: 'Micro Piling', href: '#contact' },
  { title: 'Structural Design', href: '#contact' },
  { title: 'Surveying Services', href: '#contact' },
] as const

export function Services() {
  return (
    <section id="services" className="services">
      <div className="wrap">
        <Reveal className="section-intro">
          <p className="eyebrow">02 — OUR EXPERTISE</p>
          <h2>ENGINEERING SOLUTIONS FROM THE GROUND UP.</h2>
          <p>
            From understanding soil conditions to designing foundations and structures, TRIUNE provides technical
            expertise throughout the engineering process.
          </p>
        </Reveal>
        <div className="service-cards">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 90}>
              <article className="service-card">
                <div className="service-photo">
                  <Image src={service.image} alt={service.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className="service-body">
                  <span>{service.number}</span>
                  <p className="service-kicker">Service category</p>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <a href="#contact">
                    Explore Service <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="service-extras">
          {extras.map((item) => (
            <a key={item.title} href={item.href}>
              {item.title} <span aria-hidden="true">→</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
