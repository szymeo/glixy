<script lang="ts">
	import Header from './Header.svelte';
	import Features from './Features.svelte';
	import BasicSprite from '../lib/examples/RotateSpriteExample.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="mx-auto h-full w-11/12 max-w-5xl py-10">
	<div class="mb-8 sm:px-2">
		<Header>
			<h1 class="text-lg font-semibold text-slate-500/80">
				2D WebGL scenes as
				<span class="font-bold italic text-purple-600">Svelte components</span>
			</h1>
		</Header>
	</div>

	<BasicSprite />

	<Features />

	<div class="mt-14 flex w-full text-2xl">
		<a
			href="/docs/installation"
			class="h-full w-full cursor-pointer rounded-xl p-4 px-6 font-semibold ring-1 ring-gray-300 transition-all hover:bg-gray-50 hover:text-purple-600"
		>
			Next Chapter -&gt;

			<p class="text-base text-gray-500">Installation</p>
		</a>
	</div>

	<Footer />
</div>
