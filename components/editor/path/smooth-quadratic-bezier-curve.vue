<template>
	<editor-path-base title="Smooth Quadratic Bézier Curve" :icon="el.icon">
		<editor-path-smooth-quadratic-bezier-curve-entry
			v-for="(entry, index) of entries"
			:key="entry.id"
			:el="entry"
			:index="index"
			@update="$emit('update', el)"
		/>
	</editor-path-base>
</template>

<script setup lang="ts">
import type { SmoothQuadraticBézierCurve } from '~/utils/svg/path/SmoothQuadraticBézierCurve';
import type { SmoothQuadraticBézierCurvePart } from '~/utils/svg/path/parts/SmoothQuadraticBézierCurvePart';

const props = defineProps<{ el: SmoothQuadraticBézierCurve }>();
defineEmits<{
	(event: 'update', value: SmoothQuadraticBézierCurve): void;
}>();

const entries = reactive(props.el.entries) as SmoothQuadraticBézierCurvePart[];
</script>
