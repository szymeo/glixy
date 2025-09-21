<script lang="ts">
	import '@fontsource/overlock/400.css';
	import '@fontsource/overlock/700.css';
	import '@fontsource/overlock/900.css';

	import '../app.css';
	let { children } = $props();
	import atomOneDark from 'svelte-highlight/styles/atom-one-light';
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

{@render children()}
