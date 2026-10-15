import { motion, type HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

type GlassCardProps = HTMLMotionProps<'div'> & {
  interactive?: boolean
}

/**
 * Frosted translucent surface with soft shadow and rounded corners.
 * Colors flow from CSS variables via the .glass utility.
 */
export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className = '', interactive = false, children, ...rest }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`glass rounded-3xl ${
          interactive ? 'transition-transform' : ''
        } ${className}`}
        {...rest}
      >
        {children}
      </motion.div>
    )
  },
)

GlassCard.displayName = 'GlassCard'
