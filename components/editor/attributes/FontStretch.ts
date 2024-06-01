import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';
import { attributeValuePercentage } from '../../../utils/svg/attributes/base/values/percentage';
import { CssGlobalValues } from '../../../utils/svg/attributes/shared/constants';

export const FontStretch = makeAttribute({
	name: 'font-stretch',
	propertyName: 'fontStretch',
	title: 'Font Stretch',
	types: [
		attributeValuePercentage(),
		attributeValueEnum(
			'normal',
			'semi-condensed',
			'condensed',
			'extra-condensed',
			'ultra-condensed',
			'semi-expanded',
			'expanded',
			'extra-expanded',
			'ultra-expanded',
			...CssGlobalValues
		)
	],
	default: 'normal',
	animatable: true,
	appliesTo: ['text', 'textPath', 'tspan'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch'
});
