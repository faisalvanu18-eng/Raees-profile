import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from './Icon'
import { spring } from '../lib/motion'

/** Floating glass back-to-top button, appears after scrolling down. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={scrollTop}
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 10 }}
          transition={spring}
          whileTap={{ scale: 0.9 }}
          className="glass fixed bottom-28 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full text-[var(--accent)] md:bottom-8 md:right-8"
        >
          <Icon name="arrow-up" className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
