<template>
	<editor-path-base title="Quadratic Bézier Curve">
		<editor-path-quadratic-bezier-curve-entry v-for="entry of el.entries" class="entry" :el="entry" @update="$emit('update', el)" />
	</editor-path-base>
</template>

<script setup lang="ts">
import type { QuadraticBézierCurve } from '~/utils/svg/path/QuadraticBézierCurve';

defineProps<{ el: QuadraticBézierCurve }>();
defineEmits<{
	(event: 'update', value: QuadraticBézierCurve): void;
}>();
</script>
