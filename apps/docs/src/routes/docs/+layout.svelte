<script lang="ts">
	import Header from '../Header.svelte';
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	const routes = [
		{
			name: 'Installation',
			path: '/docs/installation',
		},
		{
			name: 'Getting Started',
			path: '/docs/getting-started',
		},
		{
			name: 'Elements',
			path: '/docs/elements',
			children: [
				{
					name: 'Stage',
					path: '/docs/elements/stage',
				},
				{
					name: 'Container',
					path: '/docs/elements/container',
				},
				{
					name: 'Sprite',
					path: '/docs/elements/sprite',
				},
				{
					name: 'Text',
					path: '/docs/elements/text',
				},
				{
					name: 'Video',
					path: '/docs/elements/video',
				},
				{
					name: 'Rectangle',
					path: '/docs/elements/rectangle',
				},
				{
					name: 'Star',
					path: '/docs/elements/star',
				},
			],
		},
		{
			name: 'Made with Glixy',
			path: '/docs/examples',
		},
	];

	// Pages in reading order: child routes replace their parent.
	const flattenedRoutes = routes.flatMap((route) => route.children ?? [route]);

	const currentName = $derived(
		flattenedRoutes.find((route) => route.path === page.url.pathname)?.name ??
			'Documentation',
	);

	let mobileNavOpen = $state(false);

	afterNavigate(() => {
		mobileNavOpen = false;
	});
</script>

{#snippet navLinks()}
	<ul class="flex flex-col gap-2 text-lg">
		{#each routes as { name, path, children }}
			<li>
				<a
					href={path}
					class="text-gray-500 hover:text-purple-600"
					class:text-purple-700={page.url.pathname === path}
					draggable="false"
				>
					{name}
				</a>
				{#if children}
					<ul class="ml-4">
						{#each children as { name, path }}
							<li>
								<a
									href={path}
									class="text-gray-500 hover:text-purple-600"
									class:text-purple-700={page.url.pathname === path}
								>
									{name}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
{/snippet}

<div class="mx-auto w-11/12 max-w-5xl pt-10">
	<div class="sm:px-2">
		<Header />
	</div>

	<div class="flex w-full pt-5">
		<div class="w-1/4 shrink-0 sm:hidden">
			<nav class="sticky top-10" aria-label="Documentation">
				{@render navLinks()}
			</nav>
		</div>

		<div class="flex min-w-0 flex-1 flex-col px-1">
			<!-- The sidebar is hidden on small screens, so offer the same links here. -->
			<details
				bind:open={mobileNavOpen}
				class="group mb-6 hidden rounded-xl border border-gray-200 bg-white sm:block"
			>
				<summary
					class="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-lg font-semibold [&::-webkit-details-marker]:hidden"
				>
					{currentName}
					<svg
						class="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180"
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
				</summary>

				<nav
					class="border-t border-gray-200 px-4 py-3"
					aria-label="Documentation"
				>
					{@render navLinks()}
				</nav>
			</details>

			{#key page.url.pathname}
				{@render children()}
			{/key}

			<div class="mt-16 flex w-full items-center justify-center gap-4 sm:px-0">
				{#if page.url.pathname !== flattenedRoutes[0].path}
					{@const prevRouteIndex =
						flattenedRoutes.findIndex(
							(route) => route.path === page.url.pathname,
						) - 1}
					{#if prevRouteIndex >= 0}
						<a
							href={flattenedRoutes[prevRouteIndex].path}
							class="h-full w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-4 px-6 font-semibold transition-all duration-150 hover:text-purple-600 hover:shadow"
							draggable="false"
						>
							&lt;- Previous Page

							<p class="text-base text-gray-500">
								{flattenedRoutes[prevRouteIndex].name}
							</p>
						</a>
					{/if}
				{/if}

				{#if page.url.pathname !== flattenedRoutes[flattenedRoutes.length - 1].path}
					{@const nextRouteIndex =
						flattenedRoutes.findIndex(
							(route) => route.path === page.url.pathname,
						) + 1}
					{#if nextRouteIndex < flattenedRoutes.length}
						<a
							href={flattenedRoutes[nextRouteIndex].path}
							class="h-full w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-4 px-6 font-semibold transition-all duration-150 hover:text-purple-600 hover:shadow"
							draggable="false"
						>
							Next Page -&gt;

							<p class="text-base text-gray-500">
								{flattenedRoutes[nextRouteIndex].name}
							</p>
						</a>
					{/if}
				{/if}
			</div>
		</div>
	</div>

	<Footer />
</div>
