<template>
	<label class="form-control">
		<editor-attributes-common-header
			name="Amplitude"
			url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/amplitude"
			animatable="yes"
		/>
		<input v-model="value" type="number" min="0" class="input input-bordered" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGFEFuncAElement | SVGFEFuncBElement | SVGFEFuncGElement | SVGFEFuncRElement }>();
const value = useAttribute(props.el, 'amplitude', '1');
</script>
