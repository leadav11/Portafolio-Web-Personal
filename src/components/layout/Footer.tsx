import { Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { personalInfo } from '../../data/personal'
import { cn } from '../../utils/cn'
import { LinkedInIcon } from '../ui/LinkedInIcon'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer
      className={cn(
        'border-t border-border dark:border-border-dark bg-surface dark:bg-surface-dark',
        className,
      )}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <Link
              to="/"
              className="font-accent text-sm tracking-wider text-text dark:text-text-dark"
            >
              {personalInfo.name}
            </Link>
            <p className="mt-2 text-sm text-secondary dark:text-secondary-dark">
              {personalInfo.role}
            </p>
          </div>

          <div className="space-y-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-sm text-secondary dark:text-secondary-dark hover:text-primary transition-colors duration-300"
            >
              <Mail size={16} />
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-secondary dark:text-secondary-dark hover:text-primary transition-colors duration-300"
            >
              <LinkedInIcon size={16} />
              {personalInfo.linkedin}
            </a>
            <p className="flex items-center gap-2 text-sm text-secondary dark:text-secondary-dark">
              <MapPin size={16} />
              {personalInfo.location}
            </p>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 lg:text-right">
            <p className="font-accent text-xs text-primary tracking-wider">
              [ Diseño · Código · Detalle ]
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border dark:border-border-dark flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-accent text-xs text-secondary dark:text-secondary-dark">
            © {year} — Todos los derechos reservados
          </p>
          <p className="font-accent text-xs text-secondary dark:text-secondary-dark">
            Hecho con React + TypeScript + GSAP
          </p>
        </div>
      </div>
    </footer>
  )
}
