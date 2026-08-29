import type { Transition } from 'motion-v'
import type { CSSProperties } from 'vue'

/**
 * Core motion utilities with global timing constants and easing functions.
 * Individual components should define their own animation variants as needed.
 * @returns The foundational values for consistent animations across the portfolio.
 * @example
 * ```vue
 * <script setup>
 * const motion = motionUtils()
 * </script>
 *
 * <template>
 *   <Motion
 *     :initial="{ opacity: 0, y: 20 }"
 *     :animate="{ opacity: 1, y: 0 }"
 *     :transition="motion.ease"
 *   >
 *     Content
 *   </Motion>
 * </template>
 * ```
 */
export default function motionUtils() {
  /**
   * Cubic bezier easing curve for smooth, natural animations.
   * This curve provides a slight overshoot effect for more dynamic motion.
   * Values: [x1, y1, x2, y2] where control points create the ease-out effect.
   */
  const EASE = [0.22, 1, 0.36, 1] as const

  /**
   * Standard duration for ease-based animations in seconds.
   * Used as the base timing for most transitions to ensure consistency.
   */
  const DURATION = 0.6

  /**
   * Standard duration for ease-based animations in milliseconds.
   * Used as the base timing for most transitions to ensure consistency.
   */
  const DURATION_MS = DURATION * 1000

  /**
   * Stagger interval between animated children in seconds.
   * Creates a cascading effect when multiple elements animate in sequence.
   */
  const STAGGER = 0.06

  /**
   * Standard ease transition using the shared EASE curve and DURATION.
   * Use this for most fade, slide, and scale animations where a smooth
   * controlled motion is desired.
   */
  const ease: Transition = { duration: DURATION, ease: EASE }

  /**
   * CSS properties for ease-based animations.
   * Use this for most fade, slide, and scale animations where a smooth
   * controlled motion is desired.
   */
  const easeCSS: Pick<CSSProperties, 'transitionDuration' | 'transitionTimingFunction'> = {
    transitionDuration: `${DURATION * 1000}ms`,
    transitionTimingFunction: `cubic-bezier(${EASE.join(', ')})`,
  }

  /**
   * Spring transition with bouncy, natural physics.
   * Configured for smooth, snappy animations with slight bounce.
   * Use this for interactive elements, list items, and content that
   * should feel responsive and lively.
   *
   * Physics parameters:
   * - stiffness: 420 (higher = snappier, more responsive)
   * - damping: 36 (higher = less bounce, more controlled)
   * - mass: 0.9 (lower = lighter, faster movement)
   */
  const spring: Transition = {
    damping: 36,
    mass: 0.9,
    stiffness: 420,
    type: 'spring',
  }

  return {
    // Constants
    DURATION,
    DURATION_MS,
    EASE,
    STAGGER,

    // Transitions
    ease,
    easeCSS,
    spring,
  }
}
