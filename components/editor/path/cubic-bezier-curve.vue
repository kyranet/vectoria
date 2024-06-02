<template>
	<editor-path-base title="Cubic Bézier Curve">
		<editor-path-cubic-bezier-curve-entry
			v-for="(entry, index) of entries"
			:key="entry.id"
			:el="entry"
			:index="index"
			@update="$emit('update', el)"
		/>
	</editor-path-base>
</template>

<script setup lang="ts">
import type { CubicBézierCurve } from '~/utils/svg/path/CubicBézierCurve';
import type { CubicBézierCurvePart } from '~/utils/svg/path/parts/CubicBézierCurvePart';

const props = defineProps<{ el: CubicBézierCurve }>();
defineEmits<{
	(event: 'update', value: CubicBézierCurve): void;
}>();

const entries = reactive(props.el.entries) as CubicBézierCurvePart[];
</script>
