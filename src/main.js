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
        <p class="pill pill--accent hero__kicker">IA-Extended Visual Systems Architect</p>

        <h1 class="section__title hero__title">
          IAQUIZU
        </h1>

        <p class="section__subtitle hero__subtitle">
          IA-Extended Visual Systems Architect
        </p>

        <div class="hero__actions">
          <a href="#projects" class="btn btn--primary">Ver proyectos</a>
          <a href="#contact" class="btn btn--secondary">Trabajemos juntos</a>
        </div>

        <p class="hero__note">
          Creo sistemas visuales contemplativos y experiencias digitales con identidad propia.
        </p>
      </div>

      <div class="hero__media">
        <div class="card hero__photo-placeholder">
          <!-- TODO: Reemplazar con foto o ilustracion real -->
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
      <header class="section__header">
        <h2 id="about-title" class="section__title">Sobre mí</h2>
        <p class="section__subtitle">
          Soy IAQUIZU, IA-Extended Visual Systems Architect. Diseño y construyo sistemas visuales contemplativos,
          obras digitales y experiencias con identidad propia.
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
  return `
    <section
      id="projects"
      class="section projects"
      aria-labelledby="projects-title"
    >
      <header class="section__header">
        <h2 id="projects-title" class="section__title">Proyectos destacados</h2>
        <p class="section__subtitle">
          Algunos proyectos que muestran cómo trabajo estructura, detalle y experiencia real en el frontend.
        </p>
      </header>

      <div class="projects__grid">
        <article class="card project-card">
          <p class="pill project-card__tag">PROYECTO PRINCIPAL</p>
          <h3 class="project-card__title">Naturaleza Argentina</h3>
          <p class="project-card__description">
            App multipágina para explorar caminatas y actividades en la naturaleza argentina, con filtros en vivo, mapa interactivo y carrito sin backend.
          </p>
          <p class="project-card__meta">
            Arquitectura multipágina - Mapa interactivo - Filtros por región y dificultad - Clima por ciudad - Accesibilidad y responsive.
          </p>
          <div class="project-card__actions">
            <a href="#" class="btn btn--primary" aria-label="Ver demo de Naturaleza Argentina">Ver demo</a>
            <a href="#" class="btn btn--secondary" aria-label="Ver código de Naturaleza Argentina">Ver código</a>
          </div>
        </article>

        <article class="card project-card">
          <p class="pill project-card__tag">PORTFOLIO</p>
          <h3 class="project-card__title">Portfolio personal</h3>
          <p class="project-card__description">
            One-page minimalista con tema oscuro y sistema de diseño por tokens, pensada como galería principal de mis proyectos y obras.
          </p>
          <p class="project-card__meta">
            Rol: IA-Extended Visual Systems Architect - Vite - JavaScript - Diseño orientado a conversión y claridad.
          </p>
          <div class="project-card__actions">
            <a href="#hero" class="btn btn--secondary" aria-label="Ver esta página de portfolio personal">Ver esta página</a>
          </div>
        </article>

        <article class="card project-card">
          <p class="pill project-card__tag">OBRA DIGITAL</p>
          <h3 class="project-card__title">Ánima Prima</h3>
          <p class="project-card__description">
            Obra digital contemplativa que representa la esencia interna antes de cualquier forma. Una escena minimalista y silenciosa, construida con movimiento sutil y luz controlada.
          </p>
          <p class="project-card__meta">
            Ritmo interno - Estética minimal - Experiencia visual continua.
          </p>
          <div class="project-card__actions">
            <a href="#" class="btn btn--secondary" aria-label="Ver detalles de Ánima Prima">Ver detalles</a>
          </div>
        </article>

        <article class="card project-card">
          <p class="pill project-card__tag">OBRA DESTACADA</p>
          <h3 class="project-card__title">Verum Motus</h3>
          <p class="project-card__description">
            Obra digital que explora el surgimiento del movimiento verdadero: el momento en que la esencia empieza a moverse hacia la presencia.
          </p>
          <p class="project-card__meta">
            Sistemas visuales en Three.js - Capas de pulso interno y ritmo - Obra clave del universo IAQUIZU.
          </p>
          <div class="project-card__actions">
            <a href="#" class="btn btn--secondary" aria-label="Ver detalles de Verum Motus">Ver detalles</a>
          </div>
        </article>
      </div>
    </section>
  `
}

