<script>
	import Header from '../Header.svelte';
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	import Footer from '$lib/components/Footer.svelte';

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

	// Create a flattened array of all routes for navigation
	const flattenedRoutes = [];

	routes.forEach((route) => {
		if (route.children) {
			// Add child routes instead of parent route for navigation
			route.children.forEach((child) => {
				flattenedRoutes.push(child);
			});
		} else {
			flattenedRoutes.push(route);
		}
	});
</script>

<div class="mx-auto flex h-dvh w-11/12 max-w-5xl flex-col pt-10">
	<div class="sm:px-2">
		<Header />
	</div>

	<div class="flex w-full flex-1 pt-5">
		<div class="h-full w-1/4 shrink-0 sm:hidden">
			<nav class="sticky top-10">
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
			</nav>
		</div>

		<div class="relative flex w-full flex-col overflow-auto px-1">
			{#key page.url.pathname}
				<div class="flex-1 overflow-auto">
					<slot />
				</div>
			{/key}

			<div
				class="mt-auto flex w-full items-center justify-center gap-4 sm:px-0"
			>
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

			<Footer />
		</div>
	</div>
</div>
