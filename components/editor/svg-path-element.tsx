export default function render(props: { el: SVGPathElement }) {
	const d = props.el.getAttribute('d');
	if (!d) return <></>;

	const parts = d.matchAll(/[a-zA-Z]|-?\d+(?:\.\d+)?/g);
	const coordinates = { x: 0, y: 0 } satisfies Coordinates;

	const children = [] as JSXElement[];
	for (const part of parts) {
		const parsed = parseLetter(coordinates, part[0], parts);
		if (parsed) children.push(...parsed);
	}
	return <g>{children}</g>;
}

function parseLetter(coordinates: Coordinates, letter: string, parts: IterableIterator<RegExpExecArray>) {
	switch (letter) {
		case 'M':
			return parse_M(coordinates, parts);
		case 'm':
			return parse_m(coordinates, parts);
		case 'L':
			return parse_L(coordinates, parts);
		case 'l':
			return parse_l(coordinates, parts);
		case 'H':
			return parse_H(coordinates, parts);
		case 'h':
			return parse_h(coordinates, parts);
		case 'V':
			return parse_V(coordinates, parts);
		case 'v':
			return parse_v(coordinates, parts);
		case 'C':
			return parse_C(coordinates, parts);
		case 'c':
			return parse_c(coordinates, parts);
		case 'S':
			return parse_S(coordinates, parts);
		case 's':
			return parse_s(coordinates, parts);
		case 'Q':
			return parse_Q(coordinates, parts);
		case 'q':
			return parse_q(coordinates, parts);
		case 'T':
			return parse_T(coordinates, parts);
		case 't':
			return parse_t(coordinates, parts);
		case 'A':
			return parse_A(coordinates, parts);
		case 'a':
			return parse_a(coordinates, parts);
		case 'Z':
			return parse_Z();
		case 'z':
			return parse_z();
		default:
			throw new Error(`Unsupported path command: ${letter}`);
	}
}

/**
 * Move the current point to the coordinate `x`,`y`. Any subsequent coordinate
 * pair(s) are interpreted as parameter(s) for implicit absolute LineTo (`L`)
 * command(s) (see below).
 *
 * **Formula**: Pn = {`x`, `y`}
 */
function parse_M(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	coordinates.x = getNext(parts);
	coordinates.y = getNext(parts);
	return null;
}

/**
 * Move the current point by shifting the last known position of the path by `dx`
 * along the x-axis and by `dy` along the y-axis. Any subsequent coordinate
 * pair(s) are interpreted as parameter(s) for implicit relative LineTo (`l`)
 * command(s) (see below).
 *
 * **Formula**: Pₙ = {x₀ + `dx`, y₀ + `dy`}
 */
function parse_m(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	coordinates.x += getNext(parts);
	coordinates.y += getNext(parts);
	return null;
}

/**
 * Draw a line from the current point to the end point specified by `x`,`y`. Any
 * subsequent coordinate pair(s) are interpreted as parameter(s) for implicit
 * absolute LineTo (`L`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {`x`, `y`}
 */
function parse_L(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	coordinates.x = getNext(parts);
	coordinates.y = getNext(parts);
	return null;
}

/**
 * Draw a line from the current point to the end point, which is the current
 * point shifted by `dx` along the x-axis and `dy` along the y-axis. Any
 * subsequent coordinate pair(s) are interpreted as parameter(s) for implicit
 * relative LineTo (`l`) command(s) (see below).
 *
 * **Formula**: P₀′ = Pₙ = {x₀ + `dx`, y₀ + `dy`}
 */
function parse_l(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	coordinates.x += getNext(parts);
	coordinates.y += getNext(parts);
	return null;
}

/**
 * Draw a horizontal line from the current point to the end point, which is
 * specified by the `x` parameter and the current point's `y` coordinate. Any
 * subsequent value(s) are interpreted as parameter(s) for implicit absolute
 * horizontal LineTo (`H`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {`x`, y₀}
 */
function parse_H(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	coordinates.x = getNext(parts);
	return null;
}

