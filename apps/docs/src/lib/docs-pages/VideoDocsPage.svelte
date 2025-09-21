<script lang="ts">
	import { VIDEO_CODE_SNIPPET } from '$lib/code-snippets';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import Example from '$lib/components/atoms/Example.svelte';
	import { Stage, Video } from 'glixy';
</script>

<DocsPage title="Video">
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
					<Stage {host} background="#1f2937" antialias={true}>
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
			<div class="space-y-4">
				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>texture</code>
						<span class="text-sm text-gray-500">(string, required)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Path to the video file. Supports MP4, WebM, and other common video
						formats.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>x</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						X position of the video in pixels.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>y</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Y position of the video in pixels.
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
						<code>width</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Width of the video display area. If 0, uses the original video
						width.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>height</code>
						<span class="text-sm text-gray-500">(number, default: 0)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Height of the video display area. If 0, uses the original video
						height.
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
					<p class="text-sm text-gray-600">Scale factor for the video.</p>
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

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>loop</code>
						<span class="text-sm text-gray-500">
							(boolean, default: undefined)
						</span>
					</h4>
					<p class="text-sm text-gray-600">
						Whether the video should loop automatically when it reaches the end.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>muted</code>
						<span class="text-sm text-gray-500">(boolean, default: true)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Whether the video audio should be muted. Defaults to true to avoid
						autoplay issues.
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
			The Video component supports mouse and pointer interactions:
		{/snippet}
		{#snippet children()}
			<div class="space-y-4">
				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerover</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer enters the video area.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerout</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer leaves the video area.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerdown</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer is pressed down on the video.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointermove</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer moves over the video.
					</p>
				</div>

				<div class="rounded-lg border p-4">
					<h4 class="mb-2 font-semibold">
						<code>onpointerup</code>
						<span class="text-sm text-gray-500">(function)</span>
					</h4>
					<p class="text-sm text-gray-600">
						Called when the pointer is released over the video.
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
			Important considerations when using the Video component:
		{/snippet}
		{#snippet children()}
			<ul class="list-inside list-disc space-y-2 text-sm text-gray-600">
				<li>Video must be placed inside a Stage or Container</li>
				<li>
					Videos are automatically scaled to fit within the specified width and
					height while maintaining aspect ratio
				</li>
				<li>
					The video is masked to the exact dimensions specified, cropping any
					overflow
				</li>
				<li>
					Videos start playing immediately when loaded and restart when the loop
					ends (if loop is enabled)
				</li>
				<li>
					Audio is muted by default to prevent autoplay policy issues in
					browsers
				</li>
				<li>
					Video loading is asynchronous - the video will appear once it's fully
					loaded
				</li>
				<li>
					Supported formats depend on browser capabilities (MP4, WebM, etc.)
				</li>
			</ul>
		{/snippet}
	</DocsPageSection>
</DocsPage>
