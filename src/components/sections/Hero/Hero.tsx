import { useEffect, useRef } from 'react'
import { ArrowDown, Mail } from 'lucide-react'
import { personalInfo } from '../../../data/personal'
import { gsap } from '../../../utils/gsap'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { useMagneticEffect } from '../../../hooks/useGsapEffects'
import { HeroSpotlight } from './HeroSpotlight'
import { HeroVisual } from './HeroVisual'
import { cn } from '../../../utils/cn'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  const projectsBtnRef = useMagneticEffect()
  const contactBtnRef = useMagneticEffect()

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-eyebrow', { opacity: 0, y: 16, duration: 0.5 })
        .from('.hero-line', { opacity: 0, y: 24, duration: 0.6, stagger: 0.1 }, '-=0.2')
        .from('.hero-desc', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
        .from('.hero-cta', { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .from('.hero-visual', { opacity: 0, scale: 0.95, duration: 0.8 }, '-=0.5')
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion])

  const nameParts = personalInfo.name.split(' ')

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className={cn(
        'relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden',
        className,
      )}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4F46E5 1px, transparent 1px),
            linear-gradient(to bottom, #4F46E5 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <HeroSpotlight />

      <div className="container relative z-[2] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="hero-eyebrow font-accent text-xs tracking-[0.2em] text-primary uppercase mb-6">
            [ UI/UX · Frontend · Lima, PE ]
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text dark:text-text-dark leading-[1.1] mb-6">
            <span className="hero-line block">{nameParts.slice(0, 2).join(' ')}</span>
            <span className="hero-line block text-primary">
              {nameParts.slice(2).join(' ')}
            </span>
          </h1>

          <p className="hero-desc text-lg text-secondary dark:text-secondary-dark max-w-lg mb-4 leading-relaxed">
            {personalInfo.role}
          </p>
          <p className="hero-desc text-base text-secondary dark:text-secondary-dark max-w-lg mb-8 leading-relaxed">
            {personalInfo.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              ref={projectsBtnRef as React.RefObject<HTMLAnchorElement>}
              href="#portafolio"
              className="hero-cta inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover dark:hover:bg-primary-hover-dark transition-colors duration-300"
            >
              Ver proyectos
              <ArrowDown size={18} />
            </a>
            <a
              ref={contactBtnRef as React.RefObject<HTMLAnchorElement>}
              href="#contacto"
              className="hero-cta inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border dark:border-border-dark text-text dark:text-text-dark font-medium hover:border-primary/40 transition-colors duration-300"
            >
              Contactarme
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
