<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title: Snippet;
		description?: Snippet;
		children?: Snippet;
		code?: Snippet;
	};

	const { title, description, children, code }: Props = $props();
</script>

<section class="mb-14 scroll-mt-24">
	<h2 class="doc-h2 mb-3">{@render title()}</h2>

	{#if description}
		<p class="doc-body mb-5 max-w-prose">{@render description()}</p>
	{/if}

	{#if code}
		{@render code()}
	{/if}

	{#if children}
		{@render children()}
	{/if}
</section>
