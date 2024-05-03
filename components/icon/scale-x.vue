<template>
	<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" role="img" :alt="title" class="icon">
		<title>{{ title }}</title>
		<path d="M 13 68 h 60 v 120 h -60 m 175 -120 h 60 v 120 h -60" fill="currentColor" fill-opacity="0.2" class="text-primary" />
		<rect
			x="73"
			y="73"
			width="110"
			height="110"
			fill="none"
			stroke="currentColor"
			stroke-width="24px"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title?: string }>(), { title: 'X-axis scale' });
</script>
