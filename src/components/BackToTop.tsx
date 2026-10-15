import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from './Icon'
import { spring } from '../lib/motion'

/** Floating back-to-top button, appears after scrolling down. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          title="Back to top"
          onClick={scrollTop}
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={spring}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          className="fixed right-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg md:right-8"
          style={{
            bottom: 'calc(env(safe-area-inset-bottom, 0px) + 92px)',
            background:
              'linear-gradient(120deg, var(--accent), var(--accent-2))',
          }}
        >
          <Icon name="arrow-up" className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
