import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { Topography } from '@/components/topography'
import { site } from '@/lib/site'

export function About() {
  return (
    <section id="about" className="about">
      <Topography className="about-topo" />
      <div className="wrap about-grid">
        <Reveal className="about-media">
          <Image
            src="/images/about-field.jpg"
            alt="Engineers reviewing soil core samples at a geotechnical investigation site"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </Reveal>
        <Reveal className="about-copy" delay={120}>
          <p className="eyebrow">01 — ABOUT TRIUNE</p>
          <h2>ENGINEERING BEGINS WITH UNDERSTANDING THE GROUND.</h2>
          <p>
            TRIUNE Geotechnical Testing Services provides geotechnical investigations, deep foundation systems, and
            structural engineering solutions for construction and infrastructure projects across the Philippines.
          </p>
          <p>
            The practice is built around technical precision, safety, and compliance with DPWH and international
            engineering standards. Laboratory testing and field investigation support analyses used for structural
            safety, foundation stability, and regulatory requirements.
          </p>
          <p>
            Reports are signed and sealed by PRC-licensed Geotechnical and Structural Engineers. The firm holds a
            Mayor&apos;s Permit from Zamboanga City.
          </p>
          <ul className="about-credentials">
            {site.registrations.map((item) => (
              <li key={item.code}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </li>
            ))}
          </ul>
          <a className="text-cta" href="#why-triune">
            Discover TRIUNE <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
