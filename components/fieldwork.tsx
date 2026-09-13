import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const frames = [
  {
    src: '/images/field-drill.jpg',
    alt: 'Geotechnical drilling rig operating during a field investigation',
    caption: 'FIELD INVESTIGATION',
  },
  {
    src: '/images/field-sample.jpg',
    alt: 'Engineer collecting a soil sample from a split spoon sampler',
    caption: 'SOIL SAMPLING',
  },
  {
    src: '/images/field-lab.jpg',
    alt: 'Soil testing equipment and specimens in the laboratory',
    caption: 'LABORATORY TESTING',
  },
  {
    src: '/images/field-analysis.jpg',
    alt: 'Engineer reviewing foundation drawings and soil profiles',
    caption: 'ENGINEERING ANALYSIS',
  },
] as const

export function Fieldwork() {
  return (
    <section className="fieldwork">
      <div className="wrap">
        <Reveal>
          <h2>WHERE ENGINEERING MEETS THE REAL WORLD.</h2>
        </Reveal>
        <div className="field-grid">
          {frames.map((frame, index) => (
            <Reveal key={frame.caption} delay={index * 70} className={`field-frame is-${index + 1}`}>
              <figure>
                <Image src={frame.src} alt={frame.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
                <figcaption>{frame.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
