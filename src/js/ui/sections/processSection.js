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
        <h2 id="process-title" class="section__title">Ritmo interno de una obra</h2>
        <p class="section__subtitle">
          Más que un método, es un ritmo.<br />
          Cada obra atraviesa estas etapas, siempre a su propio tiempo.
        </p>
      </header>

      <ol class="process__steps" aria-label="Pasos del ritmo interno de una obra">
        ${processSteps}
      </ol>
    </section>
  `
}
