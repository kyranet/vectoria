import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueString } from '../../../utils/svg/attributes/base/values/string';
import { ContainerTagNames, GraphicsTagNames } from '../../../utils/svg/attributes/shared/constants';

export const Cursor = makeAttribute({
	name: 'cursor',
	propertyName: 'cursor',
	title: 'Cursor',
	types: [attributeValueString()],
	default: 'auto',
	animatable: true,
	appliesTo: [...ContainerTagNames, ...GraphicsTagNames],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cursor'
});
