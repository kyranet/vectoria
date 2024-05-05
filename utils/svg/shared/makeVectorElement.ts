import { VectorA } from '../VectorA';
import { VectorAnimate } from '../VectorAnimate';
import { VectorAnimateMotion } from '../VectorAnimateMotion';
import { VectorAnimateTransform } from '../VectorAnimateTransform';
import { VectorCircle } from '../VectorCircle';
import { VectorClipPath } from '../VectorClipPath';
import { VectorDefs } from '../VectorDefs';
import { VectorDescription } from '../VectorDescription';
import { VectorEllipse } from '../VectorEllipse';
import { VectorFEBlend } from '../VectorFEBlend';
import { VectorFEColorMatrix } from '../VectorFEColorMatrix';
import { VectorFEComponentTransfer } from '../VectorFEComponentTransfer';
import { VectorFEComposite } from '../VectorFEComposite';
import { VectorFEConvolveMatrix } from '../VectorFEConvolveMatrix';
import { VectorFEDiffuseLighting } from '../VectorFEDiffuseLighting';
import { VectorFEDisplacementMap } from '../VectorFEDisplacementMap';
import { VectorFEDistantLight } from '../VectorFEDistantLight';
import { VectorFEDropShadow } from '../VectorFEDropShadow';
import { VectorFEFlood } from '../VectorFEFlood';
import { VectorFEFuncAlpha } from '../VectorFEFuncAlpha';
import { VectorFEFuncBlue } from '../VectorFEFuncBlue';
import { VectorFEFuncGreen } from '../VectorFEFuncGreen';
import { VectorFEFuncRed } from '../VectorFEFuncRed';
import { VectorFEGaussianBlur } from '../VectorFEGaussianBlur';
import { VectorFEImage } from '../VectorFEImage';
import { VectorFEMerge } from '../VectorFEMerge';
import { VectorFEMergeNode } from '../VectorFEMergeNode';
import { VectorFEMorphology } from '../VectorFEMorphology';
import { VectorFEOffset } from '../VectorFEOffset';
import { VectorFEPointLight } from '../VectorFEPointLight';
import { VectorFESpecularLighting } from '../VectorFESpecularLighting';
import { VectorFESpotLight } from '../VectorFESpotLight';
import { VectorFETile } from '../VectorFETile';
import { VectorFETurbulence } from '../VectorFETurbulence';
import { VectorFilter } from '../VectorFilter';
import { VectorForeignObject } from '../VectorForeignObject';
import { VectorG } from '../VectorG';
import { VectorImage } from '../VectorImage';
import { VectorLine } from '../VectorLine';
import { VectorLinearGradient } from '../VectorLinearGradient';
import { VectorMarker } from '../VectorMarker';
import { VectorMask } from '../VectorMask';
import { VectorMetadata } from '../VectorMetadata';
import { VectorMotionPath } from '../VectorMotionPath';
import { VectorPath } from '../VectorPath';
import { VectorPattern } from '../VectorPattern';
import { VectorPolygon } from '../VectorPolygon';
import { VectorPolyline } from '../VectorPolyline';
import { VectorRadialGradient } from '../VectorRadialGradient';
import { VectorRect } from '../VectorRect';
import { VectorRoot } from '../VectorRoot';
import { VectorScript } from '../VectorScript';
import { VectorSet } from '../VectorSet';
import { VectorStop } from '../VectorStop';
import { VectorStyle } from '../VectorStyle';
import { VectorSwitch } from '../VectorSwitch';
import { VectorSymbol } from '../VectorSymbol';
import { VectorTSpan } from '../VectorTSpan';
import { VectorText } from '../VectorText';
import { VectorTextPath } from '../VectorTextPath';
import { VectorTitle } from '../VectorTitle';
import { VectorUse } from '../VectorUse';
import { VectorView } from '../VectorView';

