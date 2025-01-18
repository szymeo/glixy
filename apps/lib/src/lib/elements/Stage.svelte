<script lang="ts">
	import { ContextKey } from '$lib/types/context-key.enum.js';
	import { Application as PixiApp } from 'pixi.js';
	import { getContext, setContext, type Snippet } from 'svelte';

	type ApplicationInitArguments = Parameters<PixiApp['init']>;
	type Props = Omit<
		{
			children: Snippet;
			host: HTMLElement;
		} & ApplicationInitArguments[0],
		'resizeTo'
	>;

	const { children, host, ...appInitProps }: Props = $props();
	const app = new PixiApp();
	const parentApp = getContext(ContextKey.STAGE);
	let rendered = $state(false);
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

		const render = () => {
			if (!isDirty) {
				return;
			}

			app.render();
			isDirty = false;
		};

		Promise.all([
			app.init({
				...appInitProps,
				resizeTo: host,
				resolution: appInitProps.resolution ?? window.devicePixelRatio,
				autoDensity: appInitProps.autoDensity ?? true,
			}),
		]).then(() => {
			app.ticker.autoStart = false;
			app.ticker.stop();
			host.appendChild(app.canvas);
			render();
			renderInterval = setInterval(render, 1000 / 60);
			rendered = true;
		});

		return () => {
			clearInterval(renderInterval);
			host.removeChild(app.canvas);
			rendered = false;
			app.destroy();
		};
	});
</script>

{#if rendered}
	{@render children()}
{/if}
