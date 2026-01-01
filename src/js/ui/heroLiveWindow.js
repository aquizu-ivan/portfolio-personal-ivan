export function initHeroLiveWindow() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  const container = document.querySelector('.hero__live-window')
  const canvas = document.querySelector('.hero__live-canvas')
  if (!container || !canvas) {
    return
  }

  const ctx = canvas.getContext('2d')
  if (!ctx) {
    return
  }

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const noiseCanvas = createNoiseCanvas(128)
  const driftPeriod = 11
  const breathePeriod = 13
  const noiseInterval = 800
  const signalDuration = 1500
  let signalStart = null
  let lastNoiseUpdate = 0
  let width = 0
  let height = 0
  let dpr = Math.min(window.devicePixelRatio || 1, 2)

  const getSignal = (timeMs) => {
    if (signalStart === null) {
      return 0
    }

    const elapsed = timeMs - signalStart
    if (elapsed >= signalDuration) {
      signalStart = null
      return 0
    }

    const progress = elapsed / signalDuration
    return Math.sin(progress * Math.PI)
  }

  const render = (timeMs) => {
    if (width === 0 || height === 0) {
      return
    }

    const t = timeMs / 1000
    const breathe = 0.5 + 0.5 * Math.sin((t / breathePeriod) * Math.PI * 2)
    const driftPhase = (t / driftPeriod) * Math.PI * 2
    const driftX = Math.sin(driftPhase) * width * 0.01
    const driftY = Math.cos(driftPhase * 0.9) * height * 0.01
    const signal = getSignal(timeMs)
    const signalLift = signal * height * 0.006

    if (noiseCanvas && timeMs - lastNoiseUpdate > noiseInterval) {
      updateNoiseCanvas(noiseCanvas)
      lastNoiseUpdate = timeMs
    }

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#0a0b0f'
    ctx.fillRect(0, 0, width, height)

    const base = ctx.createRadialGradient(
      width * (0.5 + driftX / width),
      height * (0.42 + driftY / height),
      0,
      width * 0.5,
      height * 0.45,
      Math.max(width, height) * 0.9
    )
    base.addColorStop(0, `rgba(32, 36, 44, ${0.34 + breathe * 0.03})`)
    base.addColorStop(0.45, 'rgba(14, 16, 20, 0.93)')
    base.addColorStop(1, 'rgba(5, 6, 8, 0.98)')
    ctx.fillStyle = base
    ctx.fillRect(0, 0, width, height)

    const cool = ctx.createRadialGradient(
      width * (0.22 + (driftX / width) * 0.4),
      height * (0.7 + (driftY / height) * 0.4),
      0,
      width * 0.22,
      height * 0.7,
      Math.max(width, height) * 0.7
    )
    cool.addColorStop(0, `rgba(80, 98, 118, ${0.03 + breathe * 0.02})`)
    cool.addColorStop(1, 'rgba(10, 12, 16, 0)')
    ctx.fillStyle = cool
    ctx.fillRect(0, 0, width, height)

    const amberX = width * 0.68 - driftX * 0.35
    const amberY = height * 0.38 + driftY * 0.35 - signalLift
    const amberCore = 0.05 + breathe * 0.004 + signal * 0.006
    const amberEdge = 0.018 + breathe * 0.003 + signal * 0.003
    const amber = ctx.createRadialGradient(
      amberX,
      amberY,
      0,
      width * 0.68,
      height * 0.38,
      Math.max(width, height) * 0.45
    )
    amber.addColorStop(0, `rgba(201, 155, 74, ${amberCore})`)
    amber.addColorStop(0.4, `rgba(201, 155, 74, ${amberEdge})`)
    amber.addColorStop(1, 'rgba(201, 155, 74, 0)')
    ctx.fillStyle = amber
    ctx.fillRect(0, 0, width, height)

    if (noiseCanvas) {
      ctx.save()
      ctx.globalAlpha = 0.035
      ctx.drawImage(noiseCanvas, 0, 0, width, height)
      ctx.restore()
    }
  }

  const resize = () => {
    const rect = container.getBoundingClientRect()
    const nextWidth = Math.max(1, Math.round(rect.width))
    const nextHeight = Math.max(1, Math.round(rect.height))
    const nextDpr = Math.min(window.devicePixelRatio || 1, 2)

    if (nextWidth === width && nextHeight === height && nextDpr === dpr) {
      return
    }

    width = nextWidth
    height = nextHeight
    dpr = nextDpr

    canvas.width = Math.max(1, Math.round(width * dpr))
    canvas.height = Math.max(1, Math.round(height * dpr))
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    render(getNow())
  }

  let hasEntered = false
  const triggerEntrance = (timeMs) => {
    if (hasEntered) {
      return
    }

    hasEntered = true
    if (!prefersReducedMotion) {
      signalStart = timeMs
    }
  }

  if (prefersReducedMotion) {
    triggerEntrance(getNow())
  } else if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerEntrance(getNow())
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(container)
  } else {
    triggerEntrance(getNow())
  }

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(resize)
    observer.observe(container)
  } else {
    window.addEventListener('resize', resize, { passive: true })
  }

  resize()

  if (!prefersReducedMotion) {
    const tick = (timeMs) => {
      render(timeMs)
      window.requestAnimationFrame(tick)
    }
    window.requestAnimationFrame(tick)
  }
}

function createNoiseCanvas(size) {
  const noiseCanvas = document.createElement('canvas')
  noiseCanvas.width = size
  noiseCanvas.height = size
  if (!updateNoiseCanvas(noiseCanvas)) {
    return null
  }
  return noiseCanvas
}

function updateNoiseCanvas(noiseCanvas) {
  const noiseCtx = noiseCanvas.getContext('2d')
  if (!noiseCtx) {
    return false
  }

  const { width, height } = noiseCanvas
  const imageData = noiseCtx.createImageData(width, height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const value = Math.floor(Math.random() * 255)
    data[i] = value
    data[i + 1] = value
    data[i + 2] = value
    data[i + 3] = 255
  }

  noiseCtx.putImageData(imageData, 0, 0)
  return true
}

function getNow() {
  if (typeof performance !== 'undefined' && performance.now) {
    return performance.now()
  }
  return Date.now()
}
