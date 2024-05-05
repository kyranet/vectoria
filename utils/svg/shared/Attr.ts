export enum Attr {
	/**
	 * Controls whether or not an animation is cumulative.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/accumulate
	 * @appliesTo
	 *
	 * - `<animate>`
	 * - `<animateMotion>`
	 * - `<animateTransform>`
	 *
	 * @values {@linkcode AttrAccumulateValue}
	 * @default 'none'
	 */
	Accumulate = 'accumulate',

	/**
	 * Controls whether or not an animation is additive.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/additive
	 * @appliesTo
	 *
	 * - `<animate>`
	 * - `<animateMotion>`
	 * - `<animateTransform>`
	 *
	 * @values {@link AttrAdditiveValue}
	 * @default 'replace'
	 */
	Additive = 'additive',

	/**
	 * Specifies how an object is aligned with respect to its parent. This
	 * property specifies which baseline of this element is to be aligned with
	 * the corresponding baseline of the parent. For example, this allows
	 * alphabetic baselines in Roman text to stay aligned across font size
	 * changes.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline
	 * @appliesTo
	 *
	 * - `<tspan>`
	 * - `<tref>` (deprecated)
	 * - `<textPath>`
	 *
	 * @values {@link AttrAlignmentBaselineValue}
	 * @default 'auto'
	 */
	AlignmentBaseline = 'alignment-baseline',

	/**
	 * Controls the amplitude of the gamma function of a component transfer
	 * element when its `type` attribute is `gamma`.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/amplitude
	 * @appliesTo
	 *
	 * - `<feFuncA>`
	 * - `<feFuncB>`
	 * - `<feFuncG>`
	 * - `<feFuncR>`
	 *
	 * @values {@link AttrAmplitudeValue}
	 * @default 1
	 */
	Amplitude = 'amplitude',

	/**
	 * Indicates the name of the CSS property or attribute of the target element
	 * that is going to be changed during an animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeName
	 * @appliesTo
	 *
	 * - `<animate>`
	 * - `<animateTransform>`
	 * - `<set>`
	 *
	 * @values {@linkcode AttrAttributeNameValue}
	 * @default null
	 */
	AttributeName = 'attributeName',

	/**
	 * Specifies the direction angle for the light source on the XY plane
	 * (clockwise), in degrees from the x axis.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/azimuth
	 * @appliesTo
	 *
	 * - `<feDistantLight>`
	 *
	 * @values {@linkcode AttrAzimuthValue}
	 * @default 0
	 */
	Azimuth = 'azimuth',

	/**
	 * Represents the base frequency parameter for the noise function of the
	 * `<feTurbulence>` filter primitive.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseFrequency
	 * @appliesTo
	 *
	 * - `<feTurbulence>`
	 *
	 * @values {@linkcode AttrBaseFrequencyValue}
	 * @default [0]
	 */
	BaseFrequency = 'baseFrequency',

	/**
	 * Allows repositioning of the dominant-baseline relative to the
	 * dominant-baseline of the parent text content element. The shifted object
	 * might be a sub- or superscript.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift
	 * @appliesTo
	 *
	 * - `<tspan>`
	 * - `<tref>` (deprecated)
	 * - `<textPath>`
	 *
	 * @values {@linkcode AttrBaselineShiftValue}
	 * @default 0
	 */
	BaselineShift = 'baseline-shift',

	/**
	 * A semicolon separated list of values that define when the given animation
	 * will begin.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/begin
	 * @appliesTo
	 *
	 * - `<animate>`
	 * - `<animateMotion>`
	 * - `<animateTransform>`
	 * - `<set>`
	 *
	 * @values {@linkcode AttrBeginValue}
	 * @default 0s
	 */
	Begin = 'begin',

	/**
	 * The `bias` attribute shifts the range of the filter. After applying the
	 * `kernelMatrix` of the `<feConvolveMatrix>` element to the input image to
	 * yield a number and applied the `divisor` attribute, the `bias` attribute
	 * is added to each component. This allows representation of values that
	 * would otherwise be clamped to 0 or 1.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/bias
	 * @appliesTo
	 *
	 * - `<feConvolveMatrix>`
	 *
	 * @values {@linkcode AttrBiasValue}
	 * @default 0
	 */
	Bias = 'bias',

	/**
	 * The `by` attribute specifies a relative offset value for an attribute
	 * that will be modified during an animation. The starting value for the
	 * attribute is either indicated by specifying it as value for the attribute
	 * given in the `attributeName` or the `from` attribute.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/by
	 * @appliesTo
	 *
	 * - `<animate>`
	 * - `<animateMotion>`
	 * - `<animateTransform>`
	 *
	 * @values {@linkcode AttrByValue}
	 * @default null
	 */
	By = 'by',

	/**
	 * The `calcMode` attribute defines the interpolation mode for the animation.
	 * The default mode is `linear`, however if the attribute does not support
	 * linear interpolation (e.g. for strings), the `calcMode` attribute is
	 * ignored and discrete interpolation is used.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/calcMode
	 * @appliesTo
	 *
	 * - `<animate>`
	 * - `<animateMotion>`
	 * - `<animateTransform>`
	 *
	 * @values {@linkcode AttrCalculationModeValue}
	 * @default 'linear'
	 */
	CalculationMode = 'calcMode',

	/**
	 * Assigns a class name or set of class names to an element. You may assign
	 * the same class name or names to any number of elements, however, multiple
	 * class names must be separated by whitespace characters.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/class
	 * @appliesTo
	 *
	 * - All
	 *
	 * @values {@linkcode AttrClassValue}
	 * @default []
	 */
	Class = 'class',

	/**
	 * The `clip-path` presentation attribute defines or associates a clipping
	 * path with the element it is related to.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-path
	 * @appliesTo
	 *
	 * - `<a>`
	 * - `<circle>`
	 * - `<clipPath>`
	 * - `<ellipse>`
	 * - `<g>`
	 * - `<glyph>` (deprecated)
	 * - `<image>`
	 * - `<line>`
	 * - `<marker>`
	 * - `<mask>`
	 * - `<path>`
	 * - `<pattern>`
	 * - `<polygon>`
	 * - `<polyline>`
	 * - `<rect>`
	 * - `<svg>`
	 * - `<symbol>`
	 * - `<text>`
	 * - `<use>`
	 *
	 * @values {@linkcode AttrClipPathValue}
	 * @default null
	 */
	ClipPath = 'clip-path',

	/**
	 * The `clipPathUnits` attribute indicates which coordinate system to use
	 * for the contents of the `<clipPath>` element.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clipPathUnits
	 * @appliesTo
	 *
	 * - Same as {@linkcode ClipPath}
	 *
	 * @values {@linkcode AttrClipPathUnitsValue}
	 * @default 'userSpaceOnUse'
	 */
	ClipPathUnits = 'clipPathUnits',

	/**
	 * The `clip-rule` attribute only applies to graphics elements that are
	 * contained within a `<clipPath>` element. The `clip-rule` attribute
	 * basically works as the fill-rule attribute, except that it applies to
	 * `<clipPath>` definitions.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule
	 * @appliesTo
	 *
	 * - All graphics elements
	 *
	 * @values {@linkcode AttrClipRuleValue}
	 * @default 'nonzero'
	 */
	ClipRule = 'clip-rule',

	/**
	 * The `color` attribute is used to specify the color of the given element.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color
	 * @appliesTo
	 *
	 * - All
	 *
	 * @values {@linkcode AttrColorValue}
	 * @default 'Depends on user agent'
	 */
	Color = 'color',

	/**
	 * The `color-interpolation` attribute specifies the color space for gradient
	 * interpolations, color animations, and alpha compositing.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation
	 * @appliesTo
	 *
	 * - `<a>`
	 * - `<animate>`
	 * - `<circle>`
	 * - `<clipPath>`
	 * - `<defs>`
	 * - `<ellipse>`
	 * - `<foreignObject>`
	 * - `<g>`
	 * - `<glyph>` (deprecated)
	 * - `<image>`
	 * - `<line>`
	 * - `<linearGradient>`
	 * - `<marker>`
	 * - `<mask>`
	 * - `<missing-glyph`> (deprecated)
	 * - `<path>`
	 * - `<pattern>`
	 * - `<polygon>`
	 * - `<polyline>`
	 * - `<radialGradient>`
	 * - `<rect>`
	 * - `<svg>`
	 * - `<switch>`
	 * - `<symbol>`
	 * - `<text>`
	 * - `<textPath>`
	 * - `<tspan>`
	 * - `<use>`
	 *
	 * @values {@linkcode AttrColorInterpolationValue}
	 * @default 'sRGB'
	 */
	ColorInterpolation = 'color-interpolation',

	/**
	 * The `color-interpolation-filters` attribute specifies the color space for
	 * imaging operations performed via filter effects.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation-filters
	 * @appliesTo
	 *
	 * - `<feSpotLight>`
	 * - `<feBlend>`
	 * - `<feColorMatrix>`
	 * - `<feComponentTransfer>`
	 * - `<feComposite>`
	 * - `<feConvolveMatrix>`
	 * - `<feDiffuseLighting>`
	 * - `<feDisplacementMap>`
	 * - `<feDropShadow>`
	 * - `<feFlood>`
	 * - `<feGaussianBlur>`
	 * - `<feImage>`
	 * - `<feMerge>`
	 * - `<feMorphology>`
	 * - `<feOffset>`
	 * - `<feSpecularLighting>`
	 * - `<feTile>`
	 * - `<feTurbulence>`
	 *
	 * @values {@linkcode AttrColorInterpolationFiltersValue}
	 * @default 'linearRGB'
	 */
	ColorInterpolationFilters = 'color-interpolation-filters',

	/**
	 * The `cursor` attribute specifies the mouse cursor displayed when the
	 * mouse pointer is over an element.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cursor
	 * @appliesTo
	 *
	 * - All graphics elements
	 * - All container elements
	 *
	 * @values {@linkcode AttrCursorValue}
	 * @default 'inherit'
	 */
	Cursor = 'cursor',

	/**
	 * The `cx` attribute defines the x-axis coordinate of the center of the
	 * element.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cx
	 * @appliesTo
	 *
	 * - `<circle>`
	 * - `<ellipse>`
	 * - `<radialGradient>`
	 *
	 * @values {@linkcode AttrCxValue}
	 * @default 0
	 *
	 * @remarks
	 *
	 * - For `<radialGradient>` elements, `cx` defines the x-axis coordinate of
	 * the end circle for the radial gradient, and the default value is `50%`.
	 */
	CenterX = 'cx',

	/**
	 * The `cy` attribute defines the y-axis coordinate of the center of the
	 * element.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cy
	 * @appliesTo
	 *
	 * - `<circle>`
	 * - `<ellipse>`
	 * - `<radialGradient>`
	 *
	 * @values {@linkcode AttrCyValue}
	 * @default 0
	 *
	 * @remarks
	 *
	 * - For `<radialGradient>` elements, `cy` defines the y-axis coordinate of
	 * the end circle for the radial gradient, and the default value is `50%`.
	 */
	CenterY = 'cy',

	/**
	 * The `d` attribute defines a path to be drawn.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
	 * @appliesTo
	 *
	 * - `<path>`
	 * - `<glyph>` (deprecated)
	 * - `<missing-glyph>` (deprecated)
	 *
	 * @values {@linkcode AttrPathDataValue}
	 * @default null
	 */
	PathData = 'd',

	/**
	 * The `decoding` attribute, valid on `<image>` elements, provides a hint to
	 * the browser as to whether it should perform image decoding along with
	 * rendering other content in a single presentation step that looks more
	 * "correct" (`sync`), or render and present the other content first and
	 * then decode the image and present it later (`async`). In practice, `async`
	 * means that the next paint does not wait for the image to decode.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/decoding
	 * @appliesTo
	 *
	 * - `<image>`
	 *
	 * @values {@linkcode AttrDecodingValue}
	 * @default 'sync'
	 */
	Decoding = 'decoding',

	/**
	 * The diffuseConstant attribute represents the k_d value in the Phong
	 * lighting model. In SVG, this can be any non-negative number.
	 *
	 * It's used to determine the final RGB value of a given pixel. The brighter
	 * the lighting-color, the smaller this number should be.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/diffuseConstant
	 * @appliesTo
	 *
	 * - `<feDiffuseLighting>`
	 *
	 * @values {@linkcode AttrDiffuseConstantValue}
	 * @default 1
	 */
	DiffuseConstant = 'diffuseConstant',

	/**
	 * The `direction` attribute specifies the inline-base direction of a
	 * `<text>` or `<tspan>` element. It defines the start and end points of a
	 * line of text as used by the `text-anchor` and `inline-size` properties.
	 *
	 * It also may affect the direction in which characters are positioned if
	 * the `unicode-bidi` property's value is either `embed` or `bidi-override`.
	 *
	 * It applies only to glyphs oriented perpendicular to the inline-base
	 * direction, which includes the usual case of horizontally-oriented Latin
	 * or Arabic text and the case of narrow-cell Latin or Arabic characters
	 * rotated 90 degrees clockwise relative to a top-to-bottom inline-base
	 * direction.
	 *
	 * In many cases, the bidirectional Unicode algorithm produces the desired
	 * result automatically, so this attribute doesn't need to be specified in
	 * those cases. For other cases, such as when using right-to-left languages,
	 * it may be sufficient to add the `direction` attribute to the outermost
	 * `<svg>` element
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/direction
	 * @appliesTo
	 *
	 * - `<textPath>`
	 * - `<text>`
	 * - `<tref>` (deprecated)
	 * - `<tspan>`
	 *
	 * @values {@linkcode AttrDirectionValue}
	 * @default 'ltr'
	 */
	Direction = 'direction',

	/**
	 * The `display` attribute lets you control the rendering of graphical or
	 * container elements.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/display
	 * @appliesTo
	 *
	 * - All
	 *
	 * @values {@linkcode AttrDisplayValue}
	 * @default 'inline'
	 */
	Display = 'display',

	/**
	 * The `divisor` attribute specifies the value by which the resulting number
	 * of applying the `kernelMatrix` of a `<feConvolveMatrix>` element to the
	 * input image color value is divided to yield the destination color value.
	 *
	 * A divisor that is the sum of all the matrix values tends to have an
	 * evening effect on the overall color intensity of the result.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/divisor
	 * @appliesTo
	 *
	 * - `<feConvolveMatrix>`
	 *
	 * @values {@linkcode AttrDivisorValue}
	 * @default 'Sum of all values in kernelMatrix or 1 if sum is 0'
	 */
	Divisor = 'divisor',

	/**
	 * The `dominant-baseline` attribute is used to determine or re-determine the
	 * alignment point of each glyph in a text string based on the dominant
	 * baseline and the alignment-baseline.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline
	 * @appliesTo
	 *
	 * - `<text>`
	 * - `<textPath>`
	 * - `<tref>` (deprecated)
	 * - `<tspan>`
	 *
	 * @values {@linkcode AttrDominantBaselineValue}
	 * @default 'auto'
	 */
	DominantBaseline = 'dominant-baseline',

	/**
	 * The `dur` attribute defines the simple duration of an animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dur
	 * @appliesTo
	 *
	 * - `<animate>`
	 * - `<animateMotion>`
	 * - `<animateTransform>`
	 * - `<set>`
	 *
	 * @values {@linkcode AttrDurationValue}
	 * @default 'indefinite'
	 */
	Duration = 'dur',

	/**
	 * The `dx` attribute indicates a shift along the x-axis on the position of
	 * an element or its content.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dx
	 * @appliesTo
	 *
	 * - `<feDropShadow>`
	 * - `<feOffset>`
	 * - `<glyphRef>` (deprecated)
	 * - `<text>`
	 * - `<tref>` (deprecated)
	 * - `<tspan>`
	 *
	 * @values {@linkcode AttrDxValue}
	 * @default 0
	 *
	 * @remarks
	 *
	 * - For `<feDropShadow>` elements, the attribute specifies the x offset of
	 * the dropped shadow as a `number`, and the default value is `2`.
	 * - For `<feOffset>` elements, the attribute specifies the x offset of the
	 * filter input graphic as a `number`, and the default value is `0`.
	 * - For `<text>` and `<tspan>` elements, the attribute specifies the x-axis
	 * shift for all glyphs in the text as a list of `<length>` values, and the
	 * default value is `null`.
	 */
	Dx = 'dx',

	/**
	 * The `dy` attribute indicates a shift along the y-axis on the position of
	 * an element or its content.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dy
	 * @appliesTo
	 *
	 * - `<feDropShadow>`
	 * - `<feOffset>`
	 * - `<glyphRef>` (deprecated)
	 * - `<text>`
	 * - `<tref>` (deprecated)
	 * - `<tspan>`
	 *
	 * @values {@linkcode AttrDyValue}
	 * @default 0
	 *
	 * @remarks
	 *
	 * - For `<feDropShadow>` elements, the attribute specifies the y offset of
	 * the dropped shadow as a `number`, and the default value is `2`.
	 * - For `<feOffset>` elements, the attribute specifies the y offset of the
	 * filter input graphic as a `number`, and the default value is `0`.
	 * - For `<text>` and `<tspan>` elements, the attribute specifies the y-axis
	 * shift for all glyphs in the text as a list of `<length>` values, and the
	 * default value is `null`.
	 */
	Dy = 'dy',

	/**
	 * The `edgeMode` attribute determines how to extend the input image as
	 * necessary with color values so that the matrix operations can be applied
	 * when the kernel is positioned at or near the edge of the input image.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/edgeMode
	 * @appliesTo
	 *
	 * - `<feConvolveMatrix>`
	 * - `<feGaussianBlur>`
	 *
	 * @values {@linkcode AttrEdgeModeValue}
	 *
	 * @remarks
	 *
	 * - For `<feConvolveMatrix>` elements, the default value is `duplicate`.
	 * - For `<feGaussianBlur>` elements, the default value is `none`.
	 */
	EdgeMode = 'edgeMode',

	/**
	 * The `elevation` attribute specifies the direction angle for the light
	 * source from the XY plane towards the Z-axis, in degrees. Note that the
	 * positive Z-axis points towards the viewer of the content.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/elevation
	 * @appliesTo
	 *
	 * - `<feDistantLight>`
	 *
	 * @values {@linkcode AttrElevationValue}
	 * @default 0
	 */
	Elevation = 'elevation',

	/**
	 * The `end` attribute defines an end value for the animation that can
	 * constrain the active duration.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/end
	 * @appliesTo
	 *
	 * - `<animate>`
	 * - `<animateMotion>`
	 * - `<animateTransform>`
	 * - `<set>`
	 *
	 * @values {@linkcode AttrEndValue}
	 * @default null
	 */
	End = 'end',

	/**
	 * The `exponent` attribute defines the exponent of the gamma function.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/exponent
	 * @appliesTo
	 *
	 * - `<feFuncA>`
	 * - `<feFuncB>`
	 * - `<feFuncG>`
	 * - `<feFuncR>`
	 *
	 * @values {@linkcode AttrExponentValue}
	 * @default 1
	 */
	Exponent = 'exponent',

	/**
	 * The fill attribute has two different meanings. For shapes and text it's a
	 * presentation attribute that defines the color (*or any SVG paint servers
	 * like gradients or patterns*) used to paint the element; for animation itç
	 * defines the final state of the animation.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
	 * @appliesTo
	 *
	 * - `<circle>`
	 * - `<ellipse>`
	 * - `<path>`
	 * - `<polygon>`
	 * - `<polyline>`
	 * - `<rect>`
	 * - `<text>`
	 * - `<textPath>`
	 * - `<tref>` (deprecated)
	 * - `<tspan>`
	 * - All animation elements
	 *
	 * @values {@linkcode AttrFillValue}
	 *
	 * @remarks
	 *
	 * - For animation elements, the `fill` attribute defines the final state of
	 * the animation, and the possible values are `freeze` and `remove`, with
	 * `freeze` being the default.
	 * - For all other elements, the `fill` attribute defines the color used to
	 * paint the element, and the default value is `black`.
	 */
	Fill = 'fill',

	/**
	 * The `fill-opacity` attribute is a presentation attribute defining the
	 * opacity of the paint server (color, gradient, pattern, etc.) applied to a
	 * shape.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-opacity
	 * @appliesTo
	 *
	 * - `<circle>`
	 * - `<ellipse>`
	 * - `<path>`
	 * - `<polygon>`
	 * - `<polyline>`
	 * - `<rect>`
	 * - `<text>`
	 * - `<textPath>`
	 * - `<tref>` (deprecated)
	 * - `<tspan>`
	 *
	 * @values {@linkcode AttrFillOpacityValue}
	 * @default 1
	 */
	FillOpacity = 'fill-opacity',

	/**
	 * The `fill-rule` attribute is a presentation attribute defining the
	 * algorithm to use to determine the inside part of a shape.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule
	 * @appliesTo
	 *
	 * - `<path>`
	 * - `<polygon>`
	 * - `<polyline>`
	 * - `<text>`
	 * - `<textPath>`
	 * - `<tref>` (deprecated)
	 * - `<tspan>`
	 *
	 * @values {@linkcode AttrFillRuleValue}
	 * @default 'nonzero'
	 */
	FillRule = 'fill-rule'
}

