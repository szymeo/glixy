<script lang="ts">
	import { HighlightAuto } from 'svelte-highlight';
	import DocsPage from './atoms/DocsPage.svelte';
	import DocsPageSection from './atoms/DocsPageSection.svelte';
	import Example from './atoms/Example.svelte';
	import { Stage, Sprite } from 'glixy';
	import { GETTING_STARTED_CODE_SNIPPET } from '$lib/code-snippets';

	let x = $state(10);
	let y = $state(10);
	let speedX = $state(10);
	let speedY = $state(10);
	let updatePositionIntervalMS = $state(1000);
	let visible = $state(true);

	$effect(() => {
		const interval = setInterval(() => {
			x = Math.random();
			y = Math.random();
		}, 1000);

		return () => clearInterval(interval);
	});

	$effect(() => {
		speedX = Math.random();
		speedY = Math.random();

		const speedyInterval = setInterval(() => {
			speedX = Math.random();
			speedY = Math.random();
		}, updatePositionIntervalMS);

		return () => clearInterval(speedyInterval);
	});
</script>

<DocsPage title="Getting Started">
	<DocsPageSection>
		{#snippet title()}
			1. Creating a Stage
		{/snippet}

		{#snippet description()}
			The <i class="font-semibold text-purple-600">Stage</i>
			component is the root of your WebGL PixiJS application. It creates a canvas
			element and appends it to the host element.
		{/snippet}

		{#snippet code()}
			<HighlightAuto
				class="code-snippet"
				code={GETTING_STARTED_CODE_SNIPPET(
					'Stage',
					`<!-- rendered contents will go there -->`,
				)}
			/>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			2. Rendering stuff
		{/snippet}

		{#snippet description()}
			Now that we have a stage, let's render some stuff on it. We can use the <i
				class="font-semibold text-purple-600"
			>
				Sprite
			</i>
			component to render an image.
		{/snippet}

		{#snippet code()}
			<HighlightAuto
				class="code-snippet"
				code={GETTING_STARTED_CODE_SNIPPET(
					'Sprite, Stage',
					`<Sprite
        texture="/bunny.png"
        x={100}
        y={100}
      />`,
				)}
			/>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			3. Updating stuff
		{/snippet}

		{#snippet description()}
			Render loop underneath won't run if there are no updates to render, but
			once we update the <code>x</code>
			or
			<code>y</code>
			properties, the render loop will run and update the position of the sprite.
		{/snippet}

		{#snippet code()}
			<HighlightAuto
				class="code-snippet"
				code={GETTING_STARTED_CODE_SNIPPET(
					'Sprite, Stage',
					`<Sprite
        texture="/bunny.png"
        {x}
        {y}
      />`,
					`let x = $state(10);
  let y = $state(10);

  $effect(() => {
    setInterval(() => {
      x = Math.random();
      y = Math.random();
    }, 1000);
  });`,
				)}
			/>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			4. Result
		{/snippet}

		{#snippet description()}
			You should see a bunny moving around the stage.
		{/snippet}

		{#snippet children()}
			<Example
				code={GETTING_STARTED_CODE_SNIPPET(
					'Sprite, Stage',
					`<Sprite
        anchor={{ x: 0.5, y: 0.5 }}
        texture="/bunny.png"
        x={x * hostWidth}
        y={y * hostHeight}
      />`,
					`let x = $state(10);
  let y = $state(10);
  
  $effect(() => {
    setInterval(() => {
      x = Math.random();
      y = Math.random();
    }, 1000);
  });`,
				)}
			>
				{#snippet children(
					host: HTMLElement,
					hostWidth: number,
					hostHeight: number,
				)}
					<Stage {host} background="#1f2937" antialias={true}>
						<Sprite
							anchor={{ x: 0.5, y: 0.5 }}
							texture="/bunny.png"
							x={x * hostWidth}
							y={y * hostHeight}
						/>
					</Stage>
				{/snippet}
			</Example>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			5. Bonus (some magic)
		{/snippet}

		{#snippet description()}
			What if we were able to connect HTML rendered content with WebGL rendered
			content?
		{/snippet}

		{#snippet children()}
			{#snippet controls()}
				<button
					onclick={() =>
						(updatePositionIntervalMS = Math.max(
							100,
							updatePositionIntervalMS - 100,
						))}
					class="btn btn-primary"
				>
					Faster
				</button>

				<span class="text-white">
					1 tick per {updatePositionIntervalMS / 1000} second(s)
				</span>
				<button
					onclick={() =>
						(updatePositionIntervalMS = Math.min(
							5000,
							updatePositionIntervalMS + 100,
						))}
					class="btn btn-primary"
				>
					Slower
				</button>

				<button onclick={() => (visible = !visible)} class="btn btn-primary">
					<span class="mr-1">Toggle visibility</span>
					{#if visible}
						<span>👀</span>
					{:else}
						<span>🙈</span>
					{/if}
				</button>
			{/snippet}
			<Example
				{controls}
				code={GETTING_STARTED_CODE_SNIPPET(
					'Sprite, Stage',
					`<Sprite
        anchor={{ x: 0.5, y: 0.5 }}
        texture="/bunny.png"
        x={speedX * hostWidth}
        y={speedY * hostHeight}
      />`,
					`let speedX = $state(10);
  let speedY = $state(10);
  let updatePositionIntervalMS = $state(1000);
  let visible = $state(true);
    
  $effect(() => {
    speedX = Math.random();
    speedY = Math.random();

    const speedyInterval = setInterval(() => {
      speedX = Math.random();
      speedY = Math.random();
    }, updatePositionIntervalMS);

    return () => clearInterval(speedyInterval);
  });`,
				)}
			>
				{#snippet children(
					host: HTMLElement,
					hostWidth: number,
					hostHeight: number,
				)}
					<Stage {host} background="#1f2937" antialias={true}>
						{#if visible}
							<Sprite
								anchor={{ x: 0.5, y: 0.5 }}
								texture="/bunny.png"
								x={speedX * hostWidth}
								y={speedY * hostHeight}
							/>
						{/if}
					</Stage>
				{/snippet}
			</Example>
		{/snippet}
	</DocsPageSection>
</DocsPage>
