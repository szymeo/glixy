<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		class?: string;
		/** Full-width hairline under the section. Off where the next one continues the thought. */
		divider?: boolean;
		/** Full-width hairline above it, for the first section after a borderless one. */
		dividerTop?: boolean;
		children?: Snippet;
	};

	const {
		id,
		class: className = '',
		divider = true,
		dividerTop = false,
		children,
	}: Props = $props();
</script>

<!--
	The page is ruled: every section is a full-width band closed by a
	hairline, and inside it the column between two rails that run the length
	of the page. The rails show from lg, where there is room either side.
-->
<section
	{id}
	class={[
		'w-full scroll-mt-16 border-line',
		{ 'border-b': divider, 'border-t': dividerTop },
	]}
>
	<div class="mx-auto w-full max-w-landing lg:px-10">
		<div class={['w-full border-line lg:border-x', className]}>
			{@render children?.()}
		</div>
	</div>
</section>
