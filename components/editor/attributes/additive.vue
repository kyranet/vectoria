<template>
	<label class="form-control">
		<editor-attributes-common-header name="Additive" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/additive" animatable="no" />
		<select v-model="value" class="select select-bordered">
			<option value="replace">Replace</option>
			<option value="sum">Sum</option>
		</select>
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGAnimateElement | SVGAnimateMotionElement | SVGAnimateTransformElement }>();
const value = useAttribute(props.el, 'additive', 'replace');
</script>
