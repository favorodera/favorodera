/**
 * A single social link entry — used for every platform in the profile config.
 */
export type Social = {
  /** Fully-qualified URL or `mailto:` link for the social channel. */
  url: string
  /** Hugeicons icon name used to render the platform icon. */
  icon: string
}

/**
 * Shape of the `profile` key in `app.config.ts`.
 * Augmented onto Nuxt's `AppConfig` via `augment.d.ts`.
 */
export type Profile = {
  /** Full display name shown in the hero section. */
  name: string
  /** Two-letter initials used as the avatar fallback. */
  initials: string
  /** Job title / role shown beneath the name. */
  role: string
  /** City / country shown next to the role. */
  location: string
  /** Absolute URL to the avatar image (e.g. GitHub profile picture). */
  avatar: string
  /** All social / contact channels keyed by platform slug. */
  socials: {
    email: Social
    github: Social
    linkedin: Social
    x: Social
  }
}
