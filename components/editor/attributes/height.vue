<template>
	<label class="form-control">
		<editor-attributes-common-header name="Height" url="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height" animatable="yes" />
		<input v-model="value" type="text" placeholder="unset" class="input" />
	</label>
</template>

<script setup lang="ts">
const props = defineProps<{ el: LengthPercentageElement | LengthPercentageAutoElement | LengthElement }>();

const supportsAuto = ['foreignObject', 'image', 'rect', 'svg', 'use'].includes(props.el.tagName);
const supportsPercentage = props.el.tagName !== 'pattern';

const value = useAttribute(props.el, 'height', getDefaultValue(props.el.tagName));

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

<!-- import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';
import { attributeValueLength } from '../../../utils/svg/attributes/base/values/length';
import { attributeValueLengthPercentage } from '../../../utils/svg/attributes/base/values/lengthPercentage';

const Base = {
	name: 'height',
	propertyName: 'height',
	title: 'Height',
	animatable: true,
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height'
} as const;

export const Height = makeAttribute({
	...Base,
	types: [attributeValueLengthPercentage()],
	default: (tag) => ({ value: tag === 'filter' || tag === 'mask' ? 120 : 100, unit: '%' }),
	appliesTo: [
		'feBlend',
		'feColorMatrix',
		'feComponentTransfer',
		'feComposite',
		'feConvolveMatrix',
		'feDiffuseLighting',
		'feDisplacementMap',
		'feDropShadow',
		'feFlood',
		'feGaussianBlur',
		'feImage',
		'feMerge',
		'feMorphology',
		'feOffset',
		'feSpecularLighting',
		'feTile',
		'feTurbulence',
		'filter',
		'mask'
	]
});

export const HeightLength = makeAttribute({
	...Base,
	types: [attributeValueLength()],
	default: { value: 0, unit: null },
	appliesTo: ['pattern']
});

export const HeightAuto = makeAttribute({
	...Base,
	types: [attributeValueEnum('auto'), attributeValueLengthPercentage()],
	default: 'auto',
	appliesTo: ['foreignObject', 'image', 'rect', 'svg', 'use']
}); -->
