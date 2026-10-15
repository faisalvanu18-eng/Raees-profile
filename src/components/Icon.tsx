interface IconProps {
  name: string
  className?: string
}

/**
 * Lightweight inline SVG icon set (stroke-based, inherits currentColor).
 * Keyed by string so data files can reference icons without importing.
 */
export function Icon({ name, className = 'w-5 h-5' }: IconProps) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    case 'home':
      return (
        <svg {...common}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
          <path d="M9 21v-6h6v6" />
        </svg>
      )
    case 'user':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
        </svg>
      )
    case 'sparkles':
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <path d="M12 7.5 13.6 11 17 12l-3.4 1-1.6 3.5L10.4 13 7 12l3.4-1z" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2.5" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
        </svg>
      )
    case 'cap':
      return (
        <svg {...common}>
          <path d="M2 8.5 12 4l10 4.5-10 4.5z" />
          <path d="M6 10.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
          <path d="M22 8.5V14" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      )
    case 'ledger':
      return (
        <svg {...common}>
          <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z" />
          <path d="M5 4v16" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        </svg>
      )
    case 'receipt':
      return (
        <svg {...common}>
          <path d="M6 3h12v18l-3-1.5L12 21l-3-1.5L6 21z" />
          <path d="M9 8h6M9 12h6" />
        </svg>
      )
    case 'grid':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2.5" />
          <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        </svg>
      )
    case 'book':
      return (
        <svg {...common}>
          <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z" />
          <path d="M8 4v13a3 3 0 0 0-3 3" />
        </svg>
      )
    case 'monitor':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      )
    case 'arrow-up':
      return (
        <svg {...common}>
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      )
    case 'send':
      return (
        <svg {...common}>
          <path d="m22 2-7 20-4-9-9-4z" />
          <path d="M22 2 11 13" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2.5" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
  }
}
