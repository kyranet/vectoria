<template>
	<editor-path-base title="Quadratic Bézier Curve">
		<editor-path-cubic-bezier-curve-entry v-for="entry of el.entries" class="entry" :el="entry" @update="$emit('update', el)" />
	</editor-path-base>
</template>

<script setup lang="ts">
import type { CubicBézierCurve } from '~/utils/svg/path/CubicBézierCurve';

defineProps<{ el: CubicBézierCurve }>();
defineEmits<{
	(event: 'update', value: CubicBézierCurve): void;
}>();
</script>
