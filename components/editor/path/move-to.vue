<template>
	<editor-path-base title="Move To" :icon="el.icon">
		<editor-path-move-to-entry v-for="(entry, index) of entries" :key="entry.id" :el="entry" :index="index" @update="$emit('update', el)" />
	</editor-path-base>
</template>

<script setup lang="ts">
import type { MoveTo } from '~/utils/svg/path/MoveTo';
import type { MoveToPart } from '~/utils/svg/path/parts/MoveToPart';

const props = defineProps<{ el: MoveTo }>();
defineEmits<{
	(event: 'update', value: MoveTo): void;
}>();

const entries = reactive(props.el.entries) as MoveToPart[];
</script>
