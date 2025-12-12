const buildMailtoLink = ({ name, email, message }) => {
  const subject = 'Contacto — IAQUIZU'
  const body = `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}\n\n—\nEnviado desde Portal IAQUIZU`

  const params = new URLSearchParams({
    subject,
    body,
  })

  return `mailto:ivanaquizu@gmail.com?${params.toString()}`
}

export function initContactForm() {
  const form = document.querySelector('.contact-form')
  if (!form) return

  const nameInput = form.querySelector('#contact-name')
  const emailInput = form.querySelector('#contact-email')
  const messageInput = form.querySelector('#contact-message')

  const nameError = form.querySelector('#contact-name-error')
  const emailError = form.querySelector('#contact-email-error')
  const messageError = form.querySelector('#contact-message-error')

  const successMessage = form.querySelector('#contact-success')

  if (!nameInput || !emailInput || !messageInput || !nameError || !emailError || !messageError || !successMessage) {
    return
  }

  const clearState = () => {
    nameError.textContent = ''
    emailError.textContent = ''
    messageError.textContent = ''
    successMessage.textContent = ''

    nameInput.removeAttribute('aria-invalid')
    emailInput.removeAttribute('aria-invalid')
    messageInput.removeAttribute('aria-invalid')
  }

  const setError = (input, errorElement, message) => {
    errorElement.textContent = message
    input.setAttribute('aria-invalid', 'true')
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    clearState()

    let firstInvalid = null
    const emailPattern = /^\S+@\S+\.\S+$/

    const nameValue = nameInput.value.trim()
    if (nameValue.length < 2) {
      setError(nameInput, nameError, 'Escribí tu nombre (mínimo 2 caracteres).')
      firstInvalid = firstInvalid || nameInput
    }

    const emailValue = emailInput.value.trim()
    if (!emailValue) {
      setError(emailInput, emailError, 'Necesito un correo para poder responderte.')
      firstInvalid = firstInvalid || emailInput
    } else if (!emailPattern.test(emailValue)) {
      setError(emailInput, emailError, 'El email no parece válido. Revisá que tenga el formato nombre@ejemplo.com.')
      firstInvalid = firstInvalid || emailInput
    }

    const messageValue = messageInput.value.trim()
    if (messageValue.length < 10) {
      setError(messageInput, messageError, 'Escribí al menos 10 caracteres para entender mejor lo que buscás.')
      firstInvalid = firstInvalid || messageInput
    }

    if (firstInvalid) {
      firstInvalid.focus()
      return
    }

    const mailto = buildMailtoLink({
      name: nameValue,
      email: emailValue,
      message: messageValue,
    })

    successMessage.textContent = 'Abriendo tu correo con el mensaje pre-cargado.'
    successMessage.focus()
    window.location.href = mailto
  })
}
