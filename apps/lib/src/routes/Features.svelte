<script lang="ts">
	const features = [
		{
			title: 'Easiest WebGL Integration',
			description:
				'Seamlessly integrate WebGL into your Svelte applications with minimal setup.',
		},
		{
			title: 'Component-Based Architecture',
			description: 'Use Svelte components to manage your WebGL UI.',
		},
		{
			title: 'High Performance',
			description:
				'Running render loop on demand with top notch Svelte performance.',
		},
		{
			title: 'Memory Safety',
			description:
				'Automatically clean up resources when components are destroyed.',
		},
	];
</script>

<ul class="list-decimal text-xl pl-10 my-8 font-mono text-slate-200">
	{#each features as feature}
		<li class="mb-5">
			<p class="text-xl mb-0">{feature.title}</p>
			<span class="text-slate-400 text-lg">{feature.description}</span>
		</li>
	{/each}
</ul>
