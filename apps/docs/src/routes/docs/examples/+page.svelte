<script lang="ts">
	import { untrack } from 'svelte';
	import DocsPage from '$lib/components/atoms/DocsPage.svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import Example from '$lib/components/atoms/Example.svelte';
	import { Stage, Sprite } from 'glixy';

	let visible = $state(true);
	let opacity = $state(1);

	$effect(() => {
		const targetOpacity = visible ? 1 : 0;
		const steps = 10;
		const stepDuration = 1000 / 60;
		// Read the live value without tracking it: the interval below writes to
		// `opacity`, and a tracked read would restart the effect on every frame.
		const currentOpacity = untrack(() => opacity);
		const opacityDifference = targetOpacity - currentOpacity;

		const keyframes = Array.from({ length: steps }, (_, i) => {
			return {
				opacity: currentOpacity + (opacityDifference * (i + 1)) / steps,
				time: (i + 1) / steps,
			};
		});

		const interval = setInterval(() => {
			const keyframe = keyframes.shift();
			if (keyframe) {
				opacity = keyframe.opacity;
			} else {
				clearInterval(interval);
			}
		}, stepDuration);

		return () => clearInterval(interval);
	});
</script>

{#snippet controls()}
	<button
		onclick={() => {
			visible = !visible;
		}}
		class="btn btn-secondary btn-sm"
		aria-pressed={visible}
	>
		{visible ? 'Fade out' : 'Fade in'}
	</button>
{/snippet}

<DocsPage
	title="Made with Glixy"
	lede="One demo of the animation pattern, and an open slot for the projects people build."
>
	<DocsPageSection>
		{#snippet title()}
			Fade in and out
		{/snippet}

		{#snippet description()}
			The <code class="code-inline">opacity</code>
			prop fades an element in and out. Step it over time to animate the transition.
		{/snippet}

		{#snippet children()}
			<Example
				{controls}
				code={`// generate fade animation keyframes
const keyframes = Array.from({ length: steps }, (_, i) => {
	return {
		opacity: currentOpacity + (opacityDifference * (i + 1)) / steps,
		time: (i + 1) / steps,
	};
});

const interval = setInterval(() => {
	const keyframe = keyframes.shift();
	if (keyframe) {
		opacity = keyframe.opacity;
	} else {
		clearInterval(interval);
	}
}, stepDuration);

// and use to run the animation

<Sprite
	width={hostWidth}
	height={hostHeight}
	{opacity}
	anchor={{ x: 0.5, y: 0.5 }}
	texture="/images/mountains.webp"
	x={hostWidth / 2}
	y={hostHeight / 2}
/>`}
			>
				{#snippet children(
					host: HTMLElement,
					hostWidth: number,
					hostHeight: number,
				)}
					<Stage {host} background="#f4f4f5" antialias={true}>
						<Sprite
							width={hostWidth}
							height={hostHeight}
							{opacity}
							anchor={{ x: 0.5, y: 0.5 }}
							texture="/images/mountains.webp"
							x={hostWidth / 2}
							y={hostHeight / 2}
						/>
					</Stage>
				{/snippet}
			</Example>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			Add your project
		{/snippet}

		{#snippet children()}
			<div class="card px-6 py-8">
				<p class="doc-body max-w-prose">
					Nothing is listed here yet, so if you have built something with Glixy,
					<a
						class="doc-link"
						href="https://github.com/szymeo/glixy"
						target="_blank"
						rel="noreferrer"
					>
						open a pull request
					</a>
					and it goes on this page.
				</p>
			</div>
		{/snippet}
	</DocsPageSection>
</DocsPage>
