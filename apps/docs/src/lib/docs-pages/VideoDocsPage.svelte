<script lang="ts">
	import { VIDEO_CODE_SNIPPET } from '$lib/code-snippets';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import Example from '$lib/components/atoms/Example.svelte';
	import { Stage, Video } from 'glixy';
</script>

<DocsPage
	title="Video"
	lede="Video draws a video file into the scene, scaled and masked to the size you give it."
>
	<DocsPageSection>
		{#snippet title()}
			Overview
		{/snippet}
		{#snippet description()}
			The Video component displays video content in your Glixy application. It
			supports common video formats and provides features like looping, muting,
			and automatic scaling to fit specified dimensions. Videos are
			automatically masked to the specified container size.
		{/snippet}
		{#snippet children()}
			<Example code={VIDEO_CODE_SNIPPET} expanded={true}>
				{#snippet children(
					host: HTMLElement,
					hostWidth: number,
					hostHeight: number,
				)}
					<Stage {host} background="#f4f4f5" antialias={true}>
						<Video
							anchor={{ x: 0, y: 0 }}
							scale={{ x: 1, y: 1 }}
							texture="/SampleVideo_1280x720_1mb.mp4"
							width={hostWidth}
							height={hostHeight}
							x={0}
							y={0}
							z={0}
							loop={true}
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
			The Video component accepts the following properties:
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
						Path to the video file. Supports MP4, WebM, and other common video
						formats.
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
						X position of the video in pixels.
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
						Y position of the video in pixels.
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
						Width of the video display area. If 0, uses the original video
						width.
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
						Height of the video display area. If 0, uses the original video
						height.
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
						Scale factor for the video.
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
						<code class="code-inline">loop</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							boolean, default undefined
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Whether the video should loop automatically when it reaches the end.
					</p>
				</div>

				<div class="prop-card">
					<h4
						class="flex flex-wrap items-baseline gap-x-2 text-[15px] font-medium"
					>
						<code class="code-inline">muted</code>
						<span class="font-mono text-[12.5px] font-normal text-ink-faint">
							boolean, default true
						</span>
					</h4>
					<p class="mt-1.5 text-sm leading-6 text-ink-muted">
						Whether the video audio should be muted. Defaults to true to avoid
						autoplay issues.
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
			The Video component supports mouse and pointer interactions:
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
						Called when the pointer enters the video area.
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
						Called when the pointer leaves the video area.
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
						Called when the pointer is pressed down on the video.
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
						Called when the pointer moves over the video.
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
						Called when the pointer is released over the video.
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
			Important considerations when using the Video component:
		{/snippet}
		{#snippet children()}
			<ul class="space-y-1.5 text-sm leading-6 text-ink-muted">
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>Video must be placed inside a Stage or Container.</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Videos are automatically scaled to fit within the specified width
						and height while maintaining aspect ratio.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						The video is masked to the exact dimensions specified, cropping any
						overflow.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Videos start playing immediately when loaded and restart when the
						loop ends, if loop is enabled.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Audio is muted by default to prevent autoplay policy issues in
						browsers.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Video loading is asynchronous, so the video appears once it is fully
						loaded.
					</span>
				</li>
				<li class="flex gap-2">
					<span class="text-ink-faint">-</span>
					<span>
						Supported formats depend on browser capabilities, such as MP4 and
						WebM.
					</span>
				</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
