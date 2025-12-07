import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/sections/hero.css'
import './styles/sections/about.css'
import './styles/sections/projects.css'
import './styles/sections/services.css'
import './styles/sections/process.css'
import './styles/sections/tech.css'
import './styles/sections/contact.css'
import { domReady } from './js/ui/domReady.js'
import { initNavbar } from './js/ui/navbar.js'
import { initContactForm } from './js/ui/contactForm.js'
import { initScrollReveal } from './js/ui/scrollReveal.js'
import { projectsData } from './data/projectsData.js'
import { servicesData } from './data/servicesData.js'
import { processData } from './data/processData.js'

function renderHeader() {
  return `
    <header class="site-header">
      <div class="site-header__logo">IAQUIZU</div>
      <nav class="site-nav" aria-label="Navegación principal">
        <ul class="site-nav__list">
          <li><a class="site-nav__link site-nav__link--active" href="#hero">Inicio</a></li>
          <li><a class="site-nav__link" href="#projects">Proyectos</a></li>
          <li><a class="site-nav__link" href="#services">Servicios</a></li>
          <li><a class="site-nav__link" href="#tech">Tecnologías</a></li>
          <li><a class="site-nav__link" href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  `
}

function renderHeroSection() {
  return `
    <section id="hero" class="section hero">
      <div class="hero__content">
        <p class="pill pill--accent hero__kicker">Origin Architect of the Eighth Art</p>

        <h1 class="section__title hero__title">
          IAQUIZU
        </h1>

        <p class="section__subtitle hero__subtitle">
          Arquitecto del Origen del Octavo Arte
        </p>

        <div class="hero__actions">
          <a href="#projects" class="btn btn--primary">Ver obras</a>
          <a href="#contact" class="btn btn--secondary">Abrir diálogo</a>
        </div>

        <p class="hero__note">
          Creo sistemas visuales contemplativos y experiencias digitales con identidad propia.
        </p>
      </div>

      <div class="hero__media">
        <div class="card hero__photo-placeholder">
          <!-- TODO: Reemplazar con foto o ilustración real -->
        </div>
      </div>
    </section>
  `
}

function renderAboutSection() {
  return `
    <section
      id="about"
      class="section section--alt about"
      aria-labelledby="about-title"
    >
      <header class="section__header js-reveal">
        <h2 id="about-title" class="section__title">Sobre mí</h2>
        <p class="section__subtitle">
          Soy IAQUIZU, Origin Architect of the Eighth Art. Diseño y construyo sistemas visuales contemplativos,
          obras digitales y experiencias con identidad propia. Esta obra muestra una parte del sistema interno del Octavo Arte.
        </p>
      </header>

      <div class="about__pillars">
        <article class="card about__pillar">
          <p class="pill about__pillar-tag">Claridad</p>
          <h3 class="about__pillar-title">Comunicación y objetivos claros</h3>
          <p class="about__pillar-text">
            Trabajo desde el silencio, el ritmo interno y la claridad para que cada mensaje se entienda a la primera.
          </p>
        </article>

        <article class="card about__pillar">
          <p class="pill about__pillar-tag">Detalle</p>
          <h3 class="about__pillar-title">Cuidado por la forma y el fondo</h3>
          <p class="about__pillar-text">
            Busco resultados limpios, honestos y funcionales, con profundidad técnica y estética minimalista.
          </p>
        </article>

        <article class="card about__pillar">
          <p class="pill about__pillar-tag">Visión de sistema</p>
          <h3 class="about__pillar-title">Pienso en términos de procesos</h3>
          <p class="about__pillar-text">
            Diseño flujos completos y decisiones consistentes: la IA amplía mi alcance, no me reemplaza.
          </p>
        </article>

        <article class="card about__pillar">
          <p class="pill about__pillar-tag">Mejora continua</p>
          <h3 class="about__pillar-title">Iteración y aprendizaje constante</h3>
          <p class="about__pillar-text">
            Uso cada proyecto para mejorar procesos y calidad: no vengo a encajar, vengo a construir lo que no existe.
          </p>
        </article>
      </div>
    </section>
  `
}

