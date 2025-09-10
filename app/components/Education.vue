<template>
  
  <section
    class="flex flex-col gap-y-3"
    :aria-labelledby="`${institution}-Heading`"
  >
    <div class="inline-flex flex-wrap gap-y-1 gap-x-4 justify-between items-end w-full">
      <h3
        :id="`${institution}-Heading`"
        class="text-lg font-bold min-w-fit"
      >
        {{ degree }}
      </h3>

      <p class="text-sm italic min-w-fit">
        {{ startDate }} - {{ endDate }}
      </p>
    </div>
   
    <p class="text-sm font-semibold leading-none">
      {{ institution }}
    </p>
    
  </section>

</template>

<script setup lang="ts">
defineProps<{
  institution: string
  degree: string
  startDate: string
  endDate: string
}>()
 
</script>
