export function render(svg: SVGSVGElement, format: `image/${'png' | 'webp' | 'jpeg' | 'svg+xml'}`, quality: number) {
	if (format === 'image/svg+xml') {
		return `data:image/svg+xml,${encodeURIComponent(new XMLSerializer().serializeToString(svg))}`;
	}

	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d')!;
	const img = new Image();

	canvas.width = img.width = svg.width.baseVal.value;
	canvas.height = img.height = svg.height.baseVal.value;

	return new Promise<string>((resolve, reject) => {
		img.onload = () => {
			ctx.drawImage(img, 0, 0);
			resolve(canvas.toDataURL(format, quality));
		};
		img.onerror = reject;
		img.src = render(svg, 'image/svg+xml', 1) as string;
	});
}

export function downloadURL(url: string, name: string) {
	console.log(url, name);
	const link = document.createElement('a');
	link.href = url;
	link.download = name;
	link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
}
