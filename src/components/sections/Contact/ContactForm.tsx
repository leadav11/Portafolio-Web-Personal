import { useState, type FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'
import type { ContactFormData } from '../../../types'
import { personalInfo } from '../../../data/personal'
import { cn } from '../../../utils/cn'
import { Button } from '../../ui/Button'
import { LinkedInIcon } from '../../ui/LinkedInIcon'

interface ContactFormProps {
  className?: string
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setFormData(initialFormData)
  }

  const inputClasses = cn(
    'w-full px-4 py-3 rounded-lg text-sm',
    'bg-surface dark:bg-surface-dark border border-border dark:border-border-dark',
    'text-text dark:text-text-dark placeholder:text-secondary/60',
    'focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20',
    'transition-colors duration-300',
  )

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)}>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Asunto"
        required
        value={formData.subject}
        onChange={handleChange}
        className={inputClasses}
      />
      <textarea
        name="message"
        placeholder="Mensaje"
        required
        rows={5}
        value={formData.message}
        onChange={handleChange}
        className={cn(inputClasses, 'resize-none')}
      />
      <Button type="submit" magnetic className="w-full sm:w-auto">
        <Send size={16} />
        Enviar mensaje
      </Button>
      {submitted && (
        <p className="text-sm text-primary font-accent">
          [ Redirigiendo a tu cliente de correo... ]
        </p>
      )}
    </form>
  )
}

interface ContactDirectLinksProps {
  className?: string
}

export function ContactDirectLinks({ className }: ContactDirectLinksProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <a
        href={`mailto:${personalInfo.email}`}
        className="flex items-center gap-3 p-4 rounded-xl border border-border dark:border-border-dark hover:border-primary/30 transition-colors duration-300 group"
      >
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Mail size={18} className="text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium text-text dark:text-text-dark group-hover:text-primary transition-colors duration-300">
            Email
          </p>
          <p className="text-xs text-secondary dark:text-secondary-dark">
            {personalInfo.email}
          </p>
        </div>
      </a>

      <a
        href={personalInfo.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-4 rounded-xl border border-border dark:border-border-dark hover:border-primary/30 transition-colors duration-300 group"
      >
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <LinkedInIcon size={18} className="text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium text-text dark:text-text-dark group-hover:text-primary transition-colors duration-300">
            LinkedIn
          </p>
          <p className="text-xs text-secondary dark:text-secondary-dark">
            {personalInfo.linkedin}
          </p>
        </div>
      </a>
    </div>
  )
}
