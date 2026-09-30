import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter Variable',
					'Inter',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'sans-serif',
				],
				mono: [
					'Geist Mono Variable',
					'ui-monospace',
					'SF Mono',
					'Menlo',
					'monospace',
				],
			},

			// Logdash's neutral ramp, read from the light end. One hairline colour
			// draws every rail, rule and card edge on the page.
			colors: {
				ink: {
					DEFAULT: '#1c1c1e',
					muted: '#5c5c62',
					faint: '#8e8e94',
				},
				line: {
					DEFAULT: '#e6e6e8',
					strong: '#d6d6da',
				},
				surface: {
					DEFAULT: '#fafafa',
					raised: '#ffffff',
					sunken: '#f4f4f5',
				},
			},

			maxWidth: {
				// 1280px between the rails once the 40px gutters are taken out.
				landing: '85rem',
				prose: '42rem',
			},

			transitionProperty: {
				height: 'height',
				width: 'width',
			},
		},
	},

	plugins: [],
} satisfies Config;
