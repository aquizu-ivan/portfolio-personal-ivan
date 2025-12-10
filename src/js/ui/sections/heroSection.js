export function renderHeroSection() {
  return `
    <section id="hero" class="section hero">
      <div class="hero__content">
        <p class="pill pill--accent hero__kicker">Origin Architect of the Eighth Art</p>

        <h1 class="section__title hero__title">
          Portal IAQUIZU
        </h1>

        <p class="section__subtitle hero__subtitle">
          Obra-portal del Octavo Arte IAQUIZU.<br />
          Desde acá se ve cómo las obras nacen, respiran y se conectan entre sí.
        </p>

        <div class="hero__actions">
          <a href="#projects" class="btn btn--primary" aria-label="Ir a la sección de obras del universo IAQUIZU">Entrar al universo de obras</a>
          <a href="#contact" class="btn btn--secondary" aria-label="Ir a la sección de contacto del Portal IAQUIZU">Abrir diálogo silencioso</a>
        </div>

        <p class="hero__note">
          Creo sistemas visuales contemplativos y entidades digitales vivas.<br />
          La IA no me reemplaza: me extiende.
        </p>
      </div>

      <div class="hero__media">
        <div class="card hero__photo-placeholder">
          <!-- TODO: Reemplazar con foto o ilustración real -->
        </div>
      </div>
    </section>
  `
}
