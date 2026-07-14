import type { CaseStudy, Project } from '../types'

export const projects: Project[] = [
  {
    id: 'devdatep-platform',
    slug: 'devdatep-consulting-platform',
    title: 'Devdatep Consulting Platform',
    description:
      'Rediseño completo de la plataforma web corporativa con enfoque en conversión y credibilidad profesional.',
    // Screenshot: landing page principal de Devdatep con hero, servicios y CTA
    thumbnail: '/images/projects/project-01.webp',
    tags: ['Figma', 'UI Design', 'Design System', 'React'],
    featured: true,
  },
  {
    id: 'tecnovedades-app',
    slug: 'tecnovedades-web-app',
    title: 'Tecnovedades Web App',
    description:
      'Aplicación web para gestión de inventario tecnológico con dashboard interactivo y filtros avanzados.',
    // Screenshot: dashboard principal con tabla de inventario y sidebar
    thumbnail: '/images/projects/project-02.webp',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    featured: true,
  },
  {
    id: 'edufuture-hackathon',
    slug: 'edufuture-hackathon',
    title: 'Edufuture — Plataforma Educativa',
    description:
      'Plataforma ganadora del Hackathon Edufuture 2024: aprendizaje colaborativo con gamificación en 48 horas.',
    // Screenshot: pantalla de curso con progreso y leaderboard
    thumbnail: '/images/projects/project-03.webp',
    tags: ['React', 'Frontend', 'Hackathon', 'UI/UX'],
    featured: true,
  },
]

