import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * Animated glass background: soft drifting accent blobs behind a subtle grid.
 * Purely decorative; sits at the very back (z -10) and ignores pointer events.
 */
export function AnimatedBackground() {
  const reduced = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(var(--grid-line), 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--grid-line), 0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse at 50% 0%, black 10%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 50% 0%, black 10%, transparent 75%)',
        }}
      />

      {/* Drifting accent blobs */}
      <motion.div
        className="absolute -left-32 top-[-10%] h-[42vh] w-[42vh] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)', opacity: 0.25 }}
        animate={reduced ? undefined : { x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-10%] top-[30%] h-[46vh] w-[46vh] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--accent-2), transparent 70%)', opacity: 0.22 }}
        animate={reduced ? undefined : { x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[25%] h-[38vh] w-[38vh] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)', opacity: 0.18 }}
        animate={reduced ? undefined : { x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
