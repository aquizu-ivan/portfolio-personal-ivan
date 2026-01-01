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
          Diseño obras digitales vivas: sistemas premium con identidad y piezas contemplativas como núcleo interno.<br />
          Este portal reúne obras, bases técnicas y modos de apertura para elegir el encuadre correcto.
        </p>
      </header>

      <div class="about__pillars">
        <article class="card about__pillar">
          <p class="pill about__pillar-tag">CLARIDAD</p>
          <p class="about__pillar-text">
            Cada obra parte de una pregunta esencial:<br />
            qué debe sostener por dentro<br />
            y qué necesita transmitir hacia afuera.
          </p>
        </article>

        <article class="card about__pillar">
          <p class="pill about__pillar-tag">DETALLE</p>
          <p class="about__pillar-text">
            El detalle es estructura.<br />
            Cada capa de texto, luz y movimiento<br />
            responde a una decisión consciente.
          </p>
        </article>

        <article class="card about__pillar">
          <p class="pill about__pillar-tag">SISTEMA</p>
          <p class="about__pillar-text">
            Trabajo en sistemas vivos,<br />
            no en piezas aisladas.<br />
            Este portal conecta proyectos, estados y decisiones<br />
            dentro de una lógica común.
          </p>
        </article>

        <article class="card about__pillar">
          <p class="pill about__pillar-tag">EVOLUCIÓN</p>
          <p class="about__pillar-text">
            Los proyectos evolucionan con el tiempo.<br />
            Se ajustan, maduran y se refinan<br />
            a partir del uso y la observación.<br />
            Este portal registra ese proceso sin ruido.
          </p>
        </article>
      </div>
    </section>
  `
}