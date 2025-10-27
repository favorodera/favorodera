<template>
  
  <UFooter>

    <template #left>
      <p class="text-sm text-muted">
        &copy; <NuxtTime
          :datetime="Date.now()"
          year="numeric"
        /> | Favour Emeka
      </p>
    </template>

    <template #right>
      <ul class="flex flex-wrap items-center">

        <li
          v-for="item, index in owner.contact"
          :key="index"
        >
          <UButton
            :to="item.to"
            target="_blank"
            active
            external
            :icon="item.icon"
            :title="`My ${item.label}`"
            variant="link"
            size="sm"
          />

        </li>

        <li>
          <UButton
            :to="`mailto:${owner.email}`"
            target="_blank"
            active
            external
            icon="simple-icons:gmail"
            title="My Email"
            variant="link"
            size="sm"
          />

        </li>

      </ul>
    </template>

  </UFooter>

</template>

<script lang="ts" setup>
const { owner } = useAppConfig()
</script>
