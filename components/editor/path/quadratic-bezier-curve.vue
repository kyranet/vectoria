<template>
	<editor-path-base title="Quadratic Bézier Curve">
		<editor-path-quadratic-bezier-curve-entry
			v-for="(entry, index) of entries"
			:key="entry.id"
			:el="entry"
			:index="index"
			@update="$emit('update', el)"
		/>
	</editor-path-base>
</template>

<script setup lang="ts">
import type { QuadraticBézierCurve } from '~/utils/svg/path/QuadraticBézierCurve';
import type { QuadraticBézierCurvePart } from '~/utils/svg/path/parts/QuadraticBézierCurvePart';

const props = defineProps<{ el: QuadraticBézierCurve }>();
defineEmits<{
	(event: 'update', value: QuadraticBézierCurve): void;
}>();

const entries = reactive(props.el.entries) as QuadraticBézierCurvePart[];
</script>
