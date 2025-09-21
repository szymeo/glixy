<script lang="ts">
	// import Example from './Example.svelte';
	import Header from './Header.svelte';
	import Features from './Features.svelte';
	import BasicSprite from './_examples/BasicSprite.svelte';
	import Resizable from './_examples/resizable/Resizable.svelte';
	import VideoExample from './_examples/VideoExample.svelte';
	import Clock from './_examples/Clock.svelte';
</script>

<div class="mx-auto h-full w-10/12 max-w-4xl py-4">
	<Header />

	<Clock />
	<!-- <BasicSprite /> -->
	<!-- <Resizable /> -->
	<!-- <VideoExample /> -->

	<footer class="pb-10">
		<p class="mt-8 text-center text-sm text-gray-300">
			Made with ❤️ by <a
				href="https://github.com/szymeo"
				target="_blank"
				class="underline"
			>
				@szymeo
			</a>
		</p>
	</footer>
</div>
