<script lang="ts">
	import { HighlightAuto } from 'svelte-highlight';

	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import { CONTAINER_CODE_SNIPPET } from '$lib/code-snippets';
</script>

<DocsPage title="Container">
	<DocsPageSection>
		{#snippet title()}
			Overview
		{/snippet}
		{#snippet description()}
			The Container component is a grouping element that allows you to organize
			and transform multiple child elements together. It's similar to a
			&lt;div&gt; in HTML - it provides a way to group elements and apply
			transformations like position, rotation, and scale to all children at
			once.
		{/snippet}
		{#snippet code()}
			<HighlightAuto class="code-snippet" code={CONTAINER_CODE_SNIPPET} />
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Props
		{/snippet}
		{#snippet description()}
			The Container component accepts the following transformation properties:
		{/snippet}
		{#snippet children()}
			<div class="space-y-4">
				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>x</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						X position of the container in pixels.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>y</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Y position of the container in pixels.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>rotation</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Rotation angle in radians. Use <code>Math.PI / 4</code>
						for 45 degrees.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>anchor</code>
						<span class="text-sm text-gray-500">
							(object, default: &#123;x: 0, y: 0&#125;)
						</span>
					</h4>
					<p class="text-sm text-gray-600">
						Anchor point for transformations. <code>
							&#123;x: 0.5, y: 0.5&#125;
						</code>
						centers the anchor.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>scale</code>
						<span class="text-sm text-gray-500">
							(object, default: &#123;x: 1, y: 1&#125;)
						</span>
					</h4>
					<p class="text-sm text-gray-600">
						Scale factor for the container and all its children. <code>
							&#123;x: 2, y: 2&#125;
						</code>
						doubles the size.
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
			Important considerations when using the Container component:
		{/snippet}
		{#snippet children()}
			<ul class="list-inside list-disc space-y-2 text-sm text-gray-600">
				<li>Container must be placed inside a Stage or another Container</li>
				<li>All transformations applied to a Container affect its children</li>
				<li>
					Child element positions are relative to the Container's position
				</li>
				<li>Containers can be nested to create complex hierarchies</li>
				<li>Use Containers to group related elements for easier management</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
