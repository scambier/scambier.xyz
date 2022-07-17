<script lang="ts">

	export let href: string;
</script>

<a
	{href}
	target="__blank"
	rel="external"
	class="underline underline-offset-2 decoration-indigo-500"
>
	<slot />
  <!-- <Icon icon="mdi-light:arrow-square-out" /> -->
	<!-- <span class="inline w-auto arrow-square-out icon" /> -->
</a>
