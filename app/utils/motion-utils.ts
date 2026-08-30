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
  const ease: Transition = { duration: DURATION, ease: EASE }

  /** {@linkcode ease} normalized as CSS properties */
  const easeCSS: Pick<CSSProperties, 'transitionDuration' | 'transitionTimingFunction'> = {
    transitionDuration: `${DURATION * 1000}ms`,
    transitionTimingFunction: `cubic-bezier(${EASE.join(', ')})`,
  }

  /**
   * Spring transition for smooth, snappy animations with slight bounce.
   * This is for interactive elements and list items
   */
  const spring: Transition = {
    damping: 36,
    mass: 0.9,
    stiffness: 420,
    type: 'spring',
  }

  /** Fade-in and slide-up effect for elements that enter from the bottom */
  const fadeInFromBottom: MotionProps['variants'] = {
    hidden: { opacity: 0, y: '110%' },
    visible: { opacity: 1, transition: ease, y: '0%' },
  }

  /**
   * Container variants - for parent sections
   * This staggers the children animations
   */
  const containerVariants: MotionProps['variants'] = {
    hidden: {},
    visible: {
      transition: { delayChildren: stagger(STAGGER) },
    },
  }

  /** Empty variants for elements that don't need any animation */
  const emptyVariants: MotionProps['variants'] = {
    hidden: {},
    visible: {},
  }

  /** Scale-in and fade-up effect for elements that enter from the left */
  const scaleInFromLeft: MotionProps['variants'] = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: { opacity: 1, scaleX: 1, transition: ease },
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

    // Variants
    containerVariants,
    emptyVariants,
    fadeInFromBottom,
    scaleInFromLeft,
  }
}
