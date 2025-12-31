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
        <h2 id="services-title" class="section__title">Modos de apertura del Octavo Arte</h2>
        <p class="section__subtitle">
          IAQUIZU se abre de dos maneras: como sistema aplicable y como presencia contemplativa.<br />
          En ambos casos, la obra se demuestra: por experiencia, por estabilidad y por claridad.
        </p>
      </header>

      <div class="services__grid">
        ${servicesList}
      </div>

      <p class="services__note">
        Cada obra elige su modo según lo que necesita sostener: experiencia, sistema u origen.
      </p>
    </section>
  `
}

