import { projectsData } from '../../../data/projectsData.js'

const naturalezaArgentinaProject = projectsData[1]
const NATURALEZA_ARGENTINA_DEPLOY_URL =
  naturalezaArgentinaProject?.actions?.[0]?.href ?? '#'
// Más adelante se usará en el panel de detalles
const NATURALEZA_ARGENTINA_REPO_URL =
  naturalezaArgentinaProject?.actions?.[1]?.href ?? '#'

const buildButton = ({ label, variant, className, ariaLabel, disabled, ariaDisabled }) => {
  const classList = ['btn', variant, className].filter(Boolean).join(' ')
  const ariaLabelAttr = ariaLabel ? ` aria-label="${ariaLabel}"` : ''
  const disabledAttr = disabled ? ' disabled' : ''
  const ariaDisabledAttr = ariaDisabled ? ' aria-disabled="true"' : ''

  return `<button type="button" class="${classList}"${disabledAttr}${ariaDisabledAttr}${ariaLabelAttr}>${label}</button>`
}

const buildLink = ({ label, href, variant, className, ariaLabel, target, rel }) => {
  const classList = ['btn', variant, className].filter(Boolean).join(' ')
  const ariaLabelAttr = ariaLabel ? ` aria-label="${ariaLabel}"` : ''
  const targetAttr = target ? ` target="${target}"` : ''
  const relAttr = rel ? ` rel="${rel}"` : ''
  const safeHref = href || '#'

  return `<a href="${safeHref}" class="${classList}"${targetAttr}${relAttr}${ariaLabelAttr}>${label}</a>`
}

const renderProjectActions = (project, index) => {
  if (index === 0) {
    return buildButton({
      label: 'Ver detalles',
      variant: 'btn--ghost',
      className: 'project-card__details',
      ariaLabel: 'Ver detalles de Obra-portal personal',
    })
  }

  if (index === 1) {
    const entryAction = buildLink({
      label: 'Entrar en la obra',
      href: NATURALEZA_ARGENTINA_DEPLOY_URL,
      variant: 'btn--primary',
      className: 'project-card__entry',
      ariaLabel: 'Entrar en la obra Naturaleza Argentina',
      target: '_blank',
      rel: 'noopener noreferrer',
    })

    const detailsAction = buildButton({
      label: 'Ver detalles',
      variant: 'btn--ghost',
      className: 'project-card__details',
      ariaLabel: 'Ver detalles de Naturaleza Argentina',
    })

    return `${entryAction}${detailsAction}`
  }

  if (index === 2) {
    const detailsAction = buildButton({
      label: 'Ver detalles',
      variant: 'btn--ghost',
      className: 'project-card__details',
      ariaLabel: 'Ver detalles de Ánima Prima',
    })

    const statusAction = buildButton({
      label: 'En preparación',
      variant: 'btn--ghost',
      className: 'project-card__status',
      disabled: true,
      ariaDisabled: true,
    })

    return `${detailsAction}${statusAction}`
  }

  if (index === 3) {
    const detailsAction = buildButton({
      label: 'Ver detalles',
      variant: 'btn--ghost',
      className: 'project-card__details',
      ariaLabel: 'Ver detalles de Verum Motus',
    })

    const statusAction = buildButton({
      label: 'En gestación',
      variant: 'btn--ghost',
      className: 'project-card__status',
      disabled: true,
      ariaDisabled: true,
    })

    return `${detailsAction}${statusAction}`
  }

  return (
    project.actions
      ?.map((action) =>
        buildLink({
          label: action.label,
          href: action.href,
          variant: action.variant,
          ariaLabel: action.ariaLabel,
        })
      )
      .join('') || ''
  )
}

export function renderProjectsSection() {
  const projectsList = projectsData
    .map(
      (project, index) => `
        <article class="card project-card js-reveal">
          <p class="pill project-card__tag">${project.tag}</p>
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__description">
            ${project.description}
          </p>
          <p class="project-card__meta">
            ${project.meta}
          </p>
          <div class="project-card__actions">
            ${renderProjectActions(project, index)}
          </div>
        </article>
      `
    )
    .join('')

  return `
    <section
      id="projects"
      class="section projects"
      aria-labelledby="projects-title"
    >
      <header class="section__header js-reveal">
        <h2 id="projects-title" class="section__title">Obras destacadas</h2>
        <p class="section__subtitle">
          Obras del universo IAQUIZU que muestran cómo se ordenan forma y ritmo desde adentro.
        </p>
      </header>

      <div class="projects__grid">
        ${projectsList}
      </div>
    </section>
  `
}


