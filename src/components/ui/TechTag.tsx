import { cn } from '../../utils/cn'

interface TechTagProps {
  label: string
  className?: string
}

export function TechTag({ label, className }: TechTagProps) {
  return (
    <span
      className={cn(
        'inline-block px-2.5 py-1 text-xs font-accent tracking-wide',
        'rounded-md bg-primary/8 text-primary border border-primary/15',
        'dark:bg-primary/12 dark:border-primary/20',
        className,
      )}
    >
      {label}
    </span>
  )
}
