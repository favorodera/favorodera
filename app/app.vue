<template>
  <UApp
    tabindex="-1"
    :toaster="{
      expand: false,
      position: 'top-center',
      progress: false,
      duration: 3000,
    }"
  >
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator
      color="white"
      error-color="red"
    />

    <Header />
    
    <UMain>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      
    </UMain>

    <Footer />

  </UApp>

</template>
