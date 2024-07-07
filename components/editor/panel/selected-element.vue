<template>
	<template v-if="el">
		<div class="panel-selected-element" :style="{ top: `${draggablePanelY}px` }">
			<div ref="draggablePanel" class="cursor-ns-resize border-2 border-base-300 hover:border-primary"></div>
			<section class="p-4">
				<span class="flex items-center text-xl font-bold">
					<component v-if="el.icon" :is="el.icon" />
					{{ el.title }}
				</span>

				<component v-for="input of el.inputs" :key="input.id" :is="input.component" :el="el.element" />
			</section>
		</div>
	</template>
</template>

<script setup lang="ts">
const el = inject(InjectedSelectedElement)!;

const draggablePanel = ref<HTMLDivElement>(null!);
const windowSize = useWindowSize();
const { y: draggablePanelY } = useDraggable(draggablePanel, { axis: 'y', initialValue: () => ({ x: 0, y: windowSize.height.value - 400 }) });
</script>

<style scoped>
.panel-selected-element {
	min-height: 64px;
	@apply absolute bottom-0 left-0 w-full bg-base-200;
}

.panel-selected-element :deep(.input) {
	@apply input-sm input-bordered font-mono;
}

.panel-selected-element :deep(.select) {
	@apply select-bordered select-sm font-mono;
}
</style>
