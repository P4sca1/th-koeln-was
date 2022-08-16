<template>
	<div
		v-if="content"
		class="relative flex flex-row-reverse flex-wrap justify-center"
	>
		<nav
			v-if="content.toc && content.body.toc.links.length > 0"
			class="mb-12 h-40 w-full space-y-1 overflow-y-auto xl:sticky xl:top-10 xl:ml-10 xl:h-[calc(100vh_-_var(--header-height)_-_48px)] xl:w-64 2xl:w-80"
		>
			<p class="mt-0 font-medium text-th-orange">Inhaltsverzeichnis</p>
			<div
				v-for="link of content.body.toc.links"
				:key="link.id"
				class="flex items-center rounded-md py-2 pl-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
			>
				<a :href="`#${link.id}`">{{ link.text }}</a>
			</div>
		</nav>

		<div
			class="prose prose-sm overflow-x-auto prose-a:prose-headings:no-underline prose-a:text-th-orange visited:prose-a:text-th-purple dark:prose-invert md:prose-base lg:prose-lg"
		>
			<h1 v-if="content.title">{{ content.title }}</h1>
			<ContentRenderer :value="content" />
		</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{ query: string }>()
	const config = useRuntimeConfig()

	const { data: content } = await useAsyncData(`content/${props.query}`, () =>
		queryContent(props.query)
			.where({ draft: config.public.isProd ? false : undefined })
			.findOne()
	)

	useHead({
		title: content.value.title,
	})
</script>
