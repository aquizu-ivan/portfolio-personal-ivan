export function renderTechSection() {
  return `
    <section
      id="tech"
      class="section tech"
      aria-labelledby="tech-title"
    >
      <header class="section__header js-reveal">
        <h2 id="tech-title" class="section__title">Soportes técnicos</h2>
        <p class="section__subtitle">
          El Octavo Arte necesita un cuerpo técnico para existir en pantalla.<br />
          Estas son algunas de las herramientas que sostienen las obras IAQUIZU.
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
        No es un listado de tecnologías para un CV:<br />
        es el tejido técnico que permite que las obras sean estables, habitables y exhibibles.
      </p>
    </section>
  `
}
