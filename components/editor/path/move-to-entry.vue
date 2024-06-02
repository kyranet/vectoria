<template>
	<editor-path-part-base :el="el" :index="index" @update="$emit('update', el)">
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
import type { MoveToPart } from '~/utils/svg/path/parts/MoveToPart';

const props = defineProps<{ el: MoveToPart; index: number }>();
const emit = defineEmits<{
	(event: 'update', value: MoveToPart): void;
}>();

const x = usePathPartProperty(props.el, 'x', emit);
const y = usePathPartProperty(props.el, 'y', emit);
</script>
