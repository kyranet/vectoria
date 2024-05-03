<template>
	<div>
		<editor-element-svg v-if="vectorRoot" :el="vectorRoot" />
		<editor-panel-selected-element v-if="selected" :element="selected" />
	</div>
</template>

<script setup lang="ts">
import type { VectorRoot } from '~/utils/svg/VectorRoot';
import type { BaseVectorElement } from '~/utils/svg/base/BaseVectorElement';

defineProps<{ vectorRoot: VectorRoot | null }>();

const selected = ref<BaseVectorElement<SVGElement> | null>(null);
</script>
