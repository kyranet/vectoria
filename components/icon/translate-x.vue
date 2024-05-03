<template>
	<svg
		viewBox="0 0 256 256"
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		:alt="title"
		class="icon"
		stroke-width="24px"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<title>{{ title }}</title>
		<g class="text-primary">
			<rect x="48" y="108" width="40" height="130" fill="currentColor" fill-opacity="0.2" />
			<path d="m 43 53 170 0 -30 -30 m 30 30 -30 30" fill="none" stroke="currentColor" />
		</g>
		<rect x="93" y="118" width="110" height="110" fill="none" stroke="currentColor" />
	</svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title?: string }>(), { title: 'x-axis translation' });
</script>
