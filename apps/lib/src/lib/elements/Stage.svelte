<script lang="ts">
	import { ContextKey } from '$lib/types/context-key.enum.js';
	import {
		DOMAdapter,
		Application as PixiApp,
		WebWorkerAdapter,
	} from 'pixi.js';
	import { getContext, setContext, type Snippet } from 'svelte';

	type ApplicationInitArguments = Parameters<PixiApp['init']>;
	type Props = Omit<
		{
			children: Snippet;
			host: HTMLElement;
			mounted?: boolean;
		} & ApplicationInitArguments[0],
		'resizeTo'
	>;

	let {
		children,
		host,
		mounted = $bindable(false),
		...appInitProps
	}: Props = $props();
	DOMAdapter.set(WebWorkerAdapter);
	const app = new PixiApp();
	const parentApp = getContext(ContextKey.STAGE);
	let isDirty = true;

	if (parentApp) {
		throw new Error('Nested Glixy applications are not supported.');
	}

	setContext(ContextKey.STAGE, app);
	setContext(ContextKey.MARK_DIRTY, () => {
		isDirty = true;
	});

	$effect(() => {
		if (!host) {
			console.warn('[Glixy/Stage] Host property not set.');
			return;
		}

		let renderInterval: ReturnType<typeof setInterval>;
		const canvas: HTMLCanvasElement = document.createElement('canvas');

		const render = () => {
			if (!isDirty) {
				return;
			}

			app.render();
			isDirty = false;
		};

		canvas.style.width = '100%';
		canvas.style.height = '100%';
		host.appendChild(canvas);

		const offscreenCanvas = canvas.transferControlToOffscreen();

		Promise.all([
			app.init({
				...appInitProps,
				canvas: offscreenCanvas,
				resizeTo: host,
				resolution: appInitProps.resolution ?? window.devicePixelRatio,
				autoDensity: appInitProps.autoDensity ?? true,
			}),
		]).then(() => {
			app.ticker.autoStart = false;
			app.ticker.stop();
			render();
			renderInterval = setInterval(render, 1000 / 60);
			mounted = true;
		});

		return () => {
			clearInterval(renderInterval);
			if (canvas && canvas.parentNode) {
				host.removeChild(canvas);
			}
			mounted = false;
			app.destroy();
		};
	});
</script>

{#if mounted}
	{@render children()}
{/if}
