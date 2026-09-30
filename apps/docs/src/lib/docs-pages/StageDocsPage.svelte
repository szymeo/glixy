<script lang="ts">
	import {
		STAGE_CODE_SNIPPET,
		STAGE_WORKER_CODE_SNIPPET,
	} from '$lib/code-snippets';
	import CodeBlock from '$lib/components/atoms/CodeBlock.svelte';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
</script>

<DocsPage
	title="Stage"
	lede="Stage is the root element that boots a PixiJS application and renders every Glixy element inside it."
>
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
			<CodeBlock code={STAGE_CODE_SNIPPET} />
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
			<div class="prop-list">
				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">host</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							HTMLElement, required
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						The DOM element that will contain the PixiJS canvas. The Stage
						resizes to fit this container.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">worker</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							boolean, default false
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Render through a web worker instead of the main thread. Set it to
						<code class="code-inline">true</code>
						to use an offscreen canvas with the PixiJS WebWorkerAdapter.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">mounted</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							boolean, bindable
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Becomes <code class="code-inline">true</code>
						when the PixiJS Application is fully initialized and ready to render
						child elements.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">width</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, optional
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Initial width of the canvas. If not specified, the canvas resizes to
						the host container.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">height</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, optional
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Initial height of the canvas. If not specified, the canvas resizes
						to the host container.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">backgroundColor</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, optional
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Background colour of the canvas, given as a hex number such as
						<code class="code-inline">0x111111</code>
						rather than a CSS colour string.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">backgroundAlpha</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, optional
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Background opacity, between 0 and 1.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">resolution</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, optional
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Rendering resolution. Defaults to <code class="code-inline">
							window.devicePixelRatio
						</code>
						for crisp rendering on high-DPI displays.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">antialias</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							boolean, default false
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Enable antialiasing for smoother edges on drawn graphics.
					</p>
				</div>
			</div>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Web worker mode
		{/snippet}
		{#snippet description()}
			Move rendering off the main thread with the <code class="code-inline">
				worker
			</code>
			property.
		{/snippet}
		{#snippet code()}
			<CodeBlock code={STAGE_WORKER_CODE_SNIPPET} />
		{/snippet}
		{#snippet children()}
			<p class="mb-3 mt-4 text-sm leading-6 text-ink-muted">
				With web worker mode enabled, the Stage:
			</p>
			<ul class="space-y-1.5 text-sm leading-6 text-ink-muted">
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>Uses the PixiJS WebWorkerAdapter for offscreen rendering.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>Transfers canvas control to an offscreen canvas.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Avoids blocking the main thread during intensive rendering.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>Suits complex scenes with many animated elements.</span>
				</li>
			</ul>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Usage notes
		{/snippet}
		{#snippet description()}
			Things to know when using the Stage component.
		{/snippet}
		{#snippet children()}
			<ul class="space-y-1.5 text-sm leading-6 text-ink-muted">
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Stage must be the root container for all other Glixy elements.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>Nested Stage components are not supported and throw.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Wait for <code class="code-inline">mounted</code>
						to be
						<code class="code-inline">true</code>
						before rendering child elements.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>The canvas resizes to match the host container.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						The Stage runs a 60fps render loop that only draws when something
						changed.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Use <code class="code-inline">{'worker={true}'}</code>
						for heavy rendering workloads.
					</span>
				</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
