<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 90">
		<title>Vectoria</title>
		<defs>
			<marker :id="markerId" orient="auto" markerWidth="3" markerHeight="3" refX="0.1" refY="1.5">
				<path d="M 0 0 0 3 2 1.5 Z" class="fill-primary" />
			</marker>
		</defs>

		<g class="text-base-content" fill="currentColor">
			<path d="m 25 5 -20 0 45 78 20 0" />
			<path d="m 70 83 -20 0 45 -78 10 17.3" />
			<path d="m 95 5 45 78 -90 0" stroke="currentColor" fill="none" />
		</g>
		<g class="stroke-primary" stroke-width="4" fill="none" stroke-linecap="square">
			<path d="m 5 5 45 78 45 -78 45 78" :marker-end="`url(#${markerId})`" />
			<path d="m 110 31 a 30 30 0 0 1 -30 0" />
		</g>
	</svg>
</template>

<script setup lang="ts">
const markerId = useId();
</script>
