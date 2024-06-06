<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Height
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height" />
				<editor-attributes-common-animation animatable="yes" />
			</span>
		</div>
		<editor-attributes-input-percentage v-model="value" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: SVGCircleElement | SVGRadialGradientElement }>();

const value = useAttribute(props.el, 'r', props.el.tagName === 'circle' ? '0%' : '50%');
</script>
