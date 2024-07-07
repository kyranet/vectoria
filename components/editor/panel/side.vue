<template>
	<div class="editor-panel relative" :style="{ width: `${draggablePanelX}px` }">
		<div class="flex items-center gap-2">
			<icon-logo class="h-10 w-10 translate-y-0.5" />
			<span class="text-xl font-semibold">Vectoria</span>
		</div>
		<div class="grow">
			<editor-panel-list :vector-root="vectorRoot" />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { VectorRoot } from '~/utils/svg/VectorRoot';

defineProps<{ vectorRoot: VectorRoot | null; draggablePanelX: number; success: boolean | null }>();
</script>

<style scoped>
.editor-panel {
	@apply flex h-full max-h-full flex-col gap-4 overflow-auto bg-base-200 p-4 drop-shadow-xl;
	max-width: calc(100vw - 50rem);
}
</style>
