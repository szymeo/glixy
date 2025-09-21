<script lang="ts">
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import Logo from '$lib/icons/Logo.svelte';
	import type { Snippet } from 'svelte';

	const { children }: { children?: Snippet } = $props();
</script>

<div class="flex items-center justify-between">
	<a href="/">
		<Logo class="h-16 w-32" />
	</a>

	<a
		class="flex items-center justify-center gap-2 rounded-full bg-white p-2 pl-4 font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md sm:bg-transparent sm:pl-2 sm:shadow-none sm:ring-0 sm:hover:shadow-none"
		href="https://github.com/szymeo/glixy"
		target="_blank"
	>
		<span class="sm:hidden">Source Code</span>

		<GithubIcon class="h-6 w-6 sm:h-9 sm:w-9" />
	</a>
</div>

{#if children}
	{@render children()}
{/if}