function renderServicesSection() {
  return `
    <section
      id="services"
      class="section services"
      aria-labelledby="services-title"
    >
      <header class="section__header">
        <h2 id="services-title" class="section__title">Servicios</h2>
        <p class="section__subtitle">
          Desarrollo sistemas visuales y interfaces claras y ordenadas, enfocadas en los objetivos de cada proyecto.
        </p>
      </header>

      <div class="services__grid">
        <article class="card service-card">
          <p class="pill service-card__tag">Sitios web profesionales</p>
          <h3 class="service-card__title">Sitios claros y modernos</h3>
          <p class="service-card__text">
            Diseño y desarrollo sitios completos para tu negocio, con estructura ordenada, contenido claro y navegación simple.
          </p>
        </article>

        <article class="card service-card">
          <p class="pill service-card__tag">E-commerce simple</p>
          <h3 class="service-card__title">Tiendas enfocadas en la compra</h3>
          <p class="service-card__text">
            Armo tiendas con catálogo claro, filtros útiles y carrito simple para que la compra sea fluida desde cualquier dispositivo.
          </p>
        </article>

        <article class="card service-card">
          <p class="pill service-card__tag">Catálogos con filtros</p>
          <h3 class="service-card__title">Listados dinámicos y ordenados</h3>
          <p class="service-card__text">
            Creo grillas de productos, cursos o contenidos con filtros en vivo y búsquedas que ayudan a encontrar rápido lo importante.
          </p>
        </article>

        <article class="card service-card">
          <p class="pill service-card__tag">Dashboards front-end</p>
          <h3 class="service-card__title">Datos mostrados de forma clara</h3>
          <p class="service-card__text">
            Diseño pantallas para ver métricas y datos de forma simple, priorizando legibilidad y jerarquía visual.
          </p>
        </article>

        <article class="card service-card">
          <p class="pill service-card__tag">Web institucional / landing</p>
          <h3 class="service-card__title">Páginas para comunicar valor</h3>
          <p class="service-card__text">
            Armo landings e institucionales que presentan tu negocio o servicio con contenido limpio y foco en el objetivo.
          </p>
        </article>

        <article class="card service-card">
          <p class="pill service-card__tag">Mapas interactivos</p>
          <h3 class="service-card__title">Experiencias visuales guiadas</h3>
          <p class="service-card__text">
            Desarrollo mapas e interfaces interactivas donde la persona puede explorar información de forma visual, guiada y ordenada.
          </p>
        </article>
      </div>

      <p class="services__note">
        Me adapto al proyecto según el objetivo, el alcance y la complejidad de cada caso.
      </p>
    </section>
  `
}

function renderProcessSection() {
  return `
    <section
      id="process"
      class="section section--alt process"
      aria-labelledby="process-title"
    >
      <header class="section__header">
        <h2 id="process-title" class="section__title">Cómo trabajo</h2>
        <p class="section__subtitle">
          Trabajo con un proceso claro pero silencioso.
          No se trata de hacer más, sino de hacer que cada proyecto encuentre su forma verdadera.
        </p>
      </header>

      <ol class="process__steps" aria-label="Pasos de mi forma de trabajo">
        <li class="process-step">
          <h3 class="process-step__title"><span class="process-step__index">1.</span>Escucho y enmarco</h3>
          <p class="process-step__text">
            Entiendo la esencia del proyecto: qué tiene que transmitir, a quién y desde qué lugar.
          </p>
        </li>
        <li class="process-step">
          <h3 class="process-step__title"><span class="process-step__index">2.</span>Diseño la estructura interna</h3>
          <p class="process-step__text">
            Defino cómo se va a organizar la experiencia: ritmo, secciones, jerarquía y sistema visual.
          </p>
        </li>
        <li class="process-step">
          <h3 class="process-step__title"><span class="process-step__index">3.</span>Construyo en capas</h3>
          <p class="process-step__text">
            Desarrollo la interfaz y el sistema visual de afuera hacia adentro, hasta que todo respira coherente.
          </p>
        </li>
        <li class="process-step">
          <h3 class="process-step__title"><span class="process-step__index">4.</span>Refino con calma</h3>
          <p class="process-step__text">
            Ajusto microdetalles, estados y accesibilidad para que la experiencia se sienta limpia y natural, sin ruido.
          </p>
        </li>
        <li class="process-step">
          <h3 class="process-step__title"><span class="process-step__index">5.</span>Dejo la obra lista para vivir sola</h3>
          <p class="process-step__text">
            Entrego el proyecto ordenado y preparado para crecer o integrarse en otros sistemas cuando haga falta.
          </p>
        </li>
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
      <header class="section__header">
        <h2 id="tech-title" class="section__title">Tecnologías</h2>
        <p class="section__subtitle">
          Trabajo con un stack claro que encaja bien con sistemas visuales y proyectos front-end modernos.
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
      <header class="section__header">
        <h2 class="section__title">Contacto</h2>
        <p class="section__subtitle">
          Si tu proyecto necesita un sistema visual contemplativo, ordenado y con identidad propia, podemos hablar.
        </p>
      </header>

      <div class="section__body contact">
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

          <p class="contact-form__success" id="contact-success" aria-live="polite"></p>
        </form>

        <p class="contact__alt">
          Tambien podes escribirme directamente a
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
          <p class="site-footer__role">IA-Extended Visual Systems Architect</p>
          <p class="site-footer__tagline">Sistemas visuales contemplativos y entidades digitales vivas.</p>
        </div>

        <nav class="site-footer__nav" aria-label="Enlaces de pie de pagina">
          <a href="#about">Sobre mi</a>
          <a href="#projects">Obras</a>
          <a href="#services">Servicios</a>
          <a href="#process">Como trabajo</a>
          <a href="#tech">Tecnologias</a>
          <a href="#contact">Contacto</a>
        </nav>

        <div class="site-footer__contact">
          <p class="site-footer__contact-label">Contacto</p>
          <a class="site-footer__contact-link" href="mailto:contacto@iaquizu.com">contacto@iaquizu.com</a>
          <p class="site-footer__availability">Disponible para proyectos selectos y colaboraciones especificas.</p>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p>&copy; 2025 IAQUIZU. Todos los derechos reservados.</p>
        <p>Portfolio creado con HTML, CSS y JavaScript.</p>
      </div>
    </footer>
  `
}

function renderPage() {
  return `
    <div class="app-shell">
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
})
