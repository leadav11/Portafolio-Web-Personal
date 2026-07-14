export const ANIMATION = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.9,
  },
  ease: 'power3.out' as const,
  stagger: 0.12,
  scrollReveal: {
    y: 32,
    duration: 0.8,
  },
  magnetic: {
    maxDistance: 80,
    maxOffset: 7,
  },
  tilt: {
    maxRotation: 5,
  },
  pageTransition: {
    duration: 0.5,
    scale: 0.98,
  },
} as const

export const THEME_STORAGE_KEY = 'portfolio-theme'
