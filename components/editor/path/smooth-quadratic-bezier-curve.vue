<template>
	<editor-path-base title="Smooth Quadratic Bézier Curve">
		<editor-path-smooth-quadratic-bezier-curve-entry v-for="entry of el.entries" class="entry" :el="entry" @update="$emit('update', el)" />
	</editor-path-base>
</template>

<script setup lang="ts">
import type { SmoothQuadraticBézierCurve } from '~/utils/svg/path/SmoothQuadraticBézierCurve';

defineProps<{ el: SmoothQuadraticBézierCurve }>();
defineEmits<{
	(event: 'update', value: SmoothQuadraticBézierCurve): void;
}>();
</script>
