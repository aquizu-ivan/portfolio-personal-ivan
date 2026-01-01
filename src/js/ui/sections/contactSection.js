export function renderContactSection() {
  return `
    <section id="contact" class="section section--contact">
      <header class="section__header js-reveal">
        <h2 class="section__title">Contacto</h2>
        <p class="section__subtitle">
          Si algo de IAQUIZU resuena con lo que querés construir, escribime.
        </p>
      </header>

      <div class="section__body contact js-reveal">
        <p class="contact__intro">
          Podés contarme el tipo de sistema, obra o contexto. Con una idea clara alcanza.
        </p>

        <form class="contact-form" novalidate>
          <div class="contact-form__field">
            <label for="contact-name">Nombre</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autocomplete="name"
              placeholder="Tu nombre"
              required
              aria-describedby="contact-name-error contact-help contact-trust"
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
              inputmode="email"
              placeholder="tu@email.com"
              required
              aria-describedby="contact-email-error contact-help contact-trust"
            />
            <p class="contact-form__error" id="contact-email-error" aria-live="polite"></p>
          </div>

          <div class="contact-form__field">
            <label for="contact-message">Mensaje</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              minlength="10"
              placeholder="Contame qué querés abrir: objetivo, contexto y alcance."
              required
              aria-describedby="contact-message-error contact-help contact-trust"
            ></textarea>
            <p class="contact-form__error" id="contact-message-error" aria-live="polite"></p>
          </div>

          <button type="submit" class="btn btn--primary">Iniciar contacto</button>
          <p class="contact-form__hint" id="contact-help">Se abrirá tu correo con el mensaje pre-cargado.</p>
          <p class="contact-form__hint" id="contact-trust">Respuesta en 24–48 hs. Sin spam.</p>

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