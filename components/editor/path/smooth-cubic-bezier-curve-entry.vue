<template>
	<editor-path-part-base :el="el" :index="index" @update="$emit('update', el)">
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
	</editor-path-part-base>
</template>

<script setup lang="ts">
import type { SmoothCubicBézierCurvePart } from '~/utils/svg/path/parts/SmoothCubicBézierCurvePart';

const props = defineProps<{ el: SmoothCubicBézierCurvePart; index: number }>();
const emit = defineEmits<{
	(event: 'update', value: SmoothCubicBézierCurvePart): void;
}>();

const x2 = usePathPartProperty(props.el, 'x2', emit);
const y2 = usePathPartProperty(props.el, 'y2', emit);
const x = usePathPartProperty(props.el, 'x', emit);
const y = usePathPartProperty(props.el, 'y', emit);
</script>
