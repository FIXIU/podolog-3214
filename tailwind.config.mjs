/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'podo-1': '#010005',
				'podo-2': '#110021',
				'podo-3': '#2d0042',
				'podo-4': '#4b0b65',
				'podo-5': '#662483',
				'podo-6': '#7d439a',
				'podo-7': '#9660b1',
				'podo-8': '#a775c1',
				'podo-9': '#b88bd0',
				'podo-10': '#caa1e0',
				'podo-11': '#d8b4ec',
				'podo-12': '#e5c6f7',
				'podo-13': '#f3d9ff',
				'podo-14': '#f9e4ff',
				'podo-15': '#ffefff',
				'podo-16': '#fffaff',
			},
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
		},
	},
	plugins: [],
}
