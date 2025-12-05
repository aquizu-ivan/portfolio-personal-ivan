export function initNavbar() {
  const nav = document.querySelector('.site-nav')
  if (!nav) return

  const links = nav.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href')
      if (!targetId) return

      const targetElement = document.querySelector(targetId)
      if (!targetElement) return

      event.preventDefault()
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}