export function makeVectorElement(element: SVGElement) {
	switch (element.tagName) {
		case 'a':
			return new VectorA(element as SVGAElement);
		case 'animate':
			return new VectorAnimate(element as SVGAnimateElement);
		case 'animateMotion':
			return new VectorAnimateMotion(element as SVGAnimateMotionElement);
		case 'animateTransform':
			return new VectorAnimateTransform(element as SVGAnimateTransformElement);
		case 'circle':
			return new VectorCircle(element as SVGCircleElement);
		case 'clipPath':
			return new VectorClipPath(element as SVGClipPathElement);
		case 'defs':
			return new VectorDefs(element as SVGDefsElement);
		case 'desc':
			return new VectorDescription(element as SVGDescElement);
		case 'ellipse':
			return new VectorEllipse(element as SVGEllipseElement);
		case 'feBlend':
			return new VectorFEBlend(element as SVGFEBlendElement);
		case 'feColorMatrix':
			return new VectorFEColorMatrix(element as SVGFEColorMatrixElement);
		case 'feComponentTransfer':
			return new VectorFEComponentTransfer(element as SVGFEComponentTransferElement);
		case 'feComposite':
			return new VectorFEComposite(element as SVGFECompositeElement);
		case 'feConvolveMatrix':
			return new VectorFEConvolveMatrix(element as SVGFEConvolveMatrixElement);
		case 'feDiffuseLighting':
			return new VectorFEDiffuseLighting(element as SVGFEDiffuseLightingElement);
		case 'feDisplacementMap':
			return new VectorFEDisplacementMap(element as SVGFEDisplacementMapElement);
		case 'feDistantLight':
			return new VectorFEDistantLight(element as SVGFEDistantLightElement);
		case 'feDropShadow':
			return new VectorFEDropShadow(element as SVGFEDropShadowElement);
		case 'feFlood':
			return new VectorFEFlood(element as SVGFEFloodElement);
		case 'feFuncA':
			return new VectorFEFuncAlpha(element as SVGFEFuncAElement);
		case 'feFuncB':
			return new VectorFEFuncBlue(element as SVGFEFuncBElement);
		case 'feFuncG':
			return new VectorFEFuncGreen(element as SVGFEFuncGElement);
		case 'feFuncR':
			return new VectorFEFuncRed(element as SVGFEFuncRElement);
		case 'feGaussianBlur':
			return new VectorFEGaussianBlur(element as SVGFEGaussianBlurElement);
		case 'feImage':
			return new VectorFEImage(element as SVGFEImageElement);
		case 'feMerge':
			return new VectorFEMerge(element as SVGFEMergeElement);
		case 'feMergeNode':
			return new VectorFEMergeNode(element as SVGFEMergeNodeElement);
		case 'feMorphology':
			return new VectorFEMorphology(element as SVGFEMorphologyElement);
		case 'feOffset':
			return new VectorFEOffset(element as SVGFEOffsetElement);
		case 'fePointLight':
			return new VectorFEPointLight(element as SVGFEPointLightElement);
		case 'feSpecularLighting':
			return new VectorFESpecularLighting(element as SVGFESpecularLightingElement);
		case 'feSpotLight':
			return new VectorFESpotLight(element as SVGFESpotLightElement);
		case 'feTile':
			return new VectorFETile(element as SVGFETileElement);
		case 'feTurbulence':
			return new VectorFETurbulence(element as SVGFETurbulenceElement);
		case 'filter':
			return new VectorFilter(element as SVGFilterElement);
		case 'foreignObject':
			return new VectorForeignObject(element as SVGForeignObjectElement);
		case 'g':
			return new VectorG(element as SVGGElement);
		case 'image':
			return new VectorImage(element as SVGImageElement);
		case 'line':
			return new VectorLine(element as SVGLineElement);
		case 'linearGradient':
			return new VectorLinearGradient(element as SVGLinearGradientElement);
		case 'marker':
			return new VectorMarker(element as SVGMarkerElement);
		case 'mask':
			return new VectorMask(element as SVGMaskElement);
		case 'metadata':
			return new VectorMetadata(element as SVGMetadataElement);
		case 'mpath':
			return new VectorMotionPath(element as SVGMPathElement);
		case 'path':
			return new VectorPath(element as SVGPathElement);
		case 'pattern':
			return new VectorPattern(element as SVGPatternElement);
		case 'polygon':
			return new VectorPolygon(element as SVGPolygonElement);
		case 'polyline':
			return new VectorPolyline(element as SVGPolylineElement);
		case 'radialGradient':
			return new VectorRadialGradient(element as SVGRadialGradientElement);
		case 'rect':
			return new VectorRect(element as SVGRectElement);
		case 'script':
			return new VectorScript(element as SVGScriptElement);
		case 'set':
			return new VectorSet(element as SVGSetElement);
		case 'stop':
			return new VectorStop(element as SVGStopElement);
		case 'style':
			return new VectorStyle(element as SVGStyleElement);
		case 'svg':
			return new VectorRoot(element as SVGSVGElement);
		case 'switch':
			return new VectorSwitch(element as SVGSwitchElement);
		case 'symbol':
			return new VectorSymbol(element as SVGSymbolElement);
		case 'text':
			return new VectorText(element as SVGTextElement);
		case 'textPath':
			return new VectorTextPath(element as SVGTextPathElement);
		case 'title':
			return new VectorTitle(element as SVGTitleElement);
		case 'tspan':
			return new VectorTSpan(element as SVGTSpanElement);
		case 'use':
			return new VectorUse(element as SVGUseElement);
		case 'view':
			return new VectorView(element as SVGViewElement);
		default:
			throw new Error(`Unsupported SVG element: ${element.tagName}`);
	}
}

export type VectorAny = ReturnType<typeof makeVectorElement>;
