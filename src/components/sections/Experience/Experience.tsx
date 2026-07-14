import { experienceItems } from '../../../data/experience'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { cn } from '../../../utils/cn'
import { SectionHeading } from '../../ui/SectionHeading'
import { TimelineItem } from './TimelineItem'

interface ExperienceProps {
  className?: string
}

export function Experience({ className }: ExperienceProps) {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className={cn('py-24', className)}
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="[ 02 / EXPERIENCIA ]"
          title="Trayectoria"
          description="Desde hackathons hasta liderar áreas de diseño — cada rol ha refinado mi enfoque entre UI/UX y frontend."
        />

        <div className="max-w-2xl">
          {experienceItems.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === experienceItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
