<template>
	<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" role="img" :alt="title" class="icon">
		<title>{{ title }}</title>
		<path d="m 48 68 30 0 -30 110 m 160 -100 0 110 -30 0" fill="currentColor" fill-opacity="0.2" class="text-primary" />
		<path
			d="m 88 73 110 0 -30 110 -110 0 Z"
			fill="none"
			stroke="currentColor"
			stroke-width="24px"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title?: string }>(), { title: 'x-axis skew' });
</script>
