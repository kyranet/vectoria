<template>
	<editor-path-base title="Arc Curve" :icon="el.icon">
		<editor-path-arc-curve-entry v-for="(entry, index) of entries" :key="entry.id" :el="entry" :index="index" @update="$emit('update', el)" />
	</editor-path-base>
</template>

<script setup lang="ts">
import type { ArcCurve } from '~/utils/svg/path/ArcCurve';
import type { ArcCurvePart } from '~/utils/svg/path/parts/ArcCurvePart';

const props = defineProps<{ el: ArcCurve }>();
defineEmits<{
	(event: 'update', value: ArcCurve): void;
}>();

const entries = reactive(props.el.entries) as ArcCurvePart[];
</script>
