<script lang="ts">
	import ExternalLink from '../../components/ExternalLink.svelte';
	import TitleH2 from '../../components/title-h2.svelte';
	import ImageAndText from '../../components/ImageAndText.svelte';
</script>

<TitleH2>Tools & librairies</TitleH2>

<div class="max-w-4xl divide-y divide-stone-600 md:divide-y-0">
	<ImageAndText
		imageHref="/images/omnisearch.png"
		imageAlt="A screenshot of the Omnisearch plugin, showing results for the 'search' query. The results are ordered by relevance.">
		<ExternalLink href="https://github.com/scambier/obsidian-omnisearch">Omnisearch</ExternalLink> - An Obsidian
		search plugin that "<i>just works</i>". It always instantly shows you the most relevant results,
		thanks to its smart weighting algorithm.
	</ImageAndText>

	<ImageAndText
		imageHref="/images/markov_example.png"
		imageAlt="A fake Donald Trump tweet that reads: Congressman Ted Yoho of Florida is so embarrassed by their total (100%) support of Hillary Clinton, and they're increasingly aware of the fact that Boris is exactly what the U.K. has been looking for, & will prove to be a great event of television!">
		<ExternalLink href="https://github.com/scambier/markov-strings">Markov Strings</ExternalLink> + <ExternalLink
			href="https://github.com/scambier/markov-strings-rust">its Rust port</ExternalLink> - A simplistic,
		configurable, Markov chain text generator. Give it an array of strings, and it will output a randomly
		generated string.
	</ImageAndText>
</div>

<TitleH2>Gamedev tools</TitleH2>
<div class="max-w-4xl">
    <p class="mb-2">
        Most of those tools revolve around <ExternalLink href="https://tic80.com/">TIC-80</ExternalLink>, a free,
        open source "fantasy console"
    </p>
	<ul class="list-disc list-outside ml-4">
		<li>
			<ExternalLink href="https://github.com/scambier/tic80-typescript">TIC80-TypeScript</ExternalLink> - A TypeScript
			bundler for TIC-80 games.
		</li>
		<li>
			<ExternalLink href="https://github.com/scambier/TQ-Bundler">TQ-Bundler</ExternalLink> - A fast bundler/watcher/launcher
			for your TIC-80 projects. Supports all TIC-80 languages.
		</li>
		<li>
			<ExternalLink href="https://github.com/scambier/ecs-machina">ECS Machina</ExternalLink> - An Entity-Component-System
			engine, compatible with TIC-80
		</li>
	</ul>
</div>
