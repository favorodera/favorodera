<template>
  
  <UPage>

    <UContainer>

      <template v-if="toolbox">

        <UPageHeader
          title="Toolbox"
          description="An overview of the tools and technologies i use."
        />


        <UPageBody>


          <ul
            v-for="box, key in toolbox.boxes"
            :key
            class="space-y-4"
          >

            <li>

              <ToolboxHeader :title="useChangeCase(String(key), 'capitalCase').value" />

            </li>


            <li
              v-for="item, index in box"
              :key="index"
            >
            
              <ToolboxItem v-bind="item" />
            
            </li>


          </ul>


          <AppSurround :left="{ path: '/', text: 'Back to Home' }" />

         
        </UPageBody>

      </template>

      <UError
        v-else
        :error="{
          statusCode: error?.statusCode || 500,
          statusMessage: error?.statusMessage || 'Internal Server Error',
          message: error?.message || 'Something went wrong!',
        }"
      />

    </UContainer>
  </UPage>

</template>

<script setup lang="ts">
import { useChangeCase } from '@vueuse/integrations/useChangeCase'

const { data: toolbox, error } = await useAsyncData(
  'toolbox',
  () => queryCollection('toolbox')
    .first(),
)
</script>
