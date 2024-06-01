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
import type { MoveToPart } from '~/utils/svg/path/parts/MoveToPart';

const props = defineProps<{ el: MoveToPart }>();
const emit = defineEmits<{
	(event: 'update', value: MoveToPart): void;
}>();

const x = computed({
	get: () => props.el.x,
	set: (value) => ((props.el.x = value), emit('update', props.el))
});
const y = computed({
	get: () => props.el.y,
	set: (value) => ((props.el.y = value), emit('update', props.el))
});
</script>
