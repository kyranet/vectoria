import { VectorA } from '../VectorA';
import { VectorAnimate } from '../VectorAnimate';
import { VectorCircle } from '../VectorCircle';
import { VectorDefs } from '../VectorDefs';
import { VectorEllipse } from '../VectorEllipse';
import { VectorG } from '../VectorG';
import { VectorPath } from '../VectorPath';
import { VectorRoot } from '../VectorRoot';
import { VectorUse } from '../VectorUse';

export function makeVectorElement(element: SVGElement) {
	switch (element.tagName) {
		case 'a':
			return new VectorA(element as SVGAElement);
		case 'animate':
			return new VectorAnimate(element as SVGAnimateElement);
		case 'animateMotion':
		// return new VectorAnimateMotion(element as SVGAnimateMotionElement);
		case 'animateTransform':
		// return new VectorAnimateTransform(element as SVGAnimateTransformElement);
		case 'circle':
			return new VectorCircle(element as SVGCircleElement);
		case 'clipPath':
		// return new VectorClipPath(element as SVGClipPathElement);
		case 'defs':
			return new VectorDefs(element as SVGDefsElement);
		case 'desc':
		// return new VectorDesc(element as SVGDescElement);
		case 'ellipse':
			return new VectorEllipse(element as SVGEllipseElement);
		case 'foreignObject':
		// return new VectorForeignObject(element as SVGForeignObjectElement);
		case 'g':
			return new VectorG(element as SVGGElement);
		case 'image':
		// return new VectorImage(element as SVGImageElement);
		case 'line':
		// return new VectorLine(element as SVGLineElement);
		case 'linearGradient':
		// return new VectorLinearGradient(element as SVGLinearGradientElement);
		case 'marker':
		// return new VectorMarker(element as SVGMarkerElement);
		case 'mask':
		// return new VectorMask(element as SVGMaskElement);
		case 'metadata':
		// return new VectorMetadata(element as SVGMetadataElement);
		case 'mpath':
		// return new VectorMPath(element as SVGMPathElement);
		case 'path':
			return new VectorPath(element as SVGPathElement);
		case 'pattern':
		// return new VectorPattern(element as SVGPatternElement);
		case 'polygon':
		// return new VectorPolygon(element as SVGPolygonElement);
		case 'polyline':
		// return new VectorPolyline(element as SVGPolylineElement);
		case 'radialGradient':
		// return new VectorRadialGradient(element as SVGRadialGradientElement);
		case 'rect':
		// return new VectorRect(element as SVGRectElement);
		case 'script':
		// return new VectorScript(element as SVGScriptElement);
		case 'set':
		// return new VectorSet(element as SVGSetElement);
		case 'stop':
		// return new VectorStop(element as SVGStopElement);
		case 'style':
		// return new VectorStyle(element as SVGStyleElement);
		case 'svg':
			return new VectorRoot(element as SVGSVGElement);
		case 'switch':
		// return new VectorSwitch(element as SVGSwitchElement);
		case 'symbol':
		// return new VectorSymbol(element as SVGSymbolElement);
		case 'text':
		// return new VectorText(element as SVGTextElement);
		case 'textPath':
		// return new VectorTextPath(element as SVGTextPathElement);
		case 'title':
		// return new VectorTitle(element as SVGTitleElement);
		case 'tspan':
		// return new VectorTspan(element as SVGTspanElement);
		case 'use':
			return new VectorUse(element as SVGUseElement);
		case 'view':
		// return new VectorView(element as SVGViewElement);
		default:
			throw new Error(`Unsupported SVG element: ${element.tagName}`);
	}
}
