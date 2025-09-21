<script lang="ts">
	import { Container, Sprite, Stage } from 'glixy';
	import Example from '../components/atoms/Example.svelte';

	let rotation = $state(0);
</script>

{#snippet bunny(x: number, y: number)}
	<Sprite {rotation} anchor={{ x: 0.5, y: 0.5 }} texture="/bunny.png" {x} {y} />
{/snippet}

<Example
	{controls}
	code={`<Script lang="ts">
	import { Container, Sprite, Stage } from 'glixy';

	// render loop will run only once when rotation changes
	let rotation = $state(0);
</Script>

{#snippet bunny(x: number, y: number)}
	<Sprite
		{rotation}
		anchor={{ x: 0.5, y: 0.5 }}
		texture="/bunny.png"
		{x}
		{y}
	/>
{/snippet}

<button onclick={() => (rotation = Math.random() * 360)}>
	Rotate!
</button>

<!-- host, hostHeight, hostWidth are passed from the parent component -->
<Stage {host} resizeTo={host} background="#1f2937" antialias={true}>
	<Container x={0} y={hostHeight / 2}>
		{@render bunny(hostWidth / 2, 0)}
	</Container>
</Stage>`}
>
	{#snippet children(host: HTMLElement, hostWidth: number, hostHeight: number)}
		<Stage {host} resizeTo={host} background="#1f2937" antialias={true}>
			<Container x={0} y={hostHeight / 2}>
				{@render bunny(hostWidth / 2, 0)}
			</Container>
		</Stage>
	{/snippet}
</Example>

{#snippet controls()}
	<button
		onclick={() => (rotation = Math.random() * 360)}
		class="btn btn-primary"
	>
		Rotate!
	</button>
{/snippet}
