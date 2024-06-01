<template>
	<div>
		<div class="input input-bordered grid grid-cols-2 gap-2">
			<label class="flex gap-2">
				<span>X</span>
				<input v-model="x1" class="min-w-0" type="number" min="0" />
			</label>
			<label class="flex gap-2">
				<span>Y</span>
				<input v-model="y1" class="min-w-0" type="number" min="0" />
			</label>
		</div>

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
	</div>
</template>

<script setup lang="ts">
import type { QuadraticBézierCurvePart } from '~/utils/svg/path/parts/QuadraticBézierCurvePart';

const props = defineProps<{ el: QuadraticBézierCurvePart }>();
const emit = defineEmits<{
	(event: 'update', value: QuadraticBézierCurvePart): void;
}>();

const x1 = computed({
	get: () => props.el.x1,
	set: (value) => ((props.el.x1 = value), emit('update', props.el))
});
const y1 = computed({
	get: () => props.el.y1,
	set: (value) => ((props.el.y1 = value), emit('update', props.el))
});
const x = computed({
	get: () => props.el.x,
	set: (value) => ((props.el.x = value), emit('update', props.el))
});
const y = computed({
	get: () => props.el.y,
	set: (value) => ((props.el.y = value), emit('update', props.el))
});
</script>

<style scoped>
.from-to {
	grid-template-columns: minmax(0, auto) minmax(0, 1fr) minmax(0, auto) minmax(0, 1fr);
}
</style>
