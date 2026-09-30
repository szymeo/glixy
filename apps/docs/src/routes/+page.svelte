<script lang="ts">
	import { HighlightAuto } from 'svelte-highlight';
	import Header from './Header.svelte';
	import Features from './Features.svelte';
	import LandingHeading from './LandingHeading.svelte';
	import HeroStage from '$lib/examples/HeroStage.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Section from '$lib/components/Section.svelte';
	import CopyButton from '$lib/components/atoms/CopyButton.svelte';
	import GithubIcon from '$lib/icons/GithubIcon.svelte';

	const INSTALL = 'npm install glixy';

	// Svelte's parser ends this <script> block at any literal closing tag, so
	// the one inside the sample below is assembled instead of written out.
	const CLOSING_SCRIPT_TAG = `</${'script'}>`;

	const FIRST_SCENE = `<script lang="ts">
  import { Sprite, Stage } from 'glixy';

  let host: HTMLElement | null = $state(null);
  let x = $state(100);
${CLOSING_SCRIPT_TAG}

<div bind:this={host} class="h-96">
  {#if host}
    <Stage {host}>
      <Sprite texture="/bunny.png" {x} y={100} />
    </Stage>
  {/if}
</div>

<button onclick={() => (x += 40)}>Move</button>`;

	const firstSceneChecks = [
		'Svelte 5 runes drive the scene, no stores',
		'PixiJS 8 ships inside the package',
	];
</script>

<svelte:head>
	<title>Glixy - 2D WebGL scenes as Svelte components</title>
	<meta
		name="description"
		content="Glixy renders PixiJS scenes from Svelte components. Declarative API, render on demand, automatic cleanup."
	/>
</svelte:head>

{#snippet arrowRight()}
	<svg
		class="size-4"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M5 12h14m-6-6 6 6-6 6" />
	</svg>
{/snippet}

<Header />

<main class="flex w-full flex-col">
	<!--
		One left-aligned stack: headline, subline, install line. The demo
		follows on the same column, standing on a lit backdrop that runs nearly
		edge to edge, so the eye lands on the running scene.
	-->
	<section class="w-full pb-12 lg:pb-16">
		<header
			class="mx-auto flex w-full max-w-landing flex-col items-start px-4 pt-16 sm:px-6 lg:px-10 lg:pt-24"
		>
			<h1
				class="text-[32px] font-medium leading-[1.04] tracking-[-0.03em] sm:text-[48px] lg:text-[56px] xl:text-[64px]"
			>
				<span class="whitespace-nowrap">2D WebGL scenes.</span>
				<span class="whitespace-nowrap text-ink-faint">
					As Svelte components.
				</span>
			</h1>

			<p class="mt-6 max-w-3xl text-lg text-ink-muted sm:text-xl">
				Glixy puts a declarative layer over PixiJS 8.
				<br class="hidden sm:block" />
				The scene redraws only when something in it changes.
			</p>

			<div
				class="mt-8 flex h-14 w-full max-w-lg items-center rounded-full border border-line-strong bg-surface-raised p-1.5 pl-5"
			>
				<code
					class="min-w-0 flex-1 truncate text-[14px] text-ink sm:text-[15px]"
				>
					<span class="hidden select-none text-ink-faint sm:inline">$</span>
					{INSTALL}
				</code>
				<CopyButton text={INSTALL} class="mr-2" />
				<a href="/docs/getting-started" class="btn btn-primary h-full">
					Get started
					{@render arrowRight()}
				</a>
			</div>
		</header>

		<div class="relative mt-4 w-full">
			<div
				class="stage-backdrop absolute inset-0 mx-auto max-w-[1920px] lg:inset-x-3 lg:rounded-2xl"
				style="--spot: 50% 100%; mask-image: linear-gradient(180deg, transparent 0%, #000 40%);"
			></div>

			<div
				class="relative mx-auto w-full max-w-landing px-4 pb-8 pt-8 sm:px-6 lg:px-10 lg:pb-14 lg:pt-12"
			>
				<HeroStage />
			</div>
		</div>
	</section>

	<LandingHeading
		dividerTop
		title="Describe the scene."
		quiet="Glixy keeps it drawn."
		description="Sprites, text and shapes are components. Their props are the scene, and the renderer wakes only for the frame that changed."
	/>

	<Features />

	<Section class="h-12 lg:h-16" />

	<Section>
		<div class="grid grid-cols-1 lg:grid-cols-12">
			<div
				class="flex flex-col border-line px-4 py-10 sm:px-6 lg:col-span-5 lg:border-r lg:px-10 lg:py-12"
			>
				<h3 class="text-2xl font-medium tracking-[-0.02em]">
					A moving sprite in a dozen lines
				</h3>

				<p class="mt-3 max-w-md leading-relaxed text-ink-muted">
					Put a Stage on an element, a Sprite on the Stage, and bind its
					position to state. Assign a new value and the next frame draws it.
				</p>

				<a
					href="/docs/getting-started"
					class="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium transition-colors hover:text-ink-muted"
				>
					Read Getting Started
					{@render arrowRight()}
				</a>

				<ul
					class="mt-10 flex flex-col gap-3 border-t border-line pt-6 lg:mt-auto"
				>
					{#each firstSceneChecks as check (check)}
						<li class="flex items-start gap-3 text-sm text-ink-muted">
							<svg
								class="mt-0.5 size-4 shrink-0 text-ink-faint"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path d="M20 6 9 17l-5-5" />
							</svg>
							{check}
						</li>
					{/each}
				</ul>
			</div>

			<div
				class="relative overflow-hidden border-t border-line lg:col-span-7 lg:min-h-[30rem] lg:border-t-0"
			>
				<div
					class="stage-backdrop absolute inset-0"
					style="--spot: 0% 100%; --floor: 225deg;"
				></div>

				<div
					class="panel code-panel relative mb-10 ml-auto w-[92%] rounded-none rounded-bl-xl sm:mb-12 lg:mb-14 lg:w-[88%]"
				>
					<div
						class="flex h-11 items-center border-b border-line px-4 text-[13px] text-ink-faint"
					>
						Scene.svelte
					</div>
					<HighlightAuto code={FIRST_SCENE} />
				</div>
			</div>
		</div>
	</Section>

	<LandingHeading
		title="Start with one sprite."
		quiet="Add the rest when you need it."
		description="Glixy is open source and small. Read the docs, or read the code."
	>
		<div class="mt-10 flex flex-wrap items-center justify-center gap-3">
			<a href="/docs/installation" class="btn btn-primary">Read the docs</a>
			<a
				href="https://github.com/szymeo/glixy"
				target="_blank"
				rel="noreferrer"
				class="btn btn-secondary"
			>
				<GithubIcon class="size-4" />
				Star on GitHub
			</a>
		</div>
	</LandingHeading>

	<Section divider={false} class="h-12 lg:h-16" />
</main>

<Footer />
