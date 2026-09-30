<script lang="ts">
	import { untrack } from 'svelte';
	import DocsPageSection from '$lib/components/atoms/DocsPageSection.svelte';
	import Example from '$lib/components/atoms/Example.svelte';
	import { Stage, Sprite } from 'glixy';

	let visible = $state(true);
	let opacity = $state(1);

	$effect(() => {
		const targetOpacity = visible ? 1 : 0;
		const steps = 10;
		const stepDuration = 1000 / 60;
		// Read without tracking: the interval below writes `opacity`, so a tracked
		// read would restart this effect on every step and it would never settle.
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

<DocsPageSection>
	{#snippet title()}
		Fade in and out
	{/snippet}

	{#snippet description()}
		You can use the <code>opacity</code>
		prop to fade elements in and out.
	{/snippet}

	{#snippet children()}
		{#snippet controls()}
			<button
				onclick={() => {
					visible = !visible;
				}}
				class="btn btn-primary"
			>
				<span class="mr-1">Toggle visibility</span>
				{#if visible}
					<span>👀</span>
				{:else}
					<span>🙈</span>
				{/if}
			</button>
		{/snippet}
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
				<Stage {host} background="#1f2937" antialias={true}>
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
