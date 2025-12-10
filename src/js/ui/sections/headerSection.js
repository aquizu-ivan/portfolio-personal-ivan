export function renderHeader() {
  return `
    <header class="site-header">
      <div class="site-header__logo">IAQUIZU</div>
      <nav class="site-nav" aria-label="Navegación principal del Portal IAQUIZU">
        <ul class="site-nav__list">
          <li><a class="site-nav__link site-nav__link--active" href="#hero" aria-current="page">Portal</a></li>
          <li><a class="site-nav__link" href="#projects">Obras</a></li>
          <li><a class="site-nav__link" href="#services">Modos de apertura</a></li>
          <li><a class="site-nav__link" href="#tech">Soportes técnicos</a></li>
          <li><a class="site-nav__link" href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  `
}
