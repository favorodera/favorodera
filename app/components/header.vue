<template>

  <header class="sticky top-0 z-50 flex h-(--ui-header-height) items-center bg-default/75 backdrop-blur">

    <UContainer class="flex items-center justify-end gap-4">

      <UButton
        v-for="item, index in navigation[0]"
        :key="index"
        :to="item.to"
        :title="item.label"
        :icon="item.icon"
        variant="link"
        color="neutral"
        class="p-0"
      />

      <USeparator
        orientation="vertical"
        class="hidden h-6 lg:flex"
        :decorative="false"
      />
      

      <UButton
        v-for="item, index in navigation[1]"
        :key="index"
        :to="item.to"
        :title="item.label"
        :icon="item.icon"
        variant="link"
        color="neutral"
        external
        target="_blank"
        size="sm"
        class="hidden p-0 lg:inline"
      />
   

      <USeparator
        orientation="vertical"
        class="h-6"
        :decorative="false"
      />

      
      <UColorModeButton
        variant="link"
        class="hidden p-0 lg:flex"
        color="neutral"
      >
        <template #fallback>
          <UButton
            icon="ph:palette-duotone"
            variant="link"
            class="hidden p-0 lg:flex"
            color="neutral"
          />
        </template>

      </UColorModeButton>

      <UDropdownMenu
        :items="dropdownMenuItems"
        arrow
        size="sm"
        :content="{
          align: 'end',
        }"
        class="lg:hidden "
      >

        <UButton
          icon="ph:dots-three-bold"
          variant="link"
          color="neutral"
          class="p-0"
        />

        <template #color-mode>
          <UColorModeButton
            variant="link"
            class="p-0"
            color="neutral"
            :label="useColorMode().preference === 'dark' ? 'Dark Mode' : 'Light Mode'"
          />
        </template>

      </UDropdownMenu>

    </UContainer>

  </header>

</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const { owner: { contact } } = useAppConfig()

const navigation = computed(() => ([

  [
    { label: 'Home', to: '/', icon: 'ph:house-duotone' },
    { label: 'Blog', to: '/blog', icon: 'ph:notebook-duotone' },
    { label: 'Projects', to: '/projects', icon: 'ph:brackets-angle-duotone' },
    { label: 'Ask Me Anything', to: '/ama', icon: 'ph:chat-circle-dots-duotone' },
    { label: 'Resume', to: 'https://resume.favorodera.com', icon: 'ph:file-text-duotone' },
  ],

  [...contact],

]))

const dropdownMenuItems = computed<DropdownMenuItem[][]>(() => [

  [
    ...contact.map(item => ({
      ...item,
      target: '_blank',
    })),
  ],

  [
    {
      slot: 'color-mode' as const,
      type: 'label',
    },
  ],

])

</script>
