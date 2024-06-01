import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';
import { RenderableTagNames } from '../../../utils/svg/attributes/shared/constants';

export const ClipRule = makeAttribute({
	name: 'clip-rule',
	propertyName: 'clipRule',
	title: 'Clip Rule',
	types: [attributeValueEnum('nonzero', 'evenodd')],
	default: 'nonzero',
	animatable: true,
	appliesTo: RenderableTagNames,
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule'
});
