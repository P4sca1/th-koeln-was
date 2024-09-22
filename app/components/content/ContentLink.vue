<template>
	<a :href="href" target="_blank">{{ text }}</a>
</template>

<script setup lang="ts">
	import { join } from 'pathe'
	const props = defineProps<{ path: string; text: string }>()
	const config = useRuntimeConfig()
	const href = computed(() =>
		join(config.app.baseURL, '/dokumente/', props.path)
	)
</script>
