import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';
import { ContainerTagNames, GraphicsTagNames } from '../../../utils/svg/attributes/shared/constants';

export const Filter = makeAttribute({
	name: 'filter',
	propertyName: 'filter',
	title: 'Filter',
	types: [attributeValueString()],
	default: '',
	animatable: false,
	appliesTo: [...ContainerTagNames, ...GraphicsTagNames],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filter'
});
