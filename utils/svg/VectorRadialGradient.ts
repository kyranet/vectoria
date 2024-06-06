import { EditorAttributesHref, EditorAttributesR } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorRadialGradient extends BaseVectorElement<SVGRadialGradientElement, 'radialGradient'> {
	public constructor(element: SVGRadialGradientElement) {
		super({ element, title: 'Radial Gradient', inputs: [EditorAttributesR, EditorAttributesHref] });
	}
}
