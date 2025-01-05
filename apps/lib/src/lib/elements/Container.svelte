<script lang="ts">
	import { ContextKey } from '$lib/types/context-key.enum.js';
	import { Application, Container } from 'pixi.js';
	import { getContext, setContext, type Snippet } from 'svelte';
	import { isDefined } from '../utils/index.js';

	type Props = {
		x: number;
		y: number;
		rotation?: number;
		anchor?: { x: number; y: number };
	};

	const { children, ...instanceProps }: { children: Snippet } & Props =
		$props();
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

	$effect(() => {
		if (!isDefined(instanceProps.x) && !isDefined(instanceProps.y)) {
			return;
		}
		container.position.set(instanceProps.x ?? 0, instanceProps.y ?? 0);
		markDirty();
	});

	$effect(() => {
		if (!isDefined(instanceProps.rotation)) {
			return;
		}
		container.rotation = instanceProps.rotation!;
		markDirty();
	});

	$effect(() => {
		if (!instanceProps.anchor) {
			return;
		}
		container.pivot.set(instanceProps.anchor.x, instanceProps.anchor.y);
		markDirty();
	});
</script>

{@render children()}
