<template>
	<div class="input input-bordered grid grid-cols-2 gap-2">
		<label class="flex gap-2">
			<span>X</span>
			<input v-model="x" class="min-w-0" type="number" min="0" />
		</label>
		<label class="flex gap-2">
			<span>Y</span>
			<input v-model="y" class="min-w-0" type="number" min="0" />
		</label>
	</div>
</template>

<script setup lang="ts">
import type { SmoothQuadraticBézierCurvePart } from '~/utils/svg/path/parts/SmoothQuadraticBézierCurvePart';

const props = defineProps<{ el: SmoothQuadraticBézierCurvePart }>();
const emit = defineEmits<{
	(event: 'update', value: SmoothQuadraticBézierCurvePart): void;
}>();

const x = computed({
	get: () => props.el.x,
	set: (value: number) => ((props.el.x = value), emit('update', props.el))
});
const y = computed({
	get: () => props.el.y,
	set: (value: number) => ((props.el.y = value), emit('update', props.el))
});
</script>
