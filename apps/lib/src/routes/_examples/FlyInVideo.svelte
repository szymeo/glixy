<script lang="ts">
	import Video from '$lib/elements/Video.svelte';
	import { onMount } from 'svelte';

	const {
		x,
		width,
		height,
		y: initialY,
		yShift,
		delay,
		duration,
		easing,
	} = $props();

	let y = $state(initialY + yShift);

	onMount(async () => {
		async function animateYPosition() {
			const animationSteps = duration / (1000 / 60);
			const keyframes = Array.from({ length: animationSteps }, (_, i) => {
				const progress = i / animationSteps;

				return initialY + yShift * (1 - easing(progress));
			});

			setInterval(() => {
				const keyframe = keyframes.shift();

				if (keyframe) {
					y = keyframe;
				}
			}, 1000 / 60);
		}

		setTimeout(() => {
			animateYPosition();
		}, delay);
	});
</script>

<Video
	anchor={{ x: 0, y: 0 }}
	scale={{ x: 1, y: 1 }}
	texture="/SampleVideo_1280x720_1mb.mp4"
	{width}
	{height}
	{x}
	{y}
	z={0}
	loop={true}
/>
