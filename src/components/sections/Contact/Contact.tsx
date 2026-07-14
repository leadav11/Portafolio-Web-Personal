import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { cn } from '../../../utils/cn'
import { SectionHeading } from '../../ui/SectionHeading'
import { ContactDirectLinks, ContactForm } from './ContactForm'

interface ContactProps {
  className?: string
}

export function Contact({ className }: ContactProps) {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className={cn('py-24 bg-background dark:bg-background-dark', className)}
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="[ 05 / CONTACTO ]"
          title="Hablemos"
          description="¿Tienes un proyecto en mente o quieres colaborar? Escríbeme — respondo en menos de 48 horas."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactDirectLinks />
          </div>
        </div>
      </div>
    </section>
  )
}
