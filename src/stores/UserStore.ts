import { writable } from "svelte/store";

const user = writable({
  name: "John Doe",
  email: "john@exmaple.com",
});

export default user;
