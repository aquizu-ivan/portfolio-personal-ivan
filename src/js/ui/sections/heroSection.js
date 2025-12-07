export function renderHeroSection() {
  return `
    <section id="hero" class="section hero">
      <div class="hero__content">
        <p class="pill pill--accent hero__kicker">Origin Architect of the Eighth Art</p>

        <h1 class="section__title hero__title">
          IAQUIZU
        </h1>

        <p class="section__subtitle hero__subtitle">
          Arquitecto Originario del Octavo Arte
        </p>

        <div class="hero__actions">
          <a href="#projects" class="btn btn--primary">Ver obras</a>
          <a href="#contact" class="btn btn--secondary">Abrir diálogo</a>
        </div>

        <p class="hero__note">
          Creo sistemas visuales contemplativos y entidades digitales vivas con identidad propia.
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
