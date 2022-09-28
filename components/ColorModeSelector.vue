<template>
	<div>
		<label for="colorMode" class="sr-only">Aussehen</label>
		<div class="relative mt-1 flex">
			<div class="absolute inset-y-0 left-0 flex items-center pl-3">
				<SwatchIcon class="left-0 h-5 w-5" aria-hidden="true" />
			</div>

			<select
				v-model="$colorMode.preference"
				name="colorMode"
				class="block w-full rounded-md border-gray-300 py-2 pl-12 pr-10 text-base text-gray-700 focus:border-th-purple focus:outline-none focus:ring-th-purple dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
			>
				<option value="light">Hell</option>
				<option value="dark">Dunkel</option>
				<option value="system">System</option>
			</select>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { SwatchIcon } from '@heroicons/vue/24/outline/index.js'
</script>
