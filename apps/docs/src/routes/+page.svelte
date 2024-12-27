<script lang="ts">
	// import Example from './Example.svelte';
	import Header from './Header.svelte';
	import Features from './Features.svelte';
	import BasicSprite from './_examples/BasicSprite.svelte';
	import Installation from '$lib/components/Installation.svelte';
</script>

<div class="mx-auto h-full w-10/12 max-w-4xl py-4">
	<Header />

	<BasicSprite />

	<Features />

	<div class="mt-20 flex h-44 w-full text-2xl">
		<a
			class="h-fit w-full cursor-pointer rounded-xl p-4 px-6 font-semibold ring-1 ring-gray-300 transition-all hover:bg-gray-50 hover:text-purple-600"
		>
			Next Chapter -&gt;

			<p class="text-base text-gray-500">Just suck it off (Installation)</p>
		</a>
	</div>

	<footer class="pb-10">
		<p class="mt-8 text-center text-base text-gray-500">
			Made with ❤️ by <a
				href="https://github.com/szymeo"
				target="_blank"
				class="font-semibold text-purple-600"
			>
				@szymeo
			</a>
		</p>
	</footer>
</div>
