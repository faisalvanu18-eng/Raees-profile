import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref to attach to an element and a boolean flag that flips true
 * once the element enters the viewport. Uses a ref flag (not whileInView +
 * once) so entrances animate reliably on both scroll and anchor jumps.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px', ...options },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return [ref, inView]
}
