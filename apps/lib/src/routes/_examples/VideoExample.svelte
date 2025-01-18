<script lang="ts">
	import Container from '$lib/elements/Container.svelte';
	import Rectangle from '$lib/elements/Shapes/Rectangle.svelte';
	import Video from '$lib/elements/Video.svelte';
	import { Stage } from '$lib/index.js';
	import { onMount, tick } from 'svelte';
	import {
		backInOut,
		circInOut,
		cubicInOut,
		cubicOut,
		quartInOut,
		quintInOut,
	} from 'svelte/easing';
	import FlyInVideo from './FlyInVideo.svelte';

	let hostWidth = $state(0);
	let hostHeight = $state(0);
	const columnCount = Array.from({ length: 5 });
	const rowCount = Array.from({ length: 5 });

	const PADDING = 200;
	const INITIAL_SCALE = 1 / columnCount.length;
	let mounted = $state(false);
	let scale = $state(INITIAL_SCALE);
	let focusedIndex = $state({ x: 2, y: 2 });

	onMount(() => {
		mounted = false;

		setTimeout(() => {
			mounted = true;
			setTimeout(animateScale, 1500);
		});
	});

	async function animateScale() {
		const duration = 3500;
		const animationSteps = duration / (1000 / 60);
		const keyframes = Array.from({ length: animationSteps }, (_, i) => {
			const progress = i / animationSteps;

			scale = INITIAL_SCALE + (1 - INITIAL_SCALE) * quartInOut(progress);

			return scale;
		});

		setInterval(() => {
			const keyframe = keyframes.shift();

			if (keyframe) {
				scale = keyframe;
			}
		}, 1000 / 60);
	}

	const GRID_ANIMATIONS_DELAYS: Record<number, number[]> = {
		0: [150, 500, 1000, 1200, 1300].map((x) => x * 1).reverse(),
		1: [350, 550, 650, 750, 900].map((x) => x * 1.5),
		2: [0, 400, 700, 900, 1200].reverse(),
		3: [200, 500, 600, 700, 800].map((x) => x * 1.5),
		4: [250, 500, 600, 700, 800].map((x) => x * 1).reverse(),
	};
	const COLS_ANIMATIONS_DIRECTIONS = [-1, 1, -1, 1, -1];
</script>

<svelte:window bind:innerWidth={hostWidth} bind:innerHeight={hostHeight} />

{#if mounted}
	<Stage host={document.body} background="#111111" antialias={true}>
		<Rectangle
			x={hostWidth / 2}
			y={hostHeight / 2}
			width={5}
			height={5}
			cornerRadius={50}
			background={{ color: 0xff0000, opacity: 1 }}
			border={{ color: 0xffffff, width: 0, rounded: false, opacity: 1 }}
			rotation={0}
			z={50}
		/>

		<Container
			x={(hostWidth -
				(hostWidth * scale * rowCount.length +
					PADDING * (rowCount.length - 1))) /
				2 +
				(hostWidth * scale * 2 + PADDING * 2) -
				(hostWidth * scale * 2 + PADDING * 2 * scale)}
			y={(hostHeight -
				(hostHeight * scale * columnCount.length +
					PADDING * (columnCount.length - 1))) /
				2 +
				(hostHeight * scale * 2 + PADDING * 2) -
				(hostHeight * scale * 2 + PADDING * 2 * scale)}
			scale={{ x: scale, y: scale }}
		>
			{#each columnCount as _, x}
				{#each rowCount as _, y}
					<FlyInVideo
						width={hostWidth}
						height={hostHeight}
						delay={GRID_ANIMATIONS_DELAYS[x][y]}
						duration={3500}
						easing={quintInOut}
						x={x * (hostWidth + PADDING)}
						y={y * (hostHeight + PADDING)}
						yShift={COLS_ANIMATIONS_DIRECTIONS[x] * hostHeight * 6}
					/>
				{/each}
			{/each}
		</Container>
	</Stage>
{/if}
