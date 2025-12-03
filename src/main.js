import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import { domReady } from './js/ui/domReady.js'

domReady(() => {
  const app = document.querySelector('#app')

  app.innerHTML = `
    <main id="main-content" class="app-shell" role="main">
      <h1>Portfolio de Iv&aacute;n - setup inicial OK</h1>
      <p>Este es un placeholder inicial para comprobar el build y la estructura base.</p>
    </main>
  `
})
