<script lang="ts">
	// import Example from './Example.svelte';
	import Header from './Header.svelte';
	import Features from './Features.svelte';
	import BasicSprite from './_examples/BasicSprite.svelte';
	import Resizable from './_examples/resizable/Resizable.svelte';
	import VideoExample from './_examples/VideoExample.svelte';
	import Clock from './_examples/Clock.svelte';
</script>

<div class="mx-auto flex h-dvh w-full">
	<div class="flex flex-col gap-4">
		<Header />
	</div>

	<div class="relative h-full w-full">
		<Clock />
	</div>
	<!-- <BasicSprite /> -->
	<!-- <Resizable /> -->
	<!-- <VideoExample /> -->
</div>
