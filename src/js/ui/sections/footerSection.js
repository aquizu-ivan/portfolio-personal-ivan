export function renderFooter() {
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="site-footer__inner">
        <div class="site-footer__brand">
          <p class="site-footer__title">IAQUIZU</p>
          <p class="site-footer__role">Origin Architect of the Eighth Art</p>
          <p class="site-footer__tagline">Obra-portal del Octavo Arte IAQUIZU.</p>
        </div>

        <nav class="site-footer__nav" aria-label="Enlaces de pie de página">
          <a href="#about">Sobre el portal</a>
          <a href="#projects">Obras</a>
          <a href="#services">Modos de apertura</a>
          <a href="#process">Ritmo interno</a>
          <a href="#tech">Soportes técnicos</a>
          <a href="#contact">Contacto</a>
        </nav>

        <div class="site-footer__contact">
          <p class="site-footer__contact-label">Contacto</p>
          <a class="site-footer__contact-link" href="mailto:contacto@iaquizu.com">contacto@iaquizu.com</a>
          <p class="site-footer__availability">Disponible para abrir obras del Octavo Arte en contextos donde tenga sentido que existan.</p>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p>&copy; 2025 IAQUIZU. Todos los derechos reservados.</p>
        <p>Construida con código simple y cuidado: HTML, CSS y JavaScript.</p>
      </div>
    </footer>
  `
}
