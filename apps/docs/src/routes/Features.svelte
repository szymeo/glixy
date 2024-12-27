<script lang="ts">
	const features = [
		{
			title: '😱 Avoid memory leaks',
			description:
				'Automatically clean up resources when scene objects are destroyed.',
		},
		{
			title: '🚀 Render on demand',
			description: 'Glixy runs the render loop only when needed.',
		},
		{
			title: '🏎️ Illegally fast',
			description:
				'With PixiJS@8 and Svelte@5 under the hood, Glixy offers best in class performance.',
		},
		{
			title: '🏗️ Declarative API and Component Architecture',
			description: 'Render complex scenes without a headache.',
		},
	];
</script>

<ul class="my-12 list-decimal pl-10 font-mono text-xl text-slate-600">
	{#each features as feature}
		<li class="mb-5">
			<p class="mb-0 text-xl">{feature.title}</p>
			<span class="text-base text-slate-500">{feature.description}</span>
		</li>
	{/each}
</ul>
