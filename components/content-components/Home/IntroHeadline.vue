<template>

  <header class="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row">

    <section>

      <h1 class="text-brand-textWhite text-[clamp(2rem,8vw,3rem)] font-bold">
        <slot
          name="myName"
          mdc-unwrap="h1"
        />
      </h1>

      <p class="text-brand-textGray max-w-[40rem] text-[clamp(1rem,3vw,1.2rem)]">
        <slot
          name="intro"
          mdc-unwrap="p"
        />
      </p>

      <div class="mt-4 flex items-center gap-4">

        <button
          type="button"
          class="b-brand-textGray text-brand-textWhite hover:shadow-brand-textGray flex items-center gap-2 b rounded-md px-2 px-2 py-1 py-1 text-[clamp(0.8rem,2vw,1rem)] shadow"
        >
          <NuxtIcon name="hugeicons:message-01" />
          <span>Let's Talk</span>

        </button>

        <button
          type="button"
          class="b-brand-textGray text-brand-textWhite hover:shadow-brand-textGray flex items-center gap-2 b rounded-md px-2 px-2 py-1 py-1 text-[clamp(0.8rem,2vw,1rem)] shadow"
        >
          <NuxtIcon name="hugeicons:document-attachment" />
          <span>Resume</span>

        </button>

      </div>
            
    </section>

    <NuxtImg
      src="/images/avatar.jpg"
      class="size-[clamp(8rem,10vw,10rem)] shrink-0 rounded-full"
    />

  </header>

</template>

<script setup lang="ts">

</script>

<style scoped lang="css">

</style>
