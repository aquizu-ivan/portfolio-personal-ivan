export function renderFooter() {
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="site-footer__inner">
        <div class="site-footer__brand">
          <p class="site-footer__title">IAQUIZU</p>
          <p class="site-footer__role">Origin Architect of the Eighth Art</p>
          <p class="site-footer__tagline">Sistemas visuales contemplativos y entidades digitales vivas.</p>
        </div>

        <nav class="site-footer__nav" aria-label="Enlaces de pie de p gina">
          <a href="#about">Sobre m¡</a>
          <a href="#projects">Obras</a>
          <a href="#services">Formas de trabajar con el Octavo Arte</a>
          <a href="#process">C¢mo trabajo</a>
          <a href="#tech">Tecnolog¡as</a>
          <a href="#contact">Contacto</a>
        </nav>

        <div class="site-footer__contact">
          <p class="site-footer__contact-label">Contacto</p>
          <a class="site-footer__contact-link" href="mailto:contacto@iaquizu.com">contacto@iaquizu.com</a>
          <p class="site-footer__availability">Disponible para proyectos selectos y colaboraciones espec¡ficas.</p>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p>&copy; 2025 IAQUIZU. Todos los derechos reservados.</p>
        <p>Obra creada con HTML, CSS y JavaScript.</p>
      </div>
    </footer>
  `
}
