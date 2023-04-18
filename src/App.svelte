<script>
  import ComponentA from './ComponentA.svelte';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  const user = writable({
    name: 'John Doe',
    email: 'john@example.com',
  });

  setContext('user', user);

  const changeName = () => {
    $user.name = 'Jane Doe';
  };
</script>

<main>
  <h1>Context API</h1>
  <button on:click={changeName}>change Name</button>
  <ComponentA />
</main>

<style>
</style>
