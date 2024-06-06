<template>
	<label class="form-control">
		<div class="label">
			<span class="label-text">
				Width
				<editor-attributes-common-info url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width" />
				<editor-attributes-common-animation animatable="yes" />
			</span>
		</div>
		<input v-model="value" type="text" placeholder="unset" class="input" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: LengthPercentageElement | LengthPercentageAutoElement | LengthElement }>();

const supportsAuto = ['foreignObject', 'image', 'rect', 'svg', 'use'].includes(props.el.tagName);
const supportsPercentage = props.el.tagName !== 'pattern';

const value = useAttribute(props.el, 'width', getDefaultValue(props.el.tagName));

type LengthPercentageElement =
	| SVGFEBlendElement
	| SVGFEColorMatrixElement
	| SVGFEComponentTransferElement
	| SVGFECompositeElement
	| SVGFEConvolveMatrixElement
	| SVGFEDiffuseLightingElement
	| SVGFEDisplacementMapElement
	| SVGFEDropShadowElement
	| SVGFEFloodElement
	| SVGFEGaussianBlurElement
	| SVGFEImageElement
	| SVGFEMergeElement
	| SVGFEMorphologyElement
	| SVGFEOffsetElement
	| SVGFESpecularLightingElement
	| SVGFETileElement
	| SVGFETurbulenceElement
	| SVGFilterElement
	| SVGMaskElement;
type LengthPercentageAutoElement = SVGForeignObjectElement | SVGImageElement | SVGRectElement | SVGSVGElement | SVGUseElement;
type LengthElement = SVGPatternElement;

function getDefaultValue(tag: string) {
	if (supportsAuto) return 'auto';
	if (supportsPercentage) {
		return ['filter', 'mask'].includes(tag) ? '120%' : '100%';
	}

	return '0';
}
</script>
