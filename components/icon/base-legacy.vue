<template>
	<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" class="icon">
		<slot></slot>
	</svg>
</template>

<style scoped>
:deep(.element-icon-stroke) {
	fill: none;
	stroke: currentColor;
	stroke-width: 24px;
	stroke-linecap: round;
	stroke-linejoin: round;
}

:deep(.element-part-stroke) {
	fill: none;
	stroke: currentColor;
	stroke-width: 8px;
	stroke-linecap: round;
	stroke-linejoin: round;
}

:deep(.element-part-main-point) {
	fill: theme('colors.base-100');
	stroke: theme('colors.primary');
	stroke-width: 8px;
}

:deep(.element-part-start) {
	fill: theme('colors.primary');
}

:deep(.element-part-main-line) {
	stroke: theme('colors.primary');
}

:deep(.element-part-guide-point) {
	fill: theme('colors.base-100');
	fill: oklch(from theme('colors.base-content') calc(l - 0.4) c h);
	stroke: theme('colors.base-content');
	stroke: oklch(from theme('colors.base-content') calc(l - 0.4) c h);
	stroke-width: 8px;
}

:deep(.element-part-guide-line) {
	stroke-dasharray: 20px;
}

@supports (color: oklch(0% 0 0)) {
	:deep(.element-part-guide-line) {
		stroke: oklch(from theme('colors.base-content') calc(l - 0.4) c h);
	}
}

@supports not (color: oklch(0% 0 0)) {
	:deep(.element-part-guide-line) {
		stroke-dasharray: 20px;
	}
}
</style>
