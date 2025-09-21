<script lang="ts">
	import { RECTANGLE_CODE_SNIPPET } from '$lib/code-snippets';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import Example from '$lib/components/atoms/Example.svelte';
	import { Rectangle, Stage } from 'glixy';
</script>

<DocsPage title="Rectangle">
	<DocsPageSection>
		{#snippet title()}
			Overview
		{/snippet}
		{#snippet description()}
			The Rectangle component draws rectangular shapes with customizable
			dimensions, colors, borders, and corner radius. It's perfect for creating
			UI elements, backgrounds, buttons, and geometric designs in your Glixy
			application.
		{/snippet}

		{#snippet children()}
			<Example code={RECTANGLE_CODE_SNIPPET} expanded={true}>
				{#snippet children(
					host: HTMLElement,
					hostWidth: number,
					hostHeight: number,
				)}
					<Stage {host} background="#1f2937" antialias={true}>
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
			The Rectangle component accepts the following properties:
		{/snippet}
		{#snippet children()}
			<div class="space-y-4">
				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>width</code>
						<span class="text-sm text-gray-500">(number, required)</span>
					</h4>
					<p class="text-sm text-gray-600">Width of the rectangle in pixels.</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>height</code>
						<span class="text-sm text-gray-500">(number, required)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Height of the rectangle in pixels.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>x</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						X position of the rectangle in pixels.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>y</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Y position of the rectangle in pixels.
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
						<code>anchor</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Absolute anchor point for transformations.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>scale</code>
						<span class="text-sm text-gray-500">
							(object, default: &#123;x: 1, y: 1&#125;)
						</span>
					</h4>
					<p class="text-sm text-gray-600">Scale factor for the rectangle.</p>
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
						Corner radius in pixels for rounded rectangles.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>cursor</code>
						<span class="text-sm text-gray-500">(string, default: "auto")</span>
					</h4>
					<p class="text-sm text-gray-600">
						CSS cursor style when hovering over the rectangle.
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
			The Rectangle component supports mouse and pointer interactions:
		{/snippet}
		{#snippet children()}
			<div class="space-y-4">
				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerover</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer enters the rectangle area.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerout</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer leaves the rectangle area.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerdown</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer is pressed down on the rectangle.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointermove</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer moves over the rectangle.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerup</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer is released over the rectangle.
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
			Important considerations when using the Rectangle component:
		{/snippet}
		{#snippet children()}
			<ul class="list-inside list-disc space-y-2 text-sm text-gray-600">
				<li>Rectangle must be placed inside a Stage or Container</li>
				<li>Width and height are required properties</li>
				<li>
					Colors are specified as hexadecimal numbers (e.g., 0xff0000 for red)
				</li>
				<li>Border width of 0 means no border will be drawn</li>
				<li>
					Corner radius creates rounded corners - higher values create more
					rounded corners
				</li>
				<li>
					Use opacity values to create transparent or semi-transparent effects
				</li>
				<li>
					Interactions automatically make the rectangle interactive - no
					additional setup needed
				</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
