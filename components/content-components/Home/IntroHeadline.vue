<template>

  <header class="flex flex-col-reverse items-start justify-between gap-2">

    <section>

      <h1>
        <slot
          name="myName"
          mdc-unwrap="h1"
        />
      </h1>

      <p
        class="text-lg"
      >
        <slot
          name="intro"
          mdc-unwrap="p"
        />
      </p>

      <div class="mt-4 flex items-center gap-4">

        <button
          type="button"
          class="flex items-center gap-2 b b-brand-textGray rounded-md px-2 px-2 py-1 py-1 text-[clamp(0.8rem,2vw,1rem)] hover:b-brand-textGray/70"
        >
          <NuxtIcon name="hugeicons:message-01" />
          <span>Let's Talk</span>

        </button>

        <button
          type="button"
          class="flex items-center gap-2 b b-brand-textGray rounded-md px-2 px-2 py-1 py-1 text-[clamp(0.8rem,2vw,1rem)] hover:b-brand-textGray/70"
        >
          <NuxtIcon name="hugeicons:document-attachment" />
          <span>Resume</span>

        </button>

      </div>
            
    </section>

    <NuxtImg
      src="/images/avatar.jpeg"
      class="size-[3rem] shrink-0 rounded-full"
      alt="Avatar"
      preload
    />

    <!-- TODO: Add Navigation and resume links to the buttons -->

  </header>

</template>

<script setup lang="ts">

</script>

<style scoped lang="css">

</style>
