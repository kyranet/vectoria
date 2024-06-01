<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Additive
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/additive" />
				<editor-attributes-common-animation animatable="no" />
			</span>
		</div>
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
