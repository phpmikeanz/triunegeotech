import { Logo } from '@/components/logo'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-brand">
          <Logo />
          <p>{site.tagline}</p>
        </div>
        <div className="footer-cols">
          <div>
            <h2>COMPANY</h2>
            <a href="#about">About</a>
            <a href="#why-triune">Why Triune</a>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <h2>SERVICES</h2>
            <a href="#services">Geotechnical Investigations</a>
            <a href="#services">Deep Foundation Systems</a>
            <a href="#services">Structural Engineering</a>
            <a href="#services">Soil Testing</a>
            <a href="#services">Bored Piling</a>
            <a href="#services">Micro Piling</a>
            <a href="#services">Surveying</a>
          </div>
          <div>
            <h2>CONTACT</h2>
            <p>{site.location}</p>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
        <p className="footer-credentials">
          {site.registrations.map((item) => (
            <span key={item.code}>
              {item.code} {item.value}
            </span>
          ))}
        </p>
        <p className="footer-base">© 2026 TRIUNE Geotechnical Testing Services. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
