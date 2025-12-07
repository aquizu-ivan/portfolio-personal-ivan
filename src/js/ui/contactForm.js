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

    if (!nameInput.value.trim()) {
      setError(nameInput, nameError, 'Por favor, escribí tu nombre para saber cómo dirigirme a vos.')
      firstInvalid = firstInvalid || nameInput
    }

    const emailValue = emailInput.value.trim()
    if (!emailValue) {
      setError(emailInput, emailError, 'Necesito un correo para poder responderte. Escribí una dirección de email.')
      firstInvalid = firstInvalid || emailInput
    } else if (!emailPattern.test(emailValue)) {
      setError(emailInput, emailError, 'El email no parece válido. Revisá que tenga el formato nombre@ejemplo.com.')
      firstInvalid = firstInvalid || emailInput
    }

    const messageValue = messageInput.value.trim()
    if (!messageValue) {
      setError(
        messageInput,
        messageError,
        'Contame algo de lo que querés construir o explorar. No dejes este campo vacío.'
      )
      firstInvalid = firstInvalid || messageInput
    } else if (messageValue.length < 10) {
      setError(
        messageInput,
        messageError,
        'Escribí un poco más para que pueda entender mejor qué tenés en mente (mínimo 10 caracteres).'
      )
      firstInvalid = firstInvalid || messageInput
    }

    if (firstInvalid) {
      firstInvalid.focus()
      return
    }

    form.reset()
    successMessage.textContent =
      'Tu mensaje se validó correctamente. Por ahora este formulario no envía datos, pero está listo para conectarse a un backend cuando sea necesario.'
    successMessage.focus()
  })
}
