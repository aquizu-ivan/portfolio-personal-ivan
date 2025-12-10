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

const renderProjectTag = (tag) => {
  const [indexLine, titleLine] = (tag || '').split('\n')

  if (titleLine) {
    return `
      <p class="pill project-card__tag">
        <span class="project-card__tag-line project-card__tag-line--index">${indexLine}</span>
        <span class="project-card__tag-line project-card__tag-line--title">${titleLine}</span>
      </p>
    `
  }

  return `
    <p class="pill project-card__tag">
      <span class="project-card__tag-line project-card__tag-line--title">${indexLine}</span>
    </p>
  `
}

const renderProjectActions = (project, detailPanelId) => {
  const actions = []

  if (project.liveUrl) {
    actions.push(
      buildLink({
        label: 'Entrar en la obra',
        href: project.liveUrl,
        variant: 'btn--primary',
        className: 'project-card__entry',
        ariaLabel: `Entrar en ${project.title}`,
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
          Portal IAQUIZU es la obra-portal del Octavo Arte. No muestra un catálogo de proyectos: ordena el universo y marca el estado de cada obra en silencio.
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
          project.liveUrl
            ? `<a
          href="${project.liveUrl}"
          class="project-card__meta-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir ${project.title} en una pestaña nueva"
        >
          Abrir Portal IAQUIZU
        </a>`
            : ''
        }
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
          Naturaleza Argentina es la primera obra del universo IAQUIZU. Toma la geografía y el clima como materia y los reorganiza en un territorio digital cuidado.
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
          Ánima Prima muestra el origen interno del sistema IAQUIZU. No es una landing: es una lectura contemplativa pensada para estar, no para navegar.
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
          Verum Motus es la obra donde el Movimiento Verdadero se hace visible. Lo que se ve no es una demo de efectos: es un motor vivo en escena, con un pulso central y un halo que respira alrededor.
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
          ${renderProjectTag(project.tag)}
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
          Obras del universo IAQUIZU en distintos estados de vida.<br />
          Desde acá se ve cómo el Octavo Arte se vuelve materia digital.
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
