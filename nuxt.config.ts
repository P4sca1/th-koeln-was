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
				],

				app: {
								head: {
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
												link: [],
								},
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