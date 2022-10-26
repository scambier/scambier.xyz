<script>
	import '../../app.css';
	import TitleH2 from '../../components/title-h2.svelte';
	import ExternalLink from '../../components/ExternalLink.svelte';
	import ImageAndText from '../../components/ImageAndText.svelte';
</script>

<TitleH2>Games</TitleH2>

<div class="max-w-4xl divide-y divide-stone-600 md:divide-y-0">
	<ImageAndText imageHref="/images/n0mbers.png" imageAlt="A screenshot of the game N0mbers">
		<ExternalLink href="https://n0mbers.scambier.xyz">N0mbers</ExternalLink> - Combine the required numbers to reach the result. Made with Vue 3 and Tailwinds.
	</ImageAndText>

	<ImageAndText imageHref="/images/motus.png" imageAlt="A screenshot of the game Mo-mo-motus">
		<ExternalLink href="/momomotus">Mo-Mo-Motus</ExternalLink> - A French-speaking clone of Wordle. Features
		a new word at noon and midnight (CET). Made with Vue 3 and Tailwinds.
	</ImageAndText>

	<ImageAndText imageHref="/images/drop.gif" imageAlt="The title screen of the game 'Drop'">
		<ExternalLink href="/drop">Drop</ExternalLink> - An infinite runner. Drop and bounce on the blocks,
		break them, rise your combo and stay on the screen. Made in PICO-8.
	</ImageAndText>
</div>


