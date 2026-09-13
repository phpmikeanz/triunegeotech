export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`brand ${className}`}>
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="brand-text">
        <strong>TRIUNE</strong>
        <em>GEOTECHNICAL</em>
      </span>
    </span>
  )
}
