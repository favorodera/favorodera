import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind CSS class names, resolving conflicts via `tailwind-merge`
 * and supporting conditional/array class syntax via `clsx`.
 *
 * @param inputs - Any number of class values (strings, arrays, objects, etc.)
 * @returns A single de-duplicated, conflict-resolved class string.
 *
 * @example
 * cn('px-4 py-2', condition && 'bg-primary', { 'text-white': isActive })
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
