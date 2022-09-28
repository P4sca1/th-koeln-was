export default defineNuxtConfig({
	typescript: {
		shim: false,
	},

	modules: [
		'@nuxt/content',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@vueuse/nuxt',
		'nuxt-progress',
	],

	colorMode: {
		classSuffix: '',
	},

	progress: {
		color: '#af368c',
		options: {
			showSpinner: false,
		},
	},
})
