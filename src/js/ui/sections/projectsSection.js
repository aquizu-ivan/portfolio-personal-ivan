import { projectsData } from '../../../data/projectsData.js'

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

const getProjectDetailsId = (project) => `project-details-${project.id}`

const renderProjectActions = (project, detailPanelId) => {
  const actions = []

  if (project.liveUrl) {
    actions.push(
      buildLink({
        label: 'Entrar en la obra',
        href: project.liveUrl,
        variant: 'btn--primary',
        className: 'project-card__entry',
        ariaLabel: `Entrar en la obra ${project.title}`,
        target: '_blank',
        rel: 'noopener noreferrer',
      })
    )
  }

  if (project.hasDetails !== false && detailPanelId) {
    actions.push(
      buildButton({
        label: 'Ver detalles',
        variant: 'btn--ghost',
        className: 'project-card__details',
        ariaLabel: `Ver detalles de ${project.title}`,
        ariaControls: detailPanelId,
        ariaExpanded: 'false',
      })
    )
  }

  if (project.state === 'en-preparacion' || project.state === 'en-gestacion') {
    actions.push(
      buildButton({
        label: project.stateLabel,
        variant: 'btn--ghost',
        className: 'project-card__status',
        disabled: true,
        ariaDisabled: true,
      })
    )
  }

  if (!actions.length && project.actions?.length) {
    return project.actions
      .map((action) =>
        buildLink({
          label: action.label,
          href: action.href,
          variant: action.variant,
          ariaLabel: action.ariaLabel,
        })
      )
      .join('')
  }

  return actions.join('')
}

const renderProjectDetailsPanel = (project, detailPanelId) => {
  if (project.hasDetails === false || !detailPanelId) {
    return ''
  }

  if (project.id === 'portal-iaquizu') {
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
            <span class="project-card__meta-value">${project.role}</span>
          </li>
          <li>
            <span class="project-card__meta-label">Estado:</span>
            <span class="project-card__meta-value">${project.stateLabel}</span>
          </li>
        </ul>
      </div>
    `
  }

  if (project.id === 'naturaleza-argentina') {
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
            <span class="project-card__meta-value">${project.role}</span>
          </li>
          <li>
            <span class="project-card__meta-label">Estado:</span>
            <span class="project-card__meta-value">${project.stateLabel}</span>
          </li>
        </ul>
        ${
          project.repoUrl
            ? `<a
          href="${project.repoUrl}"
          class="project-card__meta-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver código en GitHub
        </a>`
            : ''
        }
      </div>
    `
  }

  if (project.id === 'anima-prima') {
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
            <span class="project-card__meta-value">${project.role}</span>
          </li>
          <li>
            <span class="project-card__meta-label">Estado:</span>
            <span class="project-card__meta-value">${project.stateLabel}</span>
          </li>
        </ul>
      </div>
    `
  }

  if (project.id === 'verum-motus') {
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
            <span class="project-card__meta-value">${project.role}</span>
          </li>
          <li>
            <span class="project-card__meta-label">Estado:</span>
            <span class="project-card__meta-value">${project.stateLabel}</span>
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
    .map((project) => {
      const hasDetails = project.hasDetails !== false
      const detailPanelId = hasDetails && project.id ? getProjectDetailsId(project) : null

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
            ${renderProjectActions(project, detailPanelId)}
          </div>
          ${renderProjectDetailsPanel(project, detailPanelId)}
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
