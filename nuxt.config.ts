export default defineNuxtConfig({
	telemetry: false,

	compatibilityDate: '2024-09-10',

	future: {
		compatibilityVersion: 4,
	},

	typescript: {
		shim: false,
	},

	modules: [
		'@nuxt/eslint',
		'@nuxt/content',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@nuxthq/studio',
		'@vueuse/nuxt',
		'@nuxt/image',
		'nuxt-headlessui',
		'nuxt-security',
		'@nuxtjs/seo',
	],

	devtools: {
		enabled: true,
	},

	app: {
		head: {
			viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
			htmlAttrs: {
				lang: 'de',
			},
		},
	},

	site: {
		url: 'https://www.stupa.th-koeln.de',
		name: 'Studentischer Wahlausschuss - TH Köln',
		defaultLocale: 'de_DE',
	},

	ogImage: {
		enabled: false,
	},

	linkChecker: {
		failOnError: false,
	},

	content: {
		// https://content.nuxtjs.org/api/configuration#documentdriven-options
		documentDriven: {
			navigation: false,
			page: true,
			surround: false,
			globals: {},
			layoutFallbacks: [],
			injectPage: true,
		},
	},

	colorMode: {
		classSuffix: '',
	},

	image: {
		provider: 'ipx',
		format: ['webp'],
	},
})
