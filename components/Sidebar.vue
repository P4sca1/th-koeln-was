<template>
	<!-- Sidebar for mobile -->
	<ClientOnly>
		<Dialog
			as="div"
			class="relative z-40 md:hidden"
			:open="isMobileSidebarOpen"
			@close="isMobileSidebarOpen = false"
		>
			<div class="fixed inset-0 z-40 flex">
				<DialogPanel
					class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-200 pt-5 pb-4 dark:bg-gray-800"
				>
					<div class="absolute top-0 right-0 pr-2 pt-2">
						<button
							type="button"
							class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 dark:focus:ring-white"
							@click="isMobileSidebarOpen = false"
						>
							<span class="sr-only">Close sidebar</span>
							<XMarkIcon
								class="h-6 w-6 text-gray-900 dark:text-white"
								aria-hidden="true"
							/>
						</button>
					</div>
					<div class="h-0 flex-1 overflow-y-auto">
						<nav class="space-y-1 px-2">
							<NuxtLink
								v-for="item in navigation"
								:key="item.name"
								:to="item.to"
								class="group flex items-center rounded-md px-2 py-2 text-base font-medium"
								active-class="text-th-red dark:text-th-orange"
							>
								{{ item.name }}
							</NuxtLink>
						</nav>
					</div>
				</DialogPanel>
				<div class="w-14 flex-shrink-0" aria-hidden="true">
					<!-- Dummy element to force sidebar to shrink to fit close icon -->
				</div>
			</div>
		</Dialog>
	</ClientOnly>

	<!-- Static sidebar for desktop -->
	<div
		class="fixed inset-y-0 z-20 hidden w-[var(--sidebar-width)] flex-col transition-[width] duration-500 ease-in md:flex"
	>
		<div
			class="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-gray-100 pt-5 pl-[env(safe-area-inset-left)] dark:border-gray-900 dark:bg-gray-800"
		>
			<div class="flex flex-1 flex-col">
				<nav class="flex-1 space-y-1 px-2 pb-4 text-gray-900 dark:text-gray-50">
					<NuxtLink
						v-for="item in navigation"
						:key="item.name"
						:to="item.to"
						class="group flex items-center rounded-md px-2 py-2 font-medium hover:text-th-red dark:hover:text-th-orange"
						active-class="text-th-red dark:text-th-orange"
					>
						{{ item.name }}
					</NuxtLink>
				</nav>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { Dialog, DialogPanel } from '@headlessui/vue'
	import { XMarkIcon } from '@heroicons/vue/24/outline'

	const { isMobileSidebarOpen } = useSidebar()

	const navigation = [
		{ name: 'Startseite', to: '/' },
		{ name: 'Termine', to: '/termine' },
		{ name: 'Wahlordnungen', to: '/wahlordnungen' },
		{ name: 'Für Wählende', to: '/fuer-waehlende' },
		{ name: 'Für Kandidierende', to: '/fuer-kandidierende' },
		{ name: 'Für Wahlhelfende', to: '/fuer-wahlhelfende' },
		{ name: 'Kandidaturen', to: '/kandidaturen' },
		{ name: 'Briefwahl', to: '/briefwahl' },
		{ name: 'Wahlergebnisse', to: '/wahlergebnisse' },
		{ name: 'Wahlausschuss', to: '/wahlausschuss' },
	]
</script>
