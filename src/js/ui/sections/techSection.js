export function renderTechSection() {
  return `
    <section
      id="tech"
      class="section tech"
      aria-labelledby="tech-title"
    >
      <header class="section__header js-reveal">
        <h2 id="tech-title" class="section__title">Tecnolog¡as</h2>
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
        Tambi‚n trabajo con arquitectura multip gina real, responsive por secciones y accesibilidad b sica como parte del flujo.
      </p>
    </section>
  `
}
