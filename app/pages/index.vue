<template>
  
  <UPage>

    <UPageBody>

      <UContainer>

        <ContentRenderer
          v-if="page"
          :value="page"
        />

        <UError
          v-else
          :error="{
            statusCode: error?.statusCode || 500,
            statusMessage: error?.statusMessage || 'Internal Server Error',
            message: error?.message || 'Something went wrong!',
          }"
        />

      </UContainer>

    </UPageBody>

  </UPage>

</template>

<script setup lang="ts">
const { data: page, error } = await useAsyncData(
  'homeIndex',
  () => queryCollection('homeIndex').path('/').first(),
)
</script>
