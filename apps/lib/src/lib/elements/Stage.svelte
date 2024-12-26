<script lang="ts">
	import { getContext, setContext, type Snippet } from 'svelte';
	import { Application as PixiApp } from 'pixi.js';

	type ApplicationInitArguments = Parameters<PixiApp['init']>;
	type Props = { children: Snippet; host: HTMLElement } & ApplicationInitArguments[0];

	const { children, host, ...appInitProps }: Props = $props();
	const app = new PixiApp();
	const parent = getContext('sveltegl_app');
	let rendered = $state(false);
	let isDirty = true;

	if (parent) {
		throw new Error('Nested SvelteGL applications are not supported.');
	}

	setContext('sveltegl_app', app);
	setContext('sveltegl_markdirty', () => (isDirty = true));

	$effect(() => {
		if (!host) {
			console.warn('[SvelteGL/Application] Host property not set.');
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

		app.init(appInitProps).then(() => {
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
