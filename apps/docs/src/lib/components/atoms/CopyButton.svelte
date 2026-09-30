<script lang="ts">
	type Props = {
		text: string;
		class?: string;
	};

	const { text, class: className = '' }: Props = $props();

	let copied = $state(false);

	// The check is time-based, so the reset lives where it can be cancelled.
	$effect(() => {
		if (!copied) return;

		const timeout = setTimeout(() => (copied = false), 1500);

		return () => clearTimeout(timeout);
	});

	async function copy() {
		try {
			await navigator.clipboard.writeText(text);
			copied = true;
		} catch {
			// Clipboard is blocked (insecure context, denied permission). The text
			// is still selectable, so fail quietly.
		}
	}
</script>

<button
	type="button"
	onclick={copy}
	aria-label={copied ? 'Copied' : 'Copy'}
	class="icon-btn size-7 rounded-md {className}"
>
	<svg
		class="size-3.5"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		{#if copied}
			<path d="M20 6 9 17l-5-5" />
		{:else}
			<rect x="9" y="9" width="13" height="13" rx="2" />
			<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
		{/if}
	</svg>
</button>
