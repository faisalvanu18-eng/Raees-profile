import { motion } from 'framer-motion'
import { experience } from '../data/experience'
import { Section, SectionHeading, useInView } from '../components/Section'
import { GlassCard } from '../components/GlassCard'
import { Icon } from '../components/Icon'
import { fadeUp } from '../lib/motion'

export function Experience() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        inView={inView}
      />
      <div ref={ref} className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-[22px] top-2 bottom-2 w-px"
          style={{ background: 'rgba(var(--surface-border), 0.12)' }}
          aria-hidden="true"
        />
        <div className="space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i}
              className="relative pl-14"
            >
              {/* Timeline node */}
              <span
                className="glass absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-full text-[var(--accent)]"
                aria-hidden="true"
              >
                <Icon name="briefcase" className="h-5 w-5" />
              </span>

              <GlassCard className="p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-sm font-medium text-[var(--accent)]">
                      {job.company}
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      background: job.current
                        ? 'linear-gradient(120deg, rgba(10,132,255,0.15), rgba(94,92,230,0.15))'
                        : 'rgba(var(--surface), 0.5)',
                      color: job.current ? 'var(--accent)' : 'var(--text-muted)',
                    }}
                  >
                    {job.current && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      </span>
                    )}
                    {job.period}
                  </span>
                </div>

                <p className="mt-1 flex items-center gap-1.5 text-xs text-[var(--text-faint)]">
                  <Icon name="pin" className="h-3.5 w-3.5" />
                  {job.location}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {job.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]"
                    >
                      <span className="mt-0.5 text-[var(--accent)]">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
