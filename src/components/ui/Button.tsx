import { cn } from '../../utils/cn'
import { useMagneticEffect } from '../../hooks/useGsapEffects'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  magnetic?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  magnetic = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const magneticRef = useMagneticEffect()

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-hover dark:hover:bg-primary-hover-dark',
    secondary:
      'border border-border dark:border-border-dark text-text dark:text-text-dark hover:border-primary/40',
    ghost: 'text-primary hover:bg-primary/8',
  }

  return (
    <button
      ref={magnetic ? (magneticRef as React.RefObject<HTMLButtonElement>) : undefined}
      className={cn(
        'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium',
        'transition-colors duration-300',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  magnetic?: boolean
  children: React.ReactNode
}

export function ButtonLink({
  variant = 'primary',
  magnetic = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const magneticRef = useMagneticEffect()

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-hover dark:hover:bg-primary-hover-dark',
    secondary:
      'border border-border dark:border-border-dark text-text dark:text-text-dark hover:border-primary/40',
    ghost: 'text-primary hover:bg-primary/8',
  }

  return (
    <a
      ref={magnetic ? (magneticRef as React.RefObject<HTMLAnchorElement>) : undefined}
      className={cn(
        'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium',
        'transition-colors duration-300',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
