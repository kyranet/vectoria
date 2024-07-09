<template>
	<label class="form-control">
		<editor-attributes-common-header
			name="Accumulative"
			url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/accumulate"
			animatable="no"
		/>
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
