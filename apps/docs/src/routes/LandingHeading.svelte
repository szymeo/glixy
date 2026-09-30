<script lang="ts">
	import type { Snippet } from 'svelte';
	import Section from '$lib/components/Section.svelte';

	type Props = {
		title: string;
		/** The second sentence, set in grey on its own line. */
		quiet?: string;
		description?: string;
		dividerTop?: boolean;
		children?: Snippet;
	};

	const { title, quiet, description, dividerTop, children }: Props = $props();
</script>

<Section {dividerTop}>
	<header
		class="flex flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-10 lg:py-28"
	>
		<h2
			class="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl"
		>
			<span class={{ 'sm:block': quiet }}>{title}</span>
			{#if quiet}
				<span class="text-ink-faint sm:block">{quiet}</span>
			{/if}
		</h2>

		{#if description}
			<p class="mt-5 max-w-2xl text-lg text-ink-muted">{description}</p>
		{/if}

		{@render children?.()}
	</header>
</Section>
