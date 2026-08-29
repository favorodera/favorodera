import { type MotionProps, stagger, type Transition } from 'motion-v'

/**
 * Motion utilities and animation variants for consistent animations across the portfolio.
 * Provides centralized timing constants, transitions, and reusable animation variants.
 * @returns Object containing all motion utilities, transitions, and variants
 */
export default function motionUtils() {
  /**
   * Cubic bezier easing curve for smooth, natural animations.
   * Imported everywhere so no single part of the page invents its own timing.
   */
  const EASE = [0.22, 1, 0.36, 1] as const

  /** Standard duration for ease-based animations in seconds. */
  const DURATION = 0.6

  /** Stagger interval between animated children in seconds. */
  const STAGGER = 0.06

  /** Standard ease transition using the shared EASE curve and DURATION. */
  const ease: Transition = { duration: DURATION, ease: EASE }

  /**
   * Spring transition with bouncy, natural physics.
   * Configured for smooth, snappy animations.
   */
  const spring: Transition = {
    damping: 36,
    mass: 0.9,
    stiffness: 420,
    type: 'spring',
  }

  /**
   * Default options for in-view animations.
   * Triggers when element is 72px into viewport and only animates once.
   */
  const IN_VIEW_OPTIONS: MotionProps['inViewOptions'] = { margin: '-72px', once: true }

  /**
   * Section shell variants that orchestrate children in sequence.
   * Children animate with staggered delays based on DURATION.
   */
  const sectionVariants: MotionProps['variants'] = {
    hidden: {},
    visible: {
      transition: { delayChildren: stagger(DURATION) },
    },
  }

  /**
   * Text mask line variants for text travelling up out of a clipping frame.
   * Creates a "printing" effect where text appears to type out.
   */
  const maskLineVariants: MotionProps['variants'] = {
    hidden: { y: '115%' },
    visible: { transition: ease, y: '0%' },
  }

  /**
   * Hairline divider variants that draw open from their left edge.
   * Creates a smooth line drawing effect.
   */
  const hairlineVariants: MotionProps['variants'] = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.7, ease: EASE } },
  }

  /**
   * List row variants with support for dynamic staggering.
   * The `custom` prop carries an offset so rows revealed later (during list expansion)
   * still arrive one after another with proper timing.
   * @param offset Optional offset for stagger timing (default: 0)
   */
  const rowVariants: MotionProps['variants'] = {
    exit: { opacity: 0, transition: { duration: 0.2, ease: EASE }, y: -6 },
    hidden: { opacity: 0, y: 10 },
    visible: (offset = 0) => ({
      opacity: 1,
      transition: { ...spring, delay: (offset as number) * STAGGER },
      y: 0,
    }),
  }

  /**
   * Portrait frame variants that open from the lower edge.
   * Creates a reveal effect using clip-path animation.
   */
  const frameVariants: MotionProps['variants'] = {
    hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: { duration: 0.72, ease: EASE },
    },
  }

  /** Simple fade variants for basic opacity transitions. */
  const fadeVariants: MotionProps['variants'] = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  /**
   * Collapsible content variants — expands/collapses height with a synced fade.
   * Meant to be used with `force-mount` on CollapsibleContent so the element stays
   * in the DOM and we drive the animation ourselves via `open` instead of Reka's
   * default instant show/hide.
   */
  const collapsibleVariants: MotionProps['variants'] = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { height: { ...ease, delay: 0.1 }, opacity: ease },
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: { height: ease, opacity: { ...ease, delay: 0.1 } },
    },
  }

  return {
    // Constants
    DURATION,
    EASE,
    STAGGER,

    // Transitions
    ease,
    spring,

    // Options
    IN_VIEW_OPTIONS,

    // Variants
    collapsibleVariants,
    fadeVariants,
    frameVariants,
    hairlineVariants,
    maskLineVariants,
    rowVariants,
    sectionVariants,
  }
}
