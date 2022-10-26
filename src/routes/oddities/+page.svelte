<script lang="ts">
	import TitleH2 from '../../components/title-h2.svelte';
	import ExternalLink from '../../components/ExternalLink.svelte';
	import ImageAndText from '../../components/ImageAndText.svelte';

	const items = [
		{
			name: 'Lines',
			href: '/lines/',
			image: 'lines_0.gif',
			description:
				'Move your mouse, see the connections (dis)appear, attract points, make a cluster.'
		},
		{
			name: 'E̶͙͍̍M̶̰̔͝B̶͓̠̅͝Ȑ̴̮̝̽Ã̶͓̿C̸͎̓͝E̴̖͐',
			href: '/embrace/',
			image: 'embrace_1.gif',
			description:
				'Fill the screen - Embrace the corruption<br>Erase thorns with the arrow keys, change colors with <code>c</code>.'
		},
		{
			name: 'Ping-Pang',
			href: '/pingpang/',
			image: 'pingpang_2.gif',
			description:
				'I bet the black ball will end up winning.<br>Enable screenshake with <code>x</code>, change colors with <code>c</code>.'
		},
		{
			name: 'Trump tweets',
			href: '/trump/',
			image: 'markov_example.png',
			description: `A Donald Trump tweets generator, almost as coherent as the original!<br>
    Refresh the page for a new tweet. Uses a database of pre-generated Markov chain tweets`
		}
	];
</script>

<div>
	<TitleH2>Cabinet of oddities</TitleH2>
    <p class="mb-2">
        Weird interactive toys. Click on their link to play.
    </p>
	<div class="max-w-4xl divide-y divide-stone-600 md:divide-y-0">
		{#each items as link}
			<ImageAndText imageHref={`/images/${link.image}`}>
				<ExternalLink href={link.href}>{link.name}</ExternalLink> -
				{@html link.description}
			</ImageAndText>
		{/each}
	</div>
</div>
