<template>
	<editor-path-base title="Smooth Cubic Bézier Curve" :icon="el.icon">
		<editor-path-smooth-cubic-bezier-curve-entry
			v-for="(entry, index) of entries"
			:key="entry.id"
			:el="entry"
			:index="index"
			@update="$emit('update', el)"
		/>
	</editor-path-base>
</template>

<script setup lang="ts">
import type { SmoothCubicBézierCurve } from '~/utils/svg/path/SmoothCubicBézierCurve';
import type { SmoothCubicBézierCurvePart } from '~/utils/svg/path/parts/SmoothCubicBézierCurvePart';

const props = defineProps<{ el: SmoothCubicBézierCurve }>();
defineEmits<{
	(event: 'update', value: SmoothCubicBézierCurve): void;
}>();

const entries = reactive(props.el.entries) as SmoothCubicBézierCurvePart[];
</script>