/**
 * Draw a horizontal line from the current point to the end point, which is
 * specified by the current point shifted by `dx` along the x-axis and the
 * current point's `y` coordinate. Any subsequent value(s) are interpreted as
 * parameter(s) for implicit relative horizontal LineTo (`h`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {x₀ + `dx`, y₀}
 */
function parse_h(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	coordinates.x += getNext(parts);
	return null;
}

/**
 * Draw a vertical line from the current point to the end point, which is
 * specified by the `y` parameter and the current point's `x` coordinate. Any
 * subsequent values are interpreted as parameters for implicit absolute
 * vertical LineTo (`V`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {x₀, `y`}
 */
function parse_V(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	coordinates.y = getNext(parts);
	return null;
}

/**
 * Draw a vertical line from the current point to the end point, which is
 * specified by the current point shifted by `dy` along the y-axis and the
 * current point's `x` coordinate. Any subsequent value(s) are interpreted as
 * parameter(s) for implicit relative vertical LineTo (`v`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {x₀, y₀ + `dy`}
 */
function parse_v(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	coordinates.y += getNext(parts);
	return null;
}

/**
 * Draw a cubic Bézier curve from the current point to the end point specified
 * by `x`,`y`. The start control point is specified by `x1`,`y1` and the end
 * control point is specified by `x2`,`y2`. Any subsequent triplet(s) of
 * coordinate pairs are interpreted as parameter(s) for implicit absolute cubic
 * Bézier curve (`C`) command(s).
 *
 * **Formulae**:
 * - P₀′ = Pₙ = {`x`, `y`} ;
 * - Pcs = {`x1`, `y1`} ;
 * - Pce = {`x2`, `y2`}
 */
function parse_C(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	const from = { ...coordinates };
	const x1 = getNext(parts);
	const y1 = getNext(parts);
	const x2 = getNext(parts);
	const y2 = getNext(parts);
	coordinates.x = getNext(parts);
	coordinates.y = getNext(parts);
	return renderGuide(from, { x: x1, y: y1 }).concat(renderGuide(coordinates, { x: x2, y: y2 }));
}

/**
 * Draw a cubic Bézier curve from the current point to the end point, which is
 * the current point shifted by `dx` along the x-axis and `dy` along the y-axis.
 * The start control point is the current point (starting point of the curve)
 * shifted by `dx1` along the x-axis and `dy1` along the y-axis. The end control
 * point is the current point (starting point of the curve) shifted by `dx2`
 * along the x-axis and `dy2` along the y-axis. Any subsequent triplet(s) of
 * coordinate pairs are interpreted as parameter(s) for implicit relative cubic
 * Bézier curve (`c`) command(s).
 *
 * **Formulae**:
 * - P₀′ = Pₙ = {x₀ + `dx`, y₀ + `dy`} ;
 * - Pcs = {x₀ + `dx1`, y₀ + `dy1`} ;
 * - Pce = {x₀ + `dx2`, y₀ + `dy2`}
 */
function parse_c(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	const from = { ...coordinates };
	const x1 = from.x + getNext(parts);
	const y1 = from.y + getNext(parts);
	const x2 = from.x + getNext(parts);
	const y2 = from.y + getNext(parts);
	coordinates.x += getNext(parts);
	coordinates.y += getNext(parts);
	return renderGuide(from, { x: x1, y: y1 }).concat(renderGuide(coordinates, { x: x2, y: y2 }));
}

/**
 * Draw a smooth cubic Bézier curve from the current point to the end point
 * specified by `x`,`y`. The end control point is specified by `x2`,`y2`. The
 * start control point is the reflection of the end control point of the
 * previous curve command about the current point. If the previous command
 * wasn't a cubic Bézier curve, the start control point is the same as the curve
 * starting point (current point). Any subsequent pair(s) of coordinate pairs
 * are interpreted as parameter(s) for implicit absolute smooth cubic Bézier
 * curve (`S`) commands.
 */
function parse_S(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	const x2 = getNext(parts);
	const y2 = getNext(parts);
	coordinates.x = getNext(parts);
	coordinates.y = getNext(parts);
	return renderGuide(coordinates, { x: x2, y: y2 });
}

