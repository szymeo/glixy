<script lang="ts">
	import { HighlightAuto } from 'svelte-highlight';
</script>

<div class="my-12">
	<h2 class="mb-4 text-3xl"># Installation</h2>

	<HighlightAuto
		class="overflow-hidden rounded-xl border ring-gray-200 [&>code.hljs]:bg-gray-100 [&>code.hljs]:p-8"
		code={`npm install glixy # suck it off in npm

yarn add glixy # or yarn

pnpm add glixy # or pnpm`}
	></HighlightAuto>
</div>
