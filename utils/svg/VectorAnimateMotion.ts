import { BaseAnimationElement } from './base/BaseAnimationElement';
import { maybeParseAnimationMotionRotate, type AnimateMotionRotate } from './shared/maybeParseAnimateMotionRotate';
import { maybeParseListOfValues } from './shared/maybeParseListOfValues';

enum Attr {
	KeyPoints = 'keyPoints',
	Path = 'path',
	Rotate = 'rotate'
}

export class VectorAnimateMotion extends BaseAnimationElement<SVGAnimateMotionElement, 'animateMotion'> {
	private _keyPoints: string[] | undefined;
	private _path: string | undefined;
	private _rotate: AnimateMotionRotate;

	public constructor(element: SVGAnimateMotionElement) {
		super({ element, title: 'AnimateMotion' });
		this._keyPoints = maybeParseListOfValues(element.getAttribute(Attr.KeyPoints));
		this._path = element.getAttribute(Attr.Path) ?? undefined;
		this._rotate = maybeParseAnimationMotionRotate(element.getAttribute(Attr.Rotate)) ?? 0;
	}

	/**
	 * A semicolon-separated list of values describing the values the target attribute will take over the course of the animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/keyPoints
	 */
	public get keyPoints(): string[] | undefined {
		return this._keyPoints;
	}

	public set keyPoints(value: string[] | null) {
		this._keyPoints = this.setOrRemoveAttribute(Attr.KeyPoints, value) ?? undefined;
	}

	/**
	 * A path for the object to follow.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/path
	 */
	public get path(): string | undefined {
		return this._path;
	}

	public set path(value: string | null) {
		this._path = this.setOrRemoveAttribute(Attr.Path, value) ?? undefined;
	}

	/**
	 * The rotation of the object.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rotate
	 */
	public get rotate(): AnimateMotionRotate | undefined {
		return this._rotate;
	}

	public set rotate(value: AnimateMotionRotate | null) {
		this._rotate = maybeParseAnimationMotionRotate(this.setOrRemoveAttribute(Attr.Rotate, value === null ? null : value.toString())) ?? 0;
	}
}
