export default defineAppConfig({
  owner: {
    name: 'Favour Emeka',
    email: 'favorodera@gmail.com',
    contact: [
      { label: 'X(Twitter)', icon: 'simple-icons:x', to: 'https://x.com/favorodera' },
      { label: 'LinkedIn', icon: 'simple-icons:linkedin', to: 'https://linkedin.com/in/favorodera' },
      { label: 'Facebook', icon: 'simple-icons:facebook', to: 'https://facebook.com/favorodera' },
      { label: 'GitHub', icon: 'simple-icons:github', to: 'https://github.com/favorodera' },
    ],
  },
  ui: {
    prose: {
      // Headings
      h1: {
        slots: {
          base: 'text-2xl mb-4',
        },
      },
      h2: {
        slots: {
          base: 'mb-2 text-xl',
        },
      },
      h3: {
        slots: {
          base: 'text-lg',
        },
      },
      h4: {
        slots: {
          base: '',
        },
      },

      // Paragraph
      p: {
        base: 'my-4 dark:text-muted',
      },

      // Links
      a: {
        base: 'border-b-2 border-muted font-semibold no-underline transition-colors ease-out hover:border-default dark:text-muted',
      },

      // Strong
      strong: {
        base: 'dark:text-default',
      },

      // Code
      code: {
        base: 'text-sm',
      },

      // Pre/Code blocks
      pre: {
        slots: {
          base: 'text-default',
        },
      },

      // Lists
      ol: {
        base: 'dark:text-muted',
      },
      ul: {
        base: 'dark:text-muted',
      },

      // Table
      table: {
        slots: {
          root: 'block overflow-x-scroll',
        },
      },

      // Images
      img: {
        slots: {
          base: 'rounded-lg border border-default dark:border-muted',
        },
      },

      // Figure
      figure: {
        base: 'rounded-lg bg-elevated dark:bg-muted',
      },

      // Figcaption
      figcaption: {
        base: 'm-0 py-1 text-center',
      },

      // Video
      video: {
        base: 'rounded-lg border border-default dark:border-muted',
      },

      // Horizontal rule
      hr: {
        base: 'mx-auto my-8 max-w-1/2',
      },
    },

    colors: {
      primary: 'black',
      neutral: 'neutral',
    },
    icons: {
      light: 'ph:sun',
      dark: 'ph:moon',
      external: 'ph:arrow-up-right',
      loading: 'ph:circle-notch',
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
