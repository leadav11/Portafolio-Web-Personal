import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'design',
    name: 'Diseño',
    skills: ['Figma', 'UI Design', 'UX Research', 'Wireframing', 'Prototipado', 'Design Systems'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Responsive Design', 'GSAP'],
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: ['Node.js', 'REST APIs', 'Firebase', 'SQL básico'],
  },
  {
    id: 'tools',
    name: 'Herramientas',
    skills: ['Git', 'Vite', 'VS Code', 'Notion', 'Chrome DevTools', 'Vercel'],
  },
]
