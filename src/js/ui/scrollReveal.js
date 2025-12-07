export function initScrollReveal() {
  const revealElements = Array.from(document.querySelectorAll('.js-reveal'))
  if (!revealElements.length) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
    revealElements.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const REVEAL_DELAY_STEP_MS = 60
  const REVEAL_DELAY_MAX_MS = 360

  const sectionGroups = new Map()
  revealElements.forEach((el) => {
    const section = el.closest('.section') || document.body
    if (!sectionGroups.has(section)) {
      sectionGroups.set(section, [])
    }
    sectionGroups.get(section).push(el)
  })

  sectionGroups.forEach((elements) => {
    elements.forEach((el, index) => {
      const rawDelay = index * REVEAL_DELAY_STEP_MS
      const clampedDelay = Math.min(rawDelay, REVEAL_DELAY_MAX_MS)
      el.style.transitionDelay = `${clampedDelay}ms`
    })
  })

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
