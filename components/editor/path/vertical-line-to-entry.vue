<template>
	<span>
		<span class="text-base-content-readonly">
			<icon-axis-x class="h-5 w-5" />
			{{ x }}
		</span>
		<icon-axis-y class="h-5 w-5" />
		{{ y }}
	</span>
</template>

<script setup lang="ts">
import type { VerticalLineToPart } from '~/utils/svg/path/parts/VerticalLineToPart';

const props = defineProps<{ el: VerticalLineToPart }>();
const emit = defineEmits<{
	(event: 'update', value: VerticalLineToPart): void;
}>();

const x = computed(() => props.el.start.x);
const y = computed({
	get: () => props.el.y,
	set: (value: number) => ((props.el.y = value), emit('update', props.el))
});
</script>
