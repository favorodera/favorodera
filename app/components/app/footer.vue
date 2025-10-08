<template>
  
  <UFooter>

    <template #left>
      <p class="text-sm text-muted">
        &copy; <NuxtTime
          :datetime="Date.now()"
          year="numeric"
        />
      </p>
    </template>

    <template #right>

      <div class="flex items-center gap-4">

        <ULink
          v-for="item, index in contact"
          :key="index"
          :to="item.to"
          target="_blank"
          active
          external
          class="**:transition-all hover:text-toned"
          :title="`My ${item.label}`"
        >

          <Icon
            :name="item.icon"
            class="size-4 shrink-0"
          />
        </ULink>
    
      </div>

    </template>

  </UFooter>

</template>

<script lang="ts" setup>
const { owner: { contact } } = useAppConfig()
</script>

<style scoped>

</style>
