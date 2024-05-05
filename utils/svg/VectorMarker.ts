import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorMarker extends BaseVectorElement<SVGMarkerElement, 'marker'> {
	public constructor(element: SVGMarkerElement) {
		super({ element, title: 'Marker' });
	}
}
