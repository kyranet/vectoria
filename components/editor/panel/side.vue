<template>
	<div class="editor-panel" :style="{ width: `${draggablePanelX}px` }">
		<div role="tablist" class="tabs-boxed tabs">
			<a role="tab" class="tab" :class="{ 'tab-active': tabEditor }" @click="tabEditor = true">Editor</a>
			<a role="tab" class="tab" :class="{ 'tab-active': !tabEditor }" @click="tabEditor = false">Code</a>
		</div>
		<div class="grow">
			<editor-panel-list v-show="tabEditor" :vector-root="vectorRoot" />
			<editor-panel-code v-show="!tabEditor" :success="success" />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { VectorRoot } from '~/utils/svg/VectorRoot';

defineProps<{ vectorRoot: VectorRoot | null; draggablePanelX: number; success: boolean | null }>();

const tabEditor = ref(true);
</script>

<style scoped>
.editor-panel {
	@apply flex h-full max-h-full flex-col gap-4 overflow-auto bg-base-200 p-4 drop-shadow-xl;
	max-width: calc(100vw - 50rem);
}
</style>
