<script lang="ts">
	import Logo from '$lib/icons/Logo.svelte';
	import Section from './Section.svelte';

	const columns = [
		{
			title: 'Docs',
			links: [
				{ label: 'Installation', href: '/docs/installation' },
				{ label: 'Getting Started', href: '/docs/getting-started' },
				{ label: 'Elements', href: '/docs/elements/stage' },
				{ label: 'Made with Glixy', href: '/docs/examples' },
			],
		},
		{
			title: 'Project',
			links: [
				{ label: 'GitHub', href: 'https://github.com/szymeo/glixy' },
				{ label: 'npm', href: 'https://www.npmjs.com/package/glixy' },
				{
					label: 'Releases',
					href: 'https://github.com/szymeo/glixy/releases',
				},
			],
		},
	];
</script>

<!--
	How every page ends: a hatched band across the full width, then the
	column between its rails with the mark on the left and the link columns
	packed against the right, and the rails running on to the page end.
-->
<footer class="w-full">
	<div class="hatch h-5 border-y border-line lg:h-8"></div>

	<Section divider={false} class="px-4 pb-24 pt-16 sm:px-6 lg:px-10 lg:pt-20">
		<div
			class="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-[minmax(0,1fr)_repeat(2,12rem)] sm:gap-x-0"
		>
			<a
				href="/"
				class="col-span-2 flex h-7 w-fit items-center sm:col-span-1"
				aria-label="Glixy home"
			>
				<Logo markOnly />
			</a>

			{#each columns as column (column.title)}
				<nav aria-label={column.title} class="flex flex-col">
					<h3 class="flex h-7 items-center text-sm font-medium text-ink-faint">
						{column.title}
					</h3>
					<ul class="flex flex-col">
						{#each column.links as link (link.href)}
							{@const external = link.href.startsWith('http')}
							<li>
								<a
									href={link.href}
									target={external ? '_blank' : undefined}
									rel={external ? 'noreferrer' : undefined}
									class="flex h-7 w-fit items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
								>
									{link.label}
									{#if external}
										<svg
											class="size-3 shrink-0 text-ink-faint"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											aria-hidden="true"
										>
											<path d="M7 17 17 7M7 7h10v10" />
										</svg>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			{/each}
		</div>

		<p class="mt-20 text-xs text-ink-faint lg:mt-32">
			Built by
			<a
				href="https://github.com/szymeo"
				target="_blank"
				rel="noreferrer"
				class="text-ink-muted transition-colors hover:text-ink"
			>
				@szymeo
			</a>
			on PixiJS 8 and Svelte 5.
		</p>
	</Section>
</footer>
