<template>
	<editor-path-base title="Line To" :icon="el.icon">
		<editor-path-line-to-entry v-for="(entry, index) of entries" :key="entry.id" :el="entry" :index="index" @update="$emit('update', el)" />
	</editor-path-base>
</template>

<script setup lang="ts">
import type { LineTo } from '~/utils/svg/path/LineTo';
import type { LineToPart } from '~/utils/svg/path/parts/LineToPart';

const props = defineProps<{ el: LineTo }>();
defineEmits<{
	(event: 'update', value: LineTo): void;
}>();

const entries = reactive(props.el.entries) as LineToPart[];
</script>
