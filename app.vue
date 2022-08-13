<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
	useHead({
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
	})
</script>
