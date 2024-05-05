import { maybeParseListOfValues } from '../shared/maybeParseListOfValues';
import { maybeParseRepeatCount, type RepeatCount } from '../shared/maybeParseRepeatCount';
import { BaseVectorElement, type VectorElementOptions } from './BaseVectorElement';

enum Attr {
	Begin = 'begin',
	Duration = 'dur',
	End = 'end',
	Min = 'min',
	Max = 'max',
	Restart = 'restart',
	RepeatCount = 'repeatCount',
	RepeatDuration = 'repeatDur',
	Fill = 'fill'
}

export type AnimationDuration = string | 'media' | 'indefinite';
export type AnimationRepeatDuration = string | 'indefinite';
export type AnimationRestart = 'always' | 'whenNotActive' | 'never';
export type AnimationFill = 'freeze' | 'remove';

export abstract class BaseAnimationElement<Element extends SVGAnimationElement, TagName extends string> extends BaseVectorElement<Element, TagName> {
	private _begin: string[];
	private _end: string[] | undefined;
	private _duration: AnimationDuration;
	private _min: string;
	private _max: string | undefined;
	private _restart: AnimationRestart;
	private _repeatCount: RepeatCount | undefined;
	private _repeatDuration: AnimationRepeatDuration | undefined;
	private _fill: AnimationFill;

	public constructor(options: VectorElementOptions<Element>) {
		super(options);
		this._begin = maybeParseListOfValues(this.element.getAttribute(Attr.Begin)) ?? ['0s'];
		this._end = maybeParseListOfValues(this.element.getAttribute(Attr.End));
		this._duration = this.element.getAttribute(Attr.Duration) ?? 'indefinite';
		this._min = this.element.getAttribute(Attr.Min) ?? '0';
		this._max = this.element.getAttribute(Attr.Max) ?? undefined;
		this._restart = (this.element.getAttribute(Attr.Restart) ?? 'always') as AnimationRestart;
		this._repeatCount = maybeParseRepeatCount(this.element.getAttribute(Attr.RepeatCount));
		this._repeatDuration = this.element.getAttribute(Attr.RepeatDuration) ?? undefined;
		this._fill = (this.element.getAttribute(Attr.Fill) as AnimationFill) ?? 'remove';
	}

	/**
	 * The beginning of the animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/begin
	 */
	public get begin(): readonly string[] {
		return this._begin;
	}

	public set begin(value: string[] | null) {
		this._begin = this.setOrRemoveAttribute(Attr.Begin, value) ?? ['0s'];
	}

	/**
	 * The end of the animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/end
	 */
	public get end(): readonly string[] | undefined {
		return this._end;
	}

	public set end(value: string[] | null) {
		this._end = this.setOrRemoveAttribute(Attr.End, value) ?? undefined;
	}

	/**
	 * The duration of the animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dur
	 */
	public get duration(): string {
		return this._duration;
	}

	public set duration(value: string | null) {
		this._duration = this.setOrRemoveAttribute(Attr.Duration, value) ?? 'indefinite';
	}

	/**
	 * The minimum value of the active duration.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/min
	 */
	public get min(): string {
		return this._min;
	}

	public set min(value: string | null) {
		this._min = this.setOrRemoveAttribute(Attr.Min, value) ?? '0';
	}

	/**
	 * The maximum value of the active duration.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/max
	 */
	public get max(): string | undefined {
		return this._max;
	}

	public set max(value: string | null) {
		this._max = this.setOrRemoveAttribute(Attr.Max, value) ?? undefined;
	}

	/**
	 * The restart behavior of the animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/restart
	 */
	public get restart(): AnimationRestart {
		return this._restart;
	}

	public set restart(value: AnimationRestart | null) {
		this._restart = this.setOrRemoveAttribute(Attr.Restart, value) ?? 'always';
	}

	/**
	 * The number of times the animation should repeat.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/repeatCount
	 */
	public get repeatCount(): RepeatCount | undefined {
		return this._repeatCount;
	}

	public set repeatCount(value: RepeatCount | null) {
		this._repeatCount = maybeParseRepeatCount(this.setOrRemoveAttribute(Attr.RepeatCount, value === null ? null : value.toString()));
	}

	/**
	 * The duration for the animation to repeat.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/repeatDur
	 */
	public get repeatDuration(): AnimationRepeatDuration | undefined {
		return this._repeatDuration;
	}

	public set repeatDuration(value: AnimationRepeatDuration | null) {
		this._repeatDuration = this.setOrRemoveAttribute(Attr.RepeatDuration, value) ?? undefined;
	}

	/**
	 * The fill behavior of the animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
	 */
	public get fill(): AnimationFill {
		return this._fill;
	}

	public set fill(value: AnimationFill | null) {
		this._fill = this.setOrRemoveAttribute(Attr.Fill, value) ?? 'remove';
	}
}
