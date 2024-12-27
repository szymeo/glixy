<script lang="ts">
	const { children, title } = $props();
</script>

<h1 class="mb-4 text-4xl">{title}</h1>

{@render children()}
