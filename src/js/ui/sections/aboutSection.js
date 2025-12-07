export function renderAboutSection() {
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
