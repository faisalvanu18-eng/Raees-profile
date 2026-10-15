import { profile } from '../data/profile'
import { Icon } from '../components/Icon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mx-auto w-full max-w-5xl px-5 pb-36 pt-8 text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
          >
            <Icon name="mail" className="h-5 w-5" />
          </a>
          <a
            href={`tel:${profile.phoneHref}`}
            aria-label="Phone"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
          >
            <Icon name="phone" className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-[var(--text-muted)]">
          {profile.name} · {profile.role}
        </p>
        <p className="text-xs text-[var(--text-faint)]">
          © {year} · Built with React, Vite &amp; Framer Motion
        </p>
      </div>
    </footer>
  )
}
