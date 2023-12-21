import { writable, derived } from 'svelte/store'

export const two = writable(2);

export const one = writable(1);

export const sum = derived([one, two], ([$one, $two]) => $one + $two);