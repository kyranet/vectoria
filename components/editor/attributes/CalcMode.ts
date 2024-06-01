import { makeAttribute } from '../../../utils/svg/attributes/base/makeAttribute';
import { attributeValueEnum } from '../../../utils/svg/attributes/base/values/enum';

export const CalcMode = makeAttribute({
	name: 'calcMode',
	propertyName: 'calcMode',
	title: 'Calculation Mode',
	types: [attributeValueEnum('discrete', 'linear', 'paced', 'spline')],
	default: 'linear',
	animatable: false,
	appliesTo: ['animateMotion'],
	url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/calcMode'
});
