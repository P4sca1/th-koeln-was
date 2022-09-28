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

	meta: {
		title: 'Studentischer Wahlausschuss - TH Köln',
		viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
		htmlAttrs: {
			lang: 'de',
		},
		meta: [
			{ property: 'og:type', content: 'website' },
			{
				property: 'og:site_name',
				content: 'Studentischer Wahlausschuss - TH Köln',
			},
			{ property: 'og:locale', content: 'de_DE' },
		],
		link: [
			// TODO
			// {
			// 	rel: 'icon',
			// 	type: 'image/x-icon',
			// 	href: 'favicon.ico',
			// },
		],
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

	progress: {
		color: '#af368c',
		options: {
			showSpinner: false,
		},
	},
})
