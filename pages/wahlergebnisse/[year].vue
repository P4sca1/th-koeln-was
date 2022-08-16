<template>
	<div class="container mx-auto p-6">
		<Content :query="`/wahlergebnisse/${$route.params.year}`" />
	</div>
</template>
