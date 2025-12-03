Este documento organiza todos los tickets del proyecto, su estado, fechas, dependencias y notas.  
Forma parte del **Flujo Oficial**.

---

## 📌 Estado de los tickets
- 🟦 Pendiente  
- 🟨 En progreso  
- 🟩 Completado (mergeado en main)

---

## 📋 Lista oficial de tickets

| Nº | Ticket                                          | Estado | Rama | Bloques | Dependencias        | Fecha |
|----|-------------------------------------------------|--------|------|---------|---------------------|-------|
| 1  | Setup inicial del proyecto                      | 🟩     | feature/ticket-1-setup-inicial | A/B | Ninguna| 03/12  |
| 2  | Sistema visual (paleta, tipografías, variables) | 🟩     | feature/ticket-2-sistema-visual| A/B | 1 |  03/12|
| 3  | Sección Hero                                    | 🟩     | feature/ticket-3-hero  | A/B/C   | 2 | 03/12 |
| 4  | Sección Sobre mí                                | 🟩     | feature/ticket-4-sobre-mi | A/B/C | 2| 03/12     |
| 5  | Proyectos destacados                            | 🟦     | -    | A/B/C   | 2                   | -     |
| 6  | Servicios / Lo que ofrezco                      | 🟦     | -    | A/B     | 2                   | -     |
| 7  | Cómo trabajo (timeline)                         | 🟦     | -    | A/B     | 2                   | -     |
| 8  | Tecnologías                                     | 🟦     | -    | A/B     | 2                   | -     |
| 9  | Contacto                                        | 🟦     | -    | A/B/C   | 2                   | -     |
| 10 | Footer                                          | 🟦     | -    | A/B     | 2                   | -     |
| 11 | Accesibilidad (alt, aria, focus)                | 🟦     | -    | A/B     | 3–10                | -     |
| 12 | Responsive fino                                 | 🟦     | -    | A/B/C   | 3–11                | -     |
| 13 | Animaciones / microinteracciones                | 🟦     | -    | A/B     | 12                  | -     |
| 14 | Performance (imágenes, CSS)                     | 🟦     | -    | A/B     | 3–13                | -     |
| 15 | README profesional                              | 🟦     | -    | A/B     | 14                  | -     |
| 16 | Deploy                                          | 🟦     | -    | A       | 15                  | -     |

---

## 📝 Notas importantes

- Todos los tickets se deben realizar con el **Flujo Oficial**: rama → bloques → prompts → PR → revisión global.
- Actualizar este archivo cada vez que:
  - comenzás un ticket,
  - cambiás el estado,
  - mergeás un PR.
- Este documento es la **fuente de verdad** del proyecto.