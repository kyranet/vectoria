import { EditorSvgAny } from '#components';

export default function render(props: { el: SVGSVGElement }) {
	const viewBox = props.el.getAttribute('viewBox') ?? undefined;
	const x = props.el.getAttribute('x') ?? undefined;
	const y = props.el.getAttribute('y') ?? undefined;
	const width = props.el.getAttribute('width') ?? undefined;
	const height = props.el.getAttribute('height') ?? undefined;

	return (
		<svg viewBox={viewBox} x={x} y={y} width={width} height={height} class="absolute left-0 top-0 text-base-content">
			{mapChildren(props.el, (child) => (
				<EditorSvgAny el={child as SVGElement} />
			))}
		</svg>
	);
}
