<template>
	<editor-path-base title="Vertical Line To" :icon="el.icon">
		<editor-path-vertical-line-to-entry
			v-for="(entry, index) of entries"
			:key="entry.id"
			:el="entry"
			:index="index"
			@update="$emit('update', el)"
		/>
	</editor-path-base>
</template>

<script setup lang="ts">
import type { VerticalLineTo } from '~/utils/svg/path/VerticalLineTo';
import type { VerticalLineToPart } from '~/utils/svg/path/parts/VerticalLineToPart';

const props = defineProps<{ el: VerticalLineTo }>();
defineEmits<{
	(event: 'update', value: VerticalLineTo): void;
}>();

const entries = reactive(props.el.entries) as VerticalLineToPart[];
</script>
