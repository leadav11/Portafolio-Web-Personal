import { projects } from '../../../data/projects'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { cn } from '../../../utils/cn'
import { ProjectCard } from '../../ui/ProjectCard'
import { SectionHeading } from '../../ui/SectionHeading'

interface PortfolioProps {
  className?: string
}

export function Portfolio({ className }: PortfolioProps) {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} id="portafolio" className={cn('py-24', className)}>
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="[ 04 / PORTAFOLIO ]"
          title="Proyectos seleccionados"
          description="Casos donde el diseño y el código convergen — desde plataformas corporativas hasta hackathons."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
