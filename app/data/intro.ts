import { projects } from './projects'

export type InlineLink = {
  href: string
  label: string
}

export type InlineSegment = InlineLink | string

function projectLink(id: string): InlineLink {
  const project = projects.find((item) => {
    return item.id === id
  })

  if (!project) {
    throw new Error(`Unknown project id: ${id}`)
  }

  return { href: project.url, label: project.title }
}

export const intro: InlineSegment[][] = [
  ['I’m a frontend engineer who builds type-safe interfaces and the developer tooling around them, mostly with Vue, Nuxt and TypeScript. I care about APIs that are hard to misuse and interfaces that stay out of the way.'],
  [
    'Right now my focus is open source. I maintain ',
    projectLink('notform'),
    ', a headless form library for Vue and Nuxt.',
  ],
]
