import { EditorAttributesHref } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorScript extends BaseVectorElement<SVGScriptElement, 'script'> {
	public constructor(element: SVGScriptElement) {
		super({ element, title: 'Script', inputs: [EditorAttributesHref] });
	}
}
