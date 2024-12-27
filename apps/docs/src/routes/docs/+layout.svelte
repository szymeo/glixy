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
			name: 'Usage',
			path: '/docs/usage',
		},
		{
			name: 'Examples',
			path: '/docs/examples',
		},
	];
</script>

<div class="mx-auto flex h-dvh w-11/12 max-w-4xl flex-col pt-10">
	<div class="sm:px-2">
		<Header />
	</div>

	<div class="flex w-full flex-1 pt-5">
		<div class="h-full w-1/4 shrink-0 sm:hidden">
			<nav class="sticky top-10">
				<ul class="flex flex-col gap-2 text-lg">
					{#each routes as { name, path }}
						<li>
							<a
								href={path}
								class="text-gray-500 hover:text-purple-600"
								class:text-purple-700={page.url.pathname === path}
								draggable="false"
							>
								{name}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>

		<div class="relative flex w-full flex-col overflow-auto">
			{#key page.url.pathname}
				<div class="flex-1 overflow-auto">
					<slot />
				</div>
			{/key}

			<div
				class="mt-auto flex w-full items-center justify-center gap-4 px-4 sm:px-0"
			>
				{#if page.url.pathname !== routes[0].path}
					{@const prevRouteIndex =
						routes.findIndex((route) => route.path === page.url.pathname) - 1}
					<a
						href={routes[prevRouteIndex].path}
						class="h-full w-full cursor-pointer rounded-xl bg-white p-4 px-6 font-semibold shadow ring-1 ring-gray-200 transition-all hover:text-purple-600 hover:shadow-md"
						draggable="false"
					>
						&lt;- Previous Page

						<p class="text-base text-gray-500">
							{routes[prevRouteIndex].name}
						</p>
					</a>
				{/if}

				{#if page.url.pathname !== routes[routes.length - 1].path}
					{@const nextRouteIndex =
						routes.findIndex((route) => route.path === page.url.pathname) + 1}

					<a
						href={routes[nextRouteIndex].path}
						class="h-full w-full cursor-pointer rounded-xl bg-white p-4 px-6 font-semibold shadow ring-1 ring-gray-200 transition-all hover:text-purple-600 hover:shadow-md"
						draggable="false"
					>
						Next Page -&gt;

						<p class="text-base text-gray-500">
							{routes[nextRouteIndex].name}
						</p>
					</a>
				{/if}
			</div>

			<Footer />
		</div>
	</div>
</div>
