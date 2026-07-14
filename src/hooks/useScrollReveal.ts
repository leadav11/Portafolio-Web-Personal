import { useEffect, useRef } from 'react'
import { gsap, registerGsapPlugins } from '../utils/gsap'
import { useReducedMotion } from './useReducedMotion'

export function useScrollReveal<T extends HTMLElement>(
  options?: { y?: number; delay?: number },
): React.RefObject<T | null> {
  const ref = useRef<T>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || !ref.current) return

    registerGsapPlugins()
    const el = ref.current

    gsap.set(el, { opacity: 0, y: options?.y ?? 32 })

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: options?.delay ?? 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [reducedMotion, options?.y, options?.delay])

  return ref
}
