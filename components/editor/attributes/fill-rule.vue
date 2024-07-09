<template>
	<label class="form-control">
		<editor-attributes-common-header
			name="Fill Rule"
			url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule"
			animatable="discrete"
		/>
		<select v-model="value" class="select select-bordered">
			<option value="nonzero">nonzero</option>
			<option value="evenodd">evenodd</option>
		</select>
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGTextElement | SVGTextPathElement | SVGTSpanElement }>();
const value = useAttribute(props.el, 'fill-rule', 'nonzero');
</script>
