export default function render(props: { el: SVGUseElement }) {
	console.log({ use: props.el });
	return <div>Use</div>;
}
