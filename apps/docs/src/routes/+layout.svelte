<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import atomOneDark from 'svelte-highlight/styles/atom-one-light';
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

{@render children()}
