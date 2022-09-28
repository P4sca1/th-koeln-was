<template>
	<div
		class="z-10 flex h-[var(--header-height)] flex-shrink-0 items-center bg-white pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] shadow transition-[padding-left] duration-500 ease-in dark:bg-gray-800 dark:shadow-gray-900 md:pl-[max(env(safe-area-inset-left),var(--sidebar-width))]"
	>
		<!-- Button to toggle the sidebar -->
		<button
			type="button"
			class="border-r border-gray-200 px-4 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:border-gray-900 dark:text-gray-300"
			@click="toggle"
		>
			<span class="sr-only">Seitenleiste umschalten</span>
			<Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
		</button>

		<h1 class="ml-4 flex-1 text-xl">Studentischer Wahlausschuss</h1>

		<ColorModeMenu class="mr-4" />
	</div>
</template>

<script setup lang="ts">
	import { Bars3BottomLeftIcon } from '@heroicons/vue/24/outline/index.js'
	const { toggle } = useSidebar()
</script>
