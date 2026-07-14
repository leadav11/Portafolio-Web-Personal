import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../constants/navLinks'
import { personalInfo } from '../../data/personal'
import { cn } from '../../utils/cn'
import { ThemeToggle } from '../ui/ThemeToggle'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navHref = (href: string) => (isHome ? href : `/${href}`)

  return (
    <header
      className={cn(
        'fixed top-[2px] left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-border/60 dark:border-border-dark/60 shadow-[0_1px_0_0_rgba(79,70,229,0.15)]'
          : 'bg-transparent',
        className,
      )}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-accent text-sm tracking-wider text-text dark:text-text-dark hover:text-primary transition-colors duration-300"
        >
          LP<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={navHref(link.href)}
              className="text-sm text-secondary dark:text-secondary-dark hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="md:hidden p-2 text-secondary dark:text-secondary-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-surface dark:bg-surface-dark border-b border-border dark:border-border-dark px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={navHref(link.href)}
              className="block text-sm text-secondary dark:text-secondary-dark hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="block text-sm text-primary font-medium"
          >
            {personalInfo.email}
          </a>
        </div>
      )}
    </header>
  )
}
