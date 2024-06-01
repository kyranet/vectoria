<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Fill Rule
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule" />
				<editor-attributes-common-animation animatable="discrete" />
			</span>
		</div>
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
