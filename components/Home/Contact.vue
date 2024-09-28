<template>
  <section
    class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8"
  >
    <div class="flex gap-2 text-4 font-700">
      <i class="i-heroicons-phone-solid" />
      <p class="w-37.5">
        CONTACT
      </p>
    </div>

    <div class="w-full flex flex-col gap-4">
      <ContactLine
        contact-type="Phone"
        contact-value="+234-802-438-3756"
        contact-url="tel:+234-802-438-3756"
        contact-icon="i-prime-mobile"
      />
      <ContactLine
        contact-type="Email"
        contact-value="favorodera@gmail.com"
        contact-url="mailto:favorodera@gmail.com"
        contact-icon="i-prime-envelope"
      />
      <ContactLine
        contact-type="Github"
        contact-value="favorodera"
        contact-url="https://github.com/favorodera"
        contact-icon="i-prime-github"
      />
      <ContactLine
        contact-type="X (Twitter)"
        contact-value="@favorodera"
        contact-url="https://x.com/favorodera"
        contact-icon="i-prime-twitter"
      />
      <ContactLine
        contact-type="LinkedIn"
        contact-value="favorodera"
        contact-url="https://www.linkedin.com/in/favorodera"
        contact-icon="i-prime-linkedin"
      />
    </div>
  </section>
</template>
