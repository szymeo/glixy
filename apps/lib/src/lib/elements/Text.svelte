<script lang="ts">
	import type { AnchorComponent } from '$lib/types/components/anchor.component.js';
	import type { BackgroundComponent } from '$lib/types/components/background.component.js';
	import type { BorderComponent } from '$lib/types/components/border.component.js';
	import type { CornerRadiusComponent } from '$lib/types/components/corner-radius.component.js';
	import type { DimensionsComponent } from '$lib/types/components/dimensions.component.js';
	import type { InteractionsComponent } from '$lib/types/components/interactions.component.js';
	import type { ScaleComponent } from '$lib/types/components/scale.component.js';
	import type { TextComponent } from '$lib/types/components/text.component.js';
	import type { TransformComponent } from '$lib/types/components/transform.component.js';
	import type { ZIndexComponent } from '$lib/types/components/z-index.component.js';
	import { ContextKey } from '$lib/types/context-key.enum.js';
	import { Application, Assets, Container, Text as PixiText } from 'pixi.js';
	import { getContext } from 'svelte';

	const {
		x = 0,
		y = 0,
		width = 0,
		height = 0,
		scale = { x: 1, y: 1 },
		text,
		style = {
			font: 'Arial',
			weight: 'normal',
			size: 12,
			color: 0x000000,
			style: 'normal',
		},
		rotation = 0,
		anchor = { x: 0, y: 0 },
		zIndex = 0,
	}: TextComponent &
		Partial<
			TransformComponent &
				DimensionsComponent &
				ScaleComponent &
				InteractionsComponent &
				BackgroundComponent &
				BorderComponent &
				ZIndexComponent &
				AnchorComponent
		> = $props();
	const stage = getContext<Application>(ContextKey.STAGE)?.stage;
	const parentContainer =
		getContext<Container>(ContextKey.PARENT_CONTAINER) || stage;

	if (!parentContainer) {
		throw new Error('Text must have a parent.');
	}

	const markDirty = getContext<() => void>(ContextKey.MARK_DIRTY);

	const entity = new PixiText({
		text,
		anchor,
		style: {
			fontFamily: style.font,
			fontWeight: style.weight,
			fontSize: style.size,
			fill: style.color,
			fontStyle: style.style,
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
		parentContainer.addChild(entity);
		markDirty();

		return () => {
			parentContainer.removeChild(entity);
			entity.destroy();
			markDirty();
		};
	});

	$effect(withMarkDirty(() => (entity.anchor.x = anchor.x)));
	$effect(withMarkDirty(() => (entity.anchor.y = anchor.y)));
	$effect(withMarkDirty(() => (entity.width = width)));
	$effect(withMarkDirty(() => (entity.height = height)));
	$effect(withMarkDirty(() => (entity.scale.x = scale.x)));
	$effect(withMarkDirty(() => (entity.scale.y = scale.y)));
	$effect(withMarkDirty(() => (entity.x = x)));
	$effect(withMarkDirty(() => (entity.y = y)));
	$effect(withMarkDirty(() => (entity.rotation = rotation)));
	$effect(withMarkDirty(() => (entity.zIndex = zIndex)));

	function withMarkDirty(fn: () => void) {
		return () => {
			fn();
			markDirty();
		};
	}
</script>
