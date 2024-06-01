<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Amplitude
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/amplitude" />
				<editor-attributes-common-animation animatable="yes" />
			</span>
		</div>
		<input v-model="value" type="number" min="0" class="input input-bordered" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGFEFuncAElement | SVGFEFuncBElement | SVGFEFuncGElement | SVGFEFuncRElement }>();
const value = useAttribute(props.el, 'amplitude', '1');
</script>
