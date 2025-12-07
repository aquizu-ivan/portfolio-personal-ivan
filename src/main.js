import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/sections/hero.css'
import './styles/sections/about.css'
import './styles/sections/projects.css'
import './styles/sections/services.css'
import './styles/sections/process.css'
import './styles/sections/tech.css'
import './styles/sections/contact.css'
import { domReady } from './js/ui/domReady.js'
import { initNavbar } from './js/ui/navbar.js'
import { initContactForm } from './js/ui/contactForm.js'
import { initScrollReveal } from './js/ui/scrollReveal.js'
import { renderHeader } from './js/ui/sections/headerSection.js'
import { renderHeroSection } from './js/ui/sections/heroSection.js'
import { renderAboutSection } from './js/ui/sections/aboutSection.js'
import { renderProjectsSection } from './js/ui/sections/projectsSection.js'
import { renderServicesSection } from './js/ui/sections/servicesSection.js'
import { renderProcessSection } from './js/ui/sections/processSection.js'
import { renderTechSection } from './js/ui/sections/techSection.js'
import { renderContactSection } from './js/ui/sections/contactSection.js'
import { renderFooter } from './js/ui/sections/footerSection.js'

function renderPage() {
  return `
    <div class="app-shell">
      <a class="skip-link" href="#main-content">Saltar al contenido principal</a>
      ${renderHeader()}

      <main id="main-content" class="page-main" role="main">
        ${renderHeroSection()}
        ${renderAboutSection()}
        ${renderProjectsSection()}
        ${renderServicesSection()}
        ${renderProcessSection()}
        ${renderTechSection()}
        ${renderContactSection()}
        ${renderFooter()}
      </main>
    </div>
  `
}

domReady(() => {
  const app = document.querySelector('#app')
  app.innerHTML = renderPage()
  initNavbar()
  initContactForm()
  initScrollReveal()
})
