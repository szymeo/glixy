<script lang="ts">
	// Variable fonts: one file each covers every weight, so the type scale
	// uses real weights instead of faux bolding.
	import '@fontsource-variable/inter';
	import '@fontsource-variable/geist-mono';

	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="theme-color" content="#fafafa" />
</svelte:head>

{@render children()}
