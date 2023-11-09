import { writable} from "svelte/store";


export const currentPage = writable('login');
export const forgotPassword = writable(true);
export const inputstore = writable('');


export const setinput = (value:string) => {
  inputstore.set(value);
};