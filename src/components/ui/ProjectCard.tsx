import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../types'
import { ROUTES } from '../../constants/routes'
import { useCardTilt } from '../../hooks/useGsapEffects'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../utils/cn'
import { ImageWithFallback } from './ImageWithFallback'
import { TechTag } from './TechTag'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useCardTilt()
  const reducedMotion = useReducedMotion()

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('group perspective-[800px]', className)}
      style={reducedMotion ? undefined : { transformStyle: 'preserve-3d' }}
    >
      <article
        className={cn(
          'relative flex flex-col h-full rounded-xl overflow-hidden',
          'bg-surface dark:bg-surface-dark border border-border dark:border-border-dark',
          'transition-shadow duration-400',
          'hover:shadow-card-hover dark:hover:shadow-card-hover-dark',
          'hover:border-primary/25',
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-primary/5">
          <ImageWithFallback src={project.thumbnail} alt={project.title} />
        </div>

        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-lg font-semibold text-text dark:text-text-dark mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-secondary dark:text-secondary-dark mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>

          <Link
            to={ROUTES.projectBySlug(project.slug)}
            className={cn(
              'inline-flex items-center gap-1.5 text-sm font-medium text-primary',
              'hover:gap-2.5 transition-all duration-300',
            )}
          >
            Ver caso de estudio
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </article>
    </div>
  )
}