/**
 * Draw a smooth cubic Bézier curve from the current point to the end point,
 * which is the current point shifted by `dx` along the x-axis and `dy` along
 * the y-axis. The end control point is the current point (starting point of the
 * curve) shifted by `dx2` along the x-axis and `dy2` along the y-axis. The
 * start control point is the reflection of the end control point of the
 * previous curve command about the current point. If the previous command
 * wasn't a cubic Bézier curve, the start control point is the same as the curve
 * starting point (current point). Any subsequent pair(s) of coordinate pairs
 * are interpreted as parameter(s) for implicit relative smooth cubic Bézier
 * curve (`s`) commands.
 */
function parse_s(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	const from = { ...coordinates };
	const x2 = getNext(parts);
	const y2 = getNext(parts);
	coordinates.x += getNext(parts);
	coordinates.y += getNext(parts);
	return renderGuide(coordinates, { x: from.x + x2, y: from.y + y2 });
}

/**
 * Draw a quadratic Bézier curve from the current point to the end point
 * specified by `x`,`y`. The control point is specified by `x1`,`y1`. Any
 * subsequent pair(s) of coordinate pairs are interpreted as parameter(s) for
 * implicit absolute quadratic Bézier curve (`Q`) command(s).
 *
 * **Formulae**:
 * - P₀′ = Pₙ = {`x`, `y`} ;
 * - Pc = {`x1`, `y1`}
 */
function parse_Q(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	const from = { ...coordinates };
	const x1 = getNext(parts);
	const y1 = getNext(parts);
	coordinates.x = getNext(parts);
	coordinates.y = getNext(parts);
	return renderLine(from, { x: x1, y: y1 });
}

/**
 * Draw a quadratic Bézier curve from the current point to the end point, which
 * is the current point shifted by `dx` along the x-axis and `dy` along the
 * y-axis. The control point is the current point (starting point of the curve)
 * shifted by `dx1` along the x-axis and `dy1` along the y-axis. Any subsequent
 * pair(s) of coordinate pairs are interpreted as parameter(s) for implicit
 * relative quadratic Bézier curve (`q`) command(s).
 *
 * **Formulae**:
 * - P_o′ = Pₙ = {x₀ + `dx`, y₀ + `dy`} ;
 * - Pc = {x₀ + `dx1`, y₀ + `dy1`}
 */
function parse_q(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	const from = { ...coordinates };
	const x1 = getNext(parts);
	const y1 = getNext(parts);
	coordinates.x += getNext(parts);
	coordinates.y += getNext(parts);
	return renderLine(from, { x: coordinates.x + x1, y: coordinates.y + y1 });
}

/**
 * Draw a smooth quadratic Bézier curve from the current point to the end point
 * specified by `x`,`y`. The control point is the reflection of the control
 * point of the previous curve command about the current point. If the previous
 * command wasn't a quadratic Bézier curve, the control point is the same as the
 * curve starting point (current point). Any subsequent coordinate pair(s) are
 * interpreted as parameter(s) for implicit absolute smooth quadratic Bézier
 * curve (`T`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {`x`, `y`}
 */
function parse_T(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	coordinates.x = getNext(parts);
	coordinates.y = getNext(parts);
	return null;
}

/**
 * Draw a smooth quadratic Bézier curve from the current point to the end point,
 * which is the current point shifted by `dx` along the x-axis and `dy` along
 * the y-axis. The control point is the reflection of the control point of the
 * previous curve command about the current point. If the previous command
 * wasn't a quadratic Bézier curve, the control point is the same as the curve
 * starting point (current point). Any subsequent coordinate pair(s) are
 * interpreted as parameter(s) for implicit relative smooth quadratic Bézier
 * curve (`t`) command(s).
 *
 * **Formula**: P₀′ = Pₙ = {x₀ + `dx`, y₀ + `dy`}
 */
function parse_t(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	coordinates.x += getNext(parts);
	coordinates.y += getNext(parts);
	return null;
}

