<script lang="ts">
	import { RECTANGLE_CODE_SNIPPET } from '$lib/code-snippets';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import Example from '$lib/components/atoms/Example.svelte';
	import { Rectangle, Stage } from 'glixy';
</script>

<DocsPage
	title="Rectangle"
	lede="Rectangle draws a rectangular shape with a fill, a border, and optional rounded corners."
>
	<DocsPageSection>
		{#snippet title()}
			Overview
		{/snippet}
		{#snippet description()}
			Rectangle draws rectangular shapes with configurable dimensions, colors,
			borders, and corner radius. Use it for UI elements, backgrounds, buttons,
			and geometric designs.
		{/snippet}

		{#snippet children()}
			<Example code={RECTANGLE_CODE_SNIPPET} expanded={true}>
				{#snippet children(
					host: HTMLElement,
					hostWidth: number,
					hostHeight: number,
				)}
					<Stage {host} background="#f4f4f5" antialias={true}>
						<Rectangle
							x={hostWidth / 2 - 100}
							y={hostHeight / 2 - 75}
							width={200}
							height={150}
							background={{ color: 0xac4de5, opacity: 1 }}
							border={{ color: 0xfdc02a, width: 8, opacity: 1, rounded: false }}
							cornerRadius={5}
						/>
					</Stage>
				{/snippet}
			</Example>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Props
		{/snippet}
		{#snippet description()}
			Rectangle accepts the following properties.
		{/snippet}
		{#snippet children()}
			<div class="prop-list">
				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">width</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, required
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Width of the rectangle in pixels.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">height</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, required
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Height of the rectangle in pixels.
					</p>
				</div>

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
						X position of the rectangle in pixels.
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
						Y position of the rectangle in pixels.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">z</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, default 0
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Z-index for layering. Higher values appear on top.
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
						Rotation angle in radians.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">anchor</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, default 0
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Absolute anchor point for transformations.
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
						Scale factor for the rectangle.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">background</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							object, default &#123;color: 0, opacity: 1&#125;
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Background fill configuration.
					</p>
					<ul class="mt-2 space-y-1.5 text-sm leading-6 text-ink-muted">
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">color</code>
								number. Fill color as a hex number, for example 0xff0000 for red.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">opacity</code>
								number. Fill opacity between 0 and 1.
							</span>
						</li>
					</ul>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">border</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							object, default &#123;color: 0, width: 0, rounded: false, opacity:
							1&#125;
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Border configuration.
					</p>
					<ul class="mt-2 space-y-1.5 text-sm leading-6 text-ink-muted">
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">color</code>
								number. Border color as a hex number.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">width</code>
								number. Border width in pixels.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">rounded</code>
								boolean. Whether border ends are rounded.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">opacity</code>
								number. Border opacity between 0 and 1.
							</span>
						</li>
					</ul>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">cornerRadius</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, default 0
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Corner radius in pixels for rounded rectangles.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">cursor</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							string, default auto
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						CSS cursor style when hovering over the rectangle.
					</p>
				</div>
			</div>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Interaction props
		{/snippet}
		{#snippet description()}
			Rectangle supports mouse and pointer interactions.
		{/snippet}
		{#snippet children()}
			<div class="prop-list">
				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">onpointerover</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							function, optional
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Called when the pointer enters the rectangle area.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">onpointerout</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							function, optional
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Called when the pointer leaves the rectangle area.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">onpointerdown</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							function, optional
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Called when the pointer is pressed down on the rectangle.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">onpointermove</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							function, optional
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Called when the pointer moves over the rectangle.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">onpointerup</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							function, optional
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Called when the pointer is released over the rectangle.
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
			Things worth knowing when using Rectangle.
		{/snippet}
		{#snippet children()}
			<ul class="space-y-1.5 text-sm leading-6 text-ink-muted">
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>Rectangle must be placed inside a Stage or Container.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>Width and height are required.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Colors are specified as hexadecimal numbers, for example 0xff0000
						for red.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>A border width of 0 means no border is drawn.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Corner radius rounds the corners. Higher values round them more.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Opacity values create transparent or semi-transparent effects.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Passing an interaction handler makes the rectangle interactive. No
						additional setup is needed.
					</span>
				</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
