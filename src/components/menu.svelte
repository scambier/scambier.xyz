<script>
	import { getStores, navigating, page, session, updated } from '$app/stores';
	// console.log($page);
</script>

<header class="m-4">
	<div class="flex justify-center items-center divide-x">
		<a
			href="/tools"
			class="px-4 border-b border-b-transparent hover:border-b-white"
			class:border-b-white={$page.routeId === 'tools'}>
			Tools &amp;&nbsp;libs
		</a>
    <a
    href="/games"
    class="px-4 border-b border-b-transparent hover:border-b-white"
    class:border-b-white={$page.routeId === 'games'}>
    Games
  </a>
		<a
			href="/creative"
			class="px-4 border-b border-b-transparent hover:border-b-white"
			class:border-b-white={$page.routeId === 'creative'}>
			Creative coding
		</a>
		<a
			href="/oddities"
			class="px-4 border-b border-b-transparent hover:border-b-white"
			class:border-b-white={$page.routeId === 'oddities'}>
			Cabinet&nbsp;of oddities
		</a>
	</div>
</header>
