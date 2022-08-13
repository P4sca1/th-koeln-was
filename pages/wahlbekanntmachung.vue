<template>
	<div class="container mx-auto p-6">
		<iframe
			:src="src"
			class="square h-[calc(100vh_-_var(--header-height)_-_48px)] w-full"
		></iframe>
	</div>
</template>

<script setup lang="ts">
	import { join } from 'pathe'

	const config = useRuntimeConfig()
	const src = join(config.app.baseURL, 'Formulare/Wahlbekanntmachung_2021.pdf')
</script>
