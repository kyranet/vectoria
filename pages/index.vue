<template>
	<div class="flex h-screen w-screen flex-row gap-4">
		<div class="rounded-r-xl bg-base-200 p-4 drop-shadow-xl">
			<textarea
				v-model="input"
				class="editor-textarea"
				:class="{ 'textarea-success': svgNode, 'textarea-error': errorNode }"
				autofocus="true"
				spellcheck="false"
				placeholder="SVG code"
			></textarea>
		</div>
		<div v-show="svgNode || errorNode" class="flex flex-grow flex-col justify-between overflow-hidden rounded-xl bg-base-200 drop-shadow-xl">
			<div class="m-4 flex-grow overflow-auto">
				<div
					ref="parent"
					class="relative border-2"
					:class="{ 'border-base-content': svgNode, 'border-error': errorNode }"
					:style="{ width: scaledSize.width, height: scaledSize.height }"
				>
					<div></div>
					<editor-svg v-if="svgNode" :el="svgNode" />
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
					<label class="input input-ghost flex items-center gap-2">
						<input v-model="scale100" type="number" min="0.1" max="500" class="max-w-16 grow" />
						%
					</label>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
const input = ref('');
const parent = ref<HTMLDivElement | null>(null!);
const svgNode = ref<SVGSVGElement | null>(null);
const errorNode = ref<HTMLElement | null>(null);

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

if (process.client) {
	const parser = new DOMParser();
	watch(input, (value) => {
		const result = parser.parseFromString(value, 'image/svg+xml');
		const [child] = result.children;

		if (child.tagName === 'svg') {
			svgNode.value = child as SVGSVGElement;
			errorNode.value = null;
		} else {
			svgNode.value = null;
			errorNode.value = child as HTMLElement;
		}

		parent.value!.firstChild!.replaceWith(child);
	});
}
</script>

<style scoped>
.editor-textarea {
	@apply textarea resize-x font-mono;
	max-width: calc(100vw - 50rem);
	height: calc(100vh - 2rem);
}
</style>
