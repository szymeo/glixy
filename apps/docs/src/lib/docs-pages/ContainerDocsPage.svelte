<script lang="ts">
	import CodeBlock from '$lib/components/atoms/CodeBlock.svelte';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import { CONTAINER_CODE_SNIPPET } from '$lib/code-snippets';
</script>

<DocsPage
	title="Container"
	lede="Container groups child elements so one transform moves, rotates, and scales all of them together."
>
	<DocsPageSection>
		{#snippet title()}
			Overview
		{/snippet}
		{#snippet description()}
			The Container component is a grouping element that lets you organize and
			transform multiple child elements together. It is similar to a
			<code class="code-inline">&lt;div&gt;</code>
			in HTML: it groups elements and applies transformations like position, rotation,
			and scale to every child at once.
		{/snippet}
		{#snippet code()}
			<CodeBlock code={CONTAINER_CODE_SNIPPET} />
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Props
		{/snippet}
		{#snippet description()}
			The Container component accepts the following transformation properties.
		{/snippet}
		{#snippet children()}
			<div class="prop-list">
				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">x</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, default 0
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						X position of the container in pixels.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">y</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, default 0
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Y position of the container in pixels.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">rotation</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, default 0
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Rotation angle in radians. Use
						<code class="code-inline">Math.PI / 4</code>
						for 45 degrees.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">anchor</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							object, default &#123;x: 0, y: 0&#125;
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Anchor point for transformations.
						<code class="code-inline">&#123;x: 0.5, y: 0.5&#125;</code>
						centers the anchor.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">scale</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							object, default &#123;x: 1, y: 1&#125;
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Scale factor for the container and all of its children.
						<code class="code-inline">&#123;x: 2, y: 2&#125;</code>
						doubles the size.
					</p>
				</div>
			</div>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Usage notes
		{/snippet}
		{#snippet description()}
			Things to keep in mind when using the Container component.
		{/snippet}
		{#snippet children()}
			<ul class="space-y-1.5 text-sm leading-6 text-ink-muted">
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Container must be placed inside a Stage or another Container.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Every transformation applied to a Container affects its children.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Child element positions are relative to the Container's position.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>Containers can be nested to create deeper hierarchies.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Use Containers to group related elements for easier management.
					</span>
				</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
