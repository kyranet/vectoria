import { EditorSvgAny } from '#components';

export default function render(props: { el: SVGDefsElement }) {
	return (
		<div>
			{mapChildren(props.el, (child) => (
				<EditorSvgAny el={child as SVGElement} />
			))}
		</div>
	);
}
