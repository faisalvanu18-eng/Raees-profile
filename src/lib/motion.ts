import type { Transition, Variants } from 'framer-motion'

/** Light-mass iOS-style spring. */
export const spring: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 26,
  mass: 0.6,
}

export const springSoft: Transition = {
  type: 'spring',
  stiffness: 180,
  damping: 24,
  mass: 0.8,
}

/** Section/card entrance variants. Pass custom index for stagger. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...spring, delay: i * 0.07 },
  }),
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { ...spring, delay: i * 0.06 },
  }),
}
