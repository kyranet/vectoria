<template>
	<span>
		<icon-ellipse-x-radius class="h-5 w-5" />
		{{ rx }}
		<icon-ellipse-y-radius class="h-5 w-5" />
		{{ ry }}
	</span>
	<span>
		<icon-angle class="h-5 w-5" />
		{{ angle }}º
	</span>
	<div class="join">
		<button class="btn join-item">
			<icon-arc-large v-if="largeArcFlag" class="h-5 w-5" />
			<icon-arc-short v-else class="h-5 w-5" />
		</button>
		<button class="btn join-item">
			<icon-circle-anticlockwise v-if="sweepFlag" class="h-5 w-5" />
			<icon-circle-clockwise v-else class="h-5 w-5" />
		</button>
	</div>
	<span>
		<icon-axis-x class="h-5 w-5" />
		{{ x }}
		<icon-axis-y class="h-5 w-5" />
		{{ y }}
	</span>
</template>

<script setup lang="ts">
import type { ArcCurvePart } from '~/utils/svg/path/parts/ArcCurvePart';

const props = defineProps<{ el: ArcCurvePart }>();
const emit = defineEmits<{
	(event: 'update', value: ArcCurvePart): void;
}>();

const rx = computed({
	get: () => props.el.rx,
	set: (value: number) => ((props.el.rx = value), emit('update', props.el))
});
const ry = computed({
	get: () => props.el.ry,
	set: (value: number) => ((props.el.ry = value), emit('update', props.el))
});
const angle = computed({
	get: () => props.el.angle,
	set: (value: number) => ((props.el.angle = value), emit('update', props.el))
});
const largeArcFlag = computed({
	get: () => props.el.largeArcFlag,
	set: (value: boolean) => ((props.el.largeArcFlag = value), emit('update', props.el))
});
const sweepFlag = computed({
	get: () => props.el.sweepFlag,
	set: (value: boolean) => ((props.el.sweepFlag = value), emit('update', props.el))
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
