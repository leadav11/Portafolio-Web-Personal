import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../../../hooks/useReducedMotion'

interface HeroSpotlightProps {
  className?: string
}

export function HeroSpotlight({ className }: HeroSpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || !spotlightRef.current) return

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    const el = spotlightRef.current
    const container = el.parentElement
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(79, 70, 229, 0.09), transparent 60%)`
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [reducedMotion])

  if (reducedMotion) return null

  return (
    <div
      ref={spotlightRef}
      className={`pointer-events-none absolute inset-0 z-[1] mix-blend-overlay md:block hidden ${className ?? ''}`}
      aria-hidden="true"
    />
  )
}
