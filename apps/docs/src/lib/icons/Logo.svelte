<script lang="ts">
	type Props = {
		class?: string;
		/** Hide the wordmark where the layout already names the product. */
		markOnly?: boolean;
	};

	const { class: className = '', markOnly = false }: Props = $props();
</script>

<span class="flex items-center gap-2 {className}">
	<img
		src="/glixy-mark.png"
		alt={markOnly ? 'Glixy' : ''}
		width="24"
		height="24"
		class="size-6 rounded-md"
		draggable="false"
	/>

	{#if !markOnly}
		<span class="text-[18px] font-semibold tracking-[-0.03em] text-ink">
			Glixy
		</span>
	{/if}
</span>
