import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * Custom desktop cursor: a soft dot with a trailing ring. Only enabled on
 * devices with a fine pointer (mouse). Hidden on touch devices and when
 * reduced-motion is requested.
 */
export function Cursor() {
  const reduced = useReducedMotion()
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (reduced) return
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return

    setEnabled(true)
    document.body.setAttribute('data-custom-cursor', 'true')

    let ringX = window.innerWidth / 2
    let ringY = window.innerHeight / 2
    let mouseX = ringX
    let mouseY = ringY
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [role="button"], input, textarea')
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? '48px' : '32px'
        ringRef.current.style.height = interactive ? '48px' : '32px'
        ringRef.current.style.opacity = interactive ? '0.9' : '0.5'
      }
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    loop()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.body.removeAttribute('data-custom-cursor')
    }
  }, [reduced])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] -ml-1 -mt-1 h-2 w-2 rounded-full"
        style={{ background: 'var(--accent)' }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 rounded-full border transition-[width,height,opacity] duration-200"
        style={{
          borderColor: 'var(--accent)',
          marginLeft: '-16px',
          marginTop: '-16px',
          opacity: 0.5,
        }}
      />
    </>
  )
}
