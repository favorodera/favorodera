<script setup lang="ts">
/**
 * Homepage — composes the full single-page portfolio layout.
 *
 * Section order:
 *  1. Header  — hero: avatar, bio, CTAs
 *  2. Projects — shipped projects list with expand/collapse
 *  3. Toolkit  — technology tags
 *  4. Timeline — experience & education tabs
 *  5. Contact  — social links
 *  6. Footer   — copyright + theme toggle
 */
</script>

<template>
  <!-- Root page container — child of <main id="main"> in app.vue -->
  <div>
    <!-- Hero  -->
    <Header />

    <!-- Projects list  -->
    <Projects />

    <!-- Tech stack badges  -->
    <Toolkit />

    <!-- Experience / Education timeline  -->
    <Timeline />

    <!-- Contact channels  -->
    <Contact />

    <!-- Footer: copyright + theme toggle  -->
    <Footer />
  </div>
</template>
