import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { coreStrengths } from '../data/skills'
import { Section, SectionHeading, useInView } from '../components/Section'
import { GlassCard } from '../components/GlassCard'
import { Icon } from '../components/Icon'
import { fadeUp } from '../lib/motion'

export function About() {
  const [ref, inView] = useInView<HTMLDivElement>()

  const facts = [
    { icon: 'calendar', label: 'Date of Birth', value: profile.dob },
    { icon: 'globe', label: 'Languages', value: profile.languages.join(', ') },
    { icon: 'pin', label: 'Location', value: 'Mumbai, Maharashtra' },
  ]

  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="A bit about me" inView={inView} />
      <div ref={ref} className="grid gap-6 md:grid-cols-5">
        {profile.avatar && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
            className="md:col-span-2"
          >
            <GlassCard className="h-full overflow-hidden p-2.5">
              <div className="relative h-full min-h-[260px] overflow-hidden rounded-[1.4rem]">
                <img
                  src={profile.avatar}
                  alt={`Portrait of ${profile.name}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 p-4"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.55), transparent)',
                  }}
                >
                  <p className="text-sm font-semibold text-white">
                    {profile.shortName}
                  </p>
                  <p className="text-xs text-white/80">{profile.role}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
          className="md:col-span-3"
        >
          <GlassCard className="h-full p-7">
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              {profile.summary}
            </p>
            <div className="mt-6 space-y-3">
              {facts.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[var(--accent)]">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--text-faint)]">
                      {f.label}
                    </p>
                    <p className="text-sm font-medium">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
          className="md:col-span-5"
        >
          <GlassCard className="h-full p-7">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Icon name="sparkles" className="h-5 w-5 text-[var(--accent)]" />
              Core Strengths
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {coreStrengths.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                  <span className="mt-0.5 text-[var(--accent)]">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  )
}
