import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { CaseStudy } from '../../types'
import { cn } from '../../utils/cn'
import { ButtonLink } from '../ui/Button'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { TechTag } from '../ui/TechTag'

interface CaseStudyHeroProps {
  caseStudy: CaseStudy
}

export function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  return (
    <section className="pt-28 pb-12">
      <div className="container mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-secondary dark:text-secondary-dark hover:text-primary transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={16} />
          Volver al portafolio
        </Link>

        <p className="font-accent text-xs tracking-[0.2em] text-primary uppercase mb-4">
          [ CASO DE ESTUDIO ]
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text dark:text-text-dark mb-4">
          {caseStudy.title}
        </h1>
        <p className="text-lg text-secondary dark:text-secondary-dark max-w-3xl mb-6 leading-relaxed">
          {caseStudy.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface CaseStudyBlockProps {
  title: string
  index: string
  children: React.ReactNode
  className?: string
}

export function CaseStudyBlock({
  title,
  index,
  children,
  className,
}: CaseStudyBlockProps) {
  return (
    <section className={cn('py-12 border-t border-border dark:border-border-dark', className)}>
      <div className="container mx-auto px-6">
        <p className="font-accent text-[10px] tracking-[0.15em] text-primary mb-3">
          {index}
        </p>
        <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-6">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

interface CaseStudyGalleryProps {
  images: string[]
  alt: string
}

export function CaseStudyGallery({ images, alt }: CaseStudyGalleryProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {images.map((src, i) => (
        <div
          key={src}
          className="relative aspect-video rounded-xl overflow-hidden bg-primary/5 border border-border dark:border-border-dark"
        >
          <ImageWithFallback src={src} alt={`${alt} — ${i + 1}`} />
        </div>
      ))}
    </div>
  )
}

interface CaseStudyCTAProps {
  title: string
}

export function CaseStudyCTA({ title }: CaseStudyCTAProps) {
  return (
    <section className="py-16 bg-background dark:bg-background-dark">
      <div className="container mx-auto px-6 text-center">
        <p className="font-accent text-xs text-primary tracking-wider mb-4">
          [ ¿INTERESADO EN UN PROYECTO SIMILAR? ]
        </p>
        <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-6">
          Conversemos sobre {title}
        </h2>
        <ButtonLink href="/#contacto" magnetic variant="primary">
          Contactarme
        </ButtonLink>
      </div>
    </section>
  )
}
