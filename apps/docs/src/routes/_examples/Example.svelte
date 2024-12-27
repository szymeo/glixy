<script lang="ts">
	const { children } = $props();

	let host: HTMLDivElement | null = $state(null);
	let hostHeight = $state(0);
	let hostWidth = $state(0);
</script>

<div class="flex flex-col">
	<div
		bind:this={host}
		bind:clientWidth={hostWidth}
		bind:clientHeight={hostHeight}
		class="relative h-96 w-full overflow-hidden rounded-3xl bg-gray-800"
	>
		<div class="absolute flex w-full items-center justify-start gap-2 p-6">
			<!-- onclick={() => (codeVisible = !codeVisible)} -->
			<button
				class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 shadow hover:bg-slate-600/70"
				title="Show code"
			>
				<svg
					class="h-5 w-5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						<path
							d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
							stroke="#fff"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</g>
				</svg>
			</button>
		</div>

		{#if host}
			{@render children(host, hostWidth, hostHeight)}
		{:else}
			<div class="flex h-full items-center justify-center text-slate-200">
				Loading...
			</div>
		{/if}
	</div>
</div>
