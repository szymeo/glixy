<script lang="ts">
	import { Container, Rectangle, Stage, Text } from '$lib/index.js';
	import Example from '../Example.svelte';
	import ResizableDot from './ResizableDot.svelte';

	let boxSize = $state({
		width: 120,
		height: 120,
	});
	const dotSize = 12;
</script>

<Example>
	{#snippet children(host: HTMLElement, hostWidth: number, hostHeight: number)}
		<Stage {host} background="#111111" antialias={true}>
			<Text
				text="✨ resize me ✨"
				style={{
					font: 'Overlock',
					color: 0xffffff,
					size: 56,
					weight: 'bold',
					style: 'normal',
				}}
				anchor={{ x: 0.5, y: 0.5 }}
				scale={{ x: 0.5, y: 0.5 }}
				x={hostWidth / 2}
				y={boxSize.height / 2}
				z={10}
			/>

			<Container anchor={{ x: 60, y: 60 }} x={hostWidth / 2} y={hostHeight / 2}>
				<Rectangle
					x={0}
					y={0}
					width={boxSize.width}
					height={boxSize.height}
					cornerRadius={3}
					background={{
						color: 0x1877f2,
						opacity: 1,
					}}
					border={{
						color: 0xffffff,
						width: 5,
						rounded: true,
						opacity: 1,
					}}
				/>

				<ResizableDot
					onresize={(event) => {
						boxSize.width += event.x;
						boxSize.height += event.y;
					}}
					size={dotSize}
					x={boxSize.width - dotSize / 2}
					y={boxSize.height - dotSize / 2}
				/>
			</Container>
		</Stage>
	{/snippet}
</Example>
