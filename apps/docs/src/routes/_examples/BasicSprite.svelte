<script lang="ts">
	import { Container, Sprite, Stage } from 'glixy';
	import Example from './Example.svelte';
	import { HighlightAuto } from 'svelte-highlight';
	import atomOneDark from 'svelte-highlight/styles/atom-one-light';
</script>

{#snippet bunny(x: number, y: number)}
	<Sprite
		anchor={{ x: 0.5, y: 0.5 }}
		texture="https://pixijs.com/assets/bunny.png"
		{x}
		{y}
	/>
{/snippet}

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<Example>
	{#snippet children(host: HTMLElement, hostWidth: number, hostHeight: number)}
		<Stage {host} resizeTo={host} background="#1f2937" antialias={true}>
			<Container x={0} y={hostHeight / 2}>
				{@render bunny(hostWidth / 2, 0)}
			</Container>
		</Stage>
	{/snippet}
</Example>

<div>
	<HighlightAuto
		class="-mt-6 overflow-hidden rounded-b-xl border border-gray-300 [&>code.hljs]:bg-gray-100 [&>code.hljs]:p-8 [&>code.hljs]:pt-14"
		code={`{#snippet bunny(x: number, y: number)}
	<Sprite
		anchor={{ x: 0.5, y: 0.5 }}
		texture="https://pixijs.com/assets/bunny.png"
		{x}
		{y}
	/>
{/snippet}

<Stage {host} resizeTo={host} background="#1f2937" antialias={true}>
	<Container x={0} y={hostHeight / 2}>
		{@render bunny(hostWidth / 2, 0)}
	</Container>
</Stage>`}
	></HighlightAuto>
</div>
