<script lang="ts">
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import Logo from '$lib/icons/Logo.svelte';
	import { page } from '$app/state';

	// Examples lives under /docs too, so it is checked first.
	const active = $derived(
		page.url.pathname.startsWith('/docs/examples')
			? 'Examples'
			: page.url.pathname.startsWith('/docs')
				? 'Docs'
				: null,
	);
</script>

<nav class="sticky top-0 z-50 w-full shrink-0 border-b border-line bg-surface">
	<div
		class="mx-auto flex h-16 w-full max-w-landing items-center gap-5 px-4 sm:px-6 lg:px-10"
	>
		<a href="/" class="flex shrink-0 items-center" aria-label="Glixy home">
			<Logo />
		</a>

		<ul class="ml-auto flex items-center gap-1 text-[15px]">
			<li>{@render link('Docs', '/docs/installation')}</li>
			<li class="hidden sm:block">
				{@render link('Examples', '/docs/examples')}
			</li>
		</ul>

		<div
			aria-hidden="true"
			class="-ml-3 hidden h-4 w-px bg-line sm:block"
		></div>

		<a
			class="btn btn-secondary btn-sm"
			href="https://github.com/szymeo/glixy"
			target="_blank"
			rel="noreferrer"
		>
			<GithubIcon class="size-4" />
			GitHub
		</a>
	</div>
</nav>

{#snippet link(label: string, href: string)}
	<a
		{href}
		class={[
			'rounded-lg px-3 py-1.5 transition-colors hover:text-ink',
			active === label ? 'text-ink' : 'text-ink-muted',
		]}
		aria-current={active === label ? 'page' : undefined}
	>
		{label}
	</a>
{/snippet}
