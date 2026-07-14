import { Code2, Layers, Palette, Users } from 'lucide-react'
import type { AboutCard } from '../types'

export const aboutCards: AboutCard[] = [
  {
    id: 'design',
    title: 'Diseño centrado en el usuario',
    description:
      'Investigo necesidades reales, prototipo flujos claros y valido decisiones antes de escribir una línea de código.',
    icon: Users,
  },
  {
    id: 'systems',
    title: 'Sistemas de diseño',
    description:
      'Construyo bibliotecas de componentes coherentes que escalan — tokens, patrones y documentación que el equipo puede usar.',
    icon: Layers,
  },
  {
    id: 'frontend',
    title: 'Frontend con precisión',
    description:
      'Traduzco diseños a interfaces responsivas con React y TypeScript, cuidando performance, accesibilidad y detalle visual.',
    icon: Code2,
  },
  {
    id: 'visual',
    title: 'Identidad visual',
    description:
      'Desarrollo paletas, tipografía y microinteracciones que comunican profesionalismo sin sacrificar usabilidad.',
    icon: Palette,
  },
]
