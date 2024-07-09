<template>
	<icon-base-legacy>
		<clipPath id="icon-animation-on-clip-path">
			<path d="M 128,20 A 108,108 0,1,0 236,128 a 20,20 0,1,0 -40,0 A 68,68 0,1,1 128,60 a 20,20 0,1,0 0,-40" />
		</clipPath>

		<foreignObject width="256" height="256" clip-path="url(#icon-animation-on-clip-path)">
			<div class="icon-animation-on-gradient"></div>
		</foreignObject>

		<circle cx="128" cy="128" r="50" fill="currentColor" />
	</icon-base-legacy>
</template>

<style scoped lang="css">
.icon-animation-on-gradient {
	background: conic-gradient(in oklch shorter hue from 75deg, oklch(70% 0.158 246.71 / 0%), oklch(70% 0.128 49.76) 280deg);
	width: 100%;
	height: 100%;
}
</style>
