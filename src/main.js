import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/sections/hero.css'
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
      </main>
    </div>
  `
})
