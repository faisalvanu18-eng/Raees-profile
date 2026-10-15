import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { Section, useInView } from '../components/Section'
import { Icon } from '../components/Icon'
import { fadeUp, spring } from '../lib/motion'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}

export function Hero() {
  const [ref, inView] = useInView<HTMLDivElement>()

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section id="hero" className="flex min-h-[92vh] items-center justify-center">
      <div ref={ref} className="flex flex-col items-center text-center">
        {/* Avatar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          className="mb-7"
        >
          {profile.avatar ? (
            <div className="relative">
              <motion.div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full blur-2xl"
                style={{
                  background:
                    'linear-gradient(120deg, var(--accent), var(--accent-2))',
                  opacity: 0.4,
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="glass glass-strong relative h-32 w-32 overflow-hidden rounded-full p-1.5 sm:h-36 sm:w-36">
                <img
                  src={profile.avatar}
                  alt={`Portrait of ${profile.name}`}
                  width={144}
                  height={144}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div
              className="glass flex h-32 w-32 items-center justify-center rounded-full text-4xl font-bold sm:h-36 sm:w-36"
              style={{ color: 'var(--accent)' }}
            >
              {initials(profile.name)}
            </div>
          )}
        </motion.div>

        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
          className="glass mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-[var(--text-muted)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
          </span>
          {profile.role}
        </motion.span>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
          className="text-lg font-medium text-[var(--text-muted)] sm:text-xl"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
          className="mt-1 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl"
        >
          <span className="text-gradient">{profile.shortName}</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={3}
          className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={4}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            transition={spring}
            onClick={() => jumpTo('contact')}
            className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg"
            style={{
              background: 'linear-gradient(120deg, var(--accent), var(--accent-2))',
            }}
          >
            <Icon name="mail" className="h-4 w-4" />
            Get in touch
          </motion.button>
          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            transition={spring}
            onClick={() => jumpTo('experience')}
            className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            <Icon name="briefcase" className="h-4 w-4" />
            View experience
          </motion.button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={5}
          className="mt-8 flex items-center gap-2 text-sm text-[var(--text-faint)]"
        >
          <Icon name="pin" className="h-4 w-4" />
          <span>Mumbai, Maharashtra</span>
        </motion.div>
      </div>
    </Section>
  )
}
