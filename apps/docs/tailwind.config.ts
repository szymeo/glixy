import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				xl: { max: '1279px' },
				// => @media (max-width: 1279px) { ... }

				lg: { max: '1023px' },
				// => @media (max-width: 1023px) { ... }

				md: { max: '767px' },
				// => @media (max-width: 767px) { ... }

				sm: { max: '639px' },
				// => @media (max-width: 639px) { ... }
			},
		},
		transitionProperty: {
			height: 'height',
			width: 'width',
		},
	},

	plugins: [],
} satisfies Config;
