export default defineAppConfig({
  owner: {
    name: 'Favour Emeka',
    email: 'favourodera@gmail.com',
    contact: [
      { label: 'Call Me', icon: 'ph:phone-bold', to: 'tel:2348033045021' },
      { label: 'My X(Twitter)', icon: 'simple-icons:x', to: 'https://x.com/favourodera' },
      { label: 'My LinkedIn', icon: 'simple-icons:linkedin', to: 'https://linkedin.com/in/favourodera' },
      { label: 'My Facebook', icon: 'simple-icons:facebook', to: 'https://facebook.com/favourodera' },
      { label: 'My GitHub', icon: 'simple-icons:github', to: 'https://github.com/favourodera' },
    ],
  },
  ui: {
    colors: {
      primary: 'black',
      neutral: 'neutral',
    },
    icons: {
      light: 'ph:sun',
      dark: 'ph:moon',
    },
    formField: {
      slots: {
        label: 'font-medium',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
    },
    checkbox: {
      slots: {
        root: 'cursor-pointer',
      },
    },
    dropdownMenu: {
      slots: {
        item: 'cursor-pointer',
      },
    },
    input: {
      slots: {
        root: 'w-full',
      },
    },
    inputMenu: {
      slots: {
        root: 'w-full',
      },
    },
    inputNumber: {
      slots: {
        root: 'w-full',
      },
    },
    textarea: {
      slots: {
        root: 'w-full',
        base: 'resize-none',
      },
    },
    tabs: {
      slots: {
        trigger: 'cursor-pointer',
      },
    },
    selectMenu: {
      slots: {
        base: 'cursor-pointer text-start w-full',
        item: 'cursor-pointer',
      },
    },
    select: {
      slots: {
        base: 'cursor-pointer text-start w-full',
        item: 'cursor-pointer',
      },
    },
    inputTags: {
      slots: {
        base: 'w-full',
      },
    },
    navigationMenu: {
      slots: {
        link: 'cursor-pointer',
      },
    },
    fileUpload: {
      slots: {
        base: 'cursor-pointer',
      },
    },
    toast: {
      slots: {
        root: 'bg-elevated ring-0',
      },
    },
    commandPalette: {
      slots: {
        item: 'cursor-pointer',
      },
    },
  },
})
