import { makeAttribute } from './base/makeAttribute';
import { attributeValueNumber } from './base/values/number';

export const AmplitudeAttribute = makeAttribute({
	name: 'amplitude',
	propertyName: 'amplitude',
	title: 'Amplitude',
	types: [attributeValueNumber()],
	default: 1,
	appliesTo: ['feFuncA', 'feFuncB', 'feFuncG', 'feFuncR'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/amplitude'
});
