'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: 'What is a geotechnical investigation?',
    a: 'A geotechnical investigation describes subsurface conditions through soil boring, sampling, and in-situ testing such as Standard Penetration Testing (SPT). TRIUNE conducts this work in accordance with ASTM, DPWH, and NSCP requirements, and prepares signed and sealed reports used for foundation design and regulatory review.',
  },
  {
    q: 'Why is soil testing important?',
    a: 'Laboratory testing classifies soils and measures properties that affect bearing capacity, settlement, compaction, and drainage. TRIUNE’s DPWH-accredited laboratory performs soil mechanics testing aligned with ASTM and AASHTO methods to support foundation and construction decisions.',
  },
  {
    q: 'When should I conduct a geotechnical investigation?',
    a: 'A geotechnical investigation is typically needed before foundation design and building permit submissions, and is useful during feasibility studies. Early investigation helps match foundation recommendations to actual site conditions.',
  },
  {
    q: 'What foundation information can geotechnical testing provide?',
    a: 'Investigation and testing support subsurface profiles, soil classification, and bearing capacity analysis used in foundation design. TRIUNE also provides deep foundation solutions, including bored piling and micro-piling, where site conditions require them.',
  },
  {
    q: 'What types of projects does TRIUNE support?',
    a: 'TRIUNE supports residential, commercial, industrial, and infrastructure projects with geotechnical investigations, laboratory testing, deep foundation systems, structural engineering, and surveying services. Project experience includes work across Mindanao and Luzon.',
  },
  {
    q: 'How can I request a consultation?',
    a: 'Call +63 962 778 5674, email triunegeotechnical@gmail.com, or send the inquiry form on this page. The office is in Santo Niño, Zamboanga City, and is open Monday to Friday, 7:30 AM to 5:30 PM, and Saturday, 7:30 AM to 12:00 NN.',
  },
] as const

export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <div className="wrap faq-grid">
        <Reveal>
          <p className="eyebrow">QUESTIONS</p>
          <h2 id="faq-heading">CLEAR ANSWERS BEFORE YOU BUILD.</h2>
        </Reveal>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.q} className={`faq-item${isOpen ? ' is-open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-btn-${index}`}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    {item.q}
                    <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </h3>
                <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-btn-${index}`} hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
