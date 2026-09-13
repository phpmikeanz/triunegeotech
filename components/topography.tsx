export function Topography({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`topo ${className}`}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse cx="620" cy="390" rx="90" ry="48" />
        <ellipse cx="628" cy="396" rx="150" ry="82" />
        <ellipse cx="640" cy="404" rx="230" ry="128" />
        <ellipse cx="655" cy="414" rx="330" ry="186" />
        <ellipse cx="670" cy="428" rx="450" ry="250" />
        <ellipse cx="690" cy="446" rx="580" ry="320" />
        <path d="M40 210 C180 160 260 240 390 190 C520 140 610 230 760 180 C910 130 1040 210 1180 150" />
        <path d="M20 560 C160 610 300 520 440 580 C580 640 720 540 860 600 C1000 660 1100 580 1200 620" />
      </g>
    </svg>
  )
}
