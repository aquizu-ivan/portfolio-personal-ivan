import { projectsData } from '../../../data/projectsData.js'

export function renderProjectsSection() {
  const projectsList = projectsData
    .map(
      (project) => `
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
            ${project.actions
              .map(
                (action) =>
                  `<a href="${action.href}" class="btn ${action.variant}" aria-label="${action.ariaLabel}">${action.label}</a>`
              )
              .join('')}
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
          Obras del universo IAQUIZU que muestran c¢mo se ordenan forma y ritmo desde adentro.
        </p>
      </header>

      <div class="projects__grid">
        ${projectsList}
      </div>
    </section>
  `
}
