import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { SectionId } from '../data/nav'
import { useInView } from '../hooks/useInView'
import { fadeUp } from '../lib/motion'

interface SectionProps {
  id: SectionId
  children: ReactNode
  className?: string
}

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  inView: boolean
}

/**
 * Section wrapper. Provides consistent spacing/scroll-margin and exposes the
 * in-view flag to children via render prop so entrances animate reliably on
 * both scroll and anchor jumps.
 */
export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-5xl scroll-mt-20 px-5 py-20 sm:py-24 ${className}`}
    >
      {children}
    </section>
  )
}

export function SectionHeading({ eyebrow, title, inView }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="mb-10 text-center"
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </motion.div>
  )
}

export { useInView }
