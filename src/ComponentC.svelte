<script>
  import { getContext } from 'svelte';

  const user = getContext('user');
</script>

<h2>ComponentC</h2>
<h3>ユーザ</h3>
<div>name:{$user.name}</div>
