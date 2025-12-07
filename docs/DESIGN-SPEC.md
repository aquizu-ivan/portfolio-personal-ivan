# Especificación visual — Obra 2 · Portal IAQUIZU

Portal contemplativo del Octavo Arte: base oscura, paneles claros flotantes y ritmo silencioso de secciones (Hero → Obras → Formas de trabajar → Proceso → Tech → Contacto → Footer).

---

## Paleta y superficies

- Fondo principal: oscuro (`--color-bg-main`).
- Paneles claros flotantes (About, Proceso): `--color-bg-alt`, sombras suaves y radios amplios.
- Texto: `--color-text-main` en oscuro; `--color-text-inverse` sobre claros; muted para descripciones.
- Acento IAQUIZU: verde (`--color-accent-primary`) en detalles (números de pasos, pills, links); naranja secundario para apoyo.

## Tipografía y jerarquía

- Familias: `--font-family-base` para cuerpo; `--font-family-heading` para títulos.
- Jerarquía: Hero y títulos de sección en escala heading; títulos de cards/pasos más contenidos; cuerpo en tamaños base/SM; pesos suavizados en pasos del Proceso.
- Anchos de texto controlados (≈60ch) para lectura calmada.

## Paneles flotantes

- About: tarjeta/panel claro con sombra suave y radio grande; padding amplio.
- Proceso: panel claro, cards ligeras, títulos suavizados; secuencia visual sin nodos llamativos.

## Espaciado y ritmo

- Secciones con padding vertical unificado (`calc(var(--space-xl) + var(--space-md))`), gaps consistentes.
- Header/subtítulo/contenido con separación breve entre encabezados y mayor respiro hacia el cuerpo.
- Grillas (Obras, Formas de trabajar, Tech) con gaps coherentes entre secciones y breakpoints.

## Interacción IAQUIZU

- Botones/pills: hover/active sutiles dentro de la paleta; sin escalados; sombras ligeras; focus-visible con halo de acento.
- Enlaces: color IAQUIZU, hover con leve aclarado + subrayado discreto; focus-visible con halo compartido.

## Movimiento

- Hero estático (plano de silencio).
- ScrollReveal como respiración por sección: stagger 60ms con tope 360ms, reveal único, sin reanimar; `prefers-reduced-motion` o sin IO → todo visible sin animación.

## Responsive

- Mobile-first con breakpoints en 768px/1024px/1200px para grillas y paneles flotantes.
- Contenido centrado y máximo ancho controlado (`--layout-max-width`); About/Proceso mantienen la flotación y aire en todos los tamaños.
