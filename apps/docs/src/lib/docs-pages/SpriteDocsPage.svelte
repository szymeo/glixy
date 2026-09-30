<script lang="ts">
	import { SPRITE_CODE_SNIPPET } from '$lib/code-snippets';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import Example from '$lib/components/atoms/Example.svelte';
	import { Sprite, Stage } from 'glixy';
</script>

<DocsPage
	title="Sprite"
	lede="Sprite draws an image or texture on the stage, with control over position, size, fit, opacity, and pointer input."
>
	<DocsPageSection>
		{#snippet title()}
			Overview
		{/snippet}

		{#snippet description()}
			Sprite displays images and textures in a Glixy application. It supports
			common image formats and provides object fitting, transformations,
			interactions, and opacity control.
		{/snippet}

		{#snippet children()}
			<Example code={SPRITE_CODE_SNIPPET} expanded={true}>
				{#snippet children(
					host: HTMLElement,
					hostWidth: number,
					hostHeight: number,
				)}
					<Stage {host} background="#f4f4f5" antialias={true}>
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
			The Sprite component accepts the following properties.
		{/snippet}

		{#snippet children()}
			<div class="prop-list">
				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">texture</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							string, required
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Path to the image file. Supports PNG, JPG, GIF, and other common
						image formats.
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
						X position of the sprite in pixels.
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
						Y position of the sprite in pixels.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">zIndex</code>
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
						<code class="code-inline">width</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, default 0
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Width of the sprite. If 0, uses the original image width.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">height</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, default 0
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Height of the sprite. If 0, uses the original image height.
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
						<code class="code-inline">opacity</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, default 1
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Opacity value between 0, transparent, and 1, opaque.
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
						Scale factor for the sprite.
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
						Relative anchor point for transformations.
						<code class="code-inline">&#123;x: 0.5, y: 0.5&#125;</code>
						centers the anchor.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">objectFit</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							"fill" | "cover" | "contain", default "fill"
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						How the image is resized to fit the specified dimensions.
					</p>
					<ul class="mt-2 space-y-1.5 text-sm leading-6 text-ink-muted">
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">fill</code>
								stretches to fill exactly, which may distort the image.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">cover</code>
								scales to cover the entire area, which may crop the image.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">contain</code>
								scales to fit within the area, which may leave empty space.
							</span>
						</li>
					</ul>
				</div>
			</div>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Interaction props
		{/snippet}

		{#snippet description()}
			Sprite supports mouse and pointer interactions.
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
						Called when the pointer enters the sprite area.
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
						Called when the pointer leaves the sprite area.
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
						Called when the pointer is pressed down on the sprite.
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
						Called when the pointer moves over the sprite.
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
						Called when the pointer is released over the sprite.
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
			Things to keep in mind when using Sprite.
		{/snippet}

		{#snippet children()}
			<ul class="space-y-1.5 text-sm leading-6 text-ink-muted">
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>Sprite must be placed inside a Stage or Container.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						The texture path has to be reachable from your application.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Use <code class="code-inline">objectFit</code>
						to control how images are resized.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>Passing any pointer handler makes the sprite interactive.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>Anchor points affect rotation and scaling behaviour.</span>
				</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
