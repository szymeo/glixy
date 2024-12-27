<script>
	import Header from '../Header.svelte';
</script>

<div class="mx-auto h-full w-10/12 max-w-4xl py-14">
	<Header />

	<div class="flex w-full pt-5">
		<div class="w-1/4">
			<nav class="sticky top-0">
				<ul class="flex flex-col gap-2 text-lg">
					<li>
						<a
							href="/docs/installation"
							class="text-gray-500 hover:text-purple-700"
						>
							Installation
						</a>
					</li>
					<li>
						<a
							href="/docs/getting-started"
							class="text-gray-500 hover:text-purple-600"
						>
							Getting Started
						</a>
					</li>
					<li>
						<a href="/docs/usage" class="text-gray-500 hover:text-purple-600">
							Usage
						</a>
					</li>
					<li>
						<a href="/docs/api" class="text-gray-500 hover:text-purple-600">
							API
						</a>
					</li>
					<li>
						<a
							href="/docs/examples"
							class="text-gray-500 hover:text-purple-600"
						>
							Examples
						</a>
					</li>
				</ul>
			</nav>
		</div>

		<div class="w-full">
			<slot />
		</div>
	</div>
</div>
