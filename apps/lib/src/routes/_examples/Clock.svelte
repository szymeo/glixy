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
			rotation += 0.1;
		}, 1000 / 60);

		return () => clearInterval(clean);
	});

	let mounted = $state(false);
	let optimized = $state(true);
	let host: HTMLDivElement | null = $state(null);
</script>

<span class="absolute left-0 top-0 bg-neutral-900 p-2 text-white">
	stage mounted: {mounted}
</span>
<button
	class="absolute right-0 top-0 rounded-md bg-pink-500 px-2 py-1 font-bold text-white"
	onclick={() => (optimized = !optimized)}
>
	Toggle optimization {optimized ? '👍' : '👎'}
</button>

<div class="h-full w-full bg-neutral-500" bind:this={host}></div>

<Stage bind:mounted {host} background="#737373" antialias={true}>
	{#if optimized}
		<Container x={5} y={5}>
			{@const clockSize = 15}
			{@const clockHandHeight = 6}

			{#each Array.from({ length: 100 }) as _, i}
				{#each Array.from({ length: 100 }) as _, j}
					<!-- <Rectangle
          x={i * clockSize}
          y={j * clockSize}
          width={clockSize}
          height={clockSize}
          cornerRadius={50}
          background={{
            color: 0xffffff,
            opacity: 1,
          }}
        /> -->
					<Container
						x={i * clockSize + clockSize / 2}
						y={j * clockSize + clockSize / 2}
					>
						<Sprite
							x={0}
							y={0}
							anchor={{ x: 0, y: 0.5 }}
							width={clockSize / 2 + clockHandHeight / 2}
							height={clockHandHeight}
							texture="/clockhand.png"
							{rotation}
						/>

						<Sprite
							x={0}
							y={0}
							anchor={{ x: 0, y: 0.5 }}
							width={clockSize / 2 + clockHandHeight / 2}
							height={clockHandHeight}
							texture="/clockhand.png"
							rotation={rotation + Math.random() * 360}
						/>
					</Container>
				{/each}
			{/each}
		</Container>
	{:else}
		<Container x={5} y={5}>
			{@const clockSize = 10}
			{@const clockHandHeight = 1}

			{#each Array.from({ length: 100 }) as _, i}
				{#each Array.from({ length: 100 }) as _, j}
					<Rectangle
						x={i * clockSize}
						y={j * clockSize}
						width={clockSize}
						height={clockSize}
						cornerRadius={50}
						background={{
							color: 0xffffff,
							opacity: 1,
						}}
					/>
					<Container
						x={i * clockSize + clockSize / 2}
						y={j * clockSize + clockSize / 2}
					>
						<Rectangle
							x={0}
							y={0}
							anchor={{ x: clockHandHeight / 2, y: clockHandHeight / 2 }}
							width={clockSize / 2 + clockHandHeight / 2}
							height={clockHandHeight}
							cornerRadius={50}
							background={{
								color: 0x000000,
								opacity: 1,
							}}
							{rotation}
						/>

						<Rectangle
							x={0}
							y={0}
							anchor={{ x: clockHandHeight / 2, y: clockHandHeight / 2 }}
							width={clockSize / 2 + clockHandHeight / 2}
							height={clockHandHeight}
							cornerRadius={50}
							background={{
								color: 0x000000,
								opacity: 1,
							}}
							rotation={rotation + 90}
						/>
					</Container>
				{/each}
			{/each}
		</Container>
	{/if}
</Stage>
