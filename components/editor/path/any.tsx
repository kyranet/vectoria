import {
	EditorPathArcCurve,
	EditorPathClosePath,
	EditorPathCubicBézierCurve,
	EditorPathHorizontalLineTo,
	EditorPathLineTo,
	EditorPathMoveTo,
	EditorPathQuadraticBézierCurve,
	EditorPathSmoothCubicBézierCurve,
	EditorPathSmoothQuadraticBézierCurve,
	EditorPathVerticalLineTo
} from '#components';
import type { VectorPath } from '~/utils/svg/VectorPath';

export default function render({ el }: { el: VectorPath.PathEntry }) {
	switch (el.type) {
		case 'M':
		case 'm':
			return EditorPathMoveTo({ el });
		case 'L':
		case 'l':
			return EditorPathLineTo({ el });
		case 'H':
		case 'h':
			return EditorPathHorizontalLineTo({ el });
		case 'V':
		case 'v':
			return EditorPathVerticalLineTo({ el });
		case 'C':
		case 'c':
			return EditorPathCubicBézierCurve({ el });
		case 'S':
		case 's':
			return EditorPathSmoothCubicBézierCurve({ el });
		case 'Q':
		case 'q':
			return EditorPathQuadraticBézierCurve({ el });
		case 'T':
		case 't':
			return EditorPathSmoothQuadraticBézierCurve({ el });
		case 'A':
		case 'a':
			return EditorPathArcCurve({ el });
		case 'Z':
		case 'z':
			return EditorPathClosePath({ el });
		default:
			<div></div>;
	}
}
