import {
	EditorAttributesAccumulative,
	EditorAttributesAdditive,
	EditorAttributesAttributeName,
	EditorAttributesBegin,
	EditorAttributesFill,
	EditorAttributesHref
} from '#components';
import { BaseAnimationElement } from './base/BaseAnimationElement';
import { maybeParseListOfValues } from './shared/maybeParseListOfValues';

enum Attr {
	AttributeName = 'attributeName',
	From = 'from',
	To = 'to',
	By = 'by',
	Values = 'values'
}

export class VectorAnimate extends BaseAnimationElement<SVGAnimateElement, 'animate'> {
	private _attributeName: string | undefined;
	private _from: string | undefined;
	private _to: string | undefined;
	private _by: string | undefined;
	private _values: string[] | undefined;

	public constructor(element: SVGAnimateElement) {
		super({
			element,
			title: 'Animate',
			inputs: [
				EditorAttributesAccumulative,
				EditorAttributesAdditive,
				EditorAttributesAttributeName,
				EditorAttributesBegin,
				EditorAttributesFill,
				EditorAttributesHref
			]
		});
		this._attributeName = element.getAttribute(Attr.AttributeName) ?? undefined;
		this._from = element.getAttribute(Attr.From) ?? undefined;
		this._to = element.getAttribute(Attr.To) ?? undefined;
		this._by = element.getAttribute(Attr.By) ?? undefined;
		this._values = maybeParseListOfValues(element.getAttribute(Attr.Values));
	}

	/**
	 * The name of the CSS property or attribute of the target element that is going to be changed during an animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeName
	 */
	public get attributeName(): string | undefined {
		return this._attributeName;
	}

	public set attributeName(value: string | null) {
		this._attributeName = this.setOrRemoveAttribute(Attr.AttributeName, value) ?? undefined;
	}

	/**
	 * The initial value of the attribute that will be modified during the animation.
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
	 * The final value of the attribute that will be modified during the animation.
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
	 * A relative offset value for an attribute that will be modified during an animaton.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/by
	 */
	public get by(): string | undefined {
		return this._by;
	}

	public set by(value: string | null) {
		this._by = this.setOrRemoveAttribute(Attr.By, value) ?? undefined;
	}

	/**
	 * A semicolon-separated list of values describing the values the target attribute will take over the course of the animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values
	 */
	public get values(): readonly string[] | undefined {
		return this._values;
	}

	public set values(value: string[] | null) {
		this._values = this.setOrRemoveAttribute(Attr.Values, value) ?? undefined;
	}
}
