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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
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
          custom={1}
          className="md:col-span-2"
        >
          <GlassCard className="h-full p-7">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Icon name="sparkles" className="h-5 w-5 text-[var(--accent)]" />
              Core Strengths
            </h3>
            <ul className="space-y-3">
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
