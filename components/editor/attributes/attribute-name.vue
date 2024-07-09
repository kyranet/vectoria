<template>
	<label class="form-control">
		<editor-attributes-common-header
			name="Attribute Name"
			url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeName"
			animatable="no"
		/>
		<input v-model="value" type="number" min="0" class="input input-bordered" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGAnimateElement | SVGAnimateTransformElement | SVGSetElement }>();
const value = useAttribute(props.el, 'attributeName');
</script>
