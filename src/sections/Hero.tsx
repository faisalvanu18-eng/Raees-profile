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
            <div className="glass h-28 w-28 overflow-hidden rounded-full p-1 sm:h-32 sm:w-32">
              <img
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                width={128}
                height={128}
                loading="eager"
                decoding="async"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          ) : (
            <div
              className="glass flex h-28 w-28 items-center justify-center rounded-full text-4xl font-bold sm:h-32 sm:w-32"
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

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
          className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
        >
          <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={3}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
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
