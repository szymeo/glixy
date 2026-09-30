<script lang="ts">
	import Header from '../Header.svelte';
	import { page } from '$app/state';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	const sections = [
		{
			label: 'Start',
			items: [
				{ name: 'Installation', path: '/docs/installation' },
				{ name: 'Getting Started', path: '/docs/getting-started' },
			],
		},
		{
			label: 'Elements',
			items: [
				{ name: 'Stage', path: '/docs/elements/stage' },
				{ name: 'Container', path: '/docs/elements/container' },
				{ name: 'Sprite', path: '/docs/elements/sprite' },
				{ name: 'Text', path: '/docs/elements/text' },
				{ name: 'Video', path: '/docs/elements/video' },
				{ name: 'Rectangle', path: '/docs/elements/rectangle' },
				{ name: 'Star', path: '/docs/elements/star' },
			],
		},
		{
			label: 'More',
			items: [{ name: 'Made with Glixy', path: '/docs/examples' }],
		},
	];

	const flatItems = sections.flatMap((section) => section.items);

	const currentIndex = $derived(
		flatItems.findIndex((item) => item.path === page.url.pathname),
	);
	const previous = $derived(
		currentIndex > 0 ? flatItems[currentIndex - 1] : null,
	);
	const next = $derived(
		currentIndex >= 0 && currentIndex < flatItems.length - 1
			? flatItems[currentIndex + 1]
			: null,
	);
	const currentName = $derived(
		flatItems[currentIndex]?.name ?? 'Documentation',
	);

	let mobileOpen = $state(false);
</script>

<svelte:head>
	<title>{currentName} - Glixy</title>
</svelte:head>

<Header />

<!--
	One bounded frame: hairlines close it on both sides, on the same x as the
	logo and the GitHub button above. A sticky list of pages on the left, one
	column of reference in the middle. Below md the page list folds into a
	row under the nav that names the current page.
-->
<div class="mx-auto w-full max-w-landing px-4 sm:px-6 lg:px-10">
	<div class="flex w-full flex-col border-x border-line md:flex-row">
		<aside class="hidden w-60 shrink-0 border-r border-line md:block lg:w-64">
			<nav
				aria-label="Documentation"
				class="sticky top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto px-4 py-8 lg:px-6 lg:py-10"
			>
				{@render groups()}
			</nav>
		</aside>

		<div class="border-b border-line md:hidden">
			<button
				type="button"
				class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium sm:px-6"
				aria-expanded={mobileOpen}
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				<span class="flex items-center gap-2">
					<span class="text-ink-faint">Docs</span>
					<span class="text-line-strong">/</span>
					<span>{currentName}</span>
				</span>
				<svg
					class={[
						'size-4 text-ink-faint transition-transform duration-200 ease-out',
						{ 'rotate-180': mobileOpen },
					]}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="m6 9 6 6 6-6" />
				</svg>
			</button>

			{#if mobileOpen}
				<nav
					aria-label="Documentation"
					class="border-t border-line px-4 py-5 sm:px-6"
				>
					{@render groups()}
				</nav>
			{/if}
		</div>

		<main class="min-w-0 flex-1 px-4 py-10 sm:px-6 lg:px-10 lg:py-14 xl:px-12">
			<div class="max-w-[52rem]">
				{@render children()}

				<nav
					class="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2"
					aria-label="Previous and next page"
				>
					{#if previous}
						<a
							href={previous.path}
							class="flex flex-col gap-0.5 bg-surface px-5 py-4 transition-colors hover:bg-surface-raised"
						>
							<span class="text-[13px] text-ink-faint">Previous</span>
							<span class="font-medium">{previous.name}</span>
						</a>
					{:else}
						<span class="hidden bg-surface sm:block"></span>
					{/if}

					{#if next}
						<a
							href={next.path}
							class="flex flex-col gap-0.5 bg-surface px-5 py-4 text-right transition-colors hover:bg-surface-raised"
						>
							<span class="text-[13px] text-ink-faint">Next</span>
							<span class="font-medium">{next.name}</span>
						</a>
					{:else}
						<span class="hidden bg-surface sm:block"></span>
					{/if}
				</nav>
			</div>
		</main>
	</div>
</div>

<Footer />

{#snippet groups()}
	<div class="flex flex-col gap-7">
		{#each sections as section (section.label)}
			<div class="flex flex-col gap-1">
				<h3 class="mb-1 px-2.5 text-sm font-medium">{section.label}</h3>
				<ul class="flex flex-col gap-px">
					{#each section.items as item (item.path)}
						{@const current = page.url.pathname === item.path}
						<li>
							<a
								href={item.path}
								class={[
									'flex min-h-8 items-center rounded-lg px-2.5 text-sm transition-colors',
									current
										? 'bg-[#efeff1] text-ink'
										: 'text-ink-muted hover:bg-surface-sunken hover:text-ink',
								]}
								aria-current={current ? 'page' : undefined}
								onclick={() => (mobileOpen = false)}
							>
								{item.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
{/snippet}
