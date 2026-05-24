import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  /** Optional delay class for staggered animations (e.g. "scroll-reveal--delay-1") */
  delayClass?: string
}

function ScrollReveal({ children, className = '', delayClass = '' }: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${delayClass} ${className}`.trim()}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
