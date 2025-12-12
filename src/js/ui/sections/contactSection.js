export function renderContactSection() {
  return `
    <section id="contact" class="section section--contact">
      <header class="section__header js-reveal">
        <h2 class="section__title">Contacto</h2>
        <p class="section__subtitle">
          Si alguna parte del universo IAQUIZU resuena con lo que querés abrir, podemos conversar en silencio primero y en palabras después.
        </p>
      </header>

      <div class="section__body contact js-reveal">
        <p class="contact__intro">
          Podés contarme qué tipo de obra, espacio o contexto tenés en mente.<br />
          La idea puede estar abierta: alcanza con la intuición correcta.
        </p>

        <form class="contact-form" novalidate>
          <div class="contact-form__field">
            <label for="contact-name">Nombre</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autocomplete="name"
              required
              aria-describedby="contact-name-error"
            />
            <p class="contact-form__error" id="contact-name-error" aria-live="polite"></p>
          </div>

          <div class="contact-form__field">
            <label for="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autocomplete="email"
              required
              aria-describedby="contact-email-error"
            />
            <p class="contact-form__error" id="contact-email-error" aria-live="polite"></p>
          </div>

          <div class="contact-form__field">
            <label for="contact-message">Mensaje</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              required
              aria-describedby="contact-message-error"
            ></textarea>
            <p class="contact-form__error" id="contact-message-error" aria-live="polite"></p>
          </div>

          <button type="submit" class="btn btn--primary">Enviar mensaje</button>

          <p class="contact-form__success" id="contact-success" aria-live="polite" role="status" tabindex="-1"></p>
        </form>

        <p class="contact__alt">
          También podés escribirme directamente a
          <a href="mailto:ivanaquizu@gmail.com">ivanaquizu@gmail.com</a>.
        </p>
      </div>
    </section>
  `
}
