import type { LucideIcon } from 'lucide-react'

export type Theme = 'light' | 'dark'

export interface NavLink {
  label: string
  href: string
}

export interface PersonalInfo {
  name: string
  role: string
  location: string
  email: string
  linkedin: string
  linkedinUrl: string
  shortDescription: string
}

export interface AboutCard {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export type ExperienceType = 'work' | 'education' | 'achievement'

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  description: string
  type: ExperienceType
}

export interface SkillCategory {
  id: string
  name: string
  skills: string[]
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  thumbnail: string
  tags: string[]
  featured: boolean
}

export interface CaseStudySection {
  id: string
  title: string
  content: string
  images?: string[]
}

export interface CaseStudy extends Project {
  problem: string
  objectives: string[]
  research: string
  wireframes: string[]
  designSystem: string
  components: string
  finalDesign: string
  development: string
  results: string[]
  learnings: string[]
  gallery: string[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  platform: string
  url: string
  label: string
}

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}