export type ValueName = string & { __TYPE__: '<name>' };
export type ValueLengthPercentage = SVGLength & { __TYPE__: '<length-percentage>' };
export type ValueBasicShape =
	| `inset(${string})`
	| `rect(${string})`
	| `xywh(${string})`
	| `circle(${string})`
	| `ellipse(${string})`
	| `polygon(${string})`
	| `path(${string})`;
export type ValueColor = string & { __TYPE__: '<color>' };
export type ValueFunciri = `url(${string})` & { __TYPE__: '<funciri>' };

export type AttrAccumulateValue = 'sum' | 'none';
export type AttrAdditiveValue = 'sum' | 'replace';
export type AttrAlignmentBaselineValue =
	| 'auto'
	| 'baseline'
	/** @deprecated */
	| 'before-edge'
	/** @mappedTo text-top */
	| 'text-before-edge'
	| 'middle'
	| 'central'
	/** @deprecated */
	| 'after-edge'
	/** @mappedTo text-bottom */
	| 'text-after-edge'
	| 'ideographic'
	| 'alphabetic'
	| 'hanging'
	| 'mathematical'
	| 'top'
	| 'center'
	| 'bottom';
export type AttrAmplitudeValue = number;
export type AttrAttributeNameValue = ValueName | null;
export type AttrAzimuthValue = number;
export type AttrBaseFrequencyValue = [x: number, y?: number];
export type AttrBaselineShiftValue = ValueLengthPercentage | 'sub' | 'super';
export type AttrBeginValue = string[];
export type AttrBiasValue = number;
export type AttrByValue = ValueLengthPercentage | null;
export type AttrCalculationModeValue = 'discrete' | 'linear' | 'paced' | 'spline';
export type AttrClassValue = string[];
export type AttrClipPathValue = `url(${string})` | `${ValueBasicShape}${'' | ' fill-box' | ' stroke-box' | ' view-box'}` | null;
export type AttrClipRuleValue = 'nonzero' | 'evenodd' | 'inherit';
export type AttrClipPathUnitsValue = 'userSpaceOnUse' | 'objectBoundingBox';
export type AttrColorValue = ValueColor | 'inherit';
export type AttrColorInterpolationValue = 'auto' | 'sRGB' | 'linearRGB';
export type AttrColorInterpolationFiltersValue = 'auto' | 'sRGB' | 'linearRGB';
export type AttrCursorValue =
	| `${'' | `${ValueFunciri} `}${'auto' | 'crosshair' | 'default' | 'pointer' | 'move' | 'e-resize' | 'ne-resize' | 'nw-resize' | 'n-resize' | 'se-resize' | 'sw-resize' | 's-resize' | 'w-resize' | 'text' | 'wait' | 'help'}`
	| 'inherit';
export type AttrCxValue = ValueLengthPercentage;
export type AttrCyValue = ValueLengthPercentage;
export type AttrPathDataValue = string | null;
export type AttrDecodingValue = 'sync' | 'async' | 'auto';
export type AttrDiffuseConstantValue = number;
export type AttrDirectionValue = 'ltr' | 'rtl';
export type AttrDisplayValue = string;
export type AttrDivisorValue = number;
export type AttrDominantBaselineValue =
	| 'auto'
	| 'text-bottom'
	| 'alphabetic'
	| 'ideographic'
	| 'middle'
	| 'central'
	| 'mathematical'
	| 'hanging'
	| 'text-top';
export type AttrDurationValue = string | 'media' | 'indefinite';
export type AttrDxValue = SVGLengthList | number;
export type AttrDyValue = SVGLengthList | number;
export type AttrEdgeModeValue = 'duplicate' | 'wrap' | 'none';
export type AttrElevationValue = number;
export type AttrEndValue = string[];
export type AttrExponentValue = number;
export type AttrFillOpacityValue = number | `${number}%`;
export type AttrFillRuleValue = 'nonzero' | 'evenodd';
