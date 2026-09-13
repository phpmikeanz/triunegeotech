import Image from 'next/image'
import { Topography } from '@/components/topography'
import { site } from '@/lib/site'

const labels = ['SOIL INVESTIGATION', 'FIELD TESTING', 'FOUNDATION ANALYSIS', 'STRUCTURAL DESIGN'] as const

export function Hero() {
  return (
    <section id="home" className="hero">
      <Image
        src="/images/hero.jpg"
        alt="Geotechnical drilling rig boring into tropical soil at a field investigation site"
        fill
        priority
        className="hero-photo"
        sizes="100vw"
      />
      <div className="hero-shade" />
      <Topography className="hero-topo" />
      <ul className="hero-tech" aria-hidden="true">
        {labels.map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ul>
      <div className="hero-inner">
        <p className="eyebrow light">GEOTECHNICAL • FOUNDATION • STRUCTURAL ENGINEERING</p>
        <h1>BUILDING FOUNDATIONS OF TRUST.</h1>
        <p className="hero-lede">
          Precision-driven geotechnical and structural engineering solutions for safer, stronger, and more confident
          projects.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Schedule a Consultation <span aria-hidden="true">→</span>
          </a>
          <a className="btn btn-ghost" href="#services">
            Explore Our Services
          </a>
        </div>
        <p className="hero-place">Zamboanga City • Serving Projects Across the Philippines</p>
        <p className="hero-credentials">
          {site.registrations.map((item) => (
            <span key={item.code}>
              {item.code} {item.value}
            </span>
          ))}
        </p>
      </div>
      <a className="scroll-cue" href="#trust">
        <span>SCROLL TO EXPLORE</span>
        <em aria-hidden="true">↓</em>
      </a>
    </section>
  )
}
