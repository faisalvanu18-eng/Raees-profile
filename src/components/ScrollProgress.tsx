import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin gradient progress bar fixed to the top, driven by scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.4,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
      }}
    />
  )
}
