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
			<slot />
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
</script>

<style>
	html {
		@apply bg-gray-50;
	}

	html.dark {
		@apply bg-gray-900;
	}
</style>
