import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/sections/hero.css'
import './styles/sections/about.css'
import { domReady } from './js/ui/domReady.js'

domReady(() => {
  const app = document.querySelector('#app')

  app.innerHTML = `
    <div class="app-shell">
      <header class="site-header">
        <div class="site-header__logo">I AQUIZU</div>
        <nav class="site-nav" aria-label="Navegacion principal">
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
      </main>
    </div>
  `
})
