import { EditorSvgDefsElement, EditorSvgGElement, EditorSvgPathElement, EditorSvgUseElement } from '#components';

export default function render(props: { el: SVGElement }) {
	switch (props.el.tagName) {
		case 'defs':
			return <EditorSvgDefsElement el={props.el as SVGDefsElement} />;
		case 'g':
			return <EditorSvgGElement el={props.el as SVGGElement} />;
		case 'path':
			return <EditorSvgPathElement el={props.el as SVGPathElement} />;
		case 'use':
			return <EditorSvgUseElement el={props.el as SVGUseElement} />;
		default:
			console.log({ unsupported: props.el });
			return <div></div>;
	}
}
