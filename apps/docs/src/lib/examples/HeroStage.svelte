<script lang="ts">
	import { Container, Sprite, Stage } from 'glixy';
	import Example from '../components/atoms/Example.svelte';

	const COUNT = 36;
	const QUARTER_TURN = Math.PI / 2;
	const EDGE_INSET = 28;

	// Svelte's parser ends this <script> block at any literal closing tag, so
	// the one inside the sample below is assembled instead of written out.
	const CLOSING_SCRIPT_TAG = `</${'script'}>`;

	// One entry per bunny. Hovering spins a single sprite, the button spins the
	// field. Either way the render loop wakes only for the frame that changed.
	let spins = $state<number[]>(Array(COUNT).fill(0));

	function spinAll() {
		spins = spins.map((turns) => turns + 1);
	}

	function spinOne(index: number) {
		spins[index] += 1;
	}

	/** The same 36 sprites reflow into fewer columns as the stage narrows. */
	function columnsFor(width: number) {
		if (width < 520) return 6;
		if (width < 900) return 9;
		return 12;
	}

	/**
	 * A grid pushed through a sine wave: regular enough to read as a system,
	 * irregular enough to read as a scene.
	 */
	function positionOf(index: number, width: number, height: number) {
		const columns = columnsFor(width);
		const rows = COUNT / columns;
		const column = index % columns;
		const row = Math.floor(index / columns);
		const spanX = Math.max(width - EDGE_INSET * 2, 1);
		const stepY = height / (rows + 1);
		const phase = (column / columns) * Math.PI * 2;

		return {
			x: EDGE_INSET + (spanX / (columns - 1)) * column,
			y: stepY * (row + 1) + Math.sin(phase + row * 0.6) * stepY * 0.24,
		};
	}
</script>

<Example
	class="shadow-[0_32px_64px_-24px_rgba(28,28,30,0.18)]"
	{controls}
	height={360}
	interactive={true}
	code={`<script lang="ts">
	import { Container, Sprite, Stage } from 'glixy';

	// The render loop wakes only when this changes.
	let spins = $state(Array(36).fill(0));
${CLOSING_SCRIPT_TAG}

<button onclick={() => (spins = spins.map((n) => n + 1))}>
	Spin
</button>

<Stage {host} background="#f4f4f5" antialias={true}>
	<Container>
		{#each spins as turns, i}
			<Sprite
				texture="/bunny.png"
				anchor={{ x: 0.5, y: 0.5 }}
				rotation={turns * Math.PI / 2}
				onpointerover={() => (spins[i] += 1)}
				x={positionOf(i).x}
				y={positionOf(i).y}
			/>
		{/each}
	</Container>
</Stage>`}
>
	{#snippet children(host: HTMLElement, hostWidth: number, hostHeight: number)}
		<Stage {host} background="#f4f4f5" antialias={true}>
			<Container>
				{#each spins as turns, index (index)}
					{@const position = positionOf(index, hostWidth, hostHeight)}
					<Sprite
						texture="/bunny.png"
						anchor={{ x: 0.5, y: 0.5 }}
						rotation={turns * QUARTER_TURN}
						onpointerover={() => spinOne(index)}
						x={position.x}
						y={position.y}
					/>
				{/each}
			</Container>
		</Stage>
	{/snippet}
</Example>

{#snippet controls()}
	<button onclick={spinAll} class="btn btn-secondary btn-sm">Spin</button>

	<span class="hidden text-[13px] text-ink-faint sm:inline">
		<span class="font-figure text-ink-muted">{COUNT}</span>
		sprites, one render per change. Hover to spin a single bunny.
	</span>
{/snippet}
