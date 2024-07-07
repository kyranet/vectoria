export function render(svg: SVGSVGElement, format: `image/${'png' | 'webp' | 'jpeg' | 'svg+xml'}`, quality: number, width: number, height: number) {
	if (format === 'image/svg+xml') {
		return renderSVG(svg);
	}

	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d')!;
	const img = new Image();

	canvas.width = img.width = width;
	canvas.height = img.height = height;

	return new Promise<string>((resolve, reject) => {
		img.onload = () => {
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			resolve(canvas.toDataURL(format, quality));
		};
		img.onerror = reject;
		img.src = renderSVG(svg);
	});
}

function renderSVG(svg: SVGSVGElement) {
	return `data:image/svg+xml,${encodeURIComponent(new XMLSerializer().serializeToString(svg))}`;
}

export function downloadURL(url: string, name: string) {
	console.log(url, name);
	const link = document.createElement('a');
	link.href = url;
	link.download = name;
	link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
}
