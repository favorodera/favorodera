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

  </UFooter>

</template>
