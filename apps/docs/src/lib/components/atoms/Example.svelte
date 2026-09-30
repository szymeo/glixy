<script lang="ts">
	import { HighlightAuto } from 'svelte-highlight';
	import type { Snippet } from 'svelte';
	import CodeIcon from '$lib/icons/CodeIcon.svelte';

	type Props = {
		children: Snippet<[host: HTMLDivElement, width: number, height: number]>;
		code?: string;
		controls?: Snippet;
		/** Render the source open, without a toggle. */
		expanded?: boolean;
		/** Stage height in px. Examples are wide, so they stay short. */
		height?: number;
		/**
		 * Let pointer events reach the canvas. Off by default so a touch drag
		 * scrolls the page instead of being swallowed by the renderer.
		 */
		interactive?: boolean;
		class?: string;
	};

	const {
		children,
		code,
		controls,
		expanded = false,
		height = 288,
		interactive = false,
		class: className = '',
	}: Props = $props();

	let host: HTMLDivElement | null = $state(null);
	let hostHeight = $state(0);
	let hostWidth = $state(0);
	let codeVisible = $state(expanded);
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

<figure class="card m-0 overflow-hidden {className}">
	<!-- Controls head the panel, so the canvas below stays unobstructed. -->
	{#if controls || (code && !expanded)}
		<div class="flex h-11 items-center gap-3 border-b border-line px-2">
			{#if controls}
				{@render controls()}
			{/if}

			{#if code && !expanded}
				<button
					onclick={() => (codeVisible = !codeVisible)}
					class="btn btn-sm ml-auto gap-1.5 px-3 text-ink-muted hover:bg-surface-sunken hover:text-ink"
					aria-expanded={codeVisible}
				>
					<CodeIcon class="size-4" />
					{codeVisible ? 'Hide source' : 'Source'}
				</button>
			{/if}
		</div>
	{/if}

	<div
		bind:this={host}
		bind:clientWidth={hostWidth}
		bind:clientHeight={hostHeight}
		style="height: {height}px"
		class={[
			'relative w-full touch-auto overflow-hidden bg-surface-sunken',
			{ '[&>canvas]:pointer-events-none': !interactive },
		]}
	>
		{#if host}
			{@render children(host, hostWidth, hostHeight)}
		{:else}
			<div
				class="flex h-full items-center justify-center text-[13px] text-ink-faint"
			>
				Starting renderer…
			</div>
		{/if}
	</div>

	{#if code}
		<div
			bind:this={codeContainer}
			class={[
				'code-panel overflow-hidden border-t border-line',
				{ 'transition-height duration-200 ease-out': !expanded },
			]}
			style="height: 0px;"
		>
			<HighlightAuto {code} />
		</div>
	{/if}
</figure>
