// colada.options.ts
import type { PiniaColadaOptions } from '@pinia/colada'

export default {
  queryOptions: {
    staleTime: 1000 * 60 * 60 * 24 * 7, // 1 week
  },
} satisfies PiniaColadaOptions
