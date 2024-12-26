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
		class="w-full h-96 relative border border-slate-700/60 rounded-3xl overflow-hidden"
	>
		<div class="flex items-center justify-start gap-2 absolute w-full p-4">
			<!-- onclick={() => (codeVisible = !codeVisible)} -->
			<button
				class="w-10 h-10 bg-slate-700 hover:bg-slate-800 shadow rounded-full flex items-center justify-center"
				title="Show code"
			>
				<svg
					class="w-5 h-5"
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
			{@render children({ host, hostWidth, hostHeight })}
		{/if}
	</div>
</div>
