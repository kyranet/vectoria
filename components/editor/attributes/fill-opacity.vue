<template>
	<label class="form-control">
		<editor-attributes-common-header
			name="Fill Opacity"
			url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-opacity"
			animatable="yes"
		/>
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
