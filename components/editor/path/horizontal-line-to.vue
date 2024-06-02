<template>
	<editor-path-base title="Horizontal Line To">
		<editor-path-horizontal-line-to-entry
			v-for="(entry, index) of entries"
			:key="entry.id"
			:el="entry"
			:index="index"
			@update="$emit('update', el)"
		/>
	</editor-path-base>
</template>

<script setup lang="ts">
import type { HorizontalLineTo } from '~/utils/svg/path/HorizontalLineTo';
import type { HorizontalLineToPart } from '~/utils/svg/path/parts/HorizontalLineToPart';

const props = defineProps<{ el: HorizontalLineTo }>();
defineEmits<{
	(event: 'update', value: HorizontalLineTo): void;
}>();

const entries = reactive(props.el.entries) as HorizontalLineToPart[];
</script>
