import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import { Section, SectionHeading, useInView } from '../components/Section'
import { GlassCard } from '../components/GlassCard'
import { Icon } from '../components/Icon'
import { scaleIn } from '../lib/motion'

export function Skills() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools & expertise"
        inView={inView}
      />
      <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            variants={scaleIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={i}
          >
            <GlassCard className="h-full p-6">
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(10,132,255,0.15), rgba(94,92,230,0.15))',
                  color: 'var(--accent)',
                }}
              >
                <Icon name={group.icon} className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-base font-semibold">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[rgba(var(--surface-border),0.1)] bg-[rgba(var(--surface),0.5)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
