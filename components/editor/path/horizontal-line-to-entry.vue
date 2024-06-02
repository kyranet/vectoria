<template>
	<editor-path-part-base :el="el" :index="index" @update="$emit('update', el)">
		<div class="input grid grid-cols-2 gap-2">
			<label class="flex gap-2">
				<span>X</span>
				<input v-model="x" class="min-w-0" type="number" min="0" />
			</label>
			<label class="flex gap-2">
				<span>Y</span>
				<input :value="y" class="min-w-0" type="number" disabled="true" />
			</label>
		</div>
	</editor-path-part-base>
</template>

<script setup lang="ts">
import type { HorizontalLineToPart } from '~/utils/svg/path/parts/HorizontalLineToPart';

const props = defineProps<{ el: HorizontalLineToPart; index: number }>();
const emit = defineEmits<{
	(event: 'update', value: HorizontalLineToPart): void;
}>();

const x = usePathPartProperty(props.el, 'x', emit);
const y = computed(() => props.el.end.y);
</script>
