<template>
	<svg
		viewBox="0 0 256 256"
		xmlns="http://www.w3.org/2000/svg"
		role="checkbox"
		:aria-checked="open"
		tabindex="0"
		class="icon select-none outline-0"
		:class="{ '-rotate-90': !open }"
	>
		<path d="m 88 108 40 40 40 -40" stroke="currentColor" stroke-width="24px" stroke-linecap="round" stroke-linejoin="round" fill="none" />
		<path d="m 88 98 40 40 40 -40" class="text-primary" fill="currentColor" fill-opacity="0.2" />
	</svg>
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>();
</script>
