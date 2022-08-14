import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
	typescript: {
		shim: false,
	},

	build: {
		// https://github.com/nuxt/framework/issues/2326
		transpile: ['@headlessui/vue', '@heroicons/vue'],
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
