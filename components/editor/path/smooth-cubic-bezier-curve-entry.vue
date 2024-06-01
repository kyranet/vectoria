<template>
	<div>
		<div class="input input-bordered grid grid-cols-2 gap-2">
			<label class="flex gap-2">
				<span>X</span>
				<input v-model="x2" class="min-w-0" type="number" min="0" />
			</label>
			<label class="flex gap-2">
				<span>Y</span>
				<input v-model="y2" class="min-w-0" type="number" min="0" />
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
import type { SmoothCubicBézierCurvePart } from '~/utils/svg/path/parts/SmoothCubicBézierCurvePart';

const props = defineProps<{ el: SmoothCubicBézierCurvePart }>();
const emit = defineEmits<{
	(event: 'update', value: SmoothCubicBézierCurvePart): void;
}>();

const x2 = computed({
	get: () => props.el.x2,
	set: (value: number) => ((props.el.x2 = value), emit('update', props.el))
});
const y2 = computed({
	get: () => props.el.y2,
	set: (value: number) => ((props.el.y2 = value), emit('update', props.el))
});
const x = computed({
	get: () => props.el.x,
	set: (value: number) => ((props.el.x = value), emit('update', props.el))
});
const y = computed({
	get: () => props.el.y,
	set: (value: number) => ((props.el.y = value), emit('update', props.el))
});
</script>
