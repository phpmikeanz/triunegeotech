'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/reveal'

const projects = [
  {
    size: 'featured',
    category: 'Geotechnical Investigation',
    year: '2024',
    title: 'Advanced Soil Analysis',
    body: 'Comprehensive geotechnical investigation with detailed soil analysis and foundation design recommendations for major infrastructure development.',
    image: '/images/project-soil.jpg',
    alt: 'Soil core samples prepared for laboratory analysis',
  },
  {
    size: 'small',
    category: 'Laboratory',
    year: '2024',
    title: 'Material Testing Laboratory',
    body: 'Soil and material testing facility with 15+ specialized procedures for quality control and analysis.',
    image: '/images/project-lab.jpg',
    alt: 'Soil mechanics laboratory with testing equipment and specimens',
  },
  {
    size: 'small',
    category: 'Regional Studies',
    year: '2024',
    title: 'Regional Soil Studies',
    body: 'Systematic collection and analysis of soil specimens from key regions across Mindanao.',
    image: '/images/project-regional.jpg',
    alt: 'Tropical terrain and earth cuts associated with regional soil studies',
  },
] as const

const stats = [
  { value: '2024', label: 'PROJECT WORK' },
  { value: '15+', label: 'SPECIALIZED TESTING PROCEDURES', count: 15, suffix: '+' },
  { value: 'Mindanao + Luzon', label: 'PROJECT REGIONS' },
] as const

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const run = () => {
      if (started.current) return
      started.current = true
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setValue(target)
        return
      }
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1100, 1)
        setValue(Math.round(target * progress))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) run()
    }, { threshold: 0.25 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="wrap">
        <Reveal className="section-intro">
          <p className="eyebrow">PROJECT PORTFOLIO</p>
          <h2>WORK GROUNDED IN EVIDENCE.</h2>
        </Reveal>
        <div className="project-gallery">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80} className={`project-card is-${project.size}`}>
              <article>
                <div className="project-photo">
                  <Image src={project.image} alt={project.alt} fill sizes="(max-width: 900px) 90vw, 60vw" />
                  <div className="project-meta">
                    <span>PROJECT</span>
                    <span>{project.year}</span>
                    <span>{project.category.toUpperCase()}</span>
                  </div>
                </div>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.body}</p>
                  <a href="#contact">
                    View Project <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="project-stats">
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <p>
                <strong>
                  {'count' in stat ? <Counter target={stat.count} suffix={stat.suffix} /> : stat.value}
                </strong>
                <span>{stat.label}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
