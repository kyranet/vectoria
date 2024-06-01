<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Accumulative
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/accumulate" />
				<editor-attributes-common-animation animatable="no" />
			</span>
		</div>
		<select v-model="value" class="select select-bordered">
			<option value="accumulative">None</option>
			<option value="none">None</option>
		</select>
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGAnimateElement | SVGAnimateMotionElement | SVGAnimateTransformElement }>();
const value = useAttribute(props.el, 'accumulative', 'none');
</script>
