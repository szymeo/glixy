<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		title: string;
		/** One line under the title, in the interface voice. */
		lede?: string;
	};

	const { children, title, lede }: Props = $props();
</script>

<article>
	<header class="mb-12 flex flex-col gap-3">
		<h1 class="doc-title">{title}</h1>
		{#if lede}
			<p class="max-w-prose text-lg leading-7 text-ink-muted">{lede}</p>
		{/if}
	</header>

	{@render children()}
</article>
