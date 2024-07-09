<template>
	<label class="form-control">
		<editor-attributes-common-header name="Begin" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/begin" animatable="no" />
		<input v-model="value" type="text" placeholder="unset" class="input input-bordered" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGAnimateElement | SVGAnimateMotionElement | SVGAnimateTransformElement | SVGSetElement }>();
// TODO: Refine types
const value = useAttribute(props.el, 'begin', '0s');

// types: [attributeValueArray(attributeValueBegin())],
// default: [{ type: 'clock-value', value: 0 }],
</script>
