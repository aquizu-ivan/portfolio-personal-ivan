# Obra 2 — Portal IAQUIZU · Arquitectura

One-page data-driven que presenta al Origin Architect of the Eighth Art. No es un portfolio comercial: es el portal de la obra, con secciones orquestadas en JS vanilla y Vite.

---

## Estructura de carpetas (estado actual)

```
root
- index.html
- package.json
- vite.config.js
- .gitignore
- README.md
- docs/
  - TICKET-PLANNER.md
  - ARCHITECTURE.md
  - DESIGN-SPEC.md
- src/
  - main.js
  - assets/
    - img/
    - icons/
    - fonts/
  - styles/
    - base.css
    - layout.css
    - components.css
    - sections/
      - hero.css
      - about.css
      - projects.css
      - services.css
      - process.css
      - tech.css
      - contact.css
  - js/
    - ui/
      - domReady.js
      - navbar.js
      - contactForm.js
      - scrollReveal.js
      - sections/
        - heroSection.js
        - aboutSection.js
        - projectsSection.js
        - servicesSection.js
        - processSection.js
        - techSection.js
        - contactSection.js
        - footerSection.js
```

## Orquestación

- `src/main.js`: orquestador. Importa `renderXSection`, compone `renderPage()` y en `domReady` inyecta la página y luego inicializa `initNavbar()`, `initContactForm()` e `initScrollReveal()`.
- Secciones en `src/js/ui/sections/*`: cada módulo `renderXSection` devuelve el HTML de su bloque (Hero, About, Obras, Formas de trabajar, Proceso, Tech, Contacto, Footer).
- `src/js/ui/navbar.js`: scroll suave y marcado de sección activa con `IntersectionObserver`.
- `src/js/ui/contactForm.js`: validación accesible (aria-invalid, aria-describedby, aria-live), foco en primer error y foco en éxito.
- `src/js/ui/scrollReveal.js`: animación IAQUIZU con `.js-reveal` → `.is-visible`, stagger de 60ms por sección con tope 360ms, reveal único, Hero sin `.js-reveal`, respeta `prefers-reduced-motion` y fallback sin IO (todo visible).

## Roles de las secciones

- Hero: entrada silenciosa al portal.
- About (panel claro flotante): cámara interior donde IAQUIZU se presenta.
- Obras destacadas: piezas del universo (Obra-portal, Naturaleza Argentina, Ánima Prima, Verum Motus).
- Formas de trabajar: maneras de interactuar con el Octavo Arte.
- Proceso (Cómo trabajo): flujo interno en panel flotante y pasos secuenciales.
- Tech: pila tecnológica como soporte de la obra, no como CV.
- Contacto: canal para abrir proyectos/obras, no “trabajos freelance”.
- Footer: cierre de identidad.

## Principios

- Separación por responsabilidades: estilos en `styles/`, render en módulos de sección, UI en `src/js/ui`.
- Data-driven: secciones de obras/servicios/proceso/tech consumen datos desde `src/data`.
- Animación integrada: scrollReveal discreto, sin reanimar ni afectar Hero, respetando reduced motion.
- Accesibilidad integrada: estructura semántica, aria en formulario, focus visible unificado.
