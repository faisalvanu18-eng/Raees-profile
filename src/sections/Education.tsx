import { motion } from 'framer-motion'
import { education, certifications } from '../data/education'
import { Section, SectionHeading, useInView } from '../components/Section'
import { GlassCard } from '../components/GlassCard'
import { Icon } from '../components/Icon'
import { fadeUp } from '../lib/motion'

export function Education() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title="Qualifications"
        inView={inView}
      />
      <div ref={ref} className="grid gap-6 md:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <GlassCard className="h-full p-7">
            <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
              <Icon name="cap" className="h-5 w-5 text-[var(--accent)]" />
              Education
            </h3>
            <div className="space-y-5">
              {education.map((e) => (
                <div key={e.degree}>
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-semibold">{e.degree}</h4>
                    <span className="shrink-0 text-sm font-medium text-[var(--accent)]">
                      {e.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    {e.institution}
                  </p>
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
        >
          <GlassCard className="h-full p-7">
            <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
              <Icon name="sparkles" className="h-5 w-5 text-[var(--accent)]" />
              Certifications
            </h3>
            <div className="space-y-5">
              {certifications.map((c) => (
                <div key={c.name} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[var(--accent)]">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold">{c.name}</h4>
                    <p className="mt-0.5 text-sm leading-relaxed text-[var(--text-muted)]">
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  )
}
