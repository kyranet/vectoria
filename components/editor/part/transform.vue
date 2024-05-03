<template>
	<template v-if="transform.numberOfItems > 0">
		<div v-for="entry of transform">
			<template v-if="entry.type === entry.SVG_TRANSFORM_MATRIX">
				<div class="part-transform-row">
					<span><icon-scale-x class="h-5 w-5" /> {{ percentage(entry.matrix.a) }}</span>
					<span><icon-scale-y class="h-5 w-5" /> {{ percentage(entry.matrix.d) }}</span>
				</div>
				<div class="part-transform-row">
					<span><icon-skew-x class="h-5 w-5" /> {{ entry.matrix.b }}</span>
					<span><icon-skew-y class="h-5 w-5" /> {{ entry.matrix.c }}</span>
				</div>
				<div class="part-transform-row">
					<span><icon-translate-x class="h-5 w-5" /> {{ entry.matrix.e }}px</span>
					<span><icon-translate-y class="h-5 w-5" /> {{ entry.matrix.f }}px</span>
				</div>
			</template>
			<template v-else-if="entry.type === entry.SVG_TRANSFORM_TRANSLATE">Translate {{ entry }}</template>
			<template v-else-if="entry.type === entry.SVG_TRANSFORM_SCALE">Scale {{ entry }}</template>
			<template v-else-if="entry.type === entry.SVG_TRANSFORM_ROTATE">Rotate {{ entry }}</template>
			<template v-else-if="entry.type === entry.SVG_TRANSFORM_SKEWX">SkewX {{ entry }}</template>
			<template v-else-if="entry.type === entry.SVG_TRANSFORM_SKEWY">SkewY {{ entry }}</template>
			<template v-else>Unknown ({{ entry.matrix.toString() }})</template>
		</div>
	</template>
</template>

<script setup lang="ts">
defineProps<{ transform: SVGTransformList }>();
</script>

<style scoped>
.part-transform-row {
	@apply flex flex-row gap-4;
}

.part-transform-row span {
	@apply max-w-28 grow;
}
</style>
