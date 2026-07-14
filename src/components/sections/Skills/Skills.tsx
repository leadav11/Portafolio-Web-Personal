import { skillCategories } from '../../../data/skills'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { cn } from '../../../utils/cn'
import { SectionHeading } from '../../ui/SectionHeading'
import { SkillCategoryCard } from './SkillCategoryCard'

interface SkillsProps {
  className?: string
}

export function Skills({ className }: SkillsProps) {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="habilidades"
      className={cn('py-24 bg-background dark:bg-background-dark', className)}
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="[ 03 / HABILIDADES ]"
          title="Stack & herramientas"
          description="Un conjunto equilibrado entre diseño, desarrollo frontend y las herramientas que uso día a día."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
