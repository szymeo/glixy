<script lang="ts">
	import Star from '$lib/elements/Shapes/Star.svelte';
	import Rectangle from '$lib/elements/Shapes/Rectangle.svelte';
	import Text from '$lib/elements/Text.svelte';
	import { Container, Sprite, Stage } from '$lib/index.js';
	import Example from './Example.svelte';

	let rotation = $state(0);

	$effect(() => {
		const clean = setInterval(() => {
			rotation += 0.15;
		}, 1000);

		return () => clearInterval(clean);
	});
</script>

{#snippet bunny(x: number, y: number)}
	<Sprite
		anchor={{ x: 0.5, y: 0.5 }}
		texture="https://pixijs.com/assets/bunny.png"
		{x}
		{y}
		{rotation}
	/>
{/snippet}

<Example>
	{#snippet children(host: HTMLElement, hostWidth: number, hostHeight: number)}
		<Stage {host} resizeTo={host} background="#111111" antialias={true}>
			<Container x={0} y={hostHeight / 2}>
				{@render bunny(hostWidth / 2, 0)}
			</Container>

			<Text
				text="Hello Glixy ✨"
				zIndex={10}
				scale={{ x: 0.5, y: 0.5 }}
				x={10}
				y={10}
			/>

			<Rectangle
				x={5}
				y={5}
				width={100}
				height={100}
				cornerRadius={50}
				background={{
					color: 0xef4444,
					opacity: 1,
				}}
				border={{
					color: 0xf59e0b,
					width: 5,
					rounded: true,
					opacity: 0.5,
				}}
			/>

			<Star
				x={hostWidth / 2}
				y={hostHeight / 3}
				zIndex={10}
				size={50}
				innerSize={23}
				points={5}
				background={{
					// golden
					color: 0xfbbf24,
					opacity: 1,
				}}
				border={{
					color: 0x3b82f6,
					width: 5,
					rounded: true,
					opacity: 1,
				}}
				cornerRadius={50}
			/>
		</Stage>
	{/snippet}
</Example>
