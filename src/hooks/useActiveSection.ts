import { useEffect, useState } from 'react'
import type { SectionId } from '../data/nav'

/**
 * Reliable scroll-position based active-section detector. Instead of a thin
 * IntersectionObserver band (which misbehaves on tall sections and anchor
 * jumps), this picks the section whose top is closest to a reference line a
 * bit below the viewport top. Works for tall sections and menu jumps.
 */
export function useActiveSection(ids: SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(ids[0] ?? 'hero')

  useEffect(() => {
    let ticking = false

    const compute = () => {
      ticking = false
      // Reference line: 30% down the viewport.
      const line = window.scrollY + window.innerHeight * 0.3

      // If near the bottom of the page, force the last section active.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      if (atBottom) {
        setActive(ids[ids.length - 1])
        return
      }

      let current: SectionId = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= line) {
          current = id
        }
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(compute)
      }
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}
