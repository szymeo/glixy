<script lang="ts">
	import { STAR_CODE_SNIPPET } from '$lib/code-snippets';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import Example from '$lib/components/atoms/Example.svelte';
	import { Rectangle, Stage, Star } from 'glixy';
</script>

<DocsPage title="Star">
	<DocsPageSection>
		{#snippet title()}
			Overview
		{/snippet}
		{#snippet description()}
			The Star component draws star shapes with customizable number of points,
			sizes, colors, and borders. It's perfect for creating decorative elements,
			rating systems, badges, and geometric designs in your Glixy application.
		{/snippet}
		{#snippet children()}
			<Example code={STAR_CODE_SNIPPET} expanded={true}>
				{#snippet children(
					host: HTMLElement,
					hostWidth: number,
					hostHeight: number,
				)}
					<Stage {host} background="#1f2937" antialias={true}>
						<Star
							x={hostWidth / 2 - 20}
							y={hostHeight / 2 - 20}
							z={10}
							points={5}
							size={100}
							innerSize={40}
							background={{ color: 0x457bf7, opacity: 1 }}
							border={{ color: 0xffffff, width: 8, opacity: 1, rounded: true }}
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
			The Star component accepts the following properties:
		{/snippet}
		{#snippet children()}
			<div class="space-y-4">
				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>points</code>
						<span class="text-sm text-gray-500">(number, required)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Number of points on the star (e.g., 5 for a traditional star).
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>size</code>
						<span class="text-sm text-gray-500">(number, required)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Outer radius of the star in pixels (distance from center to star
						points).
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>innerSize</code>
						<span class="text-sm text-gray-500">(number, required)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Inner radius of the star in pixels (distance from center to inner
						vertices).
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>x</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						X position of the star center in pixels.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>y</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Y position of the star center in pixels.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>z</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Z-index for layering. Higher values appear on top.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>rotation</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">Rotation angle in radians.</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>scale</code>
						<span class="text-sm text-gray-500">
							(object, default: &#123;x: 1, y: 1&#125;)
						</span>
					</h4>
					<p class="text-sm text-gray-600">Scale factor for the star.</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>background</code>
						<span class="text-sm text-gray-500">
							(object, default: &#123;color: 0, opacity: 1&#125;)
						</span>
					</h4>
					<p class="text-sm text-gray-600">Background fill configuration:</p>
					<ul
						class="mt-2 list-inside list-disc space-y-1 text-xs text-gray-500"
					>
						<li>
							<strong>color</strong>
							(number): Fill color as hex number (e.g., 0xff0000 for red)
						</li>
						<li>
							<strong>opacity</strong>
							(number): Fill opacity between 0 and 1
						</li>
					</ul>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>border</code>
						<span class="text-sm text-gray-500">
							(object, default: &#123;color: 0, width: 0, rounded: false,
							opacity: 1&#125;)
						</span>
					</h4>
					<p class="text-sm text-gray-600">Border configuration:</p>
					<ul
						class="mt-2 list-inside list-disc space-y-1 text-xs text-gray-500"
					>
						<li>
							<strong>color</strong>
							(number): Border color as hex number
						</li>
						<li>
							<strong>width</strong>
							(number): Border width in pixels
						</li>
						<li>
							<strong>rounded</strong>
							(boolean): Whether border ends are rounded
						</li>
						<li>
							<strong>opacity</strong>
							(number): Border opacity between 0 and 1
						</li>
					</ul>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>cornerRadius</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Corner radius in pixels for rounded star points (currently not
						implemented in rendering).
					</p>
				</div>
			</div>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Interaction Props
		{/snippet}
		{#snippet description()}
			The Star component supports mouse and pointer interactions:
		{/snippet}
		{#snippet children()}
			<div class="space-y-4">
				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerover</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer enters the star area.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerout</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer leaves the star area.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerdown</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer is pressed down on the star.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointermove</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer moves over the star.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerup</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer is released over the star.
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
			Important considerations when using the Star component:
		{/snippet}
		{#snippet children()}
			<ul class="list-inside list-disc space-y-2 text-sm text-gray-600">
				<li>Star must be placed inside a Stage or Container</li>
				<li>Points, size, and innerSize are required properties</li>
				<li>
					The size property controls the outer radius (distance from center to
					points)
				</li>
				<li>
					The innerSize property controls the inner radius (distance from center
					to inner vertices)
				</li>
				<li>
					A smaller innerSize relative to size creates sharper, more pointed
					stars
				</li>
				<li>
					A larger innerSize relative to size creates more rounded, flower-like
					shapes
				</li>
				<li>
					Colors are specified as hexadecimal numbers (e.g., 0xff0000 for red)
				</li>
				<li>The star is drawn from the center position outward</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
