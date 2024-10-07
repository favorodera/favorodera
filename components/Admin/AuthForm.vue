<template>
  <div class="max-w-lg w-full flex flex-col items-center gap-4">
    <Button
      as="router-link"
      to="/"
      label="Home"
      icon="i-heroicons-home-solid"
      pt:root:class="p-1 bg-#1c1c1c hover:bg-gray/10 decoration-none text-white b-0 h-8 px-3 w-max self-start"
      pt:label:class="font-bold"
    />
    <form
      action=""
      class="w-full flex flex-col items-center gap-8 b-1 b-gray/20 rounded-2 b-solid px-2 py-5 sm:p-6"
    >
      <header class="grid place-items-center gap-1">
        <i class="i-heroicons-lock-closed h-8 w-8 text-white" />
        <h2 class="text-center text-2xl text-white font-700">
          Welcome Back!
        </h2>
      </header>
      <InputGroup pt:root="h-10">
        <InputGroupAddon
          :pt="{
            root: { class: 'bg-#27272a b-0 h-full b-r-1 b-black b-solid' },
          }"
        >
          <i class="i-heroicons-user-solid" />
        </InputGroupAddon>
        <InputText
          v-model="state.email"
          placeholder="me@example.com"
          type="email"
          pt:root:class="h-full pl-2 b-0"
        />
      </InputGroup>

      <InputGroup pt:root="h-10">
        <InputGroupAddon
          :pt="{
            root: { class: 'bg-#27272a b-0 h-full b-r-1 b-black b-solid' },
          }"
        >
          <i class="i-heroicons-lock-closed-solid" />
        </InputGroupAddon>
        <Password
          v-model="state.password"
          placeholder="my5P@$sword"
          :feedback="false"
          input-class="pl-2 b-0 h-full"
        />
      </InputGroup>

      <Button
        :disabled="state.password === '' || state.email === '' || state.email !== 'favorodera@gmail.com'"
        label="Submit"
        icon-pos="right"
        pt:root:class="p-5 bg-#1c1c1c hover:bg-gray/10 decoration-none text-white b-0 h-8 px-3 w-max "
        pt:label:class="font-bold"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
const state
  = reactive({
    email: '',
    password: '',
  })
</script>
