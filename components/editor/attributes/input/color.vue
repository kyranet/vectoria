<template>
	<div class="input flex items-center gap-1">
		<input v-model="value" class="min-w-0 grow" />
		<div class="relative -mr-2 h-5 w-5" :role="isSupported ? 'button' : 'none'" @click="isSupported && open()">
			<svg class="rounded-md border-2 border-transparent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<pattern id="color-checkerboard" viewBox="0 0 10 10" width="10" height="10" patternUnits="userSpaceOnUse">
					<rect x="5" y="0" width="5" height="5" fill="#DADADA" />
					<rect x="0" y="5" width="5" height="5" fill="#DADADA" />
				</pattern>

				<rect x="0" y="0" width="256" height="256" fill="#F3F3F3"></rect>
				<rect x="0" y="0" width="256" height="256" fill="url(#color-checkerboard)"></rect>
			</svg>
			<div class="absolute top-0 h-full w-full rounded-md border-2 border-base-300" :style="{ 'background-color': value }"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: string }>();
const value = useVModel(props, 'modelValue');

const { isSupported, open, sRGBHex } = useEyeDropper();
watch(sRGBHex, (hex) => {
	value.value = hex;
});
</script>
