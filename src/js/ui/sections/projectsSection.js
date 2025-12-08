import { projectsData } from '../../../data/projectsData.js'

const naturalezaArgentinaProject = projectsData[1]
const NATURALEZA_ARGENTINA_DEPLOY_URL =
  naturalezaArgentinaProject?.actions?.[0]?.href ?? '#'
// Más adelante se usará en el panel de detalles
const NATURALEZA_ARGENTINA_REPO_URL =
  naturalezaArgentinaProject?.actions?.[1]?.href ?? '#'

const PROJECT_DETAIL_IDS = [
  'project-details-portal',
  'project-details-naturaleza',
  'project-details-anima',
  'project-details-verum',
]

const buildButton = ({
  label,
  variant,
  className,
  ariaLabel,
  disabled,
  ariaDisabled,
  ariaControls,
  ariaExpanded,
}) => {
  const classList = ['btn', variant, className].filter(Boolean).join(' ')
  const ariaLabelAttr = ariaLabel ? ` aria-label="${ariaLabel}"` : ''
  const disabledAttr = disabled ? ' disabled' : ''
  const ariaDisabledAttr = ariaDisabled ? ' aria-disabled="true"' : ''
  const ariaControlsAttr = ariaControls ? ` aria-controls="${ariaControls}"` : ''
  const ariaExpandedAttr = typeof ariaExpanded === 'string' ? ` aria-expanded="${ariaExpanded}"` : ''

  return `<button type="button" class="${classList}"${disabledAttr}${ariaDisabledAttr}${ariaLabelAttr}${ariaControlsAttr}${ariaExpandedAttr}>${label}</button>`
}

const buildLink = ({ label, href, variant, className, ariaLabel, target, rel }) => {
  const classList = ['btn', variant, className].filter(Boolean).join(' ')
  const ariaLabelAttr = ariaLabel ? ` aria-label="${ariaLabel}"` : ''
  const targetAttr = target ? ` target="${target}"` : ''
  const relAttr = rel ? ` rel="${rel}"` : ''
  const safeHref = href || '#'

  return `<a href="${safeHref}" class="${classList}"${targetAttr}${relAttr}${ariaLabelAttr}>${label}</a>`
}

