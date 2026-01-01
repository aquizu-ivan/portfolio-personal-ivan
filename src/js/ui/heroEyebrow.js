export function initHeroEyebrowReveal() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  const hero = document.querySelector('#hero')
  const eyebrow = document.querySelector('.hero__eyebrow')

  if (!hero || !eyebrow) {
    return
  }

  hero.classList.add('hero--animate')
  eyebrow.classList.add('hero__eyebrow--animate')

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const reveal = () => {
    hero.classList.add('is-visible')
    eyebrow.classList.add('is-visible')
  }

  if (prefersReducedMotion) {
    reveal()
    return
  }

  if (typeof IntersectionObserver === 'undefined') {
    reveal()
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )

  observer.observe(hero)
}
