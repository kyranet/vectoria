<template>
	<editor-path-move-to v-if="el.type === 'M' || el.type === 'm'" :el="el" @update="$emit('update', el)" />
	<editor-path-line-to v-else-if="el.type === 'L' || el.type === 'l'" :el="el" @update="$emit('update', el)" />
	<editor-path-horizontal-line-to v-else-if="el.type === 'H' || el.type === 'h'" :el="el" @update="$emit('update', el)" />
	<editor-path-vertical-line-to v-else-if="el.type === 'V' || el.type === 'v'" :el="el" @update="$emit('update', el)" />
	<editor-path-cubic-bezier-curve v-else-if="el.type === 'C' || el.type === 'c'" :el="el" @update="$emit('update', el)" />
	<editor-path-smooth-cubic-bezier-curve v-else-if="el.type === 'S' || el.type === 's'" :el="el" @update="$emit('update', el)" />
	<editor-path-quadratic-bezier-curve v-else-if="el.type === 'Q' || el.type === 'q'" :el="el" @update="$emit('update', el)" />
	<editor-path-smooth-quadratic-bezier-curve v-else-if="el.type === 'T' || el.type === 't'" :el="el" @update="$emit('update', el)" />
	<editor-path-arc-curve v-else-if="el.type === 'A' || el.type === 'a'" :el="el" @update="$emit('update', el)" />
	<editor-path-close-path v-else-if="el.type === 'Z' || el.type === 'z'" :el="el" />
	<div v-else></div>
</template>

<script setup lang="ts">
import type { VectorPath } from '~/utils/svg/VectorPath';

defineProps<{ el: VectorPath.PathEntry }>();
defineEmits<{
	(event: 'update', value: VectorPath.PathEntry): void;
}>();
</script>
