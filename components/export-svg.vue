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

			<div v-show="format !== 'image/svg+xml'" class="form-control mt-2">
				<div class="label">
					<span class="label-text">Transform</span>
				</div>
				<div class="flex flex-row gap-2">
					<label class="input input-bordered flex items-center gap-2">
						<Icon name="material-symbols:width-rounded" class="h-5 w-5 shrink-0" />
						<input v-model="smartWidth" type="number" class="grow" min="0" />
					</label>

					<label class="input input-bordered flex items-center gap-2">
						<Icon name="material-symbols:height-rounded" class="h-5 w-5 shrink-0" />
						<input v-model="smartHeight" type="number" class="grow" min="0" />
					</label>

					<button class="btn btn-neutral px-2" @click.prevent="toggleLock">
						<Icon v-if="locked" name="material-symbols:link-rounded" class="h-8 w-8 text-primary" />
						<Icon v-else name="material-symbols:link-off-rounded" class="h-8 w-8" />
					</button>

					<button class="btn btn-neutral px-2" @click.prevent="undo">
						<Icon name="material-symbols:undo-rounded" class="h-8 w-8" />
					</button>
				</div>
			</div>

			<label v-show="format === 'image/webp' || format === 'image/jpeg'" class="form-control mt-2">
				<div class="label">
					<span class="label-text">
						Quality
						<span role="alert" class="text-base-content/80">({{ Math.round(quality * 100) }}%)</span>
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

const width = ref(props.node.viewBox.baseVal.width);
const height = ref(props.node.viewBox.baseVal.height);
const ratio = ref(0);
const locked = ref(true);

const smartWidth = computed({
	get: () => width.value,
	set: (value) => {
		if (locked.value) height.value = Math.round(value * ratio.value);
		width.value = value;
	}
});
const smartHeight = computed({
	get: () => height.value,
	set: (value) => {
		if (locked.value) width.value = Math.round(value * ratio.value);
		height.value = value;
	}
});

function toggleLock() {
	if ((locked.value = !locked.value)) {
		ratio.value = width.value / height.value;
	}
}

function undo() {
	width.value = props.node.width.baseVal.value;
	height.value = props.node.height.baseVal.value;
	ratio.value = width.value / height.value;
}

const opened = ref(false);
function open() {
	opened.value = true;
	undo();
}

function cancel() {
	opened.value = false;
}

async function download() {
	const name = `image.${FileExtensions[format.value]}`;
	downloadURL(await render(props.node, format.value, quality.value, width.value, height.value), name);
}

const FileExtensions = {
	'image/png': 'png',
	'image/webp': 'webp',
	'image/jpeg': 'jpg',
	'image/svg+xml': 'svg'
} satisfies Record<`image/${'png' | 'webp' | 'jpeg' | 'svg+xml'}`, string>;

defineExpose({ open, cancel });
</script>
