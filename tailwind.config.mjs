/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'podo-1': '#010009',
				'podo-2': '#16002a',
				'podo-3': '#3c0055',
				'podo-4': '#662483',
				'podo-5': '#7e419b',
				'podo-6': '#975db4',
				'podo-7': '#b17acd',
				'podo-8': '#c28ede',
				'podo-9': '#d4a2ee',
				'podo-10': '#e6b7ff',
				'podo-11': '#eec2ff',
				'podo-12': '#f6ceff',
				'podo-13': '#fed9ff',
				'podo-14': '#ffdfff',
				'podo-15': '#ffe5ff',
				'podo-16': '#ffebff',
			},
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
		},
	},
	plugins: [],
}
