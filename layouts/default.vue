<template>
	<div class="bg-white-50 flex flex-col dark:bg-gray-900">
		<Header />
		<Sidebar />

		<main
			class="ml-[var(--sidebar-width)] grow pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] transition-[margin-left] duration-500 ease-in"
		>
			<slot />
		</main>
	</div>
</template>

<script setup lang="ts">
	const colorMode = useColorMode()

	useHead(() => ({
		meta: [
			{
				name: 'theme-color',
				content: colorMode.value === 'dark' ? '#111827' : '#ffffff',
			},
		],
	}))
</script>

<style>
	html {
		@apply bg-gray-50;
	}

	html.dark {
		@apply bg-gray-900;
	}
</style>
