import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/sections/hero.css'
import './styles/sections/about.css'
import './styles/sections/projects.css'
import './styles/sections/services.css'
import { domReady } from './js/ui/domReady.js'

domReady(() => {
  const app = document.querySelector('#app')

  app.innerHTML = `
    <div class="app-shell">
      <header class="site-header">
        <div class="site-header__logo">I AQUIZU</div>
        <nav class="site-nav" aria-label="Navegación principal">
          <ul class="site-nav__list">
            <li><a class="site-nav__link site-nav__link--active" href="#hero">Inicio</a></li>
            <li><a class="site-nav__link" href="#projects">Proyectos</a></li>
            <li><a class="site-nav__link" href="#services">Servicios</a></li>
            <li><a class="site-nav__link" href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" class="page-main" role="main">
        <section id="hero" class="section hero">
          <div class="hero__content">
            <p class="pill pill--accent hero__kicker">Desarrollo Front-End</p>

            <h1 class="section__title hero__title">
              Construyo interfaces claras, prolijas y bien pensadas.
            </h1>

            <p class="section__subtitle hero__subtitle">
              Desarrollo frontend con mentalidad de sistema, detalle y trabajo profesional.
            </p>

            <div class="hero__actions">
              <a href="#projects" class="btn btn--primary">Ver proyectos</a>
              <a href="#contact" class="btn btn--secondary">Trabajemos juntos</a>
            </div>

            <p class="hero__note">
              Trabajo con un proceso claro: estructura, detalle y resultados consistentes.
            </p>
          </div>

          <div class="hero__media">
            <div class="card hero__photo-placeholder">
              <!-- TODO: Reemplazar con foto o ilustracion real -->
            </div>
          </div>
        </section>

        <section
          id="about"
          class="section section--alt about"
          aria-labelledby="about-title"
        >
          <header class="section__header">
            <h2 id="about-title" class="section__title">Sobre mí</h2>
            <p class="section__subtitle">
              Soy Iván, desarrollador front-end orientado a claridad, prolijidad y estructura.
              Mi enfoque combina sistemas, procesos ordenados y atención profunda al detalle.
            </p>
          </header>

          <div class="about__pillars">
            <article class="card about__pillar">
              <p class="pill about__pillar-tag">Claridad</p>
              <h3 class="about__pillar-title">Comunicación y objetivos claros</h3>
              <p class="about__pillar-text">
                Me aseguro de que cada pantalla, sección y mensaje se entienda a la primera lectura.
              </p>
            </article>

            <article class="card about__pillar">
              <p class="pill about__pillar-tag">Detalle</p>
              <h3 class="about__pillar-title">Cuidado por la forma y el fondo</h3>
              <p class="about__pillar-text">
                Trabajo tanto el detalle visual como la estructura interna del código que lo soporta.
              </p>
            </article>

            <article class="card about__pillar">
              <p class="pill about__pillar-tag">Visión de sistema</p>
              <h3 class="about__pillar-title">Pienso en términos de procesos</h3>
              <p class="about__pillar-text">
                No miro solo cada pantalla aislada: diseño flujos completos y decisiones consistentes.
              </p>
            </article>

            <article class="card about__pillar">
              <p class="pill about__pillar-tag">Mejora continua</p>
              <h3 class="about__pillar-title">Iteración y aprendizaje constante</h3>
              <p class="about__pillar-text">
                Uso cada proyecto para mejorar procesos, estructura y calidad del resultado final.
              </p>
            </article>
          </div>
        </section>

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
              <p class="pill project-card__tag">Proyecto principal</p>
              <h3 class="project-card__title">Naturaleza Argentina</h3>
              <p class="project-card__description">
                App multipágina para explorar caminatas y actividades en la naturaleza argentina, con filtros en vivo, mapa interactivo y carrito sin backend.
              </p>
              <p class="project-card__meta">
                Arquitectura multipágina • Mapa interactivo • Filtros en vivo • Clima por ciudad • Accesibilidad y responsive
              </p>
              <div class="project-card__actions">
                <a href="#" class="btn btn--primary" aria-label="Ver demo de Naturaleza Argentina">Ver demo</a>
                <a href="#" class="btn btn--secondary" aria-label="Ver código de Naturaleza Argentina">Ver código</a>
              </div>
            </article>

            <article class="card project-card">
              <p class="pill project-card__tag">Portfolio</p>
              <h3 class="project-card__title">Portfolio personal</h3>
              <p class="project-card__description">
                One-page minimalista con tema oscuro, sistema de diseño por tokens y secciones pensadas para mostrar trabajo freelance.
              </p>
              <p class="project-card__meta">
                Vite • JavaScript vanilla • Tokens CSS • Accesibilidad base • Diseño orientado a conversión
              </p>
              <div class="project-card__actions">
                <a href="#hero" class="btn btn--secondary" aria-label="Ver esta página de portfolio personal">Ver esta página</a>
              </div>
            </article>

            <article class="card project-card">
              <p class="pill project-card__tag">En diseño</p>
              <h3 class="project-card__title">Mini e-commerce técnico</h3>
              <p class="project-card__description">
                Mini e-commerce pensado para productos técnicos, con catálogo claro, filtros útiles y carrito simple.
              </p>
              <p class="project-card__meta">
                Filtros por categoría • Carrito en localStorage • UI limpia orientada a compra
              </p>
              <div class="project-card__actions">
                <a href="#" class="btn btn--secondary" aria-label="Ver detalles del mini e-commerce técnico">Ver detalles</a>
              </div>
            </article>

            <article class="card project-card">
              <p class="pill project-card__tag">Landing</p>
              <h3 class="project-card__title">Web institucional simple</h3>
              <p class="project-card__description">
                Landing institucional para presentar un negocio o servicio con estructura limpia y contenido ordenado.
              </p>
              <p class="project-card__meta">
                Estructura clara • Secciones enfocadas en objetivos • Copy limpio para comunicar valor
              </p>
              <div class="project-card__actions">
                <a href="#" class="btn btn--secondary" aria-label="Ver detalles de la web institucional simple">Ver detalles</a>
              </div>
            </article>
          </div>
        </section>

        <section
          id="services"
          class="section services"
          aria-labelledby="services-title"
        >
          <header class="section__header">
            <h2 id="services-title" class="section__title">Servicios</h2>
            <p class="section__subtitle">
              Desarrollo interfaces front-end claras y ordenadas, adaptadas al objetivo de cada proyecto.
            </p>
          </header>

          <div class="services__grid">
            <article class="card service-card">
              <p class="pill service-card__tag">Sitios web profesionales</p>
              <h3 class="service-card__title">Sitios claros y modernos</h3>
              <p class="service-card__text">
                Diseño y desarrollo sitios completos con estructura ordenada, contenido claro y navegación simple.
              </p>
            </article>

            <article class="card service-card">
              <p class="pill service-card__tag">E-commerce simple</p>
              <h3 class="service-card__title">Tiendas enfocadas en la compra</h3>
              <p class="service-card__text">
                Armo tiendas con catálogo claro, filtros útiles y carrito simple, pensadas para que la compra sea fluida.
              </p>
            </article>

            <article class="card service-card">
              <p class="pill service-card__tag">Catálogos con filtros</p>
              <h3 class="service-card__title">Listados dinámicos y ordenados</h3>
              <p class="service-card__text">
                Creo grillas de productos, cursos o contenidos con filtros en vivo y búsquedas que ayudan a encontrar rápido lo que importa.
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
                Armo landings e institucionales que presentan un negocio o servicio con contenido limpio y estructura enfocada en el objetivo.
              </p>
            </article>

            <article class="card service-card">
              <p class="pill service-card__tag">Mapas interactivos</p>
              <h3 class="service-card__title">Experiencias visuales guiadas</h3>
              <p class="service-card__text">
                Desarrollo mapas e interfaces interactivas donde la persona puede explorar información de forma visual y ordenada.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  `
})
