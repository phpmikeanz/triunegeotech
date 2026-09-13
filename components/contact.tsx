'use client'

import { FormEvent, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

const types = [
  'Geotechnical Investigation',
  'Soil / Material Testing',
  'Deep Foundation Systems',
  'Bored Piling',
  'Micro Piling',
  'Structural Engineering',
  'Surveying Services',
  'Other',
] as const

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const lines = [
      `Name: ${data.get('name')}`,
      `Company: ${data.get('company')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Project type: ${data.get('type')}`,
      `Project location: ${data.get('location')}`,
      '',
      String(data.get('message') ?? ''),
    ]
    const href = `mailto:${site.email}?subject=${encodeURIComponent('Project inquiry — TRIUNE Geotechnical')}&body=${encodeURIComponent(lines.join('\n'))}`
    window.location.href = href
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="wrap contact-grid">
        <Reveal>
          <p className="eyebrow">CONTACT</p>
          <h2>HAVE A PROJECT IN MIND?</h2>
          <p className="lede">Let&apos;s discuss your engineering requirements.</p>
          <ul className="contact-facts">
            <li>
              <span>Office</span>
              <strong>{site.address}</strong>
            </li>
            <li>
              <span>Phone</span>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span>Credentials</span>
              <strong>
                {site.registrations.map((item) => (
                  <em key={item.code}>
                    {item.label}: {item.value}
                  </em>
                ))}
              </strong>
            </li>
            <li>
              <span>Hours</span>
              <strong>
                {site.hours.map((item) => (
                  <em key={item.days}>
                    {item.days}: {item.time}
                  </em>
                ))}
              </strong>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              Full Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Company / Organization
              <input name="company" type="text" autoComplete="organization" />
            </label>
            <div className="form-row">
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Project Type
                <select name="type" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {types.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label>
                Project Location
                <input name="location" type="text" />
              </label>
            </div>
            <label>
              Message
              <textarea name="message" rows={5} required />
            </label>
            <button className="btn btn-dark" type="submit">
              Send Inquiry <span aria-hidden="true">→</span>
            </button>
            {sent ? <p className="form-note">Your email app should open with the inquiry addressed to {site.email}.</p> : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
