import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { Section, SectionHeading, useInView } from '../components/Section'
import { GlassCard } from '../components/GlassCard'
import { Icon } from '../components/Icon'
import { fadeUp, spring } from '../lib/motion'
import { submitContactForm } from '../lib/submitContactForm'

export function Contact() {
  const [ref, inView] = useInView<HTMLDivElement>()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submitContactForm(form)
    setSent(true)
    window.setTimeout(() => setSent(false), 4000)
  }

  const details = [
    {
      icon: 'mail',
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phoneHref}`,
    },
    {
      icon: 'pin',
      label: 'Location',
      value: profile.location,
      href: undefined,
    },
  ]

  const inputClass =
    'w-full rounded-2xl border border-[rgba(var(--surface-border),0.12)] bg-[rgba(var(--surface),0.5)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)]'

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's get in touch"
        inView={inView}
      />
      <div ref={ref} className="grid gap-6 md:grid-cols-5">
        {/* Contact details */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          className="md:col-span-2"
        >
          <GlassCard className="h-full p-7">
            <h3 className="mb-5 text-lg font-semibold">Contact details</h3>
            <ul className="space-y-5">
              {details.map((d) => {
                const content = (
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-[var(--accent)]">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--text-faint)]">
                        {d.label}
                      </p>
                      <p className="text-sm font-medium leading-relaxed">
                        {d.value}
                      </p>
                    </div>
                  </div>
                )
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="block rounded-xl transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>
          </GlassCard>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
          className="md:col-span-3"
        >
          <GlassCard className="p-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="How can I help?"
                />
              </div>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                transition={spring}
                className="flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-lg sm:w-auto"
                style={{
                  background:
                    'linear-gradient(120deg, var(--accent), var(--accent-2))',
                }}
              >
                <Icon name={sent ? 'check' : 'send'} className="h-4 w-4" />
                {sent ? 'Opening your email…' : 'Send message'}
              </motion.button>
              <p className="text-xs text-[var(--text-faint)]">
                This opens your email app with the message pre-filled.
              </p>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  )
}
