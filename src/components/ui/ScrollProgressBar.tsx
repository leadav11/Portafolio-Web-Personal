import { useScrollProgress } from '../../hooks/useGsapEffects'

export function ScrollProgressBar() {
  const progressRef = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-border/50 dark:bg-border-dark/50">
      <div
        ref={progressRef}
        className="h-full w-full bg-primary origin-left scale-x-0"
        aria-hidden="true"
      />
    </div>
  )
}
