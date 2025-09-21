<script lang="ts">
	import {
		Container,
		Sprite,
		Stage,
		Star,
		Rectangle,
		Text,
	} from '$lib/index.js';
	import { onMount } from 'svelte';
	import Example from './Example.svelte';

	let rotation = $state(0);
	let opacity = $state(1);

	onMount(() => {
		const clean = setInterval(() => {
			opacity = Math.sin(Date.now() / 1000) / 2 + 0.5;
		}, 1000 / 60);

		return () => clearInterval(clean);
	});

	$effect(() => {
		const clean = setInterval(() => {
			rotation += 0.069;
		}, 1000 / 60);

		return () => clearInterval(clean);
	});

	let mounted = $state(false);
</script>

{#snippet bunny(x: number, y: number, rotation: number)}
	<Sprite
		{opacity}
		anchor={{ x: 0.5, y: 0.5 }}
		scale={{ x: 1.5, y: 1.5 }}
		texture="/bunny.png"
		{x}
		{y}
		z={0}
		{rotation}
	/>
{/snippet}
<span class="text-white">stage mounted: {mounted}</span>
<Example>
	{#snippet children(host: HTMLElement, hostWidth: number, hostHeight: number)}
		<Stage bind:mounted {host} background="#111111" antialias={true}>
			{@render bunny(hostWidth - 100, hostHeight - 100, rotation)}

			<Container x={100} y={hostHeight - 100} rotation={rotation * -0.042}>
				{@render bunny(0, 0, 20)}
				{@render bunny(40, 0, 40)}
				{@render bunny(0, 40, 50)}
				{@render bunny(40, 40, 90)}
			</Container>

			<Text
				text="Hello Glixy ✨"
				style={{
					font: 'Overlock',
					color: 0xffffff,
					size: 256,
					weight: 'bold',
					style: 'normal',
				}}
				scale={{ x: 0.5, y: 0.5 }}
				x={10}
				y={10}
				z={10}
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
				z={10}
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
