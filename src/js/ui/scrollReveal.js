export function initScrollReveal() {
  const revealElements = Array.from(document.querySelectorAll('.js-reveal'))
  if (!revealElements.length) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
    revealElements.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.25 }
  )

  revealElements.forEach((el) => observer.observe(el))
}
