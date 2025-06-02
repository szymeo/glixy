<script lang="ts">
	import type {
		AnchorComponent,
		DimensionsComponent,
		InteractionsComponent,
		ObjectFitComponent,
		OpacityComponent,
		ScaleComponent,
		TextureComponent,
		TransformComponent,
		ZIndexComponent,
	} from '$lib/types/components/index.js';
	import { ContextKey } from '$lib/types/context-key.enum.js';
	import { bindInteraction } from '$lib/utils/bind-interaction.svelte.js';
	import { Application, Assets, Container, Graphics, Sprite } from 'pixi.js';
	import { getContext } from 'svelte';

	const {
		x = 0,
		y = 0,
		z = 0,
		width = 0,
		height = 0,
		rotation = 0,
		opacity = 1,
		scale = { x: 1, y: 1 },
		texture,
		anchor = { x: 0, y: 0 },
		objectFit = 'fill',
		onpointerover,
		onpointerout,
		onpointerdown,
		onpointermove,
		onpointerup,
	}: Partial<
		OpacityComponent &
			TransformComponent &
			DimensionsComponent &
			ScaleComponent &
			TextureComponent &
			AnchorComponent &
			InteractionsComponent &
			ZIndexComponent &
			ObjectFitComponent
	> = $props();

	const stage = getContext<Application>(ContextKey.STAGE)?.stage;
	const parentContainer =
		getContext<Container>(ContextKey.PARENT_CONTAINER) || stage;

	if (!parentContainer) {
		throw new Error('Sprite must have a parent.');
	}

	const sprite = new Sprite();
	const mask = new Graphics();
	const markDirty = getContext<() => void>(ContextKey.MARK_DIRTY);

	$effect(() => {
		const cleanup = bindInteraction(sprite, {
			onpointerover,
			onpointerout,
			onpointerdown,
			onpointermove,
			onpointerup,
		});

		return () => cleanup();
	});

	$effect(() => {
		parentContainer.addChild(sprite);
		markDirty();

		return () => {
			parentContainer.removeChild(sprite);
			sprite.destroy();
			if (mask.parent) {
				parentContainer.removeChild(mask);
			}
			mask.destroy();
			markDirty();
		};
	});

	$effect(() => {
		// Only create mask if objectFit is 'cover' or 'contain' and dimensions are specified
		if ((objectFit === 'cover' || objectFit === 'contain') && width && height) {
			mask.clear().rect(x, y, width, height).fill(0x00ffff);
			sprite.mask = mask;
			parentContainer.addChild(mask);
		} else {
			sprite.mask = null;
			if (mask.parent) {
				parentContainer.removeChild(mask);
			}
		}
		markDirty();
	});

	$effect(() => {
		if (!texture) {
			return;
		}

		Assets.load(texture).then((t) => {
			sprite.texture = t;
			applyDimensions();
			markDirty();
		});
	});

	function applyDimensions() {
		if (
			!sprite.texture ||
			sprite.texture.width === 0 ||
			sprite.texture.height === 0 ||
			!width ||
			!height
		) {
			// If no dimensions specified or texture not loaded, use original size
			return;
		}

		const textureWidth = sprite.texture.width;
		const textureHeight = sprite.texture.height;
		const targetWidth = width;
		const targetHeight = height;

		if (objectFit === 'fill') {
			// Stretch to fill exactly
			sprite.width = targetWidth;
			sprite.height = targetHeight;
		} else if (objectFit === 'cover') {
			// Scale to cover the entire area, maintaining aspect ratio
			const scaleX = targetWidth / textureWidth;
			const scaleY = targetHeight / textureHeight;
			const scale = Math.max(scaleX, scaleY);

			sprite.width = textureWidth * scale;
			sprite.height = textureHeight * scale;

			// Center the sprite within the target area
			sprite.x = x + (targetWidth - sprite.width) / 2;
			sprite.y = y + (targetHeight - sprite.height) / 2;
		} else if (objectFit === 'contain') {
			// Scale to fit within the area, maintaining aspect ratio
			const scaleX = targetWidth / textureWidth;
			const scaleY = targetHeight / textureHeight;
			const scale = Math.min(scaleX, scaleY);

			sprite.width = textureWidth * scale;
			sprite.height = textureHeight * scale;

			// Center the sprite within the target area
			sprite.x = x + (targetWidth - sprite.width) / 2;
			sprite.y = y + (targetHeight - sprite.height) / 2;
		}
	}

	$effect(withMarkDirty(() => (sprite.anchor.x = anchor.x)));
	$effect(withMarkDirty(() => (sprite.anchor.y = anchor.y)));
	$effect(withMarkDirty(() => applyDimensions()));
	$effect(withMarkDirty(() => (sprite.scale.x = scale.x)));
	$effect(withMarkDirty(() => (sprite.scale.y = scale.y)));
	$effect(
		withMarkDirty(() => {
			// Only set position directly if not using cover or contain (they handle positioning internally)
			if (objectFit === 'fill' || !width || !height) {
				sprite.x = x;
			}
		}),
	);
	$effect(
		withMarkDirty(() => {
			// Only set position directly if not using cover or contain (they handle positioning internally)
			if (objectFit === 'fill' || !width || !height) {
				sprite.y = y;
			}
		}),
	);
	$effect(withMarkDirty(() => (sprite.rotation = rotation)));
	$effect(withMarkDirty(() => (sprite.alpha = opacity)));
	$effect(withMarkDirty(() => (sprite.zIndex = z)));

	function withMarkDirty(fn: () => void) {
		return () => {
			fn();
			markDirty();
		};
	}
</script>
