import { motion } from 'framer-motion'
import { navItems, type SectionId } from '../data/nav'
import { Icon } from './Icon'
import { spring } from '../lib/motion'

interface BottomTabBarProps {
  active: SectionId
}

/**
 * Floating glass bottom tab bar: fixed, centered, safe-area aware. An animated
 * active "pill" (shared layoutId) follows the current section.
 */
export function BottomTabBar({ active }: BottomTabBarProps) {
  const handleJump = (id: SectionId) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-3"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 12px)' }}
    >
      <motion.ul
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...spring, delay: 0.3 }}
        className="glass glass-strong flex items-center gap-1 rounded-full p-1.5"
      >
        {navItems.map((item) => {
          const isActive = active === item.id
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleJump(item.id)}
                aria-label={item.label}
                aria-current={isActive ? 'true' : undefined}
                className="relative flex flex-col items-center justify-center rounded-full px-3 py-2 sm:px-4"
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    transition={spring}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        'linear-gradient(120deg, rgba(10,132,255,0.18), rgba(94,92,230,0.18))',
                      border: '1px solid rgba(10,132,255,0.35)',
                    }}
                  />
                )}
                <span
                  className="relative z-10 transition-colors"
                  style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span
                  className="relative z-10 mt-0.5 text-[10px] font-medium leading-none transition-colors"
                  style={{ color: isActive ? 'var(--accent)' : 'var(--text-faint)' }}
                >
                  {item.label}
                </span>
              </button>
            </li>
          )
        })}
      </motion.ul>
    </nav>
  )
}
