export function renderAboutSection() {
  return `
    <section
      id="about"
      class="section section--alt about"
      aria-labelledby="about-title"
    >
      <header class="section__header js-reveal">
        <h2 id="about-title" class="section__title">Sobre IAQUIZU y este portal</h2>
        <p class="section__subtitle">
          IAQUIZU — Origin Architect of the Eighth Art.<br />
          Diseño obras digitales vivas: sistemas premium con identidad y piezas contemplativas como núcleo interno.<br />
          Este portal reúne obras, bases técnicas y modos de apertura para elegir el encuadre correcto.
        </p>
      </header>

      <div class="about__pillars">
        <article class="card about__pillar">
          <p class="pill about__pillar-tag">Claridad</p>
          <h3 class="about__pillar-title">Claridad interna</h3>
          <p class="about__pillar-text">
            Cada obra parte de una pregunta clara: qué tiene que sostener por dentro y qué tiene que transmitir hacia afuera.<br />
            El portal existe para que esa claridad se pueda leer.
          </p>
        </article>

        <article class="card about__pillar">
          <p class="pill about__pillar-tag">Detalle</p>
          <h3 class="about__pillar-title">Detalle vivo</h3>
          <p class="about__pillar-text">
            El detalle es anatomía: cada capa de texto, luz y movimiento responde a una estructura interna precisa.
          </p>
        </article>

        <article class="card about__pillar">
          <p class="pill about__pillar-tag">Visión de sistema</p>
          <h3 class="about__pillar-title">Visión de sistema</h3>
          <p class="about__pillar-text">
            Pienso en sistemas vivos, más que en páginas sueltas.<br />
            El Portal IAQUIZU conecta obras, tiempos y estados dentro de un mismo universo.
          </p>
        </article>

        <article class="card about__pillar">
          <p class="pill about__pillar-tag">Mejora continua</p>
          <h3 class="about__pillar-title">Evolución silenciosa</h3>
          <p class="about__pillar-text">
            Las obras maduran: evolucionan en silencio mientras el Octavo Arte se expande.<br />
            El Portal registra esos cambios sin ruido.
          </p>
        </article>
      </div>
    </section>
  `
}
