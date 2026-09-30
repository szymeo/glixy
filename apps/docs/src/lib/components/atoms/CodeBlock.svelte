<script lang="ts">
	import Highlight, { HighlightAuto } from 'svelte-highlight';
	import type { LanguageType } from 'svelte-highlight/languages';
	import CopyButton from './CopyButton.svelte';

	type Props = {
		code: string;
		/** Show a copy button. Off for long illustrative snippets. */
		copyable?: boolean;
		/** Pin the grammar where auto-detection guesses wrong, like one-line shell commands. */
		language?: LanguageType<string>;
		class?: string;
	};

	const {
		code,
		copyable = true,
		language,
		class: className = '',
	}: Props = $props();
</script>

<!--
	The right padding is a gutter the code never scrolls into, so a long first
	line clips against empty space instead of sliding under the copy button.
-->
<div class="code-block relative {copyable ? 'pr-10' : ''} {className}">
	{#if language}
		<Highlight {code} {language} />
	{:else}
		<HighlightAuto {code} />
	{/if}

	{#if copyable}
		<CopyButton
			text={code}
			class="absolute right-2.5 top-2.5 bg-surface-raised"
		/>
	{/if}
</div>
