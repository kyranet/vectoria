<template>
	<editor-path-part-base :el="el" :index="index" @update="$emit('update', el)">
		<div class="input grid grid-cols-2 gap-2">
			<label class="flex gap-2">
				<span>X</span>
				<input :value="x" class="min-w-0" type="number" disabled="true" />
			</label>
			<label class="flex gap-2">
				<span>Y</span>
				<input v-model="y" class="min-w-0" type="number" min="0" />
			</label>
		</div>
	</editor-path-part-base>
</template>

<script setup lang="ts">
import type { VerticalLineToPart } from '~/utils/svg/path/parts/VerticalLineToPart';

const props = defineProps<{ el: VerticalLineToPart; index: number }>();
const emit = defineEmits<{
	(event: 'update', value: VerticalLineToPart): void;
}>();

const x = computed(() => props.el.start.x);
const y = usePathPartProperty(props.el, 'y', emit);
</script>
