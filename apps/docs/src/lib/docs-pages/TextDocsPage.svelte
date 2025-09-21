<script lang="ts">
	import { TEXT_CODE_SNIPPET } from '$lib/code-snippets';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import Example from '$lib/components/atoms/Example.svelte';
	import { Stage, Text } from 'glixy';
</script>

<DocsPage title="Text">
	<DocsPageSection>
		{#snippet title()}
			Overview
		{/snippet}
		{#snippet description()}
			The Text component renders text content in your Glixy application. It
			provides full control over typography including font family, size, weight,
			style, and color. Text elements can be positioned, rotated, scaled, and
			styled just like other Glixy elements.
		{/snippet}
		{#snippet children()}
			<Example code={TEXT_CODE_SNIPPET} expanded={true}>
				{#snippet children(
					host: HTMLElement,
					hostWidth: number,
					hostHeight: number,
				)}
					<Stage {host} background="#1f2937" antialias={true}>
						<Text
							text="Hello Glixy ✨"
							style={{
								font: 'Overlock',
								color: 0xffffff,
								size: 256,
								weight: 'bold',
								style: 'normal',
							}}
							scale={{ x: 0.2, y: 0.2 }}
							x={hostWidth / 2 - 128}
							y={hostHeight / 2 - 128}
							z={10}
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
			The Text component accepts the following properties:
		{/snippet}
		{#snippet children()}
			<div class="space-y-4">
				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>text</code>
						<span class="text-sm text-gray-500">(string, required)</span>
					</h4>
					<p class="text-sm text-gray-600">The text content to display.</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>style</code>
						<span class="text-sm text-gray-500">(object, required)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Text styling configuration with the following properties:
					</p>
					<ul
						class="mt-2 list-inside list-disc space-y-1 text-xs text-gray-500"
					>
						<li>
							<strong>font</strong>
							(string): Font family name (e.g., 'Arial', 'Helvetica')
						</li>
						<li>
							<strong>size</strong>
							(number): Font size in pixels
						</li>
						<li>
							<strong>color</strong>
							(number): Text color as hex number (e.g., 0x000000 for black)
						</li>
						<li>
							<strong>weight</strong>
							(string): Font weight ('normal', 'bold', 'lighter', etc.)
						</li>
						<li>
							<strong>style</strong>
							(string): Font style ('normal', 'italic', 'oblique')
						</li>
					</ul>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>x</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">X position of the text in pixels.</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>y</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">Y position of the text in pixels.</p>
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
						<code>width</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Width constraint for the text. If 0, text uses natural width.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>height</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Height constraint for the text. If 0, text uses natural height.
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
						<code>opacity</code>
						<span class="text-sm text-gray-500">(number, default: 1)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Opacity value between 0 (transparent) and 1 (opaque).
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>scale</code>
						<span class="text-sm text-gray-500">
							(object, default: &#123;x: 1, y: 1&#125;)
						</span>
					</h4>
					<p class="text-sm text-gray-600">Scale factor for the text.</p>
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
			</div>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Usage Notes
		{/snippet}
		{#snippet description()}
			Important considerations when using the Text component:
		{/snippet}
		{#snippet children()}
			<ul class="list-inside list-disc space-y-2 text-sm text-gray-600">
				<li>Text must be placed inside a Stage or Container</li>
				<li>
					Font families must be available on the user's system or loaded via web
					fonts
				</li>
				<li>
					Colors are specified as hexadecimal numbers (e.g., 0xff0000 for red)
				</li>
				<li>Use anchor points for precise positioning and rotation centers</li>
				<li>
					Text rendering performance is optimized for static text; avoid
					frequent text changes
				</li>
				<li>
					Long text strings may extend beyond the visible area if width/height
					are not set
				</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
