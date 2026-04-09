/** App-level runtime configuration. */
export default defineAppConfig({
  icons: {
    mode: 'svg',
  },

  profile: {
    name: 'Favour Emeka',
    initials: 'FE',
    role: 'Frontend Developer',
    location: 'Nigeria',
    avatar: 'https://github.com/favorodera.png',
    socials: {
      email: {
        url: 'mailto:favorodera@gmail.com',
        icon: 'hugeicons:mail-01',
      },
      github: {
        url: 'https://github.com/favorodera',
        icon: 'hugeicons:github',
      },
      linkedin: {
        url: 'https://linkedin.com/in/faorodera',
        icon: 'hugeicons:linkedin-01',
      },
      x: {
        url: 'https://x.com/favorodera',
        icon: 'hugeicons:new-twitter',
      },
    },

  } as const,
})
