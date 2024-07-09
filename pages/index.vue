<template>
	<div class="flex h-screen w-screen flex-row">
		<!-- @vue-expect-error Vue unwraps the value in a non-functional way -->
		<editor-panel-side :vector-root="editorNode" :draggable-panel-x="draggablePanelX" :success="svgNode ? true : null" />
		<div ref="draggablePanel" class="cursor-ew-resize border-2 border-base-300 hover:border-primary"></div>

		<import-svg v-if="!svgNode" @submit="onSubmit" />
		<div v-show="svgNode" class="flex flex-grow flex-col justify-between overflow-hidden rounded-xl bg-base-200 drop-shadow-xl">
			<div class="m-4 flex-grow overflow-auto">
				<div
					ref="parent"
					class="set-svg-dimensions relative m-0.5 outline outline-2 outline-base-content/80"
					:style="{ '--width': scaledSize.width, '--height': scaledSize.height }"
				>
					<div></div>
					<!-- <editor-svg v-if="svgNode" :el="svgNode" /> -->
				</div>
			</div>
			<ul v-if="svgNode" class="mt-4 flex flex-none flex-row items-center justify-end gap-12 rounded-b-xl bg-base-300 p-4">
				<li class="grow">
					<button class="btn btn-sm" @click="exporter?.open()">
						<icon-download class="h-5 w-5" />
						Export
					</button>
				</li>
				<li class="flex items-center gap-1">
					<span>{{ svgSize.x }}px</span>
					<span>
						<icon-divisor class="h-5 w-5 rotate-90 text-primary" />
					</span>
					<span>{{ svgSize.y }}px</span>
				</li>
				<li class="flex items-center gap-1">
					<span>{{ svgSize.width }}</span>
					<span>
						<icon-close class="h-5 w-5 text-primary" />
					</span>
					<span>{{ svgSize.height }}</span>
				</li>
				<li class="mr-4 flex max-w-96 flex-grow items-center gap-2">
					<button class="btn btn-ghost btn-sm" @click="scale = 1" :disabled="scale === 1">Reset</button>
					<input v-model="scale" type="range" min="0.1" max="5" step="0.1" class="range range-sm" />
					<label class="input input-sm input-ghost flex items-center">
						<input v-model="scale100" type="number" min="0.1" max="500" class="max-w-16 grow" />
						<span class="shrink-0">%</span>
					</label>
				</li>
			</ul>
		</div>
	</div>

	<export-svg v-if="svgNode" ref="exporter" :node="svgNode" />
</template>

<script setup lang="ts">
import { ExportSvg } from '#components';
import { VectorRoot } from '~/utils/svg/VectorRoot';

defineSeo({
	title: 'Vectoria',
	description: 'A complete SVG editor for all your needs'
});

function onSubmit(value: SVGSVGElement) {
	svgNode.value = value;
	editorNode.value = new VectorRoot(value);
	parent.value!.firstChild!.replaceWith(value);
}

const parent = ref<HTMLDivElement | null>(null!);
const svgNode = ref<SVGSVGElement | null>(null);
const editorNode = ref<VectorRoot | null>(null);
const exporter = ref<InstanceType<typeof ExportSvg> | null>(null);

const { ctrl_s } = useMagicKeys({
	passive: false,
	onEventFired(e) {
		if (e.ctrlKey && e.key === 's' && e.type === 'keydown') e.preventDefault();
	}
});

whenever(ctrl_s, () => exporter.value?.open());

const draggablePanel = ref<HTMLDivElement>(null!);
const { x: draggablePanelX } = useDraggable(draggablePanel, { axis: 'x', initialValue: { x: 300, y: 0 } });

const svgSize = computed(() => {
	if (!svgNode.value) return { x: 0, y: 0, width: '0px', height: '0px' };

	const { x, y, width, height } = svgNode.value.viewBox.baseVal;
	return { x, y, width: `${width}px`, height: `${height}px` };
});

const scale = ref(1);
const scale100 = defineModel<number>({ type: Number, set: (value) => (scale.value = value / 100), get: () => Math.round(scale.value * 100) });
const scaledSize = computed(() => {
	if (!svgNode.value) return { width: '0px', height: '0px' };

	const { width, height } = svgNode.value.viewBox.baseVal;
	return { width: `${width * scale.value}px`, height: `${height * scale.value}px` };
});
</script>

<style scoped>
.set-svg-dimensions {
	width: var(--width);
	height: var(--height);
}

.set-svg-dimensions :deep(svg) {
	@apply h-full w-full;
}
</style>
