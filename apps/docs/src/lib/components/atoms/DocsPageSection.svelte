<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title: Snippet;
		description: Snippet;
		children?: Snippet;
		code?: Snippet;
	};
	const { title, description, children, code }: Props = $props();
</script>

<div class="mb-14 mt-8">
	<h2 class="mb-4 text-2xl">{@render title()}</h2>
	<p class="mb-4 text-base text-slate-600">{@render description()}</p>
	{#if code}
		{@render code()}
	{/if}
	{#if children}
		{@render children()}
	{/if}
</div>
