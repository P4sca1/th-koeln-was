/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			colors: {
				'th-red': '#cf1820',
				'th-orange': '#ec6525',
				'th-purple': '#af368c',
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
	darkMode: 'class',
}
