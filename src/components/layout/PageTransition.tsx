import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from '../../utils/gsap'
import { ANIMATION } from '../../constants/animations'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || !containerRef.current) return

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: ANIMATION.pageTransition.scale },
      {
        opacity: 1,
        scale: 1,
        duration: ANIMATION.pageTransition.duration,
        ease: ANIMATION.ease,
      },
    )
  }, [location.pathname, reducedMotion])

  return (
    <div ref={containerRef} className="min-h-screen">
      {children}
    </div>
  )
}
