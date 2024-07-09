<template>
	<label class="form-control">
		<editor-attributes-common-header
			name="Hypertext Reference"
			url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href"
			animatable="yes"
		/>
		<input v-model="value" type="text" placeholder="unset" class="input" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{
	el:
		| SVGAElement
		| SVGAnimateElement
		| SVGAnimateMotionElement
		| SVGAnimateTransformElement
		| SVGFEImageElement
		| SVGImageElement
		| SVGLinearGradientElement
		| SVGMPathElement
		| SVGPatternElement
		| SVGRadialGradientElement
		| SVGScriptElement
		| SVGSetElement
		| SVGTextPathElement
		| SVGUseElement;
}>();
const value = useAttribute(props.el, ['href', 'xlink:href']);
</script>
