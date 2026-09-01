<script setup lang="ts">
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui'

const openModel = defineModel<boolean>({ default: false })
</script>

<template>
  <CollapsibleRoot
    v-model:open="openModel"
    class="mbs-5"
  >
    <Motion
      as="ul"
      animate="visible"
      initial="hidden"
    >
      <slot
        name="visible"
        :open="openModel"
      />

      <li>
        <CollapsibleContent
          force-mount
          as-child
        >
          <Motion
            as="ul"
            :initial="false"
            :animate="{
              height:openModel ? 'auto' : 0,
              opacity:openModel ? 1 : 0
            }"
            class="overflow-hidden"
          >
            <slot name="hidden" />
          </Motion>
        </CollapsibleContent>
      </li>
    </Motion>

    <Motion
      class="flex items-center justify-end border-bs border-border pbs-4"
      :initial="{opacity: 0, y: '110%'}"
      :while-in-view="{opacity: 1, y: '0'}"
      :in-view-options="{once:true, margin:'-5% 0% -5% 0%'}"
    >
      <CollapsibleTrigger
        class="
          p-0.5 text-2xs transition-colors outline-none

          hover:text-foreground

          focus-visible:ring-1 focus-visible:ring-ring
        "
      >
        See {{ openModel ? 'less' : `all` }}
      </CollapsibleTrigger>
    </Motion>
  </CollapsibleRoot>
</template>
