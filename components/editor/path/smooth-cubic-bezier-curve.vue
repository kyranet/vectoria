<template>
	<editor-path-base title="Smooth Cubic Bézier Curve">
		<editor-path-smooth-cubic-bezier-curve-entry v-for="entry of el.entries" class="entry" :el="entry" @update="$emit('update', el)" />
	</editor-path-base>
</template>

<script setup lang="ts">
import type { SmoothCubicBézierCurve } from '~/utils/svg/path/SmoothCubicBézierCurve';

defineProps<{ el: SmoothCubicBézierCurve }>();
defineEmits<{
	(event: 'update', value: SmoothCubicBézierCurve): void;
}>();
</script>
