<template>
	<textarea
		v-model="input"
		class="editor-textarea"
		:class="{ 'textarea-success': success, 'textarea-error': success === false }"
		autofocus="true"
		spellcheck="false"
		placeholder="SVG code"
	></textarea>
</template>

<script setup lang="ts">
defineProps<{ success: boolean | null }>();

const input = inject(InjectedCodeInput);
</script>

<style scoped>
.editor-textarea {
	@apply textarea h-full w-full resize-none font-mono;
}
</style>
