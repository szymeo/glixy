<!-- <script lang="ts">
	import { Stage, Container, Sprite } from '$lib/index.js';
	import { onMount } from 'svelte';
	import Highlight from 'svelte-highlight';
	import horizonDark from 'svelte-highlight/styles/base16-monokai';
	import typescript from 'svelte-highlight/languages/typescript';

	const code = `/* script part */

import { Stage, Container, Sprite } from 'glixy';

let scale = $state({ x: 1, y: 1 });
let rotation = $state(0);
let visible = $state(true);
let host: HTMLDivElement | null = $state(null);
let hostHeight = $state(0);
let hostWidth = $state(0);

onMount(() => setInterval(() => (rotation += 0.05), 1000 / 60));

/* markup part */

// WARNING! Do NOT pass props to the snippet wrapped into object, it ruins performance!
{#snippet bunny(x: number, y: number, rotation: number)}
	<Sprite
		{rotation}
		anchor={{ x: 0.5, y: 0.5 }}
		texture="https://pixijs.com/assets/bunny.png"
		{x}
		{y}
		{scale}
		onmouseover={() => (scale = { x: 2, y: 2 })}
		onmouseout={() => (scale = { x: 1, y: 1 })}
	/>
{/snippet}

<button onclick={() => (visible = !visible)}>
    Toggle visibility
</button>

<div
    bind:this={host}
    bind:clientWidth={hostWidth}
    bind:clientHeight={hostHeight}
>
    <Stage {host} resizeTo={host} background="#ebebeb" antialias={true}>
        {#if visible}
            <Container x={0} y={hostHeight / 2}>
                {@render bunny(hostWidth / 3, 0, rotation)}
				{@render bunny(hostWidth / 2, 0, rotation)}
				{@render bunny((hostWidth / 3) * 2, 0, rotation)}
            </Container>
        {/if}
    </Stage>
</div>
`;

	let rotation = $state(0);
	let visible = $state(true);
	let scale = $state({ x: 1, y: 1 });
	let host: HTMLDivElement | null = $state(null);
	let hostHeight = $state(0);
	let hostWidth = $state(0);
	let codeVisible = $state(false);

	onMount(() => setInterval(() => (rotation += 0.05), 1000 / 60));
</script>

<svelte:head>
	{@html horizonDark}
</svelte:head>

{#snippet bunny(x: number, y: number, rotation: number)}
	<Sprite
		{rotation}
		anchor={{ x: 0.5, y: 0.5 }}
		texture="https://pixijs.com/assets/bunny.png"
		{x}
		{y}
		{scale}
		onmouseover={() => (scale = { x: 2, y: 2 })}
		onmouseout={() => (scale = { x: 1, y: 1 })}
	/>
{/snippet}

<div class="flex flex-col">
	<div
		bind:this={host}
		bind:clientWidth={hostWidth}
		bind:clientHeight={hostHeight}
		class="w-full h-96 relative border border-slate-700/60 rounded-3xl overflow-hidden"
	>
		<div class="flex items-center justify-start gap-2 absolute w-full p-4">
			<button
				onclick={() => (codeVisible = !codeVisible)}
				class="w-10 h-10 bg-slate-700 hover:bg-slate-800 shadow rounded-full flex items-center justify-center"
				title="Show code"
			>
				<svg
					class="w-5 h-5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						<path
							d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
							stroke="#fff"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</g>
				</svg>
			</button>

			<button
				class="bg-slate-700 hover:bg-slate-800 text-white font-semibold tracking-wider py-2 px-4 rounded-full w-fit"
				onclick={() => (visible = !visible)}
			>
				Toggle visibility

				{#if visible}
					<span class="ml-1">👀</span>
				{:else}
					<span class="ml-1">🙈</span>
				{/if}
			</button>
		</div>

		{#if host}
			<Stage {host} resizeTo={host} background="#111111" antialias={true}>
				{#if visible}
					<Container x={0} y={hostHeight / 2}>
						{@render bunny(hostWidth / 3, 0, rotation)}
						{@render bunny(hostWidth / 2, 0, rotation)}
						{@render bunny((hostWidth / 3) * 2, 0, rotation)}
					</Container>
				{/if}
			</Stage>
		{/if}
	</div>

	{#if codeVisible}
		<Highlight
			class="rounded-lg overflow-hidden mb-4"
			{code}
			language={typescript}
		/>
	{/if}
</div> -->
