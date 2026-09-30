<script lang="ts">
	import bash from 'svelte-highlight/languages/bash';
	import CodeBlock from '$lib/components/atoms/CodeBlock.svelte';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';

	const managers = [
		{ name: 'npm', code: 'npm install glixy' },
		{ name: 'pnpm', code: 'pnpm add glixy' },
		{ name: 'yarn', code: 'yarn add glixy' },
		{ name: 'bun', code: 'bun add glixy' },
	];

	let active = $state(managers[0]);
</script>

<DocsPage
	title="Installation"
	lede="Glixy needs Svelte 5. PixiJS ships with it."
>
	<DocsPageSection>
		{#snippet title()}
			Add the package
		{/snippet}

		{#snippet children()}
			<div
				class="mb-3 flex w-fit items-center gap-1 rounded-full border border-line bg-surface-raised p-1"
				role="tablist"
				aria-label="Package manager"
			>
				{#each managers as manager (manager.name)}
					<button
						role="tab"
						aria-selected={active.name === manager.name}
						onclick={() => (active = manager)}
						class={[
							'rounded-full px-3 py-1 font-mono text-[13px] transition-colors',
							active.name === manager.name
								? 'bg-[#efeff1] text-ink'
								: 'text-ink-muted hover:text-ink',
						]}
					>
						{manager.name}
					</button>
				{/each}
			</div>

			<CodeBlock code={active.code} language={bash} />
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Requirements
		{/snippet}

		{#snippet description()}
			PixiJS 8 ships inside the package. Svelte 5 is a peer dependency, so it
			has to already be in your project.
		{/snippet}

		{#snippet children()}
			<CodeBlock code={`npm install svelte@^5`} language={bash} />
		{/snippet}
	</DocsPageSection>
</DocsPage>
