import { BaseVectorElement } from './base/BaseVectorElement';
import { maybeParseListOfValues } from './shared/maybeParseListOfValues';
import { maybeParseRepeatCount, type RepeatCount } from './shared/maybeParseRepeatCount';

export class VectorAnimate extends BaseVectorElement<SVGAnimateElement> {
	/**
	 * The name of the CSS property or attribute of the target element that is going to be changed during an animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeName
	 */
	public attributeName: string | undefined;

	/**
	 * The simple duration of the animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dur
	 */
	public duration: string | undefined;

	/**
	 * The initial value of the attribute that will be modified during the animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/from
	 */
	public from: string | undefined;

	/**
	 * The final value of the attribute that will be modified during the animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/to
	 */
	public to: string | undefined;

	/**
	 * A relative offset value for an attribute that will be modified during an animaton.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/by
	 */
	public by: string | undefined;

	/**
	 * The number of times the animation will repeat.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/repeatCount
	 */
	public repeatCount: RepeatCount | undefined;

	/**
	 * A semicolon-separated list of values describing the values the target attribute will take over the course of the animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values
	 */
	public values: string[] | undefined;

	public constructor(element: SVGAnimateElement) {
		super(element, 'Animate');
		element.animate;
		this.attributeName = element.getAttribute('attributeName') ?? undefined;
		this.duration = element.getAttribute('dur') ?? undefined;
		this.from = element.getAttribute('from') ?? undefined;
		this.to = element.getAttribute('to') ?? undefined;
		this.by = element.getAttribute('by') ?? undefined;
		this.repeatCount = maybeParseRepeatCount(element.getAttribute('repeatCount'));
		this.values = maybeParseListOfValues(element.getAttribute('values'));
	}
}
