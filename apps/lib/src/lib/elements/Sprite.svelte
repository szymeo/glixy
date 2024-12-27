<script lang="ts">
	import {
		Application,
		Assets,
		Container,
		FederatedPointerEvent,
		Sprite,
	} from 'pixi.js';
	import { getContext } from 'svelte';

	type Props = Partial<{
		x: number;
		y: number;
		width: number;
		height: number;
		rotation: number;
		scale: { x: number; y: number };
		texture: string;
		anchor: { x: number; y: number };
		onmouseover: (event: FederatedPointerEvent) => void;
		onmouseout: (event: FederatedPointerEvent) => void;
	}>;
	const {
		x,
		y,
		width,
		height,
		rotation,
		scale,
		texture,
		anchor,
		onmouseover,
		onmouseout,
	}: Props = $props();
	const parentContainer = getContext<Container>('glixy_container');
	const parentApp = getContext<Application>('glixy_app');

	if (!parentContainer && !parentApp) {
		throw new Error('Sprite must be a child of a Container or Application.');
	}

	const sprite = new Sprite();
	const markDirty = getContext<() => void>('glixy_markdirty');

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
		(parentContainer || parentApp.stage).addChild(sprite);
		markDirty();

		return () => {
			(parentContainer || parentApp.stage).removeChild(sprite);
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

	$effect(withMarkDirty(() => (sprite.anchor.x = anchor?.x ?? 0)));

	$effect(withMarkDirty(() => (sprite.anchor.y = anchor?.y ?? 0)));

	$effect(withMarkDirty(() => (sprite.width = width ?? 0)));

	$effect(withMarkDirty(() => (sprite.height = height ?? 0)));

	$effect(withMarkDirty(() => (sprite.scale.x = scale?.x ?? 1)));

	$effect(withMarkDirty(() => (sprite.scale.y = scale?.y ?? 1)));

	$effect(withMarkDirty(() => (sprite.x = x ?? 0)));

	$effect(withMarkDirty(() => (sprite.y = y ?? 0)));

	$effect(withMarkDirty(() => (sprite.rotation = rotation ?? 0)));

	function withMarkDirty(fn: () => void) {
		return () => {
			fn();
			markDirty();
		};
	}
</script>
