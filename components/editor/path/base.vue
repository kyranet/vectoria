<template>
	<span class="block text-sm">{{ title }}</span>
	<div class="grid gap-2">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
