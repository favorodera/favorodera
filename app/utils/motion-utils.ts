import type { CSSProperties } from 'vue'
import { type MotionProps, stagger, type Transition } from 'motion-v'

/**
 * A collection of motion utilities for animations
 * @returns Motion-related constants, transitions, and variants
 */
export default function motionUtils() {
  /**
   * Cubic bezier easing curve for smooth, natural animations.
   * This curve provides a slight overshoot effect for more dynamic motion.
   */
  const EASE = [0.22, 1, 0.36, 1] as const

  /**
   * Standard duration for ease-based animations in seconds.
   * Used as the base timing for most transitions to ensure consistency.
   */
  const DURATION = 0.6

  /** {@linkcode DURATION} in milliseconds. */
  const DURATION_MS = DURATION * 1000

  /**
   * Stagger interval between animated children in seconds.
   * Creates a cascading effect when multiple elements animate in sequence.
   */
  const STAGGER = 0.06

  /**
   * Standard ease transition using the shared {@linkcode EASE} curve and {@linkcode DURATION}.
   * This is for most fade, slide, and scale animations
   */
  const ease = { duration: DURATION, ease: EASE } satisfies Transition

  /** {@linkcode ease} normalized as CSS properties */
  const easeCSS = {
    transitionDuration: `${DURATION * 1000}ms`,
    transitionTimingFunction: `cubic-bezier(${EASE.join(', ')})`,
  } satisfies Pick<CSSProperties, 'transitionDuration' | 'transitionTimingFunction'>

  /**
   * Spring transition for smooth, snappy animations with slight bounce.
   * This is for interactive elements and list items
   */
  const spring = {
    damping: 36,
    mass: 0.9,
    stiffness: 420,
    type: 'spring',
  } satisfies Transition

  /** Fade-in and slide-up effect for elements that enter from the bottom */
  const fadeInFromBottom = {
    hidden: { opacity: 0, y: '110%' },
    visible: { opacity: 1, transition: ease, y: '0%' },
  } satisfies MotionProps['variants']

  /** Fade-in and slide-left effect for elements that enter from the left */
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: '-110%' },
    visible: { opacity: 1, transition: ease, x: '0%' },
  } satisfies MotionProps['variants']

  /** Fade-in and slide-top effect for elements that enter from the top */
  const fadeInFromTop = {
    hidden: { opacity: 0, y: '-110%' },
    visible: { opacity: 1, transition: ease, y: '0%' },
  } satisfies MotionProps['variants']

  /**
   * Container variants - for parent sections
   * This staggers the children animations
   */
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { delayChildren: stagger(STAGGER) },
    },
  } satisfies MotionProps['variants']

  /** Empty variants for elements that don't need any animation */
  const emptyVariants = {
    hidden: {},
    visible: {},
  } satisfies MotionProps['variants']

  /**
   * Scale-in and fade-in effect along the horizontal axis.
   *
   * Direction depends entirely on the consuming element's `transform-origin`
   * — this variant only drives `scaleX`, it does not set an origin itself.
   * Pair with a CSS class like `origin-left` or `origin-right` to control
   * which edge it grows from (defaults to center if unset).
   */
  const scaleInX = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: { opacity: 1, scaleX: 1, transition: ease },
  } satisfies MotionProps['variants']

  /**
   * Wipe-reveal effect that grows diagonally from the bottom-left corner.
   *
   * Uses `clipPath: inset()` to collapse the element to a single point at
   * its bottom-left corner, then expands the clip rectangle outward to
   * reveal the full element toward the top-right.
   */
  const clipInFromBottomLeft = {
    hidden: { clipPath: 'inset(100% 100% 0% 0%)', opacity: 0 },
    visible: { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, transition: ease },
  } satisfies MotionProps['variants']

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

    // Variants
    clipInFromBottomLeft,
    containerVariants,
    emptyVariants,
    fadeInFromBottom,
    fadeInFromLeft,
    fadeInFromTop,
    scaleInX,
  }
}
