<script lang="ts">
	import { getContext, setContext, type Snippet } from 'svelte';
	import { Application, Container } from 'pixi.js';
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
	const { stage } = getContext<Application>('sveltegl_app');
	const parentContainer = getContext<Container>('sveltegl_container');
	const markDirty = getContext<() => void>('sveltegl_markdirty');

	if (!stage && !parentContainer) {
		throw new Error('Container must be a child of a Container or Application.');
	}

	setContext('sveltegl_container', container);

	$effect(() => {
		(parentContainer || stage).addChild(container);

		return () => {
			(parentContainer || stage).removeChild(container);
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
