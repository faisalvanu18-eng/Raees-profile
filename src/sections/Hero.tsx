import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { Section, useInView } from '../components/Section'
import { Icon } from '../components/Icon'
import { fadeUp, spring } from '../lib/motion'

const highlights = ['Tally Prime', 'GST & TDS Filing', 'MS Excel']

export function Hero() {
  const [ref, inView] = useInView<HTMLDivElement>()

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section id="hero" className="flex min-h-[92vh] items-center justify-center">
      <div ref={ref} className="flex flex-col items-center text-center">
        {/* Availability pill */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          className="glass glass-strong mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-[var(--text-muted)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
          </span>
          Available for opportunities
        </motion.span>

        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
          className="text-lg font-medium text-[var(--text-muted)] sm:text-xl"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
          className="mt-1 max-w-4xl text-6xl font-extrabold leading-[1.02] tracking-tight sm:text-8xl"
        >
          <span className="text-gradient">{profile.shortName}</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={3}
          className="mt-4 text-xl font-semibold text-[var(--text)] sm:text-2xl"
        >
          {profile.role}
        </motion.h2>

        {/* Specialty highlight chips */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={4}
          className="mt-5 flex flex-wrap items-center justify-center gap-2"
        >
          {highlights.map((h) => (
            <span
              key={h}
              className="glass rounded-full px-3.5 py-1.5 text-xs font-semibold text-[var(--accent)] sm:text-sm"
            >
              {h}
            </span>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={5}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={6}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={spring}
            onClick={() => jumpTo('contact')}
            className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg"
            style={{
              background:
                'linear-gradient(120deg, var(--accent), var(--accent-2))',
            }}
          >
            <Icon name="mail" className="h-4 w-4" />
            Get in touch
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={spring}
            onClick={() => jumpTo('experience')}
            className="glass glass-strong flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            <Icon name="briefcase" className="h-4 w-4" />
            View experience
          </motion.button>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={7}
          className="mt-8 flex items-center gap-2 text-sm text-[var(--text-faint)]"
        >
          <Icon name="pin" className="h-4 w-4" />
          <span>Mumbai, Maharashtra</span>
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          type="button"
          aria-label="Scroll to About"
          onClick={() => jumpTo('about')}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 flex flex-col items-center gap-1 text-[var(--text-faint)]"
        >
          <span className="text-[11px] uppercase tracking-widest">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon name="arrow-up" className="h-4 w-4 rotate-180" />
          </motion.span>
        </motion.button>
      </div>
    </Section>
  )
}
