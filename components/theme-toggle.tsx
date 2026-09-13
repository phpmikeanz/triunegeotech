'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function readTheme(): Theme {
  const stored = window.localStorage.getItem('triune-theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.style.colorScheme = theme
  window.localStorage.setItem('triune-theme', theme)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#080e16' : '#0B1726')
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const current = readTheme()
    setTheme(current)
    applyTheme(current)
    setReady(true)
  }, [])

  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      className={`theme-toggle${ready ? ' is-ready' : ''}`}
      type="button"
      aria-label={next === 'dark' ? 'Switch to dark mode' : 'Switch to light mode'}
      aria-pressed={theme === 'dark'}
      onClick={() => {
        setTheme(next)
        applyTheme(next)
      }}
    >
      <span className="theme-toggle-track" data-theme={theme} aria-hidden="true">
        <svg className="theme-sun" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 3.5v1.8M12 18.7v1.8M3.5 12h1.8M18.7 12h1.8M6.1 6.1l1.3 1.3M16.6 16.6l1.3 1.3M6.1 17.9l1.3-1.3M16.6 7.4l1.3-1.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg className="theme-moon" viewBox="0 0 24 24" fill="none">
          <path d="M15.2 4.4A7.8 7.8 0 1 0 19.6 15 6.2 6.2 0 0 1 15.2 4.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <i />
      </span>
    </button>
  )
}
