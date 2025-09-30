<!-- Page header for personal info and contact links -->
<template>
  <header
    aria-labelledby="personal-info-heading"
    class="flex justify-between min-[375px]:items-center w-full gap-4 flex-col-reverse min-[375px]:flex-row items-start"
  >

    <h2
      id="personal-info-heading"
      class="sr-only"
    >
      Personal Information
    </h2>

    <section
      class="flex-auto space-y-1.5"
      aria-labelledby="name"
    >
      
      <h1
        id="name"
        class="text-2xl font-bold"
      >
        {{ name }}
      </h1>

      <p
        class="max-w-md text-sm text-pretty"
      >
        {{ headline }}
      </p>

      <div
        class="items-center max-w-md text-xs text-pretty inline-flex gap-x-1.5"
        role="text"
        aria-label="Current location"
      >
        <UIcon
          name="lucide:globe"
        />
        <span>{{ location }}</span>
      </div>

      <nav
        class="flex gap-x-1.5"
        aria-label="Contact links and resume download"
      >
        <UTooltip
          v-for="(contact, index) in contacts"
          :key="index"
          :text="contact.label"
          :ui="{ content: 'flex' }"
        >
          <UButton
            :to="contact.url"
            size="md"
            :icon="contact.icon"
            variant="outline"
            color="neutral"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Contact via ${contact.label} (opens in new tab)`"
          />
        </UTooltip>

        <UTooltip
          text="Download Resume"
          :ui="{ content: 'flex' }"
        >
          <UButton
            size="md"
            icon="lucide:download"
            variant="outline"
            color="neutral"
            aria-label="Download resume as PDF"
            @click="downloadResume"
          />
        </UTooltip>

      </nav>

    </section>

    <div class="flex-shrink-0">
      <NuxtImg
        width="130"
        height="130"
        sizes="100vw sm:50vw md:300px"
        :src="avatar"
        class="rounded-lg drop-shadow-md"
        :alt="`Avatar of ${name}`"
        loading="eager"
        fetchpriority="high"
      />
    </div>

  </header>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  headline: string
  location: string
  avatar: string
  contacts: {
    label: string
    url: string
    icon: string
  }[]
}>()

/**
 * Triggers download of the resume PDF.
 */
function downloadResume() {
  // Creates and clicks a download link for resume PDF
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.download = 'Favour_Emeka_Frontend_Web_Developer_Resume.pdf'
    
  document.body.appendChild(link)
  link.click()
    
  document.body.removeChild(link)
}
</script>
