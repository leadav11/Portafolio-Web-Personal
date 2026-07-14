import type { SkillCategory } from '../../../types'
import { cn } from '../../../utils/cn'

interface SkillCategoryCardProps {
  category: SkillCategory
  index: number
}

export function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
  return (
    <article
      className={cn(
        'p-6 rounded-xl border border-border dark:border-border-dark',
        'bg-surface dark:bg-surface-dark',
        'hover:border-primary/25 transition-colors duration-300',
      )}
    >
      <p className="font-accent text-[10px] tracking-[0.15em] text-primary mb-3">
        [ {String(index + 1).padStart(2, '0')} / {category.name.toUpperCase()} ]
      </p>
      <h3 className="text-lg font-semibold text-text dark:text-text-dark mb-4">
        {category.name}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1.5 text-sm rounded-md bg-background dark:bg-background-dark text-secondary dark:text-secondary-dark border border-border dark:border-border-dark"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}
