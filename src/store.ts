import { writable } from 'svelte/store'
import type { Method } from './utils/types'

export const selectedMethod = writable<Method | undefined>(undefined)