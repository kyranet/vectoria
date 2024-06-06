<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Hypertext Reference
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href" />
				<editor-attributes-common-animation animatable="yes" />
			</span>
		</div>
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
