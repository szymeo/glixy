<script lang="ts">
	import { SPRITE_CODE_SNIPPET } from '$lib/code-snippets';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import Example from '$lib/components/atoms/Example.svelte';
	import { Sprite, Stage } from 'glixy';
</script>

<DocsPage title="Sprite">
	<DocsPageSection>
		{#snippet title()}
			Overview
		{/snippet}

		{#snippet description()}
			The Sprite component displays images and textures in your Glixy
			application. It supports various image formats and provides powerful
			features like object fitting, transformations, interactions, and opacity
			control.
		{/snippet}

		{#snippet children()}
			<Example code={SPRITE_CODE_SNIPPET} expanded={true}>
				{#snippet children(
					host: HTMLElement,
					hostWidth: number,
					hostHeight: number,
				)}
					<Stage {host} background="#1f2937" antialias={true}>
						<Sprite
							anchor={{ x: 0.5, y: 0.5 }}
							texture="/bunny.png"
							x={hostWidth / 2}
							y={hostHeight / 2}
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
			The Sprite component accepts the following properties:
		{/snippet}
		{#snippet children()}
			<div class="space-y-4">
				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>texture</code>
						<span class="text-sm text-gray-500">(string, required)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Path to the image file. Supports PNG, JPG, GIF, and other common
						image formats.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>x</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						X position of the sprite in pixels.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>y</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Y position of the sprite in pixels.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>zIndex</code>
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
						Width of the sprite. If 0, uses the original image width.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>height</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Height of the sprite. If 0, uses the original image height.
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
					<p class="text-sm text-gray-600">Scale factor for the sprite.</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>anchor</code>
						<span class="text-sm text-gray-500">
							(object, default: &#123;x: 0, y: 0&#125;)
						</span>
					</h4>
					<p class="text-sm text-gray-600">
						Relative anchor point for transformations. <code>
							&#123;x: 0.5, y: 0.5&#125;
						</code>
						centers the anchor.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>objectFit</code>
						<span class="text-sm text-gray-500">
							("fill" | "cover" | "contain", default: "fill")
						</span>
					</h4>
					<p class="text-sm text-gray-600">
						How the image should be resized to fit the specified dimensions:
					</p>
					<ul class="mt-2 list-inside list-disc text-xs text-gray-500">
						<li>
							<strong>fill</strong>
							: Stretch to fill exactly (may distort)
						</li>
						<li>
							<strong>cover</strong>
							: Scale to cover entire area (may crop)
						</li>
						<li>
							<strong>contain</strong>
							: Scale to fit within area (may have empty space)
						</li>
					</ul>
				</div>
			</div>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Interaction Props
		{/snippet}
		{#snippet description()}
			The Sprite component supports mouse and pointer interactions:
		{/snippet}
		{#snippet children()}
			<div class="space-y-4">
				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerover</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer enters the sprite area.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerout</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer leaves the sprite area.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerdown</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer is pressed down on the sprite.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointermove</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer moves over the sprite.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerup</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer is released over the sprite.
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
			Important considerations when using the Sprite component:
		{/snippet}
		{#snippet children()}
			<ul class="list-inside list-disc space-y-2 text-sm text-gray-600">
				<li>Sprite must be placed inside a Stage or Container</li>
				<li>The texture path should be accessible from your application</li>
				<li>Use objectFit to control how images are resized</li>
				<li>Interactions automatically make the sprite interactive</li>
				<li>Anchor points affect rotation and scaling behavior</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
