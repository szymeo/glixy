import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		{
			name: 'full-reload',
			handleHotUpdate({ file, server }) {
				server.ws.send({
					type: 'full-reload',
					path: '*',
				});
			},
		},
	],
	server: {
		hmr: {
			overlay: false,
		},
	},
});
