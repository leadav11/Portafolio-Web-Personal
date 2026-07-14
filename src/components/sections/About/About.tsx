import { aboutCards } from '../../../data/about'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { cn } from '../../../utils/cn'
import { SectionHeading } from '../../ui/SectionHeading'
import { AboutCardItem } from './AboutCardItem'

interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="sobre-mi"
      className={cn('py-24 bg-background dark:bg-background-dark', className)}
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="[ 01 / SOBRE MÍ ]"
          title="Diseño con intención, código con precisión"
          description="Creo experiencias digitales donde cada decisión de diseño tiene respaldo en investigación y cada pixel en producción está justificado."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {aboutCards.map((card) => (
            <AboutCardItem key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
