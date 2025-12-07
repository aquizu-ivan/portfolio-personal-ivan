export function renderHeader() {
  return `
    <header class="site-header">
      <div class="site-header__logo">IAQUIZU</div>
      <nav class="site-nav" aria-label="Navegaci¢n principal">
        <ul class="site-nav__list">
          <li><a class="site-nav__link site-nav__link--active" href="#hero">Inicio</a></li>
          <li><a class="site-nav__link" href="#projects">Proyectos</a></li>
          <li><a class="site-nav__link" href="#services">Servicios</a></li>
          <li><a class="site-nav__link" href="#tech">Tecnolog¡as</a></li>
          <li><a class="site-nav__link" href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  `
}
