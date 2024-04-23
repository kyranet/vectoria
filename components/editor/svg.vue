<template>
	<svg v-if="element" :viewBox="viewBox" :x="x" :y="y" :width="width" :height="height" class="absolute left-0 top-0">
		<editor-svg-any v-for="child of element.children" :el="child as SVGElement" />
	</svg>
</template>

<script setup lang="ts">
const element = inject(ProviderSVGKey)!;

const viewBox = computed(() => element.value?.getAttribute('viewBox') || undefined);
const x = computed(() => element.value?.getAttribute('x') || undefined);
const y = computed(() => element.value?.getAttribute('y') || undefined);
const width = computed(() => element.value?.getAttribute('width') || undefined);
const height = computed(() => element.value?.getAttribute('height') || undefined);
</script>
