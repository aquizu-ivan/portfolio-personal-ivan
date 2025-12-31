export function renderTechSection() {
  return `
    <section
      id="tech"
      class="section tech"
      aria-labelledby="tech-title"
    >
      <header class="section__header js-reveal">
        <h2 id="tech-title" class="section__title">Soporte técnico y estabilidad del sistema</h2>
        <p class="section__subtitle">
          Cada obra se sostiene sobre arquitectura clara, mantenible y observable.
        </p>
      </header>

      <div class="tech__blocks">
        <article class="card tech__block">
          <h3 class="tech__block-title">Arquitectura</h3>
          <p class="tech__block-description">
            Sistemas pensados para durar, no para demostrar.
          </p>
          <div class="tech__chips">
            <span class="pill tech__item">Vite</span>
            <span class="pill tech__item">JavaScript moderno</span>
            <span class="pill tech__item">Arquitectura modular</span>
          </div>
        </article>

        <article class="card tech__block">
          <h3 class="tech__block-title">Estabilidad y control</h3>
          <p class="tech__block-description">
            Lo que se construye se puede observar.
          </p>
          <div class="tech__chips">
            <span class="pill tech__item">APIs REST</span>
            <span class="pill tech__item">Estados &amp; errores</span>
            <span class="pill tech__item">QA de exhibición</span>
          </div>
        </article>

        <article class="card tech__block">
          <h3 class="tech__block-title">Experiencia y mantenimiento</h3>
          <p class="tech__block-description">
            Tecnología al servicio de la calma.
          </p>
          <div class="tech__chips">
            <span class="pill tech__item">CSS performante</span>
            <span class="pill tech__item">Three.js con criterio</span>
            <span class="pill tech__item">Git como memoria</span>
          </div>
        </article>
      </div>
    </section>
  `
}
