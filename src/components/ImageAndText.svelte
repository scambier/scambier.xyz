<script lang="ts">
	export let imageHref: string;
	export let imageAlt: string = '';
</script>

<div class="flex flex-col md:flex-row mb-4 pt-4 md:pt-0">
	<img class="border border-stone-800 w-screen md:w-[24rem] self-center" src={imageHref} alt={imageAlt} />
	<span class="md:pl-4">
		<slot />
	</span>
</div>
