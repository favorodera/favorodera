<template>

  <header class="sticky top-0 z-50 flex h-(--ui-header-height) items-center bg-default/75 backdrop-blur">

    <UContainer class="flex max-w-screen-lg items-center justify-end gap-4">

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
        class="h-6 max-sm:hidden"
        :decorative="false"
      />
      

      <UButton
        v-for="item, index in navigation[1]"
        :key="index"
        :to="item.to"
        :title="`My ${item.label}`"
        :icon="item.icon"
        variant="link"
        color="neutral"
        external
        target="_blank"
        size="sm"
        class="p-0 max-sm:hidden"
      />
   

      <USeparator
        orientation="vertical"
        class="h-6"
        :decorative="false"
      />

      
      <UColorModeButton
        variant="link"
        class="p-0 max-sm:hidden"
        color="neutral"
      >
        <template #fallback>
          <UButton
            icon="ph:palette-duotone"
            variant="link"
            class="p-0 max-sm:hidden"
            color="neutral"
          />
        </template>

      </UColorModeButton>

      <UDropdownMenu
        :items="dropdownMenuItems"
        :content="{
          align: 'end',
        }"
        :ui="{
          content: 'dark:bg-muted ring-muted',
          viewport: 'divide-muted',
          itemLeadingIcon: 'size-5',
        }"
        class="sm:hidden"
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
    { label: 'Blog', to: '/posts', icon: 'ph:notebook-duotone' },
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
