<template>
	<div class="entry-wrapper">
		<span class="block font-bold">
			{{ title }}
			<span v-if="id" class="text-xs text-base-content/50">{{ id }}</span>
		</span>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
defineProps<{ title: string; id?: string | undefined }>();
</script>

<style scoped>
.entry-wrapper {
	@apply flex flex-col gap-1 rounded-sm border-l border-base-content/20 pl-1 hover:bg-base-content/5;
}
</style>
