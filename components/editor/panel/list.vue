<template>
	<div>
		<editor-panel-list-entry v-if="vectorRoot" :el="vectorRoot" />
		<editor-panel-selected-element />
	</div>
</template>

<script setup lang="ts">
import type { VectorRoot } from '~/utils/svg/VectorRoot';

defineProps<{ vectorRoot: VectorRoot | null }>();
provide(InjectedSelectedElement, ref(null));
</script>
