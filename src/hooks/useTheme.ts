import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const META_LIGHT = '#eef0f5'
const META_DARK = '#050507'

function getSystemTheme(): Theme {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.style.colorScheme = theme
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? META_DARK : META_LIGHT)
  }
}

/**
 * Follows the OS / device theme via prefers-color-scheme and keeps the
 * theme-color meta in sync. Live-updates when the user flips their system
 * theme. The initial theme is already applied pre-paint by the inline script
 * in index.html; this hook keeps React state and the listener consistent.
 */
export function useTheme(): Theme {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== 'undefined') {
      const current = document.documentElement.getAttribute('data-theme')
      if (current === 'light' || current === 'dark') return current
    }
    return getSystemTheme()
  })

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e: MediaQueryListEvent) => {
      const next: Theme = e.matches ? 'dark' : 'light'
      setTheme(next)
      applyTheme(next)
    }
    // Ensure consistency on mount.
    applyTheme(theme)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return theme
}
