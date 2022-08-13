<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<Listbox v-model="$colorMode.preference" as="div" class="relative">
		<ListboxLabel class="sr-only">Theme</ListboxLabel>
		<ListboxButton class="flex justify-center">
			<SunIcon class="h-6 w-6 dark:hidden" />
			<MoonIcon class="hidden h-6 w-6 dark:inline" />
		</ListboxButton>

		<transition
			leave-active-class="transition ease-in duration-100"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<ListboxOptions
				class="absolute right-0 z-50 mt-6 w-36 origin-top-right overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-gray-700 shadow-lg dark:bg-gray-800 dark:text-gray-300"
			>
				<ListboxOption
					v-for="option in options"
					v-slot="{ active, selected }"
					:key="option.value"
					as="template"
					:value="option.value"
				>
					<li
						:class="[
							selected && 'text-th-purple',
							active && 'bg-gray-50 dark:bg-gray-700',
							'flex cursor-pointer items-center py-1 px-2',
						]"
					>
						<component :is="option.icon" class="mr-2 h-6 w-6" />
						{{ option.text }}
					</li>
				</ListboxOption>
			</ListboxOptions>
		</transition>
	</Listbox>
</template>

<script setup lang="ts">
	import {
		Listbox,
		ListboxLabel,
		ListboxButton,
		ListboxOption,
		ListboxOptions,
	} from '@headlessui/vue'
	import {
		SunIcon,
		MoonIcon,
		DesktopComputerIcon,
	} from '@heroicons/vue/outline'

	const options = [
		{ value: 'light', text: 'Hell', icon: SunIcon },
		{ value: 'dark', text: 'Dunkel', icon: MoonIcon },
		{ value: 'system', text: 'System', icon: DesktopComputerIcon },
	]
</script>
