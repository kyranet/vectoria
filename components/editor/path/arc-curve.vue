<template>
	<editor-path-base title="Arc Curve">
		<editor-path-arc-curve-entry v-for="entry of el.entries" :el="entry" @update="$emit('update', el)" />
	</editor-path-base>
</template>

<script setup lang="ts">
import type { ArcCurve } from '~/utils/svg/path/ArcCurve';

defineProps<{ el: ArcCurve }>();
defineEmits<{
	(event: 'update', value: ArcCurve): void;
}>();
</script>