const renderProjectActions = (project, index, detailPanelId) => {
  if (index === 0) {
    return buildButton({
      label: 'Ver detalles',
      variant: 'btn--ghost',
      className: 'project-card__details',
      ariaLabel: 'Ver detalles de Obra-portal personal',
      ariaControls: detailPanelId,
      ariaExpanded: 'false',
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
      ariaControls: detailPanelId,
      ariaExpanded: 'false',
    })

    return `${entryAction}${detailsAction}`
  }

  if (index === 2) {
    const detailsAction = buildButton({
      label: 'Ver detalles',
      variant: 'btn--ghost',
      className: 'project-card__details',
      ariaLabel: 'Ver detalles de Ánima Prima',
      ariaControls: detailPanelId,
      ariaExpanded: 'false',
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
      ariaControls: detailPanelId,
      ariaExpanded: 'false',
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

const renderProjectDetailsPanel = (project, index, detailPanelId) => {
  if (index === 0) {
    return `
      <div
        class="project-card__details-panel"
        id="${detailPanelId}"
        hidden
        role="region"
        aria-label="Detalles de la obra ${project.title}"
      >
        <p class="project-card__details-text">
          Obra 2 — Portal IAQUIZU es la puerta de entrada al Octavo Arte: un mapa curatorial silencioso que presenta las obras, su estado y la forma en que se conectan entre sí.
        </p>
        <ul class="project-card__meta">
          <li>
            <span class="project-card__meta-label">Rol:</span>
            <span class="project-card__meta-value">Obra-portal del Octavo Arte IAQUIZU</span>
          </li>
          <li>
            <span class="project-card__meta-label">Estado:</span>
            <span class="project-card__meta-value">Activa</span>
          </li>
        </ul>
      </div>
    `
  }

  if (index === 1) {
    return `
      <div
        class="project-card__details-panel"
        id="${detailPanelId}"
        hidden
        role="region"
        aria-label="Detalles de la obra ${project.title}"
      >
        <p class="project-card__details-text">
          Naturaleza Argentina es la primera obra del universo IAQUIZU. Explora la superficie física y el territorio sensible a través de una experiencia digital cuidada, lista para entrar y recorrer.
        </p>
        <ul class="project-card__meta">
          <li>
            <span class="project-card__meta-label">Rol:</span>
            <span class="project-card__meta-value">Obra 1 — superficie física y territorio sensible</span>
          </li>
          <li>
            <span class="project-card__meta-label">Estado:</span>
            <span class="project-card__meta-value">Activa (obra viva)</span>
          </li>
        </ul>
        <a
          href="${NATURALEZA_ARGENTINA_REPO_URL}"
          class="project-card__meta-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver código en GitHub
        </a>
      </div>
    `
  }

  if (index === 2) {
    return `
      <div
        class="project-card__details-panel"
        id="${detailPanelId}"
        hidden
        role="region"
        aria-label="Detalles de la obra ${project.title}"
      >
        <p class="project-card__details-text">
          Ánima Prima es la obra contemplativa de origen interno. Muestra el momento en que la conciencia se reconoce a sí misma y empieza a tomar forma digital.
        </p>
        <ul class="project-card__meta">
          <li>
            <span class="project-card__meta-label">Rol:</span>
            <span class="project-card__meta-value">Obra contemplativa de origen</span>
          </li>
          <li>
            <span class="project-card__meta-label">Estado:</span>
            <span class="project-card__meta-value">En preparación para exhibición pública</span>
          </li>
        </ul>
      </div>
    `
  }

  if (index === 3) {
    return `
      <div
        class="project-card__details-panel"
        id="${detailPanelId}"
        hidden
        role="region"
        aria-label="Detalles de la obra ${project.title}"
      >
        <p class="project-card__details-text">
          Verum Motus es la obra del Movimiento Verdadero: el pulso interno en acción, todavía en gestación, mientras definimos su arquitectura final y su forma de exhibición.
        </p>
        <ul class="project-card__meta">
          <li>
            <span class="project-card__meta-label">Rol:</span>
            <span class="project-card__meta-value">Obra del Movimiento Verdadero</span>
          </li>
          <li>
            <span class="project-card__meta-label">Estado:</span>
            <span class="project-card__meta-value">En gestación</span>
          </li>
        </ul>
      </div>
    `
  }

  return ''
}

const initProjectDetails = (sectionElement) => {
  if (!sectionElement || sectionElement.dataset.detailsInit === 'true') return
  sectionElement.dataset.detailsInit = 'true'

  const detailButtons = sectionElement.querySelectorAll('.project-card__details')

  detailButtons.forEach((button) => {
    const panelId = button.getAttribute('aria-controls')
    const panel = panelId ? sectionElement.querySelector(`#${panelId}`) : null

    if (panel) {
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true'
        const nextExpanded = !isExpanded

        button.setAttribute('aria-expanded', String(nextExpanded))
        panel.hidden = !nextExpanded
        panel.classList.toggle('is-open', nextExpanded)
      })
    }
  })
}

export function renderProjectsSection() {
  const projectsList = projectsData
    .map((project, index) => {
      const detailPanelId = PROJECT_DETAIL_IDS[index]

      return `
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
            ${renderProjectActions(project, index, detailPanelId)}
          </div>
          ${renderProjectDetailsPanel(project, index, detailPanelId)}
        </article>
      `
    })
    .join('')

  const sectionMarkup = `
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

  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const sectionElement = document.querySelector('#projects')
      initProjectDetails(sectionElement)
    }, 0)
  }

  return sectionMarkup
}