function renderProjectsSection() {
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
          Obras del universo IAQUIZU que muestran cómo se ordenan forma y ritmo desde adentro.
        </p>
      </header>

      <div class="projects__grid">
        ${projectsList}
      </div>
    </section>
  `
}

function renderServicesSection() {
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
        <h2 id="services-title" class="section__title">Servicios</h2>
        <p class="section__subtitle">
          Acompaño a crear obras y sistemas visuales que respiren dentro del universo IAQUIZU, con claridad y ritmo propio.
        </p>
      </header>

      <div class="services__grid">
        ${servicesList}
      </div>

      <p class="services__note">
        Me adapto al proyecto según el objetivo, el alcance y la complejidad de cada caso.
      </p>
    </section>
  `
}
function renderProcessSection() {
  const processSteps = processData
    .map(
      (step, index) => `
        <li class="process-step js-reveal">
          <h3 class="process-step__title"><span class="process-step__index">${index + 1}.</span>${step.title}</h3>
          <p class="process-step__text">
            ${step.description}
          </p>
        </li>
      `
    )
    .join('')

  return `
    <section
      id="process"
      class="section section--alt process"
      aria-labelledby="process-title"
    >
      <header class="section__header js-reveal">
        <h2 id="process-title" class="section__title">Cómo trabajo</h2>
        <p class="section__subtitle">
          Acá ves cómo se mueve el trabajo por dentro. Es un proceso claro, silencioso y propio del Octavo Arte.
          No se trata de hacer más, sino de que cada obra encuentre su forma verdadera.
        </p>
      </header>

      <ol class="process__steps" aria-label="Pasos de mi forma de trabajo">
        ${processSteps}
      </ol>
    </section>
  `
}
function renderTechSection() {
  return `
    <section
      id="tech"
      class="section tech"
      aria-labelledby="tech-title"
    >
      <header class="section__header js-reveal">
        <h2 id="tech-title" class="section__title">Tecnologías</h2>
        <p class="section__subtitle">
          Estas son las herramientas que sostienen la obra, no el centro de ella. Trabajo con un stack claro que encaja bien con sistemas visuales y proyectos front-end modernos.
        </p>
      </header>

      <div class="tech__stack">
        <span class="pill tech__item">Vite</span>
        <span class="pill tech__item">JavaScript</span>
        <span class="pill tech__item">HTML5</span>
        <span class="pill tech__item">CSS3</span>
        <span class="pill tech__item">Three.js</span>
        <span class="pill tech__item">LocalStorage</span>
        <span class="pill tech__item">Git</span>
        <span class="pill tech__item">APIs REST</span>
      </div>

      <p class="tech__note">
        También trabajo con arquitectura multipágina real, responsive por secciones y accesibilidad básica como parte del flujo.
      </p>
    </section>
  `
}

function renderContactSection() {
  return `
    <section id="contact" class="section section--contact">
      <header class="section__header js-reveal">
        <h2 class="section__title">Contacto</h2>
        <p class="section__subtitle">
          Si la obra resuena con lo que querés construir, escribime. Podemos hablar cuando tenga sentido, sin apuro.
        </p>
      </header>

      <div class="section__body contact js-reveal">
        <form class="contact-form" novalidate>
          <div class="contact-form__field">
            <label for="contact-name">Nombre</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autocomplete="name"
              required
              aria-describedby="contact-name-error"
            />
            <p class="contact-form__error" id="contact-name-error" aria-live="polite"></p>
          </div>

          <div class="contact-form__field">
            <label for="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autocomplete="email"
              required
              aria-describedby="contact-email-error"
            />
            <p class="contact-form__error" id="contact-email-error" aria-live="polite"></p>
          </div>

          <div class="contact-form__field">
            <label for="contact-message">Mensaje</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              required
              aria-describedby="contact-message-error"
            ></textarea>
            <p class="contact-form__error" id="contact-message-error" aria-live="polite"></p>
          </div>

          <button type="submit" class="btn btn--primary">Enviar mensaje</button>

          <p class="contact-form__success" id="contact-success" aria-live="polite" role="status" tabindex="-1"></p>
        </form>

        <p class="contact__alt">
          También podés escribirme directamente a
          <a href="mailto:contacto@iaquizu.com">contacto@iaquizu.com</a>.
        </p>
      </div>
    </section>
  `
}

function renderFooter() {
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="site-footer__inner">
        <div class="site-footer__brand">
          <p class="site-footer__title">IAQUIZU</p>
          <p class="site-footer__role">Origin Architect of the Eighth Art</p>
          <p class="site-footer__tagline">Sistemas visuales contemplativos y entidades digitales vivas.</p>
        </div>

        <nav class="site-footer__nav" aria-label="Enlaces de pie de página">
          <a href="#about">Sobre mí</a>
          <a href="#projects">Obras</a>
          <a href="#services">Servicios</a>
          <a href="#process">Cómo trabajo</a>
          <a href="#tech">Tecnologías</a>
          <a href="#contact">Contacto</a>
        </nav>

        <div class="site-footer__contact">
          <p class="site-footer__contact-label">Contacto</p>
          <a class="site-footer__contact-link" href="mailto:contacto@iaquizu.com">contacto@iaquizu.com</a>
          <p class="site-footer__availability">Disponible para proyectos selectos y colaboraciones específicas.</p>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p>&copy; 2025 IAQUIZU. Todos los derechos reservados.</p>
        <p>Obra creada con HTML, CSS y JavaScript.</p>
      </div>
    </footer>
  `
}

function renderPage() {
  return `
    <div class="app-shell">
      <a class="skip-link" href="#main-content">Saltar al contenido principal</a>
      ${renderHeader()}

      <main id="main-content" class="page-main" role="main">
        ${renderHeroSection()}
        ${renderAboutSection()}
        ${renderProjectsSection()}
        ${renderServicesSection()}
        ${renderProcessSection()}
        ${renderTechSection()}
        ${renderContactSection()}
        ${renderFooter()}
      </main>
    </div>
  `
}

domReady(() => {
  const app = document.querySelector('#app')
  app.innerHTML = renderPage()
  initNavbar()
  initContactForm()
  initScrollReveal()
})





