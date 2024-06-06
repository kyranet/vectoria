<template>
	<div class="flex h-screen w-screen flex-row">
		<!-- @vue-expect-error Vue unwraps the value in a non-functional way -->
		<editor-panel-side :vector-root="editorNode" :draggable-panel-x="draggablePanelX" :success="svgNode ? true : errorNode ? false : null" />
		<div ref="draggablePanel" class="cursor-ew-resize border-2 border-base-300 hover:border-primary"></div>

		<div v-show="svgNode || errorNode" class="flex flex-grow flex-col justify-between overflow-hidden rounded-xl bg-base-200 drop-shadow-xl">
			<div class="m-4 flex-grow overflow-auto">
				<div
					ref="parent"
					class="set-svg-dimensions relative m-0.5 outline outline-2"
					:class="{ 'outline-base-content/80': svgNode, 'outline-error': errorNode }"
					:style="{ '--width': scaledSize.width, '--height': scaledSize.height }"
				>
					<div></div>
					<!-- <editor-svg v-if="svgNode" :el="svgNode" /> -->
				</div>
			</div>
			<ul v-if="svgNode" class="mt-4 flex flex-none flex-row justify-end gap-12 rounded-b-xl bg-base-300 p-4">
				<li class="flex flex-col">
					<span>
						<Icon name="ph:arrow-line-left-duotone" class="mr-2 h-5 w-5 text-primary" />
						<strong>X:</strong>
						{{ svgSize.x }}px
					</span>
					<span>
						<Icon name="ph:arrow-line-up-duotone" class="mr-2 h-5 w-5 text-primary" />
						<strong>Y:</strong>
						{{ svgSize.y }}px
					</span>
				</li>
				<li class="flex flex-col">
					<span>
						<Icon name="ph:arrows-horizontal-duotone" class="mr-2 h-5 w-5 text-primary" />
						<strong>Width:</strong>
						{{ svgSize.width }}
					</span>
					<span>
						<Icon name="ph:arrows-vertical-duotone" class="mr-2 h-5 w-5 text-primary" />
						<strong>Height:</strong>
						{{ svgSize.height }}
					</span>
				</li>
				<li class="flex max-w-96 flex-grow items-center gap-2">
					<button class="btn btn-ghost" @click="scale = 1" :disabled="scale === 1">Reset</button>
					<input v-model="scale" type="range" min="0.1" max="5" step="0.1" class="range" />
					<label class="input input-ghost flex items-center">
						<input v-model="scale100" type="number" min="0.1" max="500" class="max-w-16 grow" />
						<span class="shrink-0">%</span>
					</label>
				</li>
			</ul>
		</div>
	</div>

	<div v-show="dropping" class="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-base-300/60 backdrop-blur-sm">
		<div class="rounded-box bg-primary p-4 text-primary-content">
			<div class="rounded-box p-12 outline outline-8 outline-white/20">
				<span class="text-4xl font-bold">Drop to load</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { VectorRoot } from '~/utils/svg/VectorRoot';

defineSeo({
	title: 'Vectoria',
	description: 'A complete SVG editor for all your needs',
});

const input = ref('');
provide(InjectedCodeInput, input);

const parent = ref<HTMLDivElement | null>(null!);
const svgNode = ref<SVGSVGElement | null>(null);
const errorNode = ref<HTMLElement | null>(null);
const editorNode = ref<VectorRoot | null>(null);

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

const dropping = ref(false);
if (process.client) {
	const parser = new DOMParser();
	watch(input, (value) => {
		const result = parser.parseFromString(value, 'image/svg+xml');
		const [child] = result.children;

		if (child.tagName === 'svg') {
			svgNode.value = child as SVGSVGElement;
			errorNode.value = null;
			editorNode.value = new VectorRoot(svgNode.value);
		} else {
			svgNode.value = null;
			errorNode.value = child as HTMLElement;
			editorNode.value = null;
		}

		parent.value!.firstChild!.replaceWith(child);
	});

	const { isOverDropZone } = useDropZone(document.body, { onDrop });
	syncRef(dropping, isOverDropZone);

	async function onDrop(files: File[] | null) {
		if (!files?.length) return;

		const [file] = files;
		if (file.type !== 'image/svg+xml') return;

		input.value = (await file.text()).trim();
	}
}
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
