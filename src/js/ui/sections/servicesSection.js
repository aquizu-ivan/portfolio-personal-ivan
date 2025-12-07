import { servicesData } from '../../../data/servicesData.js'

export function renderServicesSection() {
  const servicesList = servicesData
    .map(
      (service) => `
        <article class="card service-card js-reveal">
          <p class="pill service-card__tag">${service.tag}</p>
          <h3 class="service-card__title">${service.title}</h3>
          <p class="service-card__text">
            ${service.description}
          </p>
        </article>
      `
    )
    .join('')

  return `
    <section
      id="services"
      class="section services"
      aria-labelledby="services-title"
    >
      <header class="section__header js-reveal">
        <h2 id="services-title" class="section__title">Formas de trabajar con el Octavo Arte</h2>
        <p class="section__subtitle">
          No es una lista de servicios.
          Son distintas maneras de dejar que el sistema IAQUIZU se abra en tu proyecto.
        </p>
      </header>

      <div class="services__grid">
        ${servicesList}
      </div>

      <p class="services__note">
        Me adapto al proyecto seg£n el objetivo, el alcance y la complejidad de cada caso.
      </p>
    </section>
  `
}
