/**
 * Checks whether the user prefers reduced motion.
 * @returns `true` when reduced motion is preferred.
 */
function prefersReducedMotion() {
  return matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Provides theme state and controls.
 * @returns Theme labels and a toggle function.
 */
export default function useTheme() {
  const colorMode = useColorMode()

  const ariaLabel = computed(() => (
    colorMode.value === 'dark'
      ? 'Switch to light theme'
      : 'Switch to dark theme'
  ))

  const label = computed(() => (
    colorMode.value === 'dark' ? 'Dark' : 'Light'
  ))

  /**
   * Toggles the theme from the given interaction point.
   * @param revealOrigin Origin point for the reveal animation.
   * @param revealOrigin.x X-coordinate of the reveal origin.
   * @param revealOrigin.y Y-coordinate of the reveal origin.
   */
  async function toggle(revealOrigin: { x: number, y: number }) {
    const nextTheme = colorMode.value === 'dark' ? 'light' : 'dark'

    const canAnimate = !prefersReducedMotion() && typeof document.startViewTransition === 'function'

    if (!canAnimate) {
      colorMode.preference = nextTheme
      return
    }

    const revealRadius = Math.hypot(
      Math.max(revealOrigin.x, window.innerWidth - revealOrigin.x),
      Math.max(revealOrigin.y, window.innerHeight - revealOrigin.y),
    )

    const transition = document.startViewTransition(() => {
      // Keep the theme change synchronous so it is captured in the snapshot.
      document.documentElement.classList.toggle('dark', nextTheme === 'dark')
      document.documentElement.style.colorScheme = nextTheme
      colorMode.preference = nextTheme
    })

    try {
      await transition.ready

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${revealOrigin.x}px ${revealOrigin.y}px)`,
            `circle(${revealRadius}px at ${revealOrigin.x}px ${revealOrigin.y}px)`,
          ],
        },
        {
          duration: 620,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      )
    } catch {
      // The theme has already been applied.
    }
  }

  return {
    ariaLabel,
    label,
    toggle,
  }
}