export const caseStudies: CaseStudy[] = [
  {
    ...projects[0]!,
    problem:
      'Devdatep Consulting necesitaba una presencia digital que reflejara su expertise en consultoría tecnológica. El sitio anterior tenía una navegación confusa, tiempos de carga lentos y no comunicaba credibilidad a clientes potenciales.',
    objectives: [
      'Rediseñar la arquitectura de información para reducir fricción en la conversión',
      'Crear un sistema de diseño escalable para futuras landing pages de servicios',
      'Mejorar la percepción de marca como consultora premium en el mercado peruano',
      'Optimizar la experiencia mobile donde el 65% del tráfico se originaba',
    ],
    research:
      'Realicé entrevistas con 4 stakeholders internos y un análisis heurístico del sitio existente. Mapeé el journey del cliente B2B desde el descubrimiento hasta el contacto, identificando 3 puntos de abandono críticos en el funnel.',
    wireframes: [
      '/images/case-studies/devdatep/wireframe-01.webp',
      '/images/case-studies/devdatep/wireframe-02.webp',
    ],
    designSystem:
      'Definí tokens de color, tipografía (Inter + Space Grotesk para datos), espaciado en escala 4px y 12 componentes base: botones, cards, inputs, navegación y secciones modulares reutilizables.',
    components:
      'Construí en Figma un library de 12 componentes con variantes para estados (default, hover, focus, disabled). Documenté patrones de composición para hero, servicios, testimonios y formulario de contacto.',
    finalDesign:
      'El diseño final prioriza jerarquía visual clara: hero con propuesta de valor directa, grid de servicios con iconografía consistente, sección de casos de éxito con métricas y CTA persistente en mobile.',
    development:
      'Implementé el diseño en React con Tailwind CSS, componentizando cada sección. Integré formulario de contacto con validación y lazy loading de imágenes para mejorar LCP.',
    results: [
      'Reducción del 40% en tasa de rebote en mobile',
      'Tiempo de carga inicial mejorado de 4.2s a 1.8s',
      'Sistema de diseño adoptado por el equipo para 3 landing pages adicionales',
    ],
    learnings: [
      'La co-liderazca del área reforzó la importancia de documentar decisiones de diseño para alinear al equipo de desarrollo',
      'Validar wireframes con stakeholders antes de alta fidelidad ahorró 2 rondas de revisión',
    ],
    gallery: [
      '/images/case-studies/devdatep/gallery-01.webp',
      '/images/case-studies/devdatep/gallery-02.webp',
      '/images/case-studies/devdatep/gallery-03.webp',
    ],
  },
  {
    ...projects[1]!,
    problem:
      'Tecnovedades gestionaba su inventario tecnológico con hojas de cálculo y un sistema legacy difícil de mantener. El equipo necesitaba una herramienta web moderna para consultar stock, registrar movimientos y generar reportes.',
    objectives: [
      'Desarrollar un dashboard responsivo con filtros y búsqueda en tiempo real',
      'Implementar autenticación y roles (admin, operador, consulta)',
      'Reducir el tiempo de consulta de inventario de minutos a segundos',
    ],
    research:
      'Observé el flujo de trabajo diario de 3 operadores durante una semana. Documenté las acciones más frecuentes: búsqueda por SKU, filtrado por categoría y exportación de reportes mensuales.',
    wireframes: [
      '/images/case-studies/tecnovedades/wireframe-01.webp',
      '/images/case-studies/tecnovedades/wireframe-02.webp',
    ],
    designSystem:
      'Adapté un sistema minimalista con sidebar fijo, tabla de datos con sorting y badges de estado por color. Paleta funcional: verde para disponible, ámbar para stock bajo, rojo para agotado.',
    components:
      'Desarrollé componentes reutilizables: DataTable con paginación, FilterBar, StatusBadge, SidebarNav y Modal de confirmación para acciones críticas.',
    finalDesign:
      'Dashboard con sidebar colapsable, header con búsqueda global y tabla principal con acciones inline. Vista mobile con cards apiladas en lugar de tabla para mejor legibilidad.',
    development:
      'Construí la app con React 18 y TypeScript estricto. Consumí APIs REST con fetch custom hooks, implementé debounce en búsqueda y virtualización en tablas largas. Deploy en Vercel con CI/CD.',
    results: [
      'Consultas de inventario reducidas de ~3 min a ~15 seg',
      'Adopción del 100% del equipo operativo en la primera semana',
      'Zero downtime en producción durante 5 meses de uso',
    ],
    learnings: [
      'Observar usuarios reales reveló necesidades que no aparecían en los requerimientos iniciales',
      'TypeScript estricto previno bugs en la integración con APIs inconsistentes',
    ],
    gallery: [
      '/images/case-studies/tecnovedades/gallery-01.webp',
      '/images/case-studies/tecnovedades/gallery-02.webp',
    ],
  },
  {
    ...projects[2]!,
    problem:
      'En el Hackathon Edufuture 2024, el reto era crear una plataforma educativa que incentivara el aprendizaje colaborativo en instituciones con recursos limitados, en solo 48 horas.',
    objectives: [
      'Diseñar e implementar la interfaz principal en menos de 24 horas',
      'Integrar gamificación (puntos, badges, leaderboard) sin complicar la UX',
      'Demostrar un MVP funcional ante el jurado con datos reales de demo',
    ],
    research:
      'En las primeras 4 horas del hackathon, el equipo realizó un design sprint comprimido: definimos persona (estudiante secundaria, 16 años), mapeamos 3 user stories críticas y priorizamos el flujo de completar una lección.',
    wireframes: [
      '/images/case-studies/edufuture/wireframe-01.webp',
    ],
    designSystem:
      'Sistema rápido con 2 colores de acento (índigo + esmeralda), tipografía system-ui y componentes mínimos: LessonCard, ProgressBar, LeaderboardRow y BadgeDisplay.',
    components:
      'Implementé 8 componentes React en 12 horas: layout principal, navegación por módulos, card de lección con progreso circular, panel de leaderboard y modal de logros desbloqueados.',
    finalDesign:
      'Interfaz amigable con ilustraciones simples, feedback visual inmediato al completar lecciones y leaderboard visible pero no invasivo. Mobile-first porque el 80% de estudiantes accederían desde celular.',
    development:
      'Frontend en React con Vite, estado global con Context API, animaciones CSS para celebraciones de logros. Integración con backend Firebase en tiempo real para el leaderboard.',
    results: [
      '1er puesto entre 12 equipos participantes',
      'MVP demo con 3 módulos educativos completamente funcionales',
      'Presentación elogiada por claridad de UX y ejecución técnica',
    ],
    learnings: [
      'Priorizar ruthless en un hackathon: cortar features antes de perfeccionar detalles',
      'Un flujo principal impecable vale más que cinco features a medias',
    ],
    gallery: [
      '/images/case-studies/edufuture/gallery-01.webp',
      '/images/case-studies/edufuture/gallery-02.webp',
      '/images/case-studies/edufuture/gallery-03.webp',
    ],
  },
]

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((p) => p.slug === slug)
}
