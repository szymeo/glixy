<script lang="ts">
	import type {
		BackgroundComponent,
		BorderComponent,
		CornerRadiusComponent,
		DimensionsComponent,
		InteractionsComponent,
		ScaleComponent,
		TransformComponent,
		ZIndexComponent,
	} from '$lib/types/components/index.js';
	import { ContextKey } from '$lib/types/context-key.enum.js';
	import { Application, Container, Graphics } from 'pixi.js';
	import { getContext } from 'svelte';

	const {
		x = 0,
		y = 0,
		z = 0,
		width,
		height,
		rotation = 0,
		scale = { x: 1, y: 1 },
		onmouseover,
		onmouseout,
		background = { color: 0, opacity: 1 },
		border = { color: 0, width: 0, rounded: false, opacity: 1 },
		cornerRadius = 0,
	}: DimensionsComponent &
		Partial<
			TransformComponent &
				ScaleComponent &
				InteractionsComponent &
				CornerRadiusComponent &
				BackgroundComponent &
				BorderComponent &
				ZIndexComponent
		> = $props();
	const stage = getContext<Application>(ContextKey.STAGE)?.stage;
	const parentContainer =
		getContext<Container>(ContextKey.PARENT_CONTAINER) || stage;

	if (!parentContainer) {
		throw new Error('Rectangle must have a parent.');
	}

	const markDirty = getContext<() => void>(ContextKey.MARK_DIRTY);
	const graphics = new Graphics();

	$effect(() => {
		graphics.interactive = !!(onmouseover || onmouseout);

		if (onmouseover) {
			graphics.off('mouseover');
			graphics.on('mouseover', (...argv) => {
				onmouseover(...argv);
				onmouseout && graphics.off('mouseout').on('mouseout', onmouseout);
			});
		} else if (onmouseout) {
			graphics.off('mouseout').on('mouseout', onmouseout);
		}
	});

	$effect(() => {
		parentContainer.addChild(graphics);
		markDirty();

		return () => {
			parentContainer.removeChild(graphics);
			graphics.destroy();
			markDirty();
		};
	});

	$effect(withMarkDirty(() => (graphics.scale.x = scale.x)));
	$effect(withMarkDirty(() => (graphics.scale.y = scale.y)));
	$effect(
		withMarkDirty(() =>
			graphics
				.clear()
				.roundRect(x, y, width, height, cornerRadius)
				.stroke({
					color: border.color,
					width: border.width,
					alpha: border.opacity,
					cap: border.rounded ? 'round' : 'square',
				})
				.fill({
					color: background.color,
					alpha: background.opacity,
				}),
		),
	);
	$effect(withMarkDirty(() => (graphics.rotation = rotation)));
	$effect(withMarkDirty(() => (graphics.rotation = rotation)));
	$effect(withMarkDirty(() => (graphics.zIndex = z)));

	function withMarkDirty(fn: () => void) {
		return () => {
			fn();
			markDirty();
		};
	}
</script>
