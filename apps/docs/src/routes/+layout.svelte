<script lang="ts">
	import '@fontsource/overlock/400.css';
	import '@fontsource/overlock/700.css';
	import '@fontsource/overlock/900.css';

	import '../app.css';
	import 'svelte-highlight/styles/atom-one-light.css';

	let { children } = $props();
</script>

{@render children()}
