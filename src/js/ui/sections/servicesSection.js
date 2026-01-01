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
        <h2 id="services-title" class="section__title">Criterios de diseño y construcción</h2>
        <p class="section__subtitle">
          Estos sistemas se construyen con criterios claros: operación, lectura y estabilidad demostrable.<br />
          Cada obra sostiene su forma con estructura, decisiones y verificación.
        </p></header>

      <div class="services__grid">
        ${servicesList}
      </div>

      <p class="services__note">
        Cada obra elige su modo según lo que necesita sostener: experiencia, sistema u origen.
      </p>
    </section>
  `
}

