<script lang="ts">
	import { HighlightAuto } from 'svelte-highlight';
	import type { Snippet } from 'svelte';
	import CodeIcon from '$lib/icons/CodeIcon.svelte';

	type Props = {
		children: Snippet<[host: HTMLDivElement, width: number, height: number]>;
		code?: string;
		controls?: Snippet;
	};

	const { children, code, controls }: Props = $props();

	let host: HTMLDivElement | null = $state(null);
	let hostHeight = $state(0);
	let hostWidth = $state(0);
	let codeVisible = $state(false);
	let codeContainer: HTMLDivElement | null = $state<HTMLDivElement | null>(
		null,
	);

	$effect(() => {
		if (codeContainer) {
			codeContainer.style.height = codeVisible
				? `${codeContainer.scrollHeight}px`
				: '0px';
		}
	});
</script>

<div class="flex flex-col">
	<div
		bind:this={host}
		bind:clientWidth={hostWidth}
		bind:clientHeight={hostHeight}
		class="relative z-10 h-96 w-full touch-auto overflow-hidden rounded-3xl bg-gray-800 [&>canvas]:pointer-events-none"
	>
		<div
			class="absolute flex w-full flex-wrap items-center justify-start gap-2 p-6"
		>
			{#if code}
				<button
					onclick={() => (codeVisible = !codeVisible)}
					class="icon-btn btn-primary shrink-0"
					title="Show code"
				>
					<CodeIcon class="h-5 w-5" stroke="stroke-gray-100" />
				</button>
			{/if}

			{#if controls}
				{@render controls()}
			{/if}
		</div>

		{#if host}
			{@render children(host, hostWidth, hostHeight)}
		{:else}
			<div class="flex h-full items-center justify-center text-slate-200">
				Loading...
			</div>
		{/if}
	</div>

	{#if code}
		<div
			bind:this={codeContainer}
			class:invisible={!codeVisible}
			class:visible={codeVisible}
			class="transition-height relative -mt-7 overflow-hidden rounded-b-xl border border-gray-300 bg-gray-100 pt-6 [&>pre>code.hljs]:bg-gray-100 [&>pre>code.hljs]:p-8"
			style="height: 0px;"
		>
			<HighlightAuto {code} />
		</div>
	{/if}
</div>
