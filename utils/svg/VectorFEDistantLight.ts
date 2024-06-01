import { EditorAttributesAzimuth } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEDistantLight extends BaseVectorElement<SVGFEDistantLightElement, 'feDistantLight'> {
	public constructor(element: SVGFEDistantLightElement) {
		super({ element, title: 'FE Distant Light', inputs: [EditorAttributesAzimuth] });
	}
}
