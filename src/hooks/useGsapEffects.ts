import { useEffect, useRef } from 'react'
import { gsap, registerGsapPlugins } from '../utils/gsap'
import { ANIMATION } from '../constants/animations'
import { useReducedMotion } from './useReducedMotion'

export function useScrollProgress(): React.RefObject<HTMLDivElement | null> {
  const progressRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || !progressRef.current) return

    registerGsapPlugins()
    const el = progressRef.current

    const tween = gsap.to(el, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    })

    gsap.set(el, { scaleX: 0, transformOrigin: 'left center' })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [reducedMotion])

  return progressRef
}

interface UseMagneticEffectOptions {
  maxOffset?: number
  maxDistance?: number
}

export function useMagneticEffect(
  options?: UseMagneticEffectOptions,
): React.RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  const maxOffset = options?.maxOffset ?? ANIMATION.magnetic.maxOffset
  const maxDistance = options?.maxDistance ?? ANIMATION.magnetic.maxDistance

  useEffect(() => {
    if (reducedMotion || !ref.current) return

    const el = ref.current
    const quickToX = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' })
    const quickToY = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' })

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      const distance = Math.sqrt(distX ** 2 + distY ** 2)

      if (distance < maxDistance) {
        const strength = 1 - distance / maxDistance
        quickToX(distX * strength * (maxOffset / maxDistance) * maxDistance * 0.15)
        quickToY(distY * strength * (maxOffset / maxDistance) * maxDistance * 0.15)
      } else {
        quickToX(0)
        quickToY(0)
      }
    }

    const handleMouseLeave = () => {
      quickToX(0)
      quickToY(0)
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
      gsap.set(el, { x: 0, y: 0 })
    }
  }, [reducedMotion, maxOffset, maxDistance])

  return ref
}

export function useCardTilt(): {
  cardRef: React.RefObject<HTMLDivElement | null>
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void
  handleMouseLeave: () => void
} {
  const cardRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -ANIMATION.tilt.maxRotation
    const rotateY = ((x - centerX) / centerX) * ANIMATION.tilt.maxRotation

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 800,
    })
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
  }

  return { cardRef, handleMouseMove, handleMouseLeave }
}
