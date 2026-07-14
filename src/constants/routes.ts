export const ROUTES = {
  home: '/',
  project: '/proyecto/:slug',
  projectBySlug: (slug: string) => `/proyecto/${slug}`,
} as const
