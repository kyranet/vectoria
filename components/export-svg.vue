<template>
	<div
		v-if="opened"
		class="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-base-300/80 backdrop-blur-sm"
		@click="cancel"
	>
		<form role="dialog" class="w-full max-w-lg rounded-xl bg-base-200 p-4 drop-shadow-md" @click.stop="noop" @submit.prevent="download">
			<h2 class="text-2xl font-bold">
				<Icon name="material-symbols:download" />
				Export
			</h2>

			<label class="form-control mt-2">
				<div class="label">
					<span class="label-text">Image Format</span>
				</div>
				<select v-model="format" class="select select-bordered">
					<option value="image/svg+xml">SVG</option>
					<option value="image/png">PNG</option>
					<option value="image/webp">WebP</option>
					<option value="image/jpeg">JPEG</option>
				</select>
			</label>

			<label v-show="format === 'image/webp' || format === 'image/jpeg'" class="form-control mt-2">
				<div class="label">
					<span class="label-text">
						Quality
						<span role="alert" class="text-base-content/80">({{ quality * 100 }}%)</span>
					</span>
				</div>
				<input v-model="quality" type="range" min="0" max="1" step="0.01" class="range" />
			</label>

			<button type="submit" class="btn btn-info float-right mt-6">Download</button>
		</form>
	</div>
</template>

<script setup lang="ts">
import { noop } from '@vueuse/core';

const props = defineProps<{ node: SVGSVGElement }>();

const format = ref<`image/${'png' | 'webp' | 'jpeg' | 'svg+xml'}`>('image/svg+xml');
const quality = ref(1);

const opened = ref(false);
function open() {
	opened.value = true;
}

function cancel() {
	opened.value = false;
}

async function download() {
	const name = `image.${FileExtensions[format.value]}`;
	downloadURL(await render(props.node, format.value, quality.value), name);
}

const FileExtensions = {
	'image/png': 'png',
	'image/webp': 'webp',
	'image/jpeg': 'jpg',
	'image/svg+xml': 'svg'
} satisfies Record<`image/${'png' | 'webp' | 'jpeg' | 'svg+xml'}`, string>;

defineExpose({ open, cancel });
</script>
