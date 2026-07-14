import type { AboutCard } from '../../../types'
import { cn } from '../../../utils/cn'

interface AboutCardItemProps {
  card: AboutCard
  className?: string
}

export function AboutCardItem({ card, className }: AboutCardItemProps) {
  const Icon = card.icon

  return (
    <article
      className={cn(
        'p-6 rounded-xl border border-border dark:border-border-dark',
        'bg-surface dark:bg-surface-dark',
        'hover:border-primary/25 hover:shadow-card-hover dark:hover:shadow-card-hover-dark',
        'transition-all duration-300',
        className,
      )}
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon size={20} className="text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-text dark:text-text-dark mb-2">
        {card.title}
      </h3>
      <p className="text-sm text-secondary dark:text-secondary-dark leading-relaxed">
        {card.description}
      </p>
    </article>
  )
}