/**
 * Draw an Arc curve from the current point to the coordinate `x`,`y`. The
 * center of the ellipse used to draw the arc is determined automatically based
 * on the other parameters of the command:
 *
 * - `rx` and `ry` are the two radii of the ellipse;
 * - `angle` represents a rotation (in degrees) of the ellipse relative to the
 *   x-axis;
 * - `large-arc-flag` and `sweep-flag` allows to chose which arc must be drawn
 *   as 4 possible arcs can be drawn out of the other parameters.
 *   - `large-arc-flag` allows a choice of large arc (`1`) or small arc (`0`),
 *   - `sweep-flag` allows a choice of a clockwise arc (`1`) or counterclockwise
 *     arc (`0`)
 *
 * The coordinate `x`,`y` becomes the new current point for the next command.
 * All subsequent sets of parameters are considered implicit absolute arc curve
 * (`A`) commands.
 */
function parse_A(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	// TODO: Fix case for angle being !== 0
	const from = { ...coordinates };
	const rx = getNext(parts);
	const ry = getNext(parts);
	const angle = getNext(parts);
	const largeArcFlag = getNext(parts);
	const sweepFlag = getNext(parts);
	coordinates.x = getNext(parts);
	coordinates.y = getNext(parts);
	console.log({ rx, ry, angle, largeArcFlag, sweepFlag });
	return renderLine(from, coordinates);
}

/**
 * Draw an Arc curve from the current point to a point for which coordinates are
 * those of the current point shifted by `dx` along the x-axis and `dy` along
 * the y-axis. The center of the ellipse used to draw the arc is determined
 * automatically based on the other parameters of the command:
 *
 * - `rx` and `ry` are the two radii of the ellipse;
 * - `angle` represents a rotation (in degrees) of the ellipse relative to the
 *   x-axis;
 * - `large-arc-flag` and `sweep-flag` allows to chose which arc must be drawn
 *   as 4 possible arcs can be drawn out of the other parameters.
 *   - `large-arc-flag` allows a choice of large arc (`1`) or small arc (`0`),
 *   - `sweep-flag` allows a choice of a clockwise arc (`1`) or counterclockwise
 *     arc (`0`)
 *
 * The current point gets its X and Y coordinates shifted by `dx` and `dy` for
 * the next command. All subsequent sets of parameters are considered implicit
 * relative arc curve (`a`) commands.
 */
function parse_a(coordinates: Coordinates, parts: IterableIterator<RegExpExecArray>) {
	// TODO: Implement this function after `parse_A` is fixed
	const from = { ...coordinates };
	const rx = getNext(parts);
	const ry = getNext(parts);
	const angle = getNext(parts);
	const largeArcFlag = getNext(parts);
	const sweepFlag = getNext(parts);
	coordinates.x += getNext(parts);
	coordinates.y += getNext(parts);
	console.log({ rx, ry, angle, largeArcFlag, sweepFlag });
	return renderLine(from, coordinates);
}

/**
 * Close the current subpath by connecting the last point of the path with its
 * initial point. If the two points are at different coordinates, a straight
 * line is drawn between those two points.
 */
function parse_Z() {
	return null;
}

/**
 * Close the current subpath by connecting the last point of the path with its
 * initial point. If the two points are at different coordinates, a straight
 * line is drawn between those two points.
 */
function parse_z() {
	return null;
}

function renderDot(coordinates: Coordinates) {
	return <circle cx={coordinates.x} cy={coordinates.y} r={1} fill="red" />;
}

function renderLine(from: Coordinates, to: Coordinates) {
	return [renderDot(from), <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="black" />, renderDot(to)];
}

function renderGuide(from: Coordinates, to: Coordinates) {
	return [renderDot(from), <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="black" stroke-dasharray={2} />, renderDot(to)];
}

function renderArrow(from: Coordinates, to: Coordinates) {
	return [renderDot(from), <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="black" />, <circle cx={to.x} cy={to.y} r={2} fill="black" />];
}

function getNext(parts: IterableIterator<RegExpExecArray>) {
	const next = parts.next();
	if (next.done) throw new Error('Unexpected end of path');
	return Number(next.value[0]);
}

interface Coordinates {
	x: number;
	y: number;
}

type JSXElement = ReturnType<typeof renderLine>[0];
