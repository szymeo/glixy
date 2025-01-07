<script lang="ts">
	import type {
		AnchorComponent,
		TransformComponent,
	} from '$lib/types/components/index.js';
	import { ContextKey } from '$lib/types/context-key.enum.js';
	import { Application, Container } from 'pixi.js';
	import { getContext, setContext, type Snippet } from 'svelte';

	const {
		x = 0,
		y = 0,
		rotation = 0,
		anchor = { x: 0, y: 0 },
		children,
	}: { children: Snippet } & Partial<
		TransformComponent & AnchorComponent
	> = $props();
	const container = new Container();
	const stage = getContext<Application>(ContextKey.STAGE)?.stage;
	const parentContainer =
		getContext<Container>(ContextKey.PARENT_CONTAINER) || stage;

	if (!parentContainer) {
		throw new Error('Container must have a parent.');
	}

	const markDirty = getContext<() => void>(ContextKey.MARK_DIRTY);

	setContext(ContextKey.PARENT_CONTAINER, container);

	$effect(() => {
		parentContainer.addChild(container);

		return () => {
			parentContainer.removeChild(container);
			container.destroy({ children: true });
		};
	});

	$effect(withMarkDirty(() => (container.x = x)));
	$effect(withMarkDirty(() => (container.y = y)));
	$effect(withMarkDirty(() => (container.rotation = rotation)));
	$effect(withMarkDirty(() => (container.pivot.x = anchor.x)));
	$effect(withMarkDirty(() => (container.pivot.y = anchor.y)));

	function withMarkDirty(fn: () => void) {
		return () => {
			fn();
			markDirty();
		};
	}
</script>

{@render children()}
