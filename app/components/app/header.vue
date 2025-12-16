<template>
  <UHeader
    title=""
    :ui="{
      center: 'hidden sm:flex gap-4',
      root: 'border-none',
      toggle: 'sm:hidden',
      content: 'sm:hidden',
      overlay: 'sm:hidden',
    }"
  >


    <ULink
      v-for="item, index in navigation"
      :key="index"
      :to="item.to"
      :title="item.label"
    >
    
      <UIcon
        :name="item.icon"
        class="size-5.5"
      />

    </ULink>
 

    <template #right>

      <UButton
        icon="ph:read-cv-logo"
        color="neutral"
        variant="ghost"
        title="Read My Resume"
        @click="downloadResume"
      />

      <UColorModeButton
        variant="ghost"
        color="neutral"
        title="Toggle Color Mode"
      >
        <template #fallback>
          <UButton
            icon="ph:palette"
            variant="link"
            color="neutral"
          />
        </template>

      </UColorModeButton>

    </template>

    <template #body>

      <UNavigationMenu
        :items="navigation"
        orientation="vertical"
        class="-mx-2.5"
        variant="link"
        :unmount-on-hide="false"
      />

    </template>

  </UHeader>

</template>

<script setup lang="ts">
const navigation = computed(() => ([

  { label: 'Home', to: '/', icon: 'ph:house-duotone' },
  { label: 'Projects', to: '/projects', icon: 'ph:brackets-angle-duotone' },
  { label: 'Articles', to: '/articles', icon: 'ph:notebook-duotone' },
  { label: 'Bookmarks', to: '/bookmarks', icon: 'ph:bookmark-duotone' },
]))

function downloadResume() {
  const link = document.createElement('a')
  link.href = '/Favour_Emeka_Frontend_Web_Developer_Resume.pdf'
  link.download = 'Favour_Emeka_Frontend_Web_Developer_Resume.pdf'
    
  document.body.appendChild(link)
  link.click()
    
  document.body.removeChild(link)
}
</script>

