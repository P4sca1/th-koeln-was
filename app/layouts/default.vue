<template>
	<div
		ref="layout"
		class="bg-white-50 initialload flex flex-col dark:bg-gray-900"
	>
		<THeader />
		<TSidebar />

		<main
			class="ml-[var(--sidebar-width)] min-h-[calc(100vh_-_var(--header-height))] grow pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] transition-[margin-left] duration-500 ease-in"
		>
			<div
				v-if="page"
				class="container relative mx-auto flex flex-col-reverse justify-between p-6 xl:flex-row"
			>
				<div
					class="prose prose-sm overflow-x-auto prose-a:text-orange visited:prose-a:text-th-purple prose-a:prose-headings:no-underline dark:prose-invert md:prose-base lg:prose-lg"
				>
					<h1 v-if="page.title">{{ page.title }}</h1>
					<slot />
				</div>

				<div class="relative flex flex-row-reverse flex-wrap justify-center">
					<template v-if="page.body?.toc && toc.length > 0">
						<!-- Desktop table of content -->
						<nav
							class="sticky top-[calc(var(--header-height,_0px)_+_16px)] hidden h-[calc(100dvh_-_var(--header-height,_0px)_-_var(--header-extension-height,_0px)_-_32px)] w-64 overflow-y-auto xl:block 2xl:w-80"
							aria-label="Inhaltsverzeichnis"
						>
							<p class="mb-2 text-lg text-gray-900 dark:text-gray-200">
								Inhaltsverzeichnis
							</p>
							<div
								v-for="link of toc"
								:key="link.id"
								:class="[
									'flex items-center border-l-2 py-3 pl-3 text-sm',
									visibleHeadings.includes(link.id)
										? 'border-orange-500 bg-orange-50 font-semibold text-orange-900 dark:bg-gray-800 dark:text-gray-100'
										: 'border-gray-300 text-gray-600 hover:bg-orange-50 hover:text-gray-900 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200',
								]"
							>
								<a :href="`#${link.id}`">{{ link.text }}</a>
							</div>
						</nav>

						<!-- Mobile table of content -->
						<HeadlessMenu
							as="nav"
							class="relative mb-4 xl:hidden"
							aria-label="Inhaltsverzeichnis Menü"
						>
							<HeadlessMenuButton
								type="button"
								class="flex gap-2"
							>
								<ChevronDownIcon class="h-6 w-6" />
								Inhaltsverzeichnis
							</HeadlessMenuButton>
							<HeadlessMenuItems
								class="absolute left-2 z-10 mt-2 flex h-64 w-56 origin-top-left flex-col gap-1 overflow-y-auto rounded-lg bg-white p-2 text-sm font-medium shadow-lg ring-1 ring-black/5 focus-visible:outline-orange-500 dark:bg-gray-800 dark:ring-gray-700"
							>
								<HeadlessMenuItem
									v-for="link of toc"
									:key="link.id"
								>
									<NuxtLink
										:href="`#${link.id}`"
										class="group flex items-center rounded-md p-2 text-start text-gray-600 hover:bg-gray-100 hover:text-gray-900 ui-active:bg-gray-100 ui-active:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:ui-active:bg-gray-700 dark:ui-active:text-white"
										>{{ link.text }}</NuxtLink
									>
								</HeadlessMenuItem>
							</HeadlessMenuItems>
						</HeadlessMenu>
					</template>
				</div>
			</div>
			<slot v-else />
		</main>
	</div>
</template>

<script setup lang="ts">
	import type { TocLink } from '@nuxt/content'
	import { ChevronDownIcon } from '@heroicons/vue/24/outline/esm/index'

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

	const toc = computed<TocLink[]>(() => page.value.body?.toc?.links ?? [])

	// Highlight visible headings
	const observer = ref<IntersectionObserver | null>(null)
	const visibleHeadings = ref<string[]>([])

	onBeforeMount(() => {
		observer.value = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					visibleHeadings.value.push(entry.target.id)
				} else {
					visibleHeadings.value = visibleHeadings.value.filter(
						(id) => id !== entry.target.id
					)
				}
			}
		})
	})

	onMounted(async () => {
		// Wait until ContentRenderer has rendered the content
		await nextTick()

		const headings = document.querySelectorAll(
			'h1, h2, h3, h4'
		)

		for (const heading of headings) {
			observer.value?.observe(heading)
		}
	})

	onBeforeUnmount(() => {
		observer.value?.disconnect()
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
