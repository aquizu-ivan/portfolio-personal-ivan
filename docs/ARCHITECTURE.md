Este documento describe la estructura oficial del proyecto según el **Flujo Oficial** para el portfolio de IAQUIZU (Iván Aquizu), IA-Extended Visual Systems Architect. La one-page presenta sus sistemas visuales y obras digitales como carta de presentación para clientes y estudios creativos.

---

## Estructura de carpetas (estado actual)

```txt
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
    - components/
      - nav.js
      - footer.js
```

## Descripción rápida

/src/assets: imágenes, iconos y fuentes organizadas en subcarpetas (img, icons, fonts).

/src/styles: hojas de estilo globales (base.css, layout.css, components.css) y /sections para cada bloque de la one-page (hero, about, projects, services, process, tech, contact).

/src/js: utilidades de UI (ui/) y componentes reutilizables (components/).

/src/main.js: punto de entrada que monta el contenedor principal y aplica los estilos base.

/index.html: documento HTML root, enlaza el bundle de Vite y define el contenedor #app.

## Principios arquitectónicos

Separación por responsabilidades

- Estilos en módulos (base, layout, components, sections).
- JS en módulos y componentes reutilizables (ui, components).
- HTML con estructura semántica clara y mínima (una sola página con secciones).

Diseño escalable

- Evitar archivos gigantes.
- Preferir dividir en piezas pequeñas y coherentes.

Evitar duplicación

- Helpers de UI compartidos.
- Animaciones centralizadas (módulos reutilizables).
- Variables CSS centralizadas (se definen en el sistema visual).

Accesibilidad integrada

- Estructura semántica por secciones.
- Manejo de alt, aria-label, role y foco visible en tickets dedicados.

## JS — Organización oficial

/src/main.js: inicialización general de la app (monta la shell principal).

/src/js/components/: piezas reutilizables (nav, footer, tarjetas, etc.).

/src/js/ui/: utilidades de UI (domReady, manejo de eventos, animaciones, etc.).
