import { writable } from 'svelte/store';

const session = writable(null);

export default session;