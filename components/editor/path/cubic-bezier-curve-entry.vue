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
import type { CubicBézierCurvePart } from '~/utils/svg/path/parts/CubicBézierCurvePart';

const props = defineProps<{ el: CubicBézierCurvePart }>();
const emit = defineEmits<{
	(event: 'update', value: CubicBézierCurvePart): void;
}>();

const x1 = computed({
	get: () => props.el.x1,
	set: (value: number) => ((props.el.x1 = value), emit('update', props.el))
});
const y1 = computed({
	get: () => props.el.y1,
	set: (value: number) => ((props.el.y1 = value), emit('update', props.el))
});
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
