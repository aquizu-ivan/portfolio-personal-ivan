# Especificación visual — Obra 2 · Portal IAQUIZU

Portal contemplativo del Octavo Arte: base oscura, paneles claros flotantes y ritmo silencioso (Hero → Obras → Formas de trabajar → Proceso → Tech → Contacto → Footer).

---

## Paleta y superficies

- Fondo principal: oscuro (`--color-bg-main`).
- Paneles claros (About, Proceso): `--color-bg-alt`, sombras suaves y radios amplios.
- Texto: `--color-text-main` en oscuro; `--color-text-inverse` sobre claros; muted para descripciones.
- Acento IAQUIZU: verde (`--color-accent-primary`) en detalles (números de pasos, pills, links); naranja secundario de apoyo.

## Tipografía y jerarquía

- Familias: `--font-family-base` (cuerpo) y `--font-family-heading` (títulos).
- Jerarquía: Hero/títulos de sección en escala heading; títulos de cards/pasos contenidos; cuerpo en tamaños base/SM; pesos suavizados en pasos de Proceso.
- Anchos de texto controlados (≈60ch) para lectura calmada.

## Paneles flotantes

- About: tarjeta clara con sombra suave, radio grande y padding amplio.
- Proceso: panel claro, cards ligeras, títulos suavizados; secuencia visual sin nodos llamativos.

## Espaciado y ritmo

- Secciones con padding vertical unificado (`calc(var(--space-xl) + var(--space-md))`), gaps consistentes.
- Encabezados: separación breve entre título/subtítulo y mayor respiro hacia el contenido.
- Grillas (Obras, Formas de trabajar, Tech) con gaps coherentes y breakpoints adaptativos.

## Interacción IAQUIZU

- Botones/pills: hover/active sutiles dentro de la paleta; sin escalados; sombras ligeras; focus-visible con halo de acento compartido.
- Enlaces: color IAQUIZU; hover con leve aclarado + subrayado discreto; focus-visible uniforme.

## Movimiento

- Hero estático (plano de silencio).
- ScrollReveal: respiración por sección (stagger 60ms, tope 360ms), reveal único, sin reanimar; `prefers-reduced-motion` o sin IO → todo visible sin animación.

## Responsive

- Mobile-first con breakpoints 768px/1024px/1200px para grillas y paneles.
- Contenido centrado, ancho máximo controlado (`--layout-max-width`); paneles flotantes mantienen aire en todos los tamaños.
