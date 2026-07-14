import { cn } from '../../utils/cn'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', className)}>
      <p className="font-accent text-xs tracking-[0.2em] text-primary uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-secondary dark:text-secondary-dark max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
