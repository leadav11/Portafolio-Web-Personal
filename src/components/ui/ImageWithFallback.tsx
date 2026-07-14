import { cn } from '../../utils/cn'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
}

export function ImageWithFallback({ src, alt, className }: ImageWithFallbackProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('object-cover w-full h-full', className)}
      onError={(e) => {
        const target = e.currentTarget
        target.style.display = 'none'
        const parent = target.parentElement
        if (parent && !parent.querySelector('[data-fallback]')) {
          const fallback = document.createElement('div')
          fallback.dataset.fallback = 'true'
          fallback.className =
            'absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center'
          fallback.innerHTML = `<span class="font-accent text-xs text-primary/60 tracking-wider">[ imagen pendiente ]</span>`
          parent.appendChild(fallback)
        }
      }}
    />
  )
}
