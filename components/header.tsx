'use client'

import { useEffect, useState } from 'react'
import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { nav, site } from '@/lib/site'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <a className="brand-link" href="#home" aria-label={`${site.shortName} home`} onClick={close}>
        <Logo />
      </a>
      <nav className="desktop-nav" aria-label="Primary">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-tools">
        <ThemeToggle />
        <a className="header-cta" href="#contact">
          Schedule a Consultation <span aria-hidden="true">→</span>
        </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span>
        <i />
        <i />
      </button>
      </div>
      <div id="mobile-nav" className={`mobile-nav${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a className="mobile-cta" href="#contact" onClick={close}>
            Schedule a Consultation →
          </a>
        </nav>
      </div>
    </header>
  )
}
