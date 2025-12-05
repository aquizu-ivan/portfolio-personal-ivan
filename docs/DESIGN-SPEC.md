Guía de decisiones visuales para el portfolio de IAQUIZU (Iván Aquizu), IA-Extended Visual Systems Architect.

---

## Paleta de colores (oficial)

- Fondo principal (secciones oscuras): `#0D0D0D`
- Fondo claro (secciones alternativas): `#F2F2F2`
- Texto principal en fondo oscuro: `#F2F2F2`
- Texto en fondo claro: `#0D0D0D`
- Acento verde (principal): `#00A676`
- Acento naranja (secundario): `#FF8A3D`
- Grises de apoyo: se derivan según necesidad (bordes, líneas, etc.)

---

## Tipografías

- **Inter** para textos en general (body, párrafos, labels).
- **Montserrat** para títulos, subtítulos y elementos destacados.

*(Se podrían ajustar según disponibilidad y performance, pero esta es la base oficial.)*

---

## Espaciado

- Base: `1rem`
- Secciones verticales: `4rem` arriba y abajo (mobile puede ser un poco menos).
- Grillas y layouts: `gap` base de `1.5rem`.

---

## Componentes UI base

### Cards
- Fondo ligeramente elevado sobre el fondo principal.
- Borde suave (radio moderado).
- Sombra mínima para dar profundidad sin ruido visual.
- Hover: ligera elevación + ajuste de color de borde o fondo.

### Botones
- Bordes redondeados.
- Usan colores de acento (verde principal, naranja para acciones secundarias).
- Transición suave en hover (color, sombra, escala ligera).

### Inputs
- Borde sutil y consistente.
- Fondo que contraste lo justo con el contexto.
- `:focus-visible` muy claro (borde o sombra verde/naranja) para accesibilidad.

---

## Animaciones y microinteracciones (a futuro)

- Fade-in suave al hacer scroll para secciones clave.
- Smooth scroll en la navegación al hacer clic en links de la one-page.
- Hover suave en cards y botones (sin animaciones agresivas).

---

## Responsive

- Enfoque **mobile-first**.
- Breakpoints de referencia:
  - `480px` -> móviles pequeños.
  - `768px` -> tablets / móviles grandes en horizontal.
  - `1024px` -> desktop.

La maquetación fino-responsiva se trabajará en tickets específicos (Responsive fino y Animaciones).

---

## Variables principales (tokens)

- `--color-bg-main`: fondo principal oscuro del sitio.
- `--color-accent-primary`: verde principal para links y acciones.
- `--color-accent-secondary`: naranja de apoyo para estados o llamados secundarios.
- `--color-text-main` y `--color-text-muted`: texto principal y descripciones sobre fondos oscuros.
- `--font-family-base` y `--font-family-heading`: tipografía de texto y títulos.
- `--font-size-base`: tamaño base para párrafos.
- `--line-height-base`: altura de línea global para legibilidad.
- `--space-md` y `--space-xl`: espaciado base para paddings/gaps y bloques grandes.
- `--layout-max-width`: ancho máximo del contenido principal.
- `--radius-pill`: radios redondeados para elementos como la skip link o pill buttons.
- `--shadow-soft`: sombra suave para elevar cards o superficies.

---

## Patrones de sección y componentes base

- `.section` centra el contenido, respeta el ancho máximo y aplica espaciado vertical consistente para cada bloque de la one-page.
- `.section__title` y `.section__subtitle` usan la escala tipográfica definida (heading vs. texto secundario) y limitan el ancho de las descripciones.
- Botones: `.btn` es la base; `.btn--primary` es verde relleno para acciones principales y `.btn--secondary` es bordeado para acciones secundarias.
- Cards: usan fondo `color-surface`, sombra suave y radios amplios; pensadas para agrupar información de proyectos/servicios.
- Pills: etiquetas pequeñas para tags o tecnologías; `.pill--accent` usa el acento verde.
