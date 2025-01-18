<script lang="ts">
	import { default as Rectangle } from '$lib/elements/Shapes/Rectangle.svelte';
	import { onMount } from 'svelte';

	const {
		x,
		y,
		size,
		onresize,
	}: {
		x: number;
		y: number;
		size: number;
		onresize: (event: { x: number; y: number }) => void;
	} = $props();
	let hovered = $state(false);
	let cursorDown = $state(false);

	onMount(() => {
		window?.addEventListener('pointerdown', (event) => {
			console.log('window.onpointerdown', event);
			cursorDown = true;
		});
	});
</script>

<Rectangle
	{x}
	{y}
	width={size}
	height={size}
	cornerRadius={size / 2}
	background={{
		color: hovered ? 0xff0000 : 0x000fff,
		opacity: 1,
	}}
	border={{
		color: 0xffffff,
		width: 5,
		rounded: true,
		opacity: 1,
	}}
	rotation={0}
	z={10}
	onpointerout={{
		condition: hovered,
		callback: () => (hovered = false),
	}}
	onpointerover={() => {
		hovered = true;
	}}
	onpointerdown={{
		condition: !cursorDown,
		callback: (event) => {
			console.log('onpointerdown', event);

			const startCoords = {
				x: event.screen.x,
				y: event.screen.y,
			};
			const onpointermove = (event: PointerEvent) => {
				console.log(
					'window.onpointermove',
					startCoords,
					event.clientX,
					event.clientY,
				);
				onresize({
					x: event.clientX - startCoords.x,
					y: event.clientY - startCoords.y,
				});
			};
			const onpointerup = () => {
				cursorDown = false;
				window.removeEventListener('pointermove', onpointermove);
				window.removeEventListener('pointerup', onpointerup);
			};
			window.addEventListener('pointermove', onpointermove);
			window.addEventListener('pointerup', onpointerup);
		},
	}}
	cursor="all-scroll"
/>
