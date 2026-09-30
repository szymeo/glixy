<script lang="ts">
	import CodeBlock from './atoms/CodeBlock.svelte';
	import DocsPage from './atoms/DocsPage.svelte';
	import DocsPageSection from './atoms/DocsPageSection.svelte';
	import Example from './atoms/Example.svelte';
	import { Stage, Sprite } from 'glixy';
	import { GETTING_STARTED_CODE_SNIPPET } from '$lib/code-snippets';

	// x and y are fractions of the host box, so 0.5 starts the bunny centred
	// rather than parked off-screen until the first tick.
	let x = $state(0.5);
	let y = $state(0.5);
	let posX = $state(0.5);
	let posY = $state(0.5);
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
		posX = Math.random();
		posY = Math.random();

		const positionInterval = setInterval(() => {
			posX = Math.random();
			posY = Math.random();
		}, updatePositionIntervalMS);

		return () => clearInterval(positionInterval);
	});
</script>

<DocsPage
	title="Getting Started"
	lede="Go from an empty stage to a sprite that follows Svelte state, in five steps."
>
	<DocsPageSection>
		{#snippet title()}
			<span
				class="mb-1.5 block font-mono text-[12.5px] font-normal text-ink-faint"
			>
				Step 1
			</span>
			Create a stage
		{/snippet}

		{#snippet description()}
			<code class="code-inline">Stage</code>
			is the root of a Glixy application. It creates a canvas, appends it to the
			element you pass as
			<code class="code-inline">host</code>, and keeps the canvas sized to that
			host. Children only render once the renderer has finished starting up.
		{/snippet}

		{#snippet code()}
			<CodeBlock
				code={GETTING_STARTED_CODE_SNIPPET(
					'Stage',
					`<!-- rendered contents will go there -->`,
				)}
			/>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			<span
				class="mb-1.5 block font-mono text-[12.5px] font-normal text-ink-faint"
			>
				Step 2
			</span>
			Render a sprite
		{/snippet}

		{#snippet description()}
			With a stage in place, put something on it. <code class="code-inline">
				Sprite
			</code>
			loads an image and draws it at the coordinates you give it. Coordinates are
			pixels, measured from the top left of the stage.
		{/snippet}

		{#snippet code()}
			<CodeBlock
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
			<span
				class="mb-1.5 block font-mono text-[12.5px] font-normal text-ink-faint"
			>
				Step 3
			</span>
			Update the sprite
		{/snippet}

		{#snippet description()}
			Glixy stops the PixiJS ticker and only redraws when something actually
			changed, so an idle scene costs nothing. Assign a new
			<code class="code-inline">x</code>
			or
			<code class="code-inline">y</code>
			and the next frame draws the sprite in its new position.
		{/snippet}

		{#snippet code()}
			<CodeBlock
				code={GETTING_STARTED_CODE_SNIPPET(
					'Sprite, Stage',
					`<Sprite
        texture="/bunny.png"
        {x}
        {y}
      />`,
					`let x = $state(100);
  let y = $state(100);

  $effect(() => {
    const interval = setInterval(() => {
      x = Math.random() * 300;
      y = Math.random() * 300;
    }, 1000);

    return () => clearInterval(interval);
  });`,
				)}
			/>
		{/snippet}
	</DocsPageSection>

	<DocsPageSection>
		{#snippet title()}
			<span
				class="mb-1.5 block font-mono text-[12.5px] font-normal text-ink-faint"
			>
				Step 4
			</span>
			Result
		{/snippet}

		{#snippet description()}
			The three steps together. The bunny moves to a new spot once a second.
			Scaling the coordinates by the host size keeps it inside the stage at any
			width.
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
					`let x = $state(0.5);
  let y = $state(0.5);

  $effect(() => {
    const interval = setInterval(() => {
      x = Math.random();
      y = Math.random();
    }, 1000);

    return () => clearInterval(interval);
  });`,
				)}
			>
				{#snippet children(
					host: HTMLElement,
					hostWidth: number,
					hostHeight: number,
				)}
					<Stage {host} background="#f4f4f5" antialias={true}>
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
			<span
				class="mb-1.5 block font-mono text-[12.5px] font-normal text-ink-faint"
			>
				Step 5
			</span>
			Drive the scene from HTML
		{/snippet}

		{#snippet description()}
			The scene is plain Svelte state, so ordinary HTML controls can drive it.
			These buttons change the tick interval and mount or unmount the sprite; no
			renderer API is involved.
		{/snippet}

		{#snippet children()}
			{#snippet controls()}
				<button
					onclick={() =>
						(updatePositionIntervalMS = Math.max(
							100,
							updatePositionIntervalMS - 100,
						))}
					class="btn btn-secondary btn-sm"
				>
					Faster
				</button>

				<span class="font-figure text-[13px] text-ink-muted">
					One tick every {(updatePositionIntervalMS / 1000).toFixed(1)}s
				</span>

				<button
					onclick={() =>
						(updatePositionIntervalMS = Math.min(
							5000,
							updatePositionIntervalMS + 100,
						))}
					class="btn btn-secondary btn-sm"
				>
					Slower
				</button>

				<button
					onclick={() => (visible = !visible)}
					class="btn btn-secondary btn-sm"
					aria-pressed={!visible}
				>
					{visible ? 'Hide sprite' : 'Show sprite'}
				</button>
			{/snippet}

			<Example
				{controls}
				code={GETTING_STARTED_CODE_SNIPPET(
					'Sprite, Stage',
					`{#if visible}
        <Sprite
          anchor={{ x: 0.5, y: 0.5 }}
          texture="/bunny.png"
          x={posX * hostWidth}
          y={posY * hostHeight}
        />
      {/if}`,
					`let posX = $state(0.5);
  let posY = $state(0.5);
  let updatePositionIntervalMS = $state(1000);
  let visible = $state(true);

  $effect(() => {
    posX = Math.random();
    posY = Math.random();

    const positionInterval = setInterval(() => {
      posX = Math.random();
      posY = Math.random();
    }, updatePositionIntervalMS);

    return () => clearInterval(positionInterval);
  });`,
				)}
			>
				{#snippet children(
					host: HTMLElement,
					hostWidth: number,
					hostHeight: number,
				)}
					<Stage {host} background="#f4f4f5" antialias={true}>
						{#if visible}
							<Sprite
								anchor={{ x: 0.5, y: 0.5 }}
								texture="/bunny.png"
								x={posX * hostWidth}
								y={posY * hostHeight}
							/>
						{/if}
					</Stage>
				{/snippet}
			</Example>
		{/snippet}
	</DocsPageSection>
</DocsPage>
