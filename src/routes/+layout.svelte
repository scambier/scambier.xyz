<script>
	import '../app.css';
	import Menu from '../components/menu.svelte';
    
</script>

<Menu />
<div class="overflow-y-auto flex-1 p-2">
	<slot />
</div>
