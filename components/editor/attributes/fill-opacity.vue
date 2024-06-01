<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Fill Opacity
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-opacity" />
				<editor-attributes-common-animation animatable="yes" />
			</span>
		</div>
		<editor-attributes-input-percentage v-model="value" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{
	el:
		| SVGCircleElement
		| SVGEllipseElement
		| SVGPathElement
		| SVGPolygonElement
		| SVGPolylineElement
		| SVGRectElement
		| SVGTextElement
		| SVGTextPathElement
		| SVGTSpanElement;
}>();
const value = useAttribute(props.el, 'fill-opacity', '1');
</script>
