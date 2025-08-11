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

        <NuxtLink
          type="button"
          class="flex items-center gap-2 b b-brand-textGray rounded-md px-2 px-2 py-1 py-1 text-[clamp(0.8rem,2vw,1rem)] hover:b-brand-textGray/70"
          to="#contact-section"
        >
          <NuxtIcon name="hugeicons:message-01" />
          <span>Let's Talk</span>

        </NuxtLink>

        <NuxtLink
          type="button"
          class="flex items-center gap-2 b b-brand-textGray rounded-md px-2 px-2 py-1 py-1 text-[clamp(0.8rem,2vw,1rem)] hover:b-brand-textGray/70"
          to="https://drive.google.com/file/d/1puDKhnluIQeFBYlOtjkozHLXbNMlBniW/view?usp=sharing"
          target="_blank"
        >
          <NuxtIcon name="hugeicons:document-attachment" />
          <span>Resume</span>

        </NuxtLink>

      </div>
            
    </section>

    <NuxtImg
      src="/avatar.jpg"
      class="size-[3rem] shrink-0 rounded-full"
      alt="Avatar"
      preload
    />

  </header>

</template>

<script setup lang="ts">

</script>

<style scoped lang="css">

</style>

