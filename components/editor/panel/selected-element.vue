<template>
	<template v-if="element">
		<div class="panel-selected-element" :style="{ top: `${draggablePanelY}px` }">
			<div ref="draggablePanel" class="cursor-ns-resize border-2 border-base-300 hover:border-primary"></div>
			<section class="p-4">
				<span class="text-xl font-bold">{{ element.title }}</span>
			</section>
		</div>
	</template>
</template>

<script setup lang="ts">
const element = inject(InjectedSelectedElement)!;

const draggablePanel = ref<HTMLDivElement>(null!);
const windowSize = useWindowSize();
const { y: draggablePanelY } = useDraggable(draggablePanel, { axis: 'y', initialValue: () => ({ x: 0, y: windowSize.height.value - 400 }) });
</script>

<style scoped>
.panel-selected-element {
	min-height: 64px;
	@apply absolute bottom-0 left-0 w-full bg-base-200;
}
</style>
