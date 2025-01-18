<script lang="ts">
	import type {
		BackgroundComponent,
		BorderComponent,
		CornerRadiusComponent,
		InteractionsComponent,
		ScaleComponent,
		StarDimensionsComponent,
		StarPointsComponent,
		TransformComponent,
		ZIndexComponent,
	} from '$lib/types/components/index.js';
	import { ContextKey } from '$lib/types/context-key.enum.js';
	import { bindInteraction } from '$lib/utils/bind-interaction.svelte.js';
	import { Application, Container, Graphics } from 'pixi.js';
	import { getContext } from 'svelte';

	const {
		x = 0,
		y = 0,
		z = 0,
		points,
		size,
		innerSize,
		rotation = 0,
		scale = { x: 1, y: 1 },
		background = { color: 0, opacity: 1 },
		border = { color: 0, width: 0, rounded: false, opacity: 1 },
		// todo: render with cornerRadius
		cornerRadius = 0,
		onpointerover,
		onpointerout,
		onpointerdown,
		onpointermove,
		onpointerup,
	}: StarDimensionsComponent &
		StarPointsComponent &
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
		throw new Error('Star must have a parent.');
	}

	const graphics = new Graphics();
	const markDirty = getContext<() => void>(ContextKey.MARK_DIRTY);

	$effect(() => {
		const cleanup = bindInteraction(graphics, {
			onpointerover,
			onpointerout,
			onpointerdown,
			onpointermove,
			onpointerup,
		});

		return () => cleanup();
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
				.star(x, y, points, size / 2, innerSize / 2, rotation)
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
