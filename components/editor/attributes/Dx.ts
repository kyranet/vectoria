import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueArray } from '../../../utils/svg/attributes/base/values/array';
import { attributeValueLength } from '../../../utils/svg/attributes/base/values/length';
import { attributeValueNumber } from '../../../utils/svg/attributes/base/values/number';

export const DxFe = makeAttribute({
	name: 'dx',
	propertyName: 'dx',
	title: 'Shift X',
	types: [attributeValueNumber()],
	default: (tag) => DefaultsDxFe[tag],
	animatable: true,
	appliesTo: ['feDropShadow', 'feOffset'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dx'
});

export const DxText = makeAttribute({
	name: 'dx',
	propertyName: 'dx',
	title: 'Shift X',
	types: [attributeValueArray(attributeValueLength())],
	default: null,
	animatable: true,
	appliesTo: ['text', 'tspan'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dx'
});

const DefaultsDxFe = {
	feDropShadow: 2,
	feOffset: 0
} as const;
