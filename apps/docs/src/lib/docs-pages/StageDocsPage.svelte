<script lang="ts">
	import { STAGE_CODE_SNIPPET } from '$lib/code-snippets';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import { HighlightAuto } from 'svelte-highlight';
</script>

<DocsPage title="Stage">
	<DocsPageSection>
		{#snippet title()}
			Overview
		{/snippet}
		{#snippet description()}
			The Stage component is the root container for all Glixy elements. It
			initializes a PixiJS Application and provides the rendering context for
			all child elements. Every Glixy application must start with a Stage
			component.
		{/snippet}
		{#snippet code()}
			<HighlightAuto class="code-snippet" code={STAGE_CODE_SNIPPET} />
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Props
		{/snippet}
		{#snippet description()}
			The Stage component accepts all PixiJS Application initialization options
			plus the following:
		{/snippet}
		{#snippet children()}
			<div class="space-y-4">
				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>host</code>
						<span class="text-sm text-gray-500">(HTMLElement, required)</span>
					</h4>
					<p class="text-sm text-gray-600">
						The DOM element that will contain the PixiJS canvas. The Stage will
						automatically resize to fit this container.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>mounted</code>
						<span class="text-sm text-gray-500">(boolean, bindable)</span>
					</h4>
					<p class="text-sm text-gray-600">
						A bindable property that becomes <code>true</code>
						when the PixiJS Application is fully initialized and ready to render
						child elements.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>width</code>
						<span class="text-sm text-gray-500">(number, optional)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Initial width of the canvas. If not specified, will resize to the
						host container.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>height</code>
						<span class="text-sm text-gray-500">(number, optional)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Initial height of the canvas. If not specified, will resize to the
						host container.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>backgroundColor</code>
						<span class="text-sm text-gray-500">(number, optional)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Background color of the canvas as a hex number (e.g., <code>
							0x1099bb
						</code>
						).
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>backgroundAlpha</code>
						<span class="text-sm text-gray-500">(number, optional)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Background alpha/opacity value between 0 and 1.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>resolution</code>
						<span class="text-sm text-gray-500">(number, optional)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Rendering resolution. Defaults to <code>
							window.devicePixelRatio
						</code>
						for crisp rendering on high-DPI displays.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>antialias</code>
						<span class="text-sm text-gray-500">(boolean, optional)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Enable antialiasing for smoother graphics. Default is <code>
							false
						</code>
						.
					</p>
				</div>
			</div>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Usage Notes
		{/snippet}
		{#snippet description()}
			Important considerations when using the Stage component:
		{/snippet}
		{#snippet children()}
			<ul class="list-inside list-disc space-y-2 text-sm text-gray-600">
				<li>
					The Stage component must be the root container for all other Glixy
					elements
				</li>
				<li>
					Nested Stage components are not supported and will throw an error
				</li>
				<li>
					Always wait for the <code>mounted</code>
					prop to be
					<code>true</code>
					before rendering child elements
				</li>
				<li>
					The canvas will automatically resize to match the host container
				</li>
				<li>
					The Stage uses a 60fps render loop that only updates when changes are
					detected
				</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
