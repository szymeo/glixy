<script lang="ts">
	import { TEXT_CODE_SNIPPET } from '$lib/code-snippets';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import Example from '$lib/components/atoms/Example.svelte';
	import { Stage, Text } from 'glixy';

	const DEMO_TEXT = 'Hello Glixy';
	// Rendered width of DEMO_TEXT at size 256 bold. The demo is drawn large and
	// scaled down so it stays crisp, and the scale is capped against the host
	// width so the string keeps a margin on narrow screens.
	const DEMO_TEXT_WIDTH = 1334;
</script>

<DocsPage
	title="Text"
	lede="Text draws a string into the stage, with control over family, size, weight, style, and color."
>
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
					{@const scale = Math.min(0.2, (hostWidth * 0.68) / DEMO_TEXT_WIDTH)}
					<Stage {host} background="#f4f4f5" antialias={true}>
						<Text
							text={DEMO_TEXT}
							style={{
								font: 'Inter Variable',
								color: 0x1c1c1e,
								size: 256,
								weight: 'bold',
								style: 'normal',
							}}
							scale={{ x: scale, y: scale }}
							anchor={{ x: 0.5, y: 0.5 }}
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
			The Text component accepts the following properties:
		{/snippet}
		{#snippet children()}
			<div class="prop-list">
				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">text</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							string, required
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						The text content to display.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">style</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							object, required
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Text styling configuration with the following properties:
					</p>
					<ul class="mt-2 space-y-1.5 text-sm leading-6 text-ink-muted">
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">font</code>
								string. Font family name, for example Inter Variable or Arial.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">size</code>
								number. Font size in pixels.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">color</code>
								number. Text color as a hex number, for example
								<code class="code-inline">0x000000</code>
								for black.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">weight</code>
								string. Font weight, such as normal, bold or lighter.
							</span>
						</li>
						<li class="flex gap-2">
							<span class="text-ink-faint">-</span>
							<span>
								<code class="code-inline">style</code>
								string. Font style, one of normal, italic or oblique.
							</span>
						</li>
					</ul>
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
						X position of the text in pixels.
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
						Y position of the text in pixels.
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
						<code class="code-inline">width</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							number, default 0
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Width constraint for the text. If 0, text uses natural width.
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
						Height constraint for the text. If 0, text uses natural height.
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
						Opacity value between 0 (transparent) and 1 (opaque).
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
						Scale factor for the text.
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
			</div>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Usage notes
		{/snippet}
		{#snippet description()}
			Important considerations when using the Text component:
		{/snippet}
		{#snippet children()}
			<ul class="space-y-1.5 text-sm leading-6 text-ink-muted">
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>Text must be placed inside a Stage or Container.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Font families must be available on the user's system or loaded via
						web fonts.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Colors are specified as hexadecimal numbers, for example
						<code class="code-inline">0xff0000</code>
						for red.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Use anchor points for precise positioning and rotation centers.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Text rendering performance is optimized for static text, so avoid
						frequent text changes.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Long text strings may extend beyond the visible area if width and
						height are not set.
					</span>
				</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
