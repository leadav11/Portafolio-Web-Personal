import { Navigate, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import {
  CaseStudyBlock,
  CaseStudyCTA,
  CaseStudyGallery,
  CaseStudyHero,
} from '../components/case-study/CaseStudySections'

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const caseStudy = slug ? getProjectBySlug(slug) : undefined

  if (!caseStudy) {
    return <Navigate to="/" replace />
  }

  return (
    <article>
      <CaseStudyHero caseStudy={caseStudy} />

      <CaseStudyBlock title="Problema" index="[ 01 / PROBLEMA ]">
        <p className="text-secondary dark:text-secondary-dark leading-relaxed max-w-3xl">
          {caseStudy.problem}
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="Objetivos" index="[ 02 / OBJETIVOS ]">
        <ul className="space-y-3 max-w-3xl">
          {caseStudy.objectives.map((obj) => (
            <li
              key={obj}
              className="flex gap-3 text-secondary dark:text-secondary-dark leading-relaxed"
            >
              <span className="text-primary font-accent text-xs mt-1">→</span>
              {obj}
            </li>
          ))}
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="Investigación" index="[ 03 / INVESTIGACIÓN ]">
        <p className="text-secondary dark:text-secondary-dark leading-relaxed max-w-3xl">
          {caseStudy.research}
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="Wireframes" index="[ 04 / WIREFRAMES ]">
        <CaseStudyGallery images={caseStudy.wireframes} alt="Wireframe" />
      </CaseStudyBlock>

      <CaseStudyBlock title="Sistema de diseño" index="[ 05 / SISTEMA DE DISEÑO ]">
        <p className="text-secondary dark:text-secondary-dark leading-relaxed max-w-3xl">
          {caseStudy.designSystem}
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="Componentes" index="[ 06 / COMPONENTES ]">
        <p className="text-secondary dark:text-secondary-dark leading-relaxed max-w-3xl">
          {caseStudy.components}
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="Diseño final" index="[ 07 / DISEÑO FINAL ]">
        <p className="text-secondary dark:text-secondary-dark leading-relaxed max-w-3xl mb-8">
          {caseStudy.finalDesign}
        </p>
        <div className="relative aspect-video rounded-xl overflow-hidden bg-primary/5 border border-border dark:border-border-dark">
          <img
            src={caseStudy.thumbnail}
            alt={caseStudy.title}
            className="object-cover w-full h-full"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      </CaseStudyBlock>

      <CaseStudyBlock title="Desarrollo" index="[ 08 / DESARROLLO ]">
        <p className="text-secondary dark:text-secondary-dark leading-relaxed max-w-3xl">
          {caseStudy.development}
        </p>
      </CaseStudyBlock>

      <CaseStudyBlock title="Resultados" index="[ 09 / RESULTADOS ]">
        <ul className="space-y-3 max-w-3xl">
          {caseStudy.results.map((result) => (
            <li
              key={result}
              className="flex gap-3 text-secondary dark:text-secondary-dark leading-relaxed"
            >
              <span className="text-primary font-accent text-xs mt-1">✓</span>
              {result}
            </li>
          ))}
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="Aprendizajes" index="[ 10 / APRENDIZAJES ]">
        <ul className="space-y-3 max-w-3xl">
          {caseStudy.learnings.map((learning) => (
            <li
              key={learning}
              className="flex gap-3 text-secondary dark:text-secondary-dark leading-relaxed"
            >
              <span className="text-primary font-accent text-xs mt-1">◆</span>
              {learning}
            </li>
          ))}
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock title="Galería" index="[ 11 / GALERÍA ]">
        <CaseStudyGallery images={caseStudy.gallery} alt={caseStudy.title} />
      </CaseStudyBlock>

      <CaseStudyCTA title={caseStudy.title} />
    </article>
  )
}
