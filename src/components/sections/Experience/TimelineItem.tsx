import type { ExperienceItem } from '../../../types'

interface TimelineItemProps {
  item: ExperienceItem
  index: number
  isLast: boolean
}

export function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  const typeLabel = {
    work: 'TRABAJO',
    education: 'EDUCACIÓN',
    achievement: 'LOGRO',
  }[item.type]

  return (
    <div className="relative pl-8 pb-10">
      {!isLast && (
        <div className="absolute left-[7px] top-3 bottom-0 w-px bg-border dark:bg-border-dark" />
      )}
      <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-surface dark:bg-surface-dark" />

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
        <span className="font-accent text-[10px] tracking-[0.15em] text-primary">
          [ {String(index + 1).padStart(2, '0')} / {typeLabel} ]
        </span>
        <span className="font-accent text-xs text-secondary dark:text-secondary-dark">
          {item.period}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-text dark:text-text-dark">
        {item.role}
      </h3>
      <p className="text-sm text-primary font-medium mb-2">{item.company}</p>
      <p className="text-sm text-secondary dark:text-secondary-dark leading-relaxed">
        {item.description}
      </p>
    </div>
  )
}
