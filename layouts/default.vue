<template>
	<div
		ref="layout"
		class="bg-white-50 initialload flex flex-col dark:bg-gray-900"
	>
		<Header />
		<Sidebar />

		<main
			class="ml-[var(--sidebar-width)] min-h-[calc(100vh_-_var(--header-height))] grow pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] transition-[margin-left] duration-500 ease-in"
		>
			<div v-if="page" class="container mx-auto p-6">
				<div class="relative flex flex-row-reverse flex-wrap justify-center">
					<nav
						v-if="page.toc && page.body.toc.links.length > 0"
						class="mb-12 h-40 w-full space-y-1 overflow-y-auto xl:sticky xl:top-10 xl:ml-10 xl:h-[calc(100vh_-_var(--header-height)_-_48px)] xl:w-64 2xl:w-80"
					>
						<p class="mt-0 font-medium text-th-orange">Inhaltsverzeichnis</p>
						<div
							v-for="link of page.body.toc.links"
							:key="link.id"
							class="flex items-center rounded-md py-2 pl-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
						>
							<a :href="`#${link.id}`">{{ link.text }}</a>
						</div>
					</nav>

					<div
						class="prose prose-sm overflow-x-auto prose-a:text-th-orange visited:prose-a:text-th-purple prose-a:prose-headings:no-underline dark:prose-invert md:prose-base lg:prose-lg"
					>
						<h1 v-if="page.title">{{ page.title }}</h1>
						<slot />
					</div>
				</div>
			</div>
			<slot v-else />
		</main>
	</div>
</template>

<script setup lang="ts">
	// Set theme-color based on color mode.
	const colorMode = useColorMode()
	useHead(() => ({
		meta: [
			{
				name: 'theme-color',
				content: colorMode.value === 'dark' ? '#111827' : '#ffffff',
			},
		],
	}))

	// Remove initialload class from layout after hydration.
	const layout = ref<HTMLElement | null>(null)
	onMounted(() => {
		layout.value?.classList.remove('initialload')
	})

	// Close mobile sidebar after route navigation.
	const router = useRouter()
	const { isMobileSidebarOpen } = useSidebar()
	router.beforeEach(() => {
		isMobileSidebarOpen.value = false
	})

	const { page } = useContent()
</script>

<style>
	html {
		@apply bg-gray-50;
	}

	html.dark {
		@apply bg-gray-900;
	}
</style>
