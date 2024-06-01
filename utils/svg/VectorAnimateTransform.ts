import {
	EditorAttributesAccumulative,
	EditorAttributesAdditive,
	EditorAttributesAttributeName,
	EditorAttributesBegin,
	EditorAttributesFill,
	EditorAttributesHref
} from '#components';
import { BaseAnimationElement } from './base/BaseAnimationElement';

enum Attr {
	Type = 'type',
	From = 'from',
	To = 'to',
	By = 'by'
}

export type AnimateTransformType = 'translate' | 'scale' | 'rotate' | 'skewX' | 'skewY';

export class VectorAnimateTransform extends BaseAnimationElement<SVGAnimateTransformElement, 'animateTransform'> {
	private _type: AnimateTransformType | undefined;
	private _from: string | undefined;
	private _to: string | undefined;
	private _by: string | undefined;

	public constructor(element: SVGAnimateTransformElement) {
		super({
			element,
			title: 'AnimateTransform',
			inputs: [
				EditorAttributesAccumulative,
				EditorAttributesAdditive,
				EditorAttributesAttributeName,
				EditorAttributesBegin,
				EditorAttributesFill,
				EditorAttributesHref
			]
		});
		this._type = (element.getAttribute(Attr.Type) as AnimateTransformType) ?? undefined;
		this._from = element.getAttribute(Attr.From) ?? undefined;
		this._to = element.getAttribute(Attr.To) ?? undefined;
		this._by = element.getAttribute(Attr.By) ?? undefined;
	}

	/**
	 * The type of transform.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
	 */
	public get type(): AnimateTransformType | undefined {
		return this._type;
	}

	public set type(value: AnimateTransformType | null) {
		this._type = this.setOrRemoveAttribute(Attr.Type, value) ?? undefined;
	}

	/**
	 * The initial value of the transform.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/from
	 */
	public get from(): string | undefined {
		return this._from;
	}

	public set from(value: string | null) {
		this._from = this.setOrRemoveAttribute(Attr.From, value) ?? undefined;
	}

	/**
	 * The final value of the transform.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/to
	 */
	public get to(): string | undefined {
		return this._to;
	}

	public set to(value: string | null) {
		this._to = this.setOrRemoveAttribute(Attr.To, value) ?? undefined;
	}

	/**
	 * A relative offset value for the transform.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/by
	 */
	public get by(): string | undefined {
		return this._by;
	}

	public set by(value: string | null) {
		this._by = this.setOrRemoveAttribute(Attr.By, value) ?? undefined;
	}
}
