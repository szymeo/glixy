<script lang="ts">
	import type {
		AnchorComponent,
		DimensionsComponent,
		InteractionsComponent,
		OpacityComponent,
		ScaleComponent,
		TextureComponent,
		TransformComponent,
	} from '$lib/types/components/index.js';
	import { ContextKey } from '$lib/types/context-key.enum.js';
	import { Application, Assets, Container, Sprite } from 'pixi.js';
	import { getContext } from 'svelte';

	const {
		x = 0,
		y = 0,
		width = 0,
		height = 0,
		rotation = 0,
		opacity = 1,
		scale = { x: 1, y: 1 },
		texture,
		anchor = { x: 0, y: 0 },
		onmouseover,
		onmouseout,
	}: Partial<
		OpacityComponent &
			TransformComponent &
			DimensionsComponent &
			ScaleComponent &
			TextureComponent &
			AnchorComponent &
			InteractionsComponent
	> = $props();

	const stage = getContext<Application>(ContextKey.STAGE)?.stage;
	const parentContainer =
		getContext<Container>(ContextKey.PARENT_CONTAINER) || stage;

	if (!parentContainer) {
		throw new Error('Sprite must have a parent.');
	}

	const sprite = new Sprite();
	const markDirty = getContext<() => void>(ContextKey.MARK_DIRTY);

	$effect(() => {
		sprite.interactive = !!(onmouseover || onmouseout);

		if (onmouseover) {
			sprite.off('mouseover');
			sprite.on('mouseover', (...argv) => {
				onmouseover(...argv);
				onmouseout && sprite.off('mouseout').on('mouseout', onmouseout);
			});
		} else if (onmouseout) {
			sprite.off('mouseout').on('mouseout', onmouseout);
		}
	});

	$effect(() => {
		parentContainer.addChild(sprite);
		markDirty();

		return () => {
			parentContainer.removeChild(sprite);
			sprite.destroy();
			markDirty();
		};
	});

	$effect(() => {
		if (!texture) {
			return;
		}

		Assets.load(texture).then((t) => {
			sprite.texture = t;
			markDirty();
		});
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
	$effect(withMarkDirty(() => (sprite.alpha = opacity)));

	function withMarkDirty(fn: () => void) {
		return () => {
			fn();
			markDirty();
		};
	}
</script>
