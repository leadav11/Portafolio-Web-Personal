import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="font-accent text-xs text-primary tracking-wider mb-4">
        [ 404 ]
      </p>
      <h1 className="text-3xl font-bold text-text dark:text-text-dark mb-4">
        Página no encontrada
      </h1>
      <p className="text-secondary dark:text-secondary-dark mb-8">
        La ruta que buscas no existe.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-5 py-2.5 rounded-lg font-medium bg-primary text-white hover:bg-primary-hover dark:hover:bg-primary-hover-dark transition-colors duration-300"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
