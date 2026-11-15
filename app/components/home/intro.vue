<script setup lang="ts">
import { type InlineLink, type InlineSegment, intro } from '~/data/intro'
import { profile } from '~/data/profile'
import { socials } from '~/data/socials'

const contactLinks: InlineLink[] = [
  ...socials.map(({ label, url }) => {
    return { href: url, label }
  }),
  { href: `mailto:${profile.email}`, label: 'send me an email' },
]

const linksByLabel = new Map(contactLinks.map((link) => {
  return [link.label, link]
}))

const contactParagraph: InlineSegment[] = [
  'You can find me on ',
  ...new Intl.ListFormat('en-GB', { style: 'long', type: 'disjunction' })
    .formatToParts(contactLinks.map((link) => {
      return link.label
    }))
    .map((part) => {
      if (part.type === 'element') {
        return linksByLabel.get(part.value) ?? part.value
      }

      return part.value
    }),
  '.',
]

const paragraphs: InlineSegment[][] = [...intro, contactParagraph]

function isWebLink(href: string) {
  return href.startsWith('https')
}
</script>

<template>
  <BaseSection class="flex flex-col gap-5 text-sm">
    <p
      v-for="(paragraph, paragraphIndex) in paragraphs"
      :key="paragraphIndex"
    >
      <template
        v-for="(segment, segmentIndex) in paragraph"
        :key="segmentIndex"
      >
        <template v-if="typeof segment === 'string'">
          {{ segment }}
        </template>

        <BaseButton
          v-else
          variant="text"
          as-child
        >
          <NuxtLink
            :external="isWebLink(segment.href)"
            :to="segment.href"
            :target="isWebLink(segment.href) ? '_blank' : undefined"
            rel="noopener"
          >
            {{ segment.label }}
          </NuxtLink>
        </BaseButton>
      </template>
    </p>
  </BaseSection>
</template>
