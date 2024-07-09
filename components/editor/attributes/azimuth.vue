<template>
	<label class="form-control">
		<editor-attributes-common-header name="Azimuth" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/azimuth" animatable="yes" />
		<input v-model="value" type="number" class="input input-bordered" min="0" step="0.01" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGFEDistantLightElement }>();
const value = useAttribute(props.el, 'azimuth', '0');
</script>
