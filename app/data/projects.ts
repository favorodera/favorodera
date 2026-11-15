type Project = {
  description: string
  id: string
  title: string
  url: string
}

export const projects: Project[] = [
  {
    description: 'Headless, schema-agnostic form management for Vue and Nuxt.',
    id: 'notform',
    title: 'NotForm',
    url: 'https://notform.favorodera.dev',
  },
  {
    description: 'A minimal registry and CLI for distributing open code.',
    id: 'distkit',
    title: 'DistKit',
    url: 'https://github.com/favorodera/distkit',
  },
  {
    description: 'Type-safe SQLite table schemas generated from Zod schemas, with zero runtime overhead.',
    id: 'zod-sqlite',
    title: 'Zod-SQLite',
    url: 'https://github.com/favorodera/zod-sqlite',
  },
  {
    description: 'An opinionated, type-safe ESLint flat config for JavaScript and TypeScript projects.',
    id: 'eslint-config',
    title: '@favorodera/eslint-config',
    url: 'https://github.com/favorodera/eslint-config',
  },
]
