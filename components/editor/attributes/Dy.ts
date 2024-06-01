import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueArray } from '../../../utils/svg/attributes/base/values/array';
import { attributeValueLength } from '../../../utils/svg/attributes/base/values/length';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const DxFe = makeAttribute({
	name: 'dy',
	propertyName: 'dy',
	title: 'Shift Y',
	types: [attributeValueNumber()],
	default: (tag) => DefaultsDxFe[tag],
	animatable: true,
	appliesTo: ['feDropShadow', 'feOffset'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dy'
});

export const DxText = makeAttribute({
	name: 'dy',
	propertyName: 'dy',
	title: 'Shift Y',
	types: [attributeValueArray(attributeValueLength())],
	default: null,
	animatable: true,
	appliesTo: ['text', 'tspan'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dy'
});

const DefaultsDxFe = {
	feDropShadow: 2,
	feOffset: 0
} as const;
