<script lang="ts">
	import { Container, Sprite, Stage } from 'glixy';
	import { ROTATE_SPRITE_CODE_SNIPPET } from '$lib/code-snippets';
	import Example from '../components/atoms/Example.svelte';

	let rotation = $state(0);
</script>

{#snippet bunny(x: number, y: number)}
	<Sprite {rotation} anchor={{ x: 0.5, y: 0.5 }} texture="/bunny.png" {x} {y} />
{/snippet}

<Example {controls} code={ROTATE_SPRITE_CODE_SNIPPET}>
	{#snippet children(host: HTMLElement, hostWidth: number, hostHeight: number)}
		<Stage {host} background="#1f2937" antialias={true}>
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
