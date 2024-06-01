<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Attribute Name
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeName" />
				<editor-attributes-common-animation animatable="no" />
			</span>
		</div>
		<input v-model="value" type="number" min="0" class="input input-bordered" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGAnimateElement | SVGAnimateTransformElement | SVGSetElement }>();
const value = useAttribute(props.el, 'attributeName');
</script>
