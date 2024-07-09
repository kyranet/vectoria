<template>
	<label class="form-control">
		<editor-attributes-common-header name="Radius" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/r" animatable="yes" />
		<editor-attributes-input-percentage v-model="value" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGCircleElement | SVGRadialGradientElement }>();

const value = useAttribute(props.el, 'r', props.el.tagName === 'circle' ? '0%' : '50%');
</script>
