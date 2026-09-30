<script lang="ts">
	import { STAR_CODE_SNIPPET } from '$lib/code-snippets';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import Example from '$lib/components/atoms/Example.svelte';
	import { Stage, Star } from 'glixy';
</script>

<DocsPage
	title="Star"
	lede="Star draws a star shape from a point count, an outer and an inner radius, with its own fill and border."
>
	<DocsPageSection>
		{#snippet title()}
			Overview
		{/snippet}
		{#snippet description()}
			The Star component draws star shapes with a customisable number of points,
			sizes, colors, and borders. Use it for decorative elements, rating
			systems, badges, and geometric designs.
		{/snippet}
		{#snippet children()}
			<Example code={STAR_CODE_SNIPPET} expanded={true}>
				{#snippet children(
					host: HTMLElement,
					hostWidth: number,
					hostHeight: number,
				)}
					<Stage {host} background="#f4f4f5" antialias={true}>
						<Star
							x={hostWidth / 2 - 20}
							y={hostHeight / 2 - 20}
							z={10}
							points={5}
							size={100}
							innerSize={40}
							background={{ color: 0x457bf7, opacity: 1 }}
							border={{ color: 0x1c1c1e, width: 8, opacity: 1, rounded: true }}
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
			The Star component accepts the following properties.
		{/snippet}
		{#snippet children()}
			<div class="prop-list">
				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">points</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, required
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Number of points on the star, for example 5 for a traditional star.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">size</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, required
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Outer radius of the star in pixels, the distance from the center to
						the star points.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">innerSize</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, required
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Inner radius of the star in pixels, the distance from the center to
						the inner vertices.
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
						X position of the star center in pixels.
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
						Y position of the star center in pixels.
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
						Rotation angle in radians. Use
						<code class="code-inline">Math.PI / 4</code>
						for 45 degrees.
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
						Scale factor for the star.
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
								<span class="text-ink-faint">number</span>
								fill color as a hex number, for example 0xff0000 for red.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">opacity</code>
								<span class="text-ink-faint">number</span>
								fill opacity between 0 and 1.
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
								<span class="text-ink-faint">number</span>
								border color as a hex number.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">width</code>
								<span class="text-ink-faint">number</span>
								border width in pixels.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">rounded</code>
								<span class="text-ink-faint">boolean</span>
								whether border ends are rounded.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">opacity</code>
								<span class="text-ink-faint">number</span>
								border opacity between 0 and 1.
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
						Corner radius in pixels for rounded star points. Not implemented in
						rendering yet.
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
			The Star component supports mouse and pointer interactions.
		{/snippet}
		{#snippet children()}
			<div class="prop-list">
				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">onpointerover</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							function
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Called when the pointer enters the star area.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">onpointerout</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							function
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Called when the pointer leaves the star area.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">onpointerdown</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							function
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Called when the pointer is pressed down on the star.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">onpointermove</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							function
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Called when the pointer moves over the star.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">onpointerup</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							function
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Called when the pointer is released over the star.
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
			Things to keep in mind when using the Star component.
		{/snippet}
		{#snippet children()}
			<ul class="space-y-1.5 text-sm leading-6 text-ink-muted">
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>Star must be placed inside a Stage or Container.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>The points, size, and innerSize properties are required.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						The size property controls the outer radius, the distance from the
						center to the points.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						The innerSize property controls the inner radius, the distance from
						the center to the inner vertices.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						A smaller innerSize relative to size creates sharper, more pointed
						stars.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						A larger innerSize relative to size creates more rounded,
						flower-like shapes.
					</span>
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
					<span>The star is drawn from the center position outward.</span>
				</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
