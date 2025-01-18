<script lang="ts">
	import type {
		BackgroundComponent,
		BorderComponent,
		CornerRadiusComponent,
		CursorComponent,
		DimensionsComponent,
		InteractionsComponent,
		ScaleComponent,
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
		width,
		height,
		rotation = 0,
		scale = { x: 1, y: 1 },
		onpointerover,
		onpointerout,
		onpointerdown,
		onpointermove,
		onpointerup,
		background = { color: 0, opacity: 1 },
		border = { color: 0, width: 0, rounded: false, opacity: 1 },
		cornerRadius = 0,
		cursor = 'auto',
	}: DimensionsComponent &
		Partial<
			TransformComponent &
				ScaleComponent &
				InteractionsComponent &
				CornerRadiusComponent &
				BackgroundComponent &
				BorderComponent &
				ZIndexComponent &
				CursorComponent
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
			console.log('cleanup');

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
	$effect(withMarkDirty(() => (graphics.cursor = cursor)));

	function withMarkDirty(fn: () => void) {
		return () => {
			fn();
			markDirty();
		};
	}
</script>
