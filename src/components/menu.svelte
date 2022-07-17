<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { plausible } from '../analytics';


	onMount(() => {
		plausible.enableAutoPageviews();
	});
</script>

<header class="m-4">
	<div class="flex justify-center items-center divide-x">
		<a
			href="/tools"
			class="px-4 border-b border-b-transparent hover:border-b-indigo-500"
			class:border-b-indigo-500={$page.routeId === 'tools'}
		>
			Tools &amp;&nbsp;libs
		</a>
		<a
			href="/games"
			class="px-4 border-b border-b-transparent hover:border-b-indigo-500"
			class:border-b-indigo-500={$page.routeId === 'games'}
		>
			Games
		</a>
		<a
			href="/creative"
			class="px-4 border-b border-b-transparent hover:border-b-indigo-500"
			class:border-b-indigo-500={$page.routeId === 'creative'}
		>
			Creative coding
		</a>
		<a
			href="/oddities"
			class="px-4 border-b border-b-transparent hover:border-b-indigo-500"
			class:border-b-indigo-500={$page.routeId === 'oddities'}
		>
			Cabinet&nbsp;of oddities
		</a>
	</div>
</header>
