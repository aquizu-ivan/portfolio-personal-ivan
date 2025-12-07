# Obra 2 — Portal IAQUIZU

Portal contemplativo del Octavo Arte IAQUIZU. One-page data-driven que presenta al Origin Architect of the Eighth Art. No es un portfolio ni una landing comercial: es la entrada al universo IAQUIZU.

## Resumen
- Hero: entrada silenciosa.
- About: panel claro flotante donde IAQUIZU se presenta.
- Obras destacadas: Obra-portal, Naturaleza Argentina, Ánima Prima, Verum Motus.
- Formas de trabajar: maneras de abrir el sistema IAQUIZU en un proyecto.
- Cómo trabajo: flujo interno en panel flotante, pasos secuenciales.
- Tech: pila tecnológica como soporte, no como CV.
- Contacto: canal tranquilo para iniciar obra/colaboración.
- Footer: cierre de identidad.

## Movimiento y accesibilidad
- ScrollReveal IAQUIZU: stagger 60ms con tope 360ms, reveal único; Hero estático; respeta `prefers-reduced-motion` y fallback sin IO.
- Accesibilidad: landmarks y headings claros; navbar con sección activa por IO; formulario con aria-invalid/aria-describedby/aria-live, foco en error y en éxito; focus-visible unificado en enlaces/botones/pills.

## Stack y arquitectura
- Vite + JavaScript vanilla.
- `src/main.js`: orquestador que compone la página y luego inicializa navbar, contactForm y scrollReveal.
- Secciones en `src/js/ui/sections/*` (Hero, About, Obras, Formas de trabajar, Proceso, Tech, Contacto, Footer).
- Datos en `src/data/*` (obras, servicios, proceso, tech).
- UI helpers: `navbar.js`, `contactForm.js`, `scrollReveal.js`.
- CSS modular: `styles/base.css`, `layout.css`, `components.css`, `sections/*.css`.

## Cómo correr el proyecto
1) `npm install`
2) `npm run dev` (entorno de desarrollo)
3) `npm run build` (build de producción)
4) `npm run preview` (previsualizar el build)
