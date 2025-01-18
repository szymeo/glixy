<script lang="ts">
	import type {
		AnchorComponent,
		DimensionsComponent,
		InteractionsComponent,
		OpacityComponent,
		ScaleComponent,
		TextureComponent,
		TransformComponent,
		ZIndexComponent,
	} from '$lib/types/components/index.js';
	import { ContextKey } from '$lib/types/context-key.enum.js';
	import { bindInteraction } from '$lib/utils/bind-interaction.svelte.js';
	import {
		Application,
		Assets,
		Container,
		Graphics,
		Sprite,
		Texture,
	} from 'pixi.js';
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
		onpointerover,
		onpointerout,
		onpointerdown,
		onpointermove,
		onpointerup,
		loop,
		muted = true,
	}: Partial<
		OpacityComponent &
			TransformComponent &
			DimensionsComponent &
			ScaleComponent &
			TextureComponent &
			AnchorComponent &
			InteractionsComponent &
			ZIndexComponent & {
				loop?: boolean;
				muted?: boolean;
			}
	> = $props();

	let metadata = $state({
		width: 0,
		height: 0,
		duration: 0,
		loaded: false,
	});
	const stage = getContext<Application>(ContextKey.STAGE)?.stage;
	const parentContainer =
		getContext<Container>(ContextKey.PARENT_CONTAINER) || stage;

	if (!parentContainer) {
		throw new Error('Video must have a parent.');
	}

	const sprite = new Sprite();
	const mask = new Graphics().rect(x, y, width, height).fill(0x00ffff);

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
		mask.clear().rect(x, y, width, height).fill(0x00ffff);
	});

	$effect(() => {
		sprite.mask = mask;
		parentContainer.addChild(mask, sprite);
		markDirty();

		return () => {
			parentContainer.removeChild(mask, sprite);
			sprite.destroy();
			mask.destroy();
			markDirty();
		};
	});

	$effect(() => {
		if (!metadata.loaded || sprite.destroyed) {
			return;
		}

		sprite.texture.source.resource.muted = muted;
	});

	$effect(() => {
		if (!metadata.loaded || sprite.destroyed) {
			return;
		}

		const videoAspectRatio = metadata.width / metadata.height;
		const containerAspectRatio = width / height;
		let scale = 1;

		if (videoAspectRatio > containerAspectRatio) {
			scale = height / metadata.height;
		} else {
			scale = width / metadata.width;
		}

		sprite.width = metadata.width * scale;
		sprite.height = metadata.height * scale;
		sprite.x = x + (width - sprite.width) / 2;
		sprite.y = y + (height - sprite.height) / 2;
	});

	$effect(() => {
		if (!texture || sprite.destroyed) {
			return;
		}

		let markDirtyInterval: ReturnType<typeof setInterval>;
		let stopMarkDirtyTimeout: ReturnType<typeof setTimeout>;

		function playVideo(t: Texture) {
			clearInterval(markDirtyInterval);
			clearTimeout(stopMarkDirtyTimeout);

			t.source.resource.currentTime = 0;
			t.source.resource.play();
			sprite.texture = t;

			markDirtyInterval = setInterval(() => {
				markDirty();
			}, 1000 / 60);

			stopMarkDirtyTimeout = setTimeout(() => {
				clearInterval(markDirtyInterval);

				if (loop) {
					playVideo(t);
				}
			}, metadata.duration * 1000);
		}

		metadata = {
			width: 0,
			height: 0,
			duration: 0,
			loaded: false,
		};

		if (Assets.cache.has(texture)) {
			const loadedTexture = Assets.get(texture);

			metadata = {
				width: loadedTexture.source.width,
				height: loadedTexture.source.height,
				duration: loadedTexture.source.resource.duration,
				loaded: true,
			};

			playVideo(loadedTexture);
		} else {
			Assets.load(texture).then((t) => {
				metadata = {
					width: t.source.width,
					height: t.source.height,
					duration: t.source.resource.duration,
					loaded: true,
				};

				playVideo(t);
			});
		}

		return () => {
			Assets.cache.has(texture) && Assets.unload(texture);
			clearInterval(markDirtyInterval);
			clearTimeout(stopMarkDirtyTimeout);
		};
	});

	$effect(withMarkDirty(() => (sprite.anchor.x = anchor.x)));
	$effect(withMarkDirty(() => (sprite.anchor.y = anchor.y)));
	$effect(withMarkDirty(() => (sprite.scale.x = scale.x)));
	$effect(withMarkDirty(() => (sprite.scale.y = scale.y)));
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
