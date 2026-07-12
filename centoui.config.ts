import { defineConfig } from 'centoui'

export default defineConfig({
  componentsDir: 'app/components/centoui',
  icons: {
    check: 'lucide:check',
    chevronDoubleLeft: 'lucide:chevrons-left',
    chevronDoubleRight: 'lucide:chevrons-right',
    chevronDown: 'lucide:chevron-down',
    chevronLeft: 'lucide:chevron-left',
    chevronRight: 'lucide:chevron-right',
    chevronUp: 'lucide:chevron-up',
    ellipsis: 'lucide:ellipsis',
    minus: 'lucide:minus',
    plus: 'lucide:plus',
    x: 'lucide:x',
  },
  themeFilePath: 'app/assets/css/centoui.css',
})
