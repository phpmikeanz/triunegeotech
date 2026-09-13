import { Reveal } from '@/components/reveal'

const layers = [
  'GROUND SURFACE',
  'TOPSOIL',
  'SOIL STRATA',
  'WEATHERED MATERIAL',
  'ROCK / SUBSTRATA',
] as const

const markers = [
  { label: 'SPT', top: '22%' },
  { label: 'SOIL SAMPLE', top: '38%' },
  { label: 'BOREHOLE', top: '54%' },
  { label: 'FIELD DATA', top: '70%' },
  { label: 'FOUNDATION LEVEL', top: '84%' },
] as const

export function GeoSection() {
  return (
    <section className="geo" aria-labelledby="geo-heading">
      <div className="wrap geo-grid">
        <Reveal className="geo-copy">
          <h2 id="geo-heading">UNDERSTAND THE GROUND. REDUCE THE UNKNOWN.</h2>
          <p>
            Field investigation, sampling, and laboratory testing help describe subsurface conditions before foundation
            and structural decisions are made.
          </p>
          <ul>
            {layers.map((layer) => (
              <li key={layer}>
                <span>{layer}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="geo-visual" delay={120}>
          <div className="strata" aria-hidden="true">
            <div className="stratum surface" />
            <div className="stratum topsoil" />
            <div className="stratum soil" />
            <div className="stratum weathered" />
            <div className="stratum rock" />
            <div className="bore">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            {markers.map((marker) => (
              <span key={marker.label} className="geo-marker" style={{ top: marker.top }}>
                {marker.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
