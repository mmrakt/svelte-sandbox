<script>
  import { beforeUpdate, onMount, onDestroy, afterUpdate } from 'svelte';

  beforeUpdate(() => {
    console.log('beforeUpdate execute');
  });
  onMount(() => {
    console.log('onMount execute');
  });
  afterUpdate(() => {
    console.log('afterUpdate execute');
  });
  onDestroy(() => {
    console.log('onDestroy execute');
  });
  console.log('script execute');
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<h2>Counterコンポーネント</h2>
<div>
  <p>カウント:{count}</p>
</div>
<div>
  <button on:click={increment}>Up</button>
</div>
