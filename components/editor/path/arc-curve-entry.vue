<template>
	<editor-path-part-base :el="el" :index="index" @update="$emit('update', el)">
		<div class="input input-bordered grid grid-cols-2 gap-2">
			<label class="flex gap-2">
				<span><icon-ellipse-x-radius class="h-5 w-5" /></span>
				<input v-model="rx" class="min-w-0" type="number" min="0" />
			</label>
			<label class="flex gap-2">
				<span><icon-ellipse-y-radius class="h-5 w-5" /></span>
				<input v-model="ry" class="min-w-0" type="number" min="0" />
			</label>
		</div>
		<div class="join w-full">
			<label class="input join-item flex grow items-center">
				<input v-model="angle" class="grow text-right" type="number" min="0" max="360" />
				<span>deg</span>
			</label>
			<button class="btn btn-ghost join-item btn-sm border-base-content/20 bg-base-100" @click="largeArcFlag = !largeArcFlag">
				<icon-arc-large v-if="largeArcFlag" class="h-5 w-5" />
				<icon-arc-short v-else class="h-5 w-5" />
			</button>
			<button class="btn btn-ghost join-item btn-sm border-base-content/20 bg-base-100" @click="sweepFlag = !sweepFlag">
				<icon-circle-anticlockwise v-if="sweepFlag" class="h-5 w-5" />
				<icon-circle-clockwise v-else class="h-5 w-5" />
			</button>
		</div>
		<div class="input grid grid-cols-2 gap-2">
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
import type { ArcCurvePart } from '~/utils/svg/path/parts/ArcCurvePart';

const props = defineProps<{ el: ArcCurvePart; index: number }>();
const emit = defineEmits<{
	(event: 'update', value: ArcCurvePart): void;
}>();

const rx = usePathPartProperty(props.el, 'rx', emit);
const ry = usePathPartProperty(props.el, 'ry', emit);
const angle = usePathPartProperty(props.el, 'angle', emit);
const largeArcFlag = usePathPartProperty(props.el, 'largeArcFlag', emit);
const sweepFlag = usePathPartProperty(props.el, 'sweepFlag', emit);
const x = usePathPartProperty(props.el, 'x', emit);
const y = usePathPartProperty(props.el, 'y', emit);
</script>
