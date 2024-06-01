<template>
	<span>
		<icon-axis-x class="h-5 w-5" />
		{{ x }}
		<span class="text-base-content-readonly">
			<icon-axis-y class="h-5 w-5" />
			{{ y }}
		</span>
	</span>
</template>

<script setup lang="ts">
import type { HorizontalLineToPart } from '~/utils/svg/path/parts/HorizontalLineToPart';

const props = defineProps<{ el: HorizontalLineToPart }>();
const emit = defineEmits<{
	(event: 'update', value: HorizontalLineToPart): void;
}>();

const x = computed({
	get: () => props.el.x,
	set: (value: number) => ((props.el.x = value), emit('update', props.el))
});
const y = computed(() => props.el.end.y);
</script>
