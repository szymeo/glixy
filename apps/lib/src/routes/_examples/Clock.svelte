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
			rotation += 1;
		}, 1000 / 60);

		return () => clearInterval(clean);
	});

	let mounted = $state(false);
</script>

<span class="text-white">stage mounted: {mounted}</span>
<Example>
	{#snippet children(host: HTMLElement, hostWidth: number, hostHeight: number)}
		<button
			class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 shadow hover:bg-slate-800"
			onclick={() => (rotation += 0.69)}
		>
			Rotate
		</button>

		<Stage bind:mounted {host} background="#111111" antialias={true}>
			<Container x={250} y={150}>
				{@const clockSize = 40}
				{@const clockHandHeight = 4}
				<Rectangle
					x={0}
					y={0}
					width={clockSize}
					height={clockSize}
					cornerRadius={50}
					background={{
						color: 0xffffff,
						opacity: 1,
					}}
				/>
				<Container x={clockSize / 2} y={clockSize / 2}>
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
			</Container>
		</Stage>
	{/snippet}
</Example>
