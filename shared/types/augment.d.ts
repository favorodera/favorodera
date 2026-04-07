import type { Profile } from './app'

declare module 'nuxt/schema' {
  interface AppConfigInput {
    /** Optional override — makes `profile` configurable per Nuxt layer. */
    profile?: Profile
  }

  interface AppConfig {
    /** Strongly-typed profile data sourced from `app.config.ts`. */
    profile: Profile
  }
}

export {}
