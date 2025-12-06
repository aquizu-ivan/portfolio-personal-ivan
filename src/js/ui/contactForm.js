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
      setError(nameInput, nameError, 'Por favor, escribi tu nombre.')
      firstInvalid = firstInvalid || nameInput
    }

    const emailValue = emailInput.value.trim()
    if (!emailValue) {
      setError(emailInput, emailError, 'Por favor, escribi tu email.')
      firstInvalid = firstInvalid || emailInput
    } else if (!emailPattern.test(emailValue)) {
      setError(emailInput, emailError, 'Ingresa un email valido (ejemplo@dominio.com).')
      firstInvalid = firstInvalid || emailInput
    }

    const messageValue = messageInput.value.trim()
    if (!messageValue || messageValue.length < 10) {
      setError(messageInput, messageError, 'Contame un poco mas sobre tu proyecto (minimo 10 caracteres).')
      firstInvalid = firstInvalid || messageInput
    }

    if (firstInvalid) {
      firstInvalid.focus()
      return
    }

    form.reset()
    successMessage.textContent =
      'Tu mensaje se valido correctamente. Por ahora este formulario no envia datos, pero esta listo para conectarse a un backend.'
    successMessage.focus()
  })
}
