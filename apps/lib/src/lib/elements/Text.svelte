<script lang="ts">
	import { ContextKey } from '$lib/types/context-key.enum.js';
	import { Application, Assets, Container, Text as PixiText } from 'pixi.js';
	import { getContext } from 'svelte';

	type Props = Partial<{
		x: number;
		y: number;
		width: number;
		height: number;
		rotation: number;
		scale: { x: number; y: number };
		anchor: { x: number; y: number };
		zIndex: number;
	}> & {
		text: string;
	};
	const {
		x = 0,
		y = 0,
		width = 0,
		height = 0,
		text,
		rotation = 0,
		scale = { x: 1, y: 1 },
		anchor = { x: 0, y: 0 },
		zIndex = 0,
	}: Props = $props();
	const stage = getContext<Application>(ContextKey.STAGE)?.stage;
	const parentContainer =
		getContext<Container>(ContextKey.PARENT_CONTAINER) || stage;

	if (!parentContainer) {
		throw new Error('Text must have a parent.');
	}

	const markDirty = getContext<() => void>(ContextKey.MARK_DIRTY);

	const sprite = new PixiText({
		text,
		style: {
			fontFamily: 'Overlock',
			fontWeight: 'bold',
			fontSize: 264,
			fill: 0xffffff,
		},
	});

	// $effect(() => {
	// 	sprite.interactive = !!(onmouseover || onmouseout);

	// 	if (onmouseover) {
	// 		sprite.off('mouseover');
	// 		sprite.on('mouseover', (...argv) => {
	// 			onmouseover(...argv);
	// 			onmouseout && sprite.off('mouseout').on('mouseout', onmouseout);
	// 		});
	// 	} else if (onmouseout) {
	// 		sprite.off('mouseout').on('mouseout', onmouseout);
	// 	}
	// });

	$effect(() => {
		parentContainer.addChild(sprite);
		markDirty();

		return () => {
			parentContainer.removeChild(sprite);
			sprite.destroy();
			markDirty();
		};
	});

	$effect(withMarkDirty(() => (sprite.anchor.x = anchor.x)));
	$effect(withMarkDirty(() => (sprite.anchor.y = anchor.y)));
	$effect(withMarkDirty(() => (sprite.width = width)));
	$effect(withMarkDirty(() => (sprite.height = height)));
	$effect(withMarkDirty(() => (sprite.scale.x = scale.x)));
	$effect(withMarkDirty(() => (sprite.scale.y = scale.y)));
	$effect(withMarkDirty(() => (sprite.x = x)));
	$effect(withMarkDirty(() => (sprite.y = y)));
	$effect(withMarkDirty(() => (sprite.rotation = rotation)));
	$effect(withMarkDirty(() => (sprite.zIndex = zIndex)));

	function withMarkDirty(fn: () => void) {
		return () => {
			fn();
			markDirty();
		};
	}
</script>
