<template>
	<div>
		<div class="flex flex-row items-center gap-0.5 text-sm">
			<component v-if="icon" :is="icon" class="h-5 w-5" />
			<span class="font-semibold">{{ title }}</span>
		</div>
		<div class="grid gap-2">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{ icon?: Component; title: string }>();
</script>
