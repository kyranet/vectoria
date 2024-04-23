<template>
	<div class="flex h-screen flex-row gap-4">
		<div class="h-full rounded-r-xl bg-base-200 p-4 drop-shadow-xl">
			<textarea
				v-model="input"
				class="editor-textarea"
				:class="{ 'textarea-success': svgNode, 'textarea-error': errorNode }"
				autofocus="true"
				spellcheck="false"
				placeholder="SVG code"
			></textarea>
		</div>
		<div v-show="svgNode || errorNode" class="h-fit w-fit rounded-xl bg-base-200 p-4 drop-shadow-xl">
			<div
				ref="parent"
				class="relative border-2"
				:class="{ 'border-success': svgNode, 'border-error': errorNode }"
				:style="{ width: svgSize.width, height: svgSize.height }"
			>
				<div></div>
				<editor-svg />
			</div>
			<ul v-if="svgNode" class="mt-4 grid grid-cols-2 gap-2">
				<li>
					<Icon name="ph:arrow-line-left-duotone" class="mr-2 h-5 w-5 text-primary" />
					<strong>X:</strong>
					{{ svgSize.x }}px
				</li>
				<li>
					<Icon name="ph:arrow-line-up-duotone" class="mr-2 h-5 w-5 text-primary" />
					<strong>Y:</strong>
					{{ svgSize.y }}px
				</li>
				<li>
					<Icon name="ph:arrows-horizontal-duotone" class="mr-2 h-5 w-5 text-primary" />
					<strong>Width:</strong>
					{{ svgSize.width }}
				</li>
				<li>
					<Icon name="ph:arrows-vertical-duotone" class="mr-2 h-5 w-5 text-primary" />
					<strong>Height:</strong>
					{{ svgSize.height }}
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

provide(ProviderSVGKey, svgNode);

if (process.client) {
	const parser = new DOMParser();
	watch(input, (value) => {
		const result = parser.parseFromString(value, 'image/svg+xml');
		const [child] = result.children;

		if (child.tagName === 'svg') {
			// const editor = h(
			// 	'svg',
			// 	{
			// 		style: {
			// 			position: 'absolute',
			// 			top: '0',
			// 			left: '0'
			// 		},
			// 		width: node.width.baseVal.valueAsString,
			// 		height: node.height.baseVal.valueAsString,
			// 		viewBox: `${node.viewBox.baseVal.x} ${node.viewBox.baseVal.y} ${node.width.baseVal.value} ${node.height.baseVal.value}`
			// 	}
			// );

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
	height: calc(100vh - 2rem);
}
</style>
