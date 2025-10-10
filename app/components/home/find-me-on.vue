<template>

  <div class="space-y-2">

    <ol class="flex flex-wrap items-center gap-4">

      <li
        v-for="item, index in owner.contact"
        :key="index"
      >
        <ProseA
          :href="item.to"
          target="_blank"
          active
          external
          class="w-fit shrink-0 text-sm"
          :title="`My ${item.label}`"
        >

          <Icon
            :name="item.icon"
            class="mr-0.5 inline-block h-lh w-4 align-text-bottom"
          />
          {{ item.label }}

        </ProseA>

      </li>

    </ol>

    <p class="dark:text-muted">
      Or send me an email: <ProseA :href="`mailto:${owner.email}`">
        {{ owner.email }}
      </ProseA>
    </p>

  </div>

 
</template>

<script lang="ts" setup>
const { owner } = useAppConfig()
</script>
