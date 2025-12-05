export function initNavbar() {
  const nav = document.querySelector('.site-nav')
  if (!nav) return

  const links = nav.querySelectorAll('a[href^="#"]')

  const sections = Array.from(links)
    .map((link) => {
      const targetId = link.getAttribute('href')
      if (!targetId) return null
      const targetElement = document.querySelector(targetId)
      if (!targetElement) return null
      return { section: targetElement, href: targetId }
    })
    .filter(Boolean)

  const setActiveNavLink = (href) => {
    links.forEach((link) => {
      link.classList.remove('site-nav__link--active')
      link.removeAttribute('aria-current')
    })

    const activeLink = Array.from(links).find((link) => link.getAttribute('href') === href)
    if (activeLink) {
      activeLink.classList.add('site-nav__link--active')
      activeLink.setAttribute('aria-current', 'true')
    }
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href')
      if (!targetId) return

      const targetElement = document.querySelector(targetId)
      if (!targetElement) return

      event.preventDefault()
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveNavLink(targetId)
    })
  })

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = sections.find((item) => item.section === entry.target)
            if (matched) {
              setActiveNavLink(matched.href)
            }
          }
        })
      },
      {
        root: null,
        threshold: 0.35,
      }
    )

    sections.forEach((item) => observer.observe(item.section))
  }
}
