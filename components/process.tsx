'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'INVESTIGATE',
    body: 'Understand site conditions through field investigation and testing.',
  },
  {
    number: '02',
    title: 'ANALYZE',
    body: 'Interpret soil, material, and engineering data.',
  },
  {
    number: '03',
    title: 'DESIGN',
    body: 'Develop appropriate engineering solutions.',
  },
  {
    number: '04',
    title: 'DELIVER',
    body: 'Provide clear technical recommendations and project support.',
  },
] as const

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const items = Array.from(node.querySelectorAll('[data-step]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const index = Number((entry.target as HTMLElement).dataset.step)
          setActive((current) => Math.max(current, index))
        })
      },
      { threshold: 0.55 },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="process">
      <div className="wrap">
        <h2>FROM FIELD INVESTIGATION TO ENGINEERING CONFIDENCE.</h2>
        <div ref={ref} className={`process-track is-${active}`}>
          <div className="process-line" aria-hidden="true" />
          {steps.map((step, index) => (
            <article
              key={step.number}
              data-step={index}
              className={`process-step${index <= active ? ' is-on' : ''}`}
            >
              <span>{step.number} — {step.title}</span>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
