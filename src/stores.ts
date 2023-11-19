import { writable } from "svelte/store";
export const currentPage = writable('login');
export const inputStore = writable('');


export const setInput = (value: string) => {
  inputStore.set(value);
};