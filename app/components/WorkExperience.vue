<template>
  
  <section
    class="flex flex-col gap-y-3"
    :aria-labelledby="`${company}-Heading`"
  >
    <div class="inline-flex flex-wrap gap-y-1 gap-x-4 justify-between items-end w-full">
      <h3
        :id="`${company}-Heading`"
        class="text-lg font-bold min-w-fit"
      >
        {{ company }}
      </h3>

      <p class="text-sm italic min-w-fit">
        {{ startDate }} - {{ endDate }}
      </p>
    </div>
   
    <h4 class="text-base font-semibold leading-none">
      {{ role }}
    </h4>
    
    <p class="text-sm">
      {{ description }}
    </p>

    <ul
      v-if="achievements"
      class="ml-4 text-sm list-disc list-inside text-pretty"
    >
      <li
        v-for="(achievement, index) in achievements"
        :key="index"
      >
        {{ achievement }}
      </li>
    </ul>
  </section>

</template>

<script setup lang="ts">
defineProps<{
  company: string
  role: string
  startDate: string
  endDate: string
  description: string
  achievements?: string[]
}>()
 
</script>
