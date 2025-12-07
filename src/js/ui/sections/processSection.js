import { processData } from '../../../data/processData.js'

export function renderProcessSection() {
  const processSteps = processData
    .map(
      (step, index) => `
        <li class="process-step js-reveal">
          <h3 class="process-step__title"><span class="process-step__index">${index + 1}.</span>${step.title}</h3>
          <p class="process-step__text">
            ${step.description}
          </p>
        </li>
      `
    )
    .join('')

  return `
    <section
      id="process"
      class="section section--alt process"
      aria-labelledby="process-title"
    >
      <header class="section__header js-reveal">
        <h2 id="process-title" class="section__title">Cómo trabajo</h2>
        <p class="section__subtitle">
          Acá ves cómo se mueve el trabajo por dentro. Es un proceso claro, silencioso y propio del Octavo Arte.
          No se trata de hacer más, sino de que cada obra encuentre su forma verdadera.
        </p>
      </header>

      <ol class="process__steps" aria-label="Pasos de mi forma de trabajo">
        ${processSteps}
      </ol>
    </section>
  `
}
