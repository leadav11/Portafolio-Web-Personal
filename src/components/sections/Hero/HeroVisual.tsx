import { cn } from '../../../utils/cn'

interface HeroVisualProps {
  className?: string
}

export function HeroVisual({ className }: HeroVisualProps) {
  return (
    <div
      className={cn(
        'group relative flex items-center justify-center',
        className,
      )}
    >
      <div
        className={cn(
          'relative w-full max-w-md aspect-square rounded-2xl border border-border dark:border-border-dark',
          'bg-surface dark:bg-surface-dark overflow-hidden',
          'shadow-glow transition-shadow duration-500',
          'group-hover:shadow-glow-hover',
        )}
      >
        {/* Wireframe layer */}
        <div className="absolute inset-4 border border-dashed border-primary/20 rounded-lg flex flex-col gap-3 p-4 transition-opacity duration-500 group-hover:opacity-30">
          <div className="h-3 w-1/3 rounded bg-primary/10" />
          <div className="h-2 w-2/3 rounded bg-border dark:bg-border-dark" />
          <div className="flex-1 rounded bg-primary/5 border border-primary/10" />
          <div className="flex gap-2">
            <div className="h-6 w-16 rounded bg-primary/15" />
            <div className="h-6 w-16 rounded border border-border dark:border-border-dark" />
          </div>
        </div>

        {/* Component layer — appears on hover */}
        <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent p-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="h-3 w-1/3 rounded bg-primary/30" />
          <div className="h-2 w-2/3 rounded bg-text/10 dark:bg-text-dark/20" />
          <div className="flex-1 rounded-lg bg-surface dark:bg-surface-dark shadow-sm border border-primary/20 flex items-center justify-center">
            <span className="font-accent text-xs text-primary tracking-wider">
              {'<Component />'}
            </span>
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-16 rounded-md bg-primary text-white text-[10px] flex items-center justify-center font-accent">
              CTA
            </div>
            <div className="h-6 w-16 rounded-md border border-border dark:border-border-dark" />
          </div>
        </div>

        {/* Corner markers */}
        <span className="absolute top-2 left-2 font-accent text-[10px] text-secondary dark:text-secondary-dark">
          [ wireframe ]
        </span>
        <span className="absolute bottom-2 right-2 font-accent text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          [ component ]
        </span>
      </div>
    </div>
  )
}
