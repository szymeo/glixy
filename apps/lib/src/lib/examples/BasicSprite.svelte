<script lang="ts">
	import { Container, Sprite, Stage } from '$lib/elements/index.js';
	import Example from './Example.svelte';

	const { host, hostWidth, hostHeight } = $props();
</script>

{#snippet bunny(x: number, y: number)}
	<Sprite
		anchor={{ x: 0.5, y: 0.5 }}
		texture="https://pixijs.com/assets/bunny.png"
		{x}
		{y}
	/>
{/snippet}

<Example>
	<Stage {host} resizeTo={host} background="#111111" antialias={true}>
		<Container x={0} y={hostHeight / 2}>
			{@render bunny(hostWidth / 3, 0)}
			{@render bunny(hostWidth / 2, 0)}
			{@render bunny((hostWidth / 3) * 2, 0)}
		</Container>
	</Stage>
</Example>
